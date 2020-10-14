import React, {Component} from 'react';
import './App.css';
// import MainPage from '../MainPage/MainPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import {Route, Switch, NavLink } from 'react-router-dom'
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as trackAPI from '../../services/tracks-api';
import TrackListPage from '../../components/TrackListPage/TrackListPage';
import AddTrackPage from '../../components/AddTrackPage/AddTrackPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
        user: userService.getUser(),
        tracks: []
    };
}
async componentDidMount() {
  const tracks = await trackAPI.getAll();
  this.setState({tracks});
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser() });
}

handleAddTrack = async newJobData => {
  const newJob = await trackAPI.create(newJobData);
  this.setState(state => ({
    tracks: [...state.tracks, newJob]
  }),
  // Using cb to wait for state to update before rerouting
  () => this.props.history.push('/'));
 }


render(){
  return (
    <div className="App">
    <header className="App-header">Track-A-Job<nav>
    <NavLink exact to='/'>Tracker LIST</NavLink>
    &nbsp;&nbsp;&nbsp;
    <NavLink exact to='/add'>Add Tracker</NavLink>
      <NavBar user={this.state.user}
        handleLogout={this.handleLogout}
         />
    </nav></header>
      <Switch>
      
     
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

          <main>  
          <Route exact path='/' render={() => 
            <TrackListPage
              tracks={this.state.tracks}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddTrackPage
    handleAddTrack={this.handleAddTrack}
  />
} />
        </main>
      </Switch>
    </div>
  );
}
}

export default App;
