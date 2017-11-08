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
      des: function des(e) {
        var self = this;
        console.log(e.detail.value);
        self.photodes = e.detail.value;
      },
      input: function input(e) {
        var self = this;
        console.log(e.detail.value);
        self.photoName = e.detail.value;
      },
      up: function up(e) {
        var self = this;
        _wepy2.default.getUserInfo({
          success: function success(res) {
            self.nickName = res.userInfo.nickName;
            self.avatarUrl = res.userInfo.avatarUrl;
            if (self.input !== '' & self.dec !== '' & self.nickName !== '') {
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/photo/upload',
                method: 'POST',
                data: {
                  Wechat: self.nickName,
                  recName: self.photoName,
                  recPhoto: self.src,
                  describe: self.photodes
                  // recNumber: 0
                },
                success: function success(res) {
                  console.log(res);
                  _wepy2.default.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                    success: function success() {
                      _wepy2.default.navigateBack({
                        delta: 1
                      });
                    }
                  });
                }
              });
            } else {
              _wepy2.default.showToast({
                title: '请补充信息',
                image: '../image/warn.png'
              });
            }
          }
        });
      },
      ButtonTap: function ButtonTap() {
        var self = this;
        if (self.src.length >= 8) {
          _wepy2.default.showToast({
            image: '../image/warn.png',
            title: '只能放8张哦',
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
      },
      viewImg: function viewImg(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var arr = [];
        for (var i = 0; i < self.src.length; i++) {
          arr.push(self.src[i]);
        }
        console.log(self.src, 'src');
        _wepy2.default.previewImage({
          urls: arr,
          current: '' + self.src[index]
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          console.log(res);
          self.height = res.windowHeight;
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

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/upphoto'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJzcmMiLCJidXR0b25VcCIsImhlaWdodCIsIndpZHRoIiwiZGVzIiwibWV0aG9kcyIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwicGhvdG9kZXMiLCJpbnB1dCIsInBob3RvTmFtZSIsInVwIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsImRlYyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJXZWNoYXQiLCJyZWNOYW1lIiwicmVjUGhvdG8iLCJkZXNjcmliZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJpbWFnZSIsIkJ1dHRvblRhcCIsImxlbmd0aCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJhcnIiLCJhIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJ2aWV3SW1nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImkiLCJwdXNoIiwicHJldmlld0ltYWdlIiwidXJscyIsImN1cnJlbnQiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFNBRGpCO0FBRVBDLGNBQVE7QUFDTkMsNkJBQXFCO0FBRGY7QUFGRCxLLFFBTVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZ0JBQVUsa0JBRkw7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFB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QUFqQjtBQVVEOzs7O0VBbklnQyxlQUFLd0MsSTs7a0JBQW5CakUsSyIsImZpbGUiOiJ1cHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcqOi/memHjOS4iuS8oOS9nOWTgScsXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiBbXSxcbiAgICBidXR0b25VcDogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBkZXM6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkZXMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYucGhvdG9kZXMgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgaW5wdXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYucGhvdG9OYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHVwKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICBpZiAoc2VsZi5pbnB1dCAhPT0gJycgJiBzZWxmLmRlYyAhPT0gJycgJiBzZWxmLm5pY2tOYW1lICE9PSAnJykge1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3Bob3RvL3VwbG9hZCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgV2VjaGF0OiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgIHJlY05hbWU6IHNlbGYucGhvdG9OYW1lLFxuICAgICAgICAgICAgICAgIHJlY1Bob3RvOiBzZWxmLnNyYyxcbiAgICAgICAgICAgICAgICBkZXNjcmliZTogc2VsZi5waG90b2Rlc1xuICAgICAgICAgICAgICAgIC8vIHJlY051bWJlcjogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+ivt+ihpeWFheS/oeaBrycsXG4gICAgICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2Uvd2Fybi5wbmcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIEJ1dHRvblRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuc3JjLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlL3dhcm4ucG5nJyxcbiAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjjlvKDlk6YnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA4LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgICBsZXQgYSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgaWYgKGEubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjjlvKDlk6YnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc3JjID0gYVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgdmlld0ltZyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBhcnIgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnIucHVzaChzZWxmLnNyY1tpXSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuc3JjLCAnc3JjJylcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogYXJyLFxuICAgICAgICBjdXJyZW50OiBgJHtzZWxmLnNyY1tpbmRleF19YFxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgYXZhdGFyVXJsOiByZXMudXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgIG5pY2tOYW1lOiByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=