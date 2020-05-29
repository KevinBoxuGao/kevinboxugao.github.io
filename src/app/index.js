import React, { Suspense, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

//pages
const Home = React.lazy(() => {
  return Promise.all([
    import("pages/home"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const About = React.lazy(() => {
  return Promise.all([
    import("pages/about"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const Work = React.lazy(() => {
  return Promise.all([
    import("pages/work"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const PageNotFound = React.lazy(() => {
  return Promise.all([
    import("pages/pagenotfound"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
import Menu from "components/menu";
import Loading from "pages/loading";

//function component
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default App;
