import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './ToDoForm.scss';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

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
      <div className="todolist__form">
        <input type="text" className="todolist__form__input" placeholder="Type here what you need to do." value={text} onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={this.onSubmit} className="todolist__form__button">
            Add
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ToDoForm;
