import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Shelude from './Shelude'
import Roster from './Roster'

class Main extends Component {
  render() {
    return <Switch>
      <Route path='/shelude' component={Shelude}/>
      <Route path='/roster' component={Roster}/>
    </Switch>;
  }
}

export default Main;
