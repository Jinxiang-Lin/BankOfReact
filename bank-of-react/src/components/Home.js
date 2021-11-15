import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <img
          src="https://www.waterfordbankna.com/media/2019/10/personalBanking.png"
          alt="bank"
        />
        <h1>Bank of React</h1>
        <Link to="/login">Log in</Link>
        <Link to="/userProfile">User Profile</Link>
        <Link to="/debits">Debits</Link>
        <Link to="/credits">Credits</Link>
        <h1>Account Balance</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;
