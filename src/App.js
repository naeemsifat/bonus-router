import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div >
      <Header></Header> 
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
