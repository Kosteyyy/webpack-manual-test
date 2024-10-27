/** Мапит массив строк инпутов в числа */
export const parseInputs = (...input) => {
    return input.map(str => parseInt(str));
  };