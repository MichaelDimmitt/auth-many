import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Error, FourSquareAuth } from './ReactLoadable';

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
          <Route path="/" exact component={ FourSquareAuth } />
          <Route path="/error" exact component={ Error } />
          <Route path="/foursquareauth" exact component={ FourSquareAuth } />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
  }
}

export default Routes
