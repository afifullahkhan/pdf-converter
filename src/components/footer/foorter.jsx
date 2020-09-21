import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Image from '../../assets/logo.PNG';
import foot1 from '../../assets/foot1.PNG';
import foot2 from '../../assets/foot2.PNG';

import style from './footer.module.scss'

const footer=()=>{
    return(
        <div className={style.main}>
              <Container >
                  <br/>
            <Row className={style.appdown}>
            <Col sm={12} md={6}>
                <p className={style.link}>
                <img src={Image} alt='logo'/>
                </p>
                <p className={style.link}>We make PDF easy.</p>
                
            </Col>
            <Col sm={4} md={2}>
                <p className={style.head}>Company</p>
                <p className={style.link}>About</p>
                <p className={style.link}>Help</p>
                <p className={style.link}>Blogs</p>
            </Col>
            <Col sm={4} md={2}>
                <p className={style.head}>Product</p>
                <p className={style.link}>Team</p>
                <p className={style.link}>Web Integration</p>
                <p className={style.link}>Developers</p>
            </Col>
            <Col sm={4} md={2}>
                <p className={style.head}>Apps</p>
                <p className={style.link}>Download Smallpdf</p>
                <p className={style.link}>iOS App</p>
                <p className={style.link}>Android App</p>
            </Col>
            
            </Row>
            </Container>
    <hr/>
                <Row className={style.appdown}>
                <Col sm={12} md={8}>
                </Col>
                <Col sm={6} md={2}>
                    <img src={foot1}/>
                </Col>
                <Col sm={6} md={2}>
                    <img src={foot2}/>
                </Col>
            </Row>
            <div   className="container-fluid" style={{backgroundColor:"#F4F4F4"}}>
            <Row className={style.appdown} >
               

                
                <Col sm={12} md={9}>
                    <p className={style.link}>© 2020 Smallpdf AG — Made withfor the people of the internet.</p>
                </Col>
                <Col sm={4} md={1}>
                    <p className={style.link}>Privacy & Terms</p>
                </Col>
                <Col sm={4} md={1}>
                    <p className={style.link}>Contact Us</p>
                </Col>
                <Col sm={4} md={1}>
                    <p className={style.link}>English</p>
                </Col>
                
            </Row>
            </div>
        </div>
    )
}

export default footer;