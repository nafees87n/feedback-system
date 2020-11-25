import React from 'react';
import {
  Button,
  Grid,
  Paper,
  ButtonGroup,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../firebase';

const Feedback = ({ feedback, id }) => {
  function handleDelete() {
    db.collection('feedbacks')
      .doc(id)
      .delete()
      .then(() => console.log('deleted successfully'));
  }
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
          <Button onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};
export default Feedback;
