import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

// Destructuring props
const Social = ({
  handleNext,
  handleBack,
  handleChange,
  values: { coordinates, CountQueuingStrategy, state, area, address, country },
  formErrors
}) => {
    const handleSubmit = () => {
        handleNext();
      };
      
    // Check if all values are not empty or if there are some errors
    const isValid = true
        // name.length > 0 &&
        // !formErrors.name &&
        // about.length > 0 &&
        // !formErrors.about &&
        // email.length > 0 &&
        // !formErrors.email &&
        // !formErrors.website;

  return (
    <Fragment>
      <div>
        <TextField
            margin="normal"
            label="twitter"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            id="twitter"
            name="twitter"
            // value={form.twitter}
            onChange={handleChange}
            variant="outlined"
            fullWidth
        />
        <TextField
            margin="normal"
            label="facebook"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            id="facebook"
            name="facebook"
            // value={form.facebook}
            onChange={handleChange}
            variant="outlined"
            fullWidth
        />
        <TextField
            margin="normal"
            label="instagram"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            id="instagram"
            name="instagram"
            // value={form.instagram}
            onChange={handleChange}
            variant="outlined"
            fullWidth
        />
        <TextField
            margin="normal"
            label="linkedin"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            id="lnkedin"
            name="lnkedin"
            // value={form.lnkedin}
            onChange={handleChange}
            variant="outlined"
            fullWidth
        />
        <TextField
            margin="normal"
            label="youtube"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            id="youtube"
            name="youtube"
            // value={form.youtube}
            onChange={handleChange}
            variant="outlined"
            fullWidth
        />
    </div>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  );
};

export default Social;
