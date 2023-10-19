import { useContext } from "react";
import { NameGeneratorContext } from "../contexts/NameGeneratorContext";

export const useNameGeneratorLogic = () => {
  return useContext(NameGeneratorContext);
};
