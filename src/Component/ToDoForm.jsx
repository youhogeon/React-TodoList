import React from 'react';
import PropTypes from 'prop-types';
import './ToDoForm.scss';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      text: '',
    };
  }

  onChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit() {
    const { onSubmit } = this.props;
    const { text } = this.state;

    onSubmit(text);
    this.setState({
      text: '',
    });
  }

  render() {
    const { text } = this.state;

    return (
      <React.Fragment>
        <input type="text" className="todolist_input" placeholder="Type here what you need to do." value={text} onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <button type="submit" onClick={this.onSubmit}>Add</button>
      </React.Fragment>
    );
  }
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ToDoForm;
