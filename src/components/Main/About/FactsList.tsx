import uniqid from 'uniqid';
// @ts-ignore
import Typograf from 'typograf';
import { useContext, useMemo, useState } from 'react';
import styles from './About.module.sass';
import { shuffleArray } from './TagCloud';
import { LanguageContext } from '../../../context/Language';

/**
 * A function for importing data from a secret.
 * Just takes JSON, and parses it. turns object to 2-dimension array, shuffles it.
 * Otherwise, an object with error message is returned.
 */
const importFacts = (language: 'ru' | 'en') => {
  try {
    const rawFacts = JSON.parse(import.meta.env[`VITE_APP_ABOUT_ME_${language}`]!) as { [key: string]: string };
    return rawFacts;
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
function FactsListItem(props: { id: string, item: Array<string>, language: 'ru' | 'en' }) {
  const [status, setStatus] = useState(false);
  const { id, item, language } = props;
  const specials = (language === 'ru') ? ['образование', 'курсы'] : ['education', 'courses'];

  return (
    <li
      className={styles.list__item}
      key={id}
      data-id={specials.find((sample) => sample === item[0]) ? item[0] : id}
    >
      <button
        className={`${styles.fact_name} ${(status) ? styles.closed : styles.opened}`}
        type="button"
        // ...focus() -  a fix for Safari, where no focus => no blur can be recognised without it
        onClick={(event) => { (event.target as HTMLButtonElement).focus(); setStatus(!status); }}
        onBlur={() => setStatus((oldStatus) => ((oldStatus) ? !status : oldStatus))}
      >
        {(language === 'ru') ? `Про ${item[0]}` : `About ${item[0]}`}
      </button>
      <div className={`${styles.fact_text} ${(status) ? styles.opened : styles.closed}`}>{item[1]}</div>
    </li>
  );
}

const idsArray = (length: number) => [...Array(length)].map(() => uniqid());

/**
 * A component for rendering a list with cards
 * @constructor
 */
function FactsList() {
  const { language } = useContext(LanguageContext);

  const facts = Object.entries(importFacts(language.name));
  // @ts-ignore
  const indexes = useMemo(() => Array(facts.length).fill(1).map((value, i) => i), []);

  const order = useMemo(() => shuffleArray(indexes), []);
  const shuffledFacts = useMemo(() => shuffledAndCorrected(facts, order), [facts]);
  const ids = useMemo(() => idsArray(shuffledFacts.length), []);

  return (
    <ul className={styles.list}>
      {shuffledFacts.map((item, i) => (
        <FactsListItem item={item as string[]} key={ids[i]} id={ids[i]} language={language.name} />
      ))}
    </ul>
  );
}

export default FactsList;
