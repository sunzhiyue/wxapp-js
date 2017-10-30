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
        duration: 20002,
        timingFunction: 'linear',
        transformOrigin: '50% 50%'
      });

      this.animation = animation;

      animation.rotate(360).step();
      this.setData({
        animationData: animation.export()
      });

      setTimeout(function () {
        animation.translate(0).step();
        this.setData({
          animationData: animation.export()
        });
      }.bind(this), 1000);
    }
    // onshow() {
    //   // 旋转同时放大
    //   this.animation.rotate(90).scale(2, 2).step()
    //   this.setData({
    //     animationData: this.animation.export()
    //   })
    // }
    // rotateAndScaleThenTranslate() {
    //   // 先旋转同时放大，然后平移
    //   this.animation.rotate(450).scale(2, 2).step()
    //   this.animation.translate(1000, 100).step({ duration: 1000 })
    //   this.setData({
    //     animationData: this.animation.export()
    //   })
    // }

  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJwb3J0cmFpdCIsImFuaW1hdGlvbkRhdGEiLCJhbmltYXRpb24iLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwicm90YXRlIiwic3RlcCIsInNldERhdGEiLCJleHBvcnQiLCJzZXRUaW1lb3V0IiwidHJhbnNsYXRlIiwiYmluZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZ0JBQVUscUJBRkw7QUFHTEMscUJBQWU7QUFIVixLOzs7Ozs2QkFLRTtBQUNQLFVBQUlDLFlBQVksZUFBS0MsZUFBTCxDQUFxQjtBQUNuQ0Msa0JBQVUsS0FEeUI7QUFFbkNDLHdCQUFnQixRQUZtQjtBQUduQ0MseUJBQWlCO0FBSGtCLE9BQXJCLENBQWhCOztBQU1BLFdBQUtKLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBQSxnQkFBVUssTUFBVixDQUFpQixHQUFqQixFQUFzQkMsSUFBdEI7QUFDQSxXQUFLQyxPQUFMLENBQWE7QUFDWFIsdUJBQWVDLFVBQVVRLE1BQVY7QUFESixPQUFiOztBQUlBQyxpQkFBVyxZQUFXO0FBQ3BCVCxrQkFBVVUsU0FBVixDQUFvQixDQUFwQixFQUF1QkosSUFBdkI7QUFDQSxhQUFLQyxPQUFMLENBQWE7QUFDWFIseUJBQWVDLFVBQVVRLE1BQVY7QUFESixTQUFiO0FBR0QsT0FMVSxDQUtURyxJQUxTLENBS0osSUFMSSxDQUFYLEVBS2MsSUFMZDtBQU1EO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQTVDaUMsZUFBS0MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbPkuo4nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBwb3J0cmFpdDogJy4uL2ltYWdlL2NhbWVyYS5wbmcnLFxuICAgIGFuaW1hdGlvbkRhdGE6IHt9XG4gIH07XG4gIG9uU2hvdygpIHtcbiAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgZHVyYXRpb246IDIwMDAyLFxuICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSdcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cblxuICAgIGFuaW1hdGlvbi5yb3RhdGUoMzYwKS5zdGVwKClcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlKDApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKSwgMTAwMClcbiAgfVxuICAvLyBvbnNob3coKSB7XG4gIC8vICAgLy8g5peL6L2s5ZCM5pe25pS+5aSnXG4gIC8vICAgdGhpcy5hbmltYXRpb24ucm90YXRlKDkwKS5zY2FsZSgyLCAyKS5zdGVwKClcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb24uZXhwb3J0KClcbiAgLy8gICB9KVxuICAvLyB9XG4gIC8vIHJvdGF0ZUFuZFNjYWxlVGhlblRyYW5zbGF0ZSgpIHtcbiAgLy8gICAvLyDlhYjml4vovazlkIzml7bmlL7lpKfvvIznhLblkI7lubPnp7tcbiAgLy8gICB0aGlzLmFuaW1hdGlvbi5yb3RhdGUoNDUwKS5zY2FsZSgyLCAyKS5zdGVwKClcbiAgLy8gICB0aGlzLmFuaW1hdGlvbi50cmFuc2xhdGUoMTAwMCwgMTAwKS5zdGVwKHsgZHVyYXRpb246IDEwMDAgfSlcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb24uZXhwb3J0KClcbiAgLy8gICB9KVxuICAvLyB9XG59XG4iXX0=