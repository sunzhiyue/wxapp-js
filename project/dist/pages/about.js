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

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于'
    }, _this.data = {
      src: '',
      portrait: '../image/camera.png',
      animationData: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'onShow',
    value: function onShow() {
      var animation = _wepy2.default.createAnimation({
        duration: 2000,
        timingFunction: 'ease'
      });

      this.animation = animation;

      animation.scale(3, 2).rotate(10).step();
      this.setData({
        animationData: animation.export()
      });

      setTimeout(function () {
        animation.translate(30).step();
        this.setData({
          animationData: animation.export()
        });
      }.bind(this), 1000);
    }
    // rotateAndScale() {
    //   // 旋转同时放大
    //   this.animation.rotate(45).scale(2, 2).step()
    //   this.setData({
    //     animationData: this.animation.export()
    //   })
    // }

  }, {
    key: 'rotateAndScaleThenTranslate',
    value: function rotateAndScaleThenTranslate() {
      // 先旋转同时放大，然后平移
      this.animation.rotate(45).scale(2, 2).step();
      this.animation.translate(100, 100).step({ duration: 1000 });
      this.setData({
        animationData: this.animation.export()
      });
    }
  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJwb3J0cmFpdCIsImFuaW1hdGlvbkRhdGEiLCJhbmltYXRpb24iLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwic2NhbGUiLCJyb3RhdGUiLCJzdGVwIiwic2V0RGF0YSIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJ0cmFuc2xhdGUiLCJiaW5kIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxxQkFGTDtBQUdMQyxxQkFBZTtBQUhWLEs7Ozs7OzZCQUtFO0FBQ1AsVUFBSUMsWUFBWSxlQUFLQyxlQUFMLENBQXFCO0FBQ25DQyxrQkFBVSxJQUR5QjtBQUVuQ0Msd0JBQWdCO0FBRm1CLE9BQXJCLENBQWhCOztBQUtBLFdBQUtILFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBQSxnQkFBVUksS0FBVixDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkIsRUFBN0IsRUFBaUNDLElBQWpDO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1hSLHVCQUFlQyxVQUFVUSxNQUFWO0FBREosT0FBYjs7QUFJQUMsaUJBQVcsWUFBVztBQUNwQlQsa0JBQVVVLFNBQVYsQ0FBb0IsRUFBcEIsRUFBd0JKLElBQXhCO0FBQ0EsYUFBS0MsT0FBTCxDQUFhO0FBQ1hSLHlCQUFlQyxVQUFVUSxNQUFWO0FBREosU0FBYjtBQUdELE9BTFUsQ0FLVEcsSUFMUyxDQUtKLElBTEksQ0FBWCxFQUtjLElBTGQ7QUFNRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2tEQUM4QjtBQUM1QjtBQUNBLFdBQUtYLFNBQUwsQ0FBZUssTUFBZixDQUFzQixFQUF0QixFQUEwQkQsS0FBMUIsQ0FBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0NFLElBQXRDO0FBQ0EsV0FBS04sU0FBTCxDQUFlVSxTQUFmLENBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DSixJQUFuQyxDQUF3QyxFQUFFSixVQUFVLElBQVosRUFBeEM7QUFDQSxXQUFLSyxPQUFMLENBQWE7QUFDWFIsdUJBQWUsS0FBS0MsU0FBTCxDQUFlUSxNQUFmO0FBREosT0FBYjtBQUdEOzs7O0VBM0NnQyxlQUFLSSxJOztrQkFBbkJuQixLIiwiZmlsZSI6ImFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFs+S6jidcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHBvcnRyYWl0OiAnLi4vaW1hZ2UvY2FtZXJhLnBuZycsXG4gICAgYW5pbWF0aW9uRGF0YToge31cbiAgfTtcbiAgb25TaG93KCkge1xuICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cblxuICAgIGFuaW1hdGlvbi5zY2FsZSgzLCAyKS5yb3RhdGUoMTApLnN0ZXAoKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICB9KVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGUoMzApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKSwgMTAwMClcbiAgfVxuICAvLyByb3RhdGVBbmRTY2FsZSgpIHtcbiAgLy8gICAvLyDml4vovazlkIzml7bmlL7lpKdcbiAgLy8gICB0aGlzLmFuaW1hdGlvbi5yb3RhdGUoNDUpLnNjYWxlKDIsIDIpLnN0ZXAoKVxuICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gIC8vICAgICBhbmltYXRpb25EYXRhOiB0aGlzLmFuaW1hdGlvbi5leHBvcnQoKVxuICAvLyAgIH0pXG4gIC8vIH1cbiAgcm90YXRlQW5kU2NhbGVUaGVuVHJhbnNsYXRlKCkge1xuICAgIC8vIOWFiOaXi+i9rOWQjOaXtuaUvuWkp++8jOeEtuWQjuW5s+enu1xuICAgIHRoaXMuYW5pbWF0aW9uLnJvdGF0ZSg0NSkuc2NhbGUoMiwgMikuc3RlcCgpXG4gICAgdGhpcy5hbmltYXRpb24udHJhbnNsYXRlKDEwMCwgMTAwKS5zdGVwKHsgZHVyYXRpb246IDEwMDAgfSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb24uZXhwb3J0KClcbiAgICB9KVxuICB9XG59XG4iXX0=