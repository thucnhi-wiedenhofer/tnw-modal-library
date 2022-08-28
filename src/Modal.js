import React from 'react';
import ReactDOM from 'react-dom';

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1040,
  backgroundColor: 'rgba(0, 0, 0, 0.575)'
};

const modalWrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1050,
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: 0,
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
};

const modalStyle = {
  zIndex: 100,
  background: '#fff',
  position: 'relative',
  margin: 'auto',
  borderRadius: '5px',
  maxWidth: '500px',
  width: '80%',
  padding: '1rem'
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center'
};

const CloseButtonStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: 'rgb(237, 227, 227)',
  cursor: 'pointer',
  border: 'none',
  background: 'black',
  borderRadius: '50%',
  width: '40px',
  height: '40px'
};

const modalBodyStyle = {};
export const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div style={modalOverlayStyle}>
          <div style={modalWrapperStyle}>
            <div style={modalStyle}>
              <div style={modalHeaderStyle}>
                <button type='button' style={CloseButtonStyle} onClick={hide}>
                  <span>&times;</span>
                </button>
              </div>
              <div style={modalBodyStyle}>
                <h4>Button activated!</h4>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
