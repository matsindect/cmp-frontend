import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import PrivateRoute from "./private-routes";
import Spinner from "../features/spinner";

const Home = lazy(() => import("../app/homePage"));
const ProductSearch = lazy(() => import("../app/searchPages/landing-pages/product"));
const ServiceSearch = lazy(() => import("../app/searchPages/landing-pages/service"));
const productSearch = lazy(() => import("../app/searchPages/products-search"));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search/:regSlug/:businessSlug/sectors/:sectorId/:categorySlug/products" component={ProductSearch} exact />
          <Route path="/search/:regSlug/:businessSlug/sectors/:sectorId/:categorySlug/services" component={ServiceSearch} exact />
          <Route path="/products" component={productSearch} exact />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes
