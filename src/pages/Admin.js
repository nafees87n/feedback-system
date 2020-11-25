import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Paper } from '@material-ui/core';
import Feedback from './Feedback';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Admin = () => {
  const classes = useStyles();
  const [feedback, setFeedback] = useState('');
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection('feedbacks')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setAll((prev) => [...prev, doc.data().feedback]);
          setLoading(false);
        });
      });
  }, []);

  function handleSubmit() {
    const timestamp = new Date().getTime().toString();
    db.collection('feedbacks').doc(timestamp).set({
      feedback: feedback,
      counter: 0,
      id: timestamp,
    });
    setAll((prev) => [...prev, feedback]);
    setFeedback('');
  }

  const feed = all.map((feedback) => (
    <Feedback feedback={feedback} />
  ));
  const progress = (
    <Grid item xs={5}>
      <CircularProgress size={100} />
    </Grid>
  );
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        className={classes.root}
      >
        <Grid
          style={{
            background: '#3f50b5',
            padding: '10px',
            margin: '0',
            color: 'white',
          }}
          component={Paper}
          elevation={3}
          item
          xs={12}
        >
          <h1>Admin Dashboard</h1>
        </Grid>
        {loading ? progress : feed}
        <Grid item xs={7}>
          <TextField
            id="standard-basic"
            label="Add Feedback"
            multiline
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
