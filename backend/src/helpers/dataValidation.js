export const dataValidation = (data = []) => {
  const isDataEmpty = false;
  const i = 0;

  data.forEach((element) => {
    element === "" && i++;
  });
  if (i > 0) {
    isDataEmpty = true;
  }
  return isDataEmpty;
};
