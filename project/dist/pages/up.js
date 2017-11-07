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

var Up = function (_wepy$page) {
  _inherits(Up, _wepy$page);

  function Up() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Up);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Up.__proto__ || Object.getPrototypeOf(Up)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '寻找作品'
    }, _this.data = {
      input: '',
      text: ''
    }, _this.methods = {
      input: function input(e) {
        var self = this;
        self.input = e.detail.value;
        console.log(self.input, 'aaaaa');
        if (self.input !== '') {
          _wepy2.default.request({
            url: 'http://127.0.0.1:7001/photo/search',
            method: 'POST',
            data: {
              recName: self.input
            },
            success: function success(res) {
              console.log(res.data, '1');
              self.text = res.data;
              self.setData({
                text: res.data
              });
              console.log(self.text, '2');
            }
          });
        } else {}
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

  _createClass(Up, [{
    key: 'onShow',
    value: function onShow() {
      // let self = this
      // wepy.request({
      //   url: 'http://127.0.0.1:7001/photo/search',
      //   method: 'POST',
      //   data: {
      //     state: self.state
      //   },
      //   success: function(res) {
      //     console.log(res.data, '1')
      //     self.text = res.data
      //     self.setData({
      //       text: res.data
      //     })
      //     console.log(self.text, '2')
      //   }
      // })
    }
  }]);

  return Up;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Up , 'pages/up'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwLmpzIl0sIm5hbWVzIjpbIlVwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbnB1dCIsInRleHQiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVjTmFtZSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicmVjVGFwIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIm5hdmlnYXRlVG8iLCJyZWNQaG90byIsInJlY051bWJlciIsImRlc2NyaWJlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxZQUFNO0FBRkQsSyxRQUlQQyxPLEdBQVM7QUFDUEYsV0FETyxpQkFDREcsQ0FEQyxFQUNFO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLEtBQUwsR0FBYUcsRUFBRUUsTUFBRixDQUFTQyxLQUF0QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSixLQUFLSixLQUFqQixFQUF3QixPQUF4QjtBQUNBLFlBQUlJLEtBQUtKLEtBQUwsS0FBZSxFQUFuQixFQUF1QjtBQUNyQix5QkFBS1MsT0FBTCxDQUFhO0FBQ1hDLGlCQUFLLG9DQURNO0FBRVhDLG9CQUFRLE1BRkc7QUFHWFosa0JBQU07QUFDSmEsdUJBQVNSLEtBQUtKO0FBRFYsYUFISztBQU1YYSxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCxzQkFBUUMsR0FBUixDQUFZTSxJQUFJZixJQUFoQixFQUFzQixHQUF0QjtBQUNBSyxtQkFBS0gsSUFBTCxHQUFZYSxJQUFJZixJQUFoQjtBQUNBSyxtQkFBS1csT0FBTCxDQUFhO0FBQ1hkLHNCQUFNYSxJQUFJZjtBQURDLGVBQWI7QUFHQVEsc0JBQVFDLEdBQVIsQ0FBWUosS0FBS0gsSUFBakIsRUFBdUIsR0FBdkI7QUFDRDtBQWJVLFdBQWI7QUFlRCxTQWhCRCxNQWdCTyxDQUVOO0FBQ0YsT0F4Qk07QUF5QlBlLFlBekJPLGtCQXlCQWIsQ0F6QkEsRUF5Qkc7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJYSxPQUFPYixLQUFLSCxJQUFMLENBQVVFLEVBQUVlLGFBQUYsQ0FBZ0JDLEVBQTFCLENBQVg7QUFDQVosZ0JBQVFDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLHVCQUFLaUIsVUFBTCxDQUFnQjtBQUNkVixtQ0FBdUJPLEtBQUtMLE9BQTVCLGtCQUFnREssS0FBS0ksUUFBckQsbUJBQTJFSixLQUFLSyxTQUFoRixrQkFBc0dMLEtBQUtNO0FBRDdGLFNBQWhCO0FBR0Q7QUFoQ00sSzs7Ozs7NkJBa0NBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OztFQTNENkIsZUFBS0MsSTs7a0JBQWhCNUIsRSIsImZpbGUiOiJ1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflr7vmib7kvZzlk4EnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbnB1dDogJycsXG4gICAgdGV4dDogJydcbiAgfVxuICBtZXRob2RzID17XG4gICAgaW5wdXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmlucHV0ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuaW5wdXQsICdhYWFhYScpXG4gICAgICBpZiAoc2VsZi5pbnB1dCAhPT0gJycpIHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvcGhvdG8vc2VhcmNoJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICByZWNOYW1lOiBzZWxmLmlucHV0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAnMScpXG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQsICcyJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICB9XG4gICAgfSxcbiAgICByZWNUYXAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYudGV4dFtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9zaG93P3JlY05hbWU9JHtpdGVtLnJlY05hbWV9JnJlY1Bob3RvPSR7aXRlbS5yZWNQaG90b30mcmVjTnVtYmVyPSR7aXRlbS5yZWNOdW1iZXJ9JmRlc2NyaWJlPSR7aXRlbS5kZXNjcmliZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gd2VweS5yZXF1ZXN0KHtcbiAgICAvLyAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9waG90by9zZWFyY2gnLFxuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICBkYXRhOiB7XG4gICAgLy8gICAgIHN0YXRlOiBzZWxmLnN0YXRlXG4gICAgLy8gICB9LFxuICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAnMScpXG4gICAgLy8gICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgLy8gICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgLy8gICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0LCAnMicpXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfVxufVxuIl19