import React, { useEffect, useState } from "react";
import "./nav.css"
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Row } from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';
import { Grid, Typography } from "@material-ui/core";
import { Pagination } from '@material-ui/lab';
import TabItemServices from "../services/TabItemServices";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    zIndex: 9,
  },
  quickLinks: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  accounts: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function SimpleContainer({ business, sectors }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [numberOfPages, setEndNumberOfPages] = useState(0);

  const handleChangePage = async (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    setStartIndex(9 * page - 9)
    setEndIndex(9 * page)
  }, [page, value])

  useEffect(() => {
    setEndNumberOfPages(Math.ceil(sectors.length / 9))
  }, [page, value, numberOfPages, sectors])

  return (
    <CSSTransition
      key={business && business._id}
      in={true}
      timeout={1000}
      classNames={"quick-links"}
    >

      <Container className="mt-3 mb-3">
        <Row className={classes.quickLinks}>
          <Typography style={{ color: "rgba(0,0,0,.6)" }}>
            <Grid container className="ml-3 mt-2">
              {business && business.sectors.slice(startIndex, endIndex).map((sector) => {
                return (
                  <TabItemServices key={sector.id} bt={business} item={sector} />
                );
              })}

              {numberOfPages > 1 &&
                (<Grid container direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={6}>
                    <Pagination className={classes.pagination} count={numberOfPages} page={page} onChange={handleChangePage} />
                  </Grid>
                </Grid>
                )
              }
            </Grid>
          </Typography>
        </Row>
      </Container>
    </CSSTransition>
  );
}
