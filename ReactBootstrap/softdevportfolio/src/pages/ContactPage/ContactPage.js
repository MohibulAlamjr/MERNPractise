
import React, { Component,Fragment } from 'react'
import ContactSection from '../../components/ContactSection/ContactSection'
import Footer from '../../components/footer/Footer'
import PageTop from '../../components/pageTop/PageTop'
import TopNavigation from '../../components/TopNevigation/TopNavigation'

export default class ContactPage extends Component {
    render() {
        return (
            <Fragment>
         <TopNavigation title='Contact'/>
         <PageTop pageTitle='Contact'/>
         <ContactSection/>
         <Footer/>

        </Fragment>
        )
    }
}
