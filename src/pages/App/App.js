import React, {Component} from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import {Route, Switch } from 'react-router-dom'
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
        user: userService.getUser()
    };
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser() });
}


render(){
  return (
    <div className="App">
    <header><nav>
      <NavBar user={this.state.user}
        handleLogout={this.handleLogout}
         />
    </nav></header>
      <Switch>
      <Route exact path="/" render={() =>
        <MainPage />
      } />
      <Route exact path="/details" render={() =>
        <h1>This is the details page.</h1>
      } />
     
     <Route exact path='/signup' render={({ history }) => 
      <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      <Route exact path='/login' render={({ history }) => 
      <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
      </Switch>
    </div>
  );
}
}

export default App;
