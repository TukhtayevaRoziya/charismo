import React from "react";

import PageEnd from "./../Home/PageEnd/PageEnd";
import RouteInHomePage from "./../../Acronyms/Route_In_HomePage";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <RouteInHomePage pageName={"Контакты"} />

        <h1 className={styles.contact__title}>Напишите нам</h1>
        <p className={styles.contact__text}>
          Делаем бизнес без обмана и пустых обещаний, помогая людям быть
          красивее и немного счастливее. Если вы из нашей сферы и разделяете
          наши ценности — заполните форму ниже, и мы найдем точки
          соприкосновения:
        </p>
        <div className={styles.contact__inp_group}></div>
        <input
          className={styles.contact__inp_group__inp}
          type="text"
          placeholder="Ваше имя"
        />
        <input
          className={styles.contact__inp_group__inp}
          type="text"
          placeholder="Телефон"
        />
        <input
          className={styles.contact__inp_group__inp}
          type="email"
          placeholder="E-mail"
        />
        <textarea
          className={styles.contact__inp_group__inp}
          placeholder="Сообщение"
        />
        <div className={styles.contact__end_block}>
          <button className={styles.contact__end_block__btn}>Отправить</button>
          <div className={styles.contact__end_block__check_block}>
            <input type="checkbox" />
            <p>
              Нажимая кнопку “Отправить запрос” вы даете согласие на обработку
              персональных данных
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pageEndBg}>
        <PageEnd />
      </div>
    </>
  );
};
