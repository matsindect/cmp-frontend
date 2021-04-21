import Home from "../../main/pages/homePage";
import GeneralSearch from '../../main/pages/searchPages/general'
import ProductSearch from '../../main/pages/searchPages/products-search'
import Supplier from '../../main/apps/suppliers/supplier'
import Product from '../../main/apps/suppliers/product'

 const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    component: GeneralSearch
  },
  {
    path: "/products",
    component: ProductSearch
  },
  {
    path: "/supplier",
    component: Supplier
  },
  {
    path: "/product",
    component: Product
  },
];
export default routes