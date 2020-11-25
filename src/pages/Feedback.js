import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Grid, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
  centeredBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  textBox: {
    marginBottom: '5px',
  },
}));
const Feedback = () => {
  const classes = useStyles();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [radioValue, setRadioValue] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    db.collection('feedbacks')
      .get()
      .then((snapshot) => {
        setRadioValue(snapshot.docs[0].data().id);
        setFeedbacks(
          snapshot.docs.map((doc) => doc.data())
        );
        setLoading(false);
      });
  }, []);

  const radioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleSubmit = (e) => {
    db.collection('feedbacks')
      .doc(radioValue)
      .update({
        counter: firebase.firestore.FieldValue.increment(1),
      });
    db.collection('suggestions')
      .add({
        suggestion: suggestion,
      })
      .then(function (docRef) {
        console.log(
          'Document written with ID: ',
          docRef.id
        );
      });
    setSubmitted(true);
  };

  const displayFeedbacks = feedbacks.map(
    ({ feedback, id }, i) => (
      <FormControlLabel
        value={id}
        control={<Radio />}
        label={feedback}
        key={i}
      />
    )
  );
  return (
    <>
      <Grid container className={classes.centeredBox}>
        <Grid item xs={12} style={{ marginBottom: '20px' }}>
          <h1>We are sad to see you go</h1>
        </Grid>
        {/* <Grid item xs={12} style={{ marginBottom: '20px' }}>
          <h2>Why did you uninstall?</h2>
        </Grid> */}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Feedback"
              name="Feedback"
              value={radioValue}
              onChange={radioChange}
            >
              {loading ? (
                <CircularProgress size={50} />
              ) : submitted ? (
                <h3>Thank You for the Feedback.</h3>
              ) : (
                <>
                  <h2>Why did you uninstall?</h2>
                  {displayFeedbacks}
                  <TextField
                    name="suggestion"
                    label="How can we improve?(Optional)"
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    className={classes.textBox}
                    onChange={(e) =>
                      setSuggestion(e.target.value)
                    }
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </>
              )}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Feedback;
