import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import NestedMenu from "../features/header/sectors/nested-menu";
// import PrivateRoute from "./private-routes";
import Spinner from "../features/spinner";

const Home = lazy(() => import("../app/homePage"));
const GeneralSearch = lazy(()=> import("../app/searchPages/general"));
const productSearch = lazy(()=> import("../app/searchPages/products-search"));
const supplier = lazy(()=> import("../app/suppliers/supplier"));
const product = lazy(()=> import("../app/suppliers/product"));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/search" component={GeneralSearch}  exact />
            <Route path="/products" component={productSearch}  exact />
            <Route path="/supplier" component={supplier}  exact />
            <Route path="/product" component={product}  exact />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default AppRoutes