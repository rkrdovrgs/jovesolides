// css dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import "./app.css";

// libs
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

// react dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';

// views
import Layout from "./components/layout/Layout";
import GoogleDoc from "./components/GoogleDoc";

ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" render={(props) => <GoogleDoc {...props} docId="1zZB0g5TEV6hQy2OXf1w9et2U-ZVhYvzdcOH8nCoIWbI" />} />
            </Switch>
        </Layout>
    </BrowserRouter>,
    document.getElementById("app")
);