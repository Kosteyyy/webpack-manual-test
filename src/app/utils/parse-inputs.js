/** Мапит массив строк инпутов в числа */
const parseInputs = (...input) => {
    return input.map(str => parseInt(str));
  };