module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=34)}([function(module,exports,__webpack_require__){"use strict";var evalAllowed=!1;try{eval("evalAllowed = true")}catch(e){}var platformSupported=!!Object.setPrototypeOf&&evalAllowed;module.exports=__webpack_require__(66)},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){e.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=require("react-dom")},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(9);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(7),o=n(4),i=n(15),s=n(41),a=n(12),u=function(e,t,n){var c,l,p,f=e&u.F,d=e&u.G,_=e&u.S,h=e&u.P,m=e&u.B,y=e&u.W,v=d?o:o[t]||(o[t]={}),b=v.prototype,g=d?r:_?r[t]:(r[t]||{}).prototype;for(c in d&&(n=t),n)(l=!f&&g&&void 0!==g[c])&&a(v,c)||(p=l?g[c]:n[c],v[c]=d&&"function"!=typeof g[c]?n[c]:m&&l?i(p,r):y&&g[c]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):h&&"function"==typeof p?i(Function.call,p):p,h&&((v.virtual||(v.virtual={}))[c]=p,e&u.R&&b&&!b[c]&&s(b,c,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(22),o=n(23);e.exports=function(e){return r(o(e))}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){var r=n(40);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(8),o=n(17),i=n(19),s=Object.defineProperty;t.f=n(5)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(5)&&!n(11)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(9),o=n(7).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(9);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(43),o=n(26);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(44);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(48)("keys"),o=n(50);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){e.exports={default:n(53),__esModule:!0}},function(e,t,n){e.exports={default:n(57),__esModule:!0}},function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(2)),o=a(n(1)),i=a(n(6)),s=n(31);n(32);function a(e){return e&&e.__esModule?e:{default:e}}var u="unmounted";t.UNMOUNTED=u;var c="exited";t.EXITED=c;var l="entering";t.ENTERING=l;var p="entered";t.ENTERED=p;t.EXITING="exiting";var f=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(o=c,r.appearStatus=l):o=p:o=t.unmountOnExit||t.mountOnEnter?u:c,r.state={status:o},r.nextCallback=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.getChildContext=function(){return{transitionGroup:null}},t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===u?{status:c}:null},n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==l&&n!==p&&(t=l):n!==l&&n!==p||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=r.appear),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===l?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:u})},n.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts();t||r?(this.props.onEnter(e,o),this.safeSetState({status:l},function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i.enter,function(){n.safeSetState({status:p},function(){n.props.onEntered(e,o)})})})):this.safeSetState({status:p},function(){n.props.onEntered(e)})},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,function(){t.safeSetState({status:c},function(){t.props.onExited(e)})})})):this.safeSetState({status:c},function(){t.props.onExited(e)})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n),e?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===u)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var i=o.default.Children.only(n);return o.default.cloneElement(i,r)},t}(o.default.Component);function d(){}f.contextTypes={transitionGroup:r.object},f.childContextTypes={transitionGroup:function(){}},f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var _=(0,s.polyfill)(f);t.default=_},function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var u=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",function(){return s}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},function(e,t,n){"use strict";t.__esModule=!0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}},t.classNamesShape=t.timeoutsShape=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var o=r.default.oneOfType([r.default.number,r.default.shape({enter:r.default.number,exit:r.default.number}).isRequired]);t.timeoutsShape=o;var i=r.default.oneOfType([r.default.string,r.default.shape({enter:r.default.string,exit:r.default.string,active:r.default.string}),r.default.shape({enter:r.default.string,enterDone:r.default.string,enterActive:r.default.string,exit:r.default.string,exitDone:r.default.string,exitActive:r.default.string})]);t.classNamesShape=i},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=a(n(2)),o=a(n(1)),i=n(31),s=n(74);function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},p=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(c(c(r)));return r.state={handleExited:o,firstRender:!0},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},n.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,s.getInitialChildMapping)(e,r):(0,s.getNextChildMapping)(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=(0,s.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.setState(function(t){var n=u({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),i=l(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i:o.default.createElement(t,r,i)},t}(o.default.Component);p.childContextTypes={transitionGroup:r.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var f=(0,i.polyfill)(p);t.default=f,e.exports=t.default},function(e,t,n){"use strict";(function(e){t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(35));!function(){var t=n(0).enterModule;t&&t(e)}();var o=r.default;t.default=o,function(){var t=n(0).default,r=n(0).leaveModule;t&&(t.register(o,"default","/Users/mengff/Desktop/yonyou/github/bee-toast/src/index.js"),r(e))}()}).call(this,n(3)(e))},function(e,t,n){"use strict";(function(e){t.__esModule=!0;var r=a(n(1)),o=a(n(6)),i=a(n(36)),s=a(n(14));function a(e){return e&&e.__esModule?e:{default:e}}n(76),function(){var t=n(0).enterModule;t&&t(e)}();var u=void 0,c=void 0,l=!1,p={queue:[],append:function(e){var t=this;u?(e=this.queue.shift()||e)&&u.add(e):l||(l=!0,(c=document.createElement("div")).className="toastc",document.body.appendChild(c),o.default.render(r.default.createElement(i.default,{ref:function(e){u=e,t.consume()}}),c))},consume:function(){for(var e=this.queue,t=void 0;t=e.shift();)this.append(t)},push:function(e){this.queue.push(e),this.append(e)},info:function(e){this.push(e)},success:function(e){e.className=(0,s.default)(e.className,"t-success"),this.push(e)},warning:function(e){e.className=(0,s.default)(e.className,"t-warning"),this.push(e)},error:function(e){e.className=(0,s.default)(e.className,"t-error"),this.push(e)},close:function(e){u.removeToast({id:e})},closeAll:function(){o.default.unmountComponentAtNode(c),document.body.removeChild(c)}},f=p;t.default=f,function(){var t=n(0).default,r=n(0).leaveModule;t&&(t.register(u,"toastList","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/index.js"),t.register(c,"toastc","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/index.js"),t.register(l,"lock","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/index.js"),t.register(p,"Toast","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/index.js"),t.register(f,"default","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/index.js"),r(e))}()}).call(this,n(3)(e))},function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _assign=__webpack_require__(37),_assign2=_interopRequireDefault(_assign),_setPrototypeOf=__webpack_require__(28),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(29),_create2=_interopRequireDefault(_create),_extends=_assign2.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(6),_reactDom2=_interopRequireDefault(_reactDom),_propTypes=__webpack_require__(2),_propTypes2=_interopRequireDefault(_propTypes),_classnames=__webpack_require__(14),_classnames2=_interopRequireDefault(_classnames),_toastItem=__webpack_require__(62),_toastItem2=_interopRequireDefault(_toastItem),_reactTransitionGroup=__webpack_require__(67);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}__webpack_require__(75),function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var ToastList=function(_Component){function ToastList(e){_classCallCheck(this,ToastList);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={toasts:[]},t.toastNum=0,t.toasts=[],t.queueTimer=null,t.removeToast=t.removeToast.bind(t),t}return _inherits(ToastList,_Component),ToastList.prototype.getUUID=function(){return"t-"+(new Date).getTime()+"-"+ ++this.toastNum},ToastList.prototype.add=function(e){e.id=e.id||this.getUUID();var t=_react2.default.createElement(_toastItem2.default,_extends({seq:this.toasts.length},e,{removeToast:this.removeToast})),n=(e=t.props).transition,r=_react2.default.createElement(_reactTransitionGroup.CSSTransition,{key:e.id,timeout:300,classNames:n},t);switch(e.mode){case"queue":this.toasts.push(r),this.consumeDebounce();break;case"layout":clearTimeout(this.queueTimer),this.toasts.push(r),this.setState({toasts:this.toasts});break;default:clearTimeout(this.queueTimer),this.toasts=[r],this.setState({toasts:this.toasts})}},ToastList.prototype.consumeDebounce=function(){var e=this;clearTimeout(this.queueTimer),this.queueTimer=setTimeout(function(){e.consume()},0)},ToastList.prototype.consume=function(){for(var e=this,t=0,n=this.toasts,r=void 0;r=n.shift();)setTimeout(function(t){e.toasts=[t],e.setState({toasts:e.toasts})},t,r),t+=r.props.children.props.duration+300,setTimeout(function(t){e.toasts=[],e.setState({toasts:e.toasts})},t,r),t+=300},ToastList.prototype.removeToast=function(e){"queue"!=e.mode&&(this.toasts=this.toasts.filter(function(t){return t.key!=e.id}),this.setState({toasts:this.toasts}))},ToastList.prototype.render=function(){var e=this.state.toasts;return _react2.default.createElement("div",{className:"toasts"},_react2.default.createElement(_reactTransitionGroup.TransitionGroup,null,e))},ToastList.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},ToastList}(_react.Component),_default=ToastList;exports.default=_default,function(){var e=__webpack_require__(0).default,t=__webpack_require__(0).leaveModule;e&&(e.register(ToastList,"ToastList","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/toastList/index.js"),e.register(_default,"default","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/toastList/index.js"),t(module))}()}).call(this,__webpack_require__(3)(module))},function(e,t,n){e.exports={default:n(38),__esModule:!0}},function(e,t,n){n(39),e.exports=n(4).Object.assign},function(e,t,n){var r=n(10);r(r.S+r.F,"Object",{assign:n(42)})},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(16),o=n(20);e.exports=n(5)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";var r=n(21),o=n(51),i=n(27),s=n(52),a=n(22),u=Object.assign;e.exports=!u||n(11)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=r})?function(e,t){for(var n=s(e),u=arguments.length,c=1,l=o.f,p=i.f;u>c;)for(var f,d=a(arguments[c++]),_=l?r(d).concat(l(d)):r(d),h=_.length,m=0;h>m;)p.call(d,f=_[m++])&&(n[f]=d[f]);return n}:u},function(e,t,n){var r=n(12),o=n(13),i=n(45)(!1),s=n(25)("IE_PROTO");e.exports=function(e,t){var n,a=o(e),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;t.length>u;)r(a,n=t[u++])&&(~i(c,n)||c.push(n));return c}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(13),o=n(46),i=n(47);e.exports=function(e){return function(t,n,s){var a,u=r(t),c=o(u.length),l=i(s,c);if(e&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(24),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(24),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},function(e,t,n){var r=n(4),o=n(7),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(49)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!0},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(23);e.exports=function(e){return Object(r(e))}},function(e,t,n){n(54),e.exports=n(4).Object.setPrototypeOf},function(e,t,n){var r=n(10);r(r.S,"Object",{setPrototypeOf:n(55).set})},function(e,t,n){var r=n(9),o=n(8),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(15)(Function.call,n(56).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},function(e,t,n){var r=n(27),o=n(20),i=n(13),s=n(19),a=n(12),u=n(17),c=Object.getOwnPropertyDescriptor;t.f=n(5)?c:function(e,t){if(e=i(e),t=s(t,!0),u)try{return c(e,t)}catch(e){}if(a(e,t))return o(!r.f.call(e,t),e[t])}},function(e,t,n){n(58);var r=n(4).Object;e.exports=function(e,t){return r.create(e,t)}},function(e,t,n){var r=n(10);r(r.S,"Object",{create:n(59)})},function(e,t,n){var r=n(8),o=n(60),i=n(26),s=n(25)("IE_PROTO"),a=function(){},u=function(){var e,t=n(18)("iframe"),r=i.length;for(t.style.display="none",n(61).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[i[r]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(a.prototype=r(e),n=new a,a.prototype=null,n[s]=e):n=u(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(16),o=n(8),i=n(21);e.exports=n(5)?Object.defineProperties:function(e,t){o(e);for(var n,s=i(t),a=s.length,u=0;a>u;)r.f(e,n=s[u++],t[n]);return e}},function(e,t,n){var r=n(7).document;e.exports=r&&r.documentElement},function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(28),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(29),_create2=_interopRequireDefault(_create),_propTypes,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes2=__webpack_require__(2),_propTypes3=_interopRequireDefault(_propTypes2),_classnames=__webpack_require__(14),_classnames2=_interopRequireDefault(_classnames);__webpack_require__(63),__webpack_require__(64);var _common=__webpack_require__(65);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var propTypes=(_propTypes={id:_propTypes3.default.string,className:_propTypes3.default.string,msg:_propTypes3.default.string,horizontal:_propTypes3.default.oneOf(["left","center","right"]),vertical:_propTypes3.default.oneOf(["top","middle","bottom"]),transition:_propTypes3.default.oneOf(["fade","slide-left"]),duration:_propTypes3.default.number,mode:_propTypes3.default.string,onClose:_propTypes3.default.func,seq:_propTypes3.default.number},_propTypes.mode=_propTypes3.default.oneOf(["override","queue","layout"]),_propTypes.autoClose=_propTypes3.default.bool,_propTypes.zIndex=_propTypes3.default.number,_propTypes),defaultPropTypes={horizontal:"center",vertical:"middle",transition:"fade",duration:2e3,num:0,mode:"override",autoClose:!0,zIndex:9999},ToastItem=function(_Component){function ToastItem(e){_classCallCheck(this,ToastItem);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.state={show:!0},t.close=t.close.bind(t),t.fBuildIcon=t.fBuildIcon.bind(t),t}return _inherits(ToastItem,_Component),ToastItem.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.duration;if(t.autoClose){setTimeout(function(){e.close()},n+600)}},ToastItem.prototype.fBuildIcon=function(e){return["info","success","warning","error","hourglass","loading"].indexOf(e)>-1?"icon icon-"+e:e},ToastItem.prototype.close=function(){var e=this.props,t=e.removeToast,n=e.onClose;e.id;t(this.props),n&&n()},ToastItem.prototype.render=function(){var e=this.props,t=e.id,n=e.msg,r=e.horizontal,o=e.vertical,i=(e.duration,e.className),s=e.seq,a=(e.transition,e.mode),u=e.icon,c=e.img,l=e.zIndex,p=(0,_classnames2.default)("t-con","t-"+r,"t-"+o),f={};if(f.zIndex=l,"layout"==a){var d=100*s+50+1;(0,_common.assign)(f,{transform:"translateY(-"+d+"%)",webKitTransform:"translateY(-"+d+"%)"})}u=this.fBuildIcon(u);var _=(0,_classnames2.default)(i,"t-content"),h=(0,_classnames2.default)("t-text",{"t-text-icon":!!u||!!c});return _react2.default.createElement("div",{id:t,className:p,style:f},_react2.default.createElement("div",{className:_},c?_react2.default.createElement("img",{src:c}):"",u?_react2.default.createElement("i",{className:u}):"",_react2.default.createElement("div",{className:h},n)))},ToastItem.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},ToastItem}(_react.Component);ToastItem.propTypes=propTypes,ToastItem.defaultProps=defaultPropTypes;var _default=ToastItem;exports.default=_default,function(){var e=__webpack_require__(0).default,t=__webpack_require__(0).leaveModule;e&&(e.register(propTypes,"propTypes","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/toastItem/index.js"),e.register(defaultPropTypes,"defaultPropTypes","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/toastItem/index.js"),e.register(ToastItem,"ToastItem","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/toastItem/index.js"),e.register(_default,"default","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/toastItem/index.js"),t(module))}()}).call(this,__webpack_require__(3)(module))},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";(function(e){function r(e,t){t.forEach(function(t){e[t]=e[t].bind(e)})}function o(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}t.__esModule=!0,t.bindAll=r,t.assign=o,function(){var t=n(0).enterModule;t&&t(e)}(),function(){var t=n(0).default,i=n(0).leaveModule;t&&(t.register(r,"bindAll","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/common/index.js"),t.register(o,"assign","/Users/mengff/Desktop/yonyou/github/bee-toast/src/toast/common/index.js"),i(e))}()}).call(this,n(3)(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n(1)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);t.AppContainer=s,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},function(e,t,n){"use strict";var r=a(n(68)),o=a(n(73)),i=a(n(33)),s=a(n(30));function a(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:s.default,TransitionGroup:i.default,ReplaceTransition:o.default,CSSTransition:r.default}},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(2));var r=a(n(69)),o=a(n(72)),i=a(n(1)),s=a(n(30));n(32);function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,r.default)(e,t)})},l=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,o.default)(e,t)})},p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,r),t.props.onEnter&&t.props.onEnter(e)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e)},t.onEntered=function(e,n){var r=t.getClassNames("enter").doneClassName;t.removeClasses(e,n?"appear":"enter"),c(e,r),t.props.onEntered&&t.props.onEntered(e)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"!=typeof n?n[e]:n+"-"+e;return{className:r,activeClassName:"string"!=typeof n?n[e+"Active"]:r+"-active",doneClassName:"string"!=typeof n?n[e+"Done"]:r+"-done"}},t}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,o=n.activeClassName,i=n.doneClassName;r&&l(e,r),o&&l(e,o),i&&l(e,i)},n.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},n.render=function(){var e=u({},this.props);return delete e.classNames,i.default.createElement(s.default,u({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.default.Component);p.propTypes={};var f=p;t.default=f,e.exports=t.default},function(e,t,n){"use strict";var r=n(70);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=r(n(71));e.exports=t.default},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;s(n(2));var r=s(n(1)),o=n(6),i=s(n(33));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.handleLifecycle=function(e,t,n){var i,s=this.props.children,a=r.default.Children.toArray(s)[t];a.props[e]&&(i=a.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},n.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),s=r.default.Children.toArray(t),a=s[0],u=s[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,r.default.createElement(i.default,o,n?r.default.cloneElement(a,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(u,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},t}(r.default.Component);a.propTypes={};var u=a;t.default=u,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return o(e.children,function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:s(n,"appear",e),enter:s(n,"enter",e),exit:s(n,"exit",e)})})},t.getNextChildMapping=function(e,t,n){var a=o(e.children),u=i(t,a);return Object.keys(u).forEach(function(o){var i=u[o];if((0,r.isValidElement)(i)){var c=o in t,l=o in a,p=t[o],f=(0,r.isValidElement)(p)&&!p.props.in;!l||c&&!f?l||!c||f?l&&c&&(0,r.isValidElement)(p)&&(u[o]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:p.props.in,exit:s(i,"exit",e),enter:s(i,"enter",e)})):u[o]=(0,r.cloneElement)(i,{in:!1}):u[o]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:s(i,"exit",e),enter:s(i,"enter",e)})}}),u};var r=n(1);function o(e,t){var n=Object.create(null);return e&&r.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)}),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var a={};for(var u in t){if(o[u])for(r=0;r<o[u].length;r++){var c=o[u][r];a[o[u][r]]=n(c)}a[u]=n(u)}for(r=0;r<i.length;r++)a[i[r]]=n(i[r]);return a}function s(e,t,n){return null!=n[t]?n[t]:e.props[t]}},function(e,t,n){},function(e,t,n){}]);