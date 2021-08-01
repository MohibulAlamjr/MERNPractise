import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {BarChart, Bar, XAxis, ResponsiveContainer} from 'recharts';

export default class Analysis extends Component {


  constructor (){
      super ();
      this.state = {
         
        data :[

            {Technology : 'Node.js', Projects : 100},
            {Technology : 'Mongodb', Projects : 80},
            {Technology : 'Sql', Projects : 90},
            {Technology : 'Bootstrap', Projects : 95},
            {Technology : 'Jquery', Projects : 60},
            {Technology : 'React', Projects : 90},
            {Technology : 'PHP', Projects : 100},
            {Technology : 'Angular', Projects : 65}

        ]
      }
  }

    render() {
        var blue = "rgb(241, 134, 94)"
        return (
            <Fragment>
                <Container className = "text-center">
                    <h1 className = "serviceTitle">TECHNOLOGY USER</h1>
                    <Row>
                        <Col  lg = {6} md = {12} sm = {12}>

                            <div style = {{width : '100%', height : '300px'}}>
                         
                        <ResponsiveContainer>
                        <BarChart width = {100} height = {300} data = {this.state.data}>
                             <XAxis dataKey = 'Technology'> </XAxis>
                             <Bar dataKey = "Projects" fill = {blue}>

                             </Bar>
                         </BarChart>
                        </ResponsiveContainer>

                        </div>
                        </Col>
                        <Col lg = {6} md = {12} sm = {12}>

                       <p className = "loremParagraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                       </p>

                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
