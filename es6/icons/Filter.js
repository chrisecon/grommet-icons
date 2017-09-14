var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Filter = function Filter(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Filter' }, props),
    React.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '3 6 10 13 10 21 14 21 14 13 21 6 21 3 3 3' })
  );
};

export default Filter;