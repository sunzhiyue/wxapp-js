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
      navigationBarTitleText: '在这里上传作品',
      window: {
        backgroundTextStyle: 'light'
      }
    }, _this.data = {
      src: [],
      buttonUp: '../image/add.png',
      height: 0,
      width: 0,
      des: ''
    }, _this.methods = {
      up: function up() {
        _wepy2.default.navigateTo({
          url: ''
        });
      },
      des: function des(e) {
        var self = this;
        console.log(e.detail.value);
        self.des = e.detail.value;
        // console.log(self.des)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'ButtonTap',
    value: function ButtonTap() {
      var self = this;
      if (self.src.length >= 8) {
        _wepy2.default.showToast({
          title: '只能放8张哦',
          icon: 'success',
          duration: 1000
        });
        return;
      }
      _wepy2.default.chooseImage({
        count: 8, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var arr = self.src;
          var a = arr.concat(res.tempFilePaths);
          if (a.length > 8) {
            _wepy2.default.showToast({
              title: '只能放8张哦',
              icon: 'success',
              duration: 1000
            });
            return;
          }
          self.src = a;
          self.setData({
            src: a
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
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/upphoto'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJzcmMiLCJidXR0b25VcCIsImhlaWdodCIsIndpZHRoIiwiZGVzIiwibWV0aG9kcyIsInVwIiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImFyciIsImEiLCJjb25jYXQiLCJ0ZW1wRmlsZVBhdGhzIiwic2V0RGF0YSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsU0FEakI7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUI7QUFEZjtBQUZELEssUUFNVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxrQkFGTDtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTyxDQUpGO0FBS0xDLFdBQUs7QUFMQSxLLFFBT1BDLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SSixTQU5RLGVBTUpLLENBTkksRUFNRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSCxFQUFFSSxNQUFGLENBQVNDLEtBQXJCO0FBQ0FKLGFBQUtOLEdBQUwsR0FBV0ssRUFBRUksTUFBRixDQUFTQyxLQUFwQjtBQUNBO0FBQ0Q7QUFYTyxLOzs7OztnQ0FhRTtBQUNWLFVBQUlKLE9BQU8sSUFBWDtBQUNBLFVBQUlBLEtBQUtWLEdBQUwsQ0FBU2UsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4Qix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFFBRE07QUFFYkMsZ0JBQU0sU0FGTztBQUdiQyxvQkFBVTtBQUhHLFNBQWY7QUFLQTtBQUNEO0FBQ0QscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFBTyxDQURRLEVBQ0w7QUFDVkMsa0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxvQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQSxjQUFJQyxNQUFNaEIsS0FBS1YsR0FBZjtBQUNBLGNBQUkyQixJQUFJRCxJQUFJRSxNQUFKLENBQVdILElBQUlJLGFBQWYsQ0FBUjtBQUNBLGNBQUlGLEVBQUVaLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCLDJCQUFLQyxTQUFMLENBQWU7QUFDYkMscUJBQU8sUUFETTtBQUViQyxvQkFBTSxTQUZPO0FBR2JDLHdCQUFVO0FBSEcsYUFBZjtBQUtBO0FBQ0Q7QUFDRFQsZUFBS1YsR0FBTCxHQUFXMkIsQ0FBWDtBQUNBakIsZUFBS29CLE9BQUwsQ0FBYTtBQUNYOUIsaUJBQUsyQjtBQURNLFdBQWI7QUFHRDtBQXBCYyxPQUFqQjtBQXNCRDs7OzZCQUNRO0FBQ1AsVUFBSWpCLE9BQU8sSUFBWDtBQUNBLHFCQUFLcUIsYUFBTCxDQUFtQjtBQUNqQlAsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYZCxrQkFBUUMsR0FBUixDQUFZYSxHQUFaO0FBQ0FmLGVBQUtSLE1BQUwsR0FBY3VCLElBQUlPLFlBQWxCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXBFZ0MsZUFBS0MsSTs7a0JBQW5CdkMsSyIsImZpbGUiOiJ1cHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcqOi/memHjOS4iuS8oOS9nOWTgScsXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiBbXSxcbiAgICBidXR0b25VcDogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBkZXM6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYuZGVzID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuZGVzKVxuICAgIH1cbiAgfVxuICBCdXR0b25UYXAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgaWYgKHNlbGYuc3JjLmxlbmd0aCA+PSA4KSB7XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Y+q6IO95pS+OOW8oOWTpicsXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICBjb3VudDogOCwgLy8g6buY6K6kOVxuICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgbGV0IGEgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICBpZiAoYS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICflj6rog73mlL445byg5ZOmJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNyYyA9IGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBzcmM6IGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19