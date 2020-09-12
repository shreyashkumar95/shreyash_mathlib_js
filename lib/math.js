const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const prod = (a, b) => a * b;

function xyz(a, b, c) {
  return a + b;
}

const exportedObj = {
  add,
  sub,
  div,
  prod,
  xyz,
};

export default exportedObj;
