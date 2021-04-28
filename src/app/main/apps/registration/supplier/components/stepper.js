import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import formValidation from './formValidation';
import Confirm from './confirm';
import CompanyInfo from './company-info';
import ImagesAndFiles from './images-files';
import Products from './products';
import Location from './location';
import ContactPersons from './contact-persons';
import Social from './social';
import Success from './success';

const initialValues = {
  name: "",
  about: "",
  email: "",
  website: "",
  tel: "",
  logo: "",
  license: "",
  images: "",
  products_catalogue: "",
  categories: "",
  businesstype: "",
  sectors: "",
  products: "",
  coordinates: "", 
  CountQueuingStrategy: "", 
  state: "", 
  area: "", 
  address: "", 
  country: "",
  cellphone: '', 
  designation: ''
};

const fieldsValidation = {
  name: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  about: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  tel: {},
  email: {
    error: "",
    validate: "email"
  },
  website: {},
  gender: {},
  logo: {},
  license: {},
  images: {},
  products_catalogue: {},
  categories: {},
  businesstype: {},
  sectors: {},
  products: {},
  coordinates: {}, 
  CountQueuingStrategy: {}, 
  state: {}, 
  area: {}, 
  address: {}, 
  country: {},
  cellphone: {}, 
  designation: {},
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const VerticalLinearStepper = () => {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <CompanyInfo
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <ImagesAndFiles
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <Products
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      case 3:
        return (
          <Location
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      case 4:
        return (
          <ContactPersons
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      case 5:
        return (
          <Social
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      case 6:
      default:
        return 'Unknown step';
    }
  };

  const getSteps = () => {
    return ['Company Info', 'Images and Files', 'Products', 'Location', 'Contact Persons', 'Social'];
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));

    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error
    });
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Success />
      )}
    </div>
  );
}

export default VerticalLinearStepper;
