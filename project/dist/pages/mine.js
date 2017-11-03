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
      about: '../image/about.png',
      my: '../image/myphoto.png'
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
      },
      myTap: function myTap() {
        _wepy2.default.navigateTo({
          url: 'myPhoto'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInByYWlzZSIsInRlYXMiLCJhYm91dCIsIm15IiwibWV0aG9kcyIsInByYWlzZVRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0ZWFzVGFwIiwiYWJvdXRUYXAiLCJteVRhcCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTyxDQUpGO0FBS0xDLFdBQUssRUFMQTtBQU1MQyxjQUFRLHFCQU5IO0FBT0xDLFlBQU0sc0JBUEQ7QUFRTEMsYUFBTyxvQkFSRjtBQVNMQyxVQUFJO0FBVEMsSyxRQVdQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsYUFOUSxxQkFNRTtBQUNSLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsY0FYUSxzQkFXRztBQUNULHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BZk87QUFnQlJHLFdBaEJRLG1CQWdCQTtBQUNOLHVCQUFLSixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBcEJPLEs7Ozs7OzZCQXNCRDtBQUNQLFVBQUlJLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQUgsZUFBS2QsTUFBTCxHQUFjaUIsSUFBSUcsWUFBbEI7QUFDQU4sZUFBS2IsS0FBTCxHQUFhZ0IsSUFBSUksV0FBakI7QUFDRDtBQUxnQixPQUFuQjtBQU9BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZOLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSCxlQUFLZixRQUFMLEdBQWdCa0IsSUFBSU0sUUFBSixDQUFheEIsUUFBN0I7QUFDQWUsZUFBS2hCLFNBQUwsR0FBaUJtQixJQUFJTSxRQUFKLENBQWF6QixTQUE5QjtBQUNBZ0IsZUFBS1UsT0FBTCxDQUFhO0FBQ1gxQix1QkFBV21CLElBQUlNLFFBQUosQ0FBYXpCLFNBRGI7QUFFWEMsc0JBQVVrQixJQUFJTSxRQUFKLENBQWF4QjtBQUZaLFdBQWI7QUFJRDtBQVJjLE9BQWpCO0FBVUQ7Ozs7RUF4RCtCLGVBQUswQixJOztrQkFBbEIvQixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgc3JjOiAnJyxcbiAgICBwcmFpc2U6ICcuLi9pbWFnZS9wcmFpc2UucG5nJyxcbiAgICB0ZWFzOiAnLi4vaW1hZ2UvbWVzc2FnZS5wbmcnLFxuICAgIGFib3V0OiAnLi4vaW1hZ2UvYWJvdXQucG5nJyxcbiAgICBteTogJy4uL2ltYWdlL215cGhvdG8ucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcHJhaXNlVGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAncHJhaXNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHRlYXNUYXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICd0ZWFzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFib3V0VGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnYWJvdXQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlUYXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdteVBob3RvJ1xuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGF2YXRhclVybDogcmVzLnVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICBuaWNrTmFtZTogcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19