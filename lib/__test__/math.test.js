import math from "../math";

test("should return sum of two numbers", () => {
  expect(math.add(1, 2)).toBe(3);
});

test("should return difference of two numbers", () => {
  expect(math.sub(5, 3)).toBe(2);
});

test("should return quotient when 1st no is divided by 2nd", () => {
  expect(math.div(15, 3)).toBe(5);
});

test("should return product of two numbers", () => {
  expect(math.prod(3, 4)).toBe(12);
});
