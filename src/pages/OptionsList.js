import React, { useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  ButtonGroup,
  TextField,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../firebase';

const Options = ({ feedback, id, count }) => {
  const [open, setOpen] = useState(false);
  const [modified, setModified] = useState('');

  const handleDelete = () => {
    db.collection('feedbacks').doc(id).delete();
  };

  const handleEdit = () => {
    db.collection('feedbacks').doc(id).update({
      feedback: modified,
    });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          Modify The Option
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edited Option"
            fullWidth
            onChange={(e) => setModified(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

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
          <Button onClick={handleClickOpen}>
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
