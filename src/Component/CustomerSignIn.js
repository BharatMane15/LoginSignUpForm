
import React, { react,Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Container, Row, Col} from 'react-bootstrap'
import GoogleLogin from 'react-google-login'
 import './CustomerSignIn.css';
class CustomerSignUp extends Component {
    constructor(props) {
      super(props);
  
      this.state = { isLoginOpen: true, isSellerOpen: false };
    }
    showLoginBox() {
      this.setState({ isLoginOpen: true, isSellerOpen: false });
    }
  
    showSeallerBox() {
      this.setState({ isSellerOpen: true, isLoginOpen: false });
    }
  
    render() {
      return (
        <>
          <Container>
            <Row>
              <div class="container">
                <div class="row">
                  <div class="col-sm"> </div>
                  <div class="col-sm">
                    <Row>
                      <Col> </Col>
                      <div className="Head">
                        <Col
                          className={
                            "controller" +
                            (this.state.isLoginOpen ? "selected-controller" : "")
                          }
                          onClick={this.showSeallerBox.bind(this)}
                        >
                          <li className="active">
                            <a> NEW USER ? </a>
                          </li>
                        </Col>
                        <a className="mid"> | </a>
                        <Col
                          className={
                            "controller" +
                            (this.state.isSellerOpen ? "selected-controller" : "")
                          }
                          onClick={this.showLoginBox.bind(this)}
                        >
                          <li className="active">
                            <a> ALREADY REGISTERED ? </a>
                          </li>
                        </Col>
                      </div>
                      <hr />
                      <div>
                        
                        {this.state.isLoginOpen && <LoginBox />}
                        {this.state.isSellerOpen && <SellerBox />}
                      </div>
                      <Col> </Col>
                    </Row>
                  </div>
                  <div class="col-sm"> </div>
                </div>
              </div>
            </Row>
          </Container>
        </>
      );
    }
  }
  
  class LoginBox extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }
  
    submitLogin(e) {}
  
    render() {
      return (
        <Col>
          <div class="container">
            <Form>
              <div className="center1"> Sign in with... </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="EMAIL ADDRESS*" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="PASSWORD*" />
              </Form.Group>
              <div className="d-grid gap-2 mt-2 mb-2">
                <Button
                  className="btn"
                  variant="dark"
                  type="submit"
                  onClick={this.submitLogin.bind(this)}
                  active
                >
                  SIGN IN
                </Button>
                <Form.Label className="center"> Forgot password ? </Form.Label>
              </div>
              <p>
                <span> OR </span>
              </p>
              <div className="d-grid gap-2 mt-2">
                <Button
                  className="Prime"
                  type="submit"
                  width="100%"
                  onClick={this.submitLogin.bind(this)}
                  active
                >
                  <span>
                    <a href="#" className="fa fa-facebook">
                    </a>
                  </span>
                  sign in with facebook
                </Button>
              </div>
              <br />
              <div> </div>
              <div className="d-grid gap-2 pl-2">
                <Button
                  className="Border"
                  variant="light"
                  type="submit"
                  width="100%"
                  onClick={this.submitLogin.bind(this)}
                >
                  <span>
                    <a href="#" className="fa fa-google">
                      
                    </a>
                  </span>
                  sign in with google
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      );
    }
  }
  
  class SellerBox extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }
  
    submitLogin(e) {}
  
    render() {
      return (
        <Col>
          <div class="container">
            <Form>
              <div className="center1"> Sign up with... </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="FULL NAME*" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="USER NAME*" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="EMAIL ADDRESS*" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="MOBILE NUMBER*" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="PASSWORD*" />
              </Form.Group>
              <div className="d-grid gap-2 mt-2 mb-2">
                <Button
                  className="btn"
                  variant="dark"
                  type="submit"
                  onClick={this.submitLogin.bind(this)}
                  active
                >
                  SIGN IN
                </Button>
                <Form.Label className="centerNew">
                  
                  By clicking "Sign Up," you accept our Terms of Use & Privacy
                  Policy.
                </Form.Label>
                
              </div>
              <p>
                <span> OR </span>
              </p>
              <div className="d-grid gap-2 mt-2">
                <Button
                  className="Prime"
                  type="submit"
                  width="100%"
                  onClick={this.submitLogin.bind(this)}
                  active
                >
                  <span>
                    <a href="#" className="fa fa-facebook">
                      
                    </a>
                  </span>
                  sign in with facebook
                </Button>
              </div>
              <br />
              <div> </div>
              <div className="d-grid gap-2 pl-2">
                <Button
                  className="Border"
                  variant="light"
                  type="submit"
                  width="100%"
                  onClick={this.submitLogin.bind(this)}
                >
                  <span>
                    <a href="#" className="fa fa-google">
                    
                    </a>
                  </span>
                  sign in with google
                </Button>
          
              </div>
            </Form>
          </div>
        </Col>
      );
    }
  }
  
  export default CustomerSignUp;