import { fireEvent, render, screen } from "@testing-library/react";
import NameCard from "..";
import { NameGeneratorContext } from "../../../contexts/NameGeneratorContext";
import { Gender } from "../../../types/Gender";

const mockGetNewName = jest.fn();

const renderComponent = () =>
  render(
    <NameGeneratorContext.Provider
      value={{
        nameInfo: { name: "João", number: 1000 },
        gender: Gender.Male,
        changeGender: jest.fn(),
        getNewName: mockGetNewName,
      }}
    >
      <NameCard />
    </NameGeneratorContext.Provider>
  );

describe(`Given the NameCard component`, () => {
  test("When the generate name button is click, Then should call the getNewName function", async () => {
    await renderComponent();

    const generateNameButton = screen.getByText("Generate a new name");
    fireEvent.click(generateNameButton);

    expect(mockGetNewName).toBeCalledTimes(1);
  });
});
