import React, { useState, useEffect } from "react";

function UserDetails({ user }) {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetailsData = async login => {
    const url = `https://api.github.com/users/${login}`;
    const details = await fetch(url)
      .then(data => data.json())
      .catch(error => console.log(error));
    setDetails(details);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetailsData(user.login);
  }, [user.login]);

  if (loading) return <></>;

  return (
    <div className="details">
      <a href={details.html_url} target="_blank" rel="noopener noreferrer">
        {details.name && <p className="bold">{details.name}</p>}
        {details.blog && <p>{details.blog}</p>}
        {details.bio && <p>{details.bio}</p>}
        {details.location && <p>{details.location}</p>}
        <div className="section">
          <p>Public repos: {details.public_repos}</p>
          <p>Followers: {details.followers}</p>
          <p>Following: {details.following}</p>
        </div>
      </a>
    </div>
  );
}

export default UserDetails;
