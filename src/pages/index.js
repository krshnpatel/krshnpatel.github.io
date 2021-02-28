import React, { Component } from 'react';
import Avatar from 'antd/lib/avatar';
import Col from 'antd/lib/col';
import Head from 'next/head';
import Row from 'antd/lib/row';
// import Typed from 'typed.js';
import styles from '../styles/index.module.css';

// const words = [
// 	'Krishan Patel',
// 	'Software Developer'
// ];

class Home extends Component {
  // componentDidMount() {
  //   const options = {
  //     strings: words,
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     loop: true,
  //     cursorChar: "|",
  //   };
  //   this.typed = new Typed(this.el, options);
  // }

  // componentWillUnmount() {
  //   this.typed.destroy();
  // }

  render() {
    return (
      <div className="App">
        <Head>
          <title>Krishan Patel</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Row className={styles.header} justify="center">
          <span className={styles.headerTitle}>Krishan Patel</span>
          {/* <span
            className={styles.headerTitle}
            ref={(el) => {
              this.el = el;
            }}
          /> */}
        </Row>
        <Row justify="center" align="bottom">
          <Col>
            <Avatar className={styles.avatar} src="/assets/profile-pic.jpeg"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
