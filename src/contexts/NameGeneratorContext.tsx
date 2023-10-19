import { createContext, useCallback, useEffect, useState } from "react";
import {
  mapNameList,
  randomNameInfo,
  removeNameInfoFromNameList,
} from "../utils/NameList";
import { nameListMock } from "../mocks/data";
import { Gender } from "../types/Gender";
import { NameInfo } from "../types/NameGenerator";

interface NameGeneratorProviderProps {
  children: JSX.Element;
}
export type NameGeneratorContextType = {
  nameInfo: NameInfo;
  gender: Gender;
  changeGender: (gender: Gender) => void;
  getNewName: () => void;
};

export const NameGeneratorContext = createContext<NameGeneratorContextType>({
  nameInfo: { name: "", number: 0 },
  gender: Gender.Male,
  changeGender: () => {},
  getNewName: () => {},
});

const NameGeneratorProvider = ({ children }: NameGeneratorProviderProps) => {
  const [nameInfo, setNameInfo] = useState<NameInfo>({ name: "", number: 0 });
  const [nameList, setNameList] = useState<Array<NameInfo>>([]);
  const [gender, setGender] = useState<Gender>(Gender.Male);

  const buildNameList = useCallback(() => {
    return mapNameList(nameListMock, gender);
  }, [gender]);

  const generateNewName = useCallback(
    (nameListOriginal: NameInfo[]) => {
      let nameList: NameInfo[] = [...nameListOriginal];
      if (nameList.length === 0) {
        nameList = buildNameList();
      }
      const nameInfo = randomNameInfo(nameList);
      setNameInfo(nameInfo);
      setNameList(removeNameInfoFromNameList(nameList, nameInfo.name));
    },
    [buildNameList]
  );

  useEffect(() => {
    const nameList = buildNameList();
    generateNewName(nameList);
  }, [gender, generateNewName, buildNameList]);

  const changeGender = (gender: Gender) => setGender(gender);

  const getNewName = (): void => {
    generateNewName(nameList);
  };

  return (
    <NameGeneratorContext.Provider
      value={{ nameInfo, gender, changeGender, getNewName }}
    >
      {children}
    </NameGeneratorContext.Provider>
  );
};

export default NameGeneratorProvider;
