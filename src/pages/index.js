import React, { Component } from 'react';
import Head from 'next/head';
import Header from 'antd/lib/page-header';
import Home from './home';
import Menu from 'antd/lib/menu';
import Portfolio from './portfolio';
import styles from '../styles/index.module.css';

const navigationButtons = [
  { name: 'Home' },
  { name: 'Portfolio' },
  { name: 'Experience' }
];

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Head>
          <title>Krishan Patel</title>
          <link href="/assets/favicon.ico" rel="icon" />
        </Head>
        <Header className={styles.navbar}>
          <Menu className={styles.navbarMenu} mode="horizontal" theme="dark">
            {
              navigationButtons.map((button) => {
                return <Menu.Item key={button.name}>{button.name}</Menu.Item>;
              })
            }
          </Menu>
        </Header>
        <Home/>
        <Portfolio/>
      </div>
    );
  }
}

export default Main;
