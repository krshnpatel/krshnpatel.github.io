import React, { Component } from 'react';
import Avatar from 'antd/lib/avatar';
import Col from 'antd/lib/col';
import Head from 'next/head';
import Row from 'antd/lib/row';
import Typed from 'typed.js';
import styles from '../styles/index.module.css';

const subHeaders = [
	'I\'m a full-stack developer.^500',
	'I\'m an automation developer.^500',
  'I\'m a fun guy.^1000'
];

class Home extends Component {
  componentDidMount() {
    const options = {
      strings: subHeaders,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      cursorChar: "|",
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="App">
        <Head>
          <title>Krishan Patel</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Row className={styles.header} justify="center">
          <Col>
            <Row justify="center">
              <Avatar className={styles.avatar} src="/assets/profile-pic.jpeg"/>
            </Row>
            <Row justify="center">
              <span className={styles.headerTitle}>Krishan Patel</span>
            </Row>
            <Row justify="center">
              <span
                className={styles.subHeader}
                ref={(el) => {
                  this.el = el;
                }}
              />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
