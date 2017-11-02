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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGhvdG8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJzcmMiLCJidXR0b25VcCIsImhlaWdodCIsIndpZHRoIiwiZGVzIiwibWV0aG9kcyIsInVwIiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiQnV0dG9uVGFwIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaW1hZ2UiLCJ0aXRsZSIsImR1cmF0aW9uIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJhIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsImljb24iLCJzZXREYXRhIiwidmlld0ltZyIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpIiwicHVzaCIsInByZXZpZXdJbWFnZSIsInVybHMiLCJjdXJyZW50IiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixTQURqQjtBQUVQQyxjQUFRO0FBQ05DLDZCQUFxQjtBQURmO0FBRkQsSyxRQU1UQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGdCQUFVLGtCQUZMO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxhQUFPLENBSkY7QUFLTEMsV0FBSztBQUxBLEssUUFPUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxP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J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcqOi/memHjOS4iuS8oOS9nOWTgScsXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiBbXSxcbiAgICBidXR0b25VcDogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBkZXM6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB1cCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYuZGVzID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuZGVzKVxuICAgIH0sXG4gICAgQnV0dG9uVGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5zcmMubGVuZ3RoID49IDgpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2Uvd2Fybi5wbmcnLFxuICAgICAgICAgIHRpdGxlOiAn5Y+q6IO95pS+OOW8oOWTpicsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDgsIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLnNyY1xuICAgICAgICAgIGxldCBhID0gYXJyLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcbiAgICAgICAgICBpZiAoYS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5Y+q6IO95pS+OOW8oOWTpicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zcmMgPSBhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogYVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB2aWV3SW1nKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGFyciA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKHNlbGYuc3JjW2ldKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coc2VsZi5zcmMsICdzcmMnKVxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICB1cmxzOiBhcnIsXG4gICAgICAgIGN1cnJlbnQ6IGAke3NlbGYuc3JjW2luZGV4XX1gXG4gICAgICB9KVxuICAgIH1cblxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBhdmF0YXJVcmw6IHJlcy51c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgbmlja05hbWU6IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==