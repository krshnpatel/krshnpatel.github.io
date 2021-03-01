import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Image from 'antd/lib/image';
import styles from '../styles/ButtonImage.module.css';

class ButtonImage extends Component {
  render() {
    const inlineStyles = `
      a > div.ant-image {
        vertical-align: middle;
      }
    `;
    const image = <Image preview={false} src={this.props.src} width={this.props.width} />;

    return (
      <>
        <style>{inlineStyles}</style>
        <Button className={styles.button} href={this.props.link} icon={image} target="_blank" />
      </>
    );
  }
}

export default ButtonImage;
