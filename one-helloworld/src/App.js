import React from 'react';
import './style.css';
import Button from './Button';

//Keep everything (component) in it's own separate file.

const App = () => {
  //App is an component here
  return (
    //We can only return one JSX element for rendering from a single component.
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
      {/* Here we are using button twice which is not a good practice. So rather than repeating the button twice, create a separate component for the button and reuse that component. */}
      {/* <button className="button">App Store</button>
      <button className="button">Play Store</button> */}
      <Button title="App Store" />
      <Button title="Play Store" />
      <Button />
    </div>
  );
};

export default App;
