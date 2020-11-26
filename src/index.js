import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
