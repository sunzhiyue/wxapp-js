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
      if (self.src.length >= 3) {
        _wepy2.default.showToast({
          title: '只能放三张哦',
          icon: 'success',
          duration: 1000
        });
        return;
      }
      _wepy2.default.chooseImage({
        count: 2, // 默认9
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImJ1dHRvblVwIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwidXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImxlbmd0aCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJwdXNoIiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwiY29uc29sZSIsImxvZyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxrQkFGTDtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTztBQUpGLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7O2dDQU9FO0FBQ1YsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUEsS0FBS1IsR0FBTCxDQUFTUyxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sUUFETTtBQUViQyxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtBO0FBQ0Q7QUFDRCxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLENBRFEsRUFDTDtBQUNWQyxrQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENDLG9CQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0MsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNBLGNBQUlDLE1BQU1aLEtBQUtSLEdBQWY7QUFDQW9CLGNBQUlDLElBQUosQ0FBU0YsSUFBSUcsYUFBSixDQUFrQixDQUFsQixDQUFUO0FBQ0FkLGVBQUtSLEdBQUwsR0FBV29CLEdBQVg7QUFDQVosZUFBS2UsT0FBTCxDQUFhO0FBQ1h2QixpQkFBS29CO0FBRE0sV0FBYjtBQUdEO0FBWmMsT0FBakI7QUFjRDs7OzZCQUNRO0FBQ1AsVUFBSVosT0FBTyxJQUFYO0FBQ0EscUJBQUtnQixhQUFMLENBQW1CO0FBQ2pCTixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hNLGtCQUFRQyxHQUFSLENBQVlQLEdBQVo7QUFDQVgsZUFBS04sTUFBTCxHQUFjaUIsSUFBSVEsWUFBbEI7QUFDQW5CLGVBQUtMLEtBQUwsR0FBYWdCLElBQUlTLFdBQWpCO0FBQ0Q7QUFMZ0IsT0FBbkI7QUFPRDs7O29DQUNlO0FBQ2RILGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUF0RGdDLGVBQUtHLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoidXBwaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnKjov5nph4zkuIrkvKDkvZzlk4EnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6IFtdLFxuICAgIGJ1dHRvblVwOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIEJ1dHRvblRhcCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBpZiAoc2VsZi5zcmMubGVuZ3RoID49IDMpIHtcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICflj6rog73mlL7kuInlvKDlk6YnLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IDIsIC8vIOm7mOiupDlcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgbGV0IGFyciA9IHNlbGYuc3JjXG4gICAgICAgIGFyci5wdXNoKHJlcy50ZW1wRmlsZVBhdGhzWzBdKVxuICAgICAgICBzZWxmLnNyYyA9IGFyclxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHNyYzogYXJyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKCcuLi4uLi4nKVxuICB9XG59XG4iXX0=