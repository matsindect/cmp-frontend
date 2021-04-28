import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '99%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const CustomSelect = ({label, name}) => {
    const classes = useStyles();

    const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="categories" name={name}>{label}</InputLabel>
            <Select
                labelId="categories"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Test 1</MenuItem>
                <MenuItem value={20}>Test 2</MenuItem>
                <MenuItem value={30}>Test 3</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CustomSelect
