import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import './ToDo.scss';
import ToDoForm from './ToDoForm';
import ColorPicker from './ColorPicker';
import HelperButton from './HelperButton';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleAllDone = this.handleAllDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.state = {
      list: [],
      color: '',
      id: 0,
    };
  }

  componentDidMount() {
    const { localStorageId } = this.props;

    let json;

    try {
      json = JSON.parse(localStorage.getItem(localStorageId));
    } catch {
      json = {};
    }

    this.setState(json);
  }

  componentDidUpdate() {
    const { localStorageId } = this.props;
    const json = JSON.stringify(this.state);

    localStorage.setItem(localStorageId, json);
  }

  handleAdd(text) {
    if (!text) return;

    const { list, color, id } = this.state;

    this.setState({
      list: list.concat({
        id,
        text,
        done: false,
        color,
      }),
    });

    this.setState({
      id: id + 1,
    });
  }

  handleColor(color) {
    this.setState({
      color,
    });
  }

  handleDone(code) {
    const { list } = this.state;
    const index = list.findIndex(d => d.id === code);
    const selected = list[index];
    const newList = [...list];

    newList[index] = {
      ...selected,
      done: !selected.done,
    };

    this.setState({
      list: newList,
    });
  }

  handleAllDone() {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure you have done everything?',
      icon: 'warning',
      buttons: true,
    }).then((result) => {
      if (result) {
        const { list } = this.state;
        const newList = [...list];
        newList.forEach((e) => {
          e.done = true;
        });

        this.setState({
          list: newList,
        });

        swal('Your task is all over!', {
          icon: 'success',
        });
      }
    });
  }

  handleRemove() {
    swal({
      title: 'Are you sure?',
      text: 'Do you really want to remove everything?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const { list } = this.state;
        const clonedList = [...list];
        const newList = [];
        clonedList.forEach((e) => {
          if (!e.done) newList.push(e);
        });

        this.setState({
          list: newList,
        });

        swal('All done task has been deleted!', {
          icon: 'success',
        });
      }
    });
  }

  render() {
    const { title, className } = this.props;
    const { color, list } = this.state;

    return (
      <div className={`todo ${className}`}>
        <div className="todo__title">{title}</div>
        <div className="todo__content">
          <ToDoForm onSubmit={this.handleAdd} />
          <ColorPicker onChange={this.handleColor} color={color} />
          <hr className="todo_hr" />
          <HelperButton handleAllDone={this.handleAllDone} handleRemove={this.handleRemove} />
          <ToDoList list={list} onCheck={this.handleDone} />
        </div>
      </div>
    );
  }
}

ToDo.defaultProps = {
  title: 'ToDo List',
  className: '',
  localStorageId: 'todolist',
};

ToDo.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  localStorageId: PropTypes.string,
};

export default ToDo;
