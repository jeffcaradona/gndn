describe("index.js with Default properties", () => {
  const gndn = require("./index.js");
  test("", () => {
    expect(gndn).toBeDefined();
  });

  test("gndn.init()", () => {
    const init = jest.fn(() => {
      gndn.init();
      return true;
    });
    init();
    expect(init).toHaveReturned();
  });
});

describe("index.js with defined properties", () => {
  const gndn = require("./index.js");
  test("gndn.init()", () => {
    const init = jest.fn(() => {
      gndn.init({ value: 1 });
      return true;
    });
    init();
    expect(init).toHaveReturned();
  });
  test("gndn.init({ value: 1 }).getParams() returns { value: 1 }", () => {
    gndn.init({ value: 1 });
    expect(gndn.getParams()).toEqual({ value: 1 });
  });
});