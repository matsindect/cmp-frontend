import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
// import PrivateRoute from "./private-routes";
import Spinner from "../features/spinner";

const Home = lazy(() => import("../app/homePage"));
const GeneralSearch = lazy(()=> import("../app/searchPages/general"));
const productSearch = lazy(()=> import("../app/searchPages/products-search"));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/search" component={GeneralSearch}  exact />
          <Route path="/products" component={productSearch}  exact />
          <Redirect to="/" />
        </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default AppRoutes