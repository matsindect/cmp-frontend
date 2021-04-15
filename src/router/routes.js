import Home from "./../app/home";
import Supplier from "./../app/suppliers";
import Product from "./../app/suppliers/product";

const Routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/suppliers",
    component: Supplier,
  },
  {
    path: "/product",
    component: Product,
  },
];

export default Routes;
