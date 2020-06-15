import React, { useState } from "react";
import UserDetails from "./UserDetails";

function User({ user }) {
  const [details, setDetails] = useState(false);

  const showDetails = event => {
    event.preventDefault();
    setDetails(!details);
  };

  return (
    <li>
      <div className="click" onClick={event => showDetails(event)}>
        <img src={user.avatar_url} alt={user.login} />
        <span className="bold">{user.login}</span>
      </div>
      {details && <UserDetails id={user.id} user={user} />}
    </li>
  );
}

export default User;
