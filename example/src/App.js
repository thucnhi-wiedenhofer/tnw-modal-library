import React from 'react';
import { Modal, useModal } from 'tnw-modal-library';
import 'tnw-modal-library/dist/index.css';

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className='container'>
      <h1>Example Modale React</h1>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default App;
