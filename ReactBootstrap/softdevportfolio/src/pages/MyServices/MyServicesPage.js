import React, { Fragment } from 'react';
import PageTop from '../../components/pageTop/PageTop';
import TopNavigation from '../../components/TopNevigation/TopNavigation';
import Services from '../../components/Services/Services'
import Footer from '../../components/footer/Footer';

const MyServicesPage = () => {
    return (
      <Fragment>
     <TopNavigation title='Services'></TopNavigation>
     <PageTop pageTitle="Services"></PageTop>
     <Services></Services>
     <Footer></Footer>

      </Fragment>
    );
};

export default MyServicesPage;