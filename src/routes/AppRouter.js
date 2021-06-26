import React, { useContext, useEffect } from "react";
import AuthContext from "../auth/AuthContext";
import ChatPage from "../pages/ChatPage";
import AuthRouter from "./AuthRouter";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
const AppRouter = () => {
  const { logged, RegisterToken } = useContext(AuthContext);
  useEffect(() => {
    RegisterToken();
  }, [RegisterToken]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            isAuthenticated={logged}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoutes
            isAuthenticated={logged}
            exact
            path="/"
            component={ChatPage}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
