// @ts-ignore
import Typograf from 'typograf';

export interface PageComponent {
  [key: string]: string,
}

const pages = ['intro', 'tagCloud', 'about', 'projects', 'project', 'notFound', 'footer', 'header'] as const;
type Pages = typeof pages[number];

/**
 * A function for a dynamic content importing.
 * Memoized - for faster previously fetched content returning
 */
const memoizedGetContent = () => {
  const cache: { [key: string]: PageComponent } = {};
  return async (languageName: 'en' | 'ru', page: Pages): Promise<PageComponent> => {
    const key = `${languageName}-${page}`;
    if (`${languageName}-${page}` in cache) {
      return Promise.resolve(cache[key]);
    }
    const content = await import(`./${languageName}/${page}.ts`);
    const typo = new Typograf({ locale: ['ru', 'en-US'] });
    const result: PageComponent = {};
    Object.entries(content.default as PageComponent)
      .forEach((item) => { result[item[0]] = typo.execute(item[1]); });
    cache[key] = result;
    return content.default;
  };
};

export const getContent = memoizedGetContent();
