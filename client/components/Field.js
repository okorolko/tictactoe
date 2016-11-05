import React, { PropTypes } from 'react';

const Field = ({ id, onClick, val, winElements }) => {
  const elemIsWinner = _.find(winElements, elem => elem === id);
  const style = {
    background: elemIsWinner ? 'gold' : 'white',
    color: val === 'x' ? 'blue' : 'red',
  };
    return (
      <div className="gridBlock" style={style} onClick={onClick}>
        {val}
      </div>
    )
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  val: PropTypes.string,
  winElements: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Field;
