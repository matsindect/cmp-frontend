import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  btn: {
    minWidth: '100px', 
    minHeight: '100px',
    maxWidth: '100px', 
    maxHeight: '100px',
  },
  img: {
    minWidth: '100px', 
    minHeight: '100px',
    maxWidth: '100px', 
    maxHeight: '100px',
    borderRadius: '5px',
  },
}));

export default function UploadButton({text, name}) {
  const classes = useStyles();

  const [file, setFile] = useState('');

  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} className={classes.img} />;
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <input
          accept="image/*"
          className={classes.input}
          id={name}
          name={name}
          type="file"
          onChange={handleUpload}
        />
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={2}>
          <label htmlFor={name}>
            <Button variant="outlined" color="primary" component="span" startIcon={<CloudUploadIcon />} size="small" className={classes.btn}>
              {text}
            </Button>
          </label>
        </Grid>
        {/* {
          images.map((image) => {
            return ( */}
              <Grid item xs={2}>
                {file && <ImageThumb image={file} />}
              </Grid>
            {/* );
          })
        } */}
      </Grid>
    </Grid>
  );
}
