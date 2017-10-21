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
    }, _this.methods = {
      praise: function praise() {
        var self = this;
        self.elect = !self.elect;
        if (self.elect) {
          self.recNumber++;
        } else {
          self.recNumber--;
        }
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicmVjTmFtZSIsInJlY1Bob3RvIiwiZGVzY3JpYmUiLCJyZWNOdW1iZXIiLCJwcmFpc2UiLCJtZXRob2RzIiwic2VsZiIsImVsZWN0IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsZ0JBQVUsRUFKTDtBQUtMQyxpQkFBVyxDQUxOO0FBTUxDLGNBQVE7QUFOSCxLLFFBUVBDLE8sR0FBVTtBQUNSRCxZQURRLG9CQUNDO0FBQ1AsWUFBSUUsT0FBTyxJQUFYO0FBQ0FBLGFBQUtDLEtBQUwsR0FBYSxDQUFDRCxLQUFLQyxLQUFuQjtBQUNBLFlBQUlELEtBQUtDLEtBQVQsRUFBZ0I7QUFDZEQsZUFBS0gsU0FBTDtBQUNELFNBRkQsTUFFTztBQUNMRyxlQUFLSCxTQUFMO0FBQ0Q7QUFDRjtBQVRPLEs7Ozs7OzJCQVdITCxJLEVBQU07QUFDWCxVQUFJUSxPQUFPLElBQVg7QUFDQUEsV0FBS04sT0FBTCxHQUFlRixLQUFLRSxPQUFwQjtBQUNBTSxXQUFLTCxRQUFMLEdBQWdCSCxLQUFLRyxRQUFyQjtBQUNBSyxXQUFLSixRQUFMLEdBQWdCSixLQUFLSSxRQUFyQjtBQUNBSSxXQUFLSCxTQUFMLEdBQWlCTCxLQUFLSyxTQUF0QjtBQUNBSyxjQUFRQyxHQUFSLENBQVlILEtBQUtMLFFBQWpCO0FBQ0Q7Ozs7RUE5QitCLGVBQUtTLEk7O2tCQUFsQmYsSSIsImZpbGUiOiJzaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lq65rCU5o6o6I2QJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICByZWNOYW1lOiAnJyxcbiAgICByZWNQaG90bzogJycsXG4gICAgZGVzY3JpYmU6ICcnLFxuICAgIHJlY051bWJlcjogMCxcbiAgICBwcmFpc2U6ICcuLi9pbWFnZS9wcmFpc2UucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcHJhaXNlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmVsZWN0ID0gIXNlbGYuZWxlY3RcbiAgICAgIGlmIChzZWxmLmVsZWN0KSB7XG4gICAgICAgIHNlbGYucmVjTnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucmVjTnVtYmVyLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnJlY05hbWUgPSBkYXRhLnJlY05hbWVcbiAgICBzZWxmLnJlY1Bob3RvID0gZGF0YS5yZWNQaG90b1xuICAgIHNlbGYuZGVzY3JpYmUgPSBkYXRhLmRlc2NyaWJlXG4gICAgc2VsZi5yZWNOdW1iZXIgPSBkYXRhLnJlY051bWJlclxuICAgIGNvbnNvbGUubG9nKHNlbGYucmVjUGhvdG8pXG4gIH1cbn1cbiJdfQ==