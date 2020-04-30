import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

//pages
import Home from "pages/home";
import Work from "pages/work";
import About from "pages/about";
import PageNotFound from "pages/pagenotfound";
import Menu from "components/menu";

//function component
function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
