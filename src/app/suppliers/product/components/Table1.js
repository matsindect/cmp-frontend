import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#add8e6',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, col2) {
  return { name, col2 };
}

const rows = [
  createData('Frozen yoghurt', 'Frozen yoghurt hdfdf df'),
  createData('Ice cream sandwich', 'Frozen yoghurt sdsd'),

];

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  cell: {
    paddingTop: '8px',
    paddingBottom: '8px',
    borderColor: '#add8e6',
    border: '1px',
    borderStyle: 'solid',
    borderCollapse: 'collapse',
  },
  header: {
    paddingTop: '8px',
    paddingBottom: '8px',
    border: 'none',
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.header}>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell className={classes.header} ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className={classes.cell} component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell className={classes.cell}>{row.col2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}