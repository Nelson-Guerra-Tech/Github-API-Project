import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

// this file allows us to use everything we need to use in the application, and makes it all accessible in the file through useContext.
// GithubContext

const rootUrl = 'https://api.github.com';

// creating a new context
const GithubContext = React.createContext();

// once invoked we have access to:
// Provider, Consumer - GithubContext.Provider

// seperate component cause we have more logic to code in here
// the whole application is children
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  return (
    <GithubContext.Provider
      value={{ githubUser, githubRepos, githubFollowers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
