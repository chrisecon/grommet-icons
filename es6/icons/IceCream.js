var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var IceCream = function IceCream(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'IceCream' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M17,8 C19,8 19,6.5 17.5,6.5 C17.5,3.5 15.5,1 12,1 C8.5,1 6.5,3.5 6.5,6.5 C5,6.5 5,8 7,8 M7,8 L17,8 L12,21 L7,8 Z' })
      )
    )
  );
};

export default IceCream;