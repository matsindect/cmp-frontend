import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Container, Row } from "react-bootstrap";
import Menu from "./menu";
import Brand from "./brand";
import SearchArea from "../search/header";
import { useDispatch } from "react-redux";
import { fetchAllSectors } from '../../store/sectors/sectorsAction';
import { fetchAllBusinesss } from '../../store/business/businessAction';
import { fetchAllCategories } from '../../store/categories/categoriesAction';
import { fetchAllProductCategories } from '../../store/product-categories/productCategoriesAction';
import { fetchAllServiceCategories } from '../../store/service-categories/serviceCategoriesAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuTool: {
    minHeight: theme.spacing(10),
  },
  appBar: {
    boxShadow: "none",
  },
}));
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default function ButtonAppBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSectors());
    dispatch(fetchAllBusinesss());
    dispatch(fetchAllCategories());
    dispatch(fetchAllProductCategories());
    dispatch(fetchAllServiceCategories());
	}, [dispatch]);

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar style={{ background: "#ffffff" }}>
          <Toolbar className={classes.menuTool}>
            <Container>
              <Row>
                <Brand />
              </Row>
              <Row>
                <Menu />
              </Row>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <SearchArea className="m-auto" />
      
    </div>
  );
}
