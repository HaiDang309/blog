import React, { Children } from "react";

import "antd/dist/antd.css";

import "./App.css";

import Home from "./components/Home";
import AboutMe from "./components/About me";
import Login from "./components/Admin/Login";
import Edit from "./components/Admin/Edit";
import Preview from "./components/Admin/Preview";
import Display from "./components/Display";
import Error from "./components/404";
import Posts from "./components/Home/Article/Posts";
import Navbar from "./components/Navbar";

import { Layout } from "antd";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { useSelector } from "react-redux";

function App() {
    const auth_admin = JSON.parse(
        window.localStorage.getItem("auth")
    );
    const { Content } = Layout;
    return (
        <Router>
            <div className="app">
                <Layout style={{ height: "100vh" }}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            path="/about-me"
                            component={AboutMe}
                        />
                        <Route
                            exact
                            path="/d/:pid"
                            children={<Display />}
                        />

                        <Route
                            path="/programming/:category"
                            children={<Posts />}
                        />
                        <Route exact path="/admin">
                            {auth_admin ? <Edit /> : <Login />}
                        </Route>
                        <Route exact path="/admin/preview">
                            {auth_admin ? (
                                <Preview />
                            ) : (
                                <Login />
                            )}
                        </Route>
                        <Route
                            path="*"
                            exact
                            component={Error}
                        />
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
