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

// import content from '../util/content.js'
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
      production: [{ recName: '大海', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160803/1470208048682044_390x690.jpg', recNumber: '50' }, { recName: '猫', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160422/1461287166190361_390x690.jpeg', recNumber: '40' }, { recName: '大山', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160803/1470208050838529_390x690.jpg', recNumber: '30' }, { recName: '树', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160817/1471396487530350_390x690.jpg', recNumber: '30' }, { recName: 'haha', recPhoto: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160506/1462497573316537_390x690.jpg', recNumber: '30' }, { recName: '花', recPhoto: 'http://isujin.com/wp-content/uploads/2017/09/wallhaven-33397.jpg', recNumber: '12' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Homepage, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Homepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Homepage , 'pages/homePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1ldGhvZHMiLCJzZWFyY2h0YXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZGF0YSIsInNyYyIsInBob3RvIiwiaW1nVXJscyIsInNlYXJjaCIsInByYWlzZSIsInByb2R1Y3Rpb24iLCJyZWNOYW1lIiwicmVjUGhvdG8iLCJyZWNOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLLFFBT1ZDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTyxvQkFGRjtBQUdMQyxlQUFTLENBQUMsaURBQUQsRUFDUCxvQkFETyxFQUVQLGtEQUZPLENBSEo7QUFPTEMsY0FBUSxxQkFQSDtBQVFMQyxjQUFRLHFCQVJIO0FBU0xDLGtCQUFZLENBQ1YsRUFBRUMsU0FBUyxJQUFYLEVBQWlCQyxVQUFVLHNGQUEzQixFQUFtSEMsV0FBVyxJQUE5SCxFQURVLEVBRVYsRUFBRUYsU0FBUyxHQUFYLEVBQWdCQyxVQUFVLHVGQUExQixFQUFtSEMsV0FBVyxJQUE5SCxFQUZVLEVBR1YsRUFBRUYsU0FBUyxJQUFYLEVBQWlCQyxVQUFVLHNGQUEzQixFQUFtSEMsV0FBVyxJQUE5SCxFQUhVLEVBSVYsRUFBRUYsU0FBUyxHQUFYLEVBQWdCQyxVQUFVLHNGQUExQixFQUFrSEMsV0FBVyxJQUE3SCxFQUpVLEVBS1YsRUFBRUYsU0FBUyxNQUFYLEVBQW1CQyxVQUFVLHNGQUE3QixFQUFxSEMsV0FBVyxJQUFoSSxFQUxVLEVBTVYsRUFBRUYsU0FBUyxHQUFYLEVBQWdCQyxVQUFVLGtFQUExQixFQUE4RkMsV0FBVyxJQUF6RyxFQU5VO0FBVFAsSzs7Ozs7NkJBa0JFLENBQUc7Ozs7RUE3QndCLGVBQUtDLEk7O2tCQUF0QmpCLFEiLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgY29udGVudCBmcm9tICcuLi91dGlsL2NvbnRlbnQuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lcGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5omL5py65pGE5b2x5aSn6LWbJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNodGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAndXAnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgcGhvdG86ICcuLi9pbWFnZS9waG90by5qcGcnLFxuICAgIGltZ1VybHM6IFsnLi4vaW1hZ2UvdT0yNDkxNTM0ODkyLDE3NDA3Mjk0MDYmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL3Bob3RvLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvdT0zMTkxNDY3NjcxLDM5NTI0MjQ2NTMmZm09MjAwJmdwPTAuanBnJ1xuICAgIF0sXG4gICAgc2VhcmNoOiAnLi4vaW1hZ2Uvc2VhcmNoLnBuZycsXG4gICAgcHJhaXNlOiAnLi4vaW1hZ2UvcHJhaXNlLnBuZycsXG4gICAgcHJvZHVjdGlvbjogW1xuICAgICAgeyByZWNOYW1lOiAn5aSn5rW3JywgcmVjUGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODAzLzE0NzAyMDgwNDg2ODIwNDRfMzkweDY5MC5qcGcnLCByZWNOdW1iZXI6ICc1MCcgfSxcbiAgICAgIHsgcmVjTmFtZTogJ+eMqycsIHJlY1Bob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDQyMi8xNDYxMjg3MTY2MTkwMzYxXzM5MHg2OTAuanBlZycsIHJlY051bWJlcjogJzQwJyB9LFxuICAgICAgeyByZWNOYW1lOiAn5aSn5bGxJywgcmVjUGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODAzLzE0NzAyMDgwNTA4Mzg1MjlfMzkweDY5MC5qcGcnLCByZWNOdW1iZXI6ICczMCcgfSxcbiAgICAgIHsgcmVjTmFtZTogJ+agkScsIHJlY1Bob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxNy8xNDcxMzk2NDg3NTMwMzUwXzM5MHg2OTAuanBnJywgcmVjTnVtYmVyOiAnMzAnIH0sXG4gICAgICB7IHJlY05hbWU6ICdoYWhhJywgcmVjUGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNTA2LzE0NjI0OTc1NzMzMTY1MzdfMzkweDY5MC5qcGcnLCByZWNOdW1iZXI6ICczMCcgfSxcbiAgICAgIHsgcmVjTmFtZTogJ+iKsScsIHJlY1Bob3RvOiAnaHR0cDovL2lzdWppbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvd2FsbGhhdmVuLTMzMzk3LmpwZycsIHJlY051bWJlcjogJzEyJyB9XG4gICAgXVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19