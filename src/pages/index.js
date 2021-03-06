import React, { Component, createRef } from 'react';
import Head from 'next/head';
import Header from 'antd/lib/page-header';
import Home from './home';
import Menu from 'antd/lib/menu';
import Portfolio from './portfolio';
import styles from '../styles/index.module.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.homeRef = createRef();
    this.portfolioRef = createRef();
    this.navigationButtons = [
      { name: 'Home', ref: this.homeRef },
      { name: 'Portfolio', ref: this.portfolioRef }
    ];
  }

  navigate = (e) => {
    const scrollOptions = { behavior: 'smooth' };
    this.navigationButtons[e.key].ref.current.scrollIntoView(scrollOptions);
  }

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
              this.navigationButtons.map((button, index) => {
                return <Menu.Item key={index} onClick={this.navigate}>{button.name}</Menu.Item>;
              })
            }
          </Menu>
        </Header>
        <Home innerRef={this.homeRef}/>
        <Portfolio innerRef={this.portfolioRef}/>
      </div>
    );
  }
}

export default Main;
