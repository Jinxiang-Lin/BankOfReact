import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
      debits: [],
      credits: [],
    };
  }
  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");
    debits = debits.data;
    credits = credits.data;
    let debitSum = 0;
    let creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount;
    });
    credits.forEach((credit) => {
      creditSum += credit.amount;
    });
    let accountBalance = creditSum - debitSum;
    this.setState({ debits, credits, accountBalance });
  }

  addDebit = (newData) => {
    //e.preventDefault();
    this.setState((prevState) => {
      return {
        debits: [...prevState.debits, newData],
      };
    });
    this.setState((newState) => {
      let debitSum = 0;
      let creditSum = 0;
      newState.debits.forEach((debit) => {
        debitSum += debit.amount;
      });
      newState.credits.forEach((credit) => {
        creditSum += credit.amount;
      });
      let accountBalance = creditSum - debitSum;
      console.log("account balance is", accountBalance);
      return {
        accountBalance: accountBalance,
      };
    });
  };
  // add credits
  addCredit = (newData) => {
    //e.preventDefault();
    this.setState((prevState) => {
      return {
        credits: [...prevState.credits, newData],
      };
    });
    this.setState((newState) => {
      let debitSum = 0;
      let creditSum = 0;
      newState.debits.forEach((debit) => {
        debitSum += debit.amount;
      });
      newState.credits.forEach((credit) => {
        creditSum += credit.amount;
      });
      let accountBalance = creditSum - debitSum;
      console.log("account balance is", accountBalance);
      return {
        accountBalance: accountBalance,
      };
    });
  };
  //
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };
  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const { debits } = this.state;
    const DebitsComponent = () => (
      <Debits
        addDebit={this.addDebit}
        debits={debits}
        balance={this.state.accountBalance}
      />
    );
    const { credits } = this.state;
    const CreditsComponent = () => (
      <Credits
        addCredit={this.addCredit}
        credits={credits}
        balance={this.state.accountBalance}
      />
    );
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/userProfile" component={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
