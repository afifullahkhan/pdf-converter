import React, { useState } from 'react';
import file1 from '../../assets/1.PNG';
import file2 from '../../assets/2.PNG';
import file3 from '../../assets/3.PNG';

import { Container, Row, Col } from "reactstrap";


import style from './content.module.scss';


const data = [
    {
      img: file1,
      heading:'Quick and easy conversions',
      text: "With just a simple drag-and-drop, you can convert PDF to Word within seconds. There’s no file size limit nor even the need to register to use our service.",
    },
    {
      img: file2,
      heading:'We keep your files safe!',
      text: "We care about privacy. All files will be deleted from our servers forever after one hour. To know more about how much we care, read our privacy policy.",
    },
    {
      img: file3,
      heading:'All platforms are welcome!',
      text: "Our PDF to Word converter works on all computers - no matter if you use Mac, Windows or Linux.",
    },
    {
      img: file1,
      heading:'PDF to Word in the best quality',
      text: "PDF to Word conversion is hard. To bring you the very best quality to convert your PDF files, we have partnered with Solid Documents - the best solution provider on the market.",
    },
    {
      img: file2,
      heading:'Convert a PDF to a DOC in seconds',
      text: "It is seriously ridiculously easy with our tool to convert files online. Try it and you will love it.",
    },
    {
      img: file3,
      heading:'Magic conversion in the cloud',
      text: "We have many servers in the cloud which do nothing else than converting PDF to Word files. So, lean back and let them do the work.",
    },
  ];

const Content=()=>{
    
    return(
        <Container>
            <Row>
                {data.map((item, i) => (
                    <Col sm={12} md={4}>
                    <div>                
                <br/>
                <img src={item.img}/>
                <br/>            
                <br/>
                <p className={style.texthead}>{item.heading}</p>
                <p className={style.textarea}>{item.text}</p>
                </div>
        </Col>
        ))}
      </Row>
    </Container>

    )
}

export default Content;



