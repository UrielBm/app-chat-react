import React, { useCallback, useReducer } from "react";
import ClientAxios from "../helpers/ClienteAxios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import Swal from "sweetalert2";
import {
  DO_LOGIN,
  DO_REGISTER,
  RENEW_TOKEN,
  WRONG_TOKEN,
  DO_LOGOUT,
} from "./../types";
const AuthState = (props) => {
  const initialState = {
    uid: null,
    checking: true,
    logged: false,
    userName: null,
    email: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const RegisterUser = async (newuser) => {
    try {
      const response = await ClientAxios.post("/createuser", newuser);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      dispatch({
        type: DO_REGISTER,
        payload: user,
      });
      Swal.fire(
        "Registro correcto",
        "Se realizo el registro correctamente",
        "success"
      );
    } catch (error) {
      const { type, msg } = error.response.data;
      Swal.fire({
        icon: type,
        title: "Intenta otra vez",
        text: msg,
      });
    }
  };
  const LoginUser = async ({ email, password }) => {
    try {
      const response = await ClientAxios.post("/login", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      dispatch({
        type: DO_LOGIN,
        payload: user,
      });
      Swal.fire(
        "Login Correcto",
        "Se realizo el login correctamente",
        "success"
      );
    } catch (error) {
      const { type, msg } = error.response.data;
      Swal.fire({
        icon: type,
        title: "Intenta otra vez",
        text: msg,
      });
    }
  };
  const RegisterToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({
          type: WRONG_TOKEN,
        });
      }
      const response = await ClientAxios.get("/renew", {
        headers: {
          "x-token": token,
        },
      });
      const { type, user } = response.data;
      if (type === "right") {
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: RENEW_TOKEN,
          payload: user,
        });
      }
    } catch (error) {
      //console.log(error.response);
      dispatch({
        type: WRONG_TOKEN,
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: DO_LOGOUT,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        uid: state.uid,
        checking: state.checking,
        logged: state.logged,
        userName: state.userName,
        email: state.email,
        RegisterUser,
        LoginUser,
        RegisterToken,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
