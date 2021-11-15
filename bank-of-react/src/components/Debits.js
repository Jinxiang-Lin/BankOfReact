//class component
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Debits extends Component {
  constructor() {
    super();
    this.state = {
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
    //console.log(JSON.stringify(newDate));
    const newD = {
      description: this.state.newDescription,
      amount: parseFloat(this.state.newAmount),
      date: JSON.stringify(newDate),
    };
    this.props.addDebit(newD);
  };
  render() {
    return (
      <div>
        <h1>Debits</h1>
        {this.props.debits.map((debit) => {
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

          <button>Add Debit</button>
        </form>

        {this.props.balance}
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/debits">Debits</Link>
          <Link to="/credits">Credits</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default Debits;
