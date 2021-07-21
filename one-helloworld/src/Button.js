import React from 'react';
import './style.css';

// const Button = ({title}) => {
//   return (
//     <div>
//       <button className="button">{title}</button>
//     </div>
//   );
// };

const Button = ({ title = 'Nothing' }) => (
  //Here we are destructuring the props.
  //If no props/properties value for title is not passed then 'Nothing' will be used as the value of the prop title.
  <div>
    <button className="button">{title}</button>
  </div>
);

export default Button;
