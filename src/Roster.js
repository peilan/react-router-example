import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'

const FullRoster = props => (<div>
    <h2>FullRoster</h2>
    <ul>
      {[0,1,2,3,4,5].map(id => <li><Link to={`/roster/${id}`}>Player {id}</Link></li>)}
    </ul>
  </div>);
  
const Player = props => <div>Player: {props.match.params.number}</div>; 

class Main extends Component {
  render() {
    return <div>
        <h2>This is a roster page!</h2>
        <Switch>
          <Route exact path='/roster' component={FullRoster}/>
          <Route path='/roster/:number' component={Player}/>
        </Switch>
      </div>
  }
}

export default Main;
