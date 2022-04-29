import { useCallback, useState, FC } from "react";
import moduleName from "./Answer.module.css";
import vector from "./picture/Vector.png";
import visibleText from "./picture/VisibleText.png";

type PropsType = {
  title: string;
};

export const AnswerBox: FC<PropsType> = ({ title }) => {
  const [state, setstate] = useState(false);
  const VisibleText = useCallback(() => {
    setstate(true);
  }, []);
  const UnVisibleText = useCallback(() => {
    setstate(false);
  }, []);
  return (
    <div
      className={moduleName.box}
      onClick={state ? UnVisibleText : VisibleText}
    >
      <h1>{title}</h1>
      <button
        className={
          state
            ? moduleName.noVisible
            : moduleName.visible + " " + moduleName.visibleMoreText
        }
        onClick={VisibleText}
      >
        <img src={vector} alt="" />
      </button>
      <button
        className={
          state
            ? moduleName.visible
            : moduleName.noVisible + " " + moduleName.visibleMoreText
        }
        onClick={UnVisibleText}
      >
        <img src={visibleText} alt="" />
      </button>
      {state ? (
        <div className={moduleName.text}>
          В основе Elastic cloud используется виртуализация VMware Миграция на
          VMware возможна не только с других систем виртуализации (MS Hyper-V,
          XenServer), но и с «железных» серверов без виртуализации. Это более
          сложный и длительный процесс, чем миграция в рамках одной системы
          виртуализации. Но у #CloudМТS есть опыт проведения миграции клиентских
          систем c физических серверов без виртуализации и инфраструктуры
          Hyper-V.
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
