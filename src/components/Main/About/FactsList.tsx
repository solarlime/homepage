import uniqid from 'uniqid';
// @ts-ignore
import Typograf from 'typograf';
import { useContext, useMemo, useState } from 'react';
import styles from './About.module.sass';
import { shuffleArray } from './TagCloud';
import { LanguageContext } from '../../../context/Language';

/**
 * A function for preparing data for a render.
 * Takes JSON, turns object to 2-dimension array, shuffles it.
 * Otherwise, an array with error message is returned.
 */
const shuffled = (language: 'ru' | 'en') => {
  try {
    const typo = new Typograf({ locale: ['ru', 'en-US'] });
    const facts = JSON.parse(import.meta.env[`VITE_APP_ABOUT_ME_${language}`]!) as { [key: string]: string };
    return shuffleArray(
      Object.entries(facts)
        .map((item) => {
          const newFactName = item[0].replaceAll('_', ' ');
          return [newFactName, typo.execute(item[1])];
        }),
    );
  } catch (error: unknown) {
    console.log((error as Error).message);
    return (language === 'ru')
      ? [['ошибку', 'Что-то случилось, и факты не удалось загрузить. Проверьте консоль браузера и сообщите мне о проблеме через Telegram']]
      : [['error', 'Something happened, so facts were not rendered. Please, check console and tell me about the problem via Telegram!']];
  }
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

/**
 * A component for rendering a list with cards
 * @constructor
 */
function FactsList() {
  const { language } = useContext(LanguageContext);

  return useMemo(() => (
    <ul className={styles.list}>
      {shuffled(language.name).map((item) => {
        const id = uniqid();
        return (
          <FactsListItem item={item as Array<string>} key={id} id={id} language={language.name} />
        );
      })}
    </ul>
  ), [language]);
}

export default FactsList;
