import React, { Component } from 'react';
import Avatar from 'antd/lib/avatar';
import ButtonImage from '../components/ButtonImage/ButtonImage';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Typed from 'typed.js';
import styles from '../styles/home.module.css';

const subHeaders = [
  'I\'m a full-stack developer.^500',
  'I\'m an automation developer.^500',
  'I\'m a fun guy.^1000'
];

const mediaButtons = [
  {
    fileName: 'github.png',
    link: 'https://github.com/krshnpatel'
  },
  {
    fileName: 'gmail.png',
    link: 'mailto:krishanpatel09@gmail.com'
  },
  {
    fileName: 'linkedin.png',
    link: 'https://www.linkedin.com/in/krshnpatel/'
  }
];

class Home extends Component {
  componentDidMount() {
    const options = {
      strings: subHeaders,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div ref={this.props.innerRef}>
        <Row className={styles.home}>
          <Col span={24}>
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
            <Row justify="center">
              {
                mediaButtons.map((media, index) => {
                  const src = `/assets/${media.fileName}`;
                  return (
                    <Col className={styles.mediaButton} key={index}>
                      <ButtonImage link={media.link} src={src} width="50px" />
                    </Col>
                  );
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
