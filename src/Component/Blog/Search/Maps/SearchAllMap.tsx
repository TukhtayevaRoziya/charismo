import { FC } from "react";
import { AllMaps } from "./AllMaps";

type PropsType = {
  AllFiltered: any;
};

export const SearchAllMap: FC<PropsType> = ({ AllFiltered }) => {
  return <AllMaps filtered={AllFiltered} />;
};
