//initial state, and actions
import React, { userReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

//github state all actions
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Search USers

  //get Users

  //get repos

  //clear Users

  //set loading

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {/* //we are gonna wrap all of the aplication to this provider  */}
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
