import React, { Component } from 'react';
import Head from 'next/head';
import Layout from 'antd/lib/layout';

const { Header, Footer, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Head>
          <title>Krishan Patel</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;
