import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Form/Login";

function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <Login />
      <p className="login-text">
        или <Link to='/reg'>зарегистрируйтесь</Link>
      </p>
    </>
  );
}

export default LoginPage;
