import React, { Component } from "react";
import * as $ from "axios";
import User from "../../components/ClientUser/clientA";
import "./clientpage.css";
import Measurements from "../../components/ClientUser/clientM";
import Pic from "../../components/ClientUser/clientP";
import Orders from '../../components/ClientUser/clientO';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";
import { setSession, getIdToken, handleAuthentication, isAuthenticated } from '../../components/Auth/Auth';
import jwt_decode from 'jwt-decode';
import { isNull } from "util";
import ClientModal from "./clientModal";

class Clientpage extends Component {
  state = {

    image: {
      type: "Profile",
      imagesrc: ''
    },
    user: null,
    flag: true,
    token: '',
    name: '',
    modal: false,
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    profile_picture: "",
    orderid: '',
    orders: [],
    orderList: []
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  getUser = event => {
    $.get(`api/users/${this.state.token}`).then(results => {
      
      this.setState({ user: results.data });
      this.setState({ orders: results.data.orders })
      this.getOrder(this.state.orders);
    });
  }

   getOrder = (orders) => {

        const orderItems = [];

        orders.map((order) => {
            $.get(`/api/orders/${order}`)
                .then((orderData) => {
                    orderItems.push(orderData.data[0]);
                    this.setState({ orderList: orderItems });
                    console.log(this.state.orderList)
                })
                .catch((error) => {
                    console.log(error);
                });

        });

    }

  initiateSession = () => {
    let idToken = getIdToken();
    let info = jwt_decode(idToken);
    console.log('I am info', info)
    localStorage.setItem("token", info.sub);
    localStorage.setItem("name", info.nickname);
    this.setState({
      token: info.sub,
      name: info.given_name
    })
  }

  componentDidMount() {
    
    //let token = "";

    if (getIdToken()) {
      this.initiateSession();
    } else {
      setSession();
      this.initiateSession();
    }

    this.setState({
      token: localStorage.getItem('token'),
      name: localStorage.getItem('name')
    });
    

    console.log("auth_stuff", localStorage.getItem("token"));
    $.post('/api/session', {
      token: localStorage.getItem('token')
      
    }).then((response) => {
      console.log('success');
      console.log('session data', response);
      console.log("local storage", localStorage.getItem('token'));
      
      console.log(this.state.token)
      const flag = false;
      const sessionData = response.data;
      console.log("auth_stuff", sessionData, 'verify', localStorage.getItem('token'))
      if (sessionData === null) {
        $.post('/api/users', {
          token: this.state.token,
          userId: this.state.name,
          category: "client"
        }).then((response) => {
          console.log("users", response);
          // this.getTest();
        })
      }
      this.getUser();
      // this.getOrder()
    });

    
  }

  

    // $.post('/api/test', {
    //   token: token,
    //   category:'client'
    //   }).then((data) => {
    //   console.log('user posted',data)

    //   } )

  // }


  render() {
    return (
      <div>
        <StyleHeader2 />
        <div className='welcome'>Welcome Lily!</div>
        <div className="userDiv">

          <div className="userImage">
            {this.state.user && (
              <Pic image={this.state.user.profile_picture} />
            )}
            
          </div>
          <div className="userInfo">
          <div className="addressinfo">
            <div className="infoTitle">Address</div>
            <div className="userDBinfo">
              {this.state.user && (
                <User
                  key={this.state.user._id}
                  id={this.state.user._id}
                  street={this.state.user.street}
                  city={this.state.user.city}
                  state={this.state.user.state}
                  country={this.state.user.country}
                />
              )}
              
            </div>
            </div>
            
            <div className="measurements">
              <span className="measTitle">Measurements</span>
              <br />
              <div className="measInfo">
                {this.state.user  && this.state.user.measurement && (
                  <Measurements
                    key={this.state.user._id}
                    id={this.state.user._id}
                    waist={this.state.user.measurement.waist}
                    hips={this.state.user.measurement.hips}
                    klength={this.state.user.measurement.knee_length}
                    llength={this.state.user.measurement.leg_length}
                    bplength={this.state.user.measurement.bp_length}
                    blength={this.state.user.measurement.back_length}
                    alength={this.state.user.measurement.arm_length}
                  />
                )}
                
                <ClientModal 
                  getClient={this.getUser}
                />
              </div>
            </div>
            <div className='orders'>
              <br/><h4 className='orderTitle'>My Orders</h4>
              {/* {this.state.orderList.map((data => ( */}
                
        
                <Orders 
                  orderList={this.state.orderList}
                />
              {/* )))} */}
            
            </div>
          </div>
        </div>
        <StyleFooter />
      </div>
    );
  }
}

export default Clientpage;
