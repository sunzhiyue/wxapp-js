'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../util/content.js');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_wepy$page) {
  _inherits(Homepage, _wepy$page);

  function Homepage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Homepage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '手机摄影大赛'
    }, _this.data = {
      src: '',
      imgUrls: ['../image/u=2491534892,1740729406&fm=27&gp=0.jpg', '../image/photo.jpg', '../image/u=3191467671,3952424653&fm=200&gp=0.jpg'],
      search: '../image/search.png',
      praise: '../image/praise.png',
      production: [{ recName: '大海', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160803/1470208048682044_390x690.jpg', recNumber: '50' }, { recName: '猫', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160422/1461287166190361_390x690.jpeg', recNumber: '40' }, { recName: '大山', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160803/1470208050838529_390x690.jpg', recNumber: '30' }, { recName: '树', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160817/1471396487530350_390x690.jpg', recNumber: '30' }, { recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160506/1462497573316537_390x690.jpg', recNumber: '30' }, { recName: '花', recPhoto: 'http://isujin.com/wp-content/uploads/2017/09/wallhaven-33397.jpg', recNumber: '12' }],
      content: null
    }, _this.methods = {
      searchtap: function searchtap() {
        _wepy2.default.navigateTo({
          url: 'up'
        });
      },
      recTap: function recTap(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './show?recName=' + item.recName + '&recPhoto=' + item.recPhoto
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Homepage, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
    }
  }]);

  return Homepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Homepage , 'pages/homePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwic2VhcmNoIiwicHJhaXNlIiwicHJvZHVjdGlvbiIsInJlY05hbWUiLCJyZWNQaG90byIsInJlY051bWJlciIsImNvbnRlbnQiLCJtZXRob2RzIiwic2VhcmNodGFwIiwibmF2aWdhdGVUbyIsInVybCIsInJlY1RhcCIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxDQUNQLGlEQURPLEVBRVAsb0JBRk8sRUFHUCxrREFITyxDQUZKO0FBT0xDLGNBQVEscUJBUEg7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxrQkFBWSxDQUNWLEVBQUVDLFNBQVMsSUFBWCxFQUFpQkMsVUFBVSxzRkFBM0IsRUFBbUhDLFdBQVcsSUFBOUgsRUFEVSxFQUVWLEVBQUVGLFNBQVMsR0FBWCxFQUFnQkMsVUFBVSx1RkFBMUIsRUFBbUhDLFdBQVcsSUFBOUgsRUFGVSxFQUdWLEVBQUVGLFNBQVMsSUFBWCxFQUFpQkMsVUFBVSxzRkFBM0IsRUFBbUhDLFdBQVcsSUFBOUgsRUFIVSxFQUlWLEVBQUVGLFNBQVMsR0FBWCxFQUFnQkMsVUFBVSxzRkFBMUIsRUFBa0hDLFdBQVcsSUFBN0gsRUFKVSxFQUtWLEVBQUVGLFNBQVMsTUFBWCxFQUFtQkMsVUFBVSxzRkFBN0IsRUFBcUhDLFdBQVcsSUFBaEksRUFMVSxFQU1WLEVBQUVGLFNBQVMsR0FBWCxFQUFnQkMsVUFBVSxrRUFBMUIsRUFBOEZDLFdBQVcsSUFBekcsRUFOVSxDQVRQO0FBaUJMQyxlQUFTO0FBakJKLEssUUFtQlBDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxZQU5RLGtCQU1EQyxDQU5DLEVBTUU7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLUCxPQUFMLENBQWFNLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTdCLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWjtBQUNBLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLG1DQUF1QkksS0FBS1gsT0FBNUIsa0JBQWdEVyxLQUFLVjtBQUR2QyxTQUFoQjtBQUdEO0FBYk8sSzs7Ozs7NkJBZUQ7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQUEsV0FBS1AsT0FBTDtBQUNEOzs7O0VBekNtQyxlQUFLYSxJOztrQkFBdEJ6QixRIiwiZmlsZSI6ImhvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9jb250ZW50LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aJi+acuuaRhOW9seWkp+i1mydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaW1nVXJsczogW1xuICAgICAgJy4uL2ltYWdlL3U9MjQ5MTUzNDg5MiwxNzQwNzI5NDA2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICcuLi9pbWFnZS9waG90by5qcGcnLFxuICAgICAgJy4uL2ltYWdlL3U9MzE5MTQ2NzY3MSwzOTUyNDI0NjUzJmZtPTIwMCZncD0wLmpwZydcbiAgICBdLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL3NlYXJjaC5wbmcnLFxuICAgIHByYWlzZTogJy4uL2ltYWdlL3ByYWlzZS5wbmcnLFxuICAgIHByb2R1Y3Rpb246IFtcbiAgICAgIHsgcmVjTmFtZTogJ+Wkp+a1tycsIHJlY1Bob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgwMy8xNDcwMjA4MDQ4NjgyMDQ0XzM5MHg2OTAuanBnJywgcmVjTnVtYmVyOiAnNTAnIH0sXG4gICAgICB7IHJlY05hbWU6ICfnjKsnLCByZWNQaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA0MjIvMTQ2MTI4NzE2NjE5MDM2MV8zOTB4NjkwLmpwZWcnLCByZWNOdW1iZXI6ICc0MCcgfSxcbiAgICAgIHsgcmVjTmFtZTogJ+Wkp+WxsScsIHJlY1Bob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgwMy8xNDcwMjA4MDUwODM4NTI5XzM5MHg2OTAuanBnJywgcmVjTnVtYmVyOiAnMzAnIH0sXG4gICAgICB7IHJlY05hbWU6ICfmoJEnLCByZWNQaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTcvMTQ3MTM5NjQ4NzUzMDM1MF8zOTB4NjkwLmpwZycsIHJlY051bWJlcjogJzMwJyB9LFxuICAgICAgeyByZWNOYW1lOiAnaGFoYScsIHJlY1Bob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDUwNi8xNDYyNDk3NTczMzE2NTM3XzM5MHg2OTAuanBnJywgcmVjTnVtYmVyOiAnMzAnIH0sXG4gICAgICB7IHJlY05hbWU6ICfoirEnLCByZWNQaG90bzogJ2h0dHA6Ly9pc3VqaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA5L3dhbGxoYXZlbi0zMzM5Ny5qcGcnLCByZWNOdW1iZXI6ICcxMicgfVxuICAgIF0sXG4gICAgY29udGVudDogbnVsbFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNodGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAndXAnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVjVGFwKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vc2hvdz9yZWNOYW1lPSR7aXRlbS5yZWNOYW1lfSZyZWNQaG90bz0ke2l0ZW0ucmVjUGhvdG99YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgfVxufVxuIl19