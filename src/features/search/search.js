import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Select from '@material-ui/core/Select';
import { Container, Row,Dropdown, ButtonGroup,DropdownButton,SplitButton, Col } from "react-bootstrap";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "80%",
    zIndex: 9,
    marginLeft: 20,
    marginRight: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    background: "white"
  },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  search: {
    flexDirection: "column",
    justifyContent: "center",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Paper component="form" className={classes.root}>
        <FormControl className={classes.formControl}>
        <Select
         
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>General</em>
          </MenuItem>
          <MenuItem value={10}>Products</MenuItem>
          <MenuItem value={20}>Service</MenuItem>
          <MenuItem value={30}>Supplier</MenuItem>
        </Select>
      </FormControl>
          <Divider className={classes.divider} orientation="vertical" />
          <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Row>
    </Container>
  );
}
