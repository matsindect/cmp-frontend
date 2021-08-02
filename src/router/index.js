import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from "../features/spinner";

const Home = lazy(() => import("../app/homePage"));
const ProductSearch = lazy(() => import("../app/searchPages/landing-pages/product"));
const ServiceSearch = lazy(() => import("../app/searchPages/landing-pages/service"));
const productSearch = lazy(() => import("../app/searchPages/products-search"));
const product = lazy(() => import("../app/products/product"));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search/:regSlug/:businessSlug/sectors/:sectorId/:categorySlug/products" component={ProductSearch} exact />
          <Route path="/search/:regSlug/:businessSlug/sectors/:sectorId/:categorySlug/services" component={ServiceSearch} exact />
          <Route path="/products" component={productSearch} exact />
          <Route path="/product" component={product} exact />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes
