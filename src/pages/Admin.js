import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Paper } from '@material-ui/core';
import Options from './OptionsList';
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
    db.collection('feedbacks').onSnapshot((snapshot) => {
      if (!snapshot.exists) setLoading(false);
      setAll(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const timestamp = new Date().getTime().toString();
    db.collection('feedbacks').doc(timestamp).set({
      feedback: feedback,
      counter: 0,
      id: timestamp,
    });
    // setAll((prev) => [
    //   ...prev,
    //   {
    //     feedback: feedback,
    //     counter: 0,
    //     id: timestamp,
    //   },
    // ]);
    setFeedback('');
  }

  const feed = all.length ? (
    all.map(({ feedback, id, counter }, i) => (
      <Options
        feedback={feedback}
        key={i}
        id={id}
        count={counter}
      />
    ))
  ) : (
    <Grid item xs={9}>
      <Paper style={{ padding: '10px', width: '200px' }}>
        No Feedback Option Set
      </Paper>
    </Grid>
  );
  const progress = (
    <Grid item xs={5}>
      <CircularProgress size={100} />
    </Grid>
  );
  return (
    <>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        fullWidth
      >
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
              label="Add New Feedback Option"
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
              type="submit"
            >
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Admin;
