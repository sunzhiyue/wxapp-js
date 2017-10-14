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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '在这里上传作品'
    }, _this.data = {
      src: [],
      buttonUp: '../image/add.png',
      height: 0,
      width: 0
    }, _this.methods = {
      up: function up() {
        _wepy2.default.navigateTo({
          url: ''
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'ButtonTap',
    value: function ButtonTap() {
      var self = this;
      _wepy2.default.chooseImage({
        count: 3, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var arr = self.src;
          arr.push(res.tempFilePaths[0]);
          self.src = arr;
          self.setData({
            src: arr
          });
        }
      });
    }
  }, {
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
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('......');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/upphoto'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImJ1dHRvblVwIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwidXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwicHVzaCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZ0JBQVUsa0JBRkw7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7OztnQ0FPRTtBQUNWLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sQ0FEUSxFQUNMO0FBQ1ZDLGtCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSyxFQUV1QjtBQUN0Q0Msb0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHLEVBR2tCO0FBQ2pDQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0EsY0FBSUMsTUFBTVAsS0FBS1IsR0FBZjtBQUNBZSxjQUFJQyxJQUFKLENBQVNGLElBQUlHLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBVDtBQUNBVCxlQUFLUixHQUFMLEdBQVdlLEdBQVg7QUFDQVAsZUFBS1UsT0FBTCxDQUFhO0FBQ1hsQixpQkFBS2U7QUFETSxXQUFiO0FBR0Q7QUFaYyxPQUFqQjtBQWNEOzs7NkJBQ1E7QUFDUCxVQUFJUCxPQUFPLElBQVg7QUFDQSxxQkFBS1csYUFBTCxDQUFtQjtBQUNqQk4sZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTSxrQkFBUUMsR0FBUixDQUFZUCxHQUFaO0FBQ0FOLGVBQUtOLE1BQUwsR0FBY1ksSUFBSVEsWUFBbEI7QUFDQWQsZUFBS0wsS0FBTCxHQUFhVyxJQUFJUyxXQUFqQjtBQUNEO0FBTGdCLE9BQW5CO0FBT0Q7OztvQ0FDZTtBQUNkSCxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBOUNnQyxlQUFLRyxJOztrQkFBbkI1QixLIiwiZmlsZSI6InVwcGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zyo6L+Z6YeM5LiK5Lyg5L2c5ZOBJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiBbXSxcbiAgICBidXR0b25VcDogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBCdXR0b25UYXAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICBjb3VudDogMywgLy8g6buY6K6kOVxuICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgYXJyLnB1c2gocmVzLnRlbXBGaWxlUGF0aHNbMF0pXG4gICAgICAgIHNlbGYuc3JjID0gYXJyXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgc3JjOiBhcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2coJy4uLi4uLicpXG4gIH1cbn1cbiJdfQ==