import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './components/topBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNevigation/TopNavigation';
import Analysis from './components/analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProjets from './components/ReacentProjects/RecentProjets';
import Courses from './components/Courses/Courses';
import Vedio from './components/vedio/Vedio';
import ClientReview from './components/ClientReview/ClientReview';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <TopNavigation></TopNavigation>
      <TopBanner></TopBanner>
      <Services></Services>
      <Analysis></Analysis>
      <Summary></Summary>
      <RecentProjets></RecentProjets>
      <Courses></Courses>
      <Vedio></Vedio>
      <ClientReview></ClientReview>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
