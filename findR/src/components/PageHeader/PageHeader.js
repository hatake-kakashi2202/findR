/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PageHeader() {
const mystyle = {
        paddingRight: '50px',
    	borderRightWidth: '50px',
    	marginRight: '100px',
    	width: '765px',
    	left: 'auto',
    	right: '100px',
    };
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
	<div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left" style={{
    width: "1200px",
    paddingTop: "200px",
float:'left'}}>
              <Col lg="6" md="6" className="mh-100 mw-100">
                <h1 className="h1-seo brand">findR•</h1>
                <p className="text-white mb-3">
                  Today, it has become very difficult for people to find a room with preferred needs. Especially for people like Bachelors, who move to a new place face a lot of difficulty in finding a room of affordable budget, so to solve the above problems we use “findR”.
                </p>
	</Col>
              <Col xl="6" md="6" >
                <img
                  alt="..."
                  className="img-fluid mh-100 mw-100"
                  src={require("assets/img/room.png").default}
                />
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  );
}
