import React from "react";
import { Link } from "react-router-dom";
import Register from "../components/Form/Register";

function RegistrationPage() {
  return (
    <>
      <h1>Регистрация</h1>
      <Register />
      <p className="login-text">
        Уже зарегистрированы? Тогда
        <Link to="/login"> войдите в личный кабинет</Link>
      </p>
    </>
  );
}

export default RegistrationPage;
