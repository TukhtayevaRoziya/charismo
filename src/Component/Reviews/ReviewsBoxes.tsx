import moduleName from "./ReviewsBoxes.module.css";
import { NavLink } from "react-router-dom";
import { FC } from "react";

type PropsType = {
  number: string;
  interrogative: string;
  title: string;
  link: string;
  path: string;
};

export const ReviewsBoxes: FC<PropsType> = ({
  number,
  interrogative,
  title,
  link,
  path,
}) => {
  return (
    <div className={moduleName.box}>
      <h1>{number}</h1>
      <h2>{interrogative}</h2>
      <h3>{title}</h3>
      <NavLink to={path}>{link}</NavLink>
    </div>
  );
};
