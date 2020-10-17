import React, {Component} from 'react';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import {Route, Switch } from 'react-router-dom'
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as trackAPI from '../../services/tracks-api';
import TrackListPage from '../../components/TrackListPage/TrackListPage';
import AddTrackPage from '../../components/AddTrackPage/AddTrackPage';
import TrackDetailPage from '../../components/TrackDetailPage/TrackDetailPage';
import EditTrackPage from '../../components/EditTrackPage/EditTrackPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
        user: userService.getUser(),
        tracks: []
    };
}
async getUserTracker() {
  const tracks = await trackAPI.getAllUserTracks(this.state.user._id);
  this.setState({tracks});
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null, tracks: [] });
}

handleSignupOrLogin = () => {
  this.setState(state => ({
    user: userService.getUser()
    }),
    // Using cb to wait for state to update before rerouting
    () => this.getUserTracker());

} 



handleAddTrack = async newJobData => {
  const newJob = await trackAPI.create(newJobData);
  this.setState(state => ({
    tracks: [...state.tracks, newJob]
  }),
  // Using cb to wait for state to update before rerouting
  () => this.props.history.push('/'));
 }

 handleDeleteTrack= async id => {
  await trackAPI.deleteOne(id);
  this.setState(state => ({
    // Yay, filter returns a NEW array
    tracks: state.tracks.filter(t => t._id !== id)
  }), () => this.props.history.push('/'));
}

handleUpdateTrack = async updatedJobData => {
  const updatedTrack = await trackAPI.update(updatedJobData);
  // Using map to replace just the job that was updated
  const newTracksArray = this.state.tracks.map(j => 
    j._id === updatedTrack._id ? updatedTrack : j
  );
  this.setState(
    {tracks: newTracksArray},
    // This cb function runs after state is updated
    () => this.props.history.push('/')
  );
 }

render(){
  return (
    <div className="App">
    <header className="App-header">Track-A-Job
    <nav>
    {/* <NavLink exact to='/'>Tracker LIST</NavLink> */}
    &nbsp;&nbsp;&nbsp;
    
      <NavBar user={this.state.user}
        handleLogout={this.handleLogout}
        handleAddTrack={this.handleAddTrack}
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
              handleDeleteTrack={this.handleDeleteTrack}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddTrackPage
    handleAddTrack={this.handleAddTrack}
    user={this.state.user}
  />
} />

<Route exact path='/details' render={({location}) => 
 <TrackDetailPage location={location}/>
} />

<Route 
exact 
path='/edit' 
render={({ location }) => (
 <EditTrackPage
   handleUpdateTrack={this.handleUpdateTrack}
   location={location}
 />
)} 
/>
        </main>
      </Switch>
    </div>
  );
}
}

export default App;
