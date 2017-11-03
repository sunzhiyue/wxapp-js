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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicmVjTmFtZSIsInJlY1Bob3RvIiwiZGVzY3JpYmUiLCJyZWNOdW1iZXIiLCJwcmFpc2UiLCJtZXRob2RzIiwic2VsZiIsImVsZWN0Iiwidmlld0ltZyIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXJyIiwiaSIsImxlbmd0aCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicHJldmlld0ltYWdlIiwidXJscyIsImN1cnJlbnQiLCJzcGxpdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsZ0JBQVUsRUFKTDtBQUtMQyxpQkFBVyxDQUxOO0FBTUxDLGNBQVE7QUFOSCxLLFFBUVBDLE8sR0FBVTtBQUNSRCxZQURRLG9CQUNDO0FBQ1AsWUFBSUUsT0FBTyxJQUFYO0FBQ0FBLGFBQUtDLEtBQUwsR0FBYSxDQUFDRCxLQUFLQyxLQUFuQjtBQUNBLFlBQUlELEtBQUtDLEtBQVQsRUFBZ0I7QUFDZEQsZUFBS0gsU0FBTDtBQUNELFNBRkQsTUFFTztBQUNMRyxlQUFLSCxTQUFMO0FBQ0Q7QUFDRixPQVRPO0FBVVJLLGFBVlEsbUJBVUFDLENBVkEsRUFVRztBQUNULFlBQUlILE9BQU8sSUFBWDtBQUNBLFlBQU1JLFFBQVFELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQUlHLE1BQU0sRUFBVjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUixLQUFLTCxRQUFMLENBQWNjLE1BQWxDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3Q0QsY0FBSUcsSUFBSixDQUFTVixLQUFLTCxRQUFMLENBQWNhLENBQWQsQ0FBVDtBQUNEO0FBQ0RHLGdCQUFRQyxHQUFSLENBQVlaLEtBQUtMLFFBQWpCLEVBQTJCLEtBQTNCO0FBQ0EsdUJBQUtrQixZQUFMLENBQWtCO0FBQ2hCQyxnQkFBTVAsR0FEVTtBQUVoQlEsd0JBQVlmLEtBQUtMLFFBQUwsQ0FBY1MsS0FBZDtBQUZJLFNBQWxCO0FBSUQ7QUF0Qk8sSzs7Ozs7MkJBd0JIWixJLEVBQU07QUFDWCxVQUFJUSxPQUFPLElBQVg7QUFDQUEsV0FBS04sT0FBTCxHQUFlRixLQUFLRSxPQUFwQjtBQUNBTSxXQUFLTCxRQUFMLEdBQWdCSCxLQUFLRyxRQUFMLENBQWNxQixLQUFkLENBQW9CLEdBQXBCLENBQWhCO0FBQ0FoQixXQUFLSixRQUFMLEdBQWdCSixLQUFLSSxRQUFyQjtBQUNBSSxXQUFLSCxTQUFMLEdBQWlCTCxLQUFLSyxTQUF0QjtBQUNBYyxjQUFRQyxHQUFSLENBQVlaLEtBQUtMLFFBQWpCO0FBQ0Q7Ozs7RUEzQytCLGVBQUtzQixJOztrQkFBbEI1QixJIiwiZmlsZSI6InNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkurrmsJTmjqjojZAnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHJlY05hbWU6ICcnLFxuICAgIHJlY1Bob3RvOiAnJyxcbiAgICBkZXNjcmliZTogJycsXG4gICAgcmVjTnVtYmVyOiAwLFxuICAgIHByYWlzZTogJy4uL2ltYWdlL3ByYWlzZS5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwcmFpc2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZWxlY3QgPSAhc2VsZi5lbGVjdFxuICAgICAgaWYgKHNlbGYuZWxlY3QpIHtcbiAgICAgICAgc2VsZi5yZWNOdW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yZWNOdW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgdmlld0ltZyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBhcnIgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnJlY1Bob3RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKHNlbGYucmVjUGhvdG9baV0pXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnJlY1Bob3RvLCAnc3JjJylcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogYXJyLFxuICAgICAgICBjdXJyZW50OiBgJHtzZWxmLnJlY1Bob3RvW2luZGV4XX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYucmVjTmFtZSA9IGRhdGEucmVjTmFtZVxuICAgIHNlbGYucmVjUGhvdG8gPSBkYXRhLnJlY1Bob3RvLnNwbGl0KCcsJylcbiAgICBzZWxmLmRlc2NyaWJlID0gZGF0YS5kZXNjcmliZVxuICAgIHNlbGYucmVjTnVtYmVyID0gZGF0YS5yZWNOdW1iZXJcbiAgICBjb25zb2xlLmxvZyhzZWxmLnJlY1Bob3RvKVxuICB9XG59XG4iXX0=