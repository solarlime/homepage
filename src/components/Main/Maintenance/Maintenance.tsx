import { useContext, memo } from 'react';
import { LanguageContext } from '../../../context/Language';
import styles from './Maintenance.module.sass';

const Maintenance = memo(() => {
  const { language } = useContext(LanguageContext);

  return (
    <article className={`${styles.base} ${styles.maintenance}`}>
      <section className={styles.base__item}>
        <h1 className={styles.base__item__title}>{(language.name === 'ru') ? 'Вот это да!' : 'Wow!'}</h1>
        <p>{(language.name === 'ru') ? 'Сейчас сайт в процессе обновления. Скоро он станет лучше!' : 'This website is updating now. It\'s going to be better!'}</p>
        <p>{(language.name === 'ru') ? 'Для связи используйте ссылки, расположенные выше.' : 'You can use links above to contact me.'}</p>
      </section>
    </article>
  );
});

Maintenance.whyDidYouRender = true;

export default Maintenance;
