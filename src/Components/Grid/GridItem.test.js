import { render, screen } from "@testing-library/react";
import { GridItem } from "./GridItem";

test("renders GridItem with props", () => {
  const fakeItem = {
    name: "Luke",
  };
  render(<GridItem item={fakeItem} />);

  const itemName = screen.getByText(/Luke/s);
  expect(itemName).toBeInTheDocument();
});
