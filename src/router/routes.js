import Home from "./../app/home";
import Supplier from "./../app/suppliers";

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
];

export default Routes;
