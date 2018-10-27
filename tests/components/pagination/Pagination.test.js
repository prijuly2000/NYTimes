import React from "react";
import {mount} from "enzyme";
import Pagination from "../../../src/components/pagination/Pagination";
import sinon from "sinon";
import {apiStatus}  from "../../../src/utils/Enums"

describe("Pagination Tests", () => {
    it("should mount", () => {
        const currentPage = 0;
        const wrapper = mount(<Pagination currentPage={currentPage} status={apiStatus.SUCCESS}/>);
        expect(wrapper.find("Page")).toHaveLength(10);
    });

    it("should fire onClick", () => {
        const currentPage = 1;
        const onNextPage = sinon.spy();
        const wrapper = mount(<Pagination currentPage={currentPage} onNextPage={onNextPage} status={apiStatus.SUCCESS}/>);
        wrapper.find("button.page").at(0).simulate("click");
        expect(onNextPage.calledOnce).toBe(true);
        expect(onNextPage.getCall(0).args[0]).toBe(0);
    });

    it("should render right pages", () => {
        // when currentPage <= 5.
        const currentPage = 5;
        const onNextPage = sinon.spy();
        const wrapper = mount(<Pagination currentPage={currentPage} onNextPage={onNextPage} status={apiStatus.SUCCESS}/>);
        // Get index at util.
        const findIndexAt = (index) => wrapper.find("Page").at(index).props().index;
        let firstIndex = findIndexAt(0);
        let lastIndex = findIndexAt(9);
        expect(firstIndex).toBe(0);
        expect(lastIndex).toBe(9);

        // when currentPage > 5.
        wrapper.setProps({currentPage: 7});
        firstIndex = findIndexAt(0);
        lastIndex = findIndexAt(9);
        expect(firstIndex).toBe(2);
        expect(lastIndex).toBe(11);

        // when currentPage < 5 again.
        wrapper.setProps({currentPage: 5});
        firstIndex = findIndexAt(0);
        lastIndex = findIndexAt(9);
        expect(firstIndex).toBe(0);
        expect(lastIndex).toBe(9);
    });
});