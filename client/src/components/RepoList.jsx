import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <div>{props.repos.length}</div>
    {props.repos.map(repo =>
      <li key={repo.id}>
        <a href={`${repo.html_url}`}> {repo.name}</a>
      </li>)}
  </div>
)

export default RepoList;