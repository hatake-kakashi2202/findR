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
      paddingRight: '5 vw',
    	borderRightWidth: '5 vw',
    	marginRight: '10 vw',
    	width: '7 vw',
    	left: 'auto',
    	right: '10 vw',
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
                                width: "20 vw",
                                paddingTop: "5 vw",
                                float:'left'
                              }}
            >
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
