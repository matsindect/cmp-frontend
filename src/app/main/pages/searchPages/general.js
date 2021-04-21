import React from "react";
import CauroselGroups from "../../../features/grouping";
import SearchPanel from "./components/wrapper"

export default function GeneralSearch() {
  return (
    <div>
      <CauroselGroups heading={"General search"}/>
      <SearchPanel/>
    </div>
  );
}
