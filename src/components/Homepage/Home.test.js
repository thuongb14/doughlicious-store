import { render, screen } from "@testing-library/react";
import Home from "./Home.js";

describe("Home", () => {
  let props;

  beforeEach(() => {
    props = {
      cartCount: 0,
      total: 0,
      removeFromCart: jest.fn(),
      cart: [],
      showCart: false,
      cartDrawer: jest.fn(),
    };
    render(<Home {...props} />);
  });

  it("renders Nav ", () => {
    expect(screen.getAllByTestId("nav")).toHaveLength(1);
  });
});
