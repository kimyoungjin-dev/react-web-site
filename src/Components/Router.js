import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Routes/Home";
import Products from "./Routes/Products";
import Search from "./Routes/Search";
import SignUp from "./Routes/SignUp";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/products" component={Products} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
};
