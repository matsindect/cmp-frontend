import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import UploadButton from "./upload";

// Destructuring props
const ImagesAndFiles = ({
  handleNext,
  handleBack,
  handleChange,
  values: { logo, license, images, products_catalogue },
  formErrors
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    !formErrors.logo &&
    !formErrors.license &&
    !formErrors.images &&
    !formErrors.products_catalogue;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UploadButton text="Logo" name="logo"/>
        </Grid>
        <Grid item xs={12}>
          <UploadButton text="License" name="license"/>
        </Grid>
        <Grid item xs={12}>
          <UploadButton text="Gallery" name="images"/>
        </Grid>
        <Grid item xs={12}>
          <UploadButton text="Products" name="products_catalogue"/>
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
    </>
  );
};

export default ImagesAndFiles;
