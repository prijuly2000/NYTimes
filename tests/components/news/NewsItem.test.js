import React from "react";
import {mount} from "enzyme";
import NewsItem from "../../../src/components/news/NewsItem"
import sinon from "sinon";
import mockData from "../../mockdata/dummy-data.json";

describe("NewsItem Tests", () => {
    it("should mount", () => {
        const index = 1;
        const item = mockData.response.docs[0];
        const wrapper = mount(<NewsItem index={index} item={item}/>);
        expect(wrapper.find("newsItem")).toBeDefined;
    });

    it("should fire onClick", () => {
        const index = 5;
        const onClick = sinon.spy();
        const item = mockData.response.docs[0];
        const wrapper = mount(<NewsItem index={index} onClick={onClick} item={item}/>);
        const newsItem = wrapper.find("div.newsItem");
        expect(newsItem).toBeDefined;
        expect(wrapper.find("div.newsItemModal")).toBeUndefined;
        newsItem.simulate("click");
        expect(onClick.getCall(0).args[0]).toEqual(item);
    });

    it("should fire onClick in modal mode", () => {
        const item = mockData.response.docs[0];
        const wrapper = mount(<NewsItem item={item}/>);
        const newsItem = wrapper.find("div.newsItem");
        expect(newsItem).toBeDefined;
    });
});