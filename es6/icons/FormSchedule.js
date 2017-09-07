var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FormSchedule = function FormSchedule(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FormSchedule' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M6,19 L18,19 L18,8 L6,8 L6,19 Z M8,15 L10,15 L8,15 Z M11,15 L16,15 L11,15 Z M15,8 L15,5 L15,8 Z M9,8 L9,5 L9,8 Z M6,11.5 L18,11.5 L6,11.5 Z' })
      )
    )
  );
};

export default FormSchedule;