'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _home = require('./home.js');

var _home2 = _interopRequireDefault(_home);

var _clock = require('./clock.js');

var _clock2 = _interopRequireDefault(_clock);

var _store = require('../store.js');

var _store2 = _interopRequireDefault(_store);

var _questionTest = require('./questionTest.js');

var _questionTest2 = _interopRequireDefault(_questionTest);

var _userList = require('../containers/userList');

var _userList2 = _interopRequireDefault(_userList);

var _selectedUser = require('../containers/selectedUser');

var _selectedUser2 = _interopRequireDefault(_selectedUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Clock from '../containers/clock.js';


var Root = function (_Component) {
	_inherits(Root, _Component);

	function Root() {
		_classCallCheck(this, Root);

		return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	}

	_createClass(Root, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_store2.default,
					null,
					_react2.default.createElement(_reactRouter.Route, { path: '/', render: function render() {
							return _react2.default.createElement(
								_home2.default,
								null,
								_react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: Initial }),
								_react2.default.createElement(_reactRouter.Route, { path: '/aboutUs', render: function render() {
										return _react2.default.createElement(
											'div',
											null,
											'About us ',
											_react2.default.createElement(_clock2.default, null)
										);
									} }),
								_react2.default.createElement(_reactRouter.Route, { path: '/location', render: function render() {
										return _react2.default.createElement(
											'div',
											null,
											'OfficeLocation is here'
										);
									} }),
								_react2.default.createElement(_reactRouter.Route, { path: '/redirect', render: function render() {
										return _react2.default.createElement(
											'div',
											null,
											' Redirected '
										);
									} }),
								_react2.default.createElement(_reactRouter.Route, { path: '/questions', component: _questionTest2.default })
							);
						} })
				)
			);
		}
	}]);

	return Root;
}(_react.Component);

exports.default = Root;

var Initial = function (_Component2) {
	_inherits(Initial, _Component2);

	function Initial() {
		_classCallCheck(this, Initial);

		return _possibleConstructorReturn(this, (Initial.__proto__ || Object.getPrototypeOf(Initial)).apply(this, arguments));
	}

	_createClass(Initial, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Hello',
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						null,
						'Users List'
					),
					_react2.default.createElement(_userList2.default, null),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'div',
						null,
						'Selected User'
					),
					_react2.default.createElement(_selectedUser2.default, null)
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						null,
						'Users List'
					),
					_react2.default.createElement(_userList2.default, null),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'div',
						null,
						'Selected User'
					),
					_react2.default.createElement(_selectedUser2.default, null)
				)
			);
		}
	}]);

	return Initial;
}(_react.Component);