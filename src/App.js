import React from 'react';

import './App.css';
import MainPage from './components/mainPage';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';


function App() {
  return (
    <div className="App">
      <MainPage />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
