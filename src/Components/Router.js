import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import List from "../Routes/List";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={List} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={List} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>
      { isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes /> }
    </Switch>
  </Router>
);

export default AppRouter;