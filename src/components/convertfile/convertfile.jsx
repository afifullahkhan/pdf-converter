import React, { useState } from 'react';
import file1 from '../../assets/cover1.PNG';
import file2 from '../../assets/cover2.PNG';
import file3 from '../../assets/cover3.PNG';

import { Container, Row, Col } from "reactstrap";


import style from './convertfile.module.scss';


const data = [
    {
      img: file1,
      head:'Quick and easy conversions',
      heading:'Quick and easy conversions',
      text: "With just a simple drag-and-drop, you can convert PDF to Word within seconds. There’s no file size limit nor even the need to register to use our service.",
    },
    {
      img: file2,
      head:'Quick and easy conversions',
      heading:'We keep your files safe!',
      text: "We care about privacy. All files will be deleted from our servers forever after one hour. To know more about how much we care, read our privacy policy.",
    },
    {
      img: file3,
      head:'Quick and easy conversions',
      heading:'All platforms are welcome!',
      text: "Our PDF to Word converter works on all computers - no matter if you use Mac, Windows or Linux.",
    },
   
  ];

const Content=()=>{
    
    return(
        <Container className={style.main}>
            <Row>
                {data.map((item, i) => (
                    <Col sm={12} md={4}>
                    <div>                
                <br/>
                <img src={item.img} className={style.image}/>
                <br/>       
                <a className={style.text}>{item.head}</a>
                <a className={style.texthead}>{item.heading}</a>
                <p className={style.textarea}>{item.text}</p>
                </div>
        </Col>
        ))}
      </Row>
    </Container>

    )
}

export default Content;



