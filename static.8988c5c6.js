(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://piter-united.ru/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _img = __webpack_require__(40);

var _img2 = _interopRequireDefault(_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Btn = function Btn(_ref) {
  var to = _ref.to,
      text = _ref.text;
  return _react2.default.createElement(
    _reactStatic.Link,
    { to: to, className: 'btn btn-light', style: { marginRight: '10px' }, role: 'button' },
    text
  );
};

var Layout = function Layout(_ref2) {
  var buttons = _ref2.buttons,
      children = _ref2.children;
  return _react2.default.createElement(
    'div',
    { className: 'background' },
    _react2.default.createElement(
      'div',
      { className: 'malina-left' },
      _react2.default.createElement('img', { alt: '', src: _img2.default, style: { width: '400px' } })
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      buttons && buttons,
      !buttons && _react2.default.createElement(
        'div',
        { className: 'back' },
        _react2.default.createElement(Btn, { to: '/', text: 'Home' }),
        _react2.default.createElement(Btn, { to: '/event', text: 'Events' }),
        _react2.default.createElement(Btn, { to: '/speaker', text: 'Speakers' }),
        _react2.default.createElement(Btn, { to: '/company', text: 'Companies' }),
        _react2.default.createElement(Btn, { to: '/about', text: 'About' })
      )
    ),
    children
  );
};

exports.default = Layout;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__(42);

var _apolloLinkHttp = __webpack_require__(43);

var _apolloCacheInmemory = __webpack_require__(44);

var _nodeFetch = __webpack_require__(45);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _apolloClient.ApolloClient({
  link: new _apolloLinkHttp.HttpLink({
    fetch: _nodeFetch2.default,
    uri: 'https://api.graph.cool/simple/v1/cjdznwgo403gi0148c8fzyagx'
  }),
  cache: new _apolloCacheInmemory.InMemoryCache()
});

exports.default = client;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dateFns = __webpack_require__(7);

var _ru = __webpack_require__(13);

var _ru2 = _interopRequireDefault(_ru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventDate = function EventDate(_ref) {
  var start = _ref.start,
      end = _ref.end;

  if ((0, _dateFns.isEqual)((0, _dateFns.format)(start, 'YYYY-MM-DD'), (0, _dateFns.format)(end, 'YYYY-MM-DD'))) {
    return (0, _dateFns.format)(start, 'DD MMMM YYYY', { locale: _ru2.default });
  }
  return _react2.default.createElement(
    'span',
    null,
    (0, _dateFns.format)(start, 'DD', { locale: _ru2.default }),
    ' - ',
    (0, _dateFns.format)(end, 'DD MMMM YYYY', { locale: _ru2.default })
  );
};

exports.default = EventDate;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.state = { opened: [] };
    return _this;
  }

  _createClass(Accordion, [{
    key: 'toggle',
    value: function toggle(id) {
      var opened = this.state.opened;

      if (!opened.includes(id)) {
        opened.push(id);
        this.setState({ opened: opened });
      } else {
        var idx = opened.indexOf(id);
        opened.splice(idx, 1);
        this.setState({ opened: opened });
      }
    }
  }, {
    key: 'hasOpened',
    value: function hasOpened(index) {
      var opened = this.state.opened;

      return opened.includes(index);
    }
  }, {
    key: 'item',
    value: function item(index, _item) {
      var _this2 = this;

      var cls = ['collapse'];
      if (this.hasOpened(index)) {
        cls.push('show');
      }
      return _react2.default.createElement(
        'div',
        { className: 'card', key: index },
        _react2.default.createElement(
          'div',
          { className: 'card-header' },
          _react2.default.createElement(
            'h5',
            { className: 'mb-0' },
            _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.toggle(index);
                },
                className: 'btn programm-item',
                'data-toggle': 'collapse',
                'aria-expanded': 'true',
                'aria-controls': 'collapseOne'
              },
              this.hasOpened(index) ? _react2.default.createElement('span', { className: 'oi oi-chevron-bottom' }) : _react2.default.createElement('span', { className: 'oi oi-chevron-right' }),
              _react2.default.createElement(
                'span',
                { className: 'programm-item-title' },
                _item.title
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: cls.join(' '), 'aria-labelledby': 'headingOne' },
          _item.data
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return this.props.items.map(function (item, index) {
        return _this3.item(index, item);
      });
    }
  }]);

  return Accordion;
}(_react2.default.Component);

exports.default = Accordion;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _CommunityList = __webpack_require__(41);

var _CommunityList2 = _interopRequireDefault(_CommunityList);

var _CurrentEvent = __webpack_require__(12);

var _CurrentEvent2 = _interopRequireDefault(_CurrentEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var communities = _ref.communities;
  return _react2.default.createElement(
    'div',
    { className: 'container pt-20' },
    _react2.default.createElement(_CommunityList2.default, { communities: communities })
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery {\n  allEvents(\n    first: 1\n    orderBy: date_DESC\n  ) {\n    id\n    name\n    slug\n    address\n    description\n    date\n    dateEnd\n  }\n}'], ['\nquery {\n  allEvents(\n    first: 1\n    orderBy: date_DESC\n  ) {\n    id\n    name\n    slug\n    address\n    description\n    date\n    dateEnd\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _dateFns = __webpack_require__(7);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

var _EventDate = __webpack_require__(5);

var _EventDate2 = _interopRequireDefault(_EventDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentEvent = function (_React$Component) {
  _inherits(CurrentEvent, _React$Component);

  function CurrentEvent() {
    _classCallCheck(this, CurrentEvent);

    var _this = _possibleConstructorReturn(this, (CurrentEvent.__proto__ || Object.getPrototypeOf(CurrentEvent)).call(this));

    _this.state = { event: null };
    return _this;
  }

  _createClass(CurrentEvent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var query = (0, _graphqlTag2.default)(_templateObject);
      _apollo2.default.query({ query: query }).then(function (_ref) {
        var allEvents = _ref.data.allEvents;

        var event = allEvents[0];
        if (event && ((0, _dateFns.isFuture)(event.date) || (0, _dateFns.isToday)(event.date))) {
          _this2.setState({ event: event });
        }
      }).catch(console.log);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(np, ns) {
      var _this3 = this;

      var event = ns.event,
          int = ns.int;

      if (event && event.id && !window.redirected && !int) {
        var _int = setInterval(function () {
          clearInterval(_int);
          setTimeout(function () {
            window.redirected = true;
          }, 1200);
          _this3.setState({ redirect: true });
        }, 500);
        setTimeout(function () {
          return _this3.setState({ int: _int });
        }, 100);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.int) {
        clearInterval(this.state.int);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          event = _state.event,
          redirect = _state.redirect;

      if (event) {
        return _react2.default.createElement(
          'div',
          { className: 'card card-events' },
          _react2.default.createElement(
            'div',
            { className: 'card-body' },
            _react2.default.createElement(
              'h5',
              { className: 'card-title' },
              ' ',
              _react2.default.createElement(
                'strong',
                null,
                event.name
              )
            ),
            _react2.default.createElement(
              'h6',
              { className: 'card-subtitle mb-2 text-muted' },
              _react2.default.createElement(_EventDate2.default, { start: event.date, end: event.dateEnd }),
              ', ',
              event.address
            ),
            _react2.default.createElement(
              'p',
              { className: 'card-text' },
              event.description
            ),
            redirect && !window.redirected && _react2.default.createElement(_reactStatic.Redirect, { to: '/event/' + event.slug }),
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/event/' + event.id },
              '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435...'
            ),
            _react2.default.createElement('img', { alt: '', src: 'img-white.png', className: 'event-img' })
          )
        );
      }
      return null;
    }
  }]);

  return CurrentEvent;
}(_react2.default.Component);

exports.default = CurrentEvent;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/ru");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _amount = __webpack_require__(46);

var _amount2 = _interopRequireDefault(_amount);

var _participants = __webpack_require__(47);

var _participants2 = _interopRequireDefault(_participants);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _EventDate = __webpack_require__(5);

var _EventDate2 = _interopRequireDefault(_EventDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackBtn = function BackBtn(event) {
  return [_react2.default.createElement(
    'div',
    { key: 1, className: 'back' },
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/event/' + event.id, className: 'btn btn-light back-button', activeClassName: 'null', role: 'button' },
      _react2.default.createElement('span', { className: 'oi oi-arrow-left' }),
      _react2.default.createElement(
        'span',
        { style: { paddingLeft: '12px', fontWeight: '600' } },
        '\u041D\u0430\u0437\u0430\u0434'
      )
    )
  ), _react2.default.createElement(
    'div',
    { key: 2, className: 'event-badge' },
    _react2.default.createElement(
      'div',
      { className: 'badge-text' },
      _react2.default.createElement(
        'span',
        { className: 'badge-title' },
        event.name
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'span',
        { className: 'badge-desc' },
        _react2.default.createElement(_EventDate2.default, { start: event.date, end: event.dateEnd }),
        ', ',
        event.address
      )
    ),
    _react2.default.createElement(
      'a',
      { href: 'mailto:piterunited@gmail.com', role: 'button', className: 'btn btn-dark reg-button-badge' },
      '\u0441\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C'
    )
  )];
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var event = _ref.event;
  return _react2.default.createElement(
    _Layout2.default,
    { buttons: BackBtn(event) },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'alert alert-warning', role: 'alert' },
        '\u0415\u0441\u043B\u0438 \u0432\u044B \u0443\u0436\u0435 \u0437\u043D\u0430\u043A\u043E\u043C\u044B \u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435\u043C \u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u043C, \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0438 \u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0441\u0440\u0430\u0437\u0443 \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E ',
        _react2.default.createElement(
          'a',
          { href: '#package', className: 'itgm-styled-link' },
          '\u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u0438\u0445 \u043F\u0430\u043A\u0435\u0442\u043E\u0432'
        ),
        '.'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container event-about' },
      _react2.default.createElement(
        'span',
        { className: 'partners-title-1' },
        '\u041E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0438'
      ),
      _react2.default.createElement('dir', { className: 'razd-left' }),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438:'
            ),
            ' ',
            _react2.default.createElement('br', null),
            '\u0421\u0435\u0440\u0434\u0446\u0435\u043C \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F IT-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430. \u0412 \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0441\u043B\u0435\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0442 15 \u0434\u043E 20 IT-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432. \u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0441\u0432\u043E\u0439 "\u043E\u0441\u0442\u0440\u043E\u0432\u043E\u043A" \u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              '\u0424\u043E\u0440\u043C\u0430\u0442:'
            ),
            _react2.default.createElement('br', null),
            '\u041A\u0430\u0436\u0434\u044B\u0439 \u0441\u043B\u0435\u0442 \u044D\u0442\u043E \u043E\u0442 15 \u0434\u043E 20 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u0442\u043E\u043A\u043E\u0432. \u041A\u0430\u0436\u0434\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0433\u043E\u0442\u043E\u0432\u0438\u0442 \u0441\u0432\u043E\u044E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443: \u0434\u043E\u043A\u043B\u0430\u0434\u044B, \u043A\u0440\u0443\u0433\u043B\u044B\u0435 \u0441\u0442\u043E\u043B\u044B, \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B \u0438 \u0442.\u0434.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              '\u0410\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430:'
            ),
            _react2.default.createElement('br', null),
            '\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u043E\u0441\u0442\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432, \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0438 \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u043F\u044B\u0442\u043E\u043C. \u0417\u043D\u0430\u043A\u043E\u043C\u044F\u0442\u0441\u044F \u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0447\u0430\u0441\u0442\u044C\u044E \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432.'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container-fluid itgm-video' },
      _react2.default.createElement('iframe', { title: 'Video', src: 'https://player.vimeo.com/video/163001915?title=0&byline=0&portrait=0', width: '100%', height: '484', frameBorder: '0', webkitallowfullscreen: true, mozallowfullscreen: true, allowFullScreen: true })
    ),
    _react2.default.createElement(
      'div',
      { className: 'container event-about' },
      _react2.default.createElement(
        'span',
        { className: 'partners-title-1' },
        '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430'
      ),
      _react2.default.createElement('dir', { className: 'razd-left' }),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg' },
          _react2.default.createElement('br', null),
          _react2.default.createElement('img', { alt: '', src: _amount2.default, style: { width: '100%' } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg' },
          _react2.default.createElement('br', null),
          _react2.default.createElement('img', {
            alt: '',
            src: _participants2.default,
            style: {
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block' }
          })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container event-about' },
      _react2.default.createElement(
        'span',
        { className: 'partners-title-1' },
        '\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438'
      ),
      _react2.default.createElement('dir', { className: 'razd-left' }),
      _react2.default.createElement(
        'ul',
        { className: 'list-group list-group-flush itgm-links' },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'a',
            { href: '', target: '_blank' },
            '\u0428\u0430\u0431\u043B\u043E\u043D \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'a',
            { href: '', target: '_blank' },
            '\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 PDF'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'a',
            { href: 'https://medium.com/@piterunited', rel: 'noopener noreferrer', target: '_blank' },
            '\u041F\u043E\u0441\u0442-\u0440\u0435\u043B\u0438\u0437\u044B \u043F\u043E \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u043C \u0441\u043B\u0435\u0442\u0430\u043C'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'a',
            { href: 'https://vk.com/albums-71691819', rel: 'noopener noreferrer', target: '_blank' },
            '\u0424\u043E\u0442\u043E-\u043E\u0442\u0447\u0435\u0442\u044B \u043F\u043E \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u043C \u0441\u043B\u0435\u0442\u0430\u043C'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'a',
            { href: 'https://vimeo.com/163001915', rel: 'noopener noreferrer', target: '_blank' },
            '\u041F\u0440\u043E\u043C\u043E-\u0440\u043E\u043B\u0438\u043A \u0441 IT Global Meetup #7'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'a',
            { href: 'https://www.youtube.com/watch?v=PbxTYPbzef0', rel: 'noopener noreferrer', target: '_blank' },
            '\u041F\u0440\u043E\u043C\u043E-\u0440\u043E\u043B\u0438\u043A \u0441 IT Global Meetup #3'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container event-about', id: 'package' },
      _react2.default.createElement(
        'span',
        { className: 'partners-title-1' },
        '\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u0438\u0435 \u043F\u0430\u043A\u0435\u0442\u044B'
      ),
      _react2.default.createElement('dir', { className: 'razd-left' }),
      _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col', className: 'package' },
              'Bronze'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col', className: 'package' },
              'Silver'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col', className: 'package' },
              'Glod'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col', className: 'package' },
              'Platinum'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0410\u043D\u043E\u043D\u0441 \u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0435 \u043D\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445 Piter United'
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0430 \u0441\u043B\u0430\u0439\u0434\u0430\u0445 \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0430\u043D\u043E\u043D\u0441 \u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0435 \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445 Piter United'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            { className: 'focus' },
            _react2.default.createElement(
              'td',
              null,
              '\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0434\u043D\u043E\u0433\u043E Roll-Up \u0432 \u0445\u043E\u043B\u043B\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 Press-Wall'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            { className: 'focus' },
            _react2.default.createElement(
              'td',
              null,
              '\u041C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0440\u043E\u0432\u043A\u0430'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u043F\u0440\u043E\u043C\u043E-\u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430\u0445'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 (\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2-\u0445 \u043C\u0438\u043D)'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            ),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            { className: 'focus' },
            _react2.default.createElement(
              'td',
              null,
              '\u0412\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0441 \u0434\u043E\u043A\u043B\u0430\u0434\u043E\u043C \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043A\u0430\u0445'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F Roll-Ups \u0432\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u043B\u0430\u0445'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u044F'
            ),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement('td', { className: 'package' }),
            _react2.default.createElement(
              'td',
              { className: 'package' },
              _react2.default.createElement('span', { className: 'oi oi-check' })
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container event-about' },
      _react2.default.createElement(
        'div',
        { className: 'event-badge' },
        _react2.default.createElement(
          'div',
          { className: 'badge-text' },
          _react2.default.createElement(
            'span',
            { className: 'badge-title' },
            event.name
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { className: 'badge-desc' },
            _react2.default.createElement(_EventDate2.default, { start: event.date, end: event.dateEnd }),
            ', ',
            event.address
          )
        ),
        _react2.default.createElement(
          'a',
          { href: 'mailto:piterunited@gmail.com', role: 'button', className: 'btn btn-dark reg-button-badge' },
          '\u0441\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'back' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/event/' + event.id, className: 'btn btn-light back-button', role: 'button' },
          _react2.default.createElement('span', { className: 'oi oi-arrow-left' }),
          _react2.default.createElement(
            'span',
            { style: { paddingLeft: '12px', fontWeight: '600' } },
            '\u041D\u0430\u0437\u0430\u0434'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      _react2.default.createElement(
        'span',
        null,
        '\xA0'
      )
    )
  );
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery GetCommunityEventTalks($id: ID!){\n  allCommunityEventTalks(filter: {\n    event: {id: $id}\n  }) {\n    id\n    time\n    subject\n    description\n    community {\n      id\n      name\n      logo {\n        url\n      }\n    }\n    speakers {\n      id\n      name\n      social\n      company(last: 1) {\n        id\n        name\n        logo {\n          url\n        }\n      }\n      photo {\n        url\n      }\n    }\n  }\n}'], ['\nquery GetCommunityEventTalks($id: ID!){\n  allCommunityEventTalks(filter: {\n    event: {id: $id}\n  }) {\n    id\n    time\n    subject\n    description\n    community {\n      id\n      name\n      logo {\n        url\n      }\n    }\n    speakers {\n      id\n      name\n      social\n      company(last: 1) {\n        id\n        name\n        logo {\n          url\n        }\n      }\n      photo {\n        url\n      }\n    }\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(16);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _Accordion = __webpack_require__(8);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Text = __webpack_require__(48);

var _Text2 = _interopRequireDefault(_Text);

var _EventDate = __webpack_require__(5);

var _EventDate2 = _interopRequireDefault(_EventDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function compareByTime(a, b) {
  if (a.time < b.time) {
    return -1;
  }
  if (a.time > b.time) {
    return 1;
  }
  return 0;
}

var TalksQuery = (0, _graphqlTag2.default)(_templateObject);

var Speaker = function Speaker(_ref) {
  var id = _ref.id,
      name = _ref.name,
      company = _ref.company;
  return _react2.default.createElement(
    'span',
    { key: id },
    _react2.default.createElement(
      'span',
      { className: 'theme-speaker' },
      name
    ),
    company.length > 0 && _react2.default.createElement(
      'span',
      { className: 'theme-speaker-company' },
      ' (',
      company[0].name,
      ')'
    )
  );
};

var Talk = function Talk(_ref2) {
  var id = _ref2.id,
      time = _ref2.time,
      subject = _ref2.subject,
      description = _ref2.description,
      speakers = _ref2.speakers;
  return _react2.default.createElement(
    'tr',
    { key: id },
    _react2.default.createElement(
      'th',
      { className: 'row theme-timing' },
      time
    ),
    _react2.default.createElement(
      'td',
      { style: { width: '100%' } },
      _react2.default.createElement(
        'span',
        { className: 'theme-title' },
        subject
      ),
      description && _react2.default.createElement(
        'span',
        { className: 'theme-desc' },
        _react2.default.createElement(_Text2.default, { text: description })
      ),
      speakers.map(function (s, i) {
        return _react2.default.createElement(
          'span',
          { key: i, style: { marginRight: '10px' } },
          _react2.default.createElement(Speaker, s),
          i < speakers.length - 1 && ','
        );
      })
    )
  );
};

var TalksList = function TalksList(_ref3) {
  var talks = _ref3.talks;
  return _react2.default.createElement(
    'table',
    { className: 'table' },
    _react2.default.createElement(
      'tbody',
      null,
      talks.map(Talk)
    )
  );
};

var CommunityList = function (_React$Component) {
  _inherits(CommunityList, _React$Component);

  function CommunityList(props) {
    _classCallCheck(this, CommunityList);

    var _this = _possibleConstructorReturn(this, (CommunityList.__proto__ || Object.getPrototypeOf(CommunityList)).call(this, props));

    _this.state = {
      loading: true,
      error: null,
      community: {}
    };
    return _this;
  }

  _createClass(CommunityList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      var pr = this.props.data.allCommunityEventTalks || [];
      var nx = next.data.allCommunityEventTalks || [];
      var st = null;
      if (next.data) {
        st = {};
        st.loading = next.data.loading;
        st.error = next.data.error;
      }
      if (pr !== nx) {
        var data = {};
        nx.forEach(function (t) {
          t.community.forEach(function (c) {
            if (c.id in data) {
              data[c.id].talks.push(t);
            } else {
              data[c.id] = Object.assign({}, c, { talks: [t] });
            }
            data[c.id].talks.sort(compareByTime);
          });
        });
        st.community = data;
      }
      if (st) {
        this.setState(st);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          community = _state.community,
          loading = _state.loading,
          error = _state.error;

      if (loading) {
        return _react2.default.createElement(
          'p',
          null,
          'Loading...'
        );
      } else if (error) {
        return _react2.default.createElement(
          'p',
          null,
          'Error!'
        );
      }
      var items = Object.keys(community).map(function (id) {
        return {
          title: community[id].name,
          data: _react2.default.createElement(TalksList, { talks: community[id].talks })
        };
      });
      return _react2.default.createElement(_Accordion2.default, { items: items });
    }
  }]);

  return CommunityList;
}(_react2.default.Component);

var Talks = (0, _reactApollo.graphql)(TalksQuery, { options: function options(_ref4) {
    var id = _ref4.id;
    return { variables: { id: id } };
  } })(CommunityList);

var BackBtn = function BackBtn(event) {
  return [_react2.default.createElement(
    'div',
    { key: 1, className: 'back' },
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/event/' + event.id, className: 'btn btn-light back-button', activeClassName: 'null', role: 'button' },
      _react2.default.createElement('span', { className: 'oi oi-arrow-left' }),
      _react2.default.createElement(
        'span',
        { style: { paddingLeft: '12px', fontWeight: '600' } },
        '\u041D\u0430\u0437\u0430\u0434'
      )
    )
  ), _react2.default.createElement(
    'div',
    { key: 2, className: 'event-badge' },
    _react2.default.createElement(
      'div',
      { className: 'badge-text' },
      _react2.default.createElement(
        'span',
        { className: 'badge-title' },
        event.name
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'span',
        { className: 'badge-desc' },
        _react2.default.createElement(_EventDate2.default, { start: event.date, end: event.dateEnd }),
        ', ',
        event.address
      )
    ),
    event.registration && _react2.default.createElement(
      'a',
      { href: 'https://piter-united.timepad.ru/event/' + event.timepadId + '/', target: 'blank', role: 'button', className: 'btn btn-dark reg-button-badge' },
      '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F'
    )
  )];
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref5) {
  var event = _ref5.event;
  return _react2.default.createElement(
    _Layout2.default,
    { buttons: BackBtn(event), classes: ['programm-list'] },
    _react2.default.createElement(
      'div',
      { className: 'container programm-list' },
      _react2.default.createElement(
        'span',
        { className: 'programm-title' },
        '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430'
      ),
      _react2.default.createElement(Talks, { id: event.id })
    )
  );
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Event = __webpack_require__(49);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var event = _ref.event;
  return _react2.default.createElement(_Event2.default, { event: event });
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _EventList = __webpack_require__(54);

var _EventList2 = _interopRequireDefault(_EventList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var events = _ref.events;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(_EventList2.default, { events: events })
    )
  );
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(
        'h1',
        null,
        'Piter United'
      ),
      _react2.default.createElement(
        'p',
        null,
        'About'
      )
    )
  );
};

exports.default = About;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _Speaker = __webpack_require__(55);

var _Speaker2 = _interopRequireDefault(_Speaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var speaker = _ref.speaker;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(_Speaker2.default, { speaker: speaker })
    )
  );
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _SpeakerList = __webpack_require__(61);

var _SpeakerList2 = _interopRequireDefault(_SpeakerList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var speakers = _ref.speakers;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(_SpeakerList2.default, { speakers: speakers })
    )
  );
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var _ref$company = _ref.company,
      name = _ref$company.name,
      site = _ref$company.site,
      logo = _ref$company.logo,
      description = _ref$company.description;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/company' },
        '<',
        ' Back'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h1',
        null,
        logo ? _react2.default.createElement('img', { alt: name, src: logo.url, height: '30' }) : '',
        ' ',
        name
      ),
      _react2.default.createElement(
        'p',
        null,
        site
      ),
      description && _react2.default.createElement(
        'p',
        null,
        description
      ),
      _react2.default.createElement('br', null)
    )
  );
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var companies = _ref.companies;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(
        'h1',
        null,
        'Company list'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'ul',
        null,
        companies.map(function (_ref2) {
          var id = _ref2.id,
              name = _ref2.name;
          return _react2.default.createElement(
            'li',
            { key: id },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/company/' + id + '/' },
              name
            )
          );
        })
      )
    )
  );
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Login page'
    )
  );
};

exports.default = Login;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(
        'h1',
        null,
        '404 - Oh no\'s! We couldn\'t find that page :('
      )
    )
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(30);

var _reactStaticRoutes = __webpack_require__(31);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactApollo = __webpack_require__(16);

var _reactRedux = __webpack_require__(62);

__webpack_require__(63);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

var _redux = __webpack_require__(64);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactApollo.ApolloProvider,
    { client: _apollo2.default },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _redux2.default },
      _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};
//
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(32);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(33);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(34);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(35);

var _reactUniversalComponent = __webpack_require__(36);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error() {
    return null;
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Partner',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/Partner', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Partner');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/Partner';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Talks',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/Talks', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Talks');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/Talks';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Event',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/Event', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Event');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/containers/Event';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Events',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/containers/Events', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Events');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/containers/Events';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Speaker',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/containers/Speaker', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Speaker');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/containers/Speaker';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Speakers',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/containers/Speakers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Speakers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/containers/Speakers';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Company',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/containers/Company', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Company');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/containers/Company';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Companies',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/containers/Companies', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Companies');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/containers/Companies';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Login',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/containers/Login', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Login');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/containers/Login';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/travis/build/Piter-United/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
var templateMap = {
  t_0: t_0,
  t_1: t_1,
  t_2: t_2,
  t_3: t_3,
  t_4: t_4,
  t_5: t_5,
  t_6: t_6,
  t_7: t_7,
  t_8: t_8,
  t_9: t_9,
  t_10: t_10,
  t_11: t_11

  // Template Tree
};var templateTree = { c: { "404": { t: "t_11" }, "/": { t: "t_0" }, "event": { c: { "cje306m4g69or0132wphzlzqm": { c: { "partner": { t: "t_1" }, "talks": { t: "t_2" } }, t: "t_3" }, "cje04rb735oce0132m5qyv78a": { c: { "partner": { t: "t_1" }, "talks": { t: "t_2" } }, t: "t_3" }, "itgm12": { c: { "partner": { t: "t_1" }, "talks": { t: "t_2" } }, t: "t_3" }, "itgm11": { c: { "partner": { t: "t_1" }, "talks": { t: "t_2" } }, t: "t_3" } }, t: "t_4" }, "about": { t: "t_5" }, "speaker": { c: { "cje04m50x5o9o0132hjqhpd97": { t: "t_6" }, "cje05dbrz5omd01323j648wgm": { t: "t_6" }, "cje05hjq25rny0197ec7a8i6v": { t: "t_6" }, "cje05loja5osd0132vylf41sx": { t: "t_6" }, "cje05qy695rt601971jyeqntj": { t: "t_6" }, "cje05t9wb5owc013295jw73bu": { t: "t_6" }, "cje05w1k85rw30197ff2c8s16": { t: "t_6" }, "cje05zfki5rxn0197nw6qfkqr": { t: "t_6" }, "cje0624t15p1l0132tk809a70": { t: "t_6" }, "cje062jf35p2d0132zse16z98": { t: "t_6" }, "cje062vwq5p2j0132r5ttcbfi": { t: "t_6" }, "cje5qxscv7cxr0132ktx97w3n": { t: "t_6" }, "cje5qy6j77cxw0132zt0280le": { t: "t_6" }, "cje5qz0rt7kk50197uxudosop": { t: "t_6" }, "cje5qzjnx7kke0197kze45rh3": { t: "t_6" }, "cje5re9h67d6d0132p6og46n1": { t: "t_6" }, "cje5rh6g67d8301323wfyfdof": { t: "t_6" }, "cje5rmi8b7db60132uznffm3t": { t: "t_6" }, "cje5roq637dco01324dc72uul": { t: "t_6" }, "cje5ruitj7dfu01328nmxm2q3": { t: "t_6" }, "cje5ruwdr7l3d0197z39413u9": { t: "t_6" }, "cje5rxnia7dho0132x9uw66zv": { t: "t_6" }, "cje5s16cy7l730197dld9jey9": { t: "t_6" }, "cje5s3f807dkh0132qiqpakly": { t: "t_6" }, "cje5s5a2m7l9a0197zss9yi7s": { t: "t_6" }, "cje5s8nvc7dnb0132q32e17gk": { t: "t_6" }, "cje8bxxsqhtns0167z37v1ihd": { t: "t_6" }, "cje8bxy2wh36a0104noklka2p": { t: "t_6" }, "cje8bxyd5h36j0104887sv8xt": { t: "t_6" }, "cje8bxyuqm4fo017974l7skx7": { t: "t_6" }, "cje8by0i3fl5d0137yjmpjbbf": { t: "t_6" }, "cje8by0ohbdyl0152a3e266km": { t: "t_6" }, "cje8by278bdz20152fwjrphzq": { t: "t_6" }, "cje8by2jips7w0112m4ua8hp3": { t: "t_6" }, "cje8by2t3b35y01380ral8k4d": { t: "t_6" }, "cje8by35ye0bt0177d94usnb5": { t: "t_6" }, "cje8by48jb3690138d7fxr5mr": { t: "t_6" }, "cje8by6w5h39e01043f3f2zlw": { t: "t_6" }, "cje8by75kh39l0104vvrr07c8": { t: "t_6" }, "cje8by7esh39s01042ffo3ofg": { t: "t_6" }, "cje8by7l1ps990112lnj1ji0c": { t: "t_6" }, "cje8by7ubbumx0117utvnu45v": { t: "t_6" }, "cje8by813h3a00104gaus6bb9": { t: "t_6" }, "cje8byaszb3950138p22ju5sz": { t: "t_6" }, "cje8byb2ch3aw01045ldbkhso": { t: "t_6" }, "cje8bybbkhtrp0167iddu113f": { t: "t_6" }, "cje8bybkxm4l10179q8yz0bfl": { t: "t_6" }, "cje8bybxa6njt0140rk80ncg1": { t: "t_6" }, "cje8byc6ob3a501387hjj1sut": { t: "t_6" }, "cje8bycfym4la0179zyy3lvzr": { t: "t_6" }, "cje8bycp1h3bk01042u1e9rwg": { t: "t_6" }, "cje8bydcmbuof01179tklu13c": { t: "t_6" }, "cje8bydmq5v0b0135q0787ghn": { t: "t_6" }, "cje8bydw2b3b00138ivkr7mr0": { t: "t_6" }, "cje8bye5p6nkb0140h9y01ppg": { t: "t_6" }, "cje8byeetbupf01176kc2zshl": { t: "t_6" }, "cje8byelfe0ew0177mtmzardm": { t: "t_6" }, "cje8byeu6b3bd0138q38e9ze6": { t: "t_6" }, "cje8gnv1gh2to0137vsfxu9oo": { t: "t_6" }, "cje8gnvdudc1a0117v68ukvlc": { t: "t_6" }, "cje8gnvq9fiap01771q4qwbgx": { t: "t_6" }, "cje8gnw2jdc1h0117dmsusj6k": { t: "t_6" }, "cjee1g37caw7u0197t5l0kmsr": { t: "t_6" }, "cjee1pp8haqlv0132ikrkgy5q": { t: "t_6" }, "cjee1yz03awfv0197910vkm5d": { t: "t_6" }, "cjee21mv4aqqj0132j7k4a34l": { t: "t_6" }, "cjee28iqhaqtg0132ar5s6ncl": { t: "t_6" }, "cjee2gnjiawnr0197pmq8np51": { t: "t_6" }, "cjee2mooaaqzb0132q7n36f8n": { t: "t_6" }, "cjee2nbguaqzw0132d9qv1i1q": { t: "t_6" }, "cjee2reaxawtt0197td8qr42a": { t: "t_6" }, "cjee2vdzrar5a013238njmf9q": { t: "t_6" }, "cjee2xmy9ar6v0132sidyuq3q": { t: "t_6" }, "cjee2zm3wawz50197hc9sdak3": { t: "t_6" } }, t: "t_7" }, "company": { c: { "cje0488zo5o7c0132oiefel9c": { t: "t_8" }, "cje04towv5rah0197k9el9exj": { t: "t_8" }, "cje04vz5m5odr0132aji8mn5o": { t: "t_8" }, "cje04w8ce5odx0132d4stdewu": { t: "t_8" }, "cje04xngl5oev0132q78mjs7x": { t: "t_8" }, "cje04y9p95of901326ux43mtt": { t: "t_8" }, "cje04ytu55rcn01975zpfa3se": { t: "t_8" }, "cje04zoxj5ofq01321xqp2ssm": { t: "t_8" }, "cje05chzo5om50132e3vce83t": { t: "t_8" }, "cje05h9wm5opf0132nsjg62ew": { t: "t_8" }, "cje05lcph5os50132ep6i5fet": { t: "t_8" }, "cje05q5iy5rsg0197ivn5tu12": { t: "t_8" }, "cje05sune5ovx0132qr3gh94j": { t: "t_8" }, "cje05vlud5rvt0197woxui3ua": { t: "t_8" }, "cje05zuaf5rxx01972wcisr6v": { t: "t_8" }, "cje06197o5rza0197nay1gumb": { t: "t_8" }, "cje061gvp5rze0197uw317gzx": { t: "t_8" }, "cje061njw5p11013225kkgm6v": { t: "t_8" }, "cje5r865s7kpa0197ulkdiqvw": { t: "t_8" }, "cje5rb53x7d4e0132z486agbr": { t: "t_8" }, "cje5reg8h7ktn0197sqo50x1k": { t: "t_8" }, "cje5rifi37d8o0132bwtf6tf6": { t: "t_8" }, "cje5rlkn27daf0132xi5vcu82": { t: "t_8" }, "cje5rvide7l3l01972q050p37": { t: "t_8" }, "cje5rw3wd7dgp0132uf1rg960": { t: "t_8" }, "cje5s107j7l6y0197z044hj7g": { t: "t_8" }, "cje5s37o77l7t01973lsyn4em": { t: "t_8" }, "cje5s4yz87dla0132lze24c0r": { t: "t_8" }, "cje5s7q017dmw0132nvuco6c8": { t: "t_8" }, "cje5s96a27lbk0197yjfghg37": { t: "t_8" }, "cje72fhvjz2z00118dy6xm2br": { t: "t_8" }, "cje72gy9z0rhx0168b4xycj6l": { t: "t_8" }, "cje72h2m3xooo01766om98cqx": { t: "t_8" }, "cje72h2s8y4q70137jtsl1c4g": { t: "t_8" }, "cje72h2y70rjk0168akohwv3c": { t: "t_8" }, "cje72h344zj2m016704ykurf5": { t: "t_8" }, "cje72h3cj99hq0112mp4efusj": { t: "t_8" }, "cje72h3iaz3e30118g4r93bmx": { t: "t_8" }, "cje72h3o699hu0112anschcn7": { t: "t_8" }, "cje72h3u4x66q0177qqr0dvq5": { t: "t_8" }, "cje72h4bd4byh0179i5t8bdwv": { t: "t_8" }, "cje72h4gzzj2x0167o701fgll": { t: "t_8" }, "cje72h4pix67201770pnkac57": { t: "t_8" }, "cje87whsw99170138j2s98r8m": { t: "t_8" }, "cje87wjtc7rr90190x9iforhi": { t: "t_8" }, "cje8aqbhtaq6t0138mrldvhyy": { t: "t_8" }, "cje8aqbr8hgjc0167t6rtfs1i": { t: "t_8" }, "cje8aqc04f7yg0137zky6r33b": { t: "t_8" }, "cje8bxyn56nga0140kzb7zprm": { t: "t_8" }, "cje8bxzs6htp301671fb1omuy": { t: "t_8" }, "cje8gdemw8a9f0132edepodxn": { t: "t_8" }, "cje8gnt6u851x0140mr445u0u": { t: "t_8" }, "cje8gnvk685300140ec98iga6": { t: "t_8" }, "cje8gnvwhikh60104didz1qzn": { t: "t_8" }, "cje8wdo0x93u20197pthzzai9": { t: "t_8" }, "cjee1ipxwaqim0132s4901un3": { t: "t_8" }, "cjee20trdawhc01975pk34eaa": { t: "t_8" }, "cjee2f6xjawna0197azglbe1m": { t: "t_8" }, "cjee2m0hdawqd0197vwa2qi3a": { t: "t_8" }, "cjee2sdwyar3f0132ms9l6ysi": { t: "t_8" }, "cjee2v5uear520132o0uh978h": { t: "t_8" }, "cjee2x91fawxj01975enztp05": { t: "t_8" }, "cjee2zbjcawyr0197w8xnt9qy": { t: "t_8" } }, t: "t_9" }, "login": { t: "t_10" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

if (typeof document !== 'undefined') {
  window.reactStaticGetComponentForPath = getComponentForPath;
}

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(37);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(38);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(39);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(9);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img.e1954899.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery {\n  allCommunities {\n    id\n    name\n    description\n    site\n    logo {\n      url\n    }\n  }\n}'], ['\nquery {\n  allCommunities {\n    id\n    name\n    description\n    site\n    logo {\n      url\n    }\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

var _CurrentEvent = __webpack_require__(12);

var _CurrentEvent2 = _interopRequireDefault(_CurrentEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var cardStyle = {
  width: '300px',
  maxWidth: '300px',
  maxHeight: '300px',
  height: '300px',
  overflow: 'hidden',
  marginBottom: '20px',
  justifyContent: 'center',
  alignItems: 'center'
};

var blockStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
};

var query = (0, _graphqlTag2.default)(_templateObject);

var shareBtns = function shareBtns() {
  if (typeof document !== 'undefined') {
    document.title = "Piter United";
    setTimeout(function () {
      var el = document.getElementById('pu-share');
      window.Ya.share2(el, {
        content: {
          url: "http://piter-united.ru",
          title: "Piter United",
          description: "Объединение IT-сообществ Петербурга",
          image: null
        }
      });
    }, 1000);
  }
};

var CommunityList = function (_React$Component) {
  _inherits(CommunityList, _React$Component);

  function CommunityList(props) {
    _classCallCheck(this, CommunityList);

    var _this = _possibleConstructorReturn(this, (CommunityList.__proto__ || Object.getPrototypeOf(CommunityList)).call(this, props));

    _this.state = {
      list: props.communities,
      loading: true
    };
    return _this;
  }

  _createClass(CommunityList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      shareBtns();
      _apollo2.default.query({ query: query }).then(function (_ref) {
        var allCommunities = _ref.data.allCommunities;

        _this2.setState({ list: allCommunities, loading: false });
      }).catch(function (err) {
        _this2.setState({ loading: false });
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          list = _state.list,
          loading = _state.loading;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'container main-nav' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { className: 'logo-main' },
              'Piter United'
            ),
            _react2.default.createElement(
              'span',
              null,
              '\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 IT-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432 \u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'share' },
            _react2.default.createElement('div', {
              id: 'pu-share',
              'data-services': 'gplus,facebook,vkontakte,twitter,linkedin',
              'data-lang': 'ru',
              'data-size': 'm'
            }),
            _react2.default.createElement('iframe', { title: 'Slack', src: 'https://piter-united.herokuapp.com/iframe', className: '__slackin slack' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'community-list col-md-8' },
            _react2.default.createElement(
              'h1',
              { className: 'community-list-title' },
              '\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 (28)'
            ),
            _react2.default.createElement('div', { className: 'razd-left' }),
            _react2.default.createElement(
              'ul',
              { className: 'list-unstyled' },
              list.map(function (_ref2) {
                var id = _ref2.id,
                    name = _ref2.name,
                    site = _ref2.site,
                    logo = _ref2.logo,
                    description = _ref2.description;
                return _react2.default.createElement(
                  'li',
                  { key: id, className: 'media' },
                  logo && _react2.default.createElement('img', { src: logo.url, style: { maxWidth: '64px', maxHeight: '64px' }, alt: name }),
                  _react2.default.createElement(
                    'div',
                    { className: 'media-body' },
                    _react2.default.createElement(
                      'a',
                      { className: 'community-title-link link-unstyled', target: '_blank', href: site },
                      _react2.default.createElement(
                        'h5',
                        { className: 'mt-0 mb-1 community-title' },
                        ' ',
                        name,
                        ' '
                      )
                    ),
                    _react2.default.createElement(
                      'span',
                      null,
                      ' ',
                      description,
                      ' '
                    )
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'h1',
              { className: 'community-list-title' },
              '\u0421\u043E\u0431\u044B\u0442\u0438\u044F (1)'
            ),
            _react2.default.createElement(_CurrentEvent2.default, null)
          )
        ),
        loading && _react2.default.createElement(
          'span',
          null,
          'loading...'
        )
      );
    }
  }]);

  return CommunityList;
}(_react2.default.Component);

exports.default = CommunityList;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/amount.3e07a299.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/participants.66345e8d.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
  var text = _ref.text;
  return text.split('\n').map(function (item, key) {
    return _react2.default.createElement(
      'span',
      { key: key },
      item,
      _react2.default.createElement('br', null)
    );
  });
};

exports.default = Text;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query {\n      Event(id: "', '") {\n        ', '\n      }\n    }'], ['\n    query {\n      Event(id: "', '") {\n        ', '\n      }\n    }']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

var _query = __webpack_require__(50);

var _imgWhite = __webpack_require__(51);

var _imgWhite2 = _interopRequireDefault(_imgWhite);

var _imgGreen = __webpack_require__(52);

var _imgGreen2 = _interopRequireDefault(_imgGreen);

var _EventDate = __webpack_require__(5);

var _EventDate2 = _interopRequireDefault(_EventDate);

var _EventTime = __webpack_require__(53);

var _EventTime2 = _interopRequireDefault(_EventTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PartnersList = function PartnersList(_ref) {
  var list = _ref.list;
  return list.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        site = _ref2.site,
        url = _ref2.logo.url;
    return _react2.default.createElement(
      'div',
      { key: id, className: 'partner-logo' },
      _react2.default.createElement(
        'a',
        { target: '_blank', href: site },
        _react2.default.createElement('img', { alt: title, src: url })
      )
    );
  });
};

var shareBtns = function shareBtns(event) {
  if (typeof document !== 'undefined') {
    document.title = event.name;
    setTimeout(function () {
      var el = document.getElementById('my-share');
      window.Ya.share2(el, {
        content: {
          url: location.href,
          title: event.name,
          description: event.name,
          image: event.logo && event.logo.url ? event.logo.url : null
        }
      });
    }, 1000);
  }
};

var Event = function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.state = {
      event: props.event,
      loading: true
    };
    return _this;
  }

  _createClass(Event, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.event.id;

      var query = (0, _graphqlTag2.default)(_templateObject, id, _query.eventInfo);
      _apollo2.default.query({ query: query }).then(function (_ref3) {
        var Event = _ref3.data.Event;

        _this2.setState({ event: Event });
        shareBtns(Event || _this2.props.event);
      }).catch(function (err) {
        _this2.setState({ loading: false });
        console.log(err);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var event = props.event;

      this.setState({ event: event });
    }
  }, {
    key: 'render',
    value: function render() {
      var event = this.state.event;

      if (!event) {
        return null;
      }
      var partners = [].concat(event.goldPartners, event.silverPartners, event.bronzePartners, event.infoPartners).filter(function (p) {
        return p.logo && p.logo.url;
      });

      return _react2.default.createElement(
        'div',
        { className: 'event' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid navigation' },
          _react2.default.createElement(
            _reactStatic.Link,
            { className: 'logo', to: '/' },
            'Piter United'
          ),
          _react2.default.createElement(
            'div',
            { className: 'share' },
            _react2.default.createElement('div', {
              id: 'my-share',
              'data-services': 'gplus,facebook,vkontakte,twitter,linkedin',
              'data-lang': 'ru',
              'data-size': 'm'
            }),
            _react2.default.createElement('iframe', { title: 'Slack', src: 'https://piter-united.herokuapp.com/iframe', className: '__slackin slack' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid event-info background-green' },
          _react2.default.createElement(
            'div',
            { className: 'logo-itgm-left-first d-none d-lg-block' },
            _react2.default.createElement('img', { alt: '', src: _imgWhite2.default, style: { width: '300px' } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'logo-itgm-left-second d-none d-lg-block' },
            _react2.default.createElement('img', { alt: '', src: _imgWhite2.default, style: { width: '150px' } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'logo-itgm-right-first d-none d-lg-block' },
            _react2.default.createElement('img', { alt: '', src: _imgGreen2.default, style: { width: '200px' } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'logo-itgm-right-second d-none d-lg-block' },
            _react2.default.createElement('img', { alt: '', src: _imgGreen2.default, style: { width: '150px' } })
          ),
          _react2.default.createElement(
            'h1',
            { className: 'event-title' },
            event.name
          ),
          _react2.default.createElement(
            'span',
            { className: 'event-desc' },
            '\u0421\u043B\u0435\u0442 IT-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432 \u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430'
          ),
          _react2.default.createElement('dir', { className: 'razd' }),
          _react2.default.createElement(
            'span',
            { className: 'event-date' },
            _react2.default.createElement(_EventDate2.default, { start: event.date, end: event.dateEnd })
          ),
          _react2.default.createElement(
            'span',
            { className: 'event-place' },
            event.address
          ),
          _react2.default.createElement(
            'span',
            { className: 'event-time' },
            _react2.default.createElement(_EventTime2.default, { start: event.date, end: event.dateEnd })
          ),
          event.registration && _react2.default.createElement(
            'button',
            { type: 'button', onClick: function onClick() {
                return window.open('https://piter-united.timepad.ru/event/' + event.timepadId + '/');
              }, className: 'btn btn-dark reg-button-primary' },
            '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/event/' + event.slug + '/talks', className: 'btn active programm-button', role: 'button', 'aria-pressed': 'true' },
            '\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid event-partners' },
          _react2.default.createElement(
            'div',
            { className: 'partner-logo' },
            _react2.default.createElement(
              'span',
              { className: 'partners-title' },
              '\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B:'
            )
          ),
          _react2.default.createElement(PartnersList, { list: partners }),
          _react2.default.createElement(
            'div',
            { className: 'partner-logo new' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/event/' + event.slug + '/partner', className: 'btn active new-partner', role: 'button', 'aria-pressed': 'true' },
              ' \u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C'
            )
          )
        )
      );
    }
  }]);

  return Event;
}(_react2.default.Component);

exports.default = Event;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventInfo = exports.eventInfo = "\nid\nslug\nname\ndate\ndateEnd\naddress\nphotos\nlogo {\n  url\n}\nvideo\ntemplate\ntimepadId\nregistration\nprogram {\n  time\n  title\n}\ngoldPartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}\nsilverPartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}\nbronzePartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}\ninfoPartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}";

var query = "\nquery {\n  allEvents(orderBy: date_DESC) {\n    " + eventInfo + "\n  }\n  allSpeakers {\n    id\n    name\n    social\n    company {\n      id\n      name\n    }\n    talks {\n      id\n      subject\n      description\n      event {\n        id\n        name\n      }\n      speakers {\n        id\n        name\n      }\n      community {\n        id\n        name\n      }\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n  allCommunities {\n    id\n    name\n    description\n    site\n    logo {\n      url\n    }\n  }\n  allCompanies {\n    id\n    name\n    site\n    description\n    speakers {\n      id\n      name\n      photo { url }\n    }\n    logo { url }\n    asGold {\n      id\n      name\n      date\n      dateEnd\n    }\n    asSilver {\n      id\n      name\n      date\n      dateEnd\n    }\n    asBronze {\n      id\n      name\n      date\n      dateEnd\n    }\n    asInfo {\n      id\n      name\n      date\n      dateEnd\n    }\n  }\n}";

exports.default = query;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img-white.e4ea1e05.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img-green.e7936c9f.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dateFns = __webpack_require__(7);

var _ru = __webpack_require__(13);

var _ru2 = _interopRequireDefault(_ru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventTime = function EventTime(_ref) {
  var start = _ref.start,
      end = _ref.end;

  if ((0, _dateFns.isEqual)((0, _dateFns.format)(start, 'YYYY-MM-DD'), (0, _dateFns.format)(end, 'YYYY-MM-DD'))) {
    return _react2.default.createElement(
      'span',
      null,
      ' ',
      (0, _dateFns.format)(start, 'dddd', { locale: _ru2.default }),
      '\xA0c ',
      (0, _dateFns.format)(start, 'HH:mm'),
      ' \u0434\u043E ',
      (0, _dateFns.format)(end, 'HH:mm')
    );
  }
  return _react2.default.createElement(
    'span',
    null,
    'c ',
    (0, _dateFns.format)(start, 'HH:mm DD MMMM'),
    ' \u0434\u043E ',
    (0, _dateFns.format)(end, 'HH:mm DD MMMM YYYY')
  );
};

exports.default = EventTime;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery {\n  allEvents(orderBy: date_DESC) {\n    id\n    slug\n    name\n  }\n}'], ['\nquery {\n  allEvents(orderBy: date_DESC) {\n    id\n    slug\n    name\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactStatic = __webpack_require__(1);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var query = (0, _graphqlTag2.default)(_templateObject);

var EventList = function (_React$Component) {
  _inherits(EventList, _React$Component);

  function EventList(props) {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));

    _this.state = {
      list: props.events,
      loading: true
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _apollo2.default.query({ query: query }).then(function (_ref) {
        var allEvents = _ref.data.allEvents;

        _this2.setState({ list: allEvents, loading: false });
      }).catch(function (err) {
        _this2.setState({ loading: false });
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          list = _state.list,
          loading = _state.loading;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Events list'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          null,
          list.map(function (_ref2) {
            var id = _ref2.id,
                slug = _ref2.slug,
                name = _ref2.name;
            return _react2.default.createElement(
              'li',
              { key: id },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/event/' + slug + '/' },
                name
              )
            );
          })
        ),
        loading && _react2.default.createElement(
          'span',
          null,
          'loading...'
        )
      );
    }
  }]);

  return EventList;
}(_react2.default.Component);

exports.default = EventList;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery {\n  Speaker(id: "', '") {\n    id\n    name\n    social\n    company {\n      id\n      name\n    }\n    talks {\n      id\n      subject\n      description\n      event {\n        id\n        name\n      }\n      speakers {\n        id\n        name\n      }\n      community {\n        id\n        name\n      }\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n}'], ['\nquery {\n  Speaker(id: "', '") {\n    id\n    name\n    social\n    company {\n      id\n      name\n    }\n    talks {\n      id\n      subject\n      description\n      event {\n        id\n        name\n      }\n      speakers {\n        id\n        name\n      }\n      community {\n        id\n        name\n      }\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

var _Accordion = __webpack_require__(8);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _twitter = __webpack_require__(56);

var _twitter2 = _interopRequireDefault(_twitter);

var _telegram = __webpack_require__(57);

var _telegram2 = _interopRequireDefault(_telegram);

var _vk = __webpack_require__(58);

var _vk2 = _interopRequireDefault(_vk);

var _facebook = __webpack_require__(59);

var _facebook2 = _interopRequireDefault(_facebook);

var _youtube = __webpack_require__(60);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var socialIcon = {
  marginRight: '5px'
};

var query = function query(id) {
  return (0, _graphqlTag2.default)(_templateObject, id);
};

var Speaker = function (_React$Component) {
  _inherits(Speaker, _React$Component);

  function Speaker(props) {
    _classCallCheck(this, Speaker);

    var _this = _possibleConstructorReturn(this, (Speaker.__proto__ || Object.getPrototypeOf(Speaker)).call(this, props));

    _this.state = { speaker: props.speaker, loading: true };
    return _this;
  }

  _createClass(Speaker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.state.speaker.id;

      _apollo2.default.query({ query: query(id) }).then(function (_ref) {
        var Speaker = _ref.data.Speaker;

        _this2.setState({ speaker: Speaker });
      }).catch(function (err) {
        _this2.setState({ loading: false });
        console.log(err);
      });
    }
  }, {
    key: 'speaker',
    value: function speaker(_ref2) {
      var id = _ref2.id,
          name = _ref2.name;

      return _react2.default.createElement(
        _reactStatic.Link,
        { key: id, to: '/speaker/' + id },
        name
      );
    }
  }, {
    key: 'talk',
    value: function talk(_talk) {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'card-body' },
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/event/' + _talk.event.id },
            _talk.event.name
          )
        ),
        _talk.description && _react2.default.createElement(
          'p',
          null,
          _talk.description
        ),
        _talk.speakers.length > 1 && _talk.speakers.map(function (s, i) {
          return _react2.default.createElement(
            'span',
            { key: s.id },
            _this3.speaker(s),
            i !== _talk.speakers.length - 1 && ', '
          );
        })
      );
    }
  }, {
    key: 'icons',
    value: function icons(type, login) {
      if (type === 'twitter') {
        return _react2.default.createElement(
          'span',
          { style: socialIcon },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: 'https://twitter.com/' + login },
            _react2.default.createElement('img', { alt: 'twitter', src: _twitter2.default, border: '0' })
          )
        );
      } else if (type === 'telegram') {
        return _react2.default.createElement(
          'span',
          { style: socialIcon },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: 'https://t.me/' + login },
            _react2.default.createElement('img', { alt: 'telegram', src: _telegram2.default, border: '0' })
          )
        );
      } else if (type === 'vk') {
        return _react2.default.createElement(
          'span',
          { style: socialIcon },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: 'https://vk.com/' + login },
            _react2.default.createElement('img', { alt: 'Vkontakte', src: _vk2.default, border: '0' })
          )
        );
      } else if (type === 'fb') {
        return _react2.default.createElement(
          'span',
          { style: socialIcon },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: 'https://facebook.com/' + login },
            _react2.default.createElement('img', { alt: 'facebook', src: _facebook2.default, border: '0' })
          )
        );
      } else if (type === 'youtube') {
        return _react2.default.createElement(
          'span',
          { style: socialIcon },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: 'https://youtube.com/' + login },
            _react2.default.createElement('img', { alt: 'youtube', src: _youtube2.default, border: '0' })
          )
        );
      }
    }
  }, {
    key: 'social',
    value: function social(_social) {
      var _this4 = this;

      return Object.keys(_social).map(function (s, i) {
        return _react2.default.createElement(
          'span',
          { key: i },
          _this4.icons(s, _social[s])
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var speaker = this.state.speaker;

      var items = speaker.talks.map(function (t) {
        return { title: t.subject, data: _this5.talk(t) };
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          speaker.name
        ),
        speaker.social && this.social(speaker.social),
        _react2.default.createElement(
          'h4',
          { style: { marginTop: '10px' } },
          speaker.community.map(function (c) {
            return c.name;
          }).join(', ')
        ),
        _react2.default.createElement(_Accordion2.default, { items: items })
      );
    }
  }]);

  return Speaker;
}(_react2.default.Component);

exports.default = Speaker;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEGWlDQ1BrQ0dDb2xvclNwYWNlR2VuZXJpY1JHQgAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VQNcC+8AAAHLaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPnd3dy5pbmtzY2FwZS5vcmc8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChjLVVgAAALvSURBVFgJ7VbNTxNBFP9t2+0X0AoGkY+Caf3AQIwmYKIRIb3oSaNc+Ac8a6LxRjx58UJijEZjDxxMSDQeTDgYL5JYDUaNgJyUiIiAFIpK2y2UbX3Tum23O1NLAuHSl0x2dua99/u9mTdvRvLfX05hB8W0g9hp6DKB8gps6QrYLRJaaixwWKWSc9vC07SRo2QqhYTKmzWO7XGZceWUE8cbZUiEzc71xM8N3BqJYv6XitY6C441yRj6oIDc6oRL4KRPxrlWO/qfryISL7DQmQMMPNDrglPORc16Rwg0cNGNhaiKFrcZl4dXDeDMFXcLuvbZ0g5un3elAQowdb9Xuyt04PmTNgqPgb/+nkC31wZfrTFeLoFYIhM1M75LJE7vt8KUCzCL4bRJ6Kg3Os0q/OucoOX/OLeOqdBG4RR/Bb4s5Ta/2iHhhr8Sg31unDlsB8sPTTy7zFq36PfBewXBqXWuDpf+8KSCswetOFCTA2ioMuN6lxPXKNmmVlRMLqr4s5bkOi0c/Eb6IuESOOqRMUgZ299TSRHrTdlWMGL55PQaxr9wVEy0wH3GuJOOU2+bPX2cjO42P7KiiE8SNwnHFjLJktvtzYNqFvOrKpaoiYRLgCUMOzpbISPTxf1wCTDgmy8iuDOqoNjylULwpSD7NVshgTU1Bd9uM+Yi4uXTnIi+r2YS+LxoPPv5+kICrGZPh1W0capXvgNRP0n2gbeKaDo7LiTANJ6OKXg0Hs8qb6Yz8CaGmXDx6Jk/qZRH6V4qyZ3NMi51OFCRd+mICD2ZjONeMCaa1o1z64BOg35kqj5+r7Uk8IdUdoeolSoGArVUcpurTbCYJTTQVdvjldFeQh6EYikMBKMY/cqv+SJCBgIhKhr1bhMutNvAbrH/yTJVuccTcTz7FMfahrjiifwYCDDF8dlEujXSbXeoTobHZUIT9RuqJEQowFAsidnfKt5RsWJXbOErRwTGG+cS0BR/0HOKte2UosdwO4E132UC5RX4C+8717FrGFTkAAAAAElFTkSuQmCC"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAARdQTFRFYajeYqjeYqneY6neY6nfZKrfZ6vfaKzgaq3ga63gbK7gb7DhcrHhdLLidbPidrTierbjfLfkfrjkf7jkgLnkgbrlhLvlhbzmhrzmib7mjcDnjsHnkMLokcPok8PolMTplsXpl8bpmMbpmMbqmcfqm8jqnMnqn8rroMrroszspM3sps7sqdDtrtLur9PusNPusdTvstTvtdbvt9fwuNjwudjwvdvxv9zywN3yw97yxN/zxuDzx+Dzy+L0z+T10eX10ub21ej21+n32Or32uv33Oz44e754e/54u/54/D55vH66fP66/T77PT77PX77fX78ff88vj88/j88/n99vr9+Pv++fz++vz+/f7+/f7//v7//v//////A5rdZgAAAOpJREFUGBnlwWs7wmAABuCnTWFKcsjkfAw5HyoaRcOQhiVenv//O7Qt29U2vru6b/Q1KXfxtIxfpfabJM8QLb5Y+6StgChjxy8knx9ITiMksaGz46s0+0p+JBAwVWrRZmTn2yTv0EPZNuh42xnYEuwowxeb0d7pukzFjujIw6M+sstcQLxC1zg8eUGHOBnE0BVdbRk+ZVWzyNsJIGmwS0cvWb1ZAjImf5wiaL2IbIueFQQpDWj0pRFSn9TpsRBWODDJqkVHDWGjDcFzKXlN2yEi3LMiAdKuIDmHCJlNGTa1STGCvwzvreFf+QaD0E0AgZCD7QAAAABJRU5ErkJggg=="

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAPzAAAD8wF1XGupAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQ5QTFRF////SW2SQICfSnWfUnqjT3efTXehTXagTnagTXWhTXahTXehTXahTnahTXahTXahTXahTXahTnehT3iiUHmjU3qkU3ukVHulVXylVn2mV36mXIGpXYKpXoOqY4etZomuaIuvcZG0cpK1c5O1c5S1d5a3fJu6fZu6fpy7f5y7f528g5+9i6bCjafDj6nEkKrEkarFla3HmLDJm7LKpLnPqr3SrcDUtsfZu8rbvczcvs3dxtPhytbjzNjkzdjkztnl0tzn1+Dq2eHr2uPr2+Ps4ujw4unw4+rw5evx6e7z6e706+/07PD17fH18vX48/b59Pb59ff59ff69vj6+fr8+vv8/P3+/f3+/v7/////BuTHogAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAABUklEQVQ4y4VT53rCMAw0K5skopTSQfceSRd00JbuXbqH3/9FKtkhzOD74fssnS1ZshiLkdJMy/E8xzK1FOtH1nAhhmtke9xp3Ycu+Hq605+xoQ92pu3P5WEA8rn4/EA/KqI70jYkwJZ56JAIXbzPTxb49FoDhsDA+rnDBG6KacRLYRhMAuyd3z5ezOJ+YXMr2CiQR2Mm0RnnvAEw00TeBZj6Qv4YIY/JLKJlNPB5gBOkHYAabWsihsUcwZdoOQU4QtqGyifS3ahwOMwTvEJnAnFDWGjg+rsos/QiARxS1LV3XI+rJK5CSyBDwMQT78R9MRI4MslWkBiv05HZks8kHHQpHirSaspCEco30tWsfhNdj4EsVLvU43Uh2Ie5N+J6VOrOZq3XX/jPKlb66o/z55JsVk+7izL9crlUaLVb+WHUX075adXfXj046tFTD2/y+P8DM7tgEmIgYHAAAAAASUVORK5CYII="

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAEVAAABFQEpfgIbAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAKVQTFRF////AAD/Rl2LRFWZS1qWR1WOSlqURFqWRlmTRVqVR1eURViTSFeVSVuSR1iSRlqUR1mTRliSSFqSR1mTR1iSR1qTR1mUR1mSRliTRlmTR1iSRlmUR1qTR1iUR1mTSFqTR1mTR1mUR1mTR1mUR1mTR1mTR1mUR1mTR1mTR1iTR1mTSFmTR1iTR1mUR1mTR1mTR1mSR1mTR1qTR1mTR1mTR1mTR1mTC81MmAAAADZ0Uk5TAAELDxESHyIoMDI0NTg9PlNUYGFlb3BzdHiIipefuLnBxcjM1dfY2drb3N3e3+jq6/P19/3+2Jd4mAAAAMRJREFUOMul09cSwiAQBdAVjb0XNEGNhaixF+T/P00x44hkAzN639g9LzBcAMK4kGgEZwSARNKSiACT1jDgdsBB2IEAZHhZTIIgiJNDGtzHeVBpZYEuJGlkgCk4QPMNBhnAU8t2eL1JHBzVPnf+DEywUqAkHaD8M1j6fl8Bz39mhoAaaCkioKKDugt0EFDVwRABc0p7aleglI5O+DUPrnfYu8Dub7B1gTgFhB0IszgbA3CzemsDMLO8BohUvb/qr3+YV/0fuxCrFu+iXGoAAAAASUVORK5CYII="

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD2AAAA9gFrSKqbAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAHtQTFRF/////wAA/wAA/yAA/yQS8RwO8xgM8xcM9R0K9hoJ9xkQ+B4P+B4P9RwO9R0N9R0M9hwO9hwN9RsO9hwM9hwO9x0O9x0N9xwN9RsN9hwM9hwN9xwN9xwN9RwN9hwN9hwN9hsN9hwN9hwM9hwN9hwN9hwN9hwN9hwN9hwNkZNHvgAAACh0Uk5TAAEECA4SFRYaHR8iRUpQa253hJKUl5ibn6S/0tTV4OXo7/X3+Pr7/ezzJ9gAAACSSURBVDjLzZLJEoIwEAUbFXEBjeBCEMUV8v9fyIkSDc4ctW9T6aokbx78C1G88oij7jQwlRukMgFAWLivFCFgnYCFxIkk5LKQU8pCSfMaTtndExp6w57Z9vFpvAsw3z1lARaHWhZgaRVhZERhvD5LV0w2F+mR0/TqfbMX1DG7DQSlRq0uS123Whi9cmpp9dr/nBZxkmMWe+0UsQAAAABJRU5ErkJggg=="

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery {\n  allSpeakers {\n    id\n    name\n    company {\n      id\n      name\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n}'], ['\nquery {\n  allSpeakers {\n    id\n    name\n    company {\n      id\n      name\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(4);

var _apollo2 = _interopRequireDefault(_apollo);

var _Accordion = __webpack_require__(8);

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var query = (0, _graphqlTag2.default)(_templateObject);

var SpeakerList = function (_React$Component) {
  _inherits(SpeakerList, _React$Component);

  function SpeakerList(props) {
    _classCallCheck(this, SpeakerList);

    var _this = _possibleConstructorReturn(this, (SpeakerList.__proto__ || Object.getPrototypeOf(SpeakerList)).call(this, props));

    _this.state = {
      list: {},
      loading: true
    };
    return _this;
  }

  _createClass(SpeakerList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.groupByCommunity(this.props.speakers);
      _apollo2.default.query({ query: query }).then(function (_ref) {
        var allSpeakers = _ref.data.allSpeakers;

        _this2.setState({ loading: false });
        _this2.groupByCommunity(allSpeakers);
      }).catch(function (err) {
        _this2.setState({ loading: false });
        console.log(err);
      });
    }
  }, {
    key: 'groupByCommunity',
    value: function groupByCommunity(speakers) {
      var list = {};
      speakers.forEach(function (s) {
        s.community.forEach(function (c) {
          if (c.id in list) {
            list[c.id].speakers.push(s);
          } else {
            list[c.id] = Object.assign({}, c, { speakers: [s] });
          }
        });
      });
      this.setState({ list: list });
    }
  }, {
    key: 'company',
    value: function company(_ref2) {
      var id = _ref2.id,
          name = _ref2.name;

      return _react2.default.createElement(
        _reactStatic.Link,
        { key: id, to: '/company/' + id },
        name
      );
    }
  }, {
    key: 'speaker',
    value: function speaker(_ref3) {
      var _this3 = this;

      var id = _ref3.id,
          name = _ref3.name,
          company = _ref3.company;

      return _react2.default.createElement(
        'div',
        { key: id, style: { marginLeft: '20px', marginBottom: '10px' } },
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/speaker/' + id },
            name
          ),
          '\xA0',
          company.map(function (c, i) {
            return _react2.default.createElement(
              'span',
              { key: c.id },
              i === 0 && '(',
              _this3.company(c),
              i === company.length - 1 ? ')' : ', '
            );
          })
        )
      );
    }
  }, {
    key: 'community',
    value: function community(id) {
      var _this4 = this;

      var list = this.state.list;
      var _list$id = list[id],
          name = _list$id.name,
          speakers = _list$id.speakers;


      return {
        title: name,
        data: _react2.default.createElement(
          'div',
          { className: 'card-body' },
          speakers.map(function (s) {
            return _this4.speaker(s);
          })
        )
      };
    }
  }, {
    key: 'itemsList',
    value: function itemsList() {
      var _this5 = this;

      var list = this.state.list;

      return Object.keys(list).map(function (id) {
        return _this5.community(id);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Speaker list'
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column' } },
          _react2.default.createElement(_Accordion2.default, { items: this.itemsList() })
        ),
        loading && _react2.default.createElement(
          'span',
          null,
          'loading...'
        )
      );
    }
  }]);

  return SpeakerList;
}(_react2.default.Component);

exports.default = SpeakerList;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _reducers = __webpack_require__(65);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window === 'undefined') {
  global.window = {};
}

/* eslint-disable no-underscore-dangle */
var store = (0, _redux.createStore)(_reducers2.default, {}, // initial state
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

exports.default = store;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _events = __webpack_require__(66);

var _events2 = _interopRequireDefault(_events);

var _user = __webpack_require__(67);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  events: _events2.default,
  user: _user2.default
});

exports.default = reducer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  events: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'EVENT_ADD':
      return _extends({}, state, {
        events: _extends({}, state.events, _defineProperty({}, action.event.id, action.event))
      });
    case 'EVENT_UPDATE':
      state.events[action.event.id] = action.event;
      return _extends({}, state, {
        events: state.events
      });
    case 'EVENT_DELETE':
      delete state.events[action.id];
      return _extends({}, state, {
        events: state.events
      });
    default:
      return state;
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  user: null,
  error: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'LOGIN/IN':
      return _extends({}, state, {
        error: null,
        user: action.user
      });
    case 'LOGIN/ERROR':
      return _extends({}, state, {
        user: null,
        error: action.error
      });
    case 'LOGIN/OUT':
      return _extends({}, state, {
        user: null,
        error: null
      });
    default:
      return state;
  }
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.8988c5c6.js.map