/* eslint-disable no-param-reassign */
import React from 'react';
import styles from './Project.module.sass';

export interface PageProps {
  visibility: {
    header: 'visible' | 'hidden',
    original_aim: string,
    total_aim: string,
  }
  spaceHeight: number,
  scrollPoint: number,
}

/**
 * A standalone function for transforming a block with results
 * @param itemsArray - an array of <li> elements in a results' <ul>
 * @param beginAppearPoint - a computed scroll point to begin appearing
 * @param space - a container for a project description
 * @param pageProps - an object with some page properties
 * @param setPageProps - a React setter for pageProps
 * @param listHeight - a height (px) of a results' <ul>
 */
function renderResults(
  itemsArray: Array<HTMLLIElement>,
  beginAppearPoint: number,
  space: HTMLDivElement,
  pageProps: PageProps,
  setPageProps: React.Dispatch<React.SetStateAction<PageProps>>,
  listHeight: number,
) {
  const scrollPerListItem = listHeight / itemsArray.length;

  if (space.scrollTop > beginAppearPoint) {
    const direction = (space.scrollTop >= pageProps.scrollPoint) ? 'down' : 'up';
    // It is needed to change scrollPoint only when a results' <ul> is scrolled over
    if (space.scrollTop < beginAppearPoint + listHeight) {
      setPageProps((oldProps) => ({ ...oldProps, scrollPoint: space.scrollTop }));
    }
    // A list is divided to equal parts for a simplicity
    const index = Math.floor((space.scrollTop - beginAppearPoint) / scrollPerListItem);
    if (index !== undefined && itemsArray[index] !== undefined) {
      if (direction === 'down' && index > 0) {
        itemsArray.filter((item, i) => (item.style.opacity !== '1') && (i < index))
          .forEach((partlyVisibleItem) => { partlyVisibleItem.style.opacity = '1'; });
      }
      if (direction === 'up' && index < itemsArray.length) {
        itemsArray.filter((item, i) => (item.style.opacity !== '0') && (i > index))
          .forEach((partlyVisibleItem) => { partlyVisibleItem.style.opacity = '0'; });
      }
      itemsArray[index].style.opacity = (
        ((space.scrollTop - beginAppearPoint) % scrollPerListItem)
        / scrollPerListItem).toString();
    } else {
      itemsArray[itemsArray.length - 1].style.opacity = '1';
    }
  } else {
    itemsArray[0].style.opacity = '0';
  }
}

/**
 * A function for transforming a page on scrolling
 * @param space - a container for a project description
 * @param pageProps - an object with some page properties
 * @param setPageProps - a React setter for pageProps
 * @param delay - a fixed delay for transformation (in scrolled pixels)
 * @param isDesktop - a boolean defining if the layout is for mobiles or not
 */
const transform = (
  space: HTMLDivElement,
  pageProps: PageProps,
  setPageProps: React.Dispatch<React.SetStateAction<PageProps>>,
  delay: number,
  isDesktop: boolean,
) => {
  // picture = image + margins, picture >= image
  const picture = space.querySelector(`.${styles.wrapper__picture}`)! as HTMLDivElement;
  const image = picture.querySelector(`.${styles.img}`)! as HTMLImageElement;
  const aim = space.querySelector(`.${styles.aim}`)! as HTMLElement;
  // Picture width can change from image.width to space.width. This fixes any troubles
  const pictureFix = (picture.scrollWidth - image.scrollWidth) / 2;
  const breakpoints = {
    initialScroll: picture.offsetHeight,
    pictureHalf: picture.offsetHeight + picture.scrollWidth - space.offsetWidth / 2 - pictureFix,
    pictureFull: picture.offsetHeight + picture.scrollWidth - pictureFix,
  };
  const list = space.querySelector(`.${styles.rest__item_result} ul`) as HTMLUListElement;
  const items = Array.from(list.children) as Array<HTMLLIElement>;

  const baseAppearPoint = breakpoints.pictureFull + pictureFix
    + 2 * delay + picture.offsetHeight * 0.5;
  const appearPoint = (isDesktop)
    ? baseAppearPoint
    : baseAppearPoint + space.offsetWidth;

  const results = () => renderResults(
    items,
    appearPoint,
    space,
    pageProps,
    setPageProps,
    list.offsetHeight,
  );

  // Here a picture begins scrolling
  if (space.scrollTop > breakpoints.initialScroll) {
    if (pageProps.visibility.header === 'visible') {
      setPageProps((oldProps) => ({ ...oldProps, visibility: { ...oldProps.visibility, header: 'hidden' } }));
    }
    picture.style.transform = `matrix(1, 0, 0, 1, ${-space.scrollTop + breakpoints.initialScroll}, 0)`;
    // Behaviour differs on desktops / tablets and mobiles.
    // There's no enough space to put both aim blocks together
    if (space.scrollTop > breakpoints.pictureHalf && isDesktop) {
      // Show the original aim & fix the picture
      if (pageProps.visibility.original_aim === styles.disappear || pageProps.visibility.original_aim === '') {
        setPageProps((oldProps) => ({
          ...oldProps,
          visibility: { ...oldProps.visibility, original_aim: styles.appear },
        }));
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
          if (pageProps.visibility.total_aim === styles.disappear || pageProps.visibility.total_aim === '') {
            setPageProps((oldProps) => ({
              ...oldProps,
              visibility: { ...oldProps.visibility, total_aim: styles.appear },
            }));
          }
          results();
        } else if (pageProps.visibility.total_aim === styles.appear) {
          setPageProps((oldProps) => ({
            ...oldProps,
            visibility: { ...oldProps.visibility, total_aim: styles.disappear },
          }));
        }
      } else {
        aim.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
      }
      // Another logic is for mobiles
      // It's needed to scroll the whole picture
    } else if (space.scrollTop > breakpoints.pictureFull && !isDesktop) {
      if (pageProps.visibility.original_aim === styles.disappear || pageProps.visibility.original_aim === '') {
        setPageProps((oldProps) => ({
          ...oldProps,
          visibility: { ...oldProps.visibility, original_aim: styles.appear },
        }));
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
          if (pageProps.visibility.total_aim === styles.disappear || pageProps.visibility.total_aim === '') {
            setPageProps((oldProps) => ({
              ...oldProps,
              visibility: { ...oldProps.visibility, total_aim: styles.appear },
            }));
          }
          results();
        } else if (pageProps.visibility.total_aim === styles.appear) {
          setPageProps((oldProps) => ({
            ...oldProps,
            visibility: { ...oldProps.visibility, total_aim: styles.disappear },
          }));
        }
      } else {
        aim.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
      }
    } else if (pageProps.visibility.original_aim === styles.appear) {
      setPageProps((oldProps) => ({
        ...oldProps,
        visibility: { ...oldProps.visibility, original_aim: styles.disappear },
      }));
    }
  } else {
    if (pageProps.visibility.original_aim !== '') {
      setPageProps((oldProps) => ({ ...oldProps, visibility: { ...oldProps.visibility, original_aim: '' } }));
    }
    if (pageProps.visibility.total_aim !== '') {
      setPageProps((oldProps) => ({ ...oldProps, visibility: { ...oldProps.visibility, total_aim: '' } }));
    }
    if (pageProps.visibility.header === 'hidden') {
      setPageProps((oldProps) => ({ ...oldProps, visibility: { ...oldProps.visibility, header: 'visible' } }));
    }
    picture.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }
};

export default transform;
