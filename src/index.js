import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import ThemeContainer from './components/Theme'
import './styles/_main.scss';
import Routes from './routes';

ReactDOM.render(
  <ThemeContainer>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ThemeContainer>,
  document.getElementById('root')
);
