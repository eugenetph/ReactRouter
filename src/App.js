import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React, { useContext, useReducer,useState, useEffect, Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import {Layout, Button} from 'antd'
import ProtectedRoute from './components/ProtectedRoute';

import Home from './components/Home'

const { Content } = Layout


const App = () => {
  return (
    <div className="App">
    <Router>
      <Layout>
        <Button><Link to="/home">Press to go home</Link></Button>
        <Content>
          <Switch>
            <ProtectedRoute isAllowed={true} exact path="/home" render={(props) => <Home />} />
          </Switch>
        </Content>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
