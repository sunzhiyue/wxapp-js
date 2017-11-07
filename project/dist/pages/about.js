'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
    }, _this.methods = {
      show: function show() {
        _wepy2.default.chooseAddress({
          success: function success(res) {
            console.log(res.userName);
            console.log(res.postalCode);
            console.log(res.provinceName);
            console.log(res.cityName);
            console.log(res.countyName);
            console.log(res.detailInfo);
            console.log(res.nationalCode);
            console.log(res.telNumber);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // onShow() {
  //   var animation = wepy.createAnimation({
  //     duration: 20002,
  //     timingFunction: 'linear',
  //     transformOrigin: '50% 50%'
  //   })

  //   this.animation = animation

  //   animation.rotate(360).step()
  //   this.setData({
  //     animationData: animation.export()
  //   })

  //   setTimeout(function() {
  //     animation.translate(0).step()
  //     this.setData({
  //       animationData: animation.export()
  //     })
  //   }.bind(this), 1000)
  // }
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


  return About;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJwb3J0cmFpdCIsImFuaW1hdGlvbkRhdGEiLCJtZXRob2RzIiwic2hvdyIsImNob29zZUFkZHJlc3MiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZXJOYW1lIiwicG9zdGFsQ29kZSIsInByb3ZpbmNlTmFtZSIsImNpdHlOYW1lIiwiY291bnR5TmFtZSIsImRldGFpbEluZm8iLCJuYXRpb25hbENvZGUiLCJ0ZWxOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxxQkFGTDtBQUdMQyxxQkFBZTtBQUhWLEssUUF5Q1BDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNEO0FBQ0wsdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRQyxHQUFSLENBQVlGLElBQUlHLFFBQWhCO0FBQ0FGLG9CQUFRQyxHQUFSLENBQVlGLElBQUlJLFVBQWhCO0FBQ0FILG9CQUFRQyxHQUFSLENBQVlGLElBQUlLLFlBQWhCO0FBQ0FKLG9CQUFRQyxHQUFSLENBQVlGLElBQUlNLFFBQWhCO0FBQ0FMLG9CQUFRQyxHQUFSLENBQVlGLElBQUlPLFVBQWhCO0FBQ0FOLG9CQUFRQyxHQUFSLENBQVlGLElBQUlRLFVBQWhCO0FBQ0FQLG9CQUFRQyxHQUFSLENBQVlGLElBQUlTLFlBQWhCO0FBQ0FSLG9CQUFRQyxHQUFSLENBQVlGLElBQUlVLFNBQWhCO0FBQ0Q7QUFWZ0IsU0FBbkI7QUFZRDtBQWRPLEs7O0FBcENWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztFQTVDaUMsZUFBS0MsSTs7a0JBQW5CdEIsSyIsImZpbGUiOiJhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbPkuo4nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBwb3J0cmFpdDogJy4uL2ltYWdlL2NhbWVyYS5wbmcnLFxuICAgIGFuaW1hdGlvbkRhdGE6IHt9XG4gIH07XG4gIC8vIG9uU2hvdygpIHtcbiAgLy8gICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAvLyAgICAgZHVyYXRpb246IDIwMDAyLFxuICAvLyAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAvLyAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSdcbiAgLy8gICB9KVxuXG4gIC8vICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cblxuICAvLyAgIGFuaW1hdGlvbi5yb3RhdGUoMzYwKS5zdGVwKClcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gIC8vICAgfSlcblxuICAvLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIC8vICAgICBhbmltYXRpb24udHJhbnNsYXRlKDApLnN0ZXAoKVxuICAvLyAgICAgdGhpcy5zZXREYXRhKHtcbiAgLy8gICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gIC8vICAgICB9KVxuICAvLyAgIH0uYmluZCh0aGlzKSwgMTAwMClcbiAgLy8gfVxuICAvLyBvbnNob3coKSB7XG4gIC8vICAgLy8g5peL6L2s5ZCM5pe25pS+5aSnXG4gIC8vICAgdGhpcy5hbmltYXRpb24ucm90YXRlKDkwKS5zY2FsZSgyLCAyKS5zdGVwKClcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb24uZXhwb3J0KClcbiAgLy8gICB9KVxuICAvLyB9XG4gIC8vIHJvdGF0ZUFuZFNjYWxlVGhlblRyYW5zbGF0ZSgpIHtcbiAgLy8gICAvLyDlhYjml4vovazlkIzml7bmlL7lpKfvvIznhLblkI7lubPnp7tcbiAgLy8gICB0aGlzLmFuaW1hdGlvbi5yb3RhdGUoNDUwKS5zY2FsZSgyLCAyKS5zdGVwKClcbiAgLy8gICB0aGlzLmFuaW1hdGlvbi50cmFuc2xhdGUoMTAwMCwgMTAwKS5zdGVwKHsgZHVyYXRpb246IDEwMDAgfSlcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb24uZXhwb3J0KClcbiAgLy8gICB9KVxuICAvLyB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvdygpIHtcbiAgICAgIHdlcHkuY2hvb3NlQWRkcmVzcyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudXNlck5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnBvc3RhbENvZGUpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnByb3ZpbmNlTmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY2l0eU5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvdW50eU5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRldGFpbEluZm8pXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLm5hdGlvbmFsQ29kZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGVsTnVtYmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19