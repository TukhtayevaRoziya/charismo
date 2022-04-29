import { HonestReviews } from "../Home/Principles _Charisma/HonestReviews/HonestReviews";
import RouteInHomePage from "../../Acronyms/Route_In_HomePage";
import PageEnd from "../Home/PageEnd/PageEnd";
import { ReviewsBoxes } from "./ReviewsBoxes";

import moduleName from "./Reviews.module.css";

export const Reviews = () => {
  return (
    <>
      <div className={moduleName.body}>
        <div className={moduleName.reviews}>
          <RouteInHomePage pageName={"Становимся лучше благодаря вам"} />
          <div className={moduleName.block}>
            <ReviewsBoxes
              number={"01"}
              interrogative={
                "Пользуетесь нашей продукцией или ищете отзывы по товарам?"
              }
              title={"У каждого товара есть свой отзывы."}
              path={"/blog"}
              link={"Перейти в каталог ➡"}
            />
            <ReviewsBoxes
              number={"02"}
              interrogative={
                "Есть вопросы или нужна информация об оплате/доставке?"
              }
              title={
                "Вы можете задать вопрос или найти ответы на типовые вопросы в разделе"
              }
              path={"/a"}
              link={"Вопросы и ответы ➡"}
            />
            <ReviewsBoxes
              number={"03"}
              interrogative={
                "Ищете отзывы о компании или хотите оставить свой?"
              }
              title={
                "Изучите подборку сохраненных и добро пожаловать в общий чат ниже!"
              }
              path={"/a"}
              link={"Перейти к отзывам ➡"}
            />
          </div>
        </div>
      </div>
      <HonestReviews />
      <PageEnd />
    </>
  );
};
