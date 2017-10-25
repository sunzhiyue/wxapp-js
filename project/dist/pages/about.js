'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于'
    }, _this.data = {
      src: '',
      portrait: '../image/camera.png'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return About;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJwb3J0cmFpdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGdCQUFVO0FBRkwsSzs7OztFQUowQixlQUFLQyxJOztrQkFBbkJOLEsiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWz5LqOJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgcG9ydHJhaXQ6ICcuLi9pbWFnZS9jYW1lcmEucG5nJ1xuICB9O1xufVxuIl19