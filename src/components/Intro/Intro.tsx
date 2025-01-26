import { useState, useEffect, memo } from 'react';
import uniqid from 'uniqid';

import type { ExtendedCSS } from '../types';

import styles from './Intro.module.sass';
import TagCloud from '../About/TagCloud';
import Bottom from '../Bottom/Bottom';
import getProjectsObjectList, { ProjectsObject } from './projectsList';
import { PageComponent } from '../types';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/theme/themeSlice';
import { selectLanguage } from '../../redux/language/languageSlice';
import { useGetContentByComponentQuery } from '../../redux/content/contentSlice';

import Avatar from './SVGComponents/Avatar';
import ImacExtras from './SVGComponents/ImacExtras';
import Cat from './SVGComponents/Cat';
import Tambourines from '../../img/tambourines.svg?react';
import SkeletonComponent from '../SkeletonComponent';
import { getSource, selectSource } from '../../redux/content/sourceSlice';
import Project from './Project';

/**
 * A component for rendering a name.
 * Takes initName and turns it into finalName
 * @constructor
 */
function Name(props: { content: PageComponent; textColor: string }) {
  const { content, textColor } = props;
  const initName = 'solarlime';
  const finalName = content.title_name;
  const [name, setName] = useState(initName);
  const [mode, setMode] = useState('decrease');

  useEffect(() => {
    let timeout: NodeJS.Timeout | number | undefined;
    if (mode === 'decrease') {
      timeout = setTimeout(
        () => {
          setName((oldString) => {
            //  Before the first letter it is needed to change the mode to begin typing the final name
            if (oldString.length === 1) setMode('increase');
            return oldString.substring(0, oldString.length - 1);
          });
          // A delay must be more before beginning than during the transformation
        },
        name === initName ? 2000 : 200,
      );
    } else {
      timeout = setTimeout(() => {
        setName((oldString) => finalName.substring(0, oldString.length + 1));
        if (name === finalName) {
          setMode('finished');
        }
      }, 250);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <span className={styles.name} style={{ color: textColor }}>
      {`${mode === 'finished' ? finalName : name}${name === initName || mode === 'finished' ? '' : '_'}`}
    </span>
  );
}

/**
 * A component for a main page
 * @constructor
 */
const Intro = memo(() => {
  const theme = useAppSelector(selectTheme);
  const language = useAppSelector(selectLanguage);
  const source = useAppSelector(selectSource);
  const dispatch = useAppDispatch();
  const {
    data: content,
    error,
    isLoading,
  } = useGetContentByComponentQuery({
    languageName: language.name,
    component: 'intro',
  });
  const {
    data: projects,
    error: projectsError,
    isLoading: projectsAreLoading,
  } = useGetContentByComponentQuery({ file: `/content/projects.json` });
  const [projectsObjectList, setProjectsObjectList] = useState(
    null as ProjectsObject[] | null,
  );

  const focused: HTMLAnchorElement | null = null;

  useEffect(() => {
    if (!source) dispatch(getSource());
  }, []);

  useEffect(() => {
    if (projects) {
      setProjectsObjectList(getProjectsObjectList(projects));
    }
  }, [projects]);

  return (
    <article
      className={styles.base}
      style={
        {
          color: theme.color,
          backgroundColor: theme.backgroundColor,
          '--green-color': theme.accentColor,
          '--not-green-color': theme.extraColor,
        } as ExtendedCSS
      }
    >
      <section id="me" className={`${styles.intro}`}>
        <h1 className={styles.intro__title}>
          <p className={`${styles.base__item__title} ${styles.big__title}`}>
            <SkeletonComponent
              error={error}
              isLoading={isLoading}
              content={content?.title}
            />{' '}
            {error || isLoading ? (
              ''
            ) : (
              <Name content={content} textColor={theme.accentColor} />
            )}
          </p>
          <p className={styles.intro__title_subtitle}>
            <SkeletonComponent
              error={error}
              isLoading={isLoading}
              content={content?.subtitle}
            />
          </p>
        </h1>
        <Avatar
          className={styles.intro__image}
          green={theme.accentColor}
          notGreen={theme.extraColor}
        />
        <div className={styles.intro__imac}>
          <div
            className={`${styles.imac} ${theme.name === 'light' ? styles.imac_light : styles.imac_dark}`}
            style={{ color: theme.color }}
          >
            <p>
              <SkeletonComponent
                error={error}
                isLoading={isLoading}
                content={content?.imac}
              />
            </p>
          </div>
          <div className={styles['imac-space']} />
        </div>
      </section>
      <section id="table" className={`${styles.intro} ${styles.base__item}`}>
        <div className={styles.intro__table}>
          <ImacExtras
            className={styles['imac-extras']}
            notGreen={theme.extraColor}
          />
          <div
            className={styles.table}
            style={{
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <h2
              className={`${styles.table__title} ${styles.base__item__title}`}
            >
              <SkeletonComponent
                error={error}
                isLoading={isLoading}
                content={content?.table_title}
              />
            </h2>
            <div className={styles.table__cloud}>
              <TagCloud error={error} isLoading={isLoading} />
            </div>
            <Cat
              className={styles.table__cat}
              eyesColor={theme.name === 'dark' ? theme.extraColor : theme.color}
            />
            <div className={styles.table__hole} />
          </div>
        </div>
      </section>
      <section id="projects" className={`${styles.intro} ${styles.base__item}`}>
        <div className={styles.intro__projects}>
          <h2
            className={`${styles.base__item__title} ${styles.projects_title}`}
          >
            <SkeletonComponent
              error={error}
              isLoading={isLoading}
              content={content?.projects_title}
            />
          </h2>
          <ul className={styles.projects_list}>
            <SkeletonComponent
              error={projectsError}
              isLoading={projectsAreLoading}
              content={undefined}
            >
              {projectsObjectList === null
                ? null
                : projectsObjectList.map((project, index) => {
                    const orderColor =
                      index % 2 === 0 ? theme.accentColor : theme.extraColor;
                    return (
                      <Project
                        key={project.id}
                        projectName={project.projectName}
                        kebabedProjectName={project.kebabedProjectName}
                        themeColor={theme.color}
                        backgroundColor={theme.backgroundColor}
                        orderColor={orderColor}
                        focused={focused}
                        source={`${source}/projects`}
                      />
                    );
                  })}
            </SkeletonComponent>
          </ul>
        </div>
      </section>
      <section id="bottom" className={`${styles.intro} ${styles.base__item}`}>
        <Tambourines className={styles.tambourines} />
        <Bottom bgColor={theme.extraColor}>
          {[
            content?.bottom_text_1,
            content?.bottom_text_2,
            content?.bottom_text_3,
            content?.bottom_button,
          ].map((text) => (
            <SkeletonComponent
              key={uniqid()}
              error={error}
              isLoading={isLoading}
              content={text}
            />
          ))}
        </Bottom>
      </section>
    </article>
  );
});

Intro.whyDidYouRender = true;

export default Intro;
