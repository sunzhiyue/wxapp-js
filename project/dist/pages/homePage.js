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
    }, _this.methods = {
      searchtap: function searchtap() {
        _wepy2.default.navigateTo({
          url: 'up'
        });
      }
    }, _this.data = {
      src: '',
      photo: '../image/photo.jpg',
      imgUrls: ['../image/u=2491534892,1740729406&fm=27&gp=0.jpg', '../image/photo.jpg', '../image/u=3191467671,3952424653&fm=200&gp=0.jpg'],
      search: '../image/search.png',
      praise: '../image/praise.png',
      production: [{ recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160506/1462497573316537_390x690.jpg' }, { recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160422/1461287166190361_390x690.jpeg' }, { recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160506/1462497573316537_390x690.jpg', recNumber: '30' }, { recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160506/1462497573316537_390x690.jpg', recNumber: '30' }, { recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160506/1462497573316537_390x690.jpg', recNumber: '30' }, { recName: '花', recPhoto: 'http://isujin.com/wp-content/uploads/2017/09/wallhaven-33397.jpg', recNumber: '12' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/homePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1ldGhvZHMiLCJzZWFyY2h0YXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZGF0YSIsInNyYyIsInBob3RvIiwiaW1nVXJscyIsInNlYXJjaCIsInByYWlzZSIsInByb2R1Y3Rpb24iLCJyZWNOYW1lIiwicmVjUGhvdG8iLCJyZWNOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSyxRQU9WQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGFBQU8sb0JBRkY7QUFHTEMsZUFBUyxDQUFDLGlEQUFELEVBQ1Asb0JBRE8sRUFFUCxrREFGTyxDQUhKO0FBT0xDLGNBQVEscUJBUEg7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxrQkFBWSxDQUNWLEVBQUVDLFNBQVMsTUFBWCxFQUFtQkMsVUFBVSxzRkFBN0IsRUFEVSxFQUVWLEVBQUVELFNBQVMsTUFBWCxFQUFtQkMsVUFBVSx1RkFBN0IsRUFGVSxFQUdWLEVBQUVELFNBQVMsTUFBWCxFQUFtQkMsVUFBVSxzRkFBN0IsRUFBcUhDLFdBQVcsSUFBaEksRUFIVSxFQUlWLEVBQUVGLFNBQVMsTUFBWCxFQUFtQkMsVUFBVSxzRkFBN0IsRUFBcUhDLFdBQVcsSUFBaEksRUFKVSxFQUtWLEVBQUVGLFNBQVMsTUFBWCxFQUFtQkMsVUFBVSxzRkFBN0IsRUFBcUhDLFdBQVcsSUFBaEksRUFMVSxFQU1WLEVBQUVGLFNBQVMsR0FBWCxFQUFnQkMsVUFBVSxrRUFBMUIsRUFBOEZDLFdBQVcsSUFBekcsRUFOVTtBQVRQLEs7Ozs7OzZCQWtCRSxDQUFHOzs7O0VBN0JxQixlQUFLQyxJOztrQkFBbkJqQixLIiwiZmlsZSI6ImhvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aJi+acuuaRhOW9seWkp+i1mydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlYXJjaHRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3VwJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHBob3RvOiAnLi4vaW1hZ2UvcGhvdG8uanBnJyxcbiAgICBpbWdVcmxzOiBbJy4uL2ltYWdlL3U9MjQ5MTUzNDg5MiwxNzQwNzI5NDA2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICcuLi9pbWFnZS9waG90by5qcGcnLFxuICAgICAgJy4uL2ltYWdlL3U9MzE5MTQ2NzY3MSwzOTUyNDI0NjUzJmZtPTIwMCZncD0wLmpwZydcbiAgICBdLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL3NlYXJjaC5wbmcnLFxuICAgIHByYWlzZTogJy4uL2ltYWdlL3ByYWlzZS5wbmcnLFxuICAgIHByb2R1Y3Rpb246IFtcbiAgICAgIHsgcmVjTmFtZTogJ2hhaGEnLCByZWNQaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA1MDYvMTQ2MjQ5NzU3MzMxNjUzN18zOTB4NjkwLmpwZycgfSxcbiAgICAgIHsgcmVjTmFtZTogJ2hhaGEnLCByZWNQaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA0MjIvMTQ2MTI4NzE2NjE5MDM2MV8zOTB4NjkwLmpwZWcnIH0sXG4gICAgICB7IHJlY05hbWU6ICdoYWhhJywgcmVjUGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNTA2LzE0NjI0OTc1NzMzMTY1MzdfMzkweDY5MC5qcGcnLCByZWNOdW1iZXI6ICczMCcgfSxcbiAgICAgIHsgcmVjTmFtZTogJ2hhaGEnLCByZWNQaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA1MDYvMTQ2MjQ5NzU3MzMxNjUzN18zOTB4NjkwLmpwZycsIHJlY051bWJlcjogJzMwJyB9LFxuICAgICAgeyByZWNOYW1lOiAnaGFoYScsIHJlY1Bob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDUwNi8xNDYyNDk3NTczMzE2NTM3XzM5MHg2OTAuanBnJywgcmVjTnVtYmVyOiAnMzAnIH0sXG4gICAgICB7IHJlY05hbWU6ICfoirEnLCByZWNQaG90bzogJ2h0dHA6Ly9pc3VqaW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA5L3dhbGxoYXZlbi0zMzM5Ny5qcGcnLCByZWNOdW1iZXI6ICcxMicgfVxuICAgIF1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==