import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./Form.css";

function Form({ handleClick, buttonTitle }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email введен некорректно!")
        .required("Обязательно для заполнения"),
      password: Yup.string()
        .required("Введите пароль!")
        .min(6, "Слишком короткий пароль!"),
    }),
    onSubmit: (values) => {
      const { email, password } = values;
      handleClick(email, password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-container">
      <div className="input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="error">{formik.errors.email}</p>
        )}
      </div>

      <div className="input-container">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="error">{formik.errors.password}</p>
        )}
      </div>
      <div className="form-btn-container">
        <button type="submit" className="form-btn">
          {buttonTitle}
        </button>
      </div>
    </form>
  );
}

export default Form;
