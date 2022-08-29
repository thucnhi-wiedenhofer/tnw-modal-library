import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  position: 'relative',
  margin: 'auto',
  borderRadius: '5px',
  maxWidth: '500px',
  width: '80%',
  padding: '1rem',
  border: 'none',
  boxShadow:
    'inset 1px 1px rgb(255 255 255 / 20%), inset -1px -1px rgb(255 255 255 / 10%), 1px 3px 24px -1px rgb(0 0 0 / 15',
  backgroundImage:
    'linear-gradientlinear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)'
};

const modalContentStyle = {};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const CloseButtonStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: '#000',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent'
};

const modalBodyStyle = {
  position: 'relative',
  flex: '1 1 auto',
  padding: '1rem'
};

export const Modal = ({ isShowing, close, title, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div style={modalOverlayStyle}>
          <div style={modalWrapperStyle}>
            <div style={modalStyle}>
              <div style={modalContentStyle}>
                <div style={modalHeaderStyle}>
                  <h4>{title}</h4>
                  <button
                    type='button'
                    style={CloseButtonStyle}
                    onClick={close}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div style={modalBodyStyle}>{props.children}</div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
