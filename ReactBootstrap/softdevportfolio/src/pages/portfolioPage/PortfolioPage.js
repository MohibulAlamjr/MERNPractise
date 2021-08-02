import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import PageTop from '../../components/pageTop/PageTop';
import Portfolio from '../../components/portfolio/Portfolio';
import TopNavigation from '../../components/TopNevigation/TopNavigation';

const PortfolioPage = () => {
    return (
        <Fragment>
            <TopNavigation></TopNavigation>
            <PageTop pageTitle="Portfolio"></PageTop>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </Fragment>
    );
};

export default PortfolioPage;