"use strict";

exports.__esModule = true;
exports.Swim = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Swim = function Swim(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Swim"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11,13 C11.5,13.5 13.1299859,12.8876287 14.2620192,12.5 C15.7222222,12 17.5,12.5 17,12 C15.3609614,10.3609614 15,10 15,10 C15,10 10.5,12.5 11,13 Z M2,20 C4,20 5,19 7,19 C9,19 10,20 12,20 C14,20 15,19 17,19 C19,19 20,20 22,20 M2,16 C4,16 5,15 7,15 C9,15 10,16 12,16 C14,16 15,15 17,15 C19,15 20,16 22,16 M17.5,4 L12.2222222,7 L15.5,10.5 L12,12 M19.2222222,10 C19.774507,10 20.2222222,9.55228475 20.2222222,9 C20.2222222,8.44771525 19.774507,8 19.2222222,8 C18.6699375,8 18.2222222,8.44771525 18.2222222,9 C18.2222222,9.55228475 18.6699375,10 19.2222222,10 Z"
  }));
};

exports.Swim = Swim;