import { FC } from "react";
import { NavLink } from "react-router-dom";
import lupa1 from "../picture/lupa.png";
import stars from "../picture/stars.png";
import korzina from "../picture/korzina.png";

import moduleName from "./ProductBlock.module.css";

type PropsType = {
  block_img: string;
  data: string;
  price: string;
};

// const [name, setName] = useState('Mary');

// 2. Use an effect for persisting the form
// const Click = () => { }
// useEffect(function persistForm() {
//     localStorage.setItem('formData', name);
// });

export const ProductBlock: FC<PropsType> = ({ block_img, data, price }) => {
  return (
    <div className={moduleName.block}>
      <div className={moduleName.block_img_body}>
        <img src={block_img} alt="" />
      </div>
      <div className={moduleName.star_body}>
        <img src={stars} alt="" />
      </div>
      <div className={moduleName.data_body}>
        <h1>{data}</h1>
      </div>
      <div className={moduleName.price_body}>
        <h1>{price}</h1>
      </div>
      <div className={moduleName.btn_body}>
        <NavLink to="/">В корзину</NavLink>
        <NavLink to="/">Быстрый заказ</NavLink>
      </div>
      <div className={moduleName.btn_body_sm}>
        <NavLink to="/">
          <img src={korzina} alt="" />
        </NavLink>
        <button className={moduleName.btn_click}>
          <img src={lupa1} alt="" />
        </button>
      </div>
    </div>
  );
};
