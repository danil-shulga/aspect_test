import { keysFromStringPath } from './keysFromStringPath';
import { stringToBoolean } from './stringToBoolean';
import { stringToObject } from './stringToObject';

// из за условия что нельзя копировать/клонировать исходный массив.
// при работе с глубокой вложенностью приходится мутировать исходный
// что не есть хорошо и могло бы привести к багам
// но с текущим функционалом оно работает нормально
export const changeValueFromStringPath = (obj, path, newValue) => {
  const keys = keysFromStringPath(path);

  let current = obj;
  let counter = 0;

  for (let key of keys) {
    if (++counter === keys.length) {
      if (key === 'visible') {
        newValue = stringToBoolean(newValue)
      }

      if (key === 'height' || key === 'width') {
        newValue = +newValue;
      }

      if (typeof +key === 'number' && +key === +key) {
        newValue = stringToObject(newValue);
      }

      if (key === 'content') {
        newValue = stringToObject(newValue);

        if (keys.length > 1) {
          current[key] && current[key].push(newValue);
          return;
        } else {
          current && current.push(newValue);
          return;
        }
      }

      current[key] = newValue;
      return;
    }
    current = current[key];

    if (current === undefined) {
      return undefined;
    }
  }
};
