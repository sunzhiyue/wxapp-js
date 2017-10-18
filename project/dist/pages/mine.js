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

var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      avatarUrl: '',
      nickName: '',
      height: 0,
      width: 0,
      src: '',
      praise: '../image/praise.png',
      teas: '../image/message.png',
      about: '../image/group.png'
    }, _this.methods = {
      praiseTap: function praiseTap() {
        _wepy2.default.navigateTo({
          url: 'praise'
        });
      },
      teasTap: function teasTap() {
        _wepy2.default.navigateTo({
          url: 'teas'
        });
      },
      aboutTap: function aboutTap() {
        _wepy2.default.navigateTo({
          url: 'about'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          console.log(res);
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
          self.setData({
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName
          });
        }
      });
    }
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInByYWlzZSIsInRlYXMiLCJhYm91dCIsIm1ldGhvZHMiLCJwcmFpc2VUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGVhc1RhcCIsImFib3V0VGFwIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxhQUFPLENBSkY7QUFLTEMsV0FBSyxFQUxBO0FBTUxDLGNBQVEscUJBTkg7QUFPTEMsWUFBTSxzQkFQRDtBQVFMQyxhQUFPO0FBUkYsSyxRQVVQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsYUFOUSxxQkFNRTtBQUNSLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsY0FYUSxzQkFXRztBQUNULHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBZk8sSzs7Ozs7NkJBaUJEO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEMsa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBSCxlQUFLWixNQUFMLEdBQWNlLElBQUlHLFlBQWxCO0FBQ0FOLGVBQUtYLEtBQUwsR0FBYWMsSUFBSUksV0FBakI7QUFDRDtBQUxnQixPQUFuQjtBQU9BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZOLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSCxlQUFLYixRQUFMLEdBQWdCZ0IsSUFBSU0sUUFBSixDQUFhdEIsUUFBN0I7QUFDQWEsZUFBS2QsU0FBTCxHQUFpQmlCLElBQUlNLFFBQUosQ0FBYXZCLFNBQTlCO0FBQ0FjLGVBQUtVLE9BQUwsQ0FBYTtBQUNYeEIsdUJBQVdpQixJQUFJTSxRQUFKLENBQWF2QixTQURiO0FBRVhDLHNCQUFVZ0IsSUFBSU0sUUFBSixDQUFhdEI7QUFGWixXQUFiO0FBSUQ7QUFSYyxPQUFqQjtBQVVEOzs7O0VBbEQrQixlQUFLd0IsSTs7a0JBQWxCN0IsSSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNyYzogJycsXG4gICAgcHJhaXNlOiAnLi4vaW1hZ2UvcHJhaXNlLnBuZycsXG4gICAgdGVhczogJy4uL2ltYWdlL21lc3NhZ2UucG5nJyxcbiAgICBhYm91dDogJy4uL2ltYWdlL2dyb3VwLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHByYWlzZVRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3ByYWlzZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0ZWFzVGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAndGVhcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhYm91dFRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ2Fib3V0J1xuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGF2YXRhclVybDogcmVzLnVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICBuaWNrTmFtZTogcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19