import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  centeredBox: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  heading: {
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '2em',
  },
}));
const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heading}>
        <h1>Where do you want to go?</h1>
      </div>
      <div className={classes.centeredBox}>
        <Box className={classes.root}>
          <Button
            href="/admin"
            fullWidth
            variant="contained"
            color="primary"
          >
            Admin
          </Button>
          <Button
            href="/feedback"
            fullWidth
            variant="contained"
            color="primary"
          >
            Feedback
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Homepage;
