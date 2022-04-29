import Effect_1 from "../img/Effective_Solutions/block_1.png";
import Effect_2 from "../img/Effective_Solutions/block_2.png";
import Effect_3 from "../img/Effective_Solutions/block_3.png";
import Titles from "./../Titles/Titles";
import { EffectBlock } from "./EffectBlock";

import moduleName from "./EffectiveSolutions.module.css";

export function EffectiveSolutions() {
  return (
    <div className={moduleName.Principles_Charisma}>
      <div className={moduleName.box_body}>
        <div className={moduleName.title}>
          <Titles
            title="Эффективные решения"
            text="восстановления, питания и активации роста"
          />
          <div className={moduleName.block_body}>
            <EffectBlock
              src={Effect_1}
              title={"Для волос головы"}
              text={"Восстановление, питание и активация роста волос на голове"}
            />
            <EffectBlock
              src={Effect_2}
              title={"Для волос бровей"}
              text={
                "Густые и шикарные брови за 30-90 дней с гарантией результата"
              }
            />
            <EffectBlock
              src={Effect_3}
              title={"Для волос бороды"}
              text={"Эффективные решения для активации роста бороды"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
