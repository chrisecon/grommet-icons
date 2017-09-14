var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CaretUp = function CaretUp(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CaretUp' }, props),
    React.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '22 4 12 16 2 4', transform: 'matrix(1 0 0 -1 0 20)' })
  );
};

export default CaretUp;