import React from 'react';
import PropTypes from 'prop-types';
import './ToDoList.scss';
import ToDoListItem from './ToDoListItem';

const ToDoList = (props) => {
  const { list, onCheck } = props;

  return (
    <React.Fragment>
      {list.map(v => (
        <ToDoListItem
          key={v.id}
          color={v.color}
          text={v.text}
          isDone={v.done}
          code={v.id}
          onCheck={onCheck}
        />
      ))}
    </React.Fragment>
  );
};

ToDoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default ToDoList;
