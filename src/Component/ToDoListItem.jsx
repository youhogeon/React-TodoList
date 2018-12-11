import React from 'react';
import PropTypes from 'prop-types';
import './ToDoListItem.scss';
import classNames from 'classnames';

const ToDoListItem = (props) => {
  const {
    color, text, isDone, code, onCheck,
  } = props;

  return (
    <div className={classNames('todolistitem', isDone ? 'todolistitem-done' : '')} onClick={onCheck.bind(null, code)}>
      <div className="todolistitem__bar" style={{ backgroundColor: color }} />
      <div className="todolistitem__text">
        {text}
      </div>
    </div>
  );
};

ToDoListItem.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  code: PropTypes.number.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default ToDoListItem;
