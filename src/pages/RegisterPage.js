import React, { useContext } from "react";
import AuthContext from "./../auth/AuthContext";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const RegisterPage = () => {
  const { RegisterUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      userName: "",
      gender: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("es necesario tu userName"),
      gender: Yup.string().required("es necesario tu genero"),
      email: Yup.string()
        .email("Ingresa un email valido")
        .required("es necesario tu email"),
      password: Yup.string()
        .min(6, "el password debe de ser al menos 6 caracteres")
        .required("es necesario un password"),
    }),
    onSubmit: (user) => {
      RegisterUser(user);
    },
  });
  const handleDisableButton = () => {
    return formik.values.userName.length > 0 ? true : false;
  };
  return (
    <div className="loginPage">
      <h1 className="titlePage">Register page</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="wrapperInput">
          <label className="label" htmlFor="userName">
            UserName:
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="tu nombre de usuario"
            className="input"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.userName && formik.errors.userName ? (
          <div className="wrapperErrors">
            <p>Errors:</p>
            <p className="errors">{formik.errors.userName}</p>
          </div>
        ) : null}
        <div className="wrapperInput">
          <label className="label">Genero:</label>
          <select
            className="select"
            name="gender"
            id="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">--selecciona una opción--</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <div className="wrapperErrors">
            <p>Errors:</p>
            <p className="errors">{formik.errors.gender}</p>
          </div>
        ) : null}
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
          <Link to="/auth/login" className="link">
            ya tengo cuenta
          </Link>
        </div>
        <div className="wrapperActionButton">
          <button
            type="submit"
            className="FormButton"
            disabled={!handleDisableButton()}
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
