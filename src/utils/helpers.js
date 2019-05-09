module.exports.isInteger = function isInteger(number) {
  return number === (number ^ 0);
};
