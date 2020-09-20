import React from 'react';
import Navbar from '../../components/navbar/navbaar';
import Filearea from '../../components/fileupload/fileupload';
import Content from '../../components/content/content';
import Convert from '../../components/convertfile/convertfile';
import Footer from '../../components/footer/foorter'

import {Col,Container,Row} from 'reactstrap'
import file from '../../assets/file.PNG'
import files from '../../assets/files.PNG'
import style from './main.module.scss'


const Main=()=>{
    return(
        <div>
            <Navbar/>
            <br/>
            <Container>
                
            <Row>
                <Col xs="12">
                 <h3><img src={file} width="40" height="40"/> PDF to Word Converter</h3> 
                 <p className={style.text}>Magically convert PDFs to editable Word Files</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs="12">
                    <Filearea/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs="12">
                    <Content/>
                </Col>    
            </Row>
            <br/>
            <br/>
            </Container>
            <div className={style.divider}></div>
            <br/>
             <br/>
             <Container className={style.images}>
                 <Row>
                     <Col md={6} sm={12}>
                     <img src={files}/>
                     </Col>
                     <Col md={6} sm={12}>
                     <img src={files}/>
                     </Col>
                 </Row>
                 <br/>
                 <br/>
             </Container>
             <br/>
             <Row className={style.convert}>
                 <Container>
                 <h3 className={style.convertheading}>How To Convert PDF To Word</h3>
                 <Col sm={12}>
                    <Convert/>
                 </Col>
                 <br/>
                 <br/>
                 <a href="#">Show All</a>
                 <br/>
                 <br/>
                 </Container>       
             </Row>
            
             <Row>
                 <Col sm={12}>
                    <Footer/>
                 </Col>
             </Row>
                  
        </div>
    )
}

export default Main;