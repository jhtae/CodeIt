import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Components
import Sidebar from './sidebar/sidebar_container';
import MainContainer from './main/main_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/" component={MainContainer} />
          <ProtectedRoute exact path="/client" component={MainContainer} />
        </Switch>
      </main>
    );
  }
}

export default App;