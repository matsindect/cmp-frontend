import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomSelect from "./custom-select";

// Destructuring props
const Products = ({
  handleNext,
  handleBack,
  handleChange,
  values: { categories, businesstype, sectors, products },
  formErrors
}) => {

  // Check if all values are not empty or if there are some errors
  const isValid = true;
    // !formErrors.categories &&
    // !formErrors.businesstype &&
    // !formErrors.sectors &&
    // !formErrors.products;

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
            <CustomSelect label="Categories" name={categories} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <CustomSelect label="Business Type" name={businesstype} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <CustomSelect label="Sectors" name={sectors} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <CustomSelect label="Products" name={products} />
        </Grid>
      </Grid>
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

export default Products;
