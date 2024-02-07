// @ts-ignore
import Typograf from 'typograf';
import { Language } from '../../context/contextTypes';

export interface PageComponent {
  [key: string]: string,
}

const pages = ['intro', 'tagCloud', 'about', 'notFound', 'footer', 'header'] as const;
type Pages = typeof pages[number];

/**
 * A function for a dynamic content importing.
 * Memoized - for faster previously fetched content returning
 */
const memoizedGetContent = () => {
  const cache: { [key: string]: PageComponent } = {};
  return async (language: Language, page: Pages): Promise<PageComponent> => {
    const key = `${language.name}-${page}`;
    if (`${language.name}-${page}` in cache) {
      return Promise.resolve(cache[key]);
    }
    const content = await import(`./${language.name}/${page}.json`);
    const typo = new Typograf({ locale: ['ru', 'en-US'] });
    const result: PageComponent = {};
    Object.entries(content.default as PageComponent)
      .forEach((item) => { result[item[0]] = typo.execute(item[1]); });
    cache[key] = result;
    return content.default;
  };
};

export const getContent = memoizedGetContent();
