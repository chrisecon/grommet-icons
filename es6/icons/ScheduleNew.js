var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var ScheduleNew = function ScheduleNew(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'ScheduleNew' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M14,0 L14,3 M1,7 L19,7 M6,0 L6,3 M4,11 L6,11 M8,11 L16,11 M4,15 L6,15 M8,15 L14,15 M12,19 L1,19 L1,3 L19,3 L19,13 M19,15 L19,24 M15,17 L23,22 M23,17 L15,22' })
  );
};

export default ScheduleNew;