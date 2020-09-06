import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import './App.css';
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import PostDetails from "./Components/PostDetails/PostDetails";
import Comments from "./Components/Comments/Comments";



function App() {
  return (
    <Router>
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/posts/:postId">
            <Comments></Comments>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
