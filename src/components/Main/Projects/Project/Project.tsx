import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styles from './Project.module.sass';
import projectsObjectList, { ProjectsObject } from '../projectsList';
import { ThemeContext } from '../../../../Theme';
import { LanguageContext } from '../../../../Language';
import { getContent, PageComponent } from '../../../Content/getContent';

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
  const initVisibility: {
    header: 'visible' | 'hidden',
    [key: string]: string,
  } = {
    header: 'visible',
    original_aim: styles.disappear,
    total_aim: styles.disappear,
  };
  const [visibility, setVisibility] = useState(initVisibility);
  const isDesktop = (document.documentElement.clientWidth > 600);
  const delay = 800;

  const transform = () => {
    const space = scrollingSpaceRef.current! as HTMLElement;
    // picture = image + margins, picture >= image
    const picture = pictureRef.current! as HTMLElement;
    const image = picture.querySelector(`.${styles.img}`)! as HTMLImageElement;
    const aim = space.querySelector(`.${styles.aim}`)! as HTMLElement;
    // Picture width can change from image.width to space.width. This fixes any troubles
    const pictureFix = (picture.scrollWidth - image.scrollWidth) / 2;
    const breakpoints = {
      initialScroll: picture.offsetHeight,
      pictureHalf: picture.offsetHeight + picture.scrollWidth - space.offsetWidth / 2 - pictureFix,
      pictureFull: picture.offsetHeight + picture.scrollWidth - pictureFix,
    };
    // Here a picture begins scrolling
    if (space.scrollTop > breakpoints.initialScroll) {
      if (visibility.header === 'visible') setVisibility((oldVisibility) => ({ ...oldVisibility, header: 'hidden' }));
      picture.style.transform = `matrix(1, 0, 0, 1, ${-space.scrollTop + breakpoints.initialScroll}, 0)`;
      // Behaviour differs on desktops / tablets and mobiles.
      // There's no enough space to put both aim blocks together
      if (space.scrollTop > breakpoints.pictureHalf && isDesktop) {
        // Show the original aim & fix the picture
        if (visibility.original_aim === styles.disappear) {
          setVisibility((oldVisibility) => ({ ...oldVisibility, original_aim: styles.appear }));
        }
        picture.style.transform = `matrix(1, 0, 0, 1, ${-(picture.scrollWidth - space.offsetWidth / 2 - pictureFix)}, 0)`;
        // The delay is needed to give some space for reading without a chance to scroll over
        if (space.scrollTop > breakpoints.pictureHalf + delay) {
          // Then, continue moving
          picture.style.transform = `matrix(1, 0, 0, 1, ${-space.scrollTop + breakpoints.initialScroll + delay}, 0)`;
          aim.style.transform = `matrix(1, 0, 0, 1, ${-space.scrollTop + breakpoints.pictureHalf + delay}, 0)`;
          // Until the picture is gone
          if (space.scrollTop > breakpoints.pictureFull + delay) {
            // Finally, fix aims
            aim.style.transform = `matrix(1, 0, 0, 1, ${-picture.offsetWidth / 2}, 0)`;
            if (visibility.total_aim === styles.disappear) {
              setVisibility((oldVisibility) => ({ ...oldVisibility, total_aim: styles.appear }));
            }
          } else if (visibility.total_aim === styles.appear) {
            setVisibility((oldVisibility) => ({ ...oldVisibility, total_aim: styles.disappear }));
          }
        } else {
          aim.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        }
        // Another logic is for mobiles
        // It's needed to scroll the whole picture
      } else if (space.scrollTop > breakpoints.pictureFull && !isDesktop) {
        if (visibility.original_aim === styles.disappear) {
          setVisibility((oldVisibility) => ({ ...oldVisibility, original_aim: styles.appear }));
        }
        // An extra pixel is added because of a visible border
        picture.style.transform = `matrix(1, 0, 0, 1, ${-(picture.scrollWidth - pictureFix + 1)}, 0)`;
        // Show the original aim after scrolling the picture
        if (space.scrollTop > breakpoints.pictureFull + delay) {
          picture.style.transform = `matrix(1, 0, 0, 1, ${-space.scrollTop + breakpoints.initialScroll + delay}, 0)`;
          aim.style.transform = `matrix(1, 0, 0, 1, ${-space.scrollTop + breakpoints.initialScroll + delay + picture.scrollWidth - pictureFix}, 0)`;
          // The next step is to scroll over the first aim
          if (space.scrollTop > breakpoints.pictureFull + delay + space.offsetWidth) {
            picture.style.transform = `matrix(1, 0, 0, 1, ${-(picture.scrollWidth + space.offsetWidth - pictureFix)}, 0)`;
            aim.style.transform = `matrix(1, 0, 0, 1, ${-space.offsetWidth}, 0)`;
            // And show the second aim
            if (visibility.total_aim === styles.disappear) {
              setVisibility((oldVisibility) => ({ ...oldVisibility, total_aim: styles.appear }));
            }
          } else if (visibility.total_aim === styles.appear) {
            setVisibility((oldVisibility) => ({ ...oldVisibility, total_aim: styles.disappear }));
          }
        } else {
          aim.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        }
      } else if (visibility.original_aim === styles.appear) {
        setVisibility((oldVisibility) => ({ ...oldVisibility, original_aim: styles.disappear }));
      }
    } else {
      if (visibility.header === 'hidden') setVisibility((oldVisibility) => ({ ...oldVisibility, header: 'visible' }));
      picture.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
  };

  const detectSize = () => {
    const space = scrollingSpaceRef.current! as HTMLElement;
    const picture = pictureRef.current! as HTMLElement;
    space.scrollTop = 0;
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

  let state = location.state as ProjectsObject;

  useEffect(() => {
    getContent(language, 'project')
      .then((res) => { setContent(res); });
  }, [language]);

  // Fallback
  if (!state) {
    console.log('fallback');
    const mayBeProject = location.pathname.replace('/projects/', '');
    const project = projectsObjectList.find((item) => item.kebabedProjectName === mayBeProject);
    if (!project) {
      return (
        <Navigate to="/not-found" />
      );
    }
    state = {
      id: project.id,
      projectName: project.projectName,
      kebabedProjectName: project.kebabedProjectName,
    };
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
        onScroll={transform}
      >
        <h1 className={`${styles.base__item__title} ${styles.project__title}`} style={{ visibility: `${visibility.header}` }}>{state.projectName}</h1>
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
              <p className={`${styles.aim_original} ${visibility.original_aim} ${(isDesktop) ? styles.half : styles.full}`}>
                Изначальная цель:
                <br />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris a purus ac elit eleifend rutrum. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Praesent vitae commodo purus. Aliquam eu efficitur massa.
                </span>
              </p>
              <p className={`${styles.aim_total} ${visibility.total_aim} ${(isDesktop) ? styles.half : styles.full}`}>
                Конечная цель:
                <br />
                <span>
                  Etiam faucibus odio quis nibh imperdiet vulputate. Nam molestie urna nulla,
                  sit amet faucibus dolor ultricies quis. Proin elementum dictum scelerisque.
                  Vivamus ultricies, leo sit amet viverra vulputate, ligula nisi maximus arcu,
                  in tempus orci ante sit amet enim. Mauris rutrum felis nisl, quis commodo
                  tortor blandit at. Nulla ut commodo mauris. Nulla facilisi. Cras ac nisl mi.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.project__rest}>
          <p>
            Результат:
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris a purus ac elit eleifend rutrum. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Praesent vitae commodo purus. Aliquam eu efficitur massa.
            </span>
          </p>
          <p>
            Недостатки:
            <br />
            <span>
              Etiam faucibus odio quis nibh imperdiet vulputate. Nam molestie urna nulla,
              sit amet faucibus dolor ultricies quis. Proin elementum dictum scelerisque.
              Vivamus ultricies, leo sit amet viverra vulputate, ligula nisi maximus arcu,
              in tempus orci ante sit amet enim. Mauris rutrum felis nisl, quis commodo
              tortor blandit at. Nulla ut commodo mauris. Nulla facilisi. Cras ac nisl mi.
            </span>
          </p>
          <p>
            {content.some_content}
          </p>
        </div>
      </div>
    </div>
  );
}

export { Project, Image };
