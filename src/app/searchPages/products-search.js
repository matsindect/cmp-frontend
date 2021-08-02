import React from "react";
import CauroselGroups from "../../features/grouping";
import CategoriesList from "./components/catergories"

export default function GeneralSearch() {
  return (
    <div>
      <CauroselGroups heading={"Browse by products"}/>
      <CategoriesList />
    </div>
  );
}
