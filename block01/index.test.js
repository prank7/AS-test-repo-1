const sum = require("./index");

test("adds 4 + 1 to equal 5", () => {
  expect(sum(4, 1)).toBe(5);
});
