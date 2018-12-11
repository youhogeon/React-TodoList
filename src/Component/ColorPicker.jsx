import React from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.scss';
import classNames from 'classnames';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { onChange, colorList } = this.props;

    onChange(colorList[0]);
  }

  onClick(e) {
    const { onChange } = this.props;

    onChange(e.target.dataset.key);
  }

  render() {
    const { color, colorList } = this.props;

    return (
      <div className="colorpicker">
        {
          colorList.map(c => (
            <button type="button" key={c} data-key={c} className={classNames('colorpicker__color', color === c ? 'color-picked' : '')} onClick={this.onClick} style={{ backgroundColor: c }} />
          ))
        }
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  colorList: ['#F47373', '#FF8A65', '#37D67A', '#2ccce4', '#ba68c8'],
};

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  colorList: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string.isRequired,
};

export default ColorPicker;
