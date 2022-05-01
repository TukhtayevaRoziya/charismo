import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import RouteInHomePage from "../../Acronyms/Route_In_HomePage";
import { MainBlock1 } from "./Blocks/1/MainBlock1";
import { MainBlock2 } from "./Blocks/2/MainBlock2";
import PageEnd from './../Home/PageEnd/PageEnd';
import { Search } from "./Search/Search";
import { RouteBlog } from "./RouteBlog";
import { MapType } from "../../types";

import moduleName from "./Blog.module.css";

type PropsType = {
  maps: { one: MapType[]; two: MapType[] };
};

const BLog: FC<PropsType> = ({ maps }) => {
  return (
    <>
    <div className={moduleName.body}>
      <div className={moduleName.blog}>
        <div className={moduleName.main_block}>
          <RouteInHomePage pageName={"Блог"} />
          <div className={moduleName.mainbox}>
            <Switch>
              <Route
                path={"/blog/2"}
                render={() => <MainBlock2 map={maps.two} />}
              />
              <Route path={"/blog/3"} render={() => <MainBlock3 />} />
              <Route path={"/blog/4"} render={() => <MainBlock4 />} />
              <Route
                path={"/blog"}
                render={() => <MainBlock1 map={maps.one} />}
              />
            </Switch>
          </div>
        </div>
        <div className={moduleName.searchBody}>
          <Search />
        </div>
        <div className={moduleName.navigator}>
          <RouteBlog number={1} link={"/blog"} />
          <RouteBlog number={2} link={"/blog/2"} />
          <RouteBlog number={3} link={"/blog/3"} />
          <RouteBlog number={4} link={"/blog/4"} />
        </div>
      </div>
    </div>
    <div className={moduleName.pageEndBg}>
        <PageEnd />
      </div>
    </>
  );
};

export default BLog;

const MainBlock3 = () => {
  return <>I`m main blog 3</>;
};
const MainBlock4 = () => {
  return <>I`m main blog 4</>;
};
