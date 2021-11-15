//class component
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Credits extends Component {
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

    let randomID = Math.floor(Math.random() * 9999);
    let newDate = new Date();
    //console.log(JSON.stringify(newDate));
    const newD = {
      id: randomID,
      description: this.state.newDescription,
      amount: parseFloat(this.state.newAmount),
      date: JSON.stringify(newDate),
    };
    this.props.addCredit(newD);
  };
  render() {
    return (
      <div>
        <h1>Credits</h1>
        {this.props.credits.map((debit) => {
          return (
            <li key={debit.id}>
              {debit.amount}
              {debit.description}
              {debit.date}
            </li>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="discription">Description</label>
          <input type="text" onChange={this.handleDiscription} />

          <label htmlFor="number">Amount</label>
          <input type="number" onChange={this.handleChange} />

          <button>Add Credits</button>
        </form>

        <div>
          <Link to="/login">Log in</Link>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/debits">Debits</Link>
          <Link to="/credits">Credits</Link>
          <Link to="/">Home</Link>
        </div>
        <h1>Account Balance</h1>
        {this.props.balance}
      </div>
    );
  }
}

export default Credits;
