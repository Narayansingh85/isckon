import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ROUTE } from './constants';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';
import Footer from './components/Footer';
import './styles/main.scss';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path={ROUTE.HOME} component={HomeContainer} exact/>
            <Route path={ROUTE.BLOG} component={BlogContainer} exact/>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default AppComponent;
