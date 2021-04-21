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

const useStyles = makeStyles((theme) => ({
    root: {
      border:'1px solid rgba(0,0,0,.125);'
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function LeftPannel() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const { gilad, jason, antoine } = state;
    return (
            <Col sm={3} className={classes.root}>
            <Typography variant="button" display="block" className="mt-3" gutterBottom>
            Filter by
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Categories</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                    label="Gilad Gray"
                />
                <FormControlLabel
                    control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                    label="Jason Killian"
                />
                <FormControlLabel
                    control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                    label="Antoine Llorca"
                />
                </FormGroup>
            </FormControl>
            </Col>
    )
}
