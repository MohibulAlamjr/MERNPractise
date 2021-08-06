import React, { Component } from 'react';
import { Card } from 'antd';
import { Image } from 'antd';
import 'antd/dist/antd.css';


class Caard extends Component {
    render() {
        return (
            
            <>
            
            <Card title=""  style={{ width: 300 }}>
            <Image className = "image1"
            preview={false}
            src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/lightroom.svg"
            width={35}
           
          />

            <Image className = "image2"
            preview={false}
            src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/photoshop.svg"
            width={35}
           
          />
            <h2>Photography  (20GB)</h2>
            <h3>US$9.99/mo</h3>
            <p>Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).</p>
            <p> <a href = "#">Compare photography plans <br/> See plan & pricing details</a> </p>
          </Card>
         
        </>
        );
    }
}

export default Caard;
