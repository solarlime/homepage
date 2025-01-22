import uniqid from 'uniqid';
import Typograf from 'typograf';
import { forwardRef, memo, useMemo, useRef } from 'react';
import Masonry from 'react-masonry-component';

import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import type { ExtendedCSS } from '../types';

import styles from './About.module.sass';
import { shuffleArray } from './TagCloud';
import { useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/theme/themeSlice';
import { selectLanguageName } from '../../redux/language/languageSlice';
import SkeletonComponent from '../SkeletonComponent';

/**
 * A function for importing data from a secret.
 * Just takes JSON, and parses it. turns object to 2-dimension array, shuffles it.
 * Otherwise, an object with error message is returned.
 */
const importFacts = (language: 'ru' | 'en') => {
  try {
    return JSON.parse(import.meta.env[`VITE_APP_ABOUT_ME_${language}`]!) as {
      [key: string]: string;
    };
  } catch (error: unknown) {
    console.log((error as Error).message);
    return language === 'ru'
      ? {
          ошибку:
            'Что-то случилось, и факты не удалось загрузить. Проверьте консоль браузера и сообщите мне о проблеме через Telegram',
        }
      : {
          error:
            'Something happened, so facts were not rendered. Please, check console and tell me about the problem via Telegram!',
        };
  }
};

/**
 * A function for preparing data for a render.
 * Takes 2-dimension array, corrects it and shuffles with an order given in a separate array.
 */
const shuffledAndCorrected = (facts: string[][], order: Array<number>) => {
  const typo = new Typograf({ locale: ['ru', 'en-US'] });
  return order.map((i) => {
    const [key, value] = facts[i];
    return [key.replaceAll('_', ' '), typo.execute(value)];
  });
};

/**
 * A component for rendering a card
 * @param props - id: a unique id, item: an array with a fact name ([0]) & a fact text ([1])
 * @constructor
 */
const FactsListItem = forwardRef(
  (props: { id: string; item: Array<string> }, ref) => {
    const theme = useAppSelector(selectTheme);
    const languageName = useAppSelector(selectLanguageName);
    const textRef = useRef<HTMLDivElement>(null);
    const { id, item } = props;
    const specials =
      languageName === 'ru'
        ? ['образование', 'курсы']
        : ['education', 'courses'];

    return (
      <li
        className={styles.list__item}
        key={id}
        data-id={specials.find((sample) => sample === item[0]) ? item[0] : id}
      >
        <button
          className={`${styles.button} ${styles.fact_name}`}
          type="button"
          style={
            {
              '--extra-color': theme.backgroundColor,
            } as ExtendedCSS
          }
          onClick={(event) => {
            const eventTarget = event.target as HTMLButtonElement | HTMLElement;
            const target =
              eventTarget.tagName.toLowerCase() === 'button'
                ? eventTarget
                : eventTarget.closest('button')!;
            // ...focus() -  a fix for Safari, where no focus => no blur can be recognised without it
            target.focus();
            // @ts-ignore
            if (textRef.current && ref.current) {
              textRef.current.classList.toggle(styles.opened);
              // @ts-ignore
              ref.current.masonry.layout();
            }
          }}
          onBlur={() => {
            // @ts-ignore
            if (textRef.current && ref.current) {
              textRef.current.classList.remove(styles.opened);
              // @ts-ignore
              ref.current.masonry.layout();
            }
          }}
        >
          <span>
            {languageName === 'ru' ? `Про ${item[0]}` : `About ${item[0]}`}
          </span>
        </button>
        <div
          className={`${styles.fact_text}`}
          data-testid="description"
          ref={textRef}
        >
          {item[1]}
        </div>
      </li>
    );
  },
);

const idsArray = (length: number) => [...Array(length)].map(() => uniqid());

/**
 * A component for rendering a list with cards
 * @constructor
 */
const FactsList = memo(
  (props: {
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
  }) => {
    const { isLoading, error } = props;
    const languageName = useAppSelector(selectLanguageName);
    const ref = useRef(null);

    const facts = Object.entries(importFacts(languageName));
    // @ts-ignore
    const indexes = useMemo(
      () =>
        Array(facts.length)
          .fill(1)
          .map((_value, i) => i),
      [],
    );

    const order = useMemo(() => shuffleArray(indexes), []);
    const shuffledFacts = useMemo(
      () => shuffledAndCorrected(facts, order),
      [facts],
    );
    const ids = useMemo(() => idsArray(shuffledFacts.length), []);
    const gap = parseInt(
      window.getComputedStyle(document.body).getPropertyValue('--small-gap'),
      10,
    );

    return (
      // @ts-ignore
      <Masonry
        className={styles.list}
        elementType="ul"
        options={{
          gutter: gap ? (gap as number) / 2 : 20,
          transitionDuration: '0.6s',
        }}
        ref={ref}
      >
        {shuffledFacts.map((item, i) =>
          isLoading || error ? (
            <SkeletonComponent
              key={ids[i]}
              error={error}
              isLoading={isLoading}
              content={undefined}
            />
          ) : (
            <FactsListItem
              item={item as string[]}
              key={ids[i]}
              id={ids[i]}
              ref={ref}
            />
          ),
        )}
      </Masonry>
    );
  },
);

FactsList.whyDidYouRender = true;

export default FactsList;
