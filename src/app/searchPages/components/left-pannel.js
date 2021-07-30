import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Col } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid rgba(0,0,0,.125);'
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function LeftPannel({ productCategory }) {

  const classes = useStyles();
  const { productCategories, isLoading, error } = useSelector(state => state.productCategories);

  const [state, setState] = React.useState();


  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  // const { gilad, jason, antoine } = state;
  return (
    <Col sm={3} className={classes.root}>
      <Typography variant="button" display="block" className="mt-3" gutterBottom>
        Filter by
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          {productCategories && productCategories.slice(0, 30).map((pc) => {
            return (
              <FormControlLabel
                control={<Checkbox checked={pc === productCategory ? true : false} onChange={handleChange} name={pc.slug} />}
                label={pc.name}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Col>
  )
}
