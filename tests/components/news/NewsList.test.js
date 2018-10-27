import React from "react";
import {mount} from "enzyme";
import NewsList from "../../../src/components/news/NewsList"
import sinon from "sinon";
import mockData from "../../mockdata/dummy-data.json";
import {apiStatus}  from "../../../src/utils/Enums"

describe("NewsList Tests", () => {
    it("should mount", () => {
        const newsList = mockData.response.docs;
        const wrapper = mount(<NewsList status={apiStatus.SUCCESS} newsList={newsList}/>);
        expect(wrapper.find(".newsItem")).toBeDefined;
        expect(wrapper.find(".newsList")).toBeDefined;
    });

    it("should fire onClick", () => {
        const onNewsClick = sinon.spy();
        const newsList = mockData.response.docs;
        const wrapper = mount(<NewsList status={apiStatus.SUCCESS} onNewsClick={onNewsClick} newsList={newsList}/>);
        const newsItems = wrapper.find("div.newsItem");
        expect(newsItems).toHaveLength(2);
        expect(wrapper.find("div.newsItemModal")).toBeUndefined;
        newsItems.at(0).simulate("click");
        expect(onNewsClick.getCall(0).args[0]).toEqual(newsList[0]);
    });
});