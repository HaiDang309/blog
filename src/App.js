import React, { Children } from "react";

import "antd/dist/antd.css";

import "./App.css";

import Home from "./components/Home";
import Reactjs from "./components/Programming/react";
import JavaScript from "./components/Programming/javascript";
import Life from "./components/Life";
import AboutMe from "./components/About me";
import Login from "./components/Admin/Login";
import Edit from "./components/Admin/Edit";
import Preview from "./components/Admin/Preview";
import Display from "./components/Display";
import Error from './components/404';
import Posts from './components/Home/Article/Posts';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { useSelector } from "react-redux";

function App() {
    const auth_admin = JSON.parse(window.localStorage.getItem('auth'));
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/programming/react"
                        component={Reactjs}
                    />
                    <Route
                        exact
                        path="/programming/javascript"
                        component={JavaScript}
                    />
                    <Route path="/life" component={Life} />
                    <Route
                        path="/about-me"
                        component={AboutMe}
                    />
                    <Route exact path="/admin">
                        {auth_admin ? <Edit /> : <Login />}
                    </Route>
                    <Route exact path="/admin/preview">
                        {auth_admin ? <Preview /> : <Login />}
                    </Route>
                    <Route
                        exact
                        path="/d/:pid"
                        children={<Display />}
                    />
                    <Route path="*" exact component={Error} />
                    <Route path="/programming/:category" children={<Posts />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
