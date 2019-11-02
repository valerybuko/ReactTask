import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = (props) => (
  <button
    onClick={props.disabled ? () => {} : props.onClick}
    disabled={props.disabled}
    className={[
      styles.button,
      props.className,
      props.disabled ? styles.disabled : ''
    ].join(' ')}>
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  disabled: false,
  className: '',
  children: null
};

export default Button;
