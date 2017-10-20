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
      if (self.src.length >= 8) {
        _wepy2.default.showToast({
          title: '只能放8张哦',
          icon: 'success',
          duration: 1000
        });
        return;
      }
      _wepy2.default.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var arr = self.src;
          var a = arr.concat(res.tempFilePaths);
          self.src = a;
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
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/upphoto'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImJ1dHRvblVwIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwidXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImxlbmd0aCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJhIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwiY29uc29sZSIsImxvZyIsIndpbmRvd0hlaWdodCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZ0JBQVUsa0JBRkw7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7OztnQ0FPRTtBQUNWLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlBLEtBQUtSLEdBQUwsQ0FBU1MsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4Qix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFFBRE07QUFFYkMsZ0JBQU0sU0FGTztBQUdiQyxvQkFBVTtBQUhHLFNBQWY7QUFLQTtBQUNEO0FBQ0QscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFBTyxDQURRLEVBQ0w7QUFDVkMsa0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxvQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQSxjQUFJQyxNQUFNWixLQUFLUixHQUFmO0FBQ0EsY0FBSXFCLElBQUlELElBQUlFLE1BQUosQ0FBV0gsSUFBSUksYUFBZixDQUFSO0FBQ0FmLGVBQUtSLEdBQUwsR0FBV3FCLENBQVg7QUFDQWIsZUFBS2dCLE9BQUwsQ0FBYTtBQUNYeEIsaUJBQUtvQjtBQURNLFdBQWI7QUFHRDtBQVpjLE9BQWpCO0FBY0Q7Ozs2QkFDUTtBQUNQLFVBQUlaLE9BQU8sSUFBWDtBQUNBLHFCQUFLaUIsYUFBTCxDQUFtQjtBQUNqQlAsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTyxrQkFBUUMsR0FBUixDQUFZUixHQUFaO0FBQ0FYLGVBQUtOLE1BQUwsR0FBY2lCLElBQUlTLFlBQWxCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQWxEZ0MsZUFBS0MsSTs7a0JBQW5CakMsSyIsImZpbGUiOiJ1cHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcqOi/memHjOS4iuS8oOS9nOWTgSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogW10sXG4gICAgYnV0dG9uVXA6ICcuLi9pbWFnZS9hZGQucG5nJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHVwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgQnV0dG9uVGFwKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGlmIChzZWxmLnNyYy5sZW5ndGggPj0gOCkge1xuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WPquiDveaUvjjlvKDlk6YnLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IDksIC8vIOm7mOiupDlcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgbGV0IGFyciA9IHNlbGYuc3JjXG4gICAgICAgIGxldCBhID0gYXJyLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcbiAgICAgICAgc2VsZi5zcmMgPSBhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgc3JjOiBhcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19