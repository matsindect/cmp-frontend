import React from "react";
import CauroselGroups from "../../features/grouping";
import ProductList from "./components/product-list";

export default function Supplier() {
  return (
    <div>
      <CauroselGroups heading={"Browse by Sectors"}/>
      <ProductList />
    </div>
  );
}
