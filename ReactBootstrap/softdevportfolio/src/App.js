import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './components/topBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNevigation/TopNavigation';
import Analysis from './components/analysis/Analysis';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div>
      <TopNavigation></TopNavigation>
      <TopBanner></TopBanner>
      <Services></Services>
      <Analysis></Analysis>
      <Summary></Summary>
    </div>
  );
}

export default App;
