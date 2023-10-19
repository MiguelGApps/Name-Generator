import { render, screen } from "@testing-library/react";
import NameInfo from "..";
import { NameGeneratorContext } from "../../../contexts/NameGeneratorContext";
import { Gender } from "../../../types/Gender";

const renderComponent = ({
  name = "João",
  number = 1000,
}: {
  name?: string;
  number?: number;
}) =>
  render(
    <NameGeneratorContext.Provider
      value={{
        nameInfo: { name, number },
        gender: Gender.Male,
        changeGender: jest.fn(),
        getNewName: jest.fn(),
      }}
    >
      <NameInfo />
    </NameGeneratorContext.Provider>
  );

describe(`Given the NameInfo component`, () => {
  test.each`
    name
    ${"Miguel"}
    ${"Marco António"}
    ${"José"}
  `(
    "When the name $name is received, Then should show the name $name",
    async ({ name }) => {
      await renderComponent({ name });

      const nameInfo = screen.getByTestId("nameInfoName");

      expect(nameInfo).toHaveTextContent(name);
    }
  );

  test.each`
    number
    ${123}
    ${1}
    ${29381}
  `(
    "When the number $number is received, Then should show the number $number",
    async ({ number }) => {
      await renderComponent({ number });

      const numberInfo = screen.getByTestId("nameInfoNumber");

      expect(numberInfo).toHaveTextContent(number);
    }
  );
});
