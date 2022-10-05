import React, {
  useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';
import styles from './Projects.module.sass';
import { ThemeContext } from '../../../Theme';
import { getContent, PageComponent } from '../../Content/getContent';
import { LanguageContext } from '../../../Language';
import { Image } from './Project/Project';
import projectsObjectList, { ProjectsObject } from './projectsList';

function ProjectThumbnail(props: ProjectsObject) {
  const { projectName, kebabedProjectName } = props;

  return (
    <Link to={`/projects/${kebabedProjectName}`} state={props}>
      <Image kebabedProjectName={kebabedProjectName} projectName={projectName} styleProp={styles['projects-container__item']} />
    </Link>
  );
}

function Header(props: { collapsed: boolean }) {
  const { collapsed } = props;
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);

  useEffect(() => {
    getContent(language, 'projects')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <h1 className={`${styles.base__item__title} ${(collapsed) ? styles.hidden : ''}`}>{content.title}</h1>
  );
}

function Projects() {
  const { theme } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false);
  const isProjectsPage = useMatch('/projects');
  const ref = useRef(null);

  useEffect(() => {
    if (isProjectsPage) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [isProjectsPage]);

  return (
    <article
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section className={`${styles.projects} ${styles.base__item}`}>
        <Header collapsed={(collapsed)} />
        <nav
          className={(collapsed) ? styles['projects-container-collapsed'] : styles['projects-container']}
          ref={ref}
          onWheel={(event) => {
            const isWheelDown = (event.deltaY + event.deltaX >= 0);
            if (isWheelDown) {
              (ref.current! as HTMLElement).scrollBy(10, 0);
            } else {
              (ref.current! as HTMLElement).scrollBy(-10, 0);
            }
          }}
        >
          {useMemo(() => projectsObjectList
            .map((project) => (
              <ProjectThumbnail
                key={project.id}
                id={project.id}
                projectName={project.projectName}
                kebabedProjectName={project.kebabedProjectName}
              />
            )), [])}
        </nav>
        <Outlet />
      </section>
    </article>
  );
}

export default Projects;
