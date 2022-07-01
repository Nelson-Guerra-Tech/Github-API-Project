import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
        <IconContainer>
          <FaGithub />
        </IconContainer>
        <h1>github finder</h1>
        <h4> you can Sign-In with Google or Github</h4>
        <button className='btn' onClick={loginWithRedirect}>
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

const IconContainer = styled.div`
  font-size: 15rem;
`;
