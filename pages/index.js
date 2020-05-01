import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'


class IndexPage extends Component {
  static getInitialProps(context){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve({appName: 'Super App'})
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <h1>My {this.props.appName}</h1>
        <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
        <button onClick={() => { Router.push('/auth') }}>Go to Auth</button>
      </div>
    )
  }
}

export default IndexPage;