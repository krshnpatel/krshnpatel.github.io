import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Image from 'antd/lib/image';
import styles from './ButtonImage.module.css';

class ButtonImage extends Component {
  render() {
    const image = <Image preview={false} src={this.props.src} width={this.props.width} />;
    return (
      <>
        <Button className={styles.button} href={this.props.link} icon={image} target="_blank" />
      </>
    );
  }
}

export default ButtonImage;
