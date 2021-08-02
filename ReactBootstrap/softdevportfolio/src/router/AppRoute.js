import React, { Fragment } from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import MyServicesPage from '../pages/MyServices/MyServicesPage';
import AllCoursePage from '../pages/AllCourse/AllCoursePage';
import PortfolioPage from '../pages/portfolioPage/PortfolioPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import AboutPage from '../pages/About/AboutPage';




const AppRoute = () => {
    return (
        <Fragment>
          <Switch>
              
              <Route exact path='/' component={HomePage} />
              <Route path='/myservices' component={MyServicesPage}/>
              <Route path='/allcourses' component={AllCoursePage}/>
              <Route path='/portfolio' component={PortfolioPage}/>
              <Route path='/contact' component={ContactPage}/>
              <Route path='/about' component={AboutPage}/>
              
              
          </Switch>

        </Fragment>
    );
};

export default AppRoute;