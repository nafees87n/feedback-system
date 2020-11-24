import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import Feedback from './Feedback';
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
  useEffect(() => {
    db.collection('feedbacks').onSnapshot((snapshot) =>
      setAll(snapshot.docs.map((doc) => doc.data()))
    );
  }, [feedback]);
  function handleSubmit() {
    db.collection('feedbacks').add({
      feedback: feedback,
      counter: 0,
    });
    setFeedback('');
  }
  const feed = all.map(({ feedback }) => (
    <Feedback feedback={feedback} />
  ));
  return (
    // <>
    //   <h1>Admin Dashboard</h1>
    //   <form
    //     className={classes.root}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <TextField
    //       id="standard-basic"
    //       label="Add Feedback"
    //       multiline
    //       fullWidth
    //     />
    //     <Button onClick={on}>send</Button>
    //   </form>
    // </>
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        className={classes.root}
      >
        <Grid item xs={12}>
          <h1>Admin Dashboard</h1>
        </Grid>
        {feed}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Add Feedback"
            multiline
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleSubmit}>send</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
