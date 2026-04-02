function getMinMax(str) {
  let splited = str.split(" ");
  let numbers = splited
    .map(item => parseFloat(item))
    .filter(num => !isNaN(num));
  
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
