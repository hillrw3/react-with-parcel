import {shallow} from 'enzyme'
import {App} from "./app"
import React from "react"

describe("app", () => {
    it("renders", () => {
        const app = shallow(<App/>)

        expect(app).not.toBeNull()
    })
})