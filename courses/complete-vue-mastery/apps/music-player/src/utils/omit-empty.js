export default (obj) => {
  const result = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      result[key] = obj[key];
    }
  });

  return result;
};
