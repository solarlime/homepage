import uniqid from 'uniqid';
// @ts-ignore
import Typograf from 'typograf';
import {
  forwardRef, memo, useContext, useMemo, useRef,
} from 'react';
import Masonry from 'react-masonry-component';
import styles from './About.module.sass';
import { shuffleArray } from './TagCloud';
import { LanguageContext } from '../../../context/Language';
import { ThemeContext } from '../../../context/Theme';
import { ExtendedCSS } from '../../types';

/**
 * A function for importing data from a secret.
 * Just takes JSON, and parses it. turns object to 2-dimension array, shuffles it.
 * Otherwise, an object with error message is returned.
 */
const importFacts = (language: 'ru' | 'en') => {
  try {
    return JSON.parse(import.meta.env[`VITE_APP_ABOUT_ME_${language}`]!) as { [key: string]: string };
  } catch (error: unknown) {
    console.log((error as Error).message);
    return (language === 'ru')
      ? { ошибку: 'Что-то случилось, и факты не удалось загрузить. Проверьте консоль браузера и сообщите мне о проблеме через Telegram' }
      : { error: 'Something happened, so facts were not rendered. Please, check console and tell me about the problem via Telegram!' };
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
    return [
      key.replaceAll('_', ' '),
      typo.execute(value),
    ];
  });
};

/**
 * A component for rendering a card
 * @param props - id: a unique id, item: an array with a fact name ([0]) & a fact text ([1])
 * @constructor
 */
const FactsListItem = forwardRef((props: { id: string, item: Array<string>, language: 'ru' | 'en' }, ref) => {
  const { theme } = useContext(ThemeContext);
  const textRef = useRef<HTMLDivElement>(null);
  const { id, item, language } = props;
  const specials = (language === 'ru') ? ['образование', 'курсы'] : ['education', 'courses'];

  return (
    <li
      className={styles.list__item}
      key={id}
      data-id={specials.find((sample) => sample === item[0]) ? item[0] : id}
    >
      <button
        className={`${styles.button}`}
        type="button"
        style={{
          '--extra-color': theme.backgroundColor,
        } as ExtendedCSS}
        onClick={(event) => {
          // ...focus() -  a fix for Safari, where no focus => no blur can be recognised without it
          (event.target as HTMLButtonElement).focus();
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
        {(language === 'ru') ? `Про ${item[0]}` : `About ${item[0]}`}
      </button>
      <div className={`${styles.fact_text}`} ref={textRef}>{item[1]}</div>
    </li>
  );
});

const idsArray = (length: number) => [...Array(length)].map(() => uniqid());

/**
 * A component for rendering a list with cards
 * @constructor
 */
const FactsList = memo(() => {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);

  const facts = Object.entries(importFacts(language.name));
  // @ts-ignore
  const indexes = useMemo(() => Array(facts.length).fill(1).map((value, i) => i), []);

  const order = useMemo(() => shuffleArray(indexes), []);
  const shuffledFacts = useMemo(() => shuffledAndCorrected(facts, order), [facts]);
  const ids = useMemo(() => idsArray(shuffledFacts.length), []);
  const gap = parseInt(window.getComputedStyle(document.body).getPropertyValue('--gap'), 10);

  return ( // @ts-ignore
    <Masonry
      className={styles.list}
      elementType="ul"
      options={{
        gutter: (gap) || 40,
        transitionDuration: '0.6s',
      }}
      ref={ref}
    >

      {shuffledFacts.map((item, i) => ( // @ts-ignore
        <FactsListItem
          item={item as string[]}
          key={ids[i]}
          id={ids[i]}
          ref={ref}
          language={language.name}
        />
      ))}
    </Masonry>
  );
});

export default FactsList;
