//initial state, and actions
import React, { useReducer } from 'react';
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
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //after we load the state we insert the data to the state object
    console.log(res);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //get User
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //after we load the state we insert the data to the state object
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get repos

  //clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USER });

  //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {/* //we are gonna wrap all of the aplication to this provider  */}
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
