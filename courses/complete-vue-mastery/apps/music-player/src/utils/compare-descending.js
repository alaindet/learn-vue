export default (key) => (a, b) => {
  const aValue = a[key];
  const bValue = b[key];

  if (aValue === bValue) {
    return 0;
  }

  return aValue > bValue ? -1 : 1;
};
