export const keysFromStringPath = (path) => {
  path = path.replaceAll('[', '.');
  path = path.replaceAll(']', '');
  if (path !== 'content') {
    path = path.replace('content', '');
  }

  const keys = path.split('.').filter(Boolean);
  return keys
}