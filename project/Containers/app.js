require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../store/index'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import GridComponent from '../Components/grid';
import {SummaryActive, SummaryUsers} from '../Components/summaries';
import UserDetails from '../Components/user-details';

const store = configureStore();

const App = ({children}) =>
  <div>
    <h1>Our awesome app</h1>
    <ul role="nav">
      <li><Link to="/grid">Grid</Link></li>
      <li><Link to="/details">Details</Link></li>
    </ul>
    {children}
  </div>;


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <App />
        <Switch>
          <Route path="/grid" component={GridComponent}/>
          <Route exact path="/details" component={UserDetails}/>
          <Route path="/details/:id" component={UserDetails}/>
        </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
