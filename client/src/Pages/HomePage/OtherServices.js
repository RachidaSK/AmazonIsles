import React, { Component } from "react";
import { Container, Jumbotron, Row, Col, Fa, NavLink, Footer } from "mdbreact"
import { Card, CardBody, CardImage, CardTitle, CardText, MDBCol, MDBRow } from 'mdbreact';

class OtherServices extends Component {
  render() {
    return (
        
        <Row>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown one ">
                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/sewingnew.jpg" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Custom Tailors</a></h4>
                        <p className="card-text">Your New Secret Weapon</p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown two">


                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/ryannew.jpg" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Childcare </a></h4>
                        <p className="card-text">Trusted Professionals</p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown three">
                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/cleaningnew.jpg" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Cleaning Services</a></h4>
                        <p className="card-text">Ain't Nobody Got Time 4That!</p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown four">
                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/catsnew.jpg" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Pet Sitters</a></h4>
                        <p className="card-text">Because They're Family & More</p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        );
          }
        }
             

 export default OtherServices;
