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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJzcmMiLCJidXR0b25VcCIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsInVwIiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJsZW5ndGgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwiYSIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3dIZWlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsU0FEakI7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUI7QUFEZjtBQUZELEssUUFNVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxrQkFGTDtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTztBQUpGLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7O2dDQU9FO0FBQ1YsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUEsS0FBS1IsR0FBTCxDQUFTUyxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sUUFETTtBQUViQyxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtBO0FBQ0Q7QUFDRCxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLENBRFEsRUFDTDtBQUNWQyxrQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENDLG9CQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0MsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNBLGNBQUlDLE1BQU1aLEtBQUtSLEdBQWY7QUFDQSxjQUFJcUIsSUFBSUQsSUFBSUUsTUFBSixDQUFXSCxJQUFJSSxhQUFmLENBQVI7QUFDQSxjQUFJRixFQUFFWixNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQiwyQkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHFCQUFPLFFBRE07QUFFYkMsb0JBQU0sU0FGTztBQUdiQyx3QkFBVTtBQUhHLGFBQWY7QUFLQTtBQUNEO0FBQ0RMLGVBQUtSLEdBQUwsR0FBV3FCLENBQVg7QUFDQWIsZUFBS2dCLE9BQUwsQ0FBYTtBQUNYeEIsaUJBQUtxQjtBQURNLFdBQWI7QUFHRDtBQXBCYyxPQUFqQjtBQXNCRDs7OzZCQUNRO0FBQ1AsVUFBSWIsT0FBTyxJQUFYO0FBQ0EscUJBQUtpQixhQUFMLENBQW1CO0FBQ2pCUCxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hPLGtCQUFRQyxHQUFSLENBQVlSLEdBQVo7QUFDQVgsZUFBS04sTUFBTCxHQUFjaUIsSUFBSVMsWUFBbEI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBN0RnQyxlQUFLQyxJOztrQkFBbkJuQyxLIiwiZmlsZSI6InVwcGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zyo6L+Z6YeM5LiK5Lyg5L2c5ZOBJyxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCdcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6IFtdLFxuICAgIGJ1dHRvblVwOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIEJ1dHRvblRhcCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBpZiAoc2VsZi5zcmMubGVuZ3RoID49IDgpIHtcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICflj6rog73mlL445byg5ZOmJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgIGNvdW50OiA4LCAvLyDpu5jorqQ5XG4gICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG4gICAgICAgIGxldCBhcnIgPSBzZWxmLnNyY1xuICAgICAgICBsZXQgYSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgIGlmIChhLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjjlvKDlk6YnLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc3JjID0gYVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHNyYzogYVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=