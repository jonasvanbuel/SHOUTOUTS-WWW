const getRandomInt = (min, max) => {
  const diff = max - min;
  const randomDiff = Math.floor(Math.random() * diff);
  return min + randomDiff;
};

export default getRandomInt;
