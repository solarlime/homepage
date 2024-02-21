// A function for comparing objects
// https://stackoverflow.com/a/77278013/17629668

const isEqual = <T>(a: T, b: T): boolean => {
  if (a === b) {
    return true;
  }

  const bothAreObjects = a && b && typeof a === 'object' && typeof b === 'object';

  return Boolean(
    bothAreObjects
    && Object.keys(a).length === Object.keys(b).length
    && Object.entries(a).every(([k, v]) => isEqual(v, b[k as keyof T])),
  );
};

export default isEqual;
