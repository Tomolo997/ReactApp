import React, { useState, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

import GithubState from './context/github/GithubState';

const App = () => {
  //if we want to fetch we want to do it in this funciton

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // search GITGUB users

  //clear users from state

  //Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //after we load the state we insert the data to the state object
    console.log(res);
    setRepos(res.data);
    setLoading(false);
  };

  //Set alert
  const setAlertApp = (msg, type) => {
    setAlert({ msg: msg, tyle: type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  //destruturing

  return (
    <GithubState>
      <Router>
        {/* //if we dont wanna wrap h1 or h2 or sometthing else into the div we use
        React.Fragment or only empty angles */}
        <div className="App">
          <Navbar title="Github finder" icon="fab fa-github" />
          {/* we added the container around the users */}
          <div className="container">
            <Alert alert={alert} />
            {/* we are passing the users from state to the props*/}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={setAlertApp} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User {...props} getUserRepos={getUserRepos} repos={repos} />
                )}
              />
            </Switch>
            {/* passing up the props from Search.js */}
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
