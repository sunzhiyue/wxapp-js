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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImJ1dHRvblVwIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwidXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImxlbmd0aCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJwdXNoIiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwiY29uc29sZSIsImxvZyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxrQkFGTDtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTztBQUpGLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7O2dDQU9FO0FBQ1YsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUEsS0FBS1IsR0FBTCxDQUFTUyxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sUUFETTtBQUViQyxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtBO0FBQ0Q7QUFDRCxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLENBRFEsRUFDTDtBQUNWQyxrQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENDLG9CQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0MsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNBLGNBQUlDLE1BQU1aLEtBQUtSLEdBQWY7QUFDQW9CLGNBQUlDLElBQUosQ0FBU0YsSUFBSUcsYUFBSixDQUFrQixDQUFsQixDQUFUO0FBQ0FkLGVBQUtSLEdBQUwsR0FBV29CLEdBQVg7QUFDQVosZUFBS2UsT0FBTCxDQUFhO0FBQ1h2QixpQkFBS29CO0FBRE0sV0FBYjtBQUdEO0FBWmMsT0FBakI7QUFjRDs7OzZCQUNRO0FBQ1AsVUFBSVosT0FBTyxJQUFYO0FBQ0EscUJBQUtnQixhQUFMLENBQW1CO0FBQ2pCTixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hNLGtCQUFRQyxHQUFSLENBQVlQLEdBQVo7QUFDQVgsZUFBS04sTUFBTCxHQUFjaUIsSUFBSVEsWUFBbEI7QUFDQW5CLGVBQUtMLEtBQUwsR0FBYWdCLElBQUlTLFdBQWpCO0FBQ0Q7QUFMZ0IsT0FBbkI7QUFPRDs7O29DQUNlO0FBQ2RILGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUF0RGdDLGVBQUtHLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoidXBwaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnKjov5nph4zkuIrkvKDkvZzlk4EnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6IFtdLFxuICAgIGJ1dHRvblVwOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIEJ1dHRvblRhcCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBpZiAoc2VsZi5zcmMubGVuZ3RoID49IDgpIHtcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICflj6rog73mlL445byg5ZOmJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgIGNvdW50OiAyLCAvLyDpu5jorqQ5XG4gICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG4gICAgICAgIGxldCBhcnIgPSBzZWxmLnNyY1xuICAgICAgICBhcnIucHVzaChyZXMudGVtcEZpbGVQYXRoc1swXSlcbiAgICAgICAgc2VsZi5zcmMgPSBhcnJcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBzcmM6IGFyclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZygnLi4uLi4uJylcbiAgfVxufVxuIl19