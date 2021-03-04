import '../styles/globals.css';
import App from 'next/app';
import React from 'react';

class PersonalWebsite extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default PersonalWebsite;
