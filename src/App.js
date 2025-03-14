import './App.css';
import { Fragment } from 'react';
import MainHeader from './components/Header/MainHeader.js';
import Login from './components/Login/Login.js';

function App() {
  return (
    <Fragment>
      <MainHeader/>
      <main>
        <Login />
      </main>
    </Fragment>
  );
}

export default App;
