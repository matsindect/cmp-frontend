import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },
  tableHead: {
    background: theme.palette.primary.main,
    opacity: '0.8'
  },
  heading: {
    
  },
  cell: {
    paddingTop: '8px',
    paddingBottom: '8px',
    borderColor: theme.palette.primary.main,
    border: '1px',
    borderStyle: 'solid',
    borderCollapse: 'collapse',
  },
}));

export default function SpanningTable({attr, heading}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
            <TableHead className={classes.tableHead}>
                <TableRow>
                    <TableCell className={classes.cell} align="left" colSpan={3}>
                        <Typography variant="body2" gutterBottom className={classes.heading}>
                            <Box fontSize='14px'>
                                {heading}
                            </Box>
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {attr.map((row) => (
                <TableRow key={row.desc}>
                <TableCell style={{ width: '35%' }} className={classes.cell}>
                    <Typography variant="body2" gutterBottom>
                        <Box fontSize='14px'>
                            {row.col1}
                        </Box>
                    </Typography>
                </TableCell>
                <TableCell className={classes.cell} align="left">
                    <Typography variant="body2" gutterBottom>
                        <Box fontSize='14px' fontWeight='bold'>
                            {row.col2}
                        </Box>
                    </Typography>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}
