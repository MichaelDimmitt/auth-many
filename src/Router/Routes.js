import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Error, MeetupAuth, FourSquareAuth } from './ReactLoadable';

class Routes extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props)
    return (
        <Switch>
          <Route path="/" exact component={ MeetupAuth } />
          <Route path="/error" exact component={ Error } />
          <Route path="/meetupauth" exact component={ MeetupAuth} />
          <Route path="/foursquareauth" exact component={ FourSquareAuth } />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
  }
}

export default Routes
