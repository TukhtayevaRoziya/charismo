import { FC } from "react";

import moduleName from "./EffectBlock.module.css";

type PropsType = {
  src: string;
  title: string;
  text: string;
};

export const EffectBlock: FC<PropsType> = ({ src, title, text }) => {
  return (
    <div className={moduleName.effect_block}>
      <img src={src} alt="" />
      <h1 className={moduleName.effect_title}> {title} </h1>
      <p className={moduleName.effect_text}> {text} </p>
    </div>
  );
};
