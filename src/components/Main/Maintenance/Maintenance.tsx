import { memo } from 'react';

import styles from './Maintenance.module.sass';
import { useAppSelector } from '../../../redux/app/hooks';
import { selectLanguageName } from '../../../redux/languageSlice';

const Maintenance = memo(() => {
  const languageName = useAppSelector(selectLanguageName);

  return (
    <article className={`${styles.base} ${styles.maintenance}`}>
      <section className={styles.base__item}>
        <h1 className={styles.base__item__title}>{(languageName === 'ru') ? 'Вот это да!' : 'Wow!'}</h1>
        <p>{(languageName === 'ru') ? 'Сейчас сайт в процессе обновления. Скоро он станет лучше!' : 'This website is updating now. It\'s going to be better!'}</p>
        <p>{(languageName === 'ru') ? 'Для связи используйте ссылки, расположенные выше.' : 'You can use links above to contact me.'}</p>
      </section>
    </article>
  );
});

Maintenance.whyDidYouRender = true;

export default Maintenance;
