import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './HelperButton.scss';

const HelperButton = (props) => {
  const { handleAllDone, handleRemove } = props;

  return (
    <div className="helperbutton">
      <Button variant="outlined" size="small" onClick={handleAllDone} className="helperbutton__btn">
        모든 일 다함
      </Button>
      <Button variant="outlined" size="small" onClick={handleRemove} className="helperbutton__btn">
        다 한일 삭제
      </Button>
    </div>
  );
};

HelperButton.propTypes = {
  handleAllDone: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default HelperButton;
