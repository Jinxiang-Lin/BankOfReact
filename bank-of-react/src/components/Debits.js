//class component
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/debit-credit.css";
class Debits extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      newDescription: "",
      newAmount: 0,
      date: "2017-11-27T15:36:09.609Z",
    };
  }

  handleDiscription = (e) => {
    this.setState({
      newDescription: e.target.value,
    });
  };
  handleChange = (e) => {
    this.setState({
      newAmount: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let newDate = new Date();
    let randomID = Math.floor(Math.random() * 9999);
    //console.log(JSON.stringify(newDate));
    const newD = {
      id: randomID,
      description: this.state.newDescription,
      amount: parseFloat(this.state.newAmount),
      date: JSON.stringify(newDate),
    };
    this.props.addDebit(newD);
  };
  render() {
    return (
      <div className="debits-style">
        <h1>Debits</h1>
        {this.props.debits.map((debit) => {
          return (
            <ul>
              <li key={debit.id}>
                <span>${debit.amount}</span>
                <span>{debit.description}</span>
                <span>{debit.date}</span>
              </li>
            </ul>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="discription">Description</label>
          <input type="text" onChange={this.handleDiscription} />

          <label htmlFor="number">Amount</label>
          <input type="number" onChange={this.handleChange} />

          <button>Add Debit</button>
        </form>

        <div>
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
          <Link to="/" className="links">
            Home
          </Link>
        </div>
        <h2>Account Balance: ${this.props.balance}</h2>
      </div>
    );
  }
}

export default Debits;
