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

const Options = ({ feedback, id, count }) => {
  function handleDelete() {
    db.collection('feedbacks').doc(id).delete();
  }
  return (
    <>
      <Grid item xs={8}>
        <Paper
          style={{ padding: '10px' }}
          variant="outlined"
        >
          <Grid container alignItems="center">
            <Grid item xs={9}>
              {feedback}
            </Grid>
            <Grid
              item
              xs={3}
              style={{ textAlign: 'right' }}
            >
              Selected By users: {count}
            </Grid>
          </Grid>
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
export default Options;
