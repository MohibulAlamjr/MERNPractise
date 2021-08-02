import React from 'react';
import { Fragment } from 'react';
import PageTop from './components/pageTop/PageTop.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/asset/css/custom.css'

import TopNavigation from './components/TopNevigation/TopNavigation.js';

import HomePage from './pages/HomePage/HomePage';
import TopBanner from './components/topBanner/TopBanner.js';
function App() {
  return (
    <Fragment>
     <TopNavigation></TopNavigation>
     {/* <HomePage></HomePage> */}
     <PageTop pageTitle="About Us"></PageTop>
     {/* <TopBanner></TopBanner> */}
    </Fragment>
  );
}
export default App;
