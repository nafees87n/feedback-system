import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import Admin from './pages/Admin';
import Feedback from './pages/Feedback';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/admin" exact component={Admin} />
          <Route
            path="/feedback"
            exact
            component={Feedback}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
