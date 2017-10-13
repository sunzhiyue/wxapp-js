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
      navigationBarTitleText: '手机摄影大赛'
    }, _this.data = {
      src: '',
      photo: '../image/photo.jpg',
      imgUrls: ['../image/u=2491534892,1740729406&fm=27&gp=0.jpg', '../image/photo.jpg', '../image/u=3191467671,3952424653&fm=200&gp=0.jpg']
    }, _this.methods = {
      changeIndicatorDots: function changeIndicatorDots(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      changeAutoplay: function changeAutoplay(e) {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      intervalChange: function intervalChange(e) {
        this.setData({
          interval: e.detail.value
        });
      },
      durationChange: function durationChange(e) {
        this.setData({
          duration: e.detail.value
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/homePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJwaG90byIsImltZ1VybHMiLCJtZXRob2RzIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsImUiLCJzZXREYXRhIiwiaW5kaWNhdG9yRG90cyIsImNoYW5nZUF1dG9wbGF5IiwiYXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImludGVydmFsIiwiZGV0YWlsIiwidmFsdWUiLCJkdXJhdGlvbkNoYW5nZSIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLG9CQUZGO0FBR0xDLGVBQVMsQ0FBQyxpREFBRCxFQUNQLG9CQURPLEVBRVAsa0RBRk87QUFISixLLFFBUVBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWEMseUJBQWUsQ0FBQyxLQUFLUixJQUFMLENBQVVRO0FBRGYsU0FBYjtBQUdELE9BTE87QUFNUkMsc0JBQWdCLHdCQUFTSCxDQUFULEVBQVk7QUFDMUIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hHLG9CQUFVLENBQUMsS0FBS1YsSUFBTCxDQUFVVTtBQURWLFNBQWI7QUFHRCxPQVZPO0FBV1JDLHNCQUFnQix3QkFBU0wsQ0FBVCxFQUFZO0FBQzFCLGFBQUtDLE9BQUwsQ0FBYTtBQUNYSyxvQkFBVU4sRUFBRU8sTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQWZPO0FBZ0JSQyxzQkFBZ0Isd0JBQVNULENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWFMsb0JBQVVWLEVBQUVPLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0Q7QUFwQk8sSzs7Ozs7NkJBdUJELENBQUU7Ozs7RUFuQ3NCLGVBQUtHLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5omL5py65pGE5b2x5aSn6LWbJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBwaG90bzogJy4uL2ltYWdlL3Bob3RvLmpwZycsXG4gICAgaW1nVXJsczogWycuLi9pbWFnZS91PTI0OTE1MzQ4OTIsMTc0MDcyOTQwNiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvcGhvdG8uanBnJyxcbiAgICAgICcuLi9pbWFnZS91PTMxOTE0Njc2NzEsMzk1MjQyNDY1MyZmbT0yMDAmZ3A9MC5qcGcnXG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==