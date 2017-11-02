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

var Show = function (_wepy$page) {
  _inherits(Show, _wepy$page);

  function Show() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Show);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Show.__proto__ || Object.getPrototypeOf(Show)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '人气推荐'
    }, _this.data = {
      src: '',
      recName: '',
      recPhoto: '',
      describe: '',
      recNumber: 0,
      praise: '../image/praise.png'
    }, _this.methods = {
      praise: function praise() {
        var self = this;
        self.elect = !self.elect;
        if (self.elect) {
          self.recNumber++;
        } else {
          self.recNumber--;
        }
      },
      viewImg: function viewImg(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var arr = [];
        for (var i = 0; i < self.recPhoto.length; i++) {
          arr.push(self.recPhoto[i]);
        }
        console.log(self.recPhoto, 'src');
        _wepy2.default.previewImage({
          urls: arr,
          current: '' + self.recPhoto[index]
        });
      },
      minusCount: function minusCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var photo = self.photo;
        var recNumber = photo[index].recNumber;
        if (recNumber <= 1) {
          return false;
        }
        recNumber = recNumber - 1;
        photo[index].recNumber = recNumber;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/photo.upload',
          method: 'POST',
          data: {
            id: self.photo[index].id,
            recNumber: photo[index].recNumber
          }
        });
        self.setData({
          photo: photo
        });
        self.methods.getTotalPrice(self);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Show, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.recName = data.recName;
      self.recPhoto = data.recPhoto.split(',');
      self.describe = data.describe;
      self.recNumber = data.recNumber;
      console.log(self.recPhoto);
    }
  }]);

  return Show;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/show'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicmVjTmFtZSIsInJlY1Bob3RvIiwiZGVzY3JpYmUiLCJyZWNOdW1iZXIiLCJwcmFpc2UiLCJtZXRob2RzIiwic2VsZiIsImVsZWN0Iiwidmlld0ltZyIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXJyIiwiaSIsImxlbmd0aCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicHJldmlld0ltYWdlIiwidXJscyIsImN1cnJlbnQiLCJtaW51c0NvdW50IiwicGhvdG8iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaWQiLCJzZXREYXRhIiwiZ2V0VG90YWxQcmljZSIsInNwbGl0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxlQUFTLEVBRko7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxnQkFBVSxFQUpMO0FBS0xDLGlCQUFXLENBTE47QUFNTEMsY0FBUTtBQU5ILEssUUFRUEMsTyxHQUFVO0FBQ1JELFlBRFEsb0JBQ0M7QUFDUCxZQUFJRSxPQUFPLElBQVg7QUFDQUEsYUFBS0MsS0FBTCxHQUFhLENBQUNELEtBQUtDLEtBQW5CO0FBQ0EsWUFBSUQsS0FBS0MsS0FBVCxFQUFnQjtBQUNkRCxlQUFLSCxTQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0xHLGVBQUtILFNBQUw7QUFDRDtBQUNGLE9BVE87QUFVUkssYUFWUSxtQkFVQUMsQ0FWQSxFQVVHO0FBQ1QsWUFBSUgsT0FBTyxJQUFYO0FBQ0EsWUFBTUksUUFBUUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSUcsTUFBTSxFQUFWO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLEtBQUtMLFFBQUwsQ0FBY2MsTUFBbEMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDRCxjQUFJRyxJQUFKLENBQVNWLEtBQUtMLFFBQUwsQ0FBY2EsQ0FBZCxDQUFUO0FBQ0Q7QUFDREcsZ0JBQVFDLEdBQVIsQ0FBWVosS0FBS0wsUUFBakIsRUFBMkIsS0FBM0I7QUFDQSx1QkFBS2tCLFlBQUwsQ0FBa0I7QUFDaEJDLGdCQUFNUCxHQURVO0FBRWhCUSx3QkFBWWYsS0FBS0wsUUFBTCxDQUFjUyxLQUFkO0FBRkksU0FBbEI7QUFJRCxPQXRCTztBQXVCUlksZ0JBdkJRLHNCQXVCR2IsQ0F2QkgsRUF1Qk07QUFDWixZQUFJSCxPQUFPLElBQVg7QUFDQSxZQUFNSSxRQUFRRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJYSxRQUFRakIsS0FBS2lCLEtBQWpCO0FBQ0EsWUFBSXBCLFlBQVlvQixNQUFNYixLQUFOLEVBQWFQLFNBQTdCO0FBQ0EsWUFBSUEsYUFBYSxDQUFqQixFQUFvQjtBQUNsQixpQkFBTyxLQUFQO0FBQ0Q7QUFDREEsb0JBQVlBLFlBQVksQ0FBeEI7QUFDQW9CLGNBQU1iLEtBQU4sRUFBYVAsU0FBYixHQUF5QkEsU0FBekI7QUFDQSx1QkFBS3FCLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLG9DQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWDVCLGdCQUFNO0FBQ0o2QixnQkFBSXJCLEtBQUtpQixLQUFMLENBQVdiLEtBQVgsRUFBa0JpQixFQURsQjtBQUVKeEIsdUJBQVdvQixNQUFNYixLQUFOLEVBQWFQO0FBRnBCO0FBSEssU0FBYjtBQVFBRyxhQUFLc0IsT0FBTCxDQUFhO0FBQ1hMLGlCQUFPQTtBQURJLFNBQWI7QUFHQWpCLGFBQUtELE9BQUwsQ0FBYXdCLGFBQWIsQ0FBMkJ2QixJQUEzQjtBQUNEO0FBN0NPLEs7Ozs7OzJCQStDSFIsSSxFQUFNO0FBQ1gsVUFBSVEsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLE9BQUwsR0FBZUYsS0FBS0UsT0FBcEI7QUFDQU0sV0FBS0wsUUFBTCxHQUFnQkgsS0FBS0csUUFBTCxDQUFjNkIsS0FBZCxDQUFvQixHQUFwQixDQUFoQjtBQUNBeEIsV0FBS0osUUFBTCxHQUFnQkosS0FBS0ksUUFBckI7QUFDQUksV0FBS0gsU0FBTCxHQUFpQkwsS0FBS0ssU0FBdEI7QUFDQWMsY0FBUUMsR0FBUixDQUFZWixLQUFLTCxRQUFqQjtBQUNEOzs7O0VBbEUrQixlQUFLOEIsSTs7a0JBQWxCcEMsSSIsImZpbGUiOiJzaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lq65rCU5o6o6I2QJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICByZWNOYW1lOiAnJyxcbiAgICByZWNQaG90bzogJycsXG4gICAgZGVzY3JpYmU6ICcnLFxuICAgIHJlY051bWJlcjogMCxcbiAgICBwcmFpc2U6ICcuLi9pbWFnZS9wcmFpc2UucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcHJhaXNlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmVsZWN0ID0gIXNlbGYuZWxlY3RcbiAgICAgIGlmIChzZWxmLmVsZWN0KSB7XG4gICAgICAgIHNlbGYucmVjTnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucmVjTnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdJbWcoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgYXJyID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5yZWNQaG90by5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnIucHVzaChzZWxmLnJlY1Bob3RvW2ldKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coc2VsZi5yZWNQaG90bywgJ3NyYycpXG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIHVybHM6IGFycixcbiAgICAgICAgY3VycmVudDogYCR7c2VsZi5yZWNQaG90b1tpbmRleF19YFxuICAgICAgfSlcbiAgICB9LFxuICAgIG1pbnVzQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgcGhvdG8gPSBzZWxmLnBob3RvXG4gICAgICBsZXQgcmVjTnVtYmVyID0gcGhvdG9baW5kZXhdLnJlY051bWJlclxuICAgICAgaWYgKHJlY051bWJlciA8PSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmVjTnVtYmVyID0gcmVjTnVtYmVyIC0gMVxuICAgICAgcGhvdG9baW5kZXhdLnJlY051bWJlciA9IHJlY051bWJlclxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3Bob3RvLnVwbG9hZCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYucGhvdG9baW5kZXhdLmlkLFxuICAgICAgICAgIHJlY051bWJlcjogcGhvdG9baW5kZXhdLnJlY051bWJlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgcGhvdG86IHBob3RvXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnJlY05hbWUgPSBkYXRhLnJlY05hbWVcbiAgICBzZWxmLnJlY1Bob3RvID0gZGF0YS5yZWNQaG90by5zcGxpdCgnLCcpXG4gICAgc2VsZi5kZXNjcmliZSA9IGRhdGEuZGVzY3JpYmVcbiAgICBzZWxmLnJlY051bWJlciA9IGRhdGEucmVjTnVtYmVyXG4gICAgY29uc29sZS5sb2coc2VsZi5yZWNQaG90bylcbiAgfVxufVxuIl19