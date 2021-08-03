import React, { Fragment } from 'react';
import Description from '../../components/description/Description';
import Footer from '../../components/footer/Footer';
import PageTop from '../../components/pageTop/PageTop';
import TopNavigation from '../../components/TopNevigation/TopNavigation';

const AboutPage = () => {
    return (
        <Fragment>
            <TopNavigation title='Home'></TopNavigation>
            <PageTop pageTitle='About Us'></PageTop>
            <Description></Description>
            <Footer></Footer>

        </Fragment>
    );
};

export default AboutPage;