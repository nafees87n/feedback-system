import React from 'react';
import {
  Button,
  Grid,
  Paper,
  ButtonGroup,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Feedback = ({ feedback }) => {
  return (
    <>
      <Grid item xs={8}>
        <Paper
          style={{ padding: '10px' }}
          variant="outlined"
        >
          {feedback}
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          size="small"
        >
          <Button>
            <EditIcon />
          </Button>
          <Button>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};
export default Feedback;
