import React from 'react';

const user = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p className='age'>Age: {props.age}</p>
    <style jsx>{`
      h1 {
        color: red;
      } 
      .age{
        color: yellowgreen;
      }

    `}</style>
  </div>
);

export default user;  