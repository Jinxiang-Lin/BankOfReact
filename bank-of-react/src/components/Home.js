import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import "./styles/home.css";
class Home extends Component {
  render() {
    return (
      <div className="homeStyle">
        <img
          className="img-center"
          src="https://www.waterfordbankna.com/media/2019/10/personalBanking.png"
          alt="bank"
        />
        <div className="home-nav">
          <h1>Bank of React</h1>

          <Link to="/login" className="links">
            Log in
          </Link>
          <Link to="/userProfile" className="links">
            User Profile
          </Link>
          <Link to="/debits" className="links">
            Debits
          </Link>
          <Link to="/credits" className="links">
            Credits
          </Link>

          <h2>
            <AccountBalance accountBalance={this.props.accountBalance} />
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
