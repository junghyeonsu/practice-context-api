import React from 'react';
import ColorContext from 'contexts/color';

const Child: React.FC = () => {
  return (
    <ColorContext.Consumer>
      {(value) => <div style={{ color: value.color }}>Child</div>}
    </ColorContext.Consumer>
  );
};

export default Child;
