import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Modal,
  Button,
  FormGroup,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  ModalBody
} from "reactstrap";

export default function IndexNavbar() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [aadharFocus, setAadharFocus] = React.useState(false);
  const [personFocus, setPersonFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [demoModal, setDemoModal] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>findR• </span>
            rooms roommates renters
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            one stop destination to find rooms,roommates and tenants
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="#pablo" onClick={(e) => e.preventDefault()}>
                  findR•About
                </Link>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                rel="noopener noreferrer"
                title="register to gain access"
                onClick={() => setFormModal(true)}
              >
              <Button className="border-0 btn-link" color="neutral"><i className="fas fa-users" color="link"></i>Register</Button>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                onClick={() => setDemoModal(true)}
                rel="noopener noreferrer"
                title="Login to resume your quest"
              >
                <Button className="border-0 btn-link" color="neutral"><i className="fas fa-sign-in-alt"></i>Login</Button>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                title="know about us"
              >
                <Button className="border-0 btn-link" color="neutral"><i className="fas fa-users"></i>About Us</Button>
              </NavLink>
            </NavItem>
	<NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                title="know about us"
              >
                <Button className="border-0 btn-link" color="neutral"><i className="fas fa-cogs"></i>API Documentation</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Modal
            modalClassName="modal-black fade"
            isOpen={formModal}
            role="document"
            toggle={() => setFormModal(false)} 
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
        </div>
        <br></br>
        <ModalBody>
        <Row className="row-grid justify-content-between align-items-center">
          <Col className="mb-lg-auto" lg="12">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square-purple-1.png").default}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                <Row className="row-grid justify-content-between align-items-center">
                  <Col className="mb-lg-auto" lg="12">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": aadharFocus,
                    })}
                  >
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-badge" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Aadhar Number"
                      type="Number"
                      onFocus={(e) => setAadharFocus(true)}
                      onBlur={(e) => setAadharFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": personFocus,
                    })}
                  >
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-tie-bow" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="User Type"
                      type="select"
                      onFocus={(e) => setPersonFocus(true)}
                      onBlur={(e) => setPersonFocus(false)}
                      color="muted"
                    >
                      <option style={{ backgroundColor: '#525f7f' }}>Choose your Title</option>
                      <option style={{ backgroundColor: '#525f7f' }}>Tenant</option>
                      <option style={{ backgroundColor: '#525f7f' }}>Owner</option>
                    </Input>
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <Link to="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </Link>
                      .
                    </Label>
                  </FormGroup>
                  </Col >
                  <Col className="mb-lg-auto p-3 text-center" lg="12" sm='12' md='12'>
                  <Button className="btn-round" color="primary" size="lg">
                  Get Started
                  </Button>
                  </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </ModalBody>
      </Modal>
          <Modal
            modalClassName="modal-black"
            isOpen={demoModal} toggle={() => setDemoModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in with</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/github.svg").default}
                  />
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/google.svg").default}
                  />
                </Button>
              </div>
              <div className="text-center text-muted mb-4 mt-3">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Row className="row-grid justify-content-between">
                  <Col lg='6' md='6' sm='6'>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me!
                  </Label>
                  </Col>
                  <Col lg='6' md='6' sm='6'>
                  <Button className="border-0 btn-link" color="default" style={{paddingTop: '1px',borderTopWidth: '1px',marginLeft: '37px'}}><i className="tim-icons icon-puzzle-10 px-1"></i>Forgot Password</Button>
                  </Col>
                  </Row>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
      </Container>
    </Navbar>
  );
}
