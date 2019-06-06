"use strict";

exports.__esModule = true;
exports.Square = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Square = function Square(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Square"
  }, props), _react["default"].createElement("path", {
    fill: "#28C101",
    fillRule: "evenodd",
    d: "M14.4444444,8.33333333 L9.55555556,8.33333333 C8.88088889,8.33333333 8.33333333,8.88088889 8.33333333,9.55555556 L8.33333333,14.4444444 C8.33333333,15.1191111 8.88088889,15.6666667 9.55555556,15.6666667 L14.4444444,15.6666667 C15.1191111,15.6666667 15.6666667,15.1191111 15.6666667,14.4444444 L15.6666667,9.55555556 C15.6666667,8.88088889 15.1191111,8.33333333 14.4444444,8.33333333 M18.1111111,22 L5.88888889,22 C3.74128475,22 2,20.2587153 2,18.1111111 L2,5.88888889 C2,3.74128475 3.74128475,2 5.88888889,2 L18.1111111,2 C20.2587153,2 22,3.74128475 22,5.88888889 L22,18.1111111 C22,20.2587153 20.2587153,22 18.1111111,22 L18.1111111,22 Z M18.1111111,24 C21.3632847,24 24,21.3632847 24,18.1111111 L24,5.88888889 C24,2.63671525 21.3632847,0 18.1111111,0 L5.88888889,0 C2.63671525,0 0,2.63671525 0,5.88888889 L0,18.1111111 C0,21.3632847 2.63671525,24 5.88888889,24 L18.1111111,24 L18.1111111,24 Z"
  }));
};

exports.Square = Square;