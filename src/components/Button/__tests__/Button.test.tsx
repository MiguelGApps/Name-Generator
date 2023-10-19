import { fireEvent, render, screen } from "@testing-library/react";
import Button from "..";

const mockOnClick = jest.fn();

const renderComponent = ({
  label = "",
  selected = true,
}: {
  label?: string;
  selected?: boolean;
}) =>
  render(<Button label={label} onClick={mockOnClick} selected={selected} />);

describe(`Given the Button component`, () => {
  test.each`
    label
    ${"ButtonName"}
    ${"A Button"}
    ${"123"}
  `(
    "When the label $label is received, Then should display the label $label",
    async ({ label }) => {
      await renderComponent({ label });

      const button = screen.getByTestId("button");

      expect(button).toHaveTextContent(label);
    }
  );

  test("When the button is clicked, Then should call the onClick funtion", async () => {
    await renderComponent({});

    const button = screen.getByTestId("button");
    fireEvent.click(button);

    expect(mockOnClick).toBeCalledTimes(1);
  });

  test("When the button is selected, Then should have the selected class", async () => {
    await renderComponent({ selected: true });

    const button = screen.getByTestId("button");

    expect(button).toHaveClass("selected");
  });

  test("When the button is not selected, Then should not have the selected class", async () => {
    await renderComponent({ selected: false });

    const button = screen.getByTestId("button");

    expect(button).not.toHaveClass("selected");
  });
});
