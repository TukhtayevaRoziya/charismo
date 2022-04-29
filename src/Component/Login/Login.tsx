import { FC } from "react";
import { Redirect } from "react-router-dom";

import moduleName from "./Login.module.css";
import { LoginReduxForm } from "./LoginForm/LoginForm";

type PropsType = {
  isAuth: boolean;
  AddNameAC: (name: string) => void;
  UpdateIsAuthAC: (isAuth: boolean) => void;
};

export const Login: FC<PropsType> = ({ isAuth, AddNameAC, UpdateIsAuthAC }) => {
  if (isAuth) {
    return <Redirect to={"/charismo"} />;
  }

  type FormDataType = {
    age: string;
    check: boolean;
    email: string;
    name: string;
    parol: string;
  };

  const onSubmit = (formData: FormDataType) => {
    UpdateIsAuthAC(true);
    AddNameAC(formData.name);
  };

  return (
    <div className={moduleName.body}>
      <div className={moduleName.Login}>
        <div className={moduleName.wrapper}>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
