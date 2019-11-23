import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../components/Home/Home";
// import Register from '../components/Auth/Register';
// import Login from '../components/Auth/Login';
import ProfileContainer from '../components/containers/ProfileContainer/ProfileContainer';
import PostDetailContainer from '../components/containers/PostDetailContainer/PostDetailContainer';
import CityDetailContainer from '../components/containers/CityDetailContainer/CityDetailContainer';


export default () => 
(
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path='/register' component={Register} /> */}
    {/* <Route path='/login' render={() => <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} /> */}
    <Route path='/profile' component={ProfileContainer} />
    {/* <Route path='/logout' render={() => <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} /> */}
    <Route path='/postdetail/:id' component={PostDetailContainer} />
    <Route path='/cities/:id' component={CityDetailContainer} />
  </Switch>
)