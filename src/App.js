import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import {
  Navbar,
  Exchanges,
  Homepage,
  Currencies,
  News,
  CryptoDetails,
} from './components';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/currencies'>
                <Currencies />
              </Route>
              <Route exact path='/currency/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            CryptoDetails
            <br />
            Rights Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
