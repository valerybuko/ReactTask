import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import noop from '../../utils/noop';

const List = props => (
  <ul
    onClick={props.disabled ? noop : props.onClick}
    className={[
      styles.list,
      props.className,
      props.disabled ? styles.isDisabled : ''
    ].join(' ')}
  >
    {
      props.options.map(item => item.content &&
        <li key={item.id}>
          {item.content}
        </li>)
    }
  </ul>
);

List.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.any
  }))
};

List.defaultProps = {
  onClick: noop,
  className: '',
  disabled: false,
  options: []
};

export default List;
