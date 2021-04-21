import React from "react";
import HowItWorks from "./howitworks";
import Featured from "./featured";
import CauroselGroups from "../../../features/grouping";
export default function index() {
  return (
    <div>
      <CauroselGroups heading={"Browse by sector"}/>
      <HowItWorks />
      <Featured />
      <CauroselGroups heading={"Popular Categories"}/>
      <CauroselGroups heading={"Popular Products"}/>
      <CauroselGroups heading={"Popular Services"}/>
    </div>
  );
}
