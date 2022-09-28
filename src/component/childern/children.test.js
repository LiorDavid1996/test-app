import{render,screen} from '@testing-library/react'
import Children from './Childern'


describe("test for children", () =>{
    test("test in section",() => {
        render(<Children/>)
       const textElement=screen.getByText("Hi children")
        expect(textElement).toBeInTheDocument()
    })
    test("text in span", () => {
        render(<Children/>)
        const spanElement =screen.getByTestId("span-Id")
        expect(spanElement.innerHTML).toEqual("Hi children")
    })
    test("class in the element",() => {
        render(<Children/>)
        const className=screen.getByTestId("span-Id")
        expect(className).toHaveClass("Children-Span")
    })
    test("test color", () =>{
        render(<Children/>)
        const elementStyle=screen.getByTestId("span-Id")
        expect(elementStyle).toHaveStyle("color: 'red'")
    })
})
