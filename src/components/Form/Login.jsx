import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import Form from "./Form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          userActions.setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate('/')
      })
      .catch(error => alert('Такой пользователь не зарегистирован'));
  };

  return (
    <div>
      <Form handleClick={loginHandler} buttonTitle="Войти" />
    </div>
  );
}

export default Login;
