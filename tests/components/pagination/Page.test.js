import React from "react";
import {mount} from "enzyme";
import Page from "../../../src/components/pagination/Page"
import sinon from "sinon";

describe("Page Tests", () => {
    it("should mount", () => {
        const index = 1;
        const onClick = sinon.spy();
        const wrapper = mount(<Page index={index} onClick={onClick} />);
        expect(wrapper.find("button.page")).toHaveLength(1);
    });

    it("should fire onClick", () => {
        const index = 1;
        const onClick = sinon.spy();
        const wrapper = mount(<Page index={index} onClick={onClick} />);
        expect(wrapper).toBeDefined();
        wrapper.find("button.page").simulate("click");
        expect(onClick.calledOnce).toBe(true);
    });
});