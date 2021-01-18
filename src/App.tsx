import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const { formatMessage: t } = useIntl();

  return (
    <div className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t({ id: 'app.common.next' })}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  );
}

export default App;
