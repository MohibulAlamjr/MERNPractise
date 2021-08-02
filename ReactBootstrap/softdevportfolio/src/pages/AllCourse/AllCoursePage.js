import React, { Fragment } from 'react';
import AllCourses from '../../components/allCourses/AllCourses';
import Footer from '../../components/footer/Footer';
import PageTop from '../../components/pageTop/PageTop';
import TopNavigation from '../../components/TopNevigation/TopNavigation';

const AllCoursePage = () => {
    return (
        <Fragment>
         <TopNavigation></TopNavigation>
         <PageTop pageTitle="Courses"></PageTop>
         <AllCourses></AllCourses>
         <Footer></Footer>

        </Fragment>
            
        
    );
};

export default AllCoursePage;