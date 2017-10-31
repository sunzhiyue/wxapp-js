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
      },
      ButtonTap: function ButtonTap() {
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/upphoto'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJzcmMiLCJidXR0b25VcCIsImhlaWdodCIsIndpZHRoIiwiZGVzIiwibWV0aG9kcyIsInVwIiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiQnV0dG9uVGFwIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImFyciIsImEiLCJjb25jYXQiLCJ0ZW1wRmlsZVBhdGhzIiwic2V0RGF0YSIsInZpZXdJbWciLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaSIsInB1c2giLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwiY3VycmVudCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsU0FEakI7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUI7QUFEZjtBQUZELEssUUFNVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxrQkFGTDtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTyxDQUpGO0FBS0xDLFdBQUs7QUFMQSxLLFFBT1BDLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SSixTQU5RLGVBTUpLLENBTkksRUFNRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSCxFQUFFSSxNQUFGLENBQVNDLEtBQXJCO0FBQ0FKLGFBQUtOLEdBQUwsR0FBV0ssRUFBRUksTUFBRixDQUFTQyxLQUFwQjtBQUNBO0FBQ0QsT0FYTztBQVlSQyxlQVpRLHVCQVlJO0FBQ1YsWUFBSUwsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS1YsR0FBTCxDQUFTZ0IsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4Qix5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLFFBRE07QUFFYkMsa0JBQU0sU0FGTztBQUdiQyxzQkFBVTtBQUhHLFdBQWY7QUFLQTtBQUNEO0FBQ0QsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSyxFQUV1QjtBQUN0Q0Msc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHLEVBR2tCO0FBQ2pDQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0EsZ0JBQUlDLE1BQU1qQixLQUFLVixHQUFmO0FBQ0EsZ0JBQUk0QixJQUFJRCxJQUFJRSxNQUFKLENBQVdILElBQUlJLGFBQWYsQ0FBUjtBQUNBLGdCQUFJRixFQUFFWixNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQiw2QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPLFFBRE07QUFFYkMsc0JBQU0sU0FGTztBQUdiQywwQkFBVTtBQUhHLGVBQWY7QUFLQTtBQUNEO0FBQ0RWLGlCQUFLVixHQUFMLEdBQVc0QixDQUFYO0FBQ0FsQixpQkFBS3FCLE9BQUwsQ0FBYTtBQUNYL0IsbUJBQUs0QjtBQURNLGFBQWI7QUFHRDtBQXBCYyxTQUFqQjtBQXNCRCxPQTVDTztBQTZDUkksYUE3Q1EsbUJBNkNBdkIsQ0E3Q0EsRUE2Q0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNdUIsUUFBUXhCLEVBQUV5QixhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJTixNQUFNLEVBQVY7QUFDQSxhQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSTFCLEtBQUtWLEdBQUwsQ0FBU2dCLE1BQTdCLEVBQXFDb0IsR0FBckMsRUFBMEM7QUFDeENULGNBQUlVLElBQUosQ0FBUzNCLEtBQUtWLEdBQUwsQ0FBU29DLENBQVQsQ0FBVDtBQUNEO0FBQ0R6QixnQkFBUUMsR0FBUixDQUFZRixLQUFLVixHQUFqQixFQUFzQixLQUF0QjtBQUNBLHVCQUFLc0MsWUFBTCxDQUFrQjtBQUNoQkMsZ0JBQU1aLEdBRFU7QUFFaEJhLHdCQUFZOUIsS0FBS1YsR0FBTCxDQUFTaUMsS0FBVDtBQUZJLFNBQWxCO0FBSUQ7QUF6RE8sSzs7Ozs7NkJBNEREO0FBQ1AsVUFBSXZCLE9BQU8sSUFBWDtBQUNBLHFCQUFLK0IsYUFBTCxDQUFtQjtBQUNqQmhCLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWGYsa0JBQVFDLEdBQVIsQ0FBWWMsR0FBWjtBQUNBaEIsZUFBS1IsTUFBTCxHQUFjd0IsSUFBSWdCLFlBQWxCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQWxGZ0MsZUFBS0MsSTs7a0JBQW5CakQsSyIsImZpbGUiOiJ1cHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcqOi/memHjOS4iuS8oOS9nOWTgScsXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiBbXSxcbiAgICBidXR0b25VcDogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBkZXM6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYuZGVzID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuZGVzKVxuICAgIH0sXG4gICAgQnV0dG9uVGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5zcmMubGVuZ3RoID49IDgpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5Y+q6IO95pS+OOW8oOWTpicsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA4LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgICBsZXQgYSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgaWYgKGEubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjjlvKDlk6YnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc3JjID0gYVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgdmlld0ltZyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBhcnIgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnIucHVzaChzZWxmLnNyY1tpXSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuc3JjLCAnc3JjJylcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogYXJyLFxuICAgICAgICBjdXJyZW50OiBgJHtzZWxmLnNyY1tpbmRleF19YFxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19