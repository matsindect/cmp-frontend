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
import FirstStep from './first-step';
import SecondStep from './second-step';
import Confirm from './confirm';
import Success from './success';

// Step titles
const labels = ["First Step", "Second Step", "Confirmation"];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  date: "",
  city: "",
  phone: ""
};

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  email: {
    error: "",
    validate: "email"
  },
  gender: {},
  date: {},
  city: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15
  }
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

// function getSteps() {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`;
//     case 1:
//       return 'An ad group contains one or more ads which target a shared set of keywords.';
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
//     default:
//       return 'Unknown step';
//   }
// }

const VerticalLinearStepper = () => {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  const getSteps = () => {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
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
    <>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
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
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      )}
    </>
  );
}

export default VerticalLinearStepper;
