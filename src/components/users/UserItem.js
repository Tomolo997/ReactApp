import React from 'react';
import PropTypes from 'prop-types';

//user item vzame argument user
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //Tukaj passamo "state" kot props, katerega smo dodali v Users componenti v UserItem
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark bnt-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
