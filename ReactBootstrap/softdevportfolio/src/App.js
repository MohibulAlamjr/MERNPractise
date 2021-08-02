import React from 'react';
<<<<<<< HEAD
import TopNavigation from './components/TopNevigation/TopNavigation';
import 
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <div>
      <TopNavigation></TopNavigation>
      <PageTop></PageTop>
     
      
    </div>
=======
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
>>>>>>> f9661c2d53a3f1e37b79a3ec4adfc355b8efb14a
  );
}

export default App;
