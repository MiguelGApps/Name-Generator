import { fireEvent, render, screen } from "@testing-library/react";
import GenderPicker from "..";
import { NameGeneratorContext } from "../../../contexts/NameGeneratorContext";
import { Gender } from "../../../types/Gender";

const mockChangeGender = jest.fn();

const renderComponent = ({ gender = Gender.Male }: { gender?: Gender }) =>
  render(
    <NameGeneratorContext.Provider
      value={{
        nameInfo: { name: "João", number: 1000 },
        gender: gender,
        changeGender: mockChangeGender,
        getNewName: jest.fn(),
      }}
    >
      <GenderPicker />
    </NameGeneratorContext.Provider>
  );

describe(`Given the GenderPicker component`, () => {
  test("When the GenderPicker is initialized, Then should display Male and Female buttons", async () => {
    await renderComponent({});

    const genderPickerMaleButton = screen.getByText("Male");
    const genderPickerFemaleButton = screen.getByText("Female");

    expect(genderPickerMaleButton).toBeInTheDocument();
    expect(genderPickerFemaleButton).toBeInTheDocument();
  });

  test("When a gender is selected, Then should have the selected class", async () => {
    await renderComponent({ gender: Gender.Female });

    const genderPickerMaleButton = screen.getByText("Male");
    const genderPickerFemaleButton = screen.getByText("Female");

    expect(genderPickerMaleButton).not.toHaveClass("selected");
    expect(genderPickerFemaleButton).toHaveClass("selected");
  });

  test("When a gender button is clicked, Then should call the changeGender function", async () => {
    await renderComponent({});

    const genderPickerMaleButton = screen.getByText("Male");
    fireEvent.click(genderPickerMaleButton);

    expect(mockChangeGender).toBeCalledTimes(1)
    expect(mockChangeGender).toBeCalledWith(Gender.Male);
  });
});
