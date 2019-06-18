require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import ReactDOM from 'react-dom';
import GridComponent from './grid';
import {SummaryActive, SummaryUsers} from './summaries';
import UserDetails from './user-details';

ReactDOM.render(
  <UserDetails/>,
  document.getElementById('app')
);
