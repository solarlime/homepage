export interface PageComponent {
  [key: string]: string,
}

const pages = ['intro', 'tagCloud', 'about', 'projects', 'notFound', 'footer'] as const;
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
    const content = await import(`./${languageName}/${page}`);
    cache[key] = content.default;
    return content.default;
  };
};

export const getContent = memoizedGetContent();
