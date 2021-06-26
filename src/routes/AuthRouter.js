import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Switch, Route, Redirect } from "react-router-dom";
import "./../css/LoginStyle.scss";
const AuthRouter = () => {
  return (
    <div className="wrapperGeneral">
      <div className="wrapperForm">
        <Switch>
          <Route exact path="/auth/login" component={LoginPage} />
          <Route exact path="/auth/register" component={RegisterPage} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
