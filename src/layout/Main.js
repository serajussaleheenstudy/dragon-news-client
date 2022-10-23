import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/shared/left-side-nav/LeftSideNav';
import RightSideNav from '../pages/shared/right-side-nav/RightSideNav';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <Header>

            </Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;