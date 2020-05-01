import React from 'react';
import User from '../../components/user';

const authIndexPage = (props) => (

  <div>
    <h1>My Auth Index Page of {props.appName}</h1>
    <User name='Sourabh' age={26} />
  </div>
);

authIndexPage.getInitialProps = context => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve({appName: 'Super App'})
    }, 1000);
  });
}

export default authIndexPage;