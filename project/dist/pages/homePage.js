'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../util/content.js');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_wepy$page) {
  _inherits(Homepage, _wepy$page);

  function Homepage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Homepage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '手机摄影大赛',
      enablePullDownRefresh: 'true'
    }, _this.data = {
      src: '',
      imgUrls: ['http://isujin.com/wp-content/uploads/2017/03/wallhaven-80053-300x188.jpg', 'http://isujin.com/wp-content/uploads/2016/10/wallhaven-322712-1-300x166.jpg', 'http://isujin.com/wp-content/uploads/2016/10/wallhaven-264271-300x188.jpg', 'http://isujin.com/wp-content/uploads/2016/10/wallhaven-419554-300x169.jpg'],
      search: '../image/search.png',
      praise: '../image/praise.png',
      describe: '',
      content: null,
      indicatorDots: true
    }, _this.methods = {
      searchtap: function searchtap() {
        _wepy2.default.navigateTo({
          url: 'up'
        });
      },
      recTap: function recTap(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './show?recName=' + item.recName + '&recPhoto=' + item.recPhoto + '&recNumber=' + item.recNumber + '&describe=' + item.describe
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Homepage, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.startPullDownRefresh();
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1000);
    }
  }]);

  return Homepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Homepage , 'pages/homePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwic2VhcmNoIiwicHJhaXNlIiwiZGVzY3JpYmUiLCJjb250ZW50IiwiaW5kaWNhdG9yRG90cyIsIm1ldGhvZHMiLCJzZWFyY2h0YXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVjVGFwIiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsInJlY05hbWUiLCJyZWNQaG90byIsInJlY051bWJlciIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGVBQVMsQ0FDUCwwRUFETyxFQUVQLDZFQUZPLEVBR1AsMkVBSE8sRUFJUCwyRUFKTyxDQUZKO0FBUUxDLGNBQVEscUJBUkg7QUFTTEMsY0FBUSxxQkFUSDtBQVVMQyxnQkFBVSxFQVZMO0FBV0xDLGVBQVMsSUFYSjtBQVlMQyxxQkFBZTtBQVpWLEssUUFjUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFlBTlEsa0JBTURDLENBTkMsRUFNRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtSLE9BQUwsQ0FBYU8sRUFBRUcsYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0EsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsbUNBQXVCSSxLQUFLSyxPQUE1QixrQkFBZ0RMLEtBQUtNLFFBQXJELG1CQUEyRU4sS0FBS08sU0FBaEYsa0JBQXNHUCxLQUFLVjtBQUQ3RixTQUFoQjtBQUdEO0FBYk8sSzs7Ozs7NkJBZUQ7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQUEsV0FBS1IsT0FBTDtBQUNEOzs7d0NBQ21CO0FBQ2xCLHFCQUFLaUIsb0JBQUw7QUFDQUMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBM0NtQyxlQUFLQyxJOztrQkFBdEI5QixRIiwiZmlsZSI6ImhvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9jb250ZW50LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aJi+acuuaRhOW9seWkp+i1mycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiAndHJ1ZSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHA6Ly9pc3VqaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL3dhbGxoYXZlbi04MDA1My0zMDB4MTg4LmpwZycsXG4gICAgICAnaHR0cDovL2lzdWppbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTAvd2FsbGhhdmVuLTMyMjcxMi0xLTMwMHgxNjYuanBnJyxcbiAgICAgICdodHRwOi8vaXN1amluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC93YWxsaGF2ZW4tMjY0MjcxLTMwMHgxODguanBnJyxcbiAgICAgICdodHRwOi8vaXN1amluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC93YWxsaGF2ZW4tNDE5NTU0LTMwMHgxNjkuanBnJ1xuICAgIF0sXG4gICAgc2VhcmNoOiAnLi4vaW1hZ2Uvc2VhcmNoLnBuZycsXG4gICAgcHJhaXNlOiAnLi4vaW1hZ2UvcHJhaXNlLnBuZycsXG4gICAgZGVzY3JpYmU6ICcnLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNodGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAndXAnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVjVGFwKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vc2hvdz9yZWNOYW1lPSR7aXRlbS5yZWNOYW1lfSZyZWNQaG90bz0ke2l0ZW0ucmVjUGhvdG99JnJlY051bWJlcj0ke2l0ZW0ucmVjTnVtYmVyfSZkZXNjcmliZT0ke2l0ZW0uZGVzY3JpYmV9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=