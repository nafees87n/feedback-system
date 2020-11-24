import React from 'react';
import { Grid, Paper } from '@material-ui/core';
const Feedback = ({ feedback }) => {
  return (
    <Grid item xs={10}>
      <Paper>{feedback}</Paper>
    </Grid>
  );
};
export default Feedback;
