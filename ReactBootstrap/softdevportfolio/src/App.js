import React from 'react';
import { Fragment } from 'react';
import PageTop from './components/pageTop/PageTop.js'

import TopNavigation from './components/TopNevigation/TopNavigation.js';

import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <Fragment>
     <TopNavigation></TopNavigation>
     <PageTop></PageTop>
    </Fragment>
  );
}

export default App;
