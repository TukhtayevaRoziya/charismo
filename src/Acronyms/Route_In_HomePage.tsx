import { FC } from "react";
import { NavLink } from "react-router-dom";
import moduleName from "./Route_In_HomePage.module.css";

type PropsType = {
  pageName: string;
};

const RouteInHomePage: FC<PropsType> = ({ pageName }) => {
  return (
    <div className={moduleName.body}>
      <NavLink to="/charismo">Главная</NavLink>
      <b>{">"}</b>
      <h1> {pageName}</h1>
      <hr />
    </div>
  );
};

export default RouteInHomePage;
