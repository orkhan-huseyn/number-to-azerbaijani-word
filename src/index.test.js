const helloWorld = require("./index");

test("hello world function returns hello world", function() {
  const result = helloWorld();
  expect(result).toEqual("Hello, World!");
});
