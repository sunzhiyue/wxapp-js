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
      describe: '',
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
          url: './show?recName=' + item.recName + '&recPhoto=' + item.recPhoto + '&recNumber=' + item.recNumber + '&describe=' + item.describe
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVQYWdlLmpzIl0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwic2VhcmNoIiwicHJhaXNlIiwiZGVzY3JpYmUiLCJjb250ZW50IiwibWV0aG9kcyIsInNlYXJjaHRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZWNUYXAiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVjTmFtZSIsInJlY1Bob3RvIiwicmVjTnVtYmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGVBQVMsQ0FDUCxpREFETyxFQUVQLG9CQUZPLEVBR1Asa0RBSE8sQ0FGSjtBQU9MQyxjQUFRLHFCQVBIO0FBUUxDLGNBQVEscUJBUkg7QUFTTEMsZ0JBQVUsRUFUTDtBQVVMQyxlQUFTO0FBVkosSyxRQVlQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsWUFOUSxrQkFNREMsQ0FOQyxFQU1FO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS1AsT0FBTCxDQUFhTSxFQUFFRyxhQUFGLENBQWdCQyxFQUE3QixDQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDQSx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxtQ0FBdUJJLEtBQUtLLE9BQTVCLGtCQUFnREwsS0FBS00sUUFBckQsbUJBQTJFTixLQUFLTyxTQUFoRixrQkFBc0dQLEtBQUtUO0FBRDdGLFNBQWhCO0FBR0Q7QUFiTyxLOzs7Ozs2QkFlRDtBQUNQLFVBQUlRLE9BQU8sSUFBWDtBQUNBQSxXQUFLUCxPQUFMO0FBQ0Q7Ozs7RUFsQ21DLGVBQUtnQixJOztrQkFBdEJ6QixRIiwiZmlsZSI6ImhvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9jb250ZW50LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aJi+acuuaRhOW9seWkp+i1mydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaW1nVXJsczogW1xuICAgICAgJy4uL2ltYWdlL3U9MjQ5MTUzNDg5MiwxNzQwNzI5NDA2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICcuLi9pbWFnZS9waG90by5qcGcnLFxuICAgICAgJy4uL2ltYWdlL3U9MzE5MTQ2NzY3MSwzOTUyNDI0NjUzJmZtPTIwMCZncD0wLmpwZydcbiAgICBdLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL3NlYXJjaC5wbmcnLFxuICAgIHByYWlzZTogJy4uL2ltYWdlL3ByYWlzZS5wbmcnLFxuICAgIGRlc2NyaWJlOiAnJyxcbiAgICBjb250ZW50OiBudWxsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzZWFyY2h0YXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICd1cCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZWNUYXAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9zaG93P3JlY05hbWU9JHtpdGVtLnJlY05hbWV9JnJlY1Bob3RvPSR7aXRlbS5yZWNQaG90b30mcmVjTnVtYmVyPSR7aXRlbS5yZWNOdW1iZXJ9JmRlc2NyaWJlPSR7aXRlbS5kZXNjcmliZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gY29udGVudFxuICB9XG59XG4iXX0=