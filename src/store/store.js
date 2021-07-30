import { configureStore } from "@reduxjs/toolkit";
import sectorsReducer from './sectors/sectorsSlice';
import businessReducer from './business/businessSlice';
import categoriesReducer from './categories/categoriesSlice';
import productCategoriesReducer from './product-categories/productCategoriesSlice';
import serviceCategoriesReducer from './service-categories/serviceCategoriesSlice'
import productsReducer from './products/productsSlice';
import servicesReducer from './services/servicesSlice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    businesses: businessReducer,
    sectors: sectorsReducer,
    productCategories: productCategoriesReducer,
    serviceCategories: serviceCategoriesReducer,
    products: productsReducer,
    services: servicesReducer,
  },
});
