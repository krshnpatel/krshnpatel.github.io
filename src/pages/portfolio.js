import React, { Component } from 'react';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import styles from '../styles/portfolio.module.css';

class Portfolio extends Component {
  render() {
    return (
      <div id="Portfolio">
        <Row className={styles.portfolio}>
          <Col span={24}>
            <Row justify="center">
              <h1>PORTFOLIO</h1>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;
