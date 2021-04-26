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
import BootstrapTooltip from './BootstrapTooltip';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },
  tableHead: {
    background: '#d1ecf1',
  },
  heading: {
    color: '#3f51b5',
  },
  cell: {
    paddingTop: '8px',
    paddingBottom: '8px',
    borderColor: '#bee5eb',
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
                        <Box fontSize='14px' style={{ color:'#9fa5aa' }}>
                            {row.col1}
                        </Box>
                    </Typography>
                </TableCell>
                <TableCell className={classes.cell} align="left">
                    <Typography variant="body2" gutterBottom>
                        <Box fontSize='14px' fontWeight='bold'>
                          <BootstrapTooltip title="Click to search for other products which match this criteria" placement="top">
                            <a href="#" style={{color:'#0e1e2a', textDecorationLine: 'underline', textDecorationStyle: 'dotted' }}>{row.col2}</a>
                          </BootstrapTooltip>
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
