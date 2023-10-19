import {
  nameListTestMock,
  nameListTestResultMockFull,
  nameListTestResultRemoveMock,
} from "../../mocks/data";
import { Gender } from "../../types/Gender";
import {
  mapNameList,
  randomNameInfo,
  removeNameInfoFromNameList,
} from "../NameList";

describe(`Given the NameList utils`, () => {
  describe(`Given the mapNameList function`, () => {
    test("When the mapNameList is called, Then should return results based on gender in NameInfo structure", () => {
      const result = mapNameList(nameListTestMock, Gender.Male);

      expect(result).toStrictEqual(nameListTestResultMockFull);
    });
  });

  describe(`Given the removeNameInfoFromNameList function`, () => {
    test("When the removeNameInfoFromNameList is called, Then should remove the name from the list and return the list", () => {
      const result = removeNameInfoFromNameList(
        nameListTestResultMockFull,
        "Ryan"
      );

      expect(result).toStrictEqual(nameListTestResultRemoveMock);
    });
  });

  describe(`Given the randomNameInfo function`, () => {
    test("When the randomNameInfo is called, Then should randomly pick and return a name", () => {
      const result = randomNameInfo(nameListTestResultMockFull);

      expect(result.name).not.toBeNull();
      expect(typeof result.name).toEqual("string");

      expect(result.number).not.toBeNull();
      expect(typeof result.number).toEqual("number");
    });
  });
});
