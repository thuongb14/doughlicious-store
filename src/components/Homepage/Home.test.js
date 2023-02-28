import React from "react";
import { shallow } from "enzyme";
import Home from "./Home.js";

describe("Home", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      cartCount: 0,
      total: 0,
      removeFromCart: jest.fn(),
      cart: [],
      showCart: false,
      cartDrawer: jest.fn(),
    };
    wrapper = shallow(<Home {...props} />);
  });

  it("renders Nav ", () => {
    expect(wrapper.find("Nav")).toHaveLength(1);
  });

  it("renders Spline", () => {
    expect(wrapper.find("Spline")).toHaveLength(1);
  });

  it("renders Text", () => {
    expect(wrapper.find("Text")).toHaveLength(1);
  });

  it("renders Cart", () => {
    expect(wrapper.find("Cart")).toHaveLength(1);
  });
});