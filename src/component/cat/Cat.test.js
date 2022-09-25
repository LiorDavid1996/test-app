import Cat from "./cat";
import { createElement, ReactDOM, } from "react-dom";

describe("test fot Cat",()=>{

it("return element HTML white text ",()=>{
    const div =createElement('div')
    ReactDOM.createRoot(div).render(<Cat/>)
    expect(div.innerHTML).toEqual(`<div className="home">
    <h1>Home</h1>
  </div>`)

})



})
