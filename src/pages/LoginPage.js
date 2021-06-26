import React, { useContext } from "react";
import AuthContext from "./../auth/AuthContext";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const LoginPage = () => {
  const { LoginUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingresa un email valido")
        .required("es necesario tu email"),
      password: Yup.string()
        .min(6, "el password debe de ser al menos 6 caracteres")
        .required("es necesario un password"),
    }),
    onSubmit: (user) => {
      LoginUser(user);
    },
  });
  const handleDisableButton = () => {
    return formik.values.email.length > 0 ? true : false;
  };
  return (
    <div className="loginPage">
      <h1 className="titlePage">Login page</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="wrapperInput">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            className="input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="wrapperErrors">
            <p>Errors:</p>
            <p className="errors">{formik.errors.email}</p>
          </div>
        ) : null}
        <div className="wrapperInput">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="your password"
            className="input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="wrapperErrors">
            <p>Errors:</p>
            <p className="errors">{formik.errors.password}</p>
          </div>
        ) : null}
        <div className="wrapperLink">
          <Link to="/auth/register" className="link">
            crear una cuenta
          </Link>
        </div>
        <div className="wrapperActionButton">
          <button
            type="submit"
            className="FormButton"
            disabled={!handleDisableButton()}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
