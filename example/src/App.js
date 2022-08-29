import React from 'react';
import { Modal, useModal } from 'tnw-modal-library';
import 'tnw-modal-library/dist/index.css';

const containerStyle = {
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const toggleButtonStyle = {
  backgroundColor: 'turquoise',
  cursor: 'pointer',
  padding: '1rem 2rem',
  textTransform: 'uppercase',
  border: 'none'
};

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div style={containerStyle}>
      <h1>My own React Modal</h1>
      <button style={toggleButtonStyle} onClick={toggle}>
        Toggle Modal
      </button>
      <Modal isShowing={isShowing} close={toggle} />
    </div>
  );
};

export default App;
