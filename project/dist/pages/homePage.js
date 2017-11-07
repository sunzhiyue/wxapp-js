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
      praise: '../image/praone.png',
      describe: '',
      content: null,
      state: 'true',
      text: ''
    }, _this.methods = {
      searchtap: function searchtap() {
        _wepy2.default.navigateTo({
          url: 'up'
        });
      },
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

  _createClass(Homepage, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/photo/list',
        method: 'POST',
        data: {
          state: self.state
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwic2VhcmNoIiwicHJhaXNlIiwiZGVzY3JpYmUiLCJjb250ZW50Iiwic3RhdGUiLCJ0ZXh0IiwibWV0aG9kcyIsInNlYXJjaHRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZWNUYXAiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVjTmFtZSIsInJlY1Bob3RvIiwicmVjTnVtYmVyIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFFBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxDQUNQLDBFQURPLEVBRVAsNkVBRk8sRUFHUCwyRUFITyxFQUlQLDJFQUpPLENBRko7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxjQUFRLHFCQVRIO0FBVUxDLGdCQUFVLEVBVkw7QUFXTEMsZUFBUyxJQVhKO0FBWUxDLGFBQU8sTUFaRjtBQWFMQyxZQUFNO0FBYkQsSyxRQWVQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsWUFOUSxrQkFNREMsQ0FOQyxFQU1FO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS1AsSUFBTCxDQUFVTSxFQUFFRyxhQUFGLENBQWdCQyxFQUExQixDQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDQSx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxtQ0FBdUJJLEtBQUtLLE9BQTVCLGtCQUFnREwsS0FBS00sUUFBckQsbUJBQTJFTixLQUFLTyxTQUFoRixrQkFBc0dQLEtBQUtYO0FBRDdGLFNBQWhCO0FBR0Q7QUFiTyxLOzs7Ozs2QkFlRDtBQUNQLFVBQUlVLE9BQU8sSUFBWDtBQUNBQSxXQUFLVCxPQUFMO0FBQ0EscUJBQUtrQixPQUFMLENBQWE7QUFDWFosYUFBSyxrQ0FETTtBQUVYYSxnQkFBUSxNQUZHO0FBR1h6QixjQUFNO0FBQ0pPLGlCQUFPUSxLQUFLUjtBQURSLFNBSEs7QUFNWG1CLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJSLGtCQUFRQyxHQUFSLENBQVlPLElBQUkzQixJQUFoQjtBQUNBZSxlQUFLUCxJQUFMLEdBQVltQixJQUFJM0IsSUFBaEI7QUFDQWUsZUFBS2EsT0FBTCxDQUFhO0FBQ1hwQixrQkFBTW1CLElBQUkzQjtBQURDLFdBQWI7QUFHRDtBQVpVLE9BQWI7QUFjRDs7O3dDQUNtQjtBQUNsQixxQkFBSzZCLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQTFEbUMsZUFBS0MsSTs7a0JBQXRCcEMsUSIsImZpbGUiOiJob21lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3V0aWwvY29udGVudC5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiYvmnLrmkYTlvbHlpKfotZsnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogJ3RydWUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaXN1amluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy93YWxsaGF2ZW4tODAwNTMtMzAweDE4OC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pc3VqaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEwL3dhbGxoYXZlbi0zMjI3MTItMS0zMDB4MTY2LmpwZycsXG4gICAgICAnaHR0cDovL2lzdWppbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTAvd2FsbGhhdmVuLTI2NDI3MS0zMDB4MTg4LmpwZycsXG4gICAgICAnaHR0cDovL2lzdWppbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTAvd2FsbGhhdmVuLTQxOTU1NC0zMDB4MTY5LmpwZydcbiAgICBdLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL3NlYXJjaC5wbmcnLFxuICAgIHByYWlzZTogJy4uL2ltYWdlL3ByYW9uZS5wbmcnLFxuICAgIGRlc2NyaWJlOiAnJyxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIHN0YXRlOiAndHJ1ZScsXG4gICAgdGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlYXJjaHRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3VwJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHJlY1RhcChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi50ZXh0W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL3Nob3c/cmVjTmFtZT0ke2l0ZW0ucmVjTmFtZX0mcmVjUGhvdG89JHtpdGVtLnJlY1Bob3RvfSZyZWNOdW1iZXI9JHtpdGVtLnJlY051bWJlcn0mZGVzY3JpYmU9JHtpdGVtLmRlc2NyaWJlfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSBjb250ZW50XG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9waG90by9saXN0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0ZTogc2VsZi5zdGF0ZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19