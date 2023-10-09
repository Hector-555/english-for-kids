import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import Form from "./Form";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regHandler = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
  };

  return (
    <div>
      <Form handleClick={regHandler} buttonTitle="Зарегистрироваться" />
    </div>
  );
}

export default Register;
