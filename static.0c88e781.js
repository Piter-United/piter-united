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
/******/ 	__webpack_require__.p = "http://pu.piterjs.org/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

var _img = __webpack_require__(38);

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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__(34);

var _apolloLinkHttp = __webpack_require__(35);

var _apolloCacheInmemory = __webpack_require__(36);

var _nodeFetch = __webpack_require__(37);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dateFns = __webpack_require__(4);

var _ru = __webpack_require__(12);

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
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentEvent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery {\n  allEvents(\n    first: 1\n    orderBy: date_DESC\n  ) {\n    id\n    name\n    date\n  }\n}'], ['\nquery {\n  allEvents(\n    first: 1\n    orderBy: date_DESC\n  ) {\n    id\n    name\n    date\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _dateFns = __webpack_require__(4);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(6);

var _apollo2 = _interopRequireDefault(_apollo);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentEvent = exports.CurrentEvent = function (_React$Component) {
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
        }, 5000);
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
          'h1',
          { style: { marginTop: '20px' } },
          redirect && !window.redirected && _react2.default.createElement(_reactStatic.Redirect, { to: '/event/' + event.id }),
          'Next event: ',
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/event/' + event.id },
            event.name
          )
        );
      }
      return null;
    }
  }]);

  return CurrentEvent;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(function (_ref2) {
  var communities = _ref2.communities;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(CurrentEvent, null),
      _react2.default.createElement(
        'h2',
        null,
        'Community list'
      ),
      _react2.default.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'row' } },
        communities.map(function (_ref3) {
          var id = _ref3.id,
              name = _ref3.name,
              site = _ref3.site,
              description = _ref3.description,
              logo = _ref3.logo;
          return _react2.default.createElement(
            'div',
            {
              key: id,
              className: 'card',
              style: {
                width: '18rem',
                marginRight: '5px',
                marginLeft: '5px',
                marginBottom: '5px' }
            },
            _react2.default.createElement('img', { className: 'card-img-top', src: logo.url, alt: name }),
            _react2.default.createElement(
              'div',
              { className: 'card-body' },
              _react2.default.createElement(
                'h5',
                { className: 'cart-title' },
                _react2.default.createElement(
                  'a',
                  { href: site, target: 'blank' },
                  name
                )
              ),
              description && _react2.default.createElement(
                'p',
                { className: 'card-text' },
                description
              )
            )
          );
        })
      )
    )
  );
});

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

var _amount = __webpack_require__(39);

var _amount2 = _interopRequireDefault(_amount);

var _participants = __webpack_require__(40);

var _participants2 = _interopRequireDefault(_participants);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _EventDate = __webpack_require__(7);

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
            event.date,
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/ru");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nquery GetCommunityEventTalks($id: ID!){\n  allCommunityEventTalks(filter: {\n    event: {id: $id}\n  }) {\n    id\n    time\n    subject\n    description\n    community {\n      id\n      name\n      logo {\n        url\n      }\n    }\n    speakers {\n      id\n      name\n      social\n      company(last: 1) {\n        id\n        name\n        logo {\n          url\n        }\n      }\n      photo {\n        url\n      }\n    }\n  }\n}'], ['\nquery GetCommunityEventTalks($id: ID!){\n  allCommunityEventTalks(filter: {\n    event: {id: $id}\n  }) {\n    id\n    time\n    subject\n    description\n    community {\n      id\n      name\n      logo {\n        url\n      }\n    }\n    speakers {\n      id\n      name\n      social\n      company(last: 1) {\n        id\n        name\n        logo {\n          url\n        }\n      }\n      photo {\n        url\n      }\n    }\n  }\n}']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(14);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(2);

var _Layout2 = _interopRequireDefault(_Layout);

var _Text = __webpack_require__(41);

var _Text2 = _interopRequireDefault(_Text);

var _EventDate = __webpack_require__(7);

var _EventDate2 = _interopRequireDefault(_EventDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
    company.length && _react2.default.createElement(
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
      null,
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
  var talks = _ref3.talks,
      show = _ref3.show;

  var cls = ['collapse'];
  if (show) {
    cls.push('show');
  }
  return _react2.default.createElement(
    'div',
    { className: cls.join(' '), 'aria-labelledby': 'headingOne' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'tbody',
          null,
          talks.map(Talk)
        )
      )
    )
  );
};

var CommunityList = function (_React$Component) {
  _inherits(CommunityList, _React$Component);

  function CommunityList(props) {
    _classCallCheck(this, CommunityList);

    var _this = _possibleConstructorReturn(this, (CommunityList.__proto__ || Object.getPrototypeOf(CommunityList)).call(this, props));

    _this.state = {
      opened: [],

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
          });
        });
        st.community = data;
      }
      if (st) {
        this.setState(st);
      }
    }
  }, {
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          community = _state.community,
          opened = _state.opened,
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
      return Object.keys(community).map(function (id) {
        return _react2.default.createElement(
          'div',
          { className: 'card', key: id },
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
                    return _this2.toggle(id);
                  },
                  className: 'btn programm-item',
                  'data-toggle': 'collapse',
                  'aria-expanded': 'true',
                  'aria-controls': 'collapseOne'
                },
                opened.includes(id) ? _react2.default.createElement('span', { className: 'oi oi-chevron-bottom' }) : _react2.default.createElement('span', { className: 'oi oi-chevron-right' }),
                _react2.default.createElement(
                  'span',
                  { className: 'programm-item-title' },
                  community[id].name
                )
              )
            )
          ),
          _react2.default.createElement(TalksList, { talks: community[id].talks, show: opened.includes(id) })
        );
      });
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query {\n      Event(id: "', '") {\n        ', '\n      }\n    }'], ['\n    query {\n      Event(id: "', '") {\n        ', '\n      }\n    }']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = __webpack_require__(6);

var _apollo2 = _interopRequireDefault(_apollo);

var _query = __webpack_require__(42);

var _imgWhite = __webpack_require__(43);

var _imgWhite2 = _interopRequireDefault(_imgWhite);

var _imgGreen = __webpack_require__(44);

var _imgGreen2 = _interopRequireDefault(_imgGreen);

var _EventDate = __webpack_require__(7);

var _EventDate2 = _interopRequireDefault(_EventDate);

var _EventTime = __webpack_require__(45);

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
          image: 'http://piter-united.ru/img/red/itgm_logo.png'
        }
      });
    }, 1000);
  }
};

var Event = exports.Event = function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.state = { event: props.event };
    return _this;
  }

  _createClass(Event, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.event.id;

      var query = (0, _graphqlTag2.default)(_templateObject, id, _query.eventInfo);
      shareBtns(this.props.event);
      _apollo2.default.query({ query: query }).then(function (_ref3) {
        var Event = _ref3.data.Event;

        _this2.setState({ event: Event });
      }).catch(console.log);
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
      var partners = [].concat(event.goldPartners, event.silverPartners, event.bronzePartners, event.infoPartners);

      return _react2.default.createElement(
        'div',
        { className: 'background' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid navigation' },
          _react2.default.createElement(
            'span',
            { className: 'logo' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/' },
              'Piter United'
            )
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
          { className: 'container event-info' },
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
            { to: '/event/' + event.id + '/talks', className: 'btn active programm-button', role: 'button', 'aria-pressed': 'true' },
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
              { to: '/event/' + event.id + '/partner', className: 'btn active new-partner', role: 'button', 'aria-pressed': 'true' },
              ' \u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'background-green d-none d-lg-block' },
          _react2.default.createElement(
            'span',
            null,
            '\xA0'
          )
        ),
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
        )
      );
    }
  }]);

  return Event;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(function (_ref4) {
  var event = _ref4.event;
  return _react2.default.createElement(Event, { event: event });
});

/***/ }),
/* 16 */
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
  var events = _ref.events;
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container pt-20' },
      _react2.default.createElement(
        'h1',
        null,
        'Events list'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'ul',
        null,
        events.map(function (_ref2) {
          var id = _ref2.id,
              name = _ref2.name;
          return _react2.default.createElement(
            'li',
            { key: id },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/event/' + id + '/' },
              name
            )
          );
        })
      )
    )
  );
});

/***/ }),
/* 17 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var _ref$company = _ref.company,
      name = _ref$company.name,
      site = _ref$company.site,
      logo = _ref$company.logo;
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
      _react2.default.createElement('br', null)
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(23);

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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(24);

var _reactStaticRoutes = __webpack_require__(25);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactApollo = __webpack_require__(14);

__webpack_require__(46);

var _apollo = __webpack_require__(6);

var _apollo2 = _interopRequireDefault(_apollo);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactApollo.ApolloProvider,
    { client: _apollo2.default },
    _react2.default.createElement(
      _reactStatic.Router,
      null,
      _react2.default.createElement(_reactStaticRoutes2.default, null)
    )
  );
};
//
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(26);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(27);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(28);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _reactUniversalComponent = __webpack_require__(30);

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
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Partner',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Partner', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Partner');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Partner';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Talks',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/Talks', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Talks');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/Talks';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Event',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/Event', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Event');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/Event';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Events',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/containers/Events', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Events');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/containers/Events';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Company',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/containers/Company', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Company');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/containers/Company';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Companies',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/containers/Companies', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Companies');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/containers/Companies';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/mike1pol/work/gh/piter-united/piter-united/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
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
  t_8: t_8

  // Template Tree
};var templateTree = { c: { "404": { t: "t_8" }, "/": { t: "t_0" }, "event": { c: { "cje306m4g69or0132wphzlzqm": { c: { "partner": { t: "t_1" }, "talks": { t: "t_2" } }, t: "t_3" }, "cje04rb735oce0132m5qyv78a": { c: { "partner": { t: "t_1" }, "talks": { t: "t_2" } }, t: "t_3" } }, t: "t_4" }, "about": { t: "t_5" }, "company": { c: { "cje0488zo5o7c0132oiefel9c": { t: "t_6" }, "cje04towv5rah0197k9el9exj": { t: "t_6" }, "cje04vz5m5odr0132aji8mn5o": { t: "t_6" }, "cje04w8ce5odx0132d4stdewu": { t: "t_6" }, "cje04xngl5oev0132q78mjs7x": { t: "t_6" }, "cje04y9p95of901326ux43mtt": { t: "t_6" }, "cje04ytu55rcn01975zpfa3se": { t: "t_6" }, "cje04zoxj5ofq01321xqp2ssm": { t: "t_6" }, "cje05chzo5om50132e3vce83t": { t: "t_6" }, "cje05h9wm5opf0132nsjg62ew": { t: "t_6" }, "cje05lcph5os50132ep6i5fet": { t: "t_6" }, "cje05q5iy5rsg0197ivn5tu12": { t: "t_6" }, "cje05sune5ovx0132qr3gh94j": { t: "t_6" }, "cje05vlud5rvt0197woxui3ua": { t: "t_6" }, "cje05zuaf5rxx01972wcisr6v": { t: "t_6" }, "cje06197o5rza0197nay1gumb": { t: "t_6" }, "cje061gvp5rze0197uw317gzx": { t: "t_6" }, "cje061njw5p11013225kkgm6v": { t: "t_6" } }, t: "t_7" } }

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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(31);

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

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(33);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(8);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(8);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img.e1954899.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/amount.3e07a299.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/participants.66345e8d.png";

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventInfo = exports.eventInfo = "\nid\nname\ndate\ndateEnd\naddress\nphotos\nvideo\ntemplate\ntimepadId\nregistration\nprogram {\n  time\n  title\n}\ngoldPartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}\nsilverPartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}\nbronzePartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}\ninfoPartners {\n  id\n  name\n  site\n  logo {\n    url\n  }\n}";

var query = "\nquery {\n  allEvents(orderBy: date_DESC) {\n    " + eventInfo + "\n  }\n  allCommunities {\n    id\n    name\n    description\n    site\n    logo {\n      url\n    }\n  }\n  allCompanies {\n    id\n    name\n    site\n    description\n    speakers {\n      id\n      name\n      photo { url }\n    }\n    logo { url }\n    asGold {\n      id\n      name\n      date\n      dateEnd\n    }\n    asSilver {\n      id\n      name\n      date\n      dateEnd\n    }\n    asBronze {\n      id\n      name\n      date\n      dateEnd\n    }\n    asInfo {\n      id\n      name\n      date\n      dateEnd\n    }\n  }\n}";

exports.default = query;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img-white.e4ea1e05.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img-green.e7936c9f.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dateFns = __webpack_require__(4);

var _ru = __webpack_require__(12);

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
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.0c88e781.js.map