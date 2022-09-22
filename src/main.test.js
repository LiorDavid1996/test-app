import {getHelloLior} from "./main"

it("return hello lior",()=>{
expect(getHelloLior())
.toBe("Hello lior")
})

it("not return hi there",()=>{
expect(getHelloLior())
.not.toBe("hi there")
})

it("not return a number",()=>{
expect(getHelloLior()).not.toBeNaN()
})

describe("d",()=>{
    
})