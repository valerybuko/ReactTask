import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.scss';
import noop from '../../utils/noop';
import { NavLink } from 'react-router-dom';

const Link = props => (
  <ul
    onClick={props.disabled ? noop : props.onClick}
    className={[
      styles.link,
      props.className,
      props.disabled ? styles.isDisabled : ''
    ].join(' ')}
  >
    {
      props.options.map(item => item.content &&
        <li key={item.id}>
          <NavLink to={item.urlPath}>{item.content}</NavLink>
        </li>)
    }
  </ul>
);

Link.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string,
    to: PropTypes.string
  }))
};

Link.defaultProps = {
  onClick: noop,
  className: '',
  disabled: false,
  options: []
};

export default Link;
