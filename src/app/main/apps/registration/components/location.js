import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Map from "./googlemaps";

// Destructuring props
const Location = ({
  handleNext,
  handleChange,
  values: { coordinates, CountQueuingStrategy, state, area, address, country },
  formErrors
}) => {
  // Check if all values are not empty or if there are some errors
  const isValid = true
    // name.length > 0 &&
    // !formErrors.name &&
    // about.length > 0 &&
    // !formErrors.about &&
    // email.length > 0 &&
    // !formErrors.email &&
    // !formErrors.website;

    function handleLocationChange(input) {
		// setForm(_.set({ ...form }, 'company.location', input));
	}

  return (
    <Fragment>
      <div>
        <Map
            // google={this.props.google}
            center={{
                lat: 23.4241,
                lng: 53.8478
            }}
            height="300px"
            zoom={15}
            // onChange={this.onChange}
            form={[]}
            handleLocationChange={handleLocationChange}
        />
      </div>
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

export default Location;
