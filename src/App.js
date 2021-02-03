import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';
class App extends Component {
  //if we want to fetch we want to do it in this funciton
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   //changing the state property loading
  //   this.setState({ loading: true });
  //   //async awaiting the data from api
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //after we load the state we insert the data to the state object
  //   this.setState({ users: res.data.items, loading: false });
  // }

  // search GITGUB users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //after we load the state we insert the data to the state object
    console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };

  //clear users from state
  clearUsers = () => {
    this.setState({ users: [] });
  };

  render() {
    return (
      //if we dont wanna wrap h1 or h2 or sometthing else into the div we use React.Fragment or only empty angles

      <div className="App">
        <Navbar title="Github finder" icon="fab fa-github" />
        {/* we added the container around the users */}
        <div className="container">
          {/* we are passing the users from state to the props*/}

          {/* passing up the props from Search.js */}
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
