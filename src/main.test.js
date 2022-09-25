import { getHelloLior, getHelloFirstName, getMaxNum } from "./main";

it("return hello lior", () => {
  expect(getHelloLior()).toBe("Hello lior");
});

it("not return hi there", () => {
  expect(getHelloLior()).not.toBe("hi there");
});

it("not return a number", () => {
  expect(getHelloLior()).not.toBeNaN();
});

it("not return a less 6 chart", () => {
  expect(getHelloLior()).not.toBeLessThan(6);
});

it("return max,", () => {
  expect(getMaxNum(3, 9)).toBe(9);
});

it("not return min", () => {
  expect(getMaxNum(3,5)).not.toBe(3);
});   
it ("not return string",()=>{
    expect(getMaxNum("4","8")).not.toBe("8")
    })
