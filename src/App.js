import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Main from './Component/Main';
import Favorite from './Component/Favorite';

class App extends React.Component {

  render() {
    return(
      <>
      <Header/>
        <Router>
          <Switch>
            <Route exact path="/Main">
             <Main/>
            </Route>
            <Route exact path="/Favorite">
             <Favorite/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;