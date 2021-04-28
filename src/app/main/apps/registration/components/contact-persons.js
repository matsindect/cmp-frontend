import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import { FormControl, IconButton, makeStyles, TextField } from "@material-ui/core";
import MuiPhoneNumber from 'material-ui-phone-number';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
}));

// Destructuring props
const ContactPersons = ({
  handleNext,
  handleBack,
  handleChange,
  values: { name, email, cellphone, designation },
  formErrors
}) => {
    const classes = useStyles();

    // Check if all values are not empty or if there are some errors
    const isValid = true
        // name.length > 0 &&
        // !formErrors.name &&
        // about.length > 0 &&
        // !formErrors.about &&
        // email.length > 0 &&
        // !formErrors.email &&
        // !formErrors.website;

    const [inputList, setInputList] = useState([{ name: '', email: '', cellphone: '', designation: '' }]);

    // handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
		// form.product_attributes = list;
	};

	// handle click event of the Remove button
	const handleRemoveClick = index => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
		// form.product_attributes = list;
	};

    // handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { key: '', value: '' }]);
	};

  return (
    <Fragment>
      <div>
        {inputList.map((x, i) => {
            return (
                <div className="box">
                    <FormControl variant="filled" className={classes.formControl}>
                        <TextField
                            className="mt-8 mb-16"
                            required
                            label="Name"
                            autoFocus
                            id="name"
                            name="name"
                            onChange={e => handleInputChange(e, i)}
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <TextField
                            className="mt-8 mb-16"
                            required
                            label="Email"
                            autoFocus
                            id="email"
                            name="email"
                            onChange={e => handleInputChange(e, i)}
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <MuiPhoneNumber
                            defaultCountry={'ae'}
                            variant="outlined"
                            label="Phone number"
                            className="mt-8 mb-16"
                            name="cellphone"
                        />
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <TextField
                            className="mt-8 mb-16"
                            required
                            label="Designation"
                            autoFocus
                            id="designation"
                            name="designation"
                            onChange={e => handleInputChange(e, i)}
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <div className="btn-box">
                            {inputList.length !== 1 && (
                                <IconButton
                                    color="primary"
                                    onClick={() => handleRemoveClick(i)}
                                    aria-label="add to shopping cart"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            )}
                            {inputList.length - 1 === i && (
                                <AddCircleIcon onClick={handleAddClick} />
                            )}
                        </div>
                    </FormControl>
                </div>
            );
        })}
    </div>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 10 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isValid}
          color="primary"
          onClick={isValid ? handleNext : null}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default ContactPersons;
