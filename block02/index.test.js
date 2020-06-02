const subtract = require("./index");

test("adds 4 - 1 to equal 3", () => {
  expect(subtract(4, 1)).toBe(3);
});
