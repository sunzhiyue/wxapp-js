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

var Teas = function (_wepy$page) {
  _inherits(Teas, _wepy$page);

  function Teas() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Teas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Teas.__proto__ || Object.getPrototypeOf(Teas)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '吐槽吐槽'
    }, _this.data = {
      src: '',
      logo: 'https://avatars1.githubusercontent.com/u/31921245?s=460&v=4'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Teas, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Teas;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Teas , 'pages/teas'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYXMuanMiXSwibmFtZXMiOlsiVGVhcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwibG9nbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsWUFBTTtBQUZELEs7Ozs7OzZCQUlFLENBQUU7Ozs7RUFScUIsZUFBS0MsSTs7a0JBQWxCTixJIiwiZmlsZSI6InRlYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflkJDmp73lkJDmp70nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGxvZ286ICdodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzMxOTIxMjQ1P3M9NDYwJnY9NCdcbiAgfVxuICBvbkxvYWQoKSB7fVxufVxuIl19