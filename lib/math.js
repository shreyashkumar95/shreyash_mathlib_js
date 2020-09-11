const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const prod = (a, b) => a * b;
const exp = (a, b) => a ** b;

const exportedObj = {
  add,
  sub,
  div,
  prod,
  exp,
};

export default exportedObj;
