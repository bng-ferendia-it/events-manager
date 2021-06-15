import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EventManager from "./EventManager";
import LandingPage from "./LandingPage";

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = { userArray: [] };
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    let newArray = [...this.state.userArray, user];
    this.setState({ userArray: newArray });
  }
  render() {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const userAuthenticated = this.state.userArray.some(
      (user) => user.username === localUser.username
    )
      ? true
      : false;

    // there is a bug,moved forward ,have to switch to /eventmanager mannualy
    // const UserRoute = ({ component: Component, ...compProps }) => (
    //   <Route
    //     {...compProps}
    //     render={(props) =>
    //       userAuthenticated === true ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect to="/landing" />
    //       )
    //     }
    //   />
    // );
    return (
      <div>
        <Switch>
          <Route
            path="/landing"
            render={(props) => (
              <LandingPage {...props} updateUserArray={this.props.addUser} />
            )}
          />
          <Route path="/eventmanager" component={EventManager} />
          <Redirect from="/" to="/landing" exact />
        </Switch>
      </div>
    );
  }
}

export default Layouts;
