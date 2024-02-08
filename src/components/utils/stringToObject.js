export const stringToObject = (string) => {
  const keys = [`type`, `props`, `content` , `caption`, `visible`, `height`, `width`];
  string = string.replaceAll(`'`, `"`);

  for (let key of keys) {
    string = string.replaceAll(`${key}`, `"` + key + `"`);
  }

  const obj = JSON.parse(string)
  return obj;
};
