import RouteInHomePage from "../../Acronyms/Route_In_HomePage";
import block_img from "./picture/block_img.png";
import { ProductBlock } from "./ProductBlock/ProductBlock";
import { Route } from "react-router-dom";

import PageEnd from "./../Home/PageEnd/PageEnd";
import moduleName from "./Shop.module.css";

const Shop = () => {
  return (
    <>
      <div className={moduleName.body}>
        <div className={moduleName.Shop}>
          <RouteInHomePage pageName="Магазин" />
        </div>
        <div className={moduleName.hr}>
          <div className={moduleName.shop_body}>
            <ProductBlock
              block_img={block_img}
              data={"DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос"}
              price={"4000 ₽"}
            />
            <ProductBlock
              block_img={block_img}
              data={"DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос"}
              price={"4000 ₽"}
            />
            <ProductBlock
              block_img={block_img}
              data={"DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос"}
              price={"4000 ₽"}
            />
            <ProductBlock
              block_img={block_img}
              data={"DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос"}
              price={"4000 ₽"}
            />
            <ProductBlock
              block_img={block_img}
              data={"DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос"}
              price={"4000 ₽"}
            />
            <ProductBlock
              block_img={block_img}
              data={"DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос"}
              price={"4000 ₽"}
            />
          </div>
        </div>
      </div>
      <div style={{ background: "#F4F7FE" }}>
        <Route path="/" render={() => <PageEnd />} />
      </div>
    </>
  );
};

export default Shop;
