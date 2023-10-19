import { capitalize } from "../Text";

describe(`Given the Text utils`, () => {
  describe(`Given the capitalize function`, () => {
    test.each`
      value        | result
      ${"A VALUE"} | ${"A value"}
      ${"vALUE"}   | ${"Value"}
      ${"value"}   | ${"Value"}
    `(
      "When the capitalize is called with $value, Then should return result $result",
      ({ value, result }) => {
        const resultValue = capitalize(value);

        expect(resultValue).toBe(result);
      }
    );
  });
});
