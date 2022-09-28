import { screen,render } from "@testing-library/react";
import Grave from './Grave'
describe("test grave component", () => {
test("test children num ", () => {
    render(<Grave childrenNum="12" clsass="10" techier="ms.dalia" />)
  const  childrenNumElement= screen.getByTestId("children-num")
  expect(childrenNumElement.innerHTML).toEqual("12")
})
test("test clsass  ", () => {
    render(<Grave childrenNum="12" clsass="10" techier="ms.dalia" />)
  const  clsassNumElement= screen.getByTestId("clsass-num")
  expect(clsassNumElement.innerHTML).toEqual("10")
})
test("test techierName  ", () => {
    render(<Grave childrenNum="12" clsass="10" techier="ms.dalia" />)
  const  techierNameElement= screen.getByTestId("techierName")
  expect(techierNameElement.innerHTML).toEqual("ms.dalia")
})


})
