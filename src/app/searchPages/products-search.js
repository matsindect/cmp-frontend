import React from "react";
import CauroselGroups from "../../features/grouping";
import CategoriesList from "./components/catergories"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: 400,
      background: "white",
      marginTop: 10,
      marginBottom: 10,
    },
    menuTool: {
      minHeight: theme.spacing(10),
    },
    search: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  }));

export default function GeneralSearch() {
    const classes = useStyles();
  return (
    <div>
      <CauroselGroups heading={"Browse by products"}/>
      <CategoriesList />
    </div>
  );
}
