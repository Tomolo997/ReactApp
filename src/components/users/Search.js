import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext';
const Search = ({ setAlert }) => {
  const GithubContext = useContext(githubContext);

  //we have created the text state
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'ligtt');
    } else {
      GithubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {GithubContext.users.length > 0 && (
        <button
          className="bt btn-light btn-block"
          onClick={GithubContext.clearUsers}
        >
          Clear Users
        </button>
      )}
    </div>
  );
};

Search.propType = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
