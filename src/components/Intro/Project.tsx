/*
  eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions,
*/
import { memo } from 'react';

import styles from './Intro.module.sass';
import HookAndRope from './SVGComponents/HookAndRope';

/**
 * A component for a main page
 * @constructor
 */
const Project = memo((props: {
  projectName: string,
  kebabedProjectName: string,
  themeColor: string,
  backgroundColor: string,
  orderColor: string,
  focused: HTMLAnchorElement | null,
  source: string,
}) => {
  const {
    projectName, kebabedProjectName, themeColor, backgroundColor, orderColor, source,
  } = props;
  let { focused } = props;

  return (
    <li className={styles.projects_list__item} data-testid="project">
      <HookAndRope
        className={styles.projects_list__item__rope}
        ropeColor={themeColor}
        hookColor={orderColor}
      />
      <p
        onClickCapture={
          // Safari does not catch clicks on <a> and catches them on <p>. Workaround
          (event) => {
            if (focused && (event.target as HTMLParagraphElement).querySelector('a') === focused) {
              window.open(`https://${import.meta.env.VITE_APP_LINK_GITHUB}/${kebabedProjectName}`, '_blank', 'noreferrer');
              focused.blur();
              focused = null;
            }
          }
        }
      >
        <a
          className={styles.projects_list__item__link}
          href={`https://${import.meta.env.VITE_APP_LINK_GITHUB}/${kebabedProjectName}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: orderColor, backgroundColor }}
          onClick={() => {
            if (focused) focused.blur();
          }}
        >
          {projectName}
        </a>
        <picture>
          <source
            srcSet={`${source}/${kebabedProjectName}320.avif 320w, ${source}/${kebabedProjectName}640.avif 640w, ${source}/${kebabedProjectName}1280.avif 1280w`}
            sizes="(max-width: 1180px) 250px, (max-width: 1280px) 330px, 640px"
            type="image/avif"
          />
          <source
            srcSet={`${source}/${kebabedProjectName}320.jpg 320w, ${source}/${kebabedProjectName}640.jpg 640w, ${source}/${kebabedProjectName}1280.jpg 1280w`}
            sizes="(max-width: 1180px) 250px, (max-width: 1280px) 330px, 640px"
            type="image/jpeg"
          />
          <source srcSet={`${source}/${kebabedProjectName}.avif`} type="image/avif" />
          <img
            className={styles.projects_list__item__image}
            style={{ color: orderColor, backgroundColor }}
            src={`${source}/${kebabedProjectName}.jpg`}
            alt={projectName}
            onClick={
              (event) => {
                const image = event.target as HTMLAnchorElement;
                try {
                  const picture = image.parentElement!;
                  const link = picture.previousElementSibling as HTMLAnchorElement;
                  link.focus();
                  focused = link;
                } catch (e) {
                  console.error(`An error with '${projectName}' occurred! Fallback mode is on`);
                  window.open(`https://${import.meta.env.VITE_APP_LINK_GITHUB}/${kebabedProjectName}`, '_blank', 'noreferrer');
                }
              }
            }
          />
        </picture>
      </p>
    </li>
  );
});

Project.whyDidYouRender = true;

export default Project;
