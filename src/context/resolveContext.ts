import { Theme, Language } from './contextTypes';

interface Context {
  type: 'theme' | 'language',
  fromLocalStorage: string | null,
}

const resolveContext = <T extends Theme | Language>(defaultContext: T): T => {
  const context = {} as Context;
  if (defaultContext.name === 'en' || defaultContext.name === 'ru') {
    context.type = 'language';
  } else {
    context.type = 'theme';
  }
  context.fromLocalStorage = window.localStorage.getItem(context.type);
  if (context.fromLocalStorage) {
    try {
      const previousContext = JSON.parse(context.fromLocalStorage);
      if (Object.keys(defaultContext).every((key, i) => key === Object.keys(previousContext)[i])) {
        console.log(`Using previously set ${previousContext.name} ${context.type}.`);
        return previousContext;
      }
      throw Error(`Parsed values don't seem to be a valid ${context.type}!`);
    } catch (e) {
      console.log((e as Error).message);
      console.log(`There's a problem with parsing previous values! Using default ${context.type}.`);
      return defaultContext;
    }
  } else {
    console.log(`No previous ${context.type} was found! Using default ${context.type}.`);
    return defaultContext;
  }
};

const setContext = 'temporary';

export { resolveContext, setContext };
