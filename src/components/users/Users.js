import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  //when we bring this in, we should have the access to the githubContext.
  {
    /* <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }} */
  }
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/* props as  */}
        {users.map((user) => {
          //we pass the Useritem into the component Users and give him the property user
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

// we can add the styles as an object to the div we want

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '10px',
};

export default Users;
