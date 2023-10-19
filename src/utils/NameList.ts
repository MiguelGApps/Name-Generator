import { Gender } from "../types/Gender";
import { NameInfo, NameStats } from "../types/NameGenerator";
import { capitalize } from "./Text";

export const mapNameList = (
  rawNameList: Array<Array<string>>,
  gender: Gender
): Array<NameInfo> => {
  const sortedNameList: Array<NameInfo> = [];

  const nameList: Array<NameStats> = rawNameList
    .map(
      (rawNameListElement: Array<string>): NameStats => ({
        year: parseInt(rawNameListElement[0]),
        gender: rawNameListElement[1] as Gender,
        ethnicity: rawNameListElement[2],
        name: capitalize(rawNameListElement[3]),
        number: parseInt(rawNameListElement[4]),
        rank: parseInt(rawNameListElement[5]),
      })
    )
    .filter(
      (nameListElement: NameStats): boolean => nameListElement.gender === gender
    );

  nameList.forEach((nameElement: NameStats) => {
    const index = sortedNameList.findIndex(
      (sortedNameListElement: NameInfo) =>
        sortedNameListElement.name === nameElement.name
    );
    if (index === -1) {
      sortedNameList.push({
        name: nameElement.name,
        number: nameElement.number,
      });
    } else {
      sortedNameList[index].number =
        sortedNameList[index].number + nameElement.number;
    }
  });

  return sortNameList(sortedNameList);
};

const sortNameList = (nameList: Array<NameInfo>) =>
  nameList.sort((nameA, nameB) => nameB.number - nameA.number);

export const removeNameInfoFromNameList = (
  nameList: Array<NameInfo>,
  name: string
): Array<NameInfo> =>
  nameList.filter((nameElement) => nameElement.name !== name);

export const randomNameInfo = (nameInfo: Array<NameInfo>): NameInfo =>
  nameInfo[Math.floor(Math.random() * nameInfo.length)];
