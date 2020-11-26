import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
    margin: '10% 40%',
  },
  heading: {
    marginTop: '15px',
    textAlign: 'center',
  },
}));
const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heading}>
        <h1>Which Page Do You Want To Explore?</h1>
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
