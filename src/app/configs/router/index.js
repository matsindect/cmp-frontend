import React, { Component, Suspense } from "react";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import Spinner from "../../features/spinner";
import routes from "./routes";
class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => (
              <Route path={route.path} component={route.component}  exact />
            ))}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default AppRoutes