'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Show = function (_wepy$page) {
  _inherits(Show, _wepy$page);

  function Show() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Show);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Show.__proto__ || Object.getPrototypeOf(Show)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '人气推荐'
    }, _this.data = {
      src: '',
      recName: '',
      recPhoto: '',
      describe: '',
      recNumber: 0,
      praise: '../image/praise.png'

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Show, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.recName = data.recName;
      self.recPhoto = data.recPhoto;
      self.describe = data.describe;
      self.recNumber = data.recNumber;
      console.log(self.recPhoto);
    }
  }]);

  return Show;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/show'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicmVjTmFtZSIsInJlY1Bob3RvIiwiZGVzY3JpYmUiLCJyZWNOdW1iZXIiLCJwcmFpc2UiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsZ0JBQVUsRUFKTDtBQUtMQyxpQkFBVyxDQUxOO0FBTUxDLGNBQVE7O0FBTkgsSzs7Ozs7MkJBU0FOLEksRUFBTTtBQUNYLFVBQUlPLE9BQU8sSUFBWDtBQUNBQSxXQUFLTCxPQUFMLEdBQWVGLEtBQUtFLE9BQXBCO0FBQ0FLLFdBQUtKLFFBQUwsR0FBZ0JILEtBQUtHLFFBQXJCO0FBQ0FJLFdBQUtILFFBQUwsR0FBZ0JKLEtBQUtJLFFBQXJCO0FBQ0FHLFdBQUtGLFNBQUwsR0FBaUJMLEtBQUtLLFNBQXRCO0FBQ0FHLGNBQVFDLEdBQVIsQ0FBWUYsS0FBS0osUUFBakI7QUFDRDs7OztFQXBCK0IsZUFBS08sSTs7a0JBQWxCYixJIiwiZmlsZSI6InNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkurrmsJTmjqjojZAnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHJlY05hbWU6ICcnLFxuICAgIHJlY1Bob3RvOiAnJyxcbiAgICBkZXNjcmliZTogJycsXG4gICAgcmVjTnVtYmVyOiAwLFxuICAgIHByYWlzZTogJy4uL2ltYWdlL3ByYWlzZS5wbmcnXG5cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYucmVjTmFtZSA9IGRhdGEucmVjTmFtZVxuICAgIHNlbGYucmVjUGhvdG8gPSBkYXRhLnJlY1Bob3RvXG4gICAgc2VsZi5kZXNjcmliZSA9IGRhdGEuZGVzY3JpYmVcbiAgICBzZWxmLnJlY051bWJlciA9IGRhdGEucmVjTnVtYmVyXG4gICAgY29uc29sZS5sb2coc2VsZi5yZWNQaG90bylcbiAgfVxufVxuIl19