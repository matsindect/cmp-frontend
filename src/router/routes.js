import Home from "./../app/homePage";
import GeneralSearch from '../app/searchPages/general'

 const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    component: GeneralSearch
  },
];
export default routes