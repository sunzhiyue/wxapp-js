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
      navigationBarTitleText: '我的作品'
    }, _this.data = {
      src: '',
      describe: '',
      state: 'true',
      Wechat: 'ss',
      text: '',
      praise: '../image/praise.png'
    }, _this.methods = {
      recTap: function recTap(e) {
        var self = this;
        var item = self.text[e.currentTarget.id];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './show?recName=' + item.recName + '&recPhoto=' + item.recPhoto + '&recNumber=' + item.recNumber + '&describe=' + item.describe
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          _wepy2.default.request({
            url: 'http://127.0.0.1:7001/photo/myPhoto',
            method: 'POST',
            data: {
              Wechat: self.nickName
            },
            success: function success(res) {
              console.log(res.data);
              self.text = res.data;
              self.setData({
                text: res.data
              });
            }
          });
        }
      });
    }
  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/myPhoto'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UGhvdG8uanMiXSwibmFtZXMiOlsiQWJvdXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImRlc2NyaWJlIiwic3RhdGUiLCJXZWNoYXQiLCJ0ZXh0IiwicHJhaXNlIiwibWV0aG9kcyIsInJlY1RhcCIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVjTmFtZSIsInJlY1Bob3RvIiwicmVjTnVtYmVyIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwibmlja05hbWUiLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJtZXRob2QiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sTUFIRjtBQUlMQyxjQUFRLElBSkg7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLGNBQVE7QUFOSCxLLFFBUVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLTCxJQUFMLENBQVVJLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTFCLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWjtBQUNBLHVCQUFLTyxVQUFMLENBQWdCO0FBQ2RDLG1DQUF1Qk4sS0FBS08sT0FBNUIsa0JBQWdEUCxLQUFLUSxRQUFyRCxtQkFBMkVSLEtBQUtTLFNBQWhGLGtCQUFzR1QsS0FBS1Q7QUFEN0YsU0FBaEI7QUFHRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1AsVUFBSVEsT0FBTyxJQUFYO0FBQ0EscUJBQUtXLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmIsZUFBS2MsUUFBTCxHQUFnQkQsSUFBSUUsUUFBSixDQUFhRCxRQUE3QjtBQUNBLHlCQUFLRSxPQUFMLENBQWE7QUFDWFQsaUJBQUsscUNBRE07QUFFWFUsb0JBQVEsTUFGRztBQUdYM0Isa0JBQU07QUFDSkksc0JBQVFNLEtBQUtjO0FBRFQsYUFISztBQU1YRixxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCVCxzQkFBUUMsR0FBUixDQUFZUSxJQUFJdkIsSUFBaEI7QUFDQVUsbUJBQUtMLElBQUwsR0FBWWtCLElBQUl2QixJQUFoQjtBQUNBVSxtQkFBS2tCLE9BQUwsQ0FBYTtBQUNYdkIsc0JBQU1rQixJQUFJdkI7QUFEQyxlQUFiO0FBR0Q7QUFaVSxXQUFiO0FBY0Q7QUFqQmMsT0FBakI7QUFtQkQ7Ozs7RUEzQ2dDLGVBQUs2QixJOztrQkFBbkJoQyxLIiwiZmlsZSI6Im15UGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5L2c5ZOBJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBkZXNjcmliZTogJycsXG4gICAgc3RhdGU6ICd0cnVlJyxcbiAgICBXZWNoYXQ6ICdzcycsXG4gICAgdGV4dDogJycsXG4gICAgcHJhaXNlOiAnLi4vaW1hZ2UvcHJhaXNlLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHJlY1RhcChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi50ZXh0W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL3Nob3c/cmVjTmFtZT0ke2l0ZW0ucmVjTmFtZX0mcmVjUGhvdG89JHtpdGVtLnJlY1Bob3RvfSZyZWNOdW1iZXI9JHtpdGVtLnJlY051bWJlcn0mZGVzY3JpYmU9JHtpdGVtLmRlc2NyaWJlfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3Bob3RvL215UGhvdG8nLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19