import uniqid from 'uniqid';
import React, { useState } from 'react';
import styles from './About.module.sass';
import { shuffleArray } from './TagCloud';

/**
 * A function for preparing data for a render.
 * Takes JSON, turns object to 2-dimension array, shuffles it.
 * Othervise, an array with error message is returned.
 */
const shuffled = () => {
  try {
    const facts = JSON.parse(process.env.REACT_APP_ABOUT_ME!) as Object;
    return shuffleArray(
      Object.entries(facts)
        .map((item) => {
          const newFactName = item[0].replaceAll('_', ' ');
          return [newFactName, item[1]];
        }),
    );
  } catch (error: unknown) {
    console.log((error as Error).message);
    const errorArray = [];
    errorArray.push(['error', 'Something happened, so facts were not rendered. Please, check console and tell me about the problem via Telegram!']);
    return errorArray;
  }
};

/**
 * A component for rendering a card
 * @param props - id: a unique id, item: an array with a fact name ([0]) & a fact text ([1])
 * @constructor
 */
function FactsListItem(props: { id: string, item: Array<string> }) {
  const [status, setStatus] = useState(false);
  const { id, item } = props;

  return (
    <li className={styles.list__item} key={id}>
      <button
        className={`${styles.fact_name} ${(status) ? styles.closed : styles.opened}`}
        type="button"
        // ...focus() -  a fix for Safari, where no focus => no blur can be recognised without it
        onClick={(event) => { (event.target as HTMLButtonElement).focus(); setStatus(!status); }}
        onBlur={() => setStatus((oldStatus) => ((oldStatus) ? !status : oldStatus))}
      >
        {`About ${item[0]}`}
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
  return (
    <ul className={styles.list}>
      {shuffled().map((item) => {
        const id = uniqid();
        return (
          <FactsListItem item={item as Array<string>} key={id} id={id} />
        );
      })}
    </ul>
  );
}

export default FactsList;
