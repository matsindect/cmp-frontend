import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MuiPhoneNumber from 'material-ui-phone-number';

// Destructuring props
const CompanyInfo = ({
  handleNext,
  handleChange,
  values: { name, about, email, website, tel, fax },
  formErrors
}) => {
  // Check if all values are not empty or if there are some errors
  const isValid =
    name.length > 0 &&
    !formErrors.name &&
    about.length > 0 &&
    !formErrors.about &&
    email.length > 0 &&
    !formErrors.email &&
    !formErrors.website;

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            margin="normal"
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            label="Company Name"
            autoFocus
            id="name"
            name="name"
            value={name || ""}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="About Company"
            margin="normal"
            error={!!formErrors.about}
            helperText={formErrors.about}
            id="about"
            name="about"
            onChange={handleChange}
            type="text"
            value={about || ""}
            multiline
            rows={5}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPhoneNumber
            margin="normal"
            defaultCountry={'ae'}
            variant="outlined"
            id="tel"
            name="tel"
            value={tel || ""}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPhoneNumber
            margin="normal"
            defaultCountry={'ae'}
            variant="outlined"
            id="fax"
            name="fax"
            value={fax || ""}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company Email"
            id="email"
            name="email"
            onChange={handleChange}
            variant="outlined"
            fullWidth
            placeholder="Your email address"
            type="email"
            value={email || ""}
            margin="normal"
            error={!!formErrors.email}
            helperText={formErrors.email}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company website"
            id="website"
            name="website"
            onChange={handleChange}
            variant="outlined"
            fullWidth
            type="text"
            value={website || ""}
            margin="normal"
            error={!!formErrors.website}
            helperText={formErrors.website}
          />
        </Grid>
        
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
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

export default CompanyInfo;
