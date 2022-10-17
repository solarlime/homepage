import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styles from './Project.module.sass';
import { ThemeContext } from '../../../../Theme';
import { LanguageContext } from '../../../../Language';
import { getContent, PageComponent } from '../../../Content/getContent';
import getProperties from './getProperties';
import transform, { PageProps } from './transform';

function Image(props: {
  kebabedProjectName: string, projectName: string, styleProp: string, callback?: Function
}) {
  const {
    kebabedProjectName, projectName, styleProp, callback,
  } = props;

  return (
    <img
      className={styleProp}
      sizes="100w"
      srcSet={`${process.env.REACT_APP_FILES}/projects/${kebabedProjectName}320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/${kebabedProjectName}640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/${kebabedProjectName}1280.jpg 1280w`}
      src={`${process.env.REACT_APP_FILES}/projects/${kebabedProjectName}.jpg`}
      alt={`${projectName}`}
      onLoad={() => { if (callback) callback(); }}
    />
  );
}

Image.defaultProps = {
  callback: undefined,
};

function Project() {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const scrollingSpaceRef = useRef(null);
  const pictureRef = useRef(null);
  const [content, setContent] = useState({} as PageComponent);
  const [height, setHeight] = useState(0);
  const initProps: PageProps = {
    visibility: {
      header: 'visible',
      original_aim: '',
      total_aim: '',
    },
    spaceHeight: 0,
    scrollPoint: 0,
  };
  const [pageProps, setPageProps] = useState(initProps);
  const isDesktop = (document.documentElement.clientWidth > 600);
  const delay = 800;

  const detectSize = () => {
    const space = scrollingSpaceRef.current! as HTMLElement;
    const picture = pictureRef.current! as HTMLElement;
    if (isDesktop) {
      setHeight(
        picture.scrollWidth + picture.offsetHeight + delay * 2,
      );
    } else {
      setHeight(
        picture.scrollWidth + space.offsetWidth + picture.offsetHeight + delay * 2,
      );
    }
  };

  const properties = getProperties(location);
  const [state, setState] = useState(properties);

  useEffect(() => {
    const space = scrollingSpaceRef.current! as HTMLElement;

    let scrollTimeout: NodeJS.Timeout;

    const excessScrollsHandler = () => {
      space.style.overflowY = 'hidden';
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        space.removeEventListener('scroll', excessScrollsHandler);
        space.style.overflowY = 'scroll';
      }, 100);
    };

    space.addEventListener('scroll', excessScrollsHandler);
    space.dispatchEvent(new Event('scroll'));

    getContent(language, 'project')
      .then((res) => { setContent(res); });
    return () => {
      space.scrollTop = 0;
    };
  }, [language, state]);

  if (!properties || !state) {
    return (
      <Navigate to="/not-found" />
    );
  }

  const projectChanged = (properties.id !== state.id);
  if (projectChanged) {
    setState(properties);
  }

  return (
    <div
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <div
        id={styles.project}
        className={styles.base__item}
        ref={scrollingSpaceRef}
        onScroll={(event) => transform(
          event.target as HTMLDivElement,
          pageProps,
          setPageProps,
          delay,
          isDesktop,
        )}
      >
        <h1 className={`${styles.base__item__title} ${styles.project__title}`} style={{ visibility: `${pageProps.visibility.header}` }}>{state.projectName}</h1>
        <div className={styles.project__picture} style={{ height: `${height}px` }}>
          <div className={styles.wrapper}>
            <div
              className={styles.wrapper__picture}
              ref={pictureRef}
            >
              <picture className={styles.picture}>
                <Image
                  kebabedProjectName={state.kebabedProjectName}
                  projectName={state.projectName}
                  styleProp={styles.img}
                  callback={detectSize}
                />
              </picture>
            </div>
            <div className={styles.aim}>
              <div className={`${styles.aim_original} ${pageProps.visibility.original_aim} ${(isDesktop) ? styles.half : styles.full}`}>
                <h2 className={styles.aim__title}>Изначальная цель:</h2>
                <p className={styles.aim__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris a purus ac elit eleifend rutrum. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Praesent vitae commodo purus. Aliquam eu efficitur massa.
                </p>
              </div>
              <div className={`${styles.aim_total} ${pageProps.visibility.total_aim} ${(isDesktop) ? styles.half : styles.full}`}>
                <h2 className={styles.aim__title}>Конечная цель:</h2>
                <p className={styles.aim__text}>
                  Etiam faucibus odio quis nibh imperdiet vulputate. Nam molestie urna nulla,
                  sit amet faucibus dolor ultricies quis. Proin elementum dictum scelerisque.
                  Vivamus ultricies, leo sit amet viverra vulputate, ligula nisi maximus arcu,
                  in tempus orci ante sit amet enim. Mauris rutrum felis nisl, quis commodo
                  tortor blandit at. Nulla ut commodo mauris. Nulla facilisi. Cras ac nisl mi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project__rest}>
          <div className={`${styles.rest__item} ${styles.rest__item_result}`} style={{ backgroundColor: theme.backgroundColor }}>
            <h2 className={styles.rest__item__title}>Результат:</h2>
            <ul className={styles.rest__item__list}>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris a purus ac elit eleifend rutrum.
              </li>
              <li>
                Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </li>
              <li>Praesent vitae commodo purus. Aliquam eu efficitur massa.</li>
              <li>
                Etiam faucibus odio quis nibh imperdiet vulputate.
                Nam molestie urna nulla, sit amet faucibus dolor ultricies quis.
              </li>
              <li>
                Proin elementum dictum scelerisque. Vivamus ultricies, leo sit amet viverra
                vulputate, ligula nisi maximus arcu, in tempus orci ante sit amet enim.
              </li>
              <li>
                Mauris rutrum felis nisl, quis commodo tortor blandit at.
                Nulla ut commodo mauris. Nulla facilisi. Cras ac nisl mi.
              </li>
            </ul>
          </div>
          <div className={`${styles.rest__item} ${styles.rest__item_drawbacks}`}>
            <h2 className={styles.rest__item__title}>Недостатки:</h2>
            <ul className={styles.rest__item__list}>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris a purus ac elit eleifend rutrum.
              </li>
              <li>
                Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </li>
              <li>{content.some_content}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Project, Image };
