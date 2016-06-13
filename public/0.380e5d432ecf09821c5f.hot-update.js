webpackHotUpdate(0,Array(76).concat([
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(150); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(150);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(169);
	
	var _app = __webpack_require__(256);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(_app2.default, null), document.getElementsById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(166); if (makeExportsHot(module, __webpack_require__(150))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(170);


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */
	
	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/
	
	'use strict';
	
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactDefaultInjection = __webpack_require__(171);
	var ReactMount = __webpack_require__(87);
	var ReactReconciler = __webpack_require__(131);
	var ReactUpdates = __webpack_require__(136);
	var ReactVersion = __webpack_require__(164);
	
	var findDOMNode = __webpack_require__(253);
	var getNativeComponentFromComposite = __webpack_require__(254);
	var renderSubtreeIntoContainer = __webpack_require__(255);
	var warning = __webpack_require__(106);
	
	ReactDefaultInjection.inject();
	
	var React = {
	  findDOMNode: findDOMNode,
	  render: ReactMount.render,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  version: ReactVersion,
	
	  /* eslint-disable camelcase */
	  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
	  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};
	
	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	/* eslint-enable camelcase */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    ComponentTree: {
	      getClosestInstanceFromNode: ReactDOMComponentTree.getClosestInstanceFromNode,
	      getNodeFromInstance: function (inst) {
	        // inst is an internal instance (but could be a composite)
	        if (inst._renderedComponent) {
	          inst = getNativeComponentFromComposite(inst);
	        }
	        if (inst) {
	          return ReactDOMComponentTree.getNodeFromInstance(inst);
	        } else {
	          return null;
	        }
	      }
	    },
	    Mount: ReactMount,
	    Reconciler: ReactReconciler
	  });
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  var ExecutionEnvironment = __webpack_require__(92);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
	
	    // First check if devtools is not installed
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	      // If we're in Chrome or Firefox, provide a download link if not installed.
	      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	        // Firefox does not have the issue with devtools loaded over file://
	        var showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && navigator.userAgent.indexOf('Firefox') === -1;
	        console.debug('Download the React DevTools ' + (showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 'for a better development experience: ' + 'https://fb.me/react-devtools');
	      }
	    }
	
	    var testFunc = function testFn() {};
	    process.env.NODE_ENV !== 'production' ? warning((testFunc.name || testFunc.toString()).indexOf('testFn') !== -1, 'It looks like you\'re using a minified copy of the development build ' + 'of React. When deploying React apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See https://fb.me/react-minification for more details.') : void 0;
	
	    // If we're in IE8, check to see if we are in compatibility mode and provide
	    // information on preventing compatibility mode
	    var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
	
	    process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
	
	    var expectedFeatures = [
	    // shims
	    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim];
	
	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'One or more ES5 shims expected by React are not available: ' + 'https://fb.me/react-warning-polyfills') : void 0;
	        break;
	      }
	    }
	  }
	}
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */
	
	'use strict';
	
	var BeforeInputEventPlugin = __webpack_require__(172);
	var ChangeEventPlugin = __webpack_require__(179);
	var DefaultEventPluginOrder = __webpack_require__(182);
	var EnterLeaveEventPlugin = __webpack_require__(183);
	var HTMLDOMPropertyConfig = __webpack_require__(187);
	var ReactComponentBrowserEnvironment = __webpack_require__(188);
	var ReactDOMComponent = __webpack_require__(196);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactDOMEmptyComponent = __webpack_require__(224);
	var ReactDOMTreeTraversal = __webpack_require__(225);
	var ReactDOMTextComponent = __webpack_require__(226);
	var ReactDefaultBatchingStrategy = __webpack_require__(227);
	var ReactEventListener = __webpack_require__(228);
	var ReactInjection = __webpack_require__(231);
	var ReactReconcileTransaction = __webpack_require__(232);
	var SVGDOMPropertyConfig = __webpack_require__(240);
	var SelectEventPlugin = __webpack_require__(241);
	var SimpleEventPlugin = __webpack_require__(242);
	
	var alreadyInjected = false;
	
	function inject() {
	  if (alreadyInjected) {
	    // TODO: This is currently true because these injections are shared between
	    // the client and the server package. They should be built independently
	    // and not share any injection state. Then this problem will be solved.
	    return;
	  }
	  alreadyInjected = true;
	
	  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
	
	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
	  ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
	
	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });
	
	  ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
	
	  ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
	
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
	
	  ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
	    return new ReactDOMEmptyComponent(instantiate);
	  });
	
	  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
	  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	
	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	}
	
	module.exports = {
	  inject: inject
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(99);
	var EventPropagators = __webpack_require__(173);
	var ExecutionEnvironment = __webpack_require__(92);
	var FallbackCompositionState = __webpack_require__(174);
	var SyntheticCompositionEvent = __webpack_require__(176);
	var SyntheticInputEvent = __webpack_require__(178);
	
	var keyOf = __webpack_require__(159);
	
	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;
	
	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
	
	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}
	
	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
	
	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
	
	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}
	
	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBeforeInput: null }),
	      captured: keyOf({ onBeforeInputCapture: null })
	    },
	    dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionEnd: null }),
	      captured: keyOf({ onCompositionEndCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionStart: null }),
	      captured: keyOf({ onCompositionStartCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionUpdate: null }),
	      captured: keyOf({ onCompositionUpdateCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  }
	};
	
	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;
	
	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}
	
	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}
	
	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
	}
	
	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}
	
	// Track the current IME composition fallback object, if any.
	var currentComposition = null;
	
	/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;
	
	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }
	
	  if (!eventType) {
	    return null;
	  }
	
	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }
	
	  var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
	
	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }
	
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}
	
	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }
	
	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;
	
	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;
	
	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }
	
	      return chars;
	
	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}
	
	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }
	
	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	
	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var chars;
	
	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }
	
	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }
	
	  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
	
	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}
	
	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
	  }
	};
	
	module.exports = BeforeInputEventPlugin;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(99);
	var EventPluginHub = __webpack_require__(103);
	var EventPluginUtils = __webpack_require__(104);
	
	var accumulateInto = __webpack_require__(108);
	var forEachAccumulated = __webpack_require__(109);
	var warning = __webpack_require__(106);
	
	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;
	
	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(inst, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(inst, registrationName);
	}
	
	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(inst, upwards, event) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(inst, 'Dispatching inst must not be null') : void 0;
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(inst, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
	  }
	}
	
	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
	  }
	}
	
	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    var targetInst = event._targetInst;
	    var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
	    EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
	  }
	}
	
	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(inst, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(inst, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
	    }
	  }
	}
	
	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event._targetInst, null, event);
	  }
	}
	
	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}
	
	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}
	
	function accumulateEnterLeaveDispatches(leave, enter, from, to) {
	  EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
	}
	
	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}
	
	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};
	
	module.exports = EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var PooledClass = __webpack_require__(138);
	
	var getTextContentAccessor = __webpack_require__(175);
	
	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}
	
	_assign(FallbackCompositionState.prototype, {
	  destructor: function () {
	    this._root = null;
	    this._startText = null;
	    this._fallbackText = null;
	  },
	
	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function () {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },
	
	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function () {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }
	
	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;
	
	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }
	
	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }
	
	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});
	
	PooledClass.addPoolingTo(FallbackCompositionState);
	
	module.exports = FallbackCompositionState;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(92);
	
	var contentKey = null;
	
	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}
	
	module.exports = getTextContentAccessor;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(177);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
	
	module.exports = SyntheticCompositionEvent;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var PooledClass = __webpack_require__(138);
	
	var emptyFunction = __webpack_require__(107);
	var warning = __webpack_require__(106);
	
	var didWarnForAddedNewProperty = false;
	var isProxySupported = typeof Proxy === 'function';
	
	var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};
	
	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {*} targetInst Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @param {DOMEventTarget} nativeEventTarget Target node.
	 */
	function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
	  if (process.env.NODE_ENV !== 'production') {
	    // these have a getter/setter for warnings
	    delete this.nativeEvent;
	    delete this.preventDefault;
	    delete this.stopPropagation;
	  }
	
	  this.dispatchConfig = dispatchConfig;
	  this._targetInst = targetInst;
	  this.nativeEvent = nativeEvent;
	
	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      delete this[propName]; // this has a getter/setter for warnings
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      if (propName === 'target') {
	        this.target = nativeEventTarget;
	      } else {
	        this[propName] = nativeEvent[propName];
	      }
	    }
	  }
	
	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	  return this;
	}
	
	_assign(SyntheticEvent.prototype, {
	
	  preventDefault: function () {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }
	
	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },
	
	  stopPropagation: function () {
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }
	
	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },
	
	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function () {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },
	
	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,
	
	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function () {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      if (process.env.NODE_ENV !== 'production') {
	        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
	      } else {
	        this[propName] = null;
	      }
	    }
	    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
	      this[shouldBeReleasedProperties[i]] = null;
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      var noop = __webpack_require__(107);
	      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
	      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', noop));
	      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', noop));
	    }
	  }
	
	});
	
	SyntheticEvent.Interface = EventInterface;
	
	if (process.env.NODE_ENV !== 'production') {
	  if (isProxySupported) {
	    /*eslint-disable no-func-assign */
	    SyntheticEvent = new Proxy(SyntheticEvent, {
	      construct: function (target, args) {
	        return this.apply(target, Object.create(target.prototype), args);
	      },
	      apply: function (constructor, that, args) {
	        return new Proxy(constructor.apply(that, args), {
	          set: function (target, prop, value) {
	            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
	              process.env.NODE_ENV !== 'production' ? warning(didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
	              didWarnForAddedNewProperty = true;
	            }
	            target[prop] = value;
	            return true;
	          }
	        });
	      }
	    });
	    /*eslint-enable no-func-assign */
	  }
	}
	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;
	
	  var E = function () {};
	  E.prototype = Super.prototype;
	  var prototype = new E();
	
	  _assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;
	
	  Class.Interface = _assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;
	
	  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
	};
	
	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
	
	module.exports = SyntheticEvent;
	
	/**
	  * Helper to nullify syntheticEvent instance properties when destructing
	  *
	  * @param {object} SyntheticEvent
	  * @param {String} propName
	  * @return {object} defineProperty object
	  */
	function getPooledWarningPropertyDefinition(propName, getVal) {
	  var isFunction = typeof getVal === 'function';
	  return {
	    configurable: true,
	    set: set,
	    get: get
	  };
	
	  function set(val) {
	    var action = isFunction ? 'setting the method' : 'setting the property';
	    warn(action, 'This is effectively a no-op');
	    return val;
	  }
	
	  function get() {
	    var action = isFunction ? 'accessing the method' : 'accessing the property';
	    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
	    warn(action, result);
	    return getVal;
	  }
	
	  function warn(action, result) {
	    var warningCondition = false;
	    process.env.NODE_ENV !== 'production' ? warning(warningCondition, 'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(177);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
	
	module.exports = SyntheticInputEvent;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(99);
	var EventPluginHub = __webpack_require__(103);
	var EventPropagators = __webpack_require__(173);
	var ExecutionEnvironment = __webpack_require__(92);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactUpdates = __webpack_require__(136);
	var SyntheticEvent = __webpack_require__(177);
	
	var getEventTarget = __webpack_require__(180);
	var isEventSupported = __webpack_require__(112);
	var isTextInputElement = __webpack_require__(181);
	var keyOf = __webpack_require__(159);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onChange: null }),
	      captured: keyOf({ onChangeCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
	  }
	};
	
	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementInst = null;
	var activeElementValue = null;
	var activeElementValueProp = null;
	
	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}
	
	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
	}
	
	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(eventTypes.change, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	
	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}
	
	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue(false);
	}
	
	function startWatchingForChangeEventIE8(target, targetInst) {
	  activeElement = target;
	  activeElementInst = targetInst;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}
	
	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementInst = null;
	}
	
	function getTargetInstForChangeEvent(topLevelType, targetInst) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return targetInst;
	  }
	}
	function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(target, targetInst);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}
	
	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events.
	  // IE10+ fire input events to often, such when a placeholder
	  // changes or when an input with a placeholder is focused.
	  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 11);
	}
	
	/**
	 * (For IE <=11) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp = {
	  get: function () {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function (val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};
	
	/**
	 * (For IE <=11) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetInst) {
	  activeElement = target;
	  activeElementInst = targetInst;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
	
	  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
	  // on DOM elements
	  Object.defineProperty(activeElement, 'value', newValueProp);
	  if (activeElement.attachEvent) {
	    activeElement.attachEvent('onpropertychange', handlePropertyChange);
	  } else {
	    activeElement.addEventListener('propertychange', handlePropertyChange, false);
	  }
	}
	
	/**
	 * (For IE <=11) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }
	
	  // delete restores the original property definition
	  delete activeElement.value;
	
	  if (activeElement.detachEvent) {
	    activeElement.detachEvent('onpropertychange', handlePropertyChange);
	  } else {
	    activeElement.removeEventListener('propertychange', handlePropertyChange, false);
	  }
	
	  activeElement = null;
	  activeElementInst = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}
	
	/**
	 * (For IE <=11) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;
	
	  manualDispatchChangeEvent(nativeEvent);
	}
	
	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetInstForInputEvent(topLevelType, targetInst) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return targetInst;
	  }
	}
	
	function handleEventsForInputEventIE(topLevelType, target, targetInst) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9-11, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(target, targetInst);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}
	
	// For IE8 and IE9.
	function getTargetInstForInputEventIE(topLevelType, targetInst) {
	  if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementInst;
	    }
	  }
	}
	
	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}
	
	function getTargetInstForClickEvent(topLevelType, targetInst) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return targetInst;
	  }
	}
	
	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
	
	    var getTargetInstFunc, handleEventFunc;
	    if (shouldUseChangeEvent(targetNode)) {
	      if (doesChangeEventBubble) {
	        getTargetInstFunc = getTargetInstForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(targetNode)) {
	      if (isInputEventSupported) {
	        getTargetInstFunc = getTargetInstForInputEvent;
	      } else {
	        getTargetInstFunc = getTargetInstForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(targetNode)) {
	      getTargetInstFunc = getTargetInstForClickEvent;
	    }
	
	    if (getTargetInstFunc) {
	      var inst = getTargetInstFunc(topLevelType, targetInst);
	      if (inst) {
	        var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, nativeEventTarget);
	        event.type = 'change';
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }
	
	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, targetNode, targetInst);
	    }
	  }
	
	};
	
	module.exports = ChangeEventPlugin;

/***/ },
/* 180 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 */
	
	'use strict';
	
	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	
	  // Normalize SVG <use> element events #4963
	  if (target.correspondingUseElement) {
	    target = target.correspondingUseElement;
	  }
	
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}
	
	module.exports = getEventTarget;

/***/ },
/* 181 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */
	
	'use strict';
	
	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};
	
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
	}
	
	module.exports = isTextInputElement;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */
	
	'use strict';
	
	var keyOf = __webpack_require__(159);
	
	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];
	
	module.exports = DefaultEventPluginOrder;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(99);
	var EventPropagators = __webpack_require__(173);
	var ReactDOMComponentTree = __webpack_require__(114);
	var SyntheticMouseEvent = __webpack_require__(184);
	
	var keyOf = __webpack_require__(159);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({ onMouseEnter: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  },
	  mouseLeave: {
	    registrationName: keyOf({ onMouseLeave: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  }
	};
	
	var EnterLeaveEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   */
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }
	
	    var win;
	    if (nativeEventTarget.window === nativeEventTarget) {
	      // `nativeEventTarget` is probably a window object.
	      win = nativeEventTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = nativeEventTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }
	
	    var from;
	    var to;
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = targetInst;
	      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
	      to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
	    } else {
	      // Moving to a node from outside the window.
	      from = null;
	      to = targetInst;
	    }
	
	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }
	
	    var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
	    var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);
	
	    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = fromNode;
	    leave.relatedTarget = toNode;
	
	    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = toNode;
	    enter.relatedTarget = fromNode;
	
	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);
	
	    return [leave, enter];
	  }
	
	};
	
	module.exports = EnterLeaveEventPlugin;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(185);
	var ViewportMetrics = __webpack_require__(110);
	
	var getEventModifierState = __webpack_require__(186);
	
	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function (event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function (event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  },
	  // "Proprietary" Interface.
	  pageX: function (event) {
	    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function (event) {
	    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
	
	module.exports = SyntheticMouseEvent;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(177);
	
	var getEventTarget = __webpack_require__(180);
	
	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function (event) {
	    if (event.view) {
	      return event.view;
	    }
	
	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }
	
	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function (event) {
	    return event.detail || 0;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
	
	module.exports = SyntheticUIEvent;

/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 */
	
	'use strict';
	
	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */
	
	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};
	
	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}
	
	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}
	
	module.exports = getEventModifierState;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(95);
	
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	
	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: 0,
	    acceptCharset: 0,
	    accessKey: 0,
	    action: 0,
	    allowFullScreen: HAS_BOOLEAN_VALUE,
	    allowTransparency: 0,
	    alt: 0,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: 0,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: HAS_BOOLEAN_VALUE,
	    cellPadding: 0,
	    cellSpacing: 0,
	    charSet: 0,
	    challenge: 0,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    cite: 0,
	    classID: 0,
	    className: 0,
	    cols: HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: 0,
	    content: 0,
	    contentEditable: 0,
	    contextMenu: 0,
	    controls: HAS_BOOLEAN_VALUE,
	    coords: 0,
	    crossOrigin: 0,
	    data: 0, // For `<object />` acts as `src`.
	    dateTime: 0,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: 0,
	    disabled: HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: 0,
	    encType: 0,
	    form: 0,
	    formAction: 0,
	    formEncType: 0,
	    formMethod: 0,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: 0,
	    frameBorder: 0,
	    headers: 0,
	    height: 0,
	    hidden: HAS_BOOLEAN_VALUE,
	    high: 0,
	    href: 0,
	    hrefLang: 0,
	    htmlFor: 0,
	    httpEquiv: 0,
	    icon: 0,
	    id: 0,
	    inputMode: 0,
	    integrity: 0,
	    is: 0,
	    keyParams: 0,
	    keyType: 0,
	    kind: 0,
	    label: 0,
	    lang: 0,
	    list: 0,
	    loop: HAS_BOOLEAN_VALUE,
	    low: 0,
	    manifest: 0,
	    marginHeight: 0,
	    marginWidth: 0,
	    max: 0,
	    maxLength: 0,
	    media: 0,
	    mediaGroup: 0,
	    method: 0,
	    min: 0,
	    minLength: 0,
	    // Caution; `option.selected` is not updated if `select.multiple` is
	    // disabled with `removeAttribute`.
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: 0,
	    nonce: 0,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: 0,
	    pattern: 0,
	    placeholder: 0,
	    poster: 0,
	    preload: 0,
	    profile: 0,
	    radioGroup: 0,
	    readOnly: HAS_BOOLEAN_VALUE,
	    rel: 0,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    role: 0,
	    rows: HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: HAS_NUMERIC_VALUE,
	    sandbox: 0,
	    scope: 0,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: 0,
	    seamless: HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: 0,
	    size: HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: 0,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: 0,
	    src: 0,
	    srcDoc: 0,
	    srcLang: 0,
	    srcSet: 0,
	    start: HAS_NUMERIC_VALUE,
	    step: 0,
	    style: 0,
	    summary: 0,
	    tabIndex: 0,
	    target: 0,
	    title: 0,
	    // Setting .type throws on non-<input> tags
	    type: 0,
	    useMap: 0,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: 0,
	    wmode: 0,
	    wrap: 0,
	
	    /**
	     * RDFa Properties
	     */
	    about: 0,
	    datatype: 0,
	    inlist: 0,
	    prefix: 0,
	    // property is also supported for OpenGraph in meta tags.
	    property: 0,
	    resource: 0,
	    'typeof': 0,
	    vocab: 0,
	
	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: 0,
	    autoCorrect: 0,
	    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	    autoSave: 0,
	    // color is for Safari mask-icon link
	    color: 0,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: 0,
	    itemScope: HAS_BOOLEAN_VALUE,
	    itemType: 0,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: 0,
	    itemRef: 0,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: 0,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: 0,
	    // IE-only attribute that controls focus behavior
	    unselectable: 0
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {}
	};
	
	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */
	
	'use strict';
	
	var DOMChildrenOperations = __webpack_require__(189);
	var ReactDOMIDOperations = __webpack_require__(195);
	
	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {
	
	  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
	
	  replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup,
	
	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function (rootNodeID) {}
	
	};
	
	module.exports = ReactComponentBrowserEnvironment;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 */
	
	'use strict';
	
	var DOMLazyTree = __webpack_require__(88);
	var Danger = __webpack_require__(190);
	var ReactMultiChildUpdateTypes = __webpack_require__(194);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactInstrumentation = __webpack_require__(122);
	
	var createMicrosoftUnsafeLocalFunction = __webpack_require__(90);
	var setInnerHTML = __webpack_require__(94);
	var setTextContent = __webpack_require__(91);
	
	function getNodeAfter(parentNode, node) {
	  // Special case for text components, which return [open, close] comments
	  // from getNativeNode.
	  if (Array.isArray(node)) {
	    node = node[1];
	  }
	  return node ? node.nextSibling : parentNode.firstChild;
	}
	
	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	var insertChildAt = createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
	  // We rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
	  // we are careful to use `null`.)
	  parentNode.insertBefore(childNode, referenceNode);
	});
	
	function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
	  DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
	}
	
	function moveChild(parentNode, childNode, referenceNode) {
	  if (Array.isArray(childNode)) {
	    moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
	  } else {
	    insertChildAt(parentNode, childNode, referenceNode);
	  }
	}
	
	function removeChild(parentNode, childNode) {
	  if (Array.isArray(childNode)) {
	    var closingComment = childNode[1];
	    childNode = childNode[0];
	    removeDelimitedText(parentNode, childNode, closingComment);
	    parentNode.removeChild(closingComment);
	  }
	  parentNode.removeChild(childNode);
	}
	
	function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
	  var node = openingComment;
	  while (true) {
	    var nextNode = node.nextSibling;
	    insertChildAt(parentNode, node, referenceNode);
	    if (node === closingComment) {
	      break;
	    }
	    node = nextNode;
	  }
	}
	
	function removeDelimitedText(parentNode, startNode, closingComment) {
	  while (true) {
	    var node = startNode.nextSibling;
	    if (node === closingComment) {
	      // The closing comment is removed by ReactMultiChild.
	      break;
	    } else {
	      parentNode.removeChild(node);
	    }
	  }
	}
	
	function replaceDelimitedText(openingComment, closingComment, stringText) {
	  var parentNode = openingComment.parentNode;
	  var nodeAfterComment = openingComment.nextSibling;
	  if (nodeAfterComment === closingComment) {
	    // There are no text nodes between the opening and closing comments; insert
	    // a new one if stringText isn't empty.
	    if (stringText) {
	      insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
	    }
	  } else {
	    if (stringText) {
	      // Set the text content of the first node after the opening comment, and
	      // remove all following nodes up until the closing comment.
	      setTextContent(nodeAfterComment, stringText);
	      removeDelimitedText(parentNode, nodeAfterComment, closingComment);
	    } else {
	      removeDelimitedText(parentNode, openingComment, closingComment);
	    }
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID, 'replace text', stringText);
	  }
	}
	
	var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
	if (process.env.NODE_ENV !== 'production') {
	  dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
	    Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
	    if (prevInstance._debugID !== 0) {
	      ReactInstrumentation.debugTool.onNativeOperation(prevInstance._debugID, 'replace with', markup.toString());
	    } else {
	      var nextInstance = ReactDOMComponentTree.getInstanceFromNode(markup.node);
	      if (nextInstance._debugID !== 0) {
	        ReactInstrumentation.debugTool.onNativeOperation(nextInstance._debugID, 'mount', markup.toString());
	      }
	    }
	  };
	}
	
	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {
	
	  dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup,
	
	  replaceDelimitedText: replaceDelimitedText,
	
	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @internal
	   */
	  processUpdates: function (parentNode, updates) {
	    if (process.env.NODE_ENV !== 'production') {
	      var parentNodeDebugID = ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
	    }
	
	    for (var k = 0; k < updates.length; k++) {
	      var update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
	          if (process.env.NODE_ENV !== 'production') {
	            ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'insert child', { toIndex: update.toIndex, content: update.content.toString() });
	          }
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
	          if (process.env.NODE_ENV !== 'production') {
	            ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'move child', { fromIndex: update.fromIndex, toIndex: update.toIndex });
	          }
	          break;
	        case ReactMultiChildUpdateTypes.SET_MARKUP:
	          setInnerHTML(parentNode, update.content);
	          if (process.env.NODE_ENV !== 'production') {
	            ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'replace children', update.content.toString());
	          }
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(parentNode, update.content);
	          if (process.env.NODE_ENV !== 'production') {
	            ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'replace text', update.content.toString());
	          }
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          removeChild(parentNode, update.fromNode);
	          if (process.env.NODE_ENV !== 'production') {
	            ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'remove child', { fromIndex: update.fromIndex });
	          }
	          break;
	      }
	    }
	  }
	
	};
	
	module.exports = DOMChildrenOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 */
	
	'use strict';
	
	var DOMLazyTree = __webpack_require__(88);
	var ExecutionEnvironment = __webpack_require__(92);
	
	var createNodesFromMarkup = __webpack_require__(191);
	var emptyFunction = __webpack_require__(107);
	var getMarkupWrap = __webpack_require__(193);
	var invariant = __webpack_require__(96);
	
	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';
	
	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}
	
	var Danger = {
	
	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function (markupList) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : void 0;
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : void 0;
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];
	
	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];
	
	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP,
	          // This index will be parsed back out below.
	          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
	        }
	      }
	
	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction // Do nothing special with <script> tags.
	      );
	
	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
	
	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);
	
	          !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : void 0;
	
	          resultList[resultIndex] = renderNode;
	
	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;
	        } else if (process.env.NODE_ENV !== 'production') {
	          console.error('Danger: Discarding unexpected node:', renderNode);
	        }
	      }
	    }
	
	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : void 0;
	
	    !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : void 0;
	
	    return resultList;
	  },
	
	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : void 0;
	    !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : void 0;
	    !(oldChild.nodeName !== 'HTML') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : void 0;
	
	    if (typeof markup === 'string') {
	      var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	      oldChild.parentNode.replaceChild(newChild, oldChild);
	    } else {
	      DOMLazyTree.replaceChildWithTree(oldChild, markup);
	    }
	  }
	
	};
	
	module.exports = Danger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	/*eslint-disable fb-www/unsafe-html*/
	
	var ExecutionEnvironment = __webpack_require__(92);
	
	var createArrayFromMixed = __webpack_require__(192);
	var getMarkupWrap = __webpack_require__(193);
	var invariant = __webpack_require__(96);
	
	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
	
	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;
	
	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}
	
	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
	  var nodeName = getNodeName(markup);
	
	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];
	
	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }
	
	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }
	
	  var nodes = Array.from(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}
	
	module.exports = createNodesFromMarkup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var invariant = __webpack_require__(96);
	
	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;
	
	  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
	  // in old versions of Safari).
	  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;
	
	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;
	
	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;
	
	  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;
	
	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }
	
	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}
	
	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return(
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}
	
	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}
	
	module.exports = createArrayFromMixed;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/*eslint-disable fb-www/unsafe-html */
	
	var ExecutionEnvironment = __webpack_require__(92);
	
	var invariant = __webpack_require__(96);
	
	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
	
	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */
	
	var shouldWrap = {};
	
	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
	
	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],
	
	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],
	
	  'optgroup': selectWrap,
	  'option': selectWrap,
	
	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,
	
	  'td': trWrap,
	  'th': trWrap
	};
	
	// Initialize the SVG elements since we know they'll always need to be wrapped
	// consistently. If they are created inside a <div> they will be initialized in
	// the wrong namespace (and will not display).
	var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
	svgElements.forEach(function (nodeName) {
	  markupWrap[nodeName] = svgWrap;
	  shouldWrap[nodeName] = true;
	});
	
	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}
	
	module.exports = getMarkupWrap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(100);
	
	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  SET_MARKUP: null,
	  TEXT_CONTENT: null
	});
	
	module.exports = ReactMultiChildUpdateTypes;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 */
	
	'use strict';
	
	var DOMChildrenOperations = __webpack_require__(189);
	var ReactDOMComponentTree = __webpack_require__(114);
	
	/**
	 * Operations used to process updates to DOM nodes.
	 */
	var ReactDOMIDOperations = {
	
	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
	    var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
	    DOMChildrenOperations.processUpdates(node, updates);
	  }
	};
	
	module.exports = ReactDOMIDOperations;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var AutoFocusUtils = __webpack_require__(197);
	var CSSPropertyOperations = __webpack_require__(199);
	var DOMLazyTree = __webpack_require__(88);
	var DOMNamespaces = __webpack_require__(89);
	var DOMProperty = __webpack_require__(95);
	var DOMPropertyOperations = __webpack_require__(207);
	var EventConstants = __webpack_require__(99);
	var EventPluginHub = __webpack_require__(103);
	var EventPluginRegistry = __webpack_require__(101);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactComponentBrowserEnvironment = __webpack_require__(188);
	var ReactDOMButton = __webpack_require__(212);
	var ReactDOMComponentFlags = __webpack_require__(115);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactDOMInput = __webpack_require__(214);
	var ReactDOMOption = __webpack_require__(216);
	var ReactDOMSelect = __webpack_require__(217);
	var ReactDOMTextarea = __webpack_require__(218);
	var ReactInstrumentation = __webpack_require__(122);
	var ReactMultiChild = __webpack_require__(219);
	var ReactServerRenderingTransaction = __webpack_require__(222);
	
	var emptyFunction = __webpack_require__(107);
	var escapeTextContentForBrowser = __webpack_require__(93);
	var invariant = __webpack_require__(96);
	var isEventSupported = __webpack_require__(112);
	var keyOf = __webpack_require__(159);
	var shallowEqual = __webpack_require__(223);
	var validateDOMNesting = __webpack_require__(117);
	var warning = __webpack_require__(106);
	
	var Flags = ReactDOMComponentFlags;
	var deleteListener = EventPluginHub.deleteListener;
	var getNode = ReactDOMComponentTree.getNodeFromInstance;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = EventPluginRegistry.registrationNameModules;
	
	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = { 'string': true, 'number': true };
	
	var STYLE = keyOf({ style: null });
	var HTML = keyOf({ __html: null });
	var RESERVED_PROPS = {
	  children: null,
	  dangerouslySetInnerHTML: null,
	  suppressContentEditableWarning: null
	};
	
	// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
	var DOC_FRAGMENT_TYPE = 11;
	
	function getDeclarationErrorAddendum(internalInstance) {
	  if (internalInstance) {
	    var owner = internalInstance._currentElement._owner || null;
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' This DOM node was rendered by `' + name + '`.';
	      }
	    }
	  }
	  return '';
	}
	
	function friendlyStringify(obj) {
	  if (typeof obj === 'object') {
	    if (Array.isArray(obj)) {
	      return '[' + obj.map(friendlyStringify).join(', ') + ']';
	    } else {
	      var pairs = [];
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
	          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
	        }
	      }
	      return '{' + pairs.join(', ') + '}';
	    }
	  } else if (typeof obj === 'string') {
	    return JSON.stringify(obj);
	  } else if (typeof obj === 'function') {
	    return '[function object]';
	  }
	  // Differs from JSON.stringify in that undefined because undefined and that
	  // inf and nan don't become null
	  return String(obj);
	}
	
	var styleMutationWarning = {};
	
	function checkAndWarnForMutatedStyle(style1, style2, component) {
	  if (style1 == null || style2 == null) {
	    return;
	  }
	  if (shallowEqual(style1, style2)) {
	    return;
	  }
	
	  var componentName = component._tag;
	  var owner = component._currentElement._owner;
	  var ownerName;
	  if (owner) {
	    ownerName = owner.getName();
	  }
	
	  var hash = ownerName + '|' + componentName;
	
	  if (styleMutationWarning.hasOwnProperty(hash)) {
	    return;
	  }
	
	  styleMutationWarning[hash] = true;
	
	  process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : void 0;
	}
	
	/**
	 * @param {object} component
	 * @param {?object} props
	 */
	function assertValidProps(component, props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (voidElementTags[component._tag]) {
	    !(props.children == null && props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : invariant(false) : void 0;
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : void 0;
	    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : void 0;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
	    process.env.NODE_ENV !== 'production' ? warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
	    process.env.NODE_ENV !== 'production' ? warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
	  }
	  !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : void 0;
	}
	
	function enqueuePutListener(inst, registrationName, listener, transaction) {
	  if (transaction instanceof ReactServerRenderingTransaction) {
	    return;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : void 0;
	  }
	  var containerInfo = inst._nativeContainerInfo;
	  var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
	  var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
	  listenTo(registrationName, doc);
	  transaction.getReactMountReady().enqueue(putListener, {
	    inst: inst,
	    registrationName: registrationName,
	    listener: listener
	  });
	}
	
	function putListener() {
	  var listenerToPut = this;
	  EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
	}
	
	function optionPostMount() {
	  var inst = this;
	  ReactDOMOption.postMountWrapper(inst);
	}
	
	var setContentChildForInstrumentation = emptyFunction;
	if (process.env.NODE_ENV !== 'production') {
	  setContentChildForInstrumentation = function (contentToUse) {
	    var debugID = this._debugID;
	    var contentDebugID = debugID + '#text';
	    this._contentDebugID = contentDebugID;
	    ReactInstrumentation.debugTool.onSetDisplayName(contentDebugID, '#text');
	    ReactInstrumentation.debugTool.onSetText(contentDebugID, '' + contentToUse);
	    ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
	    ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
	  };
	}
	
	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};
	
	function trapBubbledEventsLocal() {
	  var inst = this;
	  // If a component renders to null or if another component fatals and causes
	  // the state of the tree to be corrupted, `node` here can be null.
	  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : void 0;
	  var node = getNode(inst);
	  !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : void 0;
	
	  switch (inst._tag) {
	    case 'iframe':
	    case 'object':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'video':
	    case 'audio':
	
	      inst._wrapperState.listeners = [];
	      // Create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
	        }
	      }
	
	      break;
	    case 'img':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'form':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
	      break;
	    case 'input':
	    case 'select':
	    case 'textarea':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topInvalid, 'invalid', node)];
	      break;
	  }
	}
	
	function postUpdateSelectWrapper() {
	  ReactDOMSelect.postUpdateWrapper(this);
	}
	
	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special-case tags.
	
	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	};
	
	// NOTE: menuitem's close tag should be omitted, but that causes problems.
	var newlineEatingTags = {
	  'listing': true,
	  'pre': true,
	  'textarea': true
	};
	
	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.
	
	var voidElementTags = _assign({
	  'menuitem': true
	}, omittedCloseTags);
	
	// We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name
	
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;
	
	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : void 0;
	    validatedTagCache[tag] = true;
	  }
	}
	
	function isCustomComponent(tagName, props) {
	  return tagName.indexOf('-') >= 0 || props.is != null;
	}
	
	var globalIdCounter = 1;
	
	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(element) {
	  var tag = element.type;
	  validateDangerousTag(tag);
	  this._currentElement = element;
	  this._tag = tag.toLowerCase();
	  this._namespaceURI = null;
	  this._renderedChildren = null;
	  this._previousStyle = null;
	  this._previousStyleCopy = null;
	  this._nativeNode = null;
	  this._nativeParent = null;
	  this._rootNodeID = null;
	  this._domID = null;
	  this._nativeContainerInfo = null;
	  this._wrapperState = null;
	  this._topLevelWrapper = null;
	  this._flags = 0;
	  if (process.env.NODE_ENV !== 'production') {
	    this._ancestorInfo = null;
	    this._contentDebugID = null;
	  }
	}
	
	ReactDOMComponent.displayName = 'ReactDOMComponent';
	
	ReactDOMComponent.Mixin = {
	
	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {?ReactDOMComponent} the containing DOM component instance
	   * @param {?object} info about the native container
	   * @param {object} context
	   * @return {string} The computed markup.
	   */
	  mountComponent: function (transaction, nativeParent, nativeContainerInfo, context) {
	    this._rootNodeID = globalIdCounter++;
	    this._domID = nativeContainerInfo._idCounter++;
	    this._nativeParent = nativeParent;
	    this._nativeContainerInfo = nativeContainerInfo;
	
	    var props = this._currentElement.props;
	
	    switch (this._tag) {
	      case 'iframe':
	      case 'object':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        this._wrapperState = {
	          listeners: null
	        };
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'button':
	        props = ReactDOMButton.getNativeProps(this, props, nativeParent);
	        break;
	      case 'input':
	        ReactDOMInput.mountWrapper(this, props, nativeParent);
	        props = ReactDOMInput.getNativeProps(this, props);
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'option':
	        ReactDOMOption.mountWrapper(this, props, nativeParent);
	        props = ReactDOMOption.getNativeProps(this, props);
	        break;
	      case 'select':
	        ReactDOMSelect.mountWrapper(this, props, nativeParent);
	        props = ReactDOMSelect.getNativeProps(this, props);
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.mountWrapper(this, props, nativeParent);
	        props = ReactDOMTextarea.getNativeProps(this, props);
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	    }
	
	    assertValidProps(this, props);
	
	    // We create tags in the namespace of their parent container, except HTML
	    // tags get no namespace.
	    var namespaceURI;
	    var parentTag;
	    if (nativeParent != null) {
	      namespaceURI = nativeParent._namespaceURI;
	      parentTag = nativeParent._tag;
	    } else if (nativeContainerInfo._tag) {
	      namespaceURI = nativeContainerInfo._namespaceURI;
	      parentTag = nativeContainerInfo._tag;
	    }
	    if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
	      namespaceURI = DOMNamespaces.html;
	    }
	    if (namespaceURI === DOMNamespaces.html) {
	      if (this._tag === 'svg') {
	        namespaceURI = DOMNamespaces.svg;
	      } else if (this._tag === 'math') {
	        namespaceURI = DOMNamespaces.mathml;
	      }
	    }
	    this._namespaceURI = namespaceURI;
	
	    if (process.env.NODE_ENV !== 'production') {
	      var parentInfo;
	      if (nativeParent != null) {
	        parentInfo = nativeParent._ancestorInfo;
	      } else if (nativeContainerInfo._tag) {
	        parentInfo = nativeContainerInfo._ancestorInfo;
	      }
	      if (parentInfo) {
	        // parentInfo should always be present except for the top-level
	        // component when server rendering
	        validateDOMNesting(this._tag, this, parentInfo);
	      }
	      this._ancestorInfo = validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
	    }
	
	    var mountImage;
	    if (transaction.useCreateElement) {
	      var ownerDocument = nativeContainerInfo._ownerDocument;
	      var el;
	      if (namespaceURI === DOMNamespaces.html) {
	        if (this._tag === 'script') {
	          // Create the script via .innerHTML so its "parser-inserted" flag is
	          // set to true and it does not execute
	          var div = ownerDocument.createElement('div');
	          var type = this._currentElement.type;
	          div.innerHTML = '<' + type + '></' + type + '>';
	          el = div.removeChild(div.firstChild);
	        } else {
	          el = ownerDocument.createElement(this._currentElement.type, props.is || null);
	        }
	      } else {
	        el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
	      }
	      ReactDOMComponentTree.precacheNode(this, el);
	      this._flags |= Flags.hasCachedChildNodes;
	      if (!this._nativeParent) {
	        DOMPropertyOperations.setAttributeForRoot(el);
	      }
	      this._updateDOMProperties(null, props, transaction);
	      var lazyTree = DOMLazyTree(el);
	      this._createInitialChildren(transaction, props, context, lazyTree);
	      mountImage = lazyTree;
	    } else {
	      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
	      var tagContent = this._createContentMarkup(transaction, props, context);
	      if (!tagContent && omittedCloseTags[this._tag]) {
	        mountImage = tagOpen + '/>';
	      } else {
	        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
	      }
	    }
	
	    switch (this._tag) {
	      case 'button':
	      case 'input':
	      case 'select':
	      case 'textarea':
	        if (props.autoFocus) {
	          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
	        }
	        break;
	      case 'option':
	        transaction.getReactMountReady().enqueue(optionPostMount, this);
	    }
	
	    return mountImage;
	  },
	
	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
	    var ret = '<' + this._currentElement.type;
	
	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (propValue) {
	          enqueuePutListener(this, propKey, propValue, transaction);
	        }
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            if (process.env.NODE_ENV !== 'production') {
	              // See `_updateDOMProperties`. style block
	              this._previousStyle = propValue;
	            }
	            propValue = this._previousStyleCopy = _assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
	        }
	        var markup = null;
	        if (this._tag != null && isCustomComponent(this._tag, props)) {
	          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
	            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        }
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }
	
	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret;
	    }
	
	    if (!this._nativeParent) {
	      ret += ' ' + DOMPropertyOperations.createMarkupForRoot();
	    }
	    ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
	    return ret;
	  },
	
	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function (transaction, props, context) {
	    var ret = '';
	
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        ret = innerHTML.__html;
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        ret = escapeTextContentForBrowser(contentToUse);
	        if (process.env.NODE_ENV !== 'production') {
	          setContentChildForInstrumentation.call(this, contentToUse);
	        }
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        ret = mountImages.join('');
	      }
	    }
	    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
	      // text/html ignores the first character in these tags if it's a newline
	      // Prefer to break application/xml over text/html (for now) by adding
	      // a newline specifically to get eaten by the parser. (Alternately for
	      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	      // \r is normalized out by HTMLTextAreaElement#value.)
	      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	      // See: Parsing of "textarea" "listing" and "pre" elements
	      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	      return '\n' + ret;
	    } else {
	      return ret;
	    }
	  },
	
	  _createInitialChildren: function (transaction, props, context, lazyTree) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        if (process.env.NODE_ENV !== 'production') {
	          setContentChildForInstrumentation.call(this, contentToUse);
	        }
	        DOMLazyTree.queueText(lazyTree, contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        for (var i = 0; i < mountImages.length; i++) {
	          DOMLazyTree.queueChild(lazyTree, mountImages[i]);
	        }
	      }
	    }
	  },
	
	  /**
	   * Receives a next element and updates the component.
	   *
	   * @internal
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   */
	  receiveComponent: function (nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },
	
	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevElement, nextElement, context) {
	    var lastProps = prevElement.props;
	    var nextProps = this._currentElement.props;
	
	    switch (this._tag) {
	      case 'button':
	        lastProps = ReactDOMButton.getNativeProps(this, lastProps);
	        nextProps = ReactDOMButton.getNativeProps(this, nextProps);
	        break;
	      case 'input':
	        ReactDOMInput.updateWrapper(this);
	        lastProps = ReactDOMInput.getNativeProps(this, lastProps);
	        nextProps = ReactDOMInput.getNativeProps(this, nextProps);
	        break;
	      case 'option':
	        lastProps = ReactDOMOption.getNativeProps(this, lastProps);
	        nextProps = ReactDOMOption.getNativeProps(this, nextProps);
	        break;
	      case 'select':
	        lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
	        nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.updateWrapper(this);
	        lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
	        nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
	        break;
	    }
	
	    assertValidProps(this, nextProps);
	    this._updateDOMProperties(lastProps, nextProps, transaction);
	    this._updateDOMChildren(lastProps, nextProps, transaction, context);
	
	    if (this._tag === 'select') {
	      // <select> value update needs to occur after <option> children
	      // reconciliation
	      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
	    }
	  },
	
	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {?DOMElement} node
	   */
	  _updateDOMProperties: function (lastProps, nextProps, transaction) {
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (lastProps[propKey]) {
	          // Only call deleteListener if there was a listener previously or
	          // else willDeleteListener gets called when there wasn't actually a
	          // listener (e.g., onClick={null})
	          deleteListener(this, propKey);
	        }
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          if (process.env.NODE_ENV !== 'production') {
	            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
	            this._previousStyle = nextProp;
	          }
	          nextProp = this._previousStyleCopy = _assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp) {
	          enqueuePutListener(this, propKey, nextProp, transaction);
	        } else if (lastProp) {
	          deleteListener(this, propKey);
	        }
	      } else if (isCustomComponent(this._tag, nextProps)) {
	        if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
	          DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
	        }
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        var node = getNode(this);
	        // If we're updating to null or undefined, we should remove the property
	        // from the DOM node instead of inadvertently setting to a string. This
	        // brings us in line with the same behavior we have on initial render.
	        if (nextProp != null) {
	          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
	        } else {
	          DOMPropertyOperations.deleteValueForProperty(node, propKey);
	        }
	      }
	    }
	    if (styleUpdates) {
	      CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
	    }
	  },
	
	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
	  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
	    var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
	
	    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
	
	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;
	
	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
	      }
	    }
	
	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	        if (process.env.NODE_ENV !== 'production') {
	          this._contentDebugID = this._debugID + '#text';
	          setContentChildForInstrumentation.call(this, nextContent);
	        }
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        this.updateMarkup('' + nextHtml);
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
	      }
	    } else if (nextChildren != null) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._contentDebugID) {
	          ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
	          this._contentDebugID = null;
	        }
	      }
	
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },
	
	  getNativeNode: function () {
	    return getNode(this);
	  },
	
	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function (safely) {
	    switch (this._tag) {
	      case 'iframe':
	      case 'object':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        var listeners = this._wrapperState.listeners;
	        if (listeners) {
	          for (var i = 0; i < listeners.length; i++) {
	            listeners[i].remove();
	          }
	        }
	        break;
	      case 'html':
	      case 'head':
	      case 'body':
	        /**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
	         true ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : void 0;
	        break;
	    }
	
	    this.unmountChildren(safely);
	    ReactDOMComponentTree.uncacheNode(this);
	    EventPluginHub.deleteAllListeners(this);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	    this._domID = null;
	    this._wrapperState = null;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (this._contentDebugID) {
	        ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
	        this._contentDebugID = null;
	      }
	    }
	  },
	
	  getPublicInstance: function () {
	    return getNode(this);
	  }
	
	};
	
	_assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
	
	module.exports = ReactDOMComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusUtils
	 */
	
	'use strict';
	
	var ReactDOMComponentTree = __webpack_require__(114);
	
	var focusNode = __webpack_require__(198);
	
	var AutoFocusUtils = {
	  focusDOMComponent: function () {
	    focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
	  }
	};
	
	module.exports = AutoFocusUtils;

/***/ },
/* 198 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}
	
	module.exports = focusNode;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 */
	
	'use strict';
	
	var CSSProperty = __webpack_require__(200);
	var ExecutionEnvironment = __webpack_require__(92);
	var ReactInstrumentation = __webpack_require__(122);
	
	var camelizeStyleName = __webpack_require__(201);
	var dangerousStyleValue = __webpack_require__(203);
	var hyphenateStyleName = __webpack_require__(204);
	var memoizeStringOnly = __webpack_require__(206);
	var warning = __webpack_require__(106);
	
	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});
	
	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;
	
	  var warnHyphenatedStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
	  };
	
	  var warnBadVendoredStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	  };
	
	  var warnStyleValueWithSemicolon = function (name, value, owner) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }
	
	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	  };
	
	  var warnStyleValueIsNaN = function (name, value, owner) {
	    if (warnedForNaNValue) {
	      return;
	    }
	
	    warnedForNaNValue = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	  };
	
	  var checkRenderMessage = function (owner) {
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' Check the render method of `' + name + '`.';
	      }
	    }
	    return '';
	  };
	
	  /**
	   * @param {string} name
	   * @param {*} value
	   * @param {ReactDOMComponent} component
	   */
	  var warnValidStyle = function (name, value, component) {
	    var owner;
	    if (component) {
	      owner = component._currentElement._owner;
	    }
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name, owner);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name, owner);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value, owner);
	    }
	
	    if (typeof value === 'number' && isNaN(value)) {
	      warnStyleValueIsNaN(name, value, owner);
	    }
	  };
	}
	
	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {
	
	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles, component) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue, component);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
	      }
	    }
	    return serialized || null;
	  },
	
	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
	  setValueForStyles: function (node, styles, component) {
	    if (process.env.NODE_ENV !== 'production') {
	      ReactInstrumentation.debugTool.onNativeOperation(component._debugID, 'update styles', styles);
	    }
	
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName], component);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
	      if (styleName === 'float' || styleName === 'cssFloat') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }
	
	};
	
	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 200 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */
	
	'use strict';
	
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	
	module.exports = CSSProperty;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(202);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ },
/* 202 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 */
	
	'use strict';
	
	var CSSProperty = __webpack_require__(200);
	var warning = __webpack_require__(106);
	
	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	var styleWarnings = {};
	
	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }
	
	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }
	
	  if (typeof value === 'string') {
	    if (process.env.NODE_ENV !== 'production') {
	      if (component) {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}
	
	module.exports = dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(205);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ },
/* 206 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
	
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(95);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactDOMInstrumentation = __webpack_require__(208);
	var ReactInstrumentation = __webpack_require__(122);
	
	var quoteAttributeValueForBrowser = __webpack_require__(211);
	var warning = __webpack_require__(106);
	
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	
	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
	  return false;
	}
	
	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}
	
	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {
	
	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function (id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
	  },
	
	  setAttributeForID: function (node, id) {
	    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
	  },
	
	  createMarkupForRoot: function () {
	    return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
	  },
	
	  setAttributeForRoot: function (node) {
	    node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');
	  },
	
	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function (name, value) {
	    if (process.env.NODE_ENV !== 'production') {
	      ReactDOMInstrumentation.debugTool.onCreateMarkupForProperty(name, value);
	    }
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      if (shouldIgnoreValue(propertyInfo, value)) {
	        return '';
	      }
	      var attributeName = propertyInfo.attributeName;
	      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	        return attributeName + '=""';
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    }
	    return null;
	  },
	
	  /**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
	  createMarkupForCustomAttribute: function (name, value) {
	    if (!isAttributeNameSafe(name) || value == null) {
	      return '';
	    }
	    return name + '=' + quoteAttributeValueForBrowser(value);
	  },
	
	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function (node, name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(propertyInfo, value)) {
	        this.deleteValueForProperty(node, name);
	        return;
	      } else if (propertyInfo.mustUseProperty) {
	        var propName = propertyInfo.propertyName;
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      } else {
	        var attributeName = propertyInfo.attributeName;
	        var namespace = propertyInfo.attributeNamespace;
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        if (namespace) {
	          node.setAttributeNS(namespace, attributeName, '' + value);
	        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          node.setAttribute(attributeName, '');
	        } else {
	          node.setAttribute(attributeName, '' + value);
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      DOMPropertyOperations.setValueForAttribute(node, name, value);
	      return;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      ReactDOMInstrumentation.debugTool.onSetValueForProperty(node, name, value);
	      var payload = {};
	      payload[name] = value;
	      ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'update attribute', payload);
	    }
	  },
	
	  setValueForAttribute: function (node, name, value) {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (value == null) {
	      node.removeAttribute(name);
	    } else {
	      node.setAttribute(name, '' + value);
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var payload = {};
	      payload[name] = value;
	      ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'update attribute', payload);
	    }
	  },
	
	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function (node, name) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (propertyInfo.mustUseProperty) {
	        var propName = propertyInfo.propertyName;
	        if (propertyInfo.hasBooleanValue) {
	          // No HAS_SIDE_EFFECTS logic here, only `value` has it and is string.
	          node[propName] = false;
	        } else {
	          if (!propertyInfo.hasSideEffects || '' + node[propName] !== '') {
	            node[propName] = '';
	          }
	        }
	      } else {
	        node.removeAttribute(propertyInfo.attributeName);
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      ReactDOMInstrumentation.debugTool.onDeleteValueForProperty(node, name);
	      ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'remove attribute', name);
	    }
	  }
	
	};
	
	module.exports = DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInstrumentation
	 */
	
	'use strict';
	
	var ReactDOMDebugTool = __webpack_require__(209);
	
	module.exports = { debugTool: ReactDOMDebugTool };

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMDebugTool
	 */
	
	'use strict';
	
	var ReactDOMUnknownPropertyDevtool = __webpack_require__(210);
	
	var warning = __webpack_require__(106);
	
	var eventHandlers = [];
	var handlerDoesThrowForEvent = {};
	
	function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
	  if (process.env.NODE_ENV !== 'production') {
	    eventHandlers.forEach(function (handler) {
	      try {
	        if (handler[handlerFunctionName]) {
	          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
	        }
	      } catch (e) {
	        process.env.NODE_ENV !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
	        handlerDoesThrowForEvent[handlerFunctionName] = true;
	      }
	    });
	  }
	}
	
	var ReactDOMDebugTool = {
	  addDevtool: function (devtool) {
	    eventHandlers.push(devtool);
	  },
	  removeDevtool: function (devtool) {
	    for (var i = 0; i < eventHandlers.length; i++) {
	      if (eventHandlers[i] === devtool) {
	        eventHandlers.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  onCreateMarkupForProperty: function (name, value) {
	    emitEvent('onCreateMarkupForProperty', name, value);
	  },
	  onSetValueForProperty: function (node, name, value) {
	    emitEvent('onSetValueForProperty', node, name, value);
	  },
	  onDeleteValueForProperty: function (node, name) {
	    emitEvent('onDeleteValueForProperty', node, name);
	  }
	};
	
	ReactDOMDebugTool.addDevtool(ReactDOMUnknownPropertyDevtool);
	
	module.exports = ReactDOMDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMUnknownPropertyDevtool
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(95);
	var EventPluginRegistry = __webpack_require__(101);
	
	var warning = __webpack_require__(106);
	
	if (process.env.NODE_ENV !== 'production') {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};
	
	  var warnUnknownProperty = function (name) {
	    if (DOMProperty.properties.hasOwnProperty(name) || DOMProperty.isCustomAttribute(name)) {
	      return;
	    }
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }
	
	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();
	
	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
	
	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : void 0;
	
	    var registrationName = EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;
	
	    process.env.NODE_ENV !== 'production' ? warning(registrationName == null, 'Unknown event handler property %s. Did you mean `%s`?', name, registrationName) : void 0;
	  };
	}
	
	var ReactDOMUnknownPropertyDevtool = {
	  onCreateMarkupForProperty: function (name, value) {
	    warnUnknownProperty(name);
	  },
	  onSetValueForProperty: function (node, name, value) {
	    warnUnknownProperty(name);
	  },
	  onDeleteValueForProperty: function (node, name) {
	    warnUnknownProperty(name);
	  }
	};
	
	module.exports = ReactDOMUnknownPropertyDevtool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */
	
	'use strict';
	
	var escapeTextContentForBrowser = __webpack_require__(93);
	
	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}
	
	module.exports = quoteAttributeValueForBrowser;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */
	
	'use strict';
	
	var DisabledInputUtils = __webpack_require__(213);
	
	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = {
	  getNativeProps: DisabledInputUtils.getNativeProps
	};
	
	module.exports = ReactDOMButton;

/***/ },
/* 213 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DisabledInputUtils
	 */
	
	'use strict';
	
	var disableableMouseListenerNames = {
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,
	
	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	};
	
	/**
	 * Implements a native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var DisabledInputUtils = {
	  getNativeProps: function (inst, props) {
	    if (!props.disabled) {
	      return props;
	    }
	
	    // Copy the props, except the mouse listeners
	    var nativeProps = {};
	    for (var key in props) {
	      if (!disableableMouseListenerNames[key] && props.hasOwnProperty(key)) {
	        nativeProps[key] = props[key];
	      }
	    }
	
	    return nativeProps;
	  }
	};
	
	module.exports = DisabledInputUtils;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var DisabledInputUtils = __webpack_require__(213);
	var DOMPropertyOperations = __webpack_require__(207);
	var LinkedValueUtils = __webpack_require__(215);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactUpdates = __webpack_require__(136);
	
	var invariant = __webpack_require__(96);
	var warning = __webpack_require__(106);
	
	var didWarnValueLink = false;
	var didWarnCheckedLink = false;
	var didWarnValueNull = false;
	var didWarnValueDefaultValue = false;
	var didWarnCheckedDefaultChecked = false;
	var didWarnControlledToUncontrolled = false;
	var didWarnUncontrolledToControlled = false;
	
	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMInput.updateWrapper(this);
	  }
	}
	
	function warnIfValueIsNull(props) {
	  if (props != null && props.value === null && !didWarnValueNull) {
	    process.env.NODE_ENV !== 'production' ? warning(false, '`value` prop on `input` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
	
	    didWarnValueNull = true;
	  }
	}
	
	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = {
	  getNativeProps: function (inst, props) {
	    var value = LinkedValueUtils.getValue(props);
	    var checked = LinkedValueUtils.getChecked(props);
	
	    var nativeProps = _assign({
	      // Make sure we set .type before any other properties (setting .value
	      // before .type means .value is lost in IE11 and below)
	      type: undefined
	    }, DisabledInputUtils.getNativeProps(inst, props), {
	      defaultChecked: undefined,
	      defaultValue: undefined,
	      value: value != null ? value : inst._wrapperState.initialValue,
	      checked: checked != null ? checked : inst._wrapperState.initialChecked,
	      onChange: inst._wrapperState.onChange
	    });
	
	    return nativeProps;
	  },
	
	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
	
	      var owner = inst._currentElement._owner;
	
	      if (props.valueLink !== undefined && !didWarnValueLink) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
	        didWarnValueLink = true;
	      }
	      if (props.checkedLink !== undefined && !didWarnCheckedLink) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
	        didWarnCheckedLink = true;
	      }
	      if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
	        didWarnCheckedDefaultChecked = true;
	      }
	      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
	        didWarnValueDefaultValue = true;
	      }
	      warnIfValueIsNull(props);
	    }
	
	    var defaultValue = props.defaultValue;
	    inst._wrapperState = {
	      initialChecked: props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null,
	      listeners: null,
	      onChange: _handleChange.bind(inst)
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      inst._wrapperState.controlled = props.checked !== undefined || props.value !== undefined;
	    }
	  },
	
	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	
	    if (process.env.NODE_ENV !== 'production') {
	      warnIfValueIsNull(props);
	
	      var initialValue = inst._wrapperState.initialChecked || inst._wrapperState.initialValue;
	      var defaultValue = props.defaultChecked || props.defaultValue;
	      var controlled = props.checked !== undefined || props.value !== undefined;
	      var owner = inst._currentElement._owner;
	
	      if ((initialValue || !inst._wrapperState.controlled) && controlled && !didWarnUncontrolledToControlled) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
	        didWarnUncontrolledToControlled = true;
	      }
	      if (inst._wrapperState.controlled && (defaultValue || !controlled) && !didWarnControlledToUncontrolled) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
	        didWarnControlledToUncontrolled = true;
	      }
	    }
	
	    // TODO: Shouldn't this be getChecked(props)?
	    var checked = props.checked;
	    if (checked != null) {
	      DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
	    }
	
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'value', '' + value);
	    }
	  }
	};
	
	function _handleChange(event) {
	  var props = this._currentElement.props;
	
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	
	  // Here we use asap to wait until all updates have propagated, which
	  // is important when using controlled components within layers:
	  // https://github.com/facebook/react/issues/1698
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	
	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
	    var queryRoot = rootNode;
	
	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }
	
	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form, let's just use the global
	    // `querySelectorAll` to ensure we don't miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
	
	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React radio buttons with non-React ones.
	      var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
	      !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : void 0;
	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	    }
	  }
	
	  return returnValue;
	}
	
	module.exports = ReactDOMInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 */
	
	'use strict';
	
	var ReactPropTypes = __webpack_require__(163);
	var ReactPropTypeLocations = __webpack_require__(145);
	
	var invariant = __webpack_require__(96);
	var warning = __webpack_require__(106);
	
	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};
	
	function _assertSingleLink(inputProps) {
	  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : void 0;
	}
	function _assertValueLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : void 0;
	}
	
	function _assertCheckedLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : void 0;
	}
	
	var propTypes = {
	  value: function (props, propName, componentName) {
	    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  checked: function (props, propName, componentName) {
	    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  onChange: ReactPropTypes.func
	};
	
	var loggedTypeFailures = {};
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  checkPropTypes: function (tagName, props, owner) {
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var addendum = getDeclarationErrorAddendum(owner);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
	      }
	    }
	  },
	
	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function (inputProps) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.value;
	    }
	    return inputProps.value;
	  },
	
	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function (inputProps) {
	    if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.value;
	    }
	    return inputProps.checked;
	  },
	
	  /**
	   * @param {object} inputProps Props for form component
	   * @param {SyntheticEvent} event change event to handle
	   */
	  executeOnChange: function (inputProps, event) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.requestChange(event.target.value);
	    } else if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.requestChange(event.target.checked);
	    } else if (inputProps.onChange) {
	      return inputProps.onChange.call(undefined, event);
	    }
	  }
	};
	
	module.exports = LinkedValueUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var ReactChildren = __webpack_require__(152);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactDOMSelect = __webpack_require__(217);
	
	var warning = __webpack_require__(106);
	
	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = {
	  mountWrapper: function (inst, props, nativeParent) {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
	    }
	
	    // Look up whether this option is 'selected'
	    var selectValue = null;
	    if (nativeParent != null) {
	      var selectParent = nativeParent;
	
	      if (selectParent._tag === 'optgroup') {
	        selectParent = selectParent._nativeParent;
	      }
	
	      if (selectParent != null && selectParent._tag === 'select') {
	        selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
	      }
	    }
	
	    // If the value is null (e.g., no specified value or after initial mount)
	    // or missing (e.g., for <datalist>), we don't change props.selected
	    var selected = null;
	    if (selectValue != null) {
	      selected = false;
	      if (Array.isArray(selectValue)) {
	        // multiple
	        for (var i = 0; i < selectValue.length; i++) {
	          if ('' + selectValue[i] === '' + props.value) {
	            selected = true;
	            break;
	          }
	        }
	      } else {
	        selected = '' + selectValue === '' + props.value;
	      }
	    }
	
	    inst._wrapperState = { selected: selected };
	  },
	
	  postMountWrapper: function (inst) {
	    // value="" should make a value attribute (#6219)
	    var props = inst._currentElement.props;
	    if (props.value != null) {
	      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
	      node.setAttribute('value', props.value);
	    }
	  },
	
	  getNativeProps: function (inst, props) {
	    var nativeProps = _assign({ selected: undefined, children: undefined }, props);
	
	    // Read state only from initial mount because <select> updates value
	    // manually; we need the initial state only for server rendering
	    if (inst._wrapperState.selected != null) {
	      nativeProps.selected = inst._wrapperState.selected;
	    }
	
	    var content = '';
	
	    // Flatten children and warn if they aren't strings or numbers;
	    // invalid types are ignored.
	    ReactChildren.forEach(props.children, function (child) {
	      if (child == null) {
	        return;
	      }
	      if (typeof child === 'string' || typeof child === 'number') {
	        content += child;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
	      }
	    });
	
	    if (content) {
	      nativeProps.children = content;
	    }
	
	    return nativeProps;
	  }
	
	};
	
	module.exports = ReactDOMOption;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var DisabledInputUtils = __webpack_require__(213);
	var LinkedValueUtils = __webpack_require__(215);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactUpdates = __webpack_require__(136);
	
	var warning = __webpack_require__(106);
	
	var didWarnValueLink = false;
	var didWarnValueNull = false;
	var didWarnValueDefaultValue = false;
	
	function updateOptionsIfPendingUpdateAndMounted() {
	  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
	    this._wrapperState.pendingUpdate = false;
	
	    var props = this._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);
	
	    if (value != null) {
	      updateOptions(this, Boolean(props.multiple), value);
	    }
	  }
	}
	
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	function warnIfValueIsNull(props) {
	  if (props != null && props.value === null && !didWarnValueNull) {
	    process.env.NODE_ENV !== 'production' ? warning(false, '`value` prop on `select` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
	
	    didWarnValueNull = true;
	  }
	}
	
	var valuePropNames = ['value', 'defaultValue'];
	
	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function checkSelectPropTypes(inst, props) {
	  var owner = inst._currentElement._owner;
	  LinkedValueUtils.checkPropTypes('select', props, owner);
	
	  if (props.valueLink !== undefined && !didWarnValueLink) {
	    process.env.NODE_ENV !== 'production' ? warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
	    didWarnValueLink = true;
	  }
	
	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    if (props.multiple) {
	      process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
	    } else {
	      process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
	    }
	  }
	}
	
	/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(inst, multiple, propValue) {
	  var selectedValue, i;
	  var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;
	
	  if (multiple) {
	    selectedValue = {};
	    for (i = 0; i < propValue.length; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0; i < options.length; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0; i < options.length; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}
	
	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = {
	  getNativeProps: function (inst, props) {
	    return _assign({}, DisabledInputUtils.getNativeProps(inst, props), {
	      onChange: inst._wrapperState.onChange,
	      value: undefined
	    });
	  },
	
	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      checkSelectPropTypes(inst, props);
	      warnIfValueIsNull(props);
	    }
	
	    var value = LinkedValueUtils.getValue(props);
	    inst._wrapperState = {
	      pendingUpdate: false,
	      initialValue: value != null ? value : props.defaultValue,
	      listeners: null,
	      onChange: _handleChange.bind(inst),
	      wasMultiple: Boolean(props.multiple)
	    };
	
	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
	      didWarnValueDefaultValue = true;
	    }
	  },
	
	  getSelectValueContext: function (inst) {
	    // ReactDOMOption looks at this initial value so the initial generated
	    // markup has correct `selected` attributes
	    return inst._wrapperState.initialValue;
	  },
	
	  postUpdateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	    if (process.env.NODE_ENV !== 'production') {
	      warnIfValueIsNull(props);
	    }
	
	    // After the initial mount, we control selected-ness manually so don't pass
	    // this value down
	    inst._wrapperState.initialValue = undefined;
	
	    var wasMultiple = inst._wrapperState.wasMultiple;
	    inst._wrapperState.wasMultiple = Boolean(props.multiple);
	
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      inst._wrapperState.pendingUpdate = false;
	      updateOptions(inst, Boolean(props.multiple), value);
	    } else if (wasMultiple !== Boolean(props.multiple)) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (props.defaultValue != null) {
	        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
	      }
	    }
	  }
	};
	
	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	
	  if (this._rootNodeID) {
	    this._wrapperState.pendingUpdate = true;
	  }
	  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	  return returnValue;
	}
	
	module.exports = ReactDOMSelect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var DisabledInputUtils = __webpack_require__(213);
	var DOMPropertyOperations = __webpack_require__(207);
	var LinkedValueUtils = __webpack_require__(215);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactUpdates = __webpack_require__(136);
	
	var invariant = __webpack_require__(96);
	var warning = __webpack_require__(106);
	
	var didWarnValueLink = false;
	var didWarnValueNull = false;
	var didWarnValDefaultVal = false;
	
	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMTextarea.updateWrapper(this);
	  }
	}
	
	function warnIfValueIsNull(props) {
	  if (props != null && props.value === null && !didWarnValueNull) {
	    process.env.NODE_ENV !== 'production' ? warning(false, '`value` prop on `textarea` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
	
	    didWarnValueNull = true;
	  }
	}
	
	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = {
	  getNativeProps: function (inst, props) {
	    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : void 0;
	
	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    var nativeProps = _assign({}, DisabledInputUtils.getNativeProps(inst, props), {
	      defaultValue: undefined,
	      value: undefined,
	      children: inst._wrapperState.initialValue,
	      onChange: inst._wrapperState.onChange
	    });
	
	    return nativeProps;
	  },
	
	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
	      if (props.valueLink !== undefined && !didWarnValueLink) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
	        didWarnValueLink = true;
	      }
	      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
	        didWarnValDefaultVal = true;
	      }
	      warnIfValueIsNull(props);
	    }
	
	    var defaultValue = props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = props.children;
	    if (children != null) {
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
	      }
	      !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : void 0;
	      if (Array.isArray(children)) {
	        !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : void 0;
	        children = children[0];
	      }
	
	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(props);
	    inst._wrapperState = {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue),
	      listeners: null,
	      onChange: _handleChange.bind(inst)
	    };
	  },
	
	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	
	    if (process.env.NODE_ENV !== 'production') {
	      warnIfValueIsNull(props);
	    }
	
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'value', '' + value);
	    }
	  }
	};
	
	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	  return returnValue;
	}
	
	module.exports = ReactDOMTextarea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 */
	
	'use strict';
	
	var ReactComponentEnvironment = __webpack_require__(143);
	var ReactInstrumentation = __webpack_require__(122);
	var ReactMultiChildUpdateTypes = __webpack_require__(194);
	
	var ReactCurrentOwner = __webpack_require__(113);
	var ReactReconciler = __webpack_require__(131);
	var ReactChildReconciler = __webpack_require__(220);
	
	var emptyFunction = __webpack_require__(107);
	var flattenChildren = __webpack_require__(221);
	var invariant = __webpack_require__(96);
	
	/**
	 * Make an update for markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function makeInsertMarkup(markup, afterNode, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  return {
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    content: markup,
	    fromIndex: null,
	    fromNode: null,
	    toIndex: toIndex,
	    afterNode: afterNode
	  };
	}
	
	/**
	 * Make an update for moving an existing element to another index.
	 *
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function makeMove(child, afterNode, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  return {
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    content: null,
	    fromIndex: child._mountIndex,
	    fromNode: ReactReconciler.getNativeNode(child),
	    toIndex: toIndex,
	    afterNode: afterNode
	  };
	}
	
	/**
	 * Make an update for removing an element at an index.
	 *
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function makeRemove(child, node) {
	  // NOTE: Null values reduce hidden classes.
	  return {
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    content: null,
	    fromIndex: child._mountIndex,
	    fromNode: node,
	    toIndex: null,
	    afterNode: null
	  };
	}
	
	/**
	 * Make an update for setting the markup of a node.
	 *
	 * @param {string} markup Markup that renders into an element.
	 * @private
	 */
	function makeSetMarkup(markup) {
	  // NOTE: Null values reduce hidden classes.
	  return {
	    type: ReactMultiChildUpdateTypes.SET_MARKUP,
	    content: markup,
	    fromIndex: null,
	    fromNode: null,
	    toIndex: null,
	    afterNode: null
	  };
	}
	
	/**
	 * Make an update for setting the text content.
	 *
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function makeTextContent(textContent) {
	  // NOTE: Null values reduce hidden classes.
	  return {
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    content: textContent,
	    fromIndex: null,
	    fromNode: null,
	    toIndex: null,
	    afterNode: null
	  };
	}
	
	/**
	 * Push an update, if any, onto the queue. Creates a new queue if none is
	 * passed and always returns the queue. Mutative.
	 */
	function enqueue(queue, update) {
	  if (update) {
	    queue = queue || [];
	    queue.push(update);
	  }
	  return queue;
	}
	
	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue(inst, updateQueue) {
	  ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
	}
	
	var setChildrenForInstrumentation = emptyFunction;
	if (process.env.NODE_ENV !== 'production') {
	  setChildrenForInstrumentation = function (children) {
	    ReactInstrumentation.debugTool.onSetChildren(this._debugID, children ? Object.keys(children).map(function (key) {
	      return children[key]._debugID;
	    }) : []);
	  };
	}
	
	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {
	
	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {
	
	    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	        }
	      }
	      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	    },
	
	    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, removedNodes, transaction, context) {
	      var nextChildren;
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            nextChildren = flattenChildren(nextNestedChildrenElements);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	          ReactChildReconciler.updateChildren(prevChildren, nextChildren, removedNodes, transaction, context);
	          return nextChildren;
	        }
	      }
	      nextChildren = flattenChildren(nextNestedChildrenElements);
	      ReactChildReconciler.updateChildren(prevChildren, nextChildren, removedNodes, transaction, context);
	      return nextChildren;
	    },
	
	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function (nestedChildren, transaction, context) {
	      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
	      this._renderedChildren = children;
	
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._nativeContainerInfo, context);
	          child._mountIndex = index++;
	          mountImages.push(mountImage);
	        }
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        setChildrenForInstrumentation.call(this, children);
	      }
	
	      return mountImages;
	    },
	
	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function (nextContent) {
	      var prevChildren = this._renderedChildren;
	      // Remove any rendered children.
	      ReactChildReconciler.unmountChildren(prevChildren, false);
	      for (var name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name)) {
	           true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : invariant(false) : void 0;
	        }
	      }
	      // Set new text content.
	      var updates = [makeTextContent(nextContent)];
	      processQueue(this, updates);
	    },
	
	    /**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
	    updateMarkup: function (nextMarkup) {
	      var prevChildren = this._renderedChildren;
	      // Remove any rendered children.
	      ReactChildReconciler.unmountChildren(prevChildren, false);
	      for (var name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name)) {
	           true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : invariant(false) : void 0;
	        }
	      }
	      var updates = [makeSetMarkup(nextMarkup)];
	      processQueue(this, updates);
	    },
	
	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      // Hook used by React ART
	      this._updateChildren(nextNestedChildrenElements, transaction, context);
	    },
	
	    /**
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var removedNodes = {};
	      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, removedNodes, transaction, context);
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var updates = null;
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      var lastPlacedNode = null;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            // The `removedNodes` loop below will actually remove the child.
	          }
	          // The child must be instantiated before it's mounted.
	          updates = enqueue(updates, this._mountChildAtIndex(nextChild, lastPlacedNode, nextIndex, transaction, context));
	        }
	        nextIndex++;
	        lastPlacedNode = ReactReconciler.getNativeNode(nextChild);
	      }
	      // Remove children that are no longer present.
	      for (name in removedNodes) {
	        if (removedNodes.hasOwnProperty(name)) {
	          updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
	        }
	      }
	      if (updates) {
	        processQueue(this, updates);
	      }
	      this._renderedChildren = nextChildren;
	
	      if (process.env.NODE_ENV !== 'production') {
	        setChildrenForInstrumentation.call(this, nextChildren);
	      }
	    },
	
	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted. It does not actually perform any
	     * backend operations.
	     *
	     * @internal
	     */
	    unmountChildren: function (safely) {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren, safely);
	      this._renderedChildren = null;
	    },
	
	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function (child, afterNode, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        return makeMove(child, afterNode, toIndex);
	      }
	    },
	
	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function (child, afterNode, mountImage) {
	      return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
	    },
	
	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function (child, node) {
	      return makeRemove(child, node);
	    },
	
	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildAtIndex: function (child, afterNode, index, transaction, context) {
	      var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._nativeContainerInfo, context);
	      child._mountIndex = index;
	      return this.createChild(child, afterNode, mountImage);
	    },
	
	    /**
	     * Unmounts a rendered child.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @private
	     */
	    _unmountChild: function (child, node) {
	      var update = this.removeChild(child, node);
	      child._mountIndex = null;
	      return update;
	    }
	
	  }
	
	};
	
	module.exports = ReactMultiChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 */
	
	'use strict';
	
	var ReactReconciler = __webpack_require__(131);
	
	var instantiateReactComponent = __webpack_require__(141);
	var KeyEscapeUtils = __webpack_require__(155);
	var shouldUpdateReactComponent = __webpack_require__(147);
	var traverseAllChildren = __webpack_require__(153);
	var warning = __webpack_require__(106);
	
	function instantiateChild(childInstances, child, name) {
	  // We found a component instance.
	  var keyUnique = childInstances[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', KeyEscapeUtils.unescape(name)) : void 0;
	  }
	  if (child != null && keyUnique) {
	    childInstances[name] = instantiateReactComponent(child);
	  }
	}
	
	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {
	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function (nestedChildNodes, transaction, context) {
	    if (nestedChildNodes == null) {
	      return null;
	    }
	    var childInstances = {};
	    traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
	    return childInstances;
	  },
	
	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextChildren Flat child element maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function (prevChildren, nextChildren, removedNodes, transaction, context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    if (!nextChildren && !prevChildren) {
	      return;
	    }
	    var name;
	    var prevChild;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          removedNodes[name] = ReactReconciler.getNativeNode(prevChild);
	          ReactReconciler.unmountComponent(prevChild, false);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(nextElement);
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        prevChild = prevChildren[name];
	        removedNodes[name] = ReactReconciler.getNativeNode(prevChild);
	        ReactReconciler.unmountComponent(prevChild, false);
	      }
	    }
	  },
	
	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function (renderedChildren, safely) {
	    for (var name in renderedChildren) {
	      if (renderedChildren.hasOwnProperty(name)) {
	        var renderedChild = renderedChildren[name];
	        ReactReconciler.unmountComponent(renderedChild, safely);
	      }
	    }
	  }
	
	};
	
	module.exports = ReactChildReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */
	
	'use strict';
	
	var KeyEscapeUtils = __webpack_require__(155);
	var traverseAllChildren = __webpack_require__(153);
	var warning = __webpack_require__(106);
	
	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = result[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', KeyEscapeUtils.unescape(name)) : void 0;
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}
	
	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}
	
	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var PooledClass = __webpack_require__(138);
	var Transaction = __webpack_require__(139);
	
	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [];
	
	var noopCallbackQueue = {
	  enqueue: function () {}
	};
	
	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.useCreateElement = false;
	}
	
	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return noopCallbackQueue;
	  },
	
	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {},
	
	  checkpoint: function () {},
	
	  rollback: function () {}
	};
	
	_assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
	
	PooledClass.addPoolingTo(ReactServerRenderingTransaction);
	
	module.exports = ReactServerRenderingTransaction;

/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMEmptyComponent
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var DOMLazyTree = __webpack_require__(88);
	var ReactDOMComponentTree = __webpack_require__(114);
	
	var ReactDOMEmptyComponent = function (instantiate) {
	  // ReactCompositeComponent uses this:
	  this._currentElement = null;
	  // ReactDOMComponentTree uses these:
	  this._nativeNode = null;
	  this._nativeParent = null;
	  this._nativeContainerInfo = null;
	  this._domID = null;
	};
	_assign(ReactDOMEmptyComponent.prototype, {
	  mountComponent: function (transaction, nativeParent, nativeContainerInfo, context) {
	    var domID = nativeContainerInfo._idCounter++;
	    this._domID = domID;
	    this._nativeParent = nativeParent;
	    this._nativeContainerInfo = nativeContainerInfo;
	
	    var nodeValue = ' react-empty: ' + this._domID + ' ';
	    if (transaction.useCreateElement) {
	      var ownerDocument = nativeContainerInfo._ownerDocument;
	      var node = ownerDocument.createComment(nodeValue);
	      ReactDOMComponentTree.precacheNode(this, node);
	      return DOMLazyTree(node);
	    } else {
	      if (transaction.renderToStaticMarkup) {
	        // Normally we'd insert a comment node, but since this is a situation
	        // where React won't take over (static pages), we can simply return
	        // nothing.
	        return '';
	      }
	      return '<!--' + nodeValue + '-->';
	    }
	  },
	  receiveComponent: function () {},
	  getNativeNode: function () {
	    return ReactDOMComponentTree.getNodeFromInstance(this);
	  },
	  unmountComponent: function () {
	    ReactDOMComponentTree.uncacheNode(this);
	  }
	});
	
	module.exports = ReactDOMEmptyComponent;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTreeTraversal
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(96);
	
	/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */
	function getLowestCommonAncestor(instA, instB) {
	  !('_nativeNode' in instA) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
	  !('_nativeNode' in instB) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
	
	  var depthA = 0;
	  for (var tempA = instA; tempA; tempA = tempA._nativeParent) {
	    depthA++;
	  }
	  var depthB = 0;
	  for (var tempB = instB; tempB; tempB = tempB._nativeParent) {
	    depthB++;
	  }
	
	  // If A is deeper, crawl up.
	  while (depthA - depthB > 0) {
	    instA = instA._nativeParent;
	    depthA--;
	  }
	
	  // If B is deeper, crawl up.
	  while (depthB - depthA > 0) {
	    instB = instB._nativeParent;
	    depthB--;
	  }
	
	  // Walk in lockstep until we find a match.
	  var depth = depthA;
	  while (depth--) {
	    if (instA === instB) {
	      return instA;
	    }
	    instA = instA._nativeParent;
	    instB = instB._nativeParent;
	  }
	  return null;
	}
	
	/**
	 * Return if A is an ancestor of B.
	 */
	function isAncestor(instA, instB) {
	  !('_nativeNode' in instA) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : invariant(false) : void 0;
	  !('_nativeNode' in instB) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : invariant(false) : void 0;
	
	  while (instB) {
	    if (instB === instA) {
	      return true;
	    }
	    instB = instB._nativeParent;
	  }
	  return false;
	}
	
	/**
	 * Return the parent instance of the passed-in instance.
	 */
	function getParentInstance(inst) {
	  !('_nativeNode' in inst) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getParentInstance: Invalid argument.') : invariant(false) : void 0;
	
	  return inst._nativeParent;
	}
	
	/**
	 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	 */
	function traverseTwoPhase(inst, fn, arg) {
	  var path = [];
	  while (inst) {
	    path.push(inst);
	    inst = inst._nativeParent;
	  }
	  var i;
	  for (i = path.length; i-- > 0;) {
	    fn(path[i], false, arg);
	  }
	  for (i = 0; i < path.length; i++) {
	    fn(path[i], true, arg);
	  }
	}
	
	/**
	 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	 * should would receive a `mouseEnter` or `mouseLeave` event.
	 *
	 * Does not invoke the callback on the nearest common ancestor because nothing
	 * "entered" or "left" that element.
	 */
	function traverseEnterLeave(from, to, fn, argFrom, argTo) {
	  var common = from && to ? getLowestCommonAncestor(from, to) : null;
	  var pathFrom = [];
	  while (from && from !== common) {
	    pathFrom.push(from);
	    from = from._nativeParent;
	  }
	  var pathTo = [];
	  while (to && to !== common) {
	    pathTo.push(to);
	    to = to._nativeParent;
	  }
	  var i;
	  for (i = 0; i < pathFrom.length; i++) {
	    fn(pathFrom[i], true, argFrom);
	  }
	  for (i = pathTo.length; i-- > 0;) {
	    fn(pathTo[i], false, argTo);
	  }
	}
	
	module.exports = {
	  isAncestor: isAncestor,
	  getLowestCommonAncestor: getLowestCommonAncestor,
	  getParentInstance: getParentInstance,
	  traverseTwoPhase: traverseTwoPhase,
	  traverseEnterLeave: traverseEnterLeave
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var DOMChildrenOperations = __webpack_require__(189);
	var DOMLazyTree = __webpack_require__(88);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactInstrumentation = __webpack_require__(122);
	
	var escapeTextContentForBrowser = __webpack_require__(93);
	var invariant = __webpack_require__(96);
	var validateDOMNesting = __webpack_require__(117);
	
	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings between comment nodes so that they
	 * can undergo the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function (text) {
	  // TODO: This is really a ReactText (ReactNode), not a ReactElement
	  this._currentElement = text;
	  this._stringText = '' + text;
	  // ReactDOMComponentTree uses these:
	  this._nativeNode = null;
	  this._nativeParent = null;
	
	  // Properties
	  this._domID = null;
	  this._mountIndex = 0;
	  this._closingComment = null;
	  this._commentNodes = null;
	};
	
	_assign(ReactDOMTextComponent.prototype, {
	
	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function (transaction, nativeParent, nativeContainerInfo, context) {
	    if (process.env.NODE_ENV !== 'production') {
	      ReactInstrumentation.debugTool.onSetText(this._debugID, this._stringText);
	
	      var parentInfo;
	      if (nativeParent != null) {
	        parentInfo = nativeParent._ancestorInfo;
	      } else if (nativeContainerInfo != null) {
	        parentInfo = nativeContainerInfo._ancestorInfo;
	      }
	      if (parentInfo) {
	        // parentInfo should always be present except for the top-level
	        // component when server rendering
	        validateDOMNesting('#text', this, parentInfo);
	      }
	    }
	
	    var domID = nativeContainerInfo._idCounter++;
	    var openingValue = ' react-text: ' + domID + ' ';
	    var closingValue = ' /react-text ';
	    this._domID = domID;
	    this._nativeParent = nativeParent;
	    if (transaction.useCreateElement) {
	      var ownerDocument = nativeContainerInfo._ownerDocument;
	      var openingComment = ownerDocument.createComment(openingValue);
	      var closingComment = ownerDocument.createComment(closingValue);
	      var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
	      DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
	      if (this._stringText) {
	        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
	      }
	      DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
	      ReactDOMComponentTree.precacheNode(this, openingComment);
	      this._closingComment = closingComment;
	      return lazyTree;
	    } else {
	      var escapedText = escapeTextContentForBrowser(this._stringText);
	
	      if (transaction.renderToStaticMarkup) {
	        // Normally we'd wrap this between comment nodes for the reasons stated
	        // above, but since this is a situation where React won't take over
	        // (static pages), we can simply return the text as it is.
	        return escapedText;
	      }
	
	      return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
	    }
	  },
	
	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function (nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        var commentNodes = this.getNativeNode();
	        DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
	
	        if (process.env.NODE_ENV !== 'production') {
	          ReactInstrumentation.debugTool.onSetText(this._debugID, nextStringText);
	        }
	      }
	    }
	  },
	
	  getNativeNode: function () {
	    var nativeNode = this._commentNodes;
	    if (nativeNode) {
	      return nativeNode;
	    }
	    if (!this._closingComment) {
	      var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
	      var node = openingComment.nextSibling;
	      while (true) {
	        !(node != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Missing closing comment for text component %s', this._domID) : invariant(false) : void 0;
	        if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
	          this._closingComment = node;
	          break;
	        }
	        node = node.nextSibling;
	      }
	    }
	    nativeNode = [this._nativeNode, this._closingComment];
	    this._commentNodes = nativeNode;
	    return nativeNode;
	  },
	
	  unmountComponent: function () {
	    this._closingComment = null;
	    this._commentNodes = null;
	    ReactDOMComponentTree.uncacheNode(this);
	  }
	
	});
	
	module.exports = ReactDOMTextComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var ReactUpdates = __webpack_require__(136);
	var Transaction = __webpack_require__(139);
	
	var emptyFunction = __webpack_require__(107);
	
	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function () {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};
	
	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};
	
	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
	
	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}
	
	_assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  }
	});
	
	var transaction = new ReactDefaultBatchingStrategyTransaction();
	
	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,
	
	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function (callback, a, b, c, d, e) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
	
	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;
	
	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d, e);
	    } else {
	      transaction.perform(callback, null, a, b, c, d, e);
	    }
	  }
	};
	
	module.exports = ReactDefaultBatchingStrategy;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var EventListener = __webpack_require__(229);
	var ExecutionEnvironment = __webpack_require__(92);
	var PooledClass = __webpack_require__(138);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactUpdates = __webpack_require__(136);
	
	var getEventTarget = __webpack_require__(180);
	var getUnboundedScrollPosition = __webpack_require__(230);
	
	/**
	 * Find the deepest React component completely containing the root of the
	 * passed-in instance (for use when entire React trees are nested within each
	 * other). If React trees are not nested, returns null.
	 */
	function findParent(inst) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  while (inst._nativeParent) {
	    inst = inst._nativeParent;
	  }
	  var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
	  var container = rootNode.parentNode;
	  return ReactDOMComponentTree.getClosestInstanceFromNode(container);
	}
	
	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	_assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function () {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
	
	function handleTopLevelImpl(bookKeeping) {
	  var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
	  var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);
	
	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = targetInst;
	  do {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = ancestor && findParent(ancestor);
	  } while (ancestor);
	
	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    targetInst = bookKeeping.ancestors[i];
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}
	
	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}
	
	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,
	
	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
	
	  setHandleTopLevel: function (handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },
	
	  setEnabled: function (enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },
	
	  isEnabled: function () {
	    return ReactEventListener._enabled;
	  },
	
	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },
	
	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },
	
	  monitorScrollValue: function (refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },
	
	  dispatchEvent: function (topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }
	
	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};
	
	module.exports = ReactEventListener;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @typechecks
	 */
	
	var emptyFunction = __webpack_require__(107);
	
	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },
	
	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },
	
	  registerDefault: function registerDefault() {}
	};
	
	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 230 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}
	
	module.exports = getUnboundedScrollPosition;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(95);
	var EventPluginHub = __webpack_require__(103);
	var EventPluginUtils = __webpack_require__(104);
	var ReactComponentEnvironment = __webpack_require__(143);
	var ReactClass = __webpack_require__(158);
	var ReactEmptyComponent = __webpack_require__(148);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactNativeComponent = __webpack_require__(149);
	var ReactUpdates = __webpack_require__(136);
	
	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventPluginUtils: EventPluginUtils.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Updates: ReactUpdates.injection
	};
	
	module.exports = ReactInjection;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(98);
	
	var CallbackQueue = __webpack_require__(137);
	var PooledClass = __webpack_require__(138);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactInputSelection = __webpack_require__(233);
	var Transaction = __webpack_require__(139);
	
	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};
	
	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function () {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },
	
	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
	  close: function (previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};
	
	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },
	
	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function () {
	    this.reactMountReady.notifyAll();
	  }
	};
	
	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
	
	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction(useCreateElement) {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = useCreateElement;
	}
	
	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },
	
	  /**
	   * Save current transaction state -- if the return value from this method is
	   * passed to `rollback`, the transaction will be reset to that state.
	   */
	  checkpoint: function () {
	    // reactMountReady is the our only stateful wrapper
	    return this.reactMountReady.checkpoint();
	  },
	
	  rollback: function (checkpoint) {
	    this.reactMountReady.rollback(checkpoint);
	  },
	
	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};
	
	_assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
	
	PooledClass.addPoolingTo(ReactReconcileTransaction);
	
	module.exports = ReactReconcileTransaction;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */
	
	'use strict';
	
	var ReactDOMSelection = __webpack_require__(234);
	
	var containsNode = __webpack_require__(236);
	var focusNode = __webpack_require__(198);
	var getActiveElement = __webpack_require__(239);
	
	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}
	
	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {
	
	  hasSelectionCapabilities: function (elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },
	
	  getSelectionInformation: function () {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },
	
	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function (priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }
	      focusNode(priorFocusedElem);
	    }
	  },
	
	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function (input) {
	    var selection;
	
	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }
	
	    return selection || { start: 0, end: 0 };
	  },
	
	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function (input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (end === undefined) {
	      end = start;
	    }
	
	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};
	
	module.exports = ReactInputSelection;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(92);
	
	var getNodeForCharacterOffset = __webpack_require__(235);
	var getTextContentAccessor = __webpack_require__(175);
	
	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}
	
	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;
	
	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);
	
	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;
	
	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}
	
	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();
	
	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }
	
	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;
	
	  var currentRange = selection.getRangeAt(0);
	
	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }
	
	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
	
	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
	
	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
	
	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
	
	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;
	
	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;
	
	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}
	
	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;
	
	  if (offsets.end === undefined) {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }
	
	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}
	
	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programmatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }
	
	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
	
	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }
	
	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);
	
	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();
	
	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}
	
	var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);
	
	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
	
	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};
	
	module.exports = ReactDOMSelection;

/***/ },
/* 235 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */
	
	'use strict';
	
	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}
	
	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}
	
	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;
	
	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;
	
	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }
	
	      nodeStart = nodeEnd;
	    }
	
	    node = getLeafNode(getSiblingNode(node));
	  }
	}
	
	module.exports = getNodeForCharacterOffset;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var isTextNode = __webpack_require__(237);
	
	/*eslint-disable no-bitwise */
	
	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}
	
	module.exports = containsNode;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var isNode = __webpack_require__(238);
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}
	
	module.exports = isTextNode;

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}
	
	module.exports = isNode;

/***/ },
/* 239 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	/* eslint-disable fb-www/typeof-undefined */
	
	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}
	
	module.exports = getActiveElement;

/***/ },
/* 240 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */
	
	'use strict';
	
	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};
	
	// We use attributes for everything SVG so let's avoid some duplication and run
	// code instead.
	// The following are all specified in the HTML config already so we exclude here.
	// - class (as className)
	// - color
	// - height
	// - id
	// - lang
	// - max
	// - media
	// - method
	// - min
	// - name
	// - style
	// - target
	// - type
	// - width
	var ATTRS = {
	  accentHeight: 'accent-height',
	  accumulate: 0,
	  additive: 0,
	  alignmentBaseline: 'alignment-baseline',
	  allowReorder: 'allowReorder',
	  alphabetic: 0,
	  amplitude: 0,
	  arabicForm: 'arabic-form',
	  ascent: 0,
	  attributeName: 'attributeName',
	  attributeType: 'attributeType',
	  autoReverse: 'autoReverse',
	  azimuth: 0,
	  baseFrequency: 'baseFrequency',
	  baseProfile: 'baseProfile',
	  baselineShift: 'baseline-shift',
	  bbox: 0,
	  begin: 0,
	  bias: 0,
	  by: 0,
	  calcMode: 'calcMode',
	  capHeight: 'cap-height',
	  clip: 0,
	  clipPath: 'clip-path',
	  clipRule: 'clip-rule',
	  clipPathUnits: 'clipPathUnits',
	  colorInterpolation: 'color-interpolation',
	  colorInterpolationFilters: 'color-interpolation-filters',
	  colorProfile: 'color-profile',
	  colorRendering: 'color-rendering',
	  contentScriptType: 'contentScriptType',
	  contentStyleType: 'contentStyleType',
	  cursor: 0,
	  cx: 0,
	  cy: 0,
	  d: 0,
	  decelerate: 0,
	  descent: 0,
	  diffuseConstant: 'diffuseConstant',
	  direction: 0,
	  display: 0,
	  divisor: 0,
	  dominantBaseline: 'dominant-baseline',
	  dur: 0,
	  dx: 0,
	  dy: 0,
	  edgeMode: 'edgeMode',
	  elevation: 0,
	  enableBackground: 'enable-background',
	  end: 0,
	  exponent: 0,
	  externalResourcesRequired: 'externalResourcesRequired',
	  fill: 0,
	  fillOpacity: 'fill-opacity',
	  fillRule: 'fill-rule',
	  filter: 0,
	  filterRes: 'filterRes',
	  filterUnits: 'filterUnits',
	  floodColor: 'flood-color',
	  floodOpacity: 'flood-opacity',
	  focusable: 0,
	  fontFamily: 'font-family',
	  fontSize: 'font-size',
	  fontSizeAdjust: 'font-size-adjust',
	  fontStretch: 'font-stretch',
	  fontStyle: 'font-style',
	  fontVariant: 'font-variant',
	  fontWeight: 'font-weight',
	  format: 0,
	  from: 0,
	  fx: 0,
	  fy: 0,
	  g1: 0,
	  g2: 0,
	  glyphName: 'glyph-name',
	  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
	  glyphOrientationVertical: 'glyph-orientation-vertical',
	  glyphRef: 'glyphRef',
	  gradientTransform: 'gradientTransform',
	  gradientUnits: 'gradientUnits',
	  hanging: 0,
	  horizAdvX: 'horiz-adv-x',
	  horizOriginX: 'horiz-origin-x',
	  ideographic: 0,
	  imageRendering: 'image-rendering',
	  'in': 0,
	  in2: 0,
	  intercept: 0,
	  k: 0,
	  k1: 0,
	  k2: 0,
	  k3: 0,
	  k4: 0,
	  kernelMatrix: 'kernelMatrix',
	  kernelUnitLength: 'kernelUnitLength',
	  kerning: 0,
	  keyPoints: 'keyPoints',
	  keySplines: 'keySplines',
	  keyTimes: 'keyTimes',
	  lengthAdjust: 'lengthAdjust',
	  letterSpacing: 'letter-spacing',
	  lightingColor: 'lighting-color',
	  limitingConeAngle: 'limitingConeAngle',
	  local: 0,
	  markerEnd: 'marker-end',
	  markerMid: 'marker-mid',
	  markerStart: 'marker-start',
	  markerHeight: 'markerHeight',
	  markerUnits: 'markerUnits',
	  markerWidth: 'markerWidth',
	  mask: 0,
	  maskContentUnits: 'maskContentUnits',
	  maskUnits: 'maskUnits',
	  mathematical: 0,
	  mode: 0,
	  numOctaves: 'numOctaves',
	  offset: 0,
	  opacity: 0,
	  operator: 0,
	  order: 0,
	  orient: 0,
	  orientation: 0,
	  origin: 0,
	  overflow: 0,
	  overlinePosition: 'overline-position',
	  overlineThickness: 'overline-thickness',
	  paintOrder: 'paint-order',
	  panose1: 'panose-1',
	  pathLength: 'pathLength',
	  patternContentUnits: 'patternContentUnits',
	  patternTransform: 'patternTransform',
	  patternUnits: 'patternUnits',
	  pointerEvents: 'pointer-events',
	  points: 0,
	  pointsAtX: 'pointsAtX',
	  pointsAtY: 'pointsAtY',
	  pointsAtZ: 'pointsAtZ',
	  preserveAlpha: 'preserveAlpha',
	  preserveAspectRatio: 'preserveAspectRatio',
	  primitiveUnits: 'primitiveUnits',
	  r: 0,
	  radius: 0,
	  refX: 'refX',
	  refY: 'refY',
	  renderingIntent: 'rendering-intent',
	  repeatCount: 'repeatCount',
	  repeatDur: 'repeatDur',
	  requiredExtensions: 'requiredExtensions',
	  requiredFeatures: 'requiredFeatures',
	  restart: 0,
	  result: 0,
	  rotate: 0,
	  rx: 0,
	  ry: 0,
	  scale: 0,
	  seed: 0,
	  shapeRendering: 'shape-rendering',
	  slope: 0,
	  spacing: 0,
	  specularConstant: 'specularConstant',
	  specularExponent: 'specularExponent',
	  speed: 0,
	  spreadMethod: 'spreadMethod',
	  startOffset: 'startOffset',
	  stdDeviation: 'stdDeviation',
	  stemh: 0,
	  stemv: 0,
	  stitchTiles: 'stitchTiles',
	  stopColor: 'stop-color',
	  stopOpacity: 'stop-opacity',
	  strikethroughPosition: 'strikethrough-position',
	  strikethroughThickness: 'strikethrough-thickness',
	  string: 0,
	  stroke: 0,
	  strokeDasharray: 'stroke-dasharray',
	  strokeDashoffset: 'stroke-dashoffset',
	  strokeLinecap: 'stroke-linecap',
	  strokeLinejoin: 'stroke-linejoin',
	  strokeMiterlimit: 'stroke-miterlimit',
	  strokeOpacity: 'stroke-opacity',
	  strokeWidth: 'stroke-width',
	  surfaceScale: 'surfaceScale',
	  systemLanguage: 'systemLanguage',
	  tableValues: 'tableValues',
	  targetX: 'targetX',
	  targetY: 'targetY',
	  textAnchor: 'text-anchor',
	  textDecoration: 'text-decoration',
	  textRendering: 'text-rendering',
	  textLength: 'textLength',
	  to: 0,
	  transform: 0,
	  u1: 0,
	  u2: 0,
	  underlinePosition: 'underline-position',
	  underlineThickness: 'underline-thickness',
	  unicode: 0,
	  unicodeBidi: 'unicode-bidi',
	  unicodeRange: 'unicode-range',
	  unitsPerEm: 'units-per-em',
	  vAlphabetic: 'v-alphabetic',
	  vHanging: 'v-hanging',
	  vIdeographic: 'v-ideographic',
	  vMathematical: 'v-mathematical',
	  values: 0,
	  vectorEffect: 'vector-effect',
	  version: 0,
	  vertAdvY: 'vert-adv-y',
	  vertOriginX: 'vert-origin-x',
	  vertOriginY: 'vert-origin-y',
	  viewBox: 'viewBox',
	  viewTarget: 'viewTarget',
	  visibility: 0,
	  widths: 0,
	  wordSpacing: 'word-spacing',
	  writingMode: 'writing-mode',
	  x: 0,
	  xHeight: 'x-height',
	  x1: 0,
	  x2: 0,
	  xChannelSelector: 'xChannelSelector',
	  xlinkActuate: 'xlink:actuate',
	  xlinkArcrole: 'xlink:arcrole',
	  xlinkHref: 'xlink:href',
	  xlinkRole: 'xlink:role',
	  xlinkShow: 'xlink:show',
	  xlinkTitle: 'xlink:title',
	  xlinkType: 'xlink:type',
	  xmlBase: 'xml:base',
	  xmlLang: 'xml:lang',
	  xmlSpace: 'xml:space',
	  y: 0,
	  y1: 0,
	  y2: 0,
	  yChannelSelector: 'yChannelSelector',
	  z: 0,
	  zoomAndPan: 'zoomAndPan'
	};
	
	var SVGDOMPropertyConfig = {
	  Properties: {},
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  },
	  DOMAttributeNames: {}
	};
	
	Object.keys(ATTRS).forEach(function (key) {
	  SVGDOMPropertyConfig.Properties[key] = 0;
	  if (ATTRS[key]) {
	    SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
	  }
	});
	
	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(99);
	var EventPropagators = __webpack_require__(173);
	var ExecutionEnvironment = __webpack_require__(92);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactInputSelection = __webpack_require__(233);
	var SyntheticEvent = __webpack_require__(177);
	
	var getActiveElement = __webpack_require__(239);
	var isTextInputElement = __webpack_require__(181);
	var keyOf = __webpack_require__(159);
	var shallowEqual = __webpack_require__(223);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
	
	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSelect: null }),
	      captured: keyOf({ onSelectCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
	  }
	};
	
	var activeElement = null;
	var activeElementInst = null;
	var lastSelection = null;
	var mouseDown = false;
	
	// Track whether a listener exists for this plugin. If none exist, we do
	// not extract events. See #3639.
	var hasListener = false;
	var ON_SELECT_KEY = keyOf({ onSelect: null });
	
	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}
	
	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
	    return null;
	  }
	
	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;
	
	    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);
	
	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;
	
	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
	
	    return syntheticEvent;
	  }
	
	  return null;
	}
	
	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    if (!hasListener) {
	      return null;
	    }
	
	    var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
	
	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
	          activeElement = targetNode;
	          activeElementInst = targetInst;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementInst = null;
	        lastSelection = null;
	        break;
	
	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	
	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case topLevelTypes.topSelectionChange:
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }
	
	    return null;
	  },
	
	  didPutListener: function (inst, registrationName, listener) {
	    if (registrationName === ON_SELECT_KEY) {
	      hasListener = true;
	    }
	  }
	};
	
	module.exports = SelectEventPlugin;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(99);
	var EventListener = __webpack_require__(229);
	var EventPropagators = __webpack_require__(173);
	var ReactDOMComponentTree = __webpack_require__(114);
	var SyntheticAnimationEvent = __webpack_require__(243);
	var SyntheticClipboardEvent = __webpack_require__(244);
	var SyntheticEvent = __webpack_require__(177);
	var SyntheticFocusEvent = __webpack_require__(245);
	var SyntheticKeyboardEvent = __webpack_require__(246);
	var SyntheticMouseEvent = __webpack_require__(184);
	var SyntheticDragEvent = __webpack_require__(249);
	var SyntheticTouchEvent = __webpack_require__(250);
	var SyntheticTransitionEvent = __webpack_require__(251);
	var SyntheticUIEvent = __webpack_require__(185);
	var SyntheticWheelEvent = __webpack_require__(252);
	
	var emptyFunction = __webpack_require__(107);
	var getEventCharCode = __webpack_require__(247);
	var invariant = __webpack_require__(96);
	var keyOf = __webpack_require__(159);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  abort: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAbort: true }),
	      captured: keyOf({ onAbortCapture: true })
	    }
	  },
	  animationEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAnimationEnd: true }),
	      captured: keyOf({ onAnimationEndCapture: true })
	    }
	  },
	  animationIteration: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAnimationIteration: true }),
	      captured: keyOf({ onAnimationIterationCapture: true })
	    }
	  },
	  animationStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAnimationStart: true }),
	      captured: keyOf({ onAnimationStartCapture: true })
	    }
	  },
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBlur: true }),
	      captured: keyOf({ onBlurCapture: true })
	    }
	  },
	  canPlay: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlay: true }),
	      captured: keyOf({ onCanPlayCapture: true })
	    }
	  },
	  canPlayThrough: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlayThrough: true }),
	      captured: keyOf({ onCanPlayThroughCapture: true })
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onClick: true }),
	      captured: keyOf({ onClickCapture: true })
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onContextMenu: true }),
	      captured: keyOf({ onContextMenuCapture: true })
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCopy: true }),
	      captured: keyOf({ onCopyCapture: true })
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCut: true }),
	      captured: keyOf({ onCutCapture: true })
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDoubleClick: true }),
	      captured: keyOf({ onDoubleClickCapture: true })
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrag: true }),
	      captured: keyOf({ onDragCapture: true })
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnd: true }),
	      captured: keyOf({ onDragEndCapture: true })
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnter: true }),
	      captured: keyOf({ onDragEnterCapture: true })
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragExit: true }),
	      captured: keyOf({ onDragExitCapture: true })
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragLeave: true }),
	      captured: keyOf({ onDragLeaveCapture: true })
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragOver: true }),
	      captured: keyOf({ onDragOverCapture: true })
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragStart: true }),
	      captured: keyOf({ onDragStartCapture: true })
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrop: true }),
	      captured: keyOf({ onDropCapture: true })
	    }
	  },
	  durationChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDurationChange: true }),
	      captured: keyOf({ onDurationChangeCapture: true })
	    }
	  },
	  emptied: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEmptied: true }),
	      captured: keyOf({ onEmptiedCapture: true })
	    }
	  },
	  encrypted: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEncrypted: true }),
	      captured: keyOf({ onEncryptedCapture: true })
	    }
	  },
	  ended: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEnded: true }),
	      captured: keyOf({ onEndedCapture: true })
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onError: true }),
	      captured: keyOf({ onErrorCapture: true })
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onFocus: true }),
	      captured: keyOf({ onFocusCapture: true })
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onInput: true }),
	      captured: keyOf({ onInputCapture: true })
	    }
	  },
	  invalid: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onInvalid: true }),
	      captured: keyOf({ onInvalidCapture: true })
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyDown: true }),
	      captured: keyOf({ onKeyDownCapture: true })
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyPress: true }),
	      captured: keyOf({ onKeyPressCapture: true })
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyUp: true }),
	      captured: keyOf({ onKeyUpCapture: true })
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoad: true }),
	      captured: keyOf({ onLoadCapture: true })
	    }
	  },
	  loadedData: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedData: true }),
	      captured: keyOf({ onLoadedDataCapture: true })
	    }
	  },
	  loadedMetadata: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedMetadata: true }),
	      captured: keyOf({ onLoadedMetadataCapture: true })
	    }
	  },
	  loadStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadStart: true }),
	      captured: keyOf({ onLoadStartCapture: true })
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseDown: true }),
	      captured: keyOf({ onMouseDownCapture: true })
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseMove: true }),
	      captured: keyOf({ onMouseMoveCapture: true })
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOut: true }),
	      captured: keyOf({ onMouseOutCapture: true })
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOver: true }),
	      captured: keyOf({ onMouseOverCapture: true })
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseUp: true }),
	      captured: keyOf({ onMouseUpCapture: true })
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPaste: true }),
	      captured: keyOf({ onPasteCapture: true })
	    }
	  },
	  pause: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPause: true }),
	      captured: keyOf({ onPauseCapture: true })
	    }
	  },
	  play: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlay: true }),
	      captured: keyOf({ onPlayCapture: true })
	    }
	  },
	  playing: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlaying: true }),
	      captured: keyOf({ onPlayingCapture: true })
	    }
	  },
	  progress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onProgress: true }),
	      captured: keyOf({ onProgressCapture: true })
	    }
	  },
	  rateChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onRateChange: true }),
	      captured: keyOf({ onRateChangeCapture: true })
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onReset: true }),
	      captured: keyOf({ onResetCapture: true })
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onScroll: true }),
	      captured: keyOf({ onScrollCapture: true })
	    }
	  },
	  seeked: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeked: true }),
	      captured: keyOf({ onSeekedCapture: true })
	    }
	  },
	  seeking: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeking: true }),
	      captured: keyOf({ onSeekingCapture: true })
	    }
	  },
	  stalled: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onStalled: true }),
	      captured: keyOf({ onStalledCapture: true })
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSubmit: true }),
	      captured: keyOf({ onSubmitCapture: true })
	    }
	  },
	  suspend: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSuspend: true }),
	      captured: keyOf({ onSuspendCapture: true })
	    }
	  },
	  timeUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTimeUpdate: true }),
	      captured: keyOf({ onTimeUpdateCapture: true })
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchCancel: true }),
	      captured: keyOf({ onTouchCancelCapture: true })
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchEnd: true }),
	      captured: keyOf({ onTouchEndCapture: true })
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchMove: true }),
	      captured: keyOf({ onTouchMoveCapture: true })
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchStart: true }),
	      captured: keyOf({ onTouchStartCapture: true })
	    }
	  },
	  transitionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTransitionEnd: true }),
	      captured: keyOf({ onTransitionEndCapture: true })
	    }
	  },
	  volumeChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onVolumeChange: true }),
	      captured: keyOf({ onVolumeChangeCapture: true })
	    }
	  },
	  waiting: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWaiting: true }),
	      captured: keyOf({ onWaitingCapture: true })
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWheel: true }),
	      captured: keyOf({ onWheelCapture: true })
	    }
	  }
	};
	
	var topLevelEventsToDispatchConfig = {
	  topAbort: eventTypes.abort,
	  topAnimationEnd: eventTypes.animationEnd,
	  topAnimationIteration: eventTypes.animationIteration,
	  topAnimationStart: eventTypes.animationStart,
	  topBlur: eventTypes.blur,
	  topCanPlay: eventTypes.canPlay,
	  topCanPlayThrough: eventTypes.canPlayThrough,
	  topClick: eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy: eventTypes.copy,
	  topCut: eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag: eventTypes.drag,
	  topDragEnd: eventTypes.dragEnd,
	  topDragEnter: eventTypes.dragEnter,
	  topDragExit: eventTypes.dragExit,
	  topDragLeave: eventTypes.dragLeave,
	  topDragOver: eventTypes.dragOver,
	  topDragStart: eventTypes.dragStart,
	  topDrop: eventTypes.drop,
	  topDurationChange: eventTypes.durationChange,
	  topEmptied: eventTypes.emptied,
	  topEncrypted: eventTypes.encrypted,
	  topEnded: eventTypes.ended,
	  topError: eventTypes.error,
	  topFocus: eventTypes.focus,
	  topInput: eventTypes.input,
	  topInvalid: eventTypes.invalid,
	  topKeyDown: eventTypes.keyDown,
	  topKeyPress: eventTypes.keyPress,
	  topKeyUp: eventTypes.keyUp,
	  topLoad: eventTypes.load,
	  topLoadedData: eventTypes.loadedData,
	  topLoadedMetadata: eventTypes.loadedMetadata,
	  topLoadStart: eventTypes.loadStart,
	  topMouseDown: eventTypes.mouseDown,
	  topMouseMove: eventTypes.mouseMove,
	  topMouseOut: eventTypes.mouseOut,
	  topMouseOver: eventTypes.mouseOver,
	  topMouseUp: eventTypes.mouseUp,
	  topPaste: eventTypes.paste,
	  topPause: eventTypes.pause,
	  topPlay: eventTypes.play,
	  topPlaying: eventTypes.playing,
	  topProgress: eventTypes.progress,
	  topRateChange: eventTypes.rateChange,
	  topReset: eventTypes.reset,
	  topScroll: eventTypes.scroll,
	  topSeeked: eventTypes.seeked,
	  topSeeking: eventTypes.seeking,
	  topStalled: eventTypes.stalled,
	  topSubmit: eventTypes.submit,
	  topSuspend: eventTypes.suspend,
	  topTimeUpdate: eventTypes.timeUpdate,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd: eventTypes.touchEnd,
	  topTouchMove: eventTypes.touchMove,
	  topTouchStart: eventTypes.touchStart,
	  topTransitionEnd: eventTypes.transitionEnd,
	  topVolumeChange: eventTypes.volumeChange,
	  topWaiting: eventTypes.waiting,
	  topWheel: eventTypes.wheel
	};
	
	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}
	
	var ON_CLICK_KEY = keyOf({ onClick: null });
	var onClickListeners = {};
	
	var SimpleEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topAbort:
	      case topLevelTypes.topCanPlay:
	      case topLevelTypes.topCanPlayThrough:
	      case topLevelTypes.topDurationChange:
	      case topLevelTypes.topEmptied:
	      case topLevelTypes.topEncrypted:
	      case topLevelTypes.topEnded:
	      case topLevelTypes.topError:
	      case topLevelTypes.topInput:
	      case topLevelTypes.topInvalid:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topLoadedData:
	      case topLevelTypes.topLoadedMetadata:
	      case topLevelTypes.topLoadStart:
	      case topLevelTypes.topPause:
	      case topLevelTypes.topPlay:
	      case topLevelTypes.topPlaying:
	      case topLevelTypes.topProgress:
	      case topLevelTypes.topRateChange:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSeeked:
	      case topLevelTypes.topSeeking:
	      case topLevelTypes.topStalled:
	      case topLevelTypes.topSubmit:
	      case topLevelTypes.topSuspend:
	      case topLevelTypes.topTimeUpdate:
	      case topLevelTypes.topVolumeChange:
	      case topLevelTypes.topWaiting:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // Firefox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topAnimationEnd:
	      case topLevelTypes.topAnimationIteration:
	      case topLevelTypes.topAnimationStart:
	        EventConstructor = SyntheticAnimationEvent;
	        break;
	      case topLevelTypes.topTransitionEnd:
	        EventConstructor = SyntheticTransitionEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : void 0;
	    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  },
	
	  didPutListener: function (inst, registrationName, listener) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    if (registrationName === ON_CLICK_KEY) {
	      var id = inst._rootNodeID;
	      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
	      if (!onClickListeners[id]) {
	        onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
	      }
	    }
	  },
	
	  willDeleteListener: function (inst, registrationName) {
	    if (registrationName === ON_CLICK_KEY) {
	      var id = inst._rootNodeID;
	      onClickListeners[id].remove();
	      delete onClickListeners[id];
	    }
	  }
	
	};
	
	module.exports = SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticAnimationEvent
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(177);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
	 */
	var AnimationEventInterface = {
	  animationName: null,
	  elapsedTime: null,
	  pseudoElement: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);
	
	module.exports = SyntheticAnimationEvent;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(177);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function (event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
	
	module.exports = SyntheticClipboardEvent;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(185);
	
	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
	
	module.exports = SyntheticFocusEvent;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(185);
	
	var getEventCharCode = __webpack_require__(247);
	var getEventKey = __webpack_require__(248);
	var getEventModifierState = __webpack_require__(186);
	
	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function (event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.
	
	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function (event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.
	
	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function (event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
	
	module.exports = SyntheticKeyboardEvent;

/***/ },
/* 247 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 */
	
	'use strict';
	
	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */
	
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;
	
	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;
	
	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }
	
	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }
	
	  return 0;
	}
	
	module.exports = getEventCharCode;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 */
	
	'use strict';
	
	var getEventCharCode = __webpack_require__(247);
	
	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};
	
	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};
	
	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.
	
	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }
	
	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);
	
	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}
	
	module.exports = getEventKey;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 */
	
	'use strict';
	
	var SyntheticMouseEvent = __webpack_require__(184);
	
	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
	
	module.exports = SyntheticDragEvent;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(185);
	
	var getEventModifierState = __webpack_require__(186);
	
	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
	
	module.exports = SyntheticTouchEvent;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTransitionEvent
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(177);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
	 */
	var TransitionEventInterface = {
	  propertyName: null,
	  elapsedTime: null,
	  pseudoElement: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);
	
	module.exports = SyntheticTransitionEvent;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 */
	
	'use strict';
	
	var SyntheticMouseEvent = __webpack_require__(184);
	
	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function (event) {
	    return 'deltaX' in event ? event.deltaX :
	    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function (event) {
	    return 'deltaY' in event ? event.deltaY :
	    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY :
	    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,
	
	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
	
	module.exports = SyntheticWheelEvent;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(113);
	var ReactDOMComponentTree = __webpack_require__(114);
	var ReactInstanceMap = __webpack_require__(135);
	
	var getNativeComponentFromComposite = __webpack_require__(254);
	var invariant = __webpack_require__(96);
	var warning = __webpack_require__(106);
	
	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if (process.env.NODE_ENV !== 'production') {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === 1) {
	    return componentOrElement;
	  }
	
	  var inst = ReactInstanceMap.get(componentOrElement);
	  if (inst) {
	    inst = getNativeComponentFromComposite(inst);
	    return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
	  }
	
	  if (typeof componentOrElement.render === 'function') {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : void 0;
	  } else {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : void 0;
	  }
	}
	
	module.exports = findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNativeComponentFromComposite
	 */
	
	'use strict';
	
	var ReactNodeTypes = __webpack_require__(144);
	
	function getNativeComponentFromComposite(inst) {
	  var type;
	
	  while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
	    inst = inst._renderedComponent;
	  }
	
	  if (type === ReactNodeTypes.NATIVE) {
	    return inst._renderedComponent;
	  } else if (type === ReactNodeTypes.EMPTY) {
	    return null;
	  }
	}
	
	module.exports = getNativeComponentFromComposite;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule renderSubtreeIntoContainer
	*/
	
	'use strict';
	
	var ReactMount = __webpack_require__(87);
	
	module.exports = ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(150); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(150);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'React ToDos App!'
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(166); if (makeExportsHot(module, __webpack_require__(150))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }
]))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRvbS9pbmRleC5qcz9mOTFjIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NLmpzP2I3NmYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3REZWZhdWx0SW5qZWN0aW9uLmpzPzNkMzYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvQmVmb3JlSW5wdXRFdmVudFBsdWdpbi5qcz84N2E1Iiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL0V2ZW50UHJvcGFnYXRvcnMuanM/ZDdjMyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9GYWxsYmFja0NvbXBvc2l0aW9uU3RhdGUuanM/OTA5NiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9nZXRUZXh0Q29udGVudEFjY2Vzc29yLmpzPzE2NWMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvU3ludGhldGljQ29tcG9zaXRpb25FdmVudC5qcz8wYTkzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1N5bnRoZXRpY0V2ZW50LmpzPzY2YzMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvU3ludGhldGljSW5wdXRFdmVudC5qcz82MGNhIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL0NoYW5nZUV2ZW50UGx1Z2luLmpzP2U4YTkiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZ2V0RXZlbnRUYXJnZXQuanM/ZWMwMSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9pc1RleHRJbnB1dEVsZW1lbnQuanM/ZWM2MCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9EZWZhdWx0RXZlbnRQbHVnaW5PcmRlci5qcz8zZDIxIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL0VudGVyTGVhdmVFdmVudFBsdWdpbi5qcz81ZjVmIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1N5bnRoZXRpY01vdXNlRXZlbnQuanM/NWIyZCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9TeW50aGV0aWNVSUV2ZW50LmpzPzA1MTEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZ2V0RXZlbnRNb2RpZmllclN0YXRlLmpzP2NlNWMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvSFRNTERPTVByb3BlcnR5Q29uZmlnLmpzP2QyMjgiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RDb21wb25lbnRCcm93c2VyRW52aXJvbm1lbnQuanM/Yzg4MiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9ET01DaGlsZHJlbk9wZXJhdGlvbnMuanM/OGUyYSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9EYW5nZXIuanM/ZjY1MyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2NyZWF0ZU5vZGVzRnJvbU1hcmt1cC5qcz84NjQ3Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvY3JlYXRlQXJyYXlGcm9tTWl4ZWQuanM/MjkxYSIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2dldE1hcmt1cFdyYXAuanM/NDAzMCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdE11bHRpQ2hpbGRVcGRhdGVUeXBlcy5qcz9kNGEwIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NSURPcGVyYXRpb25zLmpzP2VmY2UiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RET01Db21wb25lbnQuanM/MTMwMiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9BdXRvRm9jdXNVdGlscy5qcz9lNTgyIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZm9jdXNOb2RlLmpzPzcwZTMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zLmpzPzIyMmEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvQ1NTUHJvcGVydHkuanM/YmJiMSIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lLmpzP2YzOTciLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qcz84NzYyIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL2Rhbmdlcm91c1N0eWxlVmFsdWUuanM/YThkZCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qcz9hNGE0Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaHlwaGVuYXRlLmpzPzFhODAiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seS5qcz9hYjhhIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL0RPTVByb3BlcnR5T3BlcmF0aW9ucy5qcz85MzBlIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NSW5zdHJ1bWVudGF0aW9uLmpzPzFkODYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RET01EZWJ1Z1Rvb2wuanM/ZTVkOCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdERPTVVua25vd25Qcm9wZXJ0eURldnRvb2wuanM/YTJlZCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9xdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlci5qcz80NTllIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NQnV0dG9uLmpzPzM4ZGYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvRGlzYWJsZWRJbnB1dFV0aWxzLmpzPzE3OWIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RET01JbnB1dC5qcz85ZDIxIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL0xpbmtlZFZhbHVlVXRpbHMuanM/ODEzZCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdERPTU9wdGlvbi5qcz85NDQ5Iiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NU2VsZWN0LmpzPzllMDYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RET01UZXh0YXJlYS5qcz9lZTJiIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0TXVsdGlDaGlsZC5qcz9jODdkIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0Q2hpbGRSZWNvbmNpbGVyLmpzP2ZmNDYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZmxhdHRlbkNoaWxkcmVuLmpzPzBkMDYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbi5qcz9iNzhhIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvc2hhbGxvd0VxdWFsLmpzP2VlMWQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RET01FbXB0eUNvbXBvbmVudC5qcz9hYzIwIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NVHJlZVRyYXZlcnNhbC5qcz9mZDRkIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NVGV4dENvbXBvbmVudC5qcz84YjZlIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3kuanM/ZWY3MCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdEV2ZW50TGlzdGVuZXIuanM/MjM2NSIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V2ZW50TGlzdGVuZXIuanM/ZGM1ZCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2dldFVuYm91bmRlZFNjcm9sbFBvc2l0aW9uLmpzPzI1NmIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RJbmplY3Rpb24uanM/MTM2NiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uLmpzPzkxNzgiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RJbnB1dFNlbGVjdGlvbi5qcz83NmUxIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NU2VsZWN0aW9uLmpzP2ZlMTQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZ2V0Tm9kZUZvckNoYXJhY3Rlck9mZnNldC5qcz9jMWRlIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvY29udGFpbnNOb2RlLmpzP2YxYmYiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pc1RleHROb2RlLmpzP2M4MWYiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pc05vZGUuanM/ZGVlNiIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2dldEFjdGl2ZUVsZW1lbnQuanM/N2RiMiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9TVkdET01Qcm9wZXJ0eUNvbmZpZy5qcz9lZjM1Iiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1NlbGVjdEV2ZW50UGx1Z2luLmpzPzk3NjMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvU2ltcGxlRXZlbnRQbHVnaW4uanM/NjA2NSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9TeW50aGV0aWNBbmltYXRpb25FdmVudC5qcz81ZTQzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1N5bnRoZXRpY0NsaXBib2FyZEV2ZW50LmpzPzJiM2QiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvU3ludGhldGljRm9jdXNFdmVudC5qcz9hN2RjIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1N5bnRoZXRpY0tleWJvYXJkRXZlbnQuanM/ZWM0NCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9nZXRFdmVudENoYXJDb2RlLmpzPzlkODEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZ2V0RXZlbnRLZXkuanM/NjY2YSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9TeW50aGV0aWNEcmFnRXZlbnQuanM/MzlkYyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9TeW50aGV0aWNUb3VjaEV2ZW50LmpzP2MwMzUiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvU3ludGhldGljVHJhbnNpdGlvbkV2ZW50LmpzPzBjMmQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvU3ludGhldGljV2hlZWxFdmVudC5qcz9jOGQ0Iiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL2ZpbmRET01Ob2RlLmpzP2VjM2YiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZ2V0TmF0aXZlQ29tcG9uZW50RnJvbUNvbXBvc2l0ZS5qcz85MTFmIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyLmpzPzhhYmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzPzNjZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSx1QkFBTyxrREFBUCxFQUFnQixTQUFTLGVBQVQsQ0FBeUIsS0FBekIsQ0FBaEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUM7Ozs7OztBQ25ZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtB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QUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQzs7Ozs7O0FDcFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVksZUFBZTtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsNkJBQTZCLFVBQVUsMEJBQTBCLFVBQVUsdUJBQXVCLFVBQVUsOEJBQThCLFVBQVUsMEJBQTBCLFVBQVUsMEJBQTBCLFVBQVUsK0JBQStCOztBQUVqUywwQzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0EsSUFBRztBQUNIO0FBQ0EsOEJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdDOzs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQzs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUM7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUEsd0M7Ozs7OztBQ2hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1EOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFdBQVc7QUFDdEIsWUFBVyxXQUFXO0FBQ3RCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELDZDOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLDBEQUEwRDtBQUN2RSxjQUFhLE9BQU87QUFDcEIsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0M7Ozs7Ozs7QUNwN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFXLFdBQVc7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBLDRCOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTRDOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLEVBQUU7QUFDZixjQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsMEJBQTBCO0FBQzFELHFCQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsa0JBQWtCO0FBQy9CLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxXQUFXO0FBQ3hCLGNBQWEsT0FBTztBQUNwQixjQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3Qzs7Ozs7OztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7OztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyR0FBMEc7QUFDMUc7QUFDQTtBQUNBO0FBQ0EsNkdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQSwwQkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSwwREFBMEQ7QUFDdkUsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFhLFVBQVU7QUFDdkIsY0FBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVELHdDOzs7Ozs7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDOzs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUgsa0JBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTBCLGdCQUFnQjtBQUMxQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0M7Ozs7Ozs7QUNsbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDOzs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0M7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUM7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0M7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDOzs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVywwQkFBMEI7QUFDckMsYUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGtEOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7Ozs7Ozs7Ozs7O0tBRXFCLEc7Ozs7Ozs7Ozs7OzhCQUNWO0FBQ1AsY0FDRTtBQUFBO1NBQUE7U0FDQztBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREQsUUFERjtBQUtEOzs7O0dBUDhCLGdCQUFNLFM7O21CQUFsQixHIiwiZmlsZSI6IjAuMzgwZTVkNDMyZWNmMDk4MjFjNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJ2NvbXBvbmVudHMvYXBwJztcblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRzQnlJZCgnYXBwJykpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL1JlYWN0RE9NJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kb20vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTVxuICovXG5cbi8qIGdsb2JhbHMgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdERlZmF1bHRJbmplY3Rpb24gPSByZXF1aXJlKCcuL1JlYWN0RGVmYXVsdEluamVjdGlvbicpO1xudmFyIFJlYWN0TW91bnQgPSByZXF1aXJlKCcuL1JlYWN0TW91bnQnKTtcbnZhciBSZWFjdFJlY29uY2lsZXIgPSByZXF1aXJlKCcuL1JlYWN0UmVjb25jaWxlcicpO1xudmFyIFJlYWN0VXBkYXRlcyA9IHJlcXVpcmUoJy4vUmVhY3RVcGRhdGVzJyk7XG52YXIgUmVhY3RWZXJzaW9uID0gcmVxdWlyZSgnLi9SZWFjdFZlcnNpb24nKTtcblxudmFyIGZpbmRET01Ob2RlID0gcmVxdWlyZSgnLi9maW5kRE9NTm9kZScpO1xudmFyIGdldE5hdGl2ZUNvbXBvbmVudEZyb21Db21wb3NpdGUgPSByZXF1aXJlKCcuL2dldE5hdGl2ZUNvbXBvbmVudEZyb21Db21wb3NpdGUnKTtcbnZhciByZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciA9IHJlcXVpcmUoJy4vcmVuZGVyU3VidHJlZUludG9Db250YWluZXInKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG5SZWFjdERlZmF1bHRJbmplY3Rpb24uaW5qZWN0KCk7XG5cbnZhciBSZWFjdCA9IHtcbiAgZmluZERPTU5vZGU6IGZpbmRET01Ob2RlLFxuICByZW5kZXI6IFJlYWN0TW91bnQucmVuZGVyLFxuICB1bm1vdW50Q29tcG9uZW50QXROb2RlOiBSZWFjdE1vdW50LnVubW91bnRDb21wb25lbnRBdE5vZGUsXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6IFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcyxcbiAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI6IHJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyXG59O1xuXG4vLyBJbmplY3QgdGhlIHJ1bnRpbWUgaW50byBhIGRldnRvb2xzIGdsb2JhbCBob29rIHJlZ2FyZGxlc3Mgb2YgYnJvd3Nlci5cbi8vIEFsbG93cyBmb3IgZGVidWdnaW5nIHdoZW4gdGhlIGhvb2sgaXMgaW5qZWN0ZWQgb24gdGhlIHBhZ2UuXG4vKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuaWYgKHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3Qoe1xuICAgIENvbXBvbmVudFRyZWU6IHtcbiAgICAgIGdldENsb3Nlc3RJbnN0YW5jZUZyb21Ob2RlOiBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Q2xvc2VzdEluc3RhbmNlRnJvbU5vZGUsXG4gICAgICBnZXROb2RlRnJvbUluc3RhbmNlOiBmdW5jdGlvbiAoaW5zdCkge1xuICAgICAgICAvLyBpbnN0IGlzIGFuIGludGVybmFsIGluc3RhbmNlIChidXQgY291bGQgYmUgYSBjb21wb3NpdGUpXG4gICAgICAgIGlmIChpbnN0Ll9yZW5kZXJlZENvbXBvbmVudCkge1xuICAgICAgICAgIGluc3QgPSBnZXROYXRpdmVDb21wb25lbnRGcm9tQ29tcG9zaXRlKGluc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0KSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXROb2RlRnJvbUluc3RhbmNlKGluc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBNb3VudDogUmVhY3RNb3VudCxcbiAgICBSZWNvbmNpbGVyOiBSZWFjdFJlY29uY2lsZXJcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG4gIGlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gJiYgd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYpIHtcblxuICAgIC8vIEZpcnN0IGNoZWNrIGlmIGRldnRvb2xzIGlzIG5vdCBpbnN0YWxsZWRcbiAgICBpZiAodHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIElmIHdlJ3JlIGluIENocm9tZSBvciBGaXJlZm94LCBwcm92aWRlIGEgZG93bmxvYWQgbGluayBpZiBub3QgaW5zdGFsbGVkLlxuICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA9PT0gLTEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMSkge1xuICAgICAgICAvLyBGaXJlZm94IGRvZXMgbm90IGhhdmUgdGhlIGlzc3VlIHdpdGggZGV2dG9vbHMgbG9hZGVkIG92ZXIgZmlsZTovL1xuICAgICAgICB2YXIgc2hvd0ZpbGVVcmxNZXNzYWdlID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdEb3dubG9hZCB0aGUgUmVhY3QgRGV2VG9vbHMgJyArIChzaG93RmlsZVVybE1lc3NhZ2UgPyAnYW5kIHVzZSBhbiBIVFRQIHNlcnZlciAoaW5zdGVhZCBvZiBhIGZpbGU6IFVSTCkgJyA6ICcnKSArICdmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZTogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWRldnRvb2xzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRlc3RGdW5jID0gZnVuY3Rpb24gdGVzdEZuKCkge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoKHRlc3RGdW5jLm5hbWUgfHwgdGVzdEZ1bmMudG9TdHJpbmcoKSkuaW5kZXhPZigndGVzdEZuJykgIT09IC0xLCAnSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhIG1pbmlmaWVkIGNvcHkgb2YgdGhlIGRldmVsb3BtZW50IGJ1aWxkICcgKyAnb2YgUmVhY3QuIFdoZW4gZGVwbG95aW5nIFJlYWN0IGFwcHMgdG8gcHJvZHVjdGlvbiwgbWFrZSBzdXJlIHRvIHVzZSAnICsgJ3RoZSBwcm9kdWN0aW9uIGJ1aWxkIHdoaWNoIHNraXBzIGRldmVsb3BtZW50IHdhcm5pbmdzIGFuZCBpcyBmYXN0ZXIuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtbWluaWZpY2F0aW9uIGZvciBtb3JlIGRldGFpbHMuJykgOiB2b2lkIDA7XG5cbiAgICAvLyBJZiB3ZSdyZSBpbiBJRTgsIGNoZWNrIHRvIHNlZSBpZiB3ZSBhcmUgaW4gY29tcGF0aWJpbGl0eSBtb2RlIGFuZCBwcm92aWRlXG4gICAgLy8gaW5mb3JtYXRpb24gb24gcHJldmVudGluZyBjb21wYXRpYmlsaXR5IG1vZGVcbiAgICB2YXIgaWVDb21wYXRpYmlsaXR5TW9kZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZSAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPCA4O1xuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIWllQ29tcGF0aWJpbGl0eU1vZGUsICdJbnRlcm5ldCBFeHBsb3JlciBpcyBydW5uaW5nIGluIGNvbXBhdGliaWxpdHkgbW9kZTsgcGxlYXNlIGFkZCB0aGUgJyArICdmb2xsb3dpbmcgdGFnIHRvIHlvdXIgSFRNTCB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmc6ICcgKyAnPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz4nKSA6IHZvaWQgMDtcblxuICAgIHZhciBleHBlY3RlZEZlYXR1cmVzID0gW1xuICAgIC8vIHNoaW1zXG4gICAgQXJyYXkuaXNBcnJheSwgQXJyYXkucHJvdG90eXBlLmV2ZXJ5LCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCwgQXJyYXkucHJvdG90eXBlLmluZGV4T2YsIEFycmF5LnByb3RvdHlwZS5tYXAsIERhdGUubm93LCBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCwgT2JqZWN0LmtleXMsIFN0cmluZy5wcm90b3R5cGUuc3BsaXQsIFN0cmluZy5wcm90b3R5cGUudHJpbV07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZXhwZWN0ZWRGZWF0dXJlc1tpXSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ09uZSBvciBtb3JlIEVTNSBzaGltcyBleHBlY3RlZCBieSBSZWFjdCBhcmUgbm90IGF2YWlsYWJsZTogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctcG9seWZpbGxzJykgOiB2b2lkIDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdERPTS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RGVmYXVsdEluamVjdGlvblxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEJlZm9yZUlucHV0RXZlbnRQbHVnaW4gPSByZXF1aXJlKCcuL0JlZm9yZUlucHV0RXZlbnRQbHVnaW4nKTtcbnZhciBDaGFuZ2VFdmVudFBsdWdpbiA9IHJlcXVpcmUoJy4vQ2hhbmdlRXZlbnRQbHVnaW4nKTtcbnZhciBEZWZhdWx0RXZlbnRQbHVnaW5PcmRlciA9IHJlcXVpcmUoJy4vRGVmYXVsdEV2ZW50UGx1Z2luT3JkZXInKTtcbnZhciBFbnRlckxlYXZlRXZlbnRQbHVnaW4gPSByZXF1aXJlKCcuL0VudGVyTGVhdmVFdmVudFBsdWdpbicpO1xudmFyIEhUTUxET01Qcm9wZXJ0eUNvbmZpZyA9IHJlcXVpcmUoJy4vSFRNTERPTVByb3BlcnR5Q29uZmlnJyk7XG52YXIgUmVhY3RDb21wb25lbnRCcm93c2VyRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50QnJvd3NlckVudmlyb25tZW50Jyk7XG52YXIgUmVhY3RET01Db21wb25lbnQgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50Jyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdERPTUVtcHR5Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9SZWFjdERPTUVtcHR5Q29tcG9uZW50Jyk7XG52YXIgUmVhY3RET01UcmVlVHJhdmVyc2FsID0gcmVxdWlyZSgnLi9SZWFjdERPTVRyZWVUcmF2ZXJzYWwnKTtcbnZhciBSZWFjdERPTVRleHRDb21wb25lbnQgPSByZXF1aXJlKCcuL1JlYWN0RE9NVGV4dENvbXBvbmVudCcpO1xudmFyIFJlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3kgPSByZXF1aXJlKCcuL1JlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3knKTtcbnZhciBSZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL1JlYWN0RXZlbnRMaXN0ZW5lcicpO1xudmFyIFJlYWN0SW5qZWN0aW9uID0gcmVxdWlyZSgnLi9SZWFjdEluamVjdGlvbicpO1xudmFyIFJlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb24gPSByZXF1aXJlKCcuL1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb24nKTtcbnZhciBTVkdET01Qcm9wZXJ0eUNvbmZpZyA9IHJlcXVpcmUoJy4vU1ZHRE9NUHJvcGVydHlDb25maWcnKTtcbnZhciBTZWxlY3RFdmVudFBsdWdpbiA9IHJlcXVpcmUoJy4vU2VsZWN0RXZlbnRQbHVnaW4nKTtcbnZhciBTaW1wbGVFdmVudFBsdWdpbiA9IHJlcXVpcmUoJy4vU2ltcGxlRXZlbnRQbHVnaW4nKTtcblxudmFyIGFscmVhZHlJbmplY3RlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbmplY3QoKSB7XG4gIGlmIChhbHJlYWR5SW5qZWN0ZWQpIHtcbiAgICAvLyBUT0RPOiBUaGlzIGlzIGN1cnJlbnRseSB0cnVlIGJlY2F1c2UgdGhlc2UgaW5qZWN0aW9ucyBhcmUgc2hhcmVkIGJldHdlZW5cbiAgICAvLyB0aGUgY2xpZW50IGFuZCB0aGUgc2VydmVyIHBhY2thZ2UuIFRoZXkgc2hvdWxkIGJlIGJ1aWx0IGluZGVwZW5kZW50bHlcbiAgICAvLyBhbmQgbm90IHNoYXJlIGFueSBpbmplY3Rpb24gc3RhdGUuIFRoZW4gdGhpcyBwcm9ibGVtIHdpbGwgYmUgc29sdmVkLlxuICAgIHJldHVybjtcbiAgfVxuICBhbHJlYWR5SW5qZWN0ZWQgPSB0cnVlO1xuXG4gIFJlYWN0SW5qZWN0aW9uLkV2ZW50RW1pdHRlci5pbmplY3RSZWFjdEV2ZW50TGlzdGVuZXIoUmVhY3RFdmVudExpc3RlbmVyKTtcblxuICAvKipcbiAgICogSW5qZWN0IG1vZHVsZXMgZm9yIHJlc29sdmluZyBET00gaGllcmFyY2h5IGFuZCBwbHVnaW4gb3JkZXJpbmcuXG4gICAqL1xuICBSZWFjdEluamVjdGlvbi5FdmVudFBsdWdpbkh1Yi5pbmplY3RFdmVudFBsdWdpbk9yZGVyKERlZmF1bHRFdmVudFBsdWdpbk9yZGVyKTtcbiAgUmVhY3RJbmplY3Rpb24uRXZlbnRQbHVnaW5VdGlscy5pbmplY3RDb21wb25lbnRUcmVlKFJlYWN0RE9NQ29tcG9uZW50VHJlZSk7XG4gIFJlYWN0SW5qZWN0aW9uLkV2ZW50UGx1Z2luVXRpbHMuaW5qZWN0VHJlZVRyYXZlcnNhbChSZWFjdERPTVRyZWVUcmF2ZXJzYWwpO1xuXG4gIC8qKlxuICAgKiBTb21lIGltcG9ydGFudCBldmVudCBwbHVnaW5zIGluY2x1ZGVkIGJ5IGRlZmF1bHQgKHdpdGhvdXQgaGF2aW5nIHRvIHJlcXVpcmVcbiAgICogdGhlbSkuXG4gICAqL1xuICBSZWFjdEluamVjdGlvbi5FdmVudFBsdWdpbkh1Yi5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUoe1xuICAgIFNpbXBsZUV2ZW50UGx1Z2luOiBTaW1wbGVFdmVudFBsdWdpbixcbiAgICBFbnRlckxlYXZlRXZlbnRQbHVnaW46IEVudGVyTGVhdmVFdmVudFBsdWdpbixcbiAgICBDaGFuZ2VFdmVudFBsdWdpbjogQ2hhbmdlRXZlbnRQbHVnaW4sXG4gICAgU2VsZWN0RXZlbnRQbHVnaW46IFNlbGVjdEV2ZW50UGx1Z2luLFxuICAgIEJlZm9yZUlucHV0RXZlbnRQbHVnaW46IEJlZm9yZUlucHV0RXZlbnRQbHVnaW5cbiAgfSk7XG5cbiAgUmVhY3RJbmplY3Rpb24uTmF0aXZlQ29tcG9uZW50LmluamVjdEdlbmVyaWNDb21wb25lbnRDbGFzcyhSZWFjdERPTUNvbXBvbmVudCk7XG5cbiAgUmVhY3RJbmplY3Rpb24uTmF0aXZlQ29tcG9uZW50LmluamVjdFRleHRDb21wb25lbnRDbGFzcyhSZWFjdERPTVRleHRDb21wb25lbnQpO1xuXG4gIFJlYWN0SW5qZWN0aW9uLkRPTVByb3BlcnR5LmluamVjdERPTVByb3BlcnR5Q29uZmlnKEhUTUxET01Qcm9wZXJ0eUNvbmZpZyk7XG4gIFJlYWN0SW5qZWN0aW9uLkRPTVByb3BlcnR5LmluamVjdERPTVByb3BlcnR5Q29uZmlnKFNWR0RPTVByb3BlcnR5Q29uZmlnKTtcblxuICBSZWFjdEluamVjdGlvbi5FbXB0eUNvbXBvbmVudC5pbmplY3RFbXB0eUNvbXBvbmVudEZhY3RvcnkoZnVuY3Rpb24gKGluc3RhbnRpYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBSZWFjdERPTUVtcHR5Q29tcG9uZW50KGluc3RhbnRpYXRlKTtcbiAgfSk7XG5cbiAgUmVhY3RJbmplY3Rpb24uVXBkYXRlcy5pbmplY3RSZWNvbmNpbGVUcmFuc2FjdGlvbihSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uKTtcbiAgUmVhY3RJbmplY3Rpb24uVXBkYXRlcy5pbmplY3RCYXRjaGluZ1N0cmF0ZWd5KFJlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3kpO1xuXG4gIFJlYWN0SW5qZWN0aW9uLkNvbXBvbmVudC5pbmplY3RFbnZpcm9ubWVudChSZWFjdENvbXBvbmVudEJyb3dzZXJFbnZpcm9ubWVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmplY3Q6IGluamVjdFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3REZWZhdWx0SW5qZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBCZWZvcmVJbnB1dEV2ZW50UGx1Z2luXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXZlbnRDb25zdGFudHMgPSByZXF1aXJlKCcuL0V2ZW50Q29uc3RhbnRzJyk7XG52YXIgRXZlbnRQcm9wYWdhdG9ycyA9IHJlcXVpcmUoJy4vRXZlbnRQcm9wYWdhdG9ycycpO1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZmJqcy9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcbnZhciBGYWxsYmFja0NvbXBvc2l0aW9uU3RhdGUgPSByZXF1aXJlKCcuL0ZhbGxiYWNrQ29tcG9zaXRpb25TdGF0ZScpO1xudmFyIFN5bnRoZXRpY0NvbXBvc2l0aW9uRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY0NvbXBvc2l0aW9uRXZlbnQnKTtcbnZhciBTeW50aGV0aWNJbnB1dEV2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNJbnB1dEV2ZW50Jyk7XG5cbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG5cbnZhciBFTkRfS0VZQ09ERVMgPSBbOSwgMTMsIDI3LCAzMl07IC8vIFRhYiwgUmV0dXJuLCBFc2MsIFNwYWNlXG52YXIgU1RBUlRfS0VZQ09ERSA9IDIyOTtcblxudmFyIGNhblVzZUNvbXBvc2l0aW9uRXZlbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gJiYgJ0NvbXBvc2l0aW9uRXZlbnQnIGluIHdpbmRvdztcblxudmFyIGRvY3VtZW50TW9kZSA9IG51bGw7XG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmICdkb2N1bWVudE1vZGUnIGluIGRvY3VtZW50KSB7XG4gIGRvY3VtZW50TW9kZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcbn1cblxuLy8gV2Via2l0IG9mZmVycyBhIHZlcnkgdXNlZnVsIGB0ZXh0SW5wdXRgIGV2ZW50IHRoYXQgY2FuIGJlIHVzZWQgdG9cbi8vIGRpcmVjdGx5IHJlcHJlc2VudCBgYmVmb3JlSW5wdXRgLiBUaGUgSUUgYHRleHRpbnB1dGAgZXZlbnQgaXMgbm90IGFzXG4vLyB1c2VmdWwsIHNvIHdlIGRvbid0IHVzZSBpdC5cbnZhciBjYW5Vc2VUZXh0SW5wdXRFdmVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSAmJiAnVGV4dEV2ZW50JyBpbiB3aW5kb3cgJiYgIWRvY3VtZW50TW9kZSAmJiAhaXNQcmVzdG8oKTtcblxuLy8gSW4gSUU5Kywgd2UgaGF2ZSBhY2Nlc3MgdG8gY29tcG9zaXRpb24gZXZlbnRzLCBidXQgdGhlIGRhdGEgc3VwcGxpZWRcbi8vIGJ5IHRoZSBuYXRpdmUgY29tcG9zaXRpb25lbmQgZXZlbnQgbWF5IGJlIGluY29ycmVjdC4gSmFwYW5lc2UgaWRlb2dyYXBoaWNcbi8vIHNwYWNlcywgZm9yIGluc3RhbmNlIChcXHUzMDAwKSBhcmUgbm90IHJlY29yZGVkIGNvcnJlY3RseS5cbnZhciB1c2VGYWxsYmFja0NvbXBvc2l0aW9uRGF0YSA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSAmJiAoIWNhblVzZUNvbXBvc2l0aW9uRXZlbnQgfHwgZG9jdW1lbnRNb2RlICYmIGRvY3VtZW50TW9kZSA+IDggJiYgZG9jdW1lbnRNb2RlIDw9IDExKTtcblxuLyoqXG4gKiBPcGVyYSA8PSAxMiBpbmNsdWRlcyBUZXh0RXZlbnQgaW4gd2luZG93LCBidXQgZG9lcyBub3QgZmlyZVxuICogdGV4dCBpbnB1dCBldmVudHMuIFJlbHkgb24ga2V5cHJlc3MgaW5zdGVhZC5cbiAqL1xuZnVuY3Rpb24gaXNQcmVzdG8oKSB7XG4gIHZhciBvcGVyYSA9IHdpbmRvdy5vcGVyYTtcbiAgcmV0dXJuIHR5cGVvZiBvcGVyYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wZXJhLnZlcnNpb24gPT09ICdmdW5jdGlvbicgJiYgcGFyc2VJbnQob3BlcmEudmVyc2lvbigpLCAxMCkgPD0gMTI7XG59XG5cbnZhciBTUEFDRUJBUl9DT0RFID0gMzI7XG52YXIgU1BBQ0VCQVJfQ0hBUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoU1BBQ0VCQVJfQ09ERSk7XG5cbnZhciB0b3BMZXZlbFR5cGVzID0gRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlcztcblxuLy8gRXZlbnRzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIHByb3BlcnR5IG5hbWVzLlxudmFyIGV2ZW50VHlwZXMgPSB7XG4gIGJlZm9yZUlucHV0OiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25CZWZvcmVJbnB1dDogbnVsbCB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQmVmb3JlSW5wdXRDYXB0dXJlOiBudWxsIH0pXG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFt0b3BMZXZlbFR5cGVzLnRvcENvbXBvc2l0aW9uRW5kLCB0b3BMZXZlbFR5cGVzLnRvcEtleVByZXNzLCB0b3BMZXZlbFR5cGVzLnRvcFRleHRJbnB1dCwgdG9wTGV2ZWxUeXBlcy50b3BQYXN0ZV1cbiAgfSxcbiAgY29tcG9zaXRpb25FbmQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkNvbXBvc2l0aW9uRW5kOiBudWxsIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Db21wb3NpdGlvbkVuZENhcHR1cmU6IG51bGwgfSlcbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW3RvcExldmVsVHlwZXMudG9wQmx1ciwgdG9wTGV2ZWxUeXBlcy50b3BDb21wb3NpdGlvbkVuZCwgdG9wTGV2ZWxUeXBlcy50b3BLZXlEb3duLCB0b3BMZXZlbFR5cGVzLnRvcEtleVByZXNzLCB0b3BMZXZlbFR5cGVzLnRvcEtleVVwLCB0b3BMZXZlbFR5cGVzLnRvcE1vdXNlRG93bl1cbiAgfSxcbiAgY29tcG9zaXRpb25TdGFydDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uQ29tcG9zaXRpb25TdGFydDogbnVsbCB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQ29tcG9zaXRpb25TdGFydENhcHR1cmU6IG51bGwgfSlcbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW3RvcExldmVsVHlwZXMudG9wQmx1ciwgdG9wTGV2ZWxUeXBlcy50b3BDb21wb3NpdGlvblN0YXJ0LCB0b3BMZXZlbFR5cGVzLnRvcEtleURvd24sIHRvcExldmVsVHlwZXMudG9wS2V5UHJlc3MsIHRvcExldmVsVHlwZXMudG9wS2V5VXAsIHRvcExldmVsVHlwZXMudG9wTW91c2VEb3duXVxuICB9LFxuICBjb21wb3NpdGlvblVwZGF0ZToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uQ29tcG9zaXRpb25VcGRhdGU6IG51bGwgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkNvbXBvc2l0aW9uVXBkYXRlQ2FwdHVyZTogbnVsbCB9KVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbdG9wTGV2ZWxUeXBlcy50b3BCbHVyLCB0b3BMZXZlbFR5cGVzLnRvcENvbXBvc2l0aW9uVXBkYXRlLCB0b3BMZXZlbFR5cGVzLnRvcEtleURvd24sIHRvcExldmVsVHlwZXMudG9wS2V5UHJlc3MsIHRvcExldmVsVHlwZXMudG9wS2V5VXAsIHRvcExldmVsVHlwZXMudG9wTW91c2VEb3duXVxuICB9XG59O1xuXG4vLyBUcmFjayB3aGV0aGVyIHdlJ3ZlIGV2ZXIgaGFuZGxlZCBhIGtleXByZXNzIG9uIHRoZSBzcGFjZSBrZXkuXG52YXIgaGFzU3BhY2VLZXlwcmVzcyA9IGZhbHNlO1xuXG4vKipcbiAqIFJldHVybiB3aGV0aGVyIGEgbmF0aXZlIGtleXByZXNzIGV2ZW50IGlzIGFzc3VtZWQgdG8gYmUgYSBjb21tYW5kLlxuICogVGhpcyBpcyByZXF1aXJlZCBiZWNhdXNlIEZpcmVmb3ggZmlyZXMgYGtleXByZXNzYCBldmVudHMgZm9yIGtleSBjb21tYW5kc1xuICogKGN1dCwgY29weSwgc2VsZWN0LWFsbCwgZXRjLikgZXZlbiB0aG91Z2ggbm8gY2hhcmFjdGVyIGlzIGluc2VydGVkLlxuICovXG5mdW5jdGlvbiBpc0tleXByZXNzQ29tbWFuZChuYXRpdmVFdmVudCkge1xuICByZXR1cm4gKG5hdGl2ZUV2ZW50LmN0cmxLZXkgfHwgbmF0aXZlRXZlbnQuYWx0S2V5IHx8IG5hdGl2ZUV2ZW50Lm1ldGFLZXkpICYmXG4gIC8vIGN0cmxLZXkgJiYgYWx0S2V5IGlzIGVxdWl2YWxlbnQgdG8gQWx0R3IsIGFuZCBpcyBub3QgYSBjb21tYW5kLlxuICAhKG5hdGl2ZUV2ZW50LmN0cmxLZXkgJiYgbmF0aXZlRXZlbnQuYWx0S2V5KTtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgbmF0aXZlIHRvcCBsZXZlbCBldmVudHMgaW50byBldmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9wTGV2ZWxUeXBlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvc2l0aW9uRXZlbnRUeXBlKHRvcExldmVsVHlwZSkge1xuICBzd2l0Y2ggKHRvcExldmVsVHlwZSkge1xuICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BDb21wb3NpdGlvblN0YXJ0OlxuICAgICAgcmV0dXJuIGV2ZW50VHlwZXMuY29tcG9zaXRpb25TdGFydDtcbiAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQ29tcG9zaXRpb25FbmQ6XG4gICAgICByZXR1cm4gZXZlbnRUeXBlcy5jb21wb3NpdGlvbkVuZDtcbiAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQ29tcG9zaXRpb25VcGRhdGU6XG4gICAgICByZXR1cm4gZXZlbnRUeXBlcy5jb21wb3NpdGlvblVwZGF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIERvZXMgb3VyIGZhbGxiYWNrIGJlc3QtZ3Vlc3MgbW9kZWwgdGhpbmsgdGhpcyBldmVudCBzaWduaWZpZXMgdGhhdFxuICogY29tcG9zaXRpb24gaGFzIGJlZ3VuP1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b3BMZXZlbFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGYWxsYmFja0NvbXBvc2l0aW9uU3RhcnQodG9wTGV2ZWxUeXBlLCBuYXRpdmVFdmVudCkge1xuICByZXR1cm4gdG9wTGV2ZWxUeXBlID09PSB0b3BMZXZlbFR5cGVzLnRvcEtleURvd24gJiYgbmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gU1RBUlRfS0VZQ09ERTtcbn1cblxuLyoqXG4gKiBEb2VzIG91ciBmYWxsYmFjayBtb2RlIHRoaW5rIHRoYXQgdGhpcyBldmVudCBpcyB0aGUgZW5kIG9mIGNvbXBvc2l0aW9uP1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b3BMZXZlbFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGYWxsYmFja0NvbXBvc2l0aW9uRW5kKHRvcExldmVsVHlwZSwgbmF0aXZlRXZlbnQpIHtcbiAgc3dpdGNoICh0b3BMZXZlbFR5cGUpIHtcbiAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wS2V5VXA6XG4gICAgICAvLyBDb21tYW5kIGtleXMgaW5zZXJ0IG9yIGNsZWFyIElNRSBpbnB1dC5cbiAgICAgIHJldHVybiBFTkRfS0VZQ09ERVMuaW5kZXhPZihuYXRpdmVFdmVudC5rZXlDb2RlKSAhPT0gLTE7XG4gICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEtleURvd246XG4gICAgICAvLyBFeHBlY3QgSU1FIGtleUNvZGUgb24gZWFjaCBrZXlkb3duLiBJZiB3ZSBnZXQgYW55IG90aGVyXG4gICAgICAvLyBjb2RlIHdlIG11c3QgaGF2ZSBleGl0ZWQgZWFybGllci5cbiAgICAgIHJldHVybiBuYXRpdmVFdmVudC5rZXlDb2RlICE9PSBTVEFSVF9LRVlDT0RFO1xuICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BLZXlQcmVzczpcbiAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wTW91c2VEb3duOlxuICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BCbHVyOlxuICAgICAgLy8gRXZlbnRzIGFyZSBub3QgcG9zc2libGUgd2l0aG91dCBjYW5jZWxsaW5nIElNRS5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBHb29nbGUgSW5wdXQgVG9vbHMgcHJvdmlkZXMgY29tcG9zaXRpb24gZGF0YSB2aWEgYSBDdXN0b21FdmVudCxcbiAqIHdpdGggdGhlIGBkYXRhYCBwcm9wZXJ0eSBwb3B1bGF0ZWQgaW4gdGhlIGBkZXRhaWxgIG9iamVjdC4gSWYgdGhpc1xuICogaXMgYXZhaWxhYmxlIG9uIHRoZSBldmVudCBvYmplY3QsIHVzZSBpdC4gSWYgbm90LCB0aGlzIGlzIGEgcGxhaW5cbiAqIGNvbXBvc2l0aW9uIGV2ZW50IGFuZCB3ZSBoYXZlIG5vdGhpbmcgc3BlY2lhbCB0byBleHRyYWN0LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudFxuICogQHJldHVybiB7P3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RGF0YUZyb21DdXN0b21FdmVudChuYXRpdmVFdmVudCkge1xuICB2YXIgZGV0YWlsID0gbmF0aXZlRXZlbnQuZGV0YWlsO1xuICBpZiAodHlwZW9mIGRldGFpbCA9PT0gJ29iamVjdCcgJiYgJ2RhdGEnIGluIGRldGFpbCkge1xuICAgIHJldHVybiBkZXRhaWwuZGF0YTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gVHJhY2sgdGhlIGN1cnJlbnQgSU1FIGNvbXBvc2l0aW9uIGZhbGxiYWNrIG9iamVjdCwgaWYgYW55LlxudmFyIGN1cnJlbnRDb21wb3NpdGlvbiA9IG51bGw7XG5cbi8qKlxuICogQHJldHVybiB7P29iamVjdH0gQSBTeW50aGV0aWNDb21wb3NpdGlvbkV2ZW50LlxuICovXG5mdW5jdGlvbiBleHRyYWN0Q29tcG9zaXRpb25FdmVudCh0b3BMZXZlbFR5cGUsIHRhcmdldEluc3QsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCkge1xuICB2YXIgZXZlbnRUeXBlO1xuICB2YXIgZmFsbGJhY2tEYXRhO1xuXG4gIGlmIChjYW5Vc2VDb21wb3NpdGlvbkV2ZW50KSB7XG4gICAgZXZlbnRUeXBlID0gZ2V0Q29tcG9zaXRpb25FdmVudFR5cGUodG9wTGV2ZWxUeXBlKTtcbiAgfSBlbHNlIGlmICghY3VycmVudENvbXBvc2l0aW9uKSB7XG4gICAgaWYgKGlzRmFsbGJhY2tDb21wb3NpdGlvblN0YXJ0KHRvcExldmVsVHlwZSwgbmF0aXZlRXZlbnQpKSB7XG4gICAgICBldmVudFR5cGUgPSBldmVudFR5cGVzLmNvbXBvc2l0aW9uU3RhcnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRmFsbGJhY2tDb21wb3NpdGlvbkVuZCh0b3BMZXZlbFR5cGUsIG5hdGl2ZUV2ZW50KSkge1xuICAgIGV2ZW50VHlwZSA9IGV2ZW50VHlwZXMuY29tcG9zaXRpb25FbmQ7XG4gIH1cblxuICBpZiAoIWV2ZW50VHlwZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHVzZUZhbGxiYWNrQ29tcG9zaXRpb25EYXRhKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgY29tcG9zaXRpb24gaXMgc3RvcmVkIHN0YXRpY2FsbHkgYW5kIG11c3Qgbm90IGJlXG4gICAgLy8gb3ZlcndyaXR0ZW4gd2hpbGUgY29tcG9zaXRpb24gY29udGludWVzLlxuICAgIGlmICghY3VycmVudENvbXBvc2l0aW9uICYmIGV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy5jb21wb3NpdGlvblN0YXJ0KSB7XG4gICAgICBjdXJyZW50Q29tcG9zaXRpb24gPSBGYWxsYmFja0NvbXBvc2l0aW9uU3RhdGUuZ2V0UG9vbGVkKG5hdGl2ZUV2ZW50VGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy5jb21wb3NpdGlvbkVuZCkge1xuICAgICAgaWYgKGN1cnJlbnRDb21wb3NpdGlvbikge1xuICAgICAgICBmYWxsYmFja0RhdGEgPSBjdXJyZW50Q29tcG9zaXRpb24uZ2V0RGF0YSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBldmVudCA9IFN5bnRoZXRpY0NvbXBvc2l0aW9uRXZlbnQuZ2V0UG9vbGVkKGV2ZW50VHlwZSwgdGFyZ2V0SW5zdCwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KTtcblxuICBpZiAoZmFsbGJhY2tEYXRhKSB7XG4gICAgLy8gSW5qZWN0IGRhdGEgZ2VuZXJhdGVkIGZyb20gZmFsbGJhY2sgcGF0aCBpbnRvIHRoZSBzeW50aGV0aWMgZXZlbnQuXG4gICAgLy8gVGhpcyBtYXRjaGVzIHRoZSBwcm9wZXJ0eSBvZiBuYXRpdmUgQ29tcG9zaXRpb25FdmVudEludGVyZmFjZS5cbiAgICBldmVudC5kYXRhID0gZmFsbGJhY2tEYXRhO1xuICB9IGVsc2Uge1xuICAgIHZhciBjdXN0b21EYXRhID0gZ2V0RGF0YUZyb21DdXN0b21FdmVudChuYXRpdmVFdmVudCk7XG4gICAgaWYgKGN1c3RvbURhdGEgIT09IG51bGwpIHtcbiAgICAgIGV2ZW50LmRhdGEgPSBjdXN0b21EYXRhO1xuICAgIH1cbiAgfVxuXG4gIEV2ZW50UHJvcGFnYXRvcnMuYWNjdW11bGF0ZVR3b1BoYXNlRGlzcGF0Y2hlcyhldmVudCk7XG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9wTGV2ZWxUeXBlIFJlY29yZCBmcm9tIGBFdmVudENvbnN0YW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gbmF0aXZlRXZlbnQgTmF0aXZlIGJyb3dzZXIgZXZlbnQuXG4gKiBAcmV0dXJuIHs/c3RyaW5nfSBUaGUgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBgYmVmb3JlSW5wdXRgIGV2ZW50LlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmVCZWZvcmVJbnB1dENoYXJzKHRvcExldmVsVHlwZSwgbmF0aXZlRXZlbnQpIHtcbiAgc3dpdGNoICh0b3BMZXZlbFR5cGUpIHtcbiAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQ29tcG9zaXRpb25FbmQ6XG4gICAgICByZXR1cm4gZ2V0RGF0YUZyb21DdXN0b21FdmVudChuYXRpdmVFdmVudCk7XG4gICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEtleVByZXNzOlxuICAgICAgLyoqXG4gICAgICAgKiBJZiBuYXRpdmUgYHRleHRJbnB1dGAgZXZlbnRzIGFyZSBhdmFpbGFibGUsIG91ciBnb2FsIGlzIHRvIG1ha2VcbiAgICAgICAqIHVzZSBvZiB0aGVtLiBIb3dldmVyLCB0aGVyZSBpcyBhIHNwZWNpYWwgY2FzZTogdGhlIHNwYWNlYmFyIGtleS5cbiAgICAgICAqIEluIFdlYmtpdCwgcHJldmVudGluZyBkZWZhdWx0IG9uIGEgc3BhY2ViYXIgYHRleHRJbnB1dGAgZXZlbnRcbiAgICAgICAqIGNhbmNlbHMgY2hhcmFjdGVyIGluc2VydGlvbiwgYnV0IGl0ICphbHNvKiBjYXVzZXMgdGhlIGJyb3dzZXJcbiAgICAgICAqIHRvIGZhbGwgYmFjayB0byBpdHMgZGVmYXVsdCBzcGFjZWJhciBiZWhhdmlvciBvZiBzY3JvbGxpbmcgdGhlXG4gICAgICAgKiBwYWdlLlxuICAgICAgICpcbiAgICAgICAqIFRyYWNraW5nIGF0OlxuICAgICAgICogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM1NTEwM1xuICAgICAgICpcbiAgICAgICAqIFRvIGF2b2lkIHRoaXMgaXNzdWUsIHVzZSB0aGUga2V5cHJlc3MgZXZlbnQgYXMgaWYgbm8gYHRleHRJbnB1dGBcbiAgICAgICAqIGV2ZW50IGlzIGF2YWlsYWJsZS5cbiAgICAgICAqL1xuICAgICAgdmFyIHdoaWNoID0gbmF0aXZlRXZlbnQud2hpY2g7XG4gICAgICBpZiAod2hpY2ggIT09IFNQQUNFQkFSX0NPREUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGhhc1NwYWNlS2V5cHJlc3MgPSB0cnVlO1xuICAgICAgcmV0dXJuIFNQQUNFQkFSX0NIQVI7XG5cbiAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wVGV4dElucHV0OlxuICAgICAgLy8gUmVjb3JkIHRoZSBjaGFyYWN0ZXJzIHRvIGJlIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICB2YXIgY2hhcnMgPSBuYXRpdmVFdmVudC5kYXRhO1xuXG4gICAgICAvLyBJZiBpdCdzIGEgc3BhY2ViYXIgY2hhcmFjdGVyLCBhc3N1bWUgdGhhdCB3ZSBoYXZlIGFscmVhZHkgaGFuZGxlZFxuICAgICAgLy8gaXQgYXQgdGhlIGtleXByZXNzIGxldmVsIGFuZCBiYWlsIGltbWVkaWF0ZWx5LiBBbmRyb2lkIENocm9tZVxuICAgICAgLy8gZG9lc24ndCBnaXZlIHVzIGtleWNvZGVzLCBzbyB3ZSBuZWVkIHRvIGJsYWNrbGlzdCBpdC5cbiAgICAgIGlmIChjaGFycyA9PT0gU1BBQ0VCQVJfQ0hBUiAmJiBoYXNTcGFjZUtleXByZXNzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hhcnM7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRm9yIG90aGVyIG5hdGl2ZSBldmVudCB0eXBlcywgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHByb3ZpZGUgdGhlIGB0ZXh0SW5wdXRgIGV2ZW50LCBleHRyYWN0IHRoZVxuICogYXBwcm9wcmlhdGUgc3RyaW5nIHRvIHVzZSBmb3IgU3ludGhldGljSW5wdXRFdmVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9wTGV2ZWxUeXBlIFJlY29yZCBmcm9tIGBFdmVudENvbnN0YW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gbmF0aXZlRXZlbnQgTmF0aXZlIGJyb3dzZXIgZXZlbnQuXG4gKiBAcmV0dXJuIHs/c3RyaW5nfSBUaGUgZmFsbGJhY2sgc3RyaW5nIGZvciB0aGlzIGBiZWZvcmVJbnB1dGAgZXZlbnQuXG4gKi9cbmZ1bmN0aW9uIGdldEZhbGxiYWNrQmVmb3JlSW5wdXRDaGFycyh0b3BMZXZlbFR5cGUsIG5hdGl2ZUV2ZW50KSB7XG4gIC8vIElmIHdlIGFyZSBjdXJyZW50bHkgY29tcG9zaW5nIChJTUUpIGFuZCB1c2luZyBhIGZhbGxiYWNrIHRvIGRvIHNvLFxuICAvLyB0cnkgdG8gZXh0cmFjdCB0aGUgY29tcG9zZWQgY2hhcmFjdGVycyBmcm9tIHRoZSBmYWxsYmFjayBvYmplY3QuXG4gIGlmIChjdXJyZW50Q29tcG9zaXRpb24pIHtcbiAgICBpZiAodG9wTGV2ZWxUeXBlID09PSB0b3BMZXZlbFR5cGVzLnRvcENvbXBvc2l0aW9uRW5kIHx8IGlzRmFsbGJhY2tDb21wb3NpdGlvbkVuZCh0b3BMZXZlbFR5cGUsIG5hdGl2ZUV2ZW50KSkge1xuICAgICAgdmFyIGNoYXJzID0gY3VycmVudENvbXBvc2l0aW9uLmdldERhdGEoKTtcbiAgICAgIEZhbGxiYWNrQ29tcG9zaXRpb25TdGF0ZS5yZWxlYXNlKGN1cnJlbnRDb21wb3NpdGlvbik7XG4gICAgICBjdXJyZW50Q29tcG9zaXRpb24gPSBudWxsO1xuICAgICAgcmV0dXJuIGNoYXJzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAodG9wTGV2ZWxUeXBlKSB7XG4gICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFBhc3RlOlxuICAgICAgLy8gSWYgYSBwYXN0ZSBldmVudCBvY2N1cnMgYWZ0ZXIgYSBrZXlwcmVzcywgdGhyb3cgb3V0IHRoZSBpbnB1dFxuICAgICAgLy8gY2hhcnMuIFBhc3RlIGV2ZW50cyBzaG91bGQgbm90IGxlYWQgdG8gQmVmb3JlSW5wdXQgZXZlbnRzLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEtleVByZXNzOlxuICAgICAgLyoqXG4gICAgICAgKiBBcyBvZiB2MjcsIEZpcmVmb3ggbWF5IGZpcmUga2V5cHJlc3MgZXZlbnRzIGV2ZW4gd2hlbiBubyBjaGFyYWN0ZXJcbiAgICAgICAqIHdpbGwgYmUgaW5zZXJ0ZWQuIEEgZmV3IHBvc3NpYmlsaXRpZXM6XG4gICAgICAgKlxuICAgICAgICogLSBgd2hpY2hgIGlzIGAwYC4gQXJyb3cga2V5cywgRXNjIGtleSwgZXRjLlxuICAgICAgICpcbiAgICAgICAqIC0gYHdoaWNoYCBpcyB0aGUgcHJlc3NlZCBrZXkgY29kZSwgYnV0IG5vIGNoYXIgaXMgYXZhaWxhYmxlLlxuICAgICAgICogICBFeDogJ0FsdEdyICsgZGAgaW4gUG9saXNoLiBUaGVyZSBpcyBubyBtb2RpZmllZCBjaGFyYWN0ZXIgZm9yXG4gICAgICAgKiAgIHRoaXMga2V5IGNvbWJpbmF0aW9uIGFuZCBubyBjaGFyYWN0ZXIgaXMgaW5zZXJ0ZWQgaW50byB0aGVcbiAgICAgICAqICAgZG9jdW1lbnQsIGJ1dCBGRiBmaXJlcyB0aGUga2V5cHJlc3MgZm9yIGNoYXIgY29kZSBgMTAwYCBhbnl3YXkuXG4gICAgICAgKiAgIE5vIGBpbnB1dGAgZXZlbnQgd2lsbCBvY2N1ci5cbiAgICAgICAqXG4gICAgICAgKiAtIGB3aGljaGAgaXMgdGhlIHByZXNzZWQga2V5IGNvZGUsIGJ1dCBhIGNvbW1hbmQgY29tYmluYXRpb24gaXNcbiAgICAgICAqICAgYmVpbmcgdXNlZC4gRXg6IGBDbWQrQ2AuIE5vIGNoYXJhY3RlciBpcyBpbnNlcnRlZCwgYW5kIG5vXG4gICAgICAgKiAgIGBpbnB1dGAgZXZlbnQgd2lsbCBvY2N1ci5cbiAgICAgICAqL1xuICAgICAgaWYgKG5hdGl2ZUV2ZW50LndoaWNoICYmICFpc0tleXByZXNzQ29tbWFuZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobmF0aXZlRXZlbnQud2hpY2gpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcENvbXBvc2l0aW9uRW5kOlxuICAgICAgcmV0dXJuIHVzZUZhbGxiYWNrQ29tcG9zaXRpb25EYXRhID8gbnVsbCA6IG5hdGl2ZUV2ZW50LmRhdGE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCBhIFN5bnRoZXRpY0lucHV0RXZlbnQgZm9yIGBiZWZvcmVJbnB1dGAsIGJhc2VkIG9uIGVpdGhlciBuYXRpdmVcbiAqIGB0ZXh0SW5wdXRgIG9yIGZhbGxiYWNrIGJlaGF2aW9yLlxuICpcbiAqIEByZXR1cm4gez9vYmplY3R9IEEgU3ludGhldGljSW5wdXRFdmVudC5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEJlZm9yZUlucHV0RXZlbnQodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0LCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgdmFyIGNoYXJzO1xuXG4gIGlmIChjYW5Vc2VUZXh0SW5wdXRFdmVudCkge1xuICAgIGNoYXJzID0gZ2V0TmF0aXZlQmVmb3JlSW5wdXRDaGFycyh0b3BMZXZlbFR5cGUsIG5hdGl2ZUV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBjaGFycyA9IGdldEZhbGxiYWNrQmVmb3JlSW5wdXRDaGFycyh0b3BMZXZlbFR5cGUsIG5hdGl2ZUV2ZW50KTtcbiAgfVxuXG4gIC8vIElmIG5vIGNoYXJhY3RlcnMgYXJlIGJlaW5nIGluc2VydGVkLCBubyBCZWZvcmVJbnB1dCBldmVudCBzaG91bGRcbiAgLy8gYmUgZmlyZWQuXG4gIGlmICghY2hhcnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBldmVudCA9IFN5bnRoZXRpY0lucHV0RXZlbnQuZ2V0UG9vbGVkKGV2ZW50VHlwZXMuYmVmb3JlSW5wdXQsIHRhcmdldEluc3QsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG5cbiAgZXZlbnQuZGF0YSA9IGNoYXJzO1xuICBFdmVudFByb3BhZ2F0b3JzLmFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXMoZXZlbnQpO1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGBvbkJlZm9yZUlucHV0YCBldmVudCB0byBtYXRjaFxuICogaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAxMzExMDUvI2V2ZW50cy1pbnB1dGV2ZW50cy5cbiAqXG4gKiBUaGlzIGV2ZW50IHBsdWdpbiBpcyBiYXNlZCBvbiB0aGUgbmF0aXZlIGB0ZXh0SW5wdXRgIGV2ZW50XG4gKiBhdmFpbGFibGUgaW4gQ2hyb21lLCBTYWZhcmksIE9wZXJhLCBhbmQgSUUuIFRoaXMgZXZlbnQgZmlyZXMgYWZ0ZXJcbiAqIGBvbktleVByZXNzYCBhbmQgYG9uQ29tcG9zaXRpb25FbmRgLCBidXQgYmVmb3JlIGBvbklucHV0YC5cbiAqXG4gKiBgYmVmb3JlSW5wdXRgIGlzIHNwZWMnZCBidXQgbm90IGltcGxlbWVudGVkIGluIGFueSBicm93c2VycywgYW5kXG4gKiB0aGUgYGlucHV0YCBldmVudCBkb2VzIG5vdCBwcm92aWRlIGFueSB1c2VmdWwgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBoYXNcbiAqIGFjdHVhbGx5IGJlZW4gYWRkZWQsIGNvbnRyYXJ5IHRvIHRoZSBzcGVjLiBUaHVzLCBgdGV4dElucHV0YCBpcyB0aGUgYmVzdFxuICogYXZhaWxhYmxlIGV2ZW50IHRvIGlkZW50aWZ5IHRoZSBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSBhY3R1YWxseSBiZWVuIGluc2VydGVkXG4gKiBpbnRvIHRoZSB0YXJnZXQgbm9kZS5cbiAqXG4gKiBUaGlzIHBsdWdpbiBpcyBhbHNvIHJlc3BvbnNpYmxlIGZvciBlbWl0dGluZyBgY29tcG9zaXRpb25gIGV2ZW50cywgdGh1c1xuICogYWxsb3dpbmcgdXMgdG8gc2hhcmUgY29tcG9zaXRpb24gZmFsbGJhY2sgY29kZSBmb3IgYm90aCBgYmVmb3JlSW5wdXRgIGFuZFxuICogYGNvbXBvc2l0aW9uYCBldmVudCB0eXBlcy5cbiAqL1xudmFyIEJlZm9yZUlucHV0RXZlbnRQbHVnaW4gPSB7XG5cbiAgZXZlbnRUeXBlczogZXZlbnRUeXBlcyxcblxuICBleHRyYWN0RXZlbnRzOiBmdW5jdGlvbiAodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0LCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgICByZXR1cm4gW2V4dHJhY3RDb21wb3NpdGlvbkV2ZW50KHRvcExldmVsVHlwZSwgdGFyZ2V0SW5zdCwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KSwgZXh0cmFjdEJlZm9yZUlucHV0RXZlbnQodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0LCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpXTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZWZvcmVJbnB1dEV2ZW50UGx1Z2luO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9CZWZvcmVJbnB1dEV2ZW50UGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gMTcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXZlbnRQcm9wYWdhdG9yc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEV2ZW50Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9FdmVudENvbnN0YW50cycpO1xudmFyIEV2ZW50UGx1Z2luSHViID0gcmVxdWlyZSgnLi9FdmVudFBsdWdpbkh1YicpO1xudmFyIEV2ZW50UGx1Z2luVXRpbHMgPSByZXF1aXJlKCcuL0V2ZW50UGx1Z2luVXRpbHMnKTtcblxudmFyIGFjY3VtdWxhdGVJbnRvID0gcmVxdWlyZSgnLi9hY2N1bXVsYXRlSW50bycpO1xudmFyIGZvckVhY2hBY2N1bXVsYXRlZCA9IHJlcXVpcmUoJy4vZm9yRWFjaEFjY3VtdWxhdGVkJyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIFByb3BhZ2F0aW9uUGhhc2VzID0gRXZlbnRDb25zdGFudHMuUHJvcGFnYXRpb25QaGFzZXM7XG52YXIgZ2V0TGlzdGVuZXIgPSBFdmVudFBsdWdpbkh1Yi5nZXRMaXN0ZW5lcjtcblxuLyoqXG4gKiBTb21lIGV2ZW50IHR5cGVzIGhhdmUgYSBub3Rpb24gb2YgZGlmZmVyZW50IHJlZ2lzdHJhdGlvbiBuYW1lcyBmb3IgZGlmZmVyZW50XG4gKiBcInBoYXNlc1wiIG9mIHByb3BhZ2F0aW9uLiBUaGlzIGZpbmRzIGxpc3RlbmVycyBieSBhIGdpdmVuIHBoYXNlLlxuICovXG5mdW5jdGlvbiBsaXN0ZW5lckF0UGhhc2UoaW5zdCwgZXZlbnQsIHByb3BhZ2F0aW9uUGhhc2UpIHtcbiAgdmFyIHJlZ2lzdHJhdGlvbk5hbWUgPSBldmVudC5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lc1twcm9wYWdhdGlvblBoYXNlXTtcbiAgcmV0dXJuIGdldExpc3RlbmVyKGluc3QsIHJlZ2lzdHJhdGlvbk5hbWUpO1xufVxuXG4vKipcbiAqIFRhZ3MgYSBgU3ludGhldGljRXZlbnRgIHdpdGggZGlzcGF0Y2hlZCBsaXN0ZW5lcnMuIENyZWF0aW5nIHRoaXMgZnVuY3Rpb25cbiAqIGhlcmUsIGFsbG93cyB1cyB0byBub3QgaGF2ZSB0byBiaW5kIG9yIGNyZWF0ZSBmdW5jdGlvbnMgZm9yIGVhY2ggZXZlbnQuXG4gKiBNdXRhdGluZyB0aGUgZXZlbnQncyBtZW1iZXJzIGFsbG93cyB1cyB0byBub3QgaGF2ZSB0byBjcmVhdGUgYSB3cmFwcGluZ1xuICogXCJkaXNwYXRjaFwiIG9iamVjdCB0aGF0IHBhaXJzIHRoZSBldmVudCB3aXRoIHRoZSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gYWNjdW11bGF0ZURpcmVjdGlvbmFsRGlzcGF0Y2hlcyhpbnN0LCB1cHdhcmRzLCBldmVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGluc3QsICdEaXNwYXRjaGluZyBpbnN0IG11c3Qgbm90IGJlIG51bGwnKSA6IHZvaWQgMDtcbiAgfVxuICB2YXIgcGhhc2UgPSB1cHdhcmRzID8gUHJvcGFnYXRpb25QaGFzZXMuYnViYmxlZCA6IFByb3BhZ2F0aW9uUGhhc2VzLmNhcHR1cmVkO1xuICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lckF0UGhhc2UoaW5zdCwgZXZlbnQsIHBoYXNlKTtcbiAgaWYgKGxpc3RlbmVyKSB7XG4gICAgZXZlbnQuX2Rpc3BhdGNoTGlzdGVuZXJzID0gYWNjdW11bGF0ZUludG8oZXZlbnQuX2Rpc3BhdGNoTGlzdGVuZXJzLCBsaXN0ZW5lcik7XG4gICAgZXZlbnQuX2Rpc3BhdGNoSW5zdGFuY2VzID0gYWNjdW11bGF0ZUludG8oZXZlbnQuX2Rpc3BhdGNoSW5zdGFuY2VzLCBpbnN0KTtcbiAgfVxufVxuXG4vKipcbiAqIENvbGxlY3QgZGlzcGF0Y2hlcyAobXVzdCBiZSBlbnRpcmVseSBjb2xsZWN0ZWQgYmVmb3JlIGRpc3BhdGNoaW5nIC0gc2VlIHVuaXRcbiAqIHRlc3RzKS4gTGF6aWx5IGFsbG9jYXRlIHRoZSBhcnJheSB0byBjb25zZXJ2ZSBtZW1vcnkuICBXZSBtdXN0IGxvb3AgdGhyb3VnaFxuICogZWFjaCBldmVudCBhbmQgcGVyZm9ybSB0aGUgdHJhdmVyc2FsIGZvciBlYWNoIG9uZS4gV2UgY2Fubm90IHBlcmZvcm0gYVxuICogc2luZ2xlIHRyYXZlcnNhbCBmb3IgdGhlIGVudGlyZSBjb2xsZWN0aW9uIG9mIGV2ZW50cyBiZWNhdXNlIGVhY2ggZXZlbnQgbWF5XG4gKiBoYXZlIGEgZGlmZmVyZW50IHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gYWNjdW11bGF0ZVR3b1BoYXNlRGlzcGF0Y2hlc1NpbmdsZShldmVudCkge1xuICBpZiAoZXZlbnQgJiYgZXZlbnQuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXMpIHtcbiAgICBFdmVudFBsdWdpblV0aWxzLnRyYXZlcnNlVHdvUGhhc2UoZXZlbnQuX3RhcmdldEluc3QsIGFjY3VtdWxhdGVEaXJlY3Rpb25hbERpc3BhdGNoZXMsIGV2ZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIFNhbWUgYXMgYGFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXNTaW5nbGVgLCBidXQgc2tpcHMgb3ZlciB0aGUgdGFyZ2V0SUQuXG4gKi9cbmZ1bmN0aW9uIGFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXNTaW5nbGVTa2lwVGFyZ2V0KGV2ZW50KSB7XG4gIGlmIChldmVudCAmJiBldmVudC5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lcykge1xuICAgIHZhciB0YXJnZXRJbnN0ID0gZXZlbnQuX3RhcmdldEluc3Q7XG4gICAgdmFyIHBhcmVudEluc3QgPSB0YXJnZXRJbnN0ID8gRXZlbnRQbHVnaW5VdGlscy5nZXRQYXJlbnRJbnN0YW5jZSh0YXJnZXRJbnN0KSA6IG51bGw7XG4gICAgRXZlbnRQbHVnaW5VdGlscy50cmF2ZXJzZVR3b1BoYXNlKHBhcmVudEluc3QsIGFjY3VtdWxhdGVEaXJlY3Rpb25hbERpc3BhdGNoZXMsIGV2ZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIEFjY3VtdWxhdGVzIHdpdGhvdXQgcmVnYXJkIHRvIGRpcmVjdGlvbiwgZG9lcyBub3QgbG9vayBmb3IgcGhhc2VkXG4gKiByZWdpc3RyYXRpb24gbmFtZXMuIFNhbWUgYXMgYGFjY3VtdWxhdGVEaXJlY3REaXNwYXRjaGVzU2luZ2xlYCBidXQgd2l0aG91dFxuICogcmVxdWlyaW5nIHRoYXQgdGhlIGBkaXNwYXRjaE1hcmtlcmAgYmUgdGhlIHNhbWUgYXMgdGhlIGRpc3BhdGNoZWQgSUQuXG4gKi9cbmZ1bmN0aW9uIGFjY3VtdWxhdGVEaXNwYXRjaGVzKGluc3QsIGlnbm9yZWREaXJlY3Rpb24sIGV2ZW50KSB7XG4gIGlmIChldmVudCAmJiBldmVudC5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lKSB7XG4gICAgdmFyIHJlZ2lzdHJhdGlvbk5hbWUgPSBldmVudC5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lO1xuICAgIHZhciBsaXN0ZW5lciA9IGdldExpc3RlbmVyKGluc3QsIHJlZ2lzdHJhdGlvbk5hbWUpO1xuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgZXZlbnQuX2Rpc3BhdGNoTGlzdGVuZXJzID0gYWNjdW11bGF0ZUludG8oZXZlbnQuX2Rpc3BhdGNoTGlzdGVuZXJzLCBsaXN0ZW5lcik7XG4gICAgICBldmVudC5fZGlzcGF0Y2hJbnN0YW5jZXMgPSBhY2N1bXVsYXRlSW50byhldmVudC5fZGlzcGF0Y2hJbnN0YW5jZXMsIGluc3QpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY3VtdWxhdGVzIGRpc3BhdGNoZXMgb24gYW4gYFN5bnRoZXRpY0V2ZW50YCwgYnV0IG9ubHkgZm9yIHRoZVxuICogYGRpc3BhdGNoTWFya2VyYC5cbiAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGFjY3VtdWxhdGVEaXJlY3REaXNwYXRjaGVzU2luZ2xlKGV2ZW50KSB7XG4gIGlmIChldmVudCAmJiBldmVudC5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lKSB7XG4gICAgYWNjdW11bGF0ZURpc3BhdGNoZXMoZXZlbnQuX3RhcmdldEluc3QsIG51bGwsIGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzKGV2ZW50cykge1xuICBmb3JFYWNoQWNjdW11bGF0ZWQoZXZlbnRzLCBhY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzU2luZ2xlKTtcbn1cblxuZnVuY3Rpb24gYWNjdW11bGF0ZVR3b1BoYXNlRGlzcGF0Y2hlc1NraXBUYXJnZXQoZXZlbnRzKSB7XG4gIGZvckVhY2hBY2N1bXVsYXRlZChldmVudHMsIGFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXNTaW5nbGVTa2lwVGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gYWNjdW11bGF0ZUVudGVyTGVhdmVEaXNwYXRjaGVzKGxlYXZlLCBlbnRlciwgZnJvbSwgdG8pIHtcbiAgRXZlbnRQbHVnaW5VdGlscy50cmF2ZXJzZUVudGVyTGVhdmUoZnJvbSwgdG8sIGFjY3VtdWxhdGVEaXNwYXRjaGVzLCBsZWF2ZSwgZW50ZXIpO1xufVxuXG5mdW5jdGlvbiBhY2N1bXVsYXRlRGlyZWN0RGlzcGF0Y2hlcyhldmVudHMpIHtcbiAgZm9yRWFjaEFjY3VtdWxhdGVkKGV2ZW50cywgYWNjdW11bGF0ZURpcmVjdERpc3BhdGNoZXNTaW5nbGUpO1xufVxuXG4vKipcbiAqIEEgc21hbGwgc2V0IG9mIHByb3BhZ2F0aW9uIHBhdHRlcm5zLCBlYWNoIG9mIHdoaWNoIHdpbGwgYWNjZXB0IGEgc21hbGwgYW1vdW50XG4gKiBvZiBpbmZvcm1hdGlvbiwgYW5kIGdlbmVyYXRlIGEgc2V0IG9mIFwiZGlzcGF0Y2ggcmVhZHkgZXZlbnQgb2JqZWN0c1wiIC0gd2hpY2hcbiAqIGFyZSBzZXRzIG9mIGV2ZW50cyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGFubm90YXRlZCB3aXRoIGEgc2V0IG9mIGRpc3BhdGNoZWRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9ucy9pZHMuIFRoZSBBUEkgaXMgZGVzaWduZWQgdGhpcyB3YXkgdG8gZGlzY291cmFnZSB0aGVzZVxuICogcHJvcGFnYXRpb24gc3RyYXRlZ2llcyBmcm9tIGFjdHVhbGx5IGV4ZWN1dGluZyB0aGUgZGlzcGF0Y2hlcywgc2luY2Ugd2VcbiAqIGFsd2F5cyB3YW50IHRvIGNvbGxlY3QgdGhlIGVudGlyZSBzZXQgb2YgZGlzcGF0Y2hlcyBiZWZvcmUgZXhlY3V0aW5nIGV2ZW50IGFcbiAqIHNpbmdsZSBvbmUuXG4gKlxuICogQGNvbnN0cnVjdG9yIEV2ZW50UHJvcGFnYXRvcnNcbiAqL1xudmFyIEV2ZW50UHJvcGFnYXRvcnMgPSB7XG4gIGFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXM6IGFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXMsXG4gIGFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXNTa2lwVGFyZ2V0OiBhY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzU2tpcFRhcmdldCxcbiAgYWNjdW11bGF0ZURpcmVjdERpc3BhdGNoZXM6IGFjY3VtdWxhdGVEaXJlY3REaXNwYXRjaGVzLFxuICBhY2N1bXVsYXRlRW50ZXJMZWF2ZURpc3BhdGNoZXM6IGFjY3VtdWxhdGVFbnRlckxlYXZlRGlzcGF0Y2hlc1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudFByb3BhZ2F0b3JzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9FdmVudFByb3BhZ2F0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMTczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmFsbGJhY2tDb21wb3NpdGlvblN0YXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFBvb2xlZENsYXNzID0gcmVxdWlyZSgnLi9Qb29sZWRDbGFzcycpO1xuXG52YXIgZ2V0VGV4dENvbnRlbnRBY2Nlc3NvciA9IHJlcXVpcmUoJy4vZ2V0VGV4dENvbnRlbnRBY2Nlc3NvcicpO1xuXG4vKipcbiAqIFRoaXMgaGVscGVyIGNsYXNzIHN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCB0ZXh0IGNvbnRlbnQgb2YgYSB0YXJnZXQgbm9kZSxcbiAqIGFsbG93aW5nIGNvbXBhcmlzb24gb2YgY29udGVudCBiZWZvcmUgYW5kIGFmdGVyIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogSWRlbnRpZnkgdGhlIG5vZGUgd2hlcmUgc2VsZWN0aW9uIGN1cnJlbnRseSBiZWdpbnMsIHRoZW4gb2JzZXJ2ZVxuICogYm90aCBpdHMgdGV4dCBjb250ZW50IGFuZCBpdHMgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgRE9NLiBTaW5jZSB0aGVcbiAqIGJyb3dzZXIgbWF5IG5hdGl2ZWx5IHJlcGxhY2UgdGhlIHRhcmdldCBub2RlIGR1cmluZyBjb21wb3NpdGlvbiwgd2UgY2FuXG4gKiB1c2UgaXRzIHBvc2l0aW9uIHRvIGZpbmQgaXRzIHJlcGxhY2VtZW50LlxuICpcbiAqIEBwYXJhbSB7RE9NRXZlbnRUYXJnZXR9IHJvb3RcbiAqL1xuZnVuY3Rpb24gRmFsbGJhY2tDb21wb3NpdGlvblN0YXRlKHJvb3QpIHtcbiAgdGhpcy5fcm9vdCA9IHJvb3Q7XG4gIHRoaXMuX3N0YXJ0VGV4dCA9IHRoaXMuZ2V0VGV4dCgpO1xuICB0aGlzLl9mYWxsYmFja1RleHQgPSBudWxsO1xufVxuXG5fYXNzaWduKEZhbGxiYWNrQ29tcG9zaXRpb25TdGF0ZS5wcm90b3R5cGUsIHtcbiAgZGVzdHJ1Y3RvcjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0VGV4dCA9IG51bGw7XG4gICAgdGhpcy5fZmFsbGJhY2tUZXh0ID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgdGV4dCBvZiBpbnB1dC5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0VGV4dDogZnVuY3Rpb24gKCkge1xuICAgIGlmICgndmFsdWUnIGluIHRoaXMuX3Jvb3QpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290LnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcm9vdFtnZXRUZXh0Q29udGVudEFjY2Vzc29yKCldO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIGRpZmZlcmluZyBzdWJzdHJpbmcgYmV0d2VlbiB0aGUgaW5pdGlhbGx5IHN0b3JlZFxuICAgKiB0ZXh0IGNvbnRlbnQgYW5kIHRoZSBjdXJyZW50IGNvbnRlbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fZmFsbGJhY2tUZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2tUZXh0O1xuICAgIH1cblxuICAgIHZhciBzdGFydDtcbiAgICB2YXIgc3RhcnRWYWx1ZSA9IHRoaXMuX3N0YXJ0VGV4dDtcbiAgICB2YXIgc3RhcnRMZW5ndGggPSBzdGFydFZhbHVlLmxlbmd0aDtcbiAgICB2YXIgZW5kO1xuICAgIHZhciBlbmRWYWx1ZSA9IHRoaXMuZ2V0VGV4dCgpO1xuICAgIHZhciBlbmRMZW5ndGggPSBlbmRWYWx1ZS5sZW5ndGg7XG5cbiAgICBmb3IgKHN0YXJ0ID0gMDsgc3RhcnQgPCBzdGFydExlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKHN0YXJ0VmFsdWVbc3RhcnRdICE9PSBlbmRWYWx1ZVtzdGFydF0pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1pbkVuZCA9IHN0YXJ0TGVuZ3RoIC0gc3RhcnQ7XG4gICAgZm9yIChlbmQgPSAxOyBlbmQgPD0gbWluRW5kOyBlbmQrKykge1xuICAgICAgaWYgKHN0YXJ0VmFsdWVbc3RhcnRMZW5ndGggLSBlbmRdICE9PSBlbmRWYWx1ZVtlbmRMZW5ndGggLSBlbmRdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzbGljZVRhaWwgPSBlbmQgPiAxID8gMSAtIGVuZCA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mYWxsYmFja1RleHQgPSBlbmRWYWx1ZS5zbGljZShzdGFydCwgc2xpY2VUYWlsKTtcbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2tUZXh0O1xuICB9XG59KTtcblxuUG9vbGVkQ2xhc3MuYWRkUG9vbGluZ1RvKEZhbGxiYWNrQ29tcG9zaXRpb25TdGF0ZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmFsbGJhY2tDb21wb3NpdGlvblN0YXRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9GYWxsYmFja0NvbXBvc2l0aW9uU3RhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXRUZXh0Q29udGVudEFjY2Vzc29yXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgY29udGVudEtleSA9IG51bGw7XG5cbi8qKlxuICogR2V0cyB0aGUga2V5IHVzZWQgdG8gYWNjZXNzIHRleHQgY29udGVudCBvbiBhIERPTSBub2RlLlxuICpcbiAqIEByZXR1cm4gez9zdHJpbmd9IEtleSB1c2VkIHRvIGFjY2VzcyB0ZXh0IGNvbnRlbnQuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnRBY2Nlc3NvcigpIHtcbiAgaWYgKCFjb250ZW50S2V5ICYmIEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAgIC8vIFByZWZlciB0ZXh0Q29udGVudCB0byBpbm5lclRleHQgYmVjYXVzZSBtYW55IGJyb3dzZXJzIHN1cHBvcnQgYm90aCBidXRcbiAgICAvLyBTVkcgPHRleHQ+IGVsZW1lbnRzIGRvbid0IHN1cHBvcnQgaW5uZXJUZXh0IGV2ZW4gd2hlbiA8ZGl2PiBkb2VzLlxuICAgIGNvbnRlbnRLZXkgPSAndGV4dENvbnRlbnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/ICd0ZXh0Q29udGVudCcgOiAnaW5uZXJUZXh0JztcbiAgfVxuICByZXR1cm4gY29udGVudEtleTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUZXh0Q29udGVudEFjY2Vzc29yO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9nZXRUZXh0Q29udGVudEFjY2Vzc29yLmpzXG4gKiogbW9kdWxlIGlkID0gMTc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU3ludGhldGljQ29tcG9zaXRpb25FdmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFN5bnRoZXRpY0V2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNFdmVudCcpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgRXZlbnRcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtY29tcG9zaXRpb25ldmVudHNcbiAqL1xudmFyIENvbXBvc2l0aW9uRXZlbnRJbnRlcmZhY2UgPSB7XG4gIGRhdGE6IG51bGxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY1VJRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY0NvbXBvc2l0aW9uRXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY0V2ZW50LmNhbGwodGhpcywgZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpO1xufVxuXG5TeW50aGV0aWNFdmVudC5hdWdtZW50Q2xhc3MoU3ludGhldGljQ29tcG9zaXRpb25FdmVudCwgQ29tcG9zaXRpb25FdmVudEludGVyZmFjZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGhldGljQ29tcG9zaXRpb25FdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvU3ludGhldGljQ29tcG9zaXRpb25FdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFN5bnRoZXRpY0V2ZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFBvb2xlZENsYXNzID0gcmVxdWlyZSgnLi9Qb29sZWRDbGFzcycpO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgZGlkV2FybkZvckFkZGVkTmV3UHJvcGVydHkgPSBmYWxzZTtcbnZhciBpc1Byb3h5U3VwcG9ydGVkID0gdHlwZW9mIFByb3h5ID09PSAnZnVuY3Rpb24nO1xuXG52YXIgc2hvdWxkQmVSZWxlYXNlZFByb3BlcnRpZXMgPSBbJ2Rpc3BhdGNoQ29uZmlnJywgJ190YXJnZXRJbnN0JywgJ25hdGl2ZUV2ZW50JywgJ2lzRGVmYXVsdFByZXZlbnRlZCcsICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCcsICdfZGlzcGF0Y2hMaXN0ZW5lcnMnLCAnX2Rpc3BhdGNoSW5zdGFuY2VzJ107XG5cbi8qKlxuICogQGludGVyZmFjZSBFdmVudFxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvXG4gKi9cbnZhciBFdmVudEludGVyZmFjZSA9IHtcbiAgdHlwZTogbnVsbCxcbiAgdGFyZ2V0OiBudWxsLFxuICAvLyBjdXJyZW50VGFyZ2V0IGlzIHNldCB3aGVuIGRpc3BhdGNoaW5nOyBubyB1c2UgaW4gY29weWluZyBpdCBoZXJlXG4gIGN1cnJlbnRUYXJnZXQ6IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsLFxuICBldmVudFBoYXNlOiBudWxsLFxuICBidWJibGVzOiBudWxsLFxuICBjYW5jZWxhYmxlOiBudWxsLFxuICB0aW1lU3RhbXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudC50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcbiAgfSxcbiAgZGVmYXVsdFByZXZlbnRlZDogbnVsbCxcbiAgaXNUcnVzdGVkOiBudWxsXG59O1xuXG4vKipcbiAqIFN5bnRoZXRpYyBldmVudHMgYXJlIGRpc3BhdGNoZWQgYnkgZXZlbnQgcGx1Z2lucywgdHlwaWNhbGx5IGluIHJlc3BvbnNlIHRvIGFcbiAqIHRvcC1sZXZlbCBldmVudCBkZWxlZ2F0aW9uIGhhbmRsZXIuXG4gKlxuICogVGhlc2Ugc3lzdGVtcyBzaG91bGQgZ2VuZXJhbGx5IHVzZSBwb29saW5nIHRvIHJlZHVjZSB0aGUgZnJlcXVlbmN5IG9mIGdhcmJhZ2VcbiAqIGNvbGxlY3Rpb24uIFRoZSBzeXN0ZW0gc2hvdWxkIGNoZWNrIGBpc1BlcnNpc3RlbnRgIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZVxuICogZXZlbnQgc2hvdWxkIGJlIHJlbGVhc2VkIGludG8gdGhlIHBvb2wgYWZ0ZXIgYmVpbmcgZGlzcGF0Y2hlZC4gVXNlcnMgdGhhdFxuICogbmVlZCBhIHBlcnNpc3RlZCBldmVudCBzaG91bGQgaW52b2tlIGBwZXJzaXN0YC5cbiAqXG4gKiBTeW50aGV0aWMgZXZlbnRzIChhbmQgc3ViY2xhc3NlcykgaW1wbGVtZW50IHRoZSBET00gTGV2ZWwgMyBFdmVudHMgQVBJIGJ5XG4gKiBub3JtYWxpemluZyBicm93c2VyIHF1aXJrcy4gU3ViY2xhc3NlcyBkbyBub3QgbmVjZXNzYXJpbHkgaGF2ZSB0byBpbXBsZW1lbnQgYVxuICogRE9NIGludGVyZmFjZTsgY3VzdG9tIGFwcGxpY2F0aW9uLXNwZWNpZmljIGV2ZW50cyBjYW4gYWxzbyBzdWJjbGFzcyB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBkaXNwYXRjaENvbmZpZyBDb25maWd1cmF0aW9uIHVzZWQgdG8gZGlzcGF0Y2ggdGhpcyBldmVudC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0SW5zdCBNYXJrZXIgaWRlbnRpZnlpbmcgdGhlIGV2ZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudCBOYXRpdmUgYnJvd3NlciBldmVudC5cbiAqIEBwYXJhbSB7RE9NRXZlbnRUYXJnZXR9IG5hdGl2ZUV2ZW50VGFyZ2V0IFRhcmdldCBub2RlLlxuICovXG5mdW5jdGlvbiBTeW50aGV0aWNFdmVudChkaXNwYXRjaENvbmZpZywgdGFyZ2V0SW5zdCwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gdGhlc2UgaGF2ZSBhIGdldHRlci9zZXR0ZXIgZm9yIHdhcm5pbmdzXG4gICAgZGVsZXRlIHRoaXMubmF0aXZlRXZlbnQ7XG4gICAgZGVsZXRlIHRoaXMucHJldmVudERlZmF1bHQ7XG4gICAgZGVsZXRlIHRoaXMuc3RvcFByb3BhZ2F0aW9uO1xuICB9XG5cbiAgdGhpcy5kaXNwYXRjaENvbmZpZyA9IGRpc3BhdGNoQ29uZmlnO1xuICB0aGlzLl90YXJnZXRJbnN0ID0gdGFyZ2V0SW5zdDtcbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIHZhciBJbnRlcmZhY2UgPSB0aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZTtcbiAgZm9yICh2YXIgcHJvcE5hbWUgaW4gSW50ZXJmYWNlKSB7XG4gICAgaWYgKCFJbnRlcmZhY2UuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BOYW1lXTsgLy8gdGhpcyBoYXMgYSBnZXR0ZXIvc2V0dGVyIGZvciB3YXJuaW5nc1xuICAgIH1cbiAgICB2YXIgbm9ybWFsaXplID0gSW50ZXJmYWNlW3Byb3BOYW1lXTtcbiAgICBpZiAobm9ybWFsaXplKSB7XG4gICAgICB0aGlzW3Byb3BOYW1lXSA9IG5vcm1hbGl6ZShuYXRpdmVFdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ3RhcmdldCcpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudFRhcmdldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmF0aXZlRXZlbnRbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBkZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCAhPSBudWxsID8gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA6IG5hdGl2ZUV2ZW50LnJldHVyblZhbHVlID09PSBmYWxzZTtcbiAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlO1xuICB9XG4gIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2U7XG4gIHJldHVybiB0aGlzO1xufVxuXG5fYXNzaWduKFN5bnRoZXRpY0V2ZW50LnByb3RvdHlwZSwge1xuXG4gIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICB2YXIgZXZlbnQgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWU7XG4gIH0sXG5cbiAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50ID0gdGhpcy5uYXRpdmVFdmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2UgcmVsZWFzZSBhbGwgZGlzcGF0Y2hlZCBgU3ludGhldGljRXZlbnRgcyBhZnRlciBlYWNoIGV2ZW50IGxvb3AsIGFkZGluZ1xuICAgKiB0aGVtIGJhY2sgaW50byB0aGUgcG9vbC4gVGhpcyBhbGxvd3MgYSB3YXkgdG8gaG9sZCBvbnRvIGEgcmVmZXJlbmNlIHRoYXRcbiAgICogd29uJ3QgYmUgYWRkZWQgYmFjayBpbnRvIHRoZSBwb29sLlxuICAgKi9cbiAgcGVyc2lzdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNQZXJzaXN0ZW50ID0gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIGV2ZW50IHNob3VsZCBiZSByZWxlYXNlZCBiYWNrIGludG8gdGhlIHBvb2wuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhpcyBzaG91bGQgbm90IGJlIHJlbGVhc2VkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBpc1BlcnNpc3RlbnQ6IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSxcblxuICAvKipcbiAgICogYFBvb2xlZENsYXNzYCBsb29rcyBmb3IgYGRlc3RydWN0b3JgIG9uIGVhY2ggaW5zdGFuY2UgaXQgcmVsZWFzZXMuXG4gICAqL1xuICBkZXN0cnVjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEludGVyZmFjZSA9IHRoaXMuY29uc3RydWN0b3IuSW50ZXJmYWNlO1xuICAgIGZvciAodmFyIHByb3BOYW1lIGluIEludGVyZmFjZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BOYW1lLCBnZXRQb29sZWRXYXJuaW5nUHJvcGVydHlEZWZpbml0aW9uKHByb3BOYW1lLCBJbnRlcmZhY2VbcHJvcE5hbWVdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW3Byb3BOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hvdWxkQmVSZWxlYXNlZFByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXNbc2hvdWxkQmVSZWxlYXNlZFByb3BlcnRpZXNbaV1dID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBub29wID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICduYXRpdmVFdmVudCcsIGdldFBvb2xlZFdhcm5pbmdQcm9wZXJ0eURlZmluaXRpb24oJ25hdGl2ZUV2ZW50JywgbnVsbCkpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdwcmV2ZW50RGVmYXVsdCcsIGdldFBvb2xlZFdhcm5pbmdQcm9wZXJ0eURlZmluaXRpb24oJ3ByZXZlbnREZWZhdWx0Jywgbm9vcCkpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzdG9wUHJvcGFnYXRpb24nLCBnZXRQb29sZWRXYXJuaW5nUHJvcGVydHlEZWZpbml0aW9uKCdzdG9wUHJvcGFnYXRpb24nLCBub29wKSk7XG4gICAgfVxuICB9XG5cbn0pO1xuXG5TeW50aGV0aWNFdmVudC5JbnRlcmZhY2UgPSBFdmVudEludGVyZmFjZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgaWYgKGlzUHJveHlTdXBwb3J0ZWQpIHtcbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLWZ1bmMtYXNzaWduICovXG4gICAgU3ludGhldGljRXZlbnQgPSBuZXcgUHJveHkoU3ludGhldGljRXZlbnQsIHtcbiAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24gKHRhcmdldCwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseSh0YXJnZXQsIE9iamVjdC5jcmVhdGUodGFyZ2V0LnByb3RvdHlwZSksIGFyZ3MpO1xuICAgICAgfSxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbiAoY29uc3RydWN0b3IsIHRoYXQsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShjb25zdHJ1Y3Rvci5hcHBseSh0aGF0LCBhcmdzKSwge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wICE9PSAnaXNQZXJzaXN0ZW50JyAmJiAhdGFyZ2V0LmNvbnN0cnVjdG9yLkludGVyZmFjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBzaG91bGRCZVJlbGVhc2VkUHJvcGVydGllcy5pbmRleE9mKHByb3ApID09PSAtMSkge1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhkaWRXYXJuRm9yQWRkZWROZXdQcm9wZXJ0eSB8fCB0YXJnZXQuaXNQZXJzaXN0ZW50KCksICdUaGlzIHN5bnRoZXRpYyBldmVudCBpcyByZXVzZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuIElmIHlvdVxcJ3JlICcgKyAnc2VlaW5nIHRoaXMsIHlvdVxcJ3JlIGFkZGluZyBhIG5ldyBwcm9wZXJ0eSBpbiB0aGUgc3ludGhldGljIGV2ZW50IG9iamVjdC4gJyArICdUaGUgcHJvcGVydHkgaXMgbmV2ZXIgcmVsZWFzZWQuIFNlZSAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtZXZlbnQtcG9vbGluZyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgZGlkV2FybkZvckFkZGVkTmV3UHJvcGVydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qZXNsaW50LWVuYWJsZSBuby1mdW5jLWFzc2lnbiAqL1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byByZWR1Y2UgYm9pbGVycGxhdGUgd2hlbiBjcmVhdGluZyBzdWJjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IENsYXNzXG4gKiBAcGFyYW0gez9vYmplY3R9IEludGVyZmFjZVxuICovXG5TeW50aGV0aWNFdmVudC5hdWdtZW50Q2xhc3MgPSBmdW5jdGlvbiAoQ2xhc3MsIEludGVyZmFjZSkge1xuICB2YXIgU3VwZXIgPSB0aGlzO1xuXG4gIHZhciBFID0gZnVuY3Rpb24gKCkge307XG4gIEUucHJvdG90eXBlID0gU3VwZXIucHJvdG90eXBlO1xuICB2YXIgcHJvdG90eXBlID0gbmV3IEUoKTtcblxuICBfYXNzaWduKHByb3RvdHlwZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgQ2xhc3MucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICBDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDbGFzcztcblxuICBDbGFzcy5JbnRlcmZhY2UgPSBfYXNzaWduKHt9LCBTdXBlci5JbnRlcmZhY2UsIEludGVyZmFjZSk7XG4gIENsYXNzLmF1Z21lbnRDbGFzcyA9IFN1cGVyLmF1Z21lbnRDbGFzcztcblxuICBQb29sZWRDbGFzcy5hZGRQb29saW5nVG8oQ2xhc3MsIFBvb2xlZENsYXNzLmZvdXJBcmd1bWVudFBvb2xlcik7XG59O1xuXG5Qb29sZWRDbGFzcy5hZGRQb29saW5nVG8oU3ludGhldGljRXZlbnQsIFBvb2xlZENsYXNzLmZvdXJBcmd1bWVudFBvb2xlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGhldGljRXZlbnQ7XG5cbi8qKlxuICAqIEhlbHBlciB0byBudWxsaWZ5IHN5bnRoZXRpY0V2ZW50IGluc3RhbmNlIHByb3BlcnRpZXMgd2hlbiBkZXN0cnVjdGluZ1xuICAqXG4gICogQHBhcmFtIHtvYmplY3R9IFN5bnRoZXRpY0V2ZW50XG4gICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICogQHJldHVybiB7b2JqZWN0fSBkZWZpbmVQcm9wZXJ0eSBvYmplY3RcbiAgKi9cbmZ1bmN0aW9uIGdldFBvb2xlZFdhcm5pbmdQcm9wZXJ0eURlZmluaXRpb24ocHJvcE5hbWUsIGdldFZhbCkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBnZXRWYWwgPT09ICdmdW5jdGlvbic7XG4gIHJldHVybiB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogc2V0LFxuICAgIGdldDogZ2V0XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgIHZhciBhY3Rpb24gPSBpc0Z1bmN0aW9uID8gJ3NldHRpbmcgdGhlIG1ldGhvZCcgOiAnc2V0dGluZyB0aGUgcHJvcGVydHknO1xuICAgIHdhcm4oYWN0aW9uLCAnVGhpcyBpcyBlZmZlY3RpdmVseSBhIG5vLW9wJyk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICB2YXIgYWN0aW9uID0gaXNGdW5jdGlvbiA/ICdhY2Nlc3NpbmcgdGhlIG1ldGhvZCcgOiAnYWNjZXNzaW5nIHRoZSBwcm9wZXJ0eSc7XG4gICAgdmFyIHJlc3VsdCA9IGlzRnVuY3Rpb24gPyAnVGhpcyBpcyBhIG5vLW9wIGZ1bmN0aW9uJyA6ICdUaGlzIGlzIHNldCB0byBudWxsJztcbiAgICB3YXJuKGFjdGlvbiwgcmVzdWx0KTtcbiAgICByZXR1cm4gZ2V0VmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FybihhY3Rpb24sIHJlc3VsdCkge1xuICAgIHZhciB3YXJuaW5nQ29uZGl0aW9uID0gZmFsc2U7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcod2FybmluZ0NvbmRpdGlvbiwgJ1RoaXMgc3ludGhldGljIGV2ZW50IGlzIHJldXNlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy4gSWYgeW91XFwncmUgc2VlaW5nIHRoaXMsICcgKyAneW91XFwncmUgJXMgYCVzYCBvbiBhIHJlbGVhc2VkL251bGxpZmllZCBzeW50aGV0aWMgZXZlbnQuICVzLiAnICsgJ0lmIHlvdSBtdXN0IGtlZXAgdGhlIG9yaWdpbmFsIHN5bnRoZXRpYyBldmVudCBhcm91bmQsIHVzZSBldmVudC5wZXJzaXN0KCkuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtZXZlbnQtcG9vbGluZyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBhY3Rpb24sIHByb3BOYW1lLCByZXN1bHQpIDogdm9pZCAwO1xuICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1N5bnRoZXRpY0V2ZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU3ludGhldGljSW5wdXRFdmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFN5bnRoZXRpY0V2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNFdmVudCcpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgRXZlbnRcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAxMzExMDVcbiAqICAgICAgLyNldmVudHMtaW5wdXRldmVudHNcbiAqL1xudmFyIElucHV0RXZlbnRJbnRlcmZhY2UgPSB7XG4gIGRhdGE6IG51bGxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY1VJRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY0lucHV0RXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY0V2ZW50LmNhbGwodGhpcywgZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpO1xufVxuXG5TeW50aGV0aWNFdmVudC5hdWdtZW50Q2xhc3MoU3ludGhldGljSW5wdXRFdmVudCwgSW5wdXRFdmVudEludGVyZmFjZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGhldGljSW5wdXRFdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvU3ludGhldGljSW5wdXRFdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENoYW5nZUV2ZW50UGx1Z2luXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXZlbnRDb25zdGFudHMgPSByZXF1aXJlKCcuL0V2ZW50Q29uc3RhbnRzJyk7XG52YXIgRXZlbnRQbHVnaW5IdWIgPSByZXF1aXJlKCcuL0V2ZW50UGx1Z2luSHViJyk7XG52YXIgRXZlbnRQcm9wYWdhdG9ycyA9IHJlcXVpcmUoJy4vRXZlbnRQcm9wYWdhdG9ycycpO1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZmJqcy9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcbnZhciBSZWFjdERPTUNvbXBvbmVudFRyZWUgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50VHJlZScpO1xudmFyIFJlYWN0VXBkYXRlcyA9IHJlcXVpcmUoJy4vUmVhY3RVcGRhdGVzJyk7XG52YXIgU3ludGhldGljRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY0V2ZW50Jyk7XG5cbnZhciBnZXRFdmVudFRhcmdldCA9IHJlcXVpcmUoJy4vZ2V0RXZlbnRUYXJnZXQnKTtcbnZhciBpc0V2ZW50U3VwcG9ydGVkID0gcmVxdWlyZSgnLi9pc0V2ZW50U3VwcG9ydGVkJyk7XG52YXIgaXNUZXh0SW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pc1RleHRJbnB1dEVsZW1lbnQnKTtcbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG5cbnZhciB0b3BMZXZlbFR5cGVzID0gRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlcztcblxudmFyIGV2ZW50VHlwZXMgPSB7XG4gIGNoYW5nZToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uQ2hhbmdlOiBudWxsIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25DaGFuZ2VDYXB0dXJlOiBudWxsIH0pXG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFt0b3BMZXZlbFR5cGVzLnRvcEJsdXIsIHRvcExldmVsVHlwZXMudG9wQ2hhbmdlLCB0b3BMZXZlbFR5cGVzLnRvcENsaWNrLCB0b3BMZXZlbFR5cGVzLnRvcEZvY3VzLCB0b3BMZXZlbFR5cGVzLnRvcElucHV0LCB0b3BMZXZlbFR5cGVzLnRvcEtleURvd24sIHRvcExldmVsVHlwZXMudG9wS2V5VXAsIHRvcExldmVsVHlwZXMudG9wU2VsZWN0aW9uQ2hhbmdlXVxuICB9XG59O1xuXG4vKipcbiAqIEZvciBJRSBzaGltc1xuICovXG52YXIgYWN0aXZlRWxlbWVudCA9IG51bGw7XG52YXIgYWN0aXZlRWxlbWVudEluc3QgPSBudWxsO1xudmFyIGFjdGl2ZUVsZW1lbnRWYWx1ZSA9IG51bGw7XG52YXIgYWN0aXZlRWxlbWVudFZhbHVlUHJvcCA9IG51bGw7XG5cbi8qKlxuICogU0VDVElPTjogaGFuZGxlIGBjaGFuZ2VgIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHNob3VsZFVzZUNoYW5nZUV2ZW50KGVsZW0pIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ3NlbGVjdCcgfHwgbm9kZU5hbWUgPT09ICdpbnB1dCcgJiYgZWxlbS50eXBlID09PSAnZmlsZSc7XG59XG5cbnZhciBkb2VzQ2hhbmdlRXZlbnRCdWJibGUgPSBmYWxzZTtcbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgLy8gU2VlIGBoYW5kbGVDaGFuZ2VgIGNvbW1lbnQgYmVsb3dcbiAgZG9lc0NoYW5nZUV2ZW50QnViYmxlID0gaXNFdmVudFN1cHBvcnRlZCgnY2hhbmdlJykgJiYgKCEoJ2RvY3VtZW50TW9kZScgaW4gZG9jdW1lbnQpIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA+IDgpO1xufVxuXG5mdW5jdGlvbiBtYW51YWxEaXNwYXRjaENoYW5nZUV2ZW50KG5hdGl2ZUV2ZW50KSB7XG4gIHZhciBldmVudCA9IFN5bnRoZXRpY0V2ZW50LmdldFBvb2xlZChldmVudFR5cGVzLmNoYW5nZSwgYWN0aXZlRWxlbWVudEluc3QsIG5hdGl2ZUV2ZW50LCBnZXRFdmVudFRhcmdldChuYXRpdmVFdmVudCkpO1xuICBFdmVudFByb3BhZ2F0b3JzLmFjY3VtdWxhdGVUd29QaGFzZURpc3BhdGNoZXMoZXZlbnQpO1xuXG4gIC8vIElmIGNoYW5nZSBhbmQgcHJvcGVydHljaGFuZ2UgYnViYmxlZCwgd2UnZCBqdXN0IGJpbmQgdG8gaXQgbGlrZSBhbGwgdGhlXG4gIC8vIG90aGVyIGV2ZW50cyBhbmQgaGF2ZSBpdCBnbyB0aHJvdWdoIFJlYWN0QnJvd3NlckV2ZW50RW1pdHRlci4gU2luY2UgaXRcbiAgLy8gZG9lc24ndCwgd2UgbWFudWFsbHkgbGlzdGVuIGZvciB0aGUgZXZlbnRzIGFuZCBzbyB3ZSBoYXZlIHRvIGVucXVldWUgYW5kXG4gIC8vIHByb2Nlc3MgdGhlIGFic3RyYWN0IGV2ZW50IG1hbnVhbGx5LlxuICAvL1xuICAvLyBCYXRjaGluZyBpcyBuZWNlc3NhcnkgaGVyZSBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCBhbGwgZXZlbnQgaGFuZGxlcnMgcnVuXG4gIC8vIGJlZm9yZSB0aGUgbmV4dCByZXJlbmRlciAoaW5jbHVkaW5nIGV2ZW50IGhhbmRsZXJzIGF0dGFjaGVkIHRvIGFuY2VzdG9yXG4gIC8vIGVsZW1lbnRzIGluc3RlYWQgb2YgZGlyZWN0bHkgb24gdGhlIGlucHV0KS4gV2l0aG91dCB0aGlzLCBjb250cm9sbGVkXG4gIC8vIGNvbXBvbmVudHMgZG9uJ3Qgd29yayBwcm9wZXJseSBpbiBjb25qdW5jdGlvbiB3aXRoIGV2ZW50IGJ1YmJsaW5nIGJlY2F1c2VcbiAgLy8gdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkIGFuZCB0aGUgdmFsdWUgcmV2ZXJ0ZWQgYmVmb3JlIGFsbCB0aGUgZXZlbnRcbiAgLy8gaGFuZGxlcnMgY2FuIHJ1bi4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNzA4LlxuICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMocnVuRXZlbnRJbkJhdGNoLCBldmVudCk7XG59XG5cbmZ1bmN0aW9uIHJ1bkV2ZW50SW5CYXRjaChldmVudCkge1xuICBFdmVudFBsdWdpbkh1Yi5lbnF1ZXVlRXZlbnRzKGV2ZW50KTtcbiAgRXZlbnRQbHVnaW5IdWIucHJvY2Vzc0V2ZW50UXVldWUoZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzdGFydFdhdGNoaW5nRm9yQ2hhbmdlRXZlbnRJRTgodGFyZ2V0LCB0YXJnZXRJbnN0KSB7XG4gIGFjdGl2ZUVsZW1lbnQgPSB0YXJnZXQ7XG4gIGFjdGl2ZUVsZW1lbnRJbnN0ID0gdGFyZ2V0SW5zdDtcbiAgYWN0aXZlRWxlbWVudC5hdHRhY2hFdmVudCgnb25jaGFuZ2UnLCBtYW51YWxEaXNwYXRjaENoYW5nZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yQ2hhbmdlRXZlbnRJRTgoKSB7XG4gIGlmICghYWN0aXZlRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBhY3RpdmVFbGVtZW50LmRldGFjaEV2ZW50KCdvbmNoYW5nZScsIG1hbnVhbERpc3BhdGNoQ2hhbmdlRXZlbnQpO1xuICBhY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgYWN0aXZlRWxlbWVudEluc3QgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXRJbnN0Rm9yQ2hhbmdlRXZlbnQodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0KSB7XG4gIGlmICh0b3BMZXZlbFR5cGUgPT09IHRvcExldmVsVHlwZXMudG9wQ2hhbmdlKSB7XG4gICAgcmV0dXJuIHRhcmdldEluc3Q7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50c0ZvckNoYW5nZUV2ZW50SUU4KHRvcExldmVsVHlwZSwgdGFyZ2V0LCB0YXJnZXRJbnN0KSB7XG4gIGlmICh0b3BMZXZlbFR5cGUgPT09IHRvcExldmVsVHlwZXMudG9wRm9jdXMpIHtcbiAgICAvLyBzdG9wV2F0Y2hpbmcoKSBzaG91bGQgYmUgYSBub29wIGhlcmUgYnV0IHdlIGNhbGwgaXQganVzdCBpbiBjYXNlIHdlXG4gICAgLy8gbWlzc2VkIGEgYmx1ciBldmVudCBzb21laG93LlxuICAgIHN0b3BXYXRjaGluZ0ZvckNoYW5nZUV2ZW50SUU4KCk7XG4gICAgc3RhcnRXYXRjaGluZ0ZvckNoYW5nZUV2ZW50SUU4KHRhcmdldCwgdGFyZ2V0SW5zdCk7XG4gIH0gZWxzZSBpZiAodG9wTGV2ZWxUeXBlID09PSB0b3BMZXZlbFR5cGVzLnRvcEJsdXIpIHtcbiAgICBzdG9wV2F0Y2hpbmdGb3JDaGFuZ2VFdmVudElFOCgpO1xuICB9XG59XG5cbi8qKlxuICogU0VDVElPTjogaGFuZGxlIGBpbnB1dGAgZXZlbnRcbiAqL1xudmFyIGlzSW5wdXRFdmVudFN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAvLyBJRTkgY2xhaW1zIHRvIHN1cHBvcnQgdGhlIGlucHV0IGV2ZW50IGJ1dCBmYWlscyB0byB0cmlnZ2VyIGl0IHdoZW5cbiAgLy8gZGVsZXRpbmcgdGV4dCwgc28gd2UgaWdub3JlIGl0cyBpbnB1dCBldmVudHMuXG4gIC8vIElFMTArIGZpcmUgaW5wdXQgZXZlbnRzIHRvIG9mdGVuLCBzdWNoIHdoZW4gYSBwbGFjZWhvbGRlclxuICAvLyBjaGFuZ2VzIG9yIHdoZW4gYW4gaW5wdXQgd2l0aCBhIHBsYWNlaG9sZGVyIGlzIGZvY3VzZWQuXG4gIGlzSW5wdXRFdmVudFN1cHBvcnRlZCA9IGlzRXZlbnRTdXBwb3J0ZWQoJ2lucHV0JykgJiYgKCEoJ2RvY3VtZW50TW9kZScgaW4gZG9jdW1lbnQpIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA+IDExKTtcbn1cblxuLyoqXG4gKiAoRm9yIElFIDw9MTEpIFJlcGxhY2VtZW50IGdldHRlci9zZXR0ZXIgZm9yIHRoZSBgdmFsdWVgIHByb3BlcnR5IHRoYXQgZ2V0c1xuICogc2V0IG9uIHRoZSBhY3RpdmUgZWxlbWVudC5cbiAqL1xudmFyIG5ld1ZhbHVlUHJvcCA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRWYWx1ZVByb3AuZ2V0LmNhbGwodGhpcyk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgIC8vIENhc3QgdG8gYSBzdHJpbmcgc28gd2UgY2FuIGRvIGVxdWFsaXR5IGNoZWNrcy5cbiAgICBhY3RpdmVFbGVtZW50VmFsdWUgPSAnJyArIHZhbDtcbiAgICBhY3RpdmVFbGVtZW50VmFsdWVQcm9wLnNldC5jYWxsKHRoaXMsIHZhbCk7XG4gIH1cbn07XG5cbi8qKlxuICogKEZvciBJRSA8PTExKSBTdGFydHMgdHJhY2tpbmcgcHJvcGVydHljaGFuZ2UgZXZlbnRzIG9uIHRoZSBwYXNzZWQtaW4gZWxlbWVudFxuICogYW5kIG92ZXJyaWRlIHRoZSB2YWx1ZSBwcm9wZXJ0eSBzbyB0aGF0IHdlIGNhbiBkaXN0aW5ndWlzaCB1c2VyIGV2ZW50cyBmcm9tXG4gKiB2YWx1ZSBjaGFuZ2VzIGluIEpTLlxuICovXG5mdW5jdGlvbiBzdGFydFdhdGNoaW5nRm9yVmFsdWVDaGFuZ2UodGFyZ2V0LCB0YXJnZXRJbnN0KSB7XG4gIGFjdGl2ZUVsZW1lbnQgPSB0YXJnZXQ7XG4gIGFjdGl2ZUVsZW1lbnRJbnN0ID0gdGFyZ2V0SW5zdDtcbiAgYWN0aXZlRWxlbWVudFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICBhY3RpdmVFbGVtZW50VmFsdWVQcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQuY29uc3RydWN0b3IucHJvdG90eXBlLCAndmFsdWUnKTtcblxuICAvLyBOb3QgZ3VhcmRlZCBpbiBhIGNhbkRlZmluZVByb3BlcnR5IGNoZWNrOiBJRTggc3VwcG9ydHMgZGVmaW5lUHJvcGVydHkgb25seVxuICAvLyBvbiBET00gZWxlbWVudHNcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5ld1ZhbHVlUHJvcCk7XG4gIGlmIChhY3RpdmVFbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgYWN0aXZlRWxlbWVudC5hdHRhY2hFdmVudCgnb25wcm9wZXJ0eWNoYW5nZScsIGhhbmRsZVByb3BlcnR5Q2hhbmdlKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5Y2hhbmdlJywgaGFuZGxlUHJvcGVydHlDaGFuZ2UsIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIChGb3IgSUUgPD0xMSkgUmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGN1cnJlbnRseS10cmFja2VkIGVsZW1lbnQsXG4gKiBpZiBhbnkgZXhpc3RzLlxuICovXG5mdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JWYWx1ZUNoYW5nZSgpIHtcbiAgaWYgKCFhY3RpdmVFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZGVsZXRlIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eSBkZWZpbml0aW9uXG4gIGRlbGV0ZSBhY3RpdmVFbGVtZW50LnZhbHVlO1xuXG4gIGlmIChhY3RpdmVFbGVtZW50LmRldGFjaEV2ZW50KSB7XG4gICAgYWN0aXZlRWxlbWVudC5kZXRhY2hFdmVudCgnb25wcm9wZXJ0eWNoYW5nZScsIGhhbmRsZVByb3BlcnR5Q2hhbmdlKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5Y2hhbmdlJywgaGFuZGxlUHJvcGVydHlDaGFuZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIGFjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICBhY3RpdmVFbGVtZW50SW5zdCA9IG51bGw7XG4gIGFjdGl2ZUVsZW1lbnRWYWx1ZSA9IG51bGw7XG4gIGFjdGl2ZUVsZW1lbnRWYWx1ZVByb3AgPSBudWxsO1xufVxuXG4vKipcbiAqIChGb3IgSUUgPD0xMSkgSGFuZGxlcyBhIHByb3BlcnR5Y2hhbmdlIGV2ZW50LCBzZW5kaW5nIGEgYGNoYW5nZWAgZXZlbnQgaWZcbiAqIHRoZSB2YWx1ZSBvZiB0aGUgYWN0aXZlIGVsZW1lbnQgaGFzIGNoYW5nZWQuXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVByb3BlcnR5Q2hhbmdlKG5hdGl2ZUV2ZW50KSB7XG4gIGlmIChuYXRpdmVFdmVudC5wcm9wZXJ0eU5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHZhbHVlID0gbmF0aXZlRXZlbnQuc3JjRWxlbWVudC52YWx1ZTtcbiAgaWYgKHZhbHVlID09PSBhY3RpdmVFbGVtZW50VmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYWN0aXZlRWxlbWVudFZhbHVlID0gdmFsdWU7XG5cbiAgbWFudWFsRGlzcGF0Y2hDaGFuZ2VFdmVudChuYXRpdmVFdmVudCk7XG59XG5cbi8qKlxuICogSWYgYSBgY2hhbmdlYCBldmVudCBzaG91bGQgYmUgZmlyZWQsIHJldHVybnMgdGhlIHRhcmdldCdzIElELlxuICovXG5mdW5jdGlvbiBnZXRUYXJnZXRJbnN0Rm9ySW5wdXRFdmVudCh0b3BMZXZlbFR5cGUsIHRhcmdldEluc3QpIHtcbiAgaWYgKHRvcExldmVsVHlwZSA9PT0gdG9wTGV2ZWxUeXBlcy50b3BJbnB1dCkge1xuICAgIC8vIEluIG1vZGVybiBicm93c2VycyAoaS5lLiwgbm90IElFOCBvciBJRTkpLCB0aGUgaW5wdXQgZXZlbnQgaXMgZXhhY3RseVxuICAgIC8vIHdoYXQgd2Ugd2FudCBzbyBmYWxsIHRocm91Z2ggaGVyZSBhbmQgdHJpZ2dlciBhbiBhYnN0cmFjdCBldmVudFxuICAgIHJldHVybiB0YXJnZXRJbnN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50c0ZvcklucHV0RXZlbnRJRSh0b3BMZXZlbFR5cGUsIHRhcmdldCwgdGFyZ2V0SW5zdCkge1xuICBpZiAodG9wTGV2ZWxUeXBlID09PSB0b3BMZXZlbFR5cGVzLnRvcEZvY3VzKSB7XG4gICAgLy8gSW4gSUU4LCB3ZSBjYW4gY2FwdHVyZSBhbG1vc3QgYWxsIC52YWx1ZSBjaGFuZ2VzIGJ5IGFkZGluZyBhXG4gICAgLy8gcHJvcGVydHljaGFuZ2UgaGFuZGxlciBhbmQgbG9va2luZyBmb3IgZXZlbnRzIHdpdGggcHJvcGVydHlOYW1lXG4gICAgLy8gZXF1YWwgdG8gJ3ZhbHVlJ1xuICAgIC8vIEluIElFOS0xMSwgcHJvcGVydHljaGFuZ2UgZmlyZXMgZm9yIG1vc3QgaW5wdXQgZXZlbnRzIGJ1dCBpcyBidWdneSBhbmRcbiAgICAvLyBkb2Vzbid0IGZpcmUgd2hlbiB0ZXh0IGlzIGRlbGV0ZWQsIGJ1dCBjb252ZW5pZW50bHksIHNlbGVjdGlvbmNoYW5nZVxuICAgIC8vIGFwcGVhcnMgdG8gZmlyZSBpbiBhbGwgb2YgdGhlIHJlbWFpbmluZyBjYXNlcyBzbyB3ZSBjYXRjaCB0aG9zZSBhbmRcbiAgICAvLyBmb3J3YXJkIHRoZSBldmVudCBpZiB0aGUgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAvLyBJbiBlaXRoZXIgY2FzZSwgd2UgZG9uJ3Qgd2FudCB0byBjYWxsIHRoZSBldmVudCBoYW5kbGVyIGlmIHRoZSB2YWx1ZVxuICAgIC8vIGlzIGNoYW5nZWQgZnJvbSBKUyBzbyB3ZSByZWRlZmluZSBhIHNldHRlciBmb3IgYC52YWx1ZWAgdGhhdCB1cGRhdGVzXG4gICAgLy8gb3VyIGFjdGl2ZUVsZW1lbnRWYWx1ZSB2YXJpYWJsZSwgYWxsb3dpbmcgdXMgdG8gaWdub3JlIHRob3NlIGNoYW5nZXNcbiAgICAvL1xuICAgIC8vIHN0b3BXYXRjaGluZygpIHNob3VsZCBiZSBhIG5vb3AgaGVyZSBidXQgd2UgY2FsbCBpdCBqdXN0IGluIGNhc2Ugd2VcbiAgICAvLyBtaXNzZWQgYSBibHVyIGV2ZW50IHNvbWVob3cuXG4gICAgc3RvcFdhdGNoaW5nRm9yVmFsdWVDaGFuZ2UoKTtcbiAgICBzdGFydFdhdGNoaW5nRm9yVmFsdWVDaGFuZ2UodGFyZ2V0LCB0YXJnZXRJbnN0KTtcbiAgfSBlbHNlIGlmICh0b3BMZXZlbFR5cGUgPT09IHRvcExldmVsVHlwZXMudG9wQmx1cikge1xuICAgIHN0b3BXYXRjaGluZ0ZvclZhbHVlQ2hhbmdlKCk7XG4gIH1cbn1cblxuLy8gRm9yIElFOCBhbmQgSUU5LlxuZnVuY3Rpb24gZ2V0VGFyZ2V0SW5zdEZvcklucHV0RXZlbnRJRSh0b3BMZXZlbFR5cGUsIHRhcmdldEluc3QpIHtcbiAgaWYgKHRvcExldmVsVHlwZSA9PT0gdG9wTGV2ZWxUeXBlcy50b3BTZWxlY3Rpb25DaGFuZ2UgfHwgdG9wTGV2ZWxUeXBlID09PSB0b3BMZXZlbFR5cGVzLnRvcEtleVVwIHx8IHRvcExldmVsVHlwZSA9PT0gdG9wTGV2ZWxUeXBlcy50b3BLZXlEb3duKSB7XG4gICAgLy8gT24gdGhlIHNlbGVjdGlvbmNoYW5nZSBldmVudCwgdGhlIHRhcmdldCBpcyBqdXN0IGRvY3VtZW50IHdoaWNoIGlzbid0XG4gICAgLy8gaGVscGZ1bCBmb3IgdXMgc28ganVzdCBjaGVjayBhY3RpdmVFbGVtZW50IGluc3RlYWQuXG4gICAgLy9cbiAgICAvLyA5OSUgb2YgdGhlIHRpbWUsIGtleWRvd24gYW5kIGtleXVwIGFyZW4ndCBuZWNlc3NhcnkuIElFOCBmYWlscyB0byBmaXJlXG4gICAgLy8gcHJvcGVydHljaGFuZ2Ugb24gdGhlIGZpcnN0IGlucHV0IGV2ZW50IGFmdGVyIHNldHRpbmcgYHZhbHVlYCBmcm9tIGFcbiAgICAvLyBzY3JpcHQgYW5kIGZpcmVzIG9ubHkga2V5ZG93biwga2V5cHJlc3MsIGtleXVwLiBDYXRjaGluZyBrZXl1cCB1c3VhbGx5XG4gICAgLy8gZ2V0cyBpdCBhbmQgY2F0Y2hpbmcga2V5ZG93biBsZXRzIHVzIGZpcmUgYW4gZXZlbnQgZm9yIHRoZSBmaXJzdFxuICAgIC8vIGtleXN0cm9rZSBpZiB1c2VyIGRvZXMgYSBrZXkgcmVwZWF0IChpdCdsbCBiZSBhIGxpdHRsZSBkZWxheWVkOiByaWdodFxuICAgIC8vIGJlZm9yZSB0aGUgc2Vjb25kIGtleXN0cm9rZSkuIE90aGVyIGlucHV0IG1ldGhvZHMgKGUuZy4sIHBhc3RlKSBzZWVtIHRvXG4gICAgLy8gZmlyZSBzZWxlY3Rpb25jaGFuZ2Ugbm9ybWFsbHkuXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC52YWx1ZSAhPT0gYWN0aXZlRWxlbWVudFZhbHVlKSB7XG4gICAgICBhY3RpdmVFbGVtZW50VmFsdWUgPSBhY3RpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRJbnN0O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNFQ1RJT046IGhhbmRsZSBgY2xpY2tgIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHNob3VsZFVzZUNsaWNrRXZlbnQoZWxlbSkge1xuICAvLyBVc2UgdGhlIGBjbGlja2AgZXZlbnQgdG8gZGV0ZWN0IGNoYW5nZXMgdG8gY2hlY2tib3ggYW5kIHJhZGlvIGlucHV0cy5cbiAgLy8gVGhpcyBhcHByb2FjaCB3b3JrcyBhY3Jvc3MgYWxsIGJyb3dzZXJzLCB3aGVyZWFzIGBjaGFuZ2VgIGRvZXMgbm90IGZpcmVcbiAgLy8gdW50aWwgYGJsdXJgIGluIElFOC5cbiAgcmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmIChlbGVtLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWxlbS50eXBlID09PSAncmFkaW8nKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0SW5zdEZvckNsaWNrRXZlbnQodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0KSB7XG4gIGlmICh0b3BMZXZlbFR5cGUgPT09IHRvcExldmVsVHlwZXMudG9wQ2xpY2spIHtcbiAgICByZXR1cm4gdGFyZ2V0SW5zdDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgcGx1Z2luIGNyZWF0ZXMgYW4gYG9uQ2hhbmdlYCBldmVudCB0aGF0IG5vcm1hbGl6ZXMgY2hhbmdlIGV2ZW50c1xuICogYWNyb3NzIGZvcm0gZWxlbWVudHMuIFRoaXMgZXZlbnQgZmlyZXMgYXQgYSB0aW1lIHdoZW4gaXQncyBwb3NzaWJsZSB0b1xuICogY2hhbmdlIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aG91dCBzZWVpbmcgYSBmbGlja2VyLlxuICpcbiAqIFN1cHBvcnRlZCBlbGVtZW50cyBhcmU6XG4gKiAtIGlucHV0IChzZWUgYGlzVGV4dElucHV0RWxlbWVudGApXG4gKiAtIHRleHRhcmVhXG4gKiAtIHNlbGVjdFxuICovXG52YXIgQ2hhbmdlRXZlbnRQbHVnaW4gPSB7XG5cbiAgZXZlbnRUeXBlczogZXZlbnRUeXBlcyxcblxuICBleHRyYWN0RXZlbnRzOiBmdW5jdGlvbiAodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0LCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRhcmdldEluc3QgPyBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZSh0YXJnZXRJbnN0KSA6IHdpbmRvdztcblxuICAgIHZhciBnZXRUYXJnZXRJbnN0RnVuYywgaGFuZGxlRXZlbnRGdW5jO1xuICAgIGlmIChzaG91bGRVc2VDaGFuZ2VFdmVudCh0YXJnZXROb2RlKSkge1xuICAgICAgaWYgKGRvZXNDaGFuZ2VFdmVudEJ1YmJsZSkge1xuICAgICAgICBnZXRUYXJnZXRJbnN0RnVuYyA9IGdldFRhcmdldEluc3RGb3JDaGFuZ2VFdmVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZUV2ZW50RnVuYyA9IGhhbmRsZUV2ZW50c0ZvckNoYW5nZUV2ZW50SUU4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNUZXh0SW5wdXRFbGVtZW50KHRhcmdldE5vZGUpKSB7XG4gICAgICBpZiAoaXNJbnB1dEV2ZW50U3VwcG9ydGVkKSB7XG4gICAgICAgIGdldFRhcmdldEluc3RGdW5jID0gZ2V0VGFyZ2V0SW5zdEZvcklucHV0RXZlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRUYXJnZXRJbnN0RnVuYyA9IGdldFRhcmdldEluc3RGb3JJbnB1dEV2ZW50SUU7XG4gICAgICAgIGhhbmRsZUV2ZW50RnVuYyA9IGhhbmRsZUV2ZW50c0ZvcklucHV0RXZlbnRJRTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNob3VsZFVzZUNsaWNrRXZlbnQodGFyZ2V0Tm9kZSkpIHtcbiAgICAgIGdldFRhcmdldEluc3RGdW5jID0gZ2V0VGFyZ2V0SW5zdEZvckNsaWNrRXZlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGdldFRhcmdldEluc3RGdW5jKSB7XG4gICAgICB2YXIgaW5zdCA9IGdldFRhcmdldEluc3RGdW5jKHRvcExldmVsVHlwZSwgdGFyZ2V0SW5zdCk7XG4gICAgICBpZiAoaW5zdCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBTeW50aGV0aWNFdmVudC5nZXRQb29sZWQoZXZlbnRUeXBlcy5jaGFuZ2UsIGluc3QsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG4gICAgICAgIGV2ZW50LnR5cGUgPSAnY2hhbmdlJztcbiAgICAgICAgRXZlbnRQcm9wYWdhdG9ycy5hY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYW5kbGVFdmVudEZ1bmMpIHtcbiAgICAgIGhhbmRsZUV2ZW50RnVuYyh0b3BMZXZlbFR5cGUsIHRhcmdldE5vZGUsIHRhcmdldEluc3QpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYW5nZUV2ZW50UGx1Z2luO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9DaGFuZ2VFdmVudFBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGdldEV2ZW50VGFyZ2V0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEdldHMgdGhlIHRhcmdldCBub2RlIGZyb20gYSBuYXRpdmUgYnJvd3NlciBldmVudCBieSBhY2NvdW50aW5nIGZvclxuICogaW5jb25zaXN0ZW5jaWVzIGluIGJyb3dzZXIgRE9NIEFQSXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQHJldHVybiB7RE9NRXZlbnRUYXJnZXR9IFRhcmdldCBub2RlLlxuICovXG5cbmZ1bmN0aW9uIGdldEV2ZW50VGFyZ2V0KG5hdGl2ZUV2ZW50KSB7XG4gIHZhciB0YXJnZXQgPSBuYXRpdmVFdmVudC50YXJnZXQgfHwgbmF0aXZlRXZlbnQuc3JjRWxlbWVudCB8fCB3aW5kb3c7XG5cbiAgLy8gTm9ybWFsaXplIFNWRyA8dXNlPiBlbGVtZW50IGV2ZW50cyAjNDk2M1xuICBpZiAodGFyZ2V0LmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0LmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50O1xuICB9XG5cbiAgLy8gU2FmYXJpIG1heSBmaXJlIGV2ZW50cyBvbiB0ZXh0IG5vZGVzIChOb2RlLlRFWFRfTk9ERSBpcyAzKS5cbiAgLy8gQHNlZSBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2V2ZW50c19wcm9wZXJ0aWVzLmh0bWxcbiAgcmV0dXJuIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEV2ZW50VGFyZ2V0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9nZXRFdmVudFRhcmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGlzVGV4dElucHV0RWxlbWVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL3RoZS1pbnB1dC1lbGVtZW50Lmh0bWwjaW5wdXQtdHlwZS1hdHRyLXN1bW1hcnlcbiAqL1xuXG52YXIgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IHtcbiAgJ2NvbG9yJzogdHJ1ZSxcbiAgJ2RhdGUnOiB0cnVlLFxuICAnZGF0ZXRpbWUnOiB0cnVlLFxuICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlLFxuICAnZW1haWwnOiB0cnVlLFxuICAnbW9udGgnOiB0cnVlLFxuICAnbnVtYmVyJzogdHJ1ZSxcbiAgJ3Bhc3N3b3JkJzogdHJ1ZSxcbiAgJ3JhbmdlJzogdHJ1ZSxcbiAgJ3NlYXJjaCc6IHRydWUsXG4gICd0ZWwnOiB0cnVlLFxuICAndGV4dCc6IHRydWUsXG4gICd0aW1lJzogdHJ1ZSxcbiAgJ3VybCc6IHRydWUsXG4gICd3ZWVrJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gaXNUZXh0SW5wdXRFbGVtZW50KGVsZW0pIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbSAmJiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIG5vZGVOYW1lICYmIChub2RlTmFtZSA9PT0gJ2lucHV0JyAmJiBzdXBwb3J0ZWRJbnB1dFR5cGVzW2VsZW0udHlwZV0gfHwgbm9kZU5hbWUgPT09ICd0ZXh0YXJlYScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVGV4dElucHV0RWxlbWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvaXNUZXh0SW5wdXRFbGVtZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRGVmYXVsdEV2ZW50UGx1Z2luT3JkZXJcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG5cbi8qKlxuICogTW9kdWxlIHRoYXQgaXMgaW5qZWN0YWJsZSBpbnRvIGBFdmVudFBsdWdpbkh1YmAsIHRoYXQgc3BlY2lmaWVzIGFcbiAqIGRldGVybWluaXN0aWMgb3JkZXJpbmcgb2YgYEV2ZW50UGx1Z2luYHMuIEEgY29udmVuaWVudCB3YXkgdG8gcmVhc29uIGFib3V0XG4gKiBwbHVnaW5zLCB3aXRob3V0IGhhdmluZyB0byBwYWNrYWdlIGV2ZXJ5IG9uZSBvZiB0aGVtLiBUaGlzIGlzIGJldHRlciB0aGFuXG4gKiBoYXZpbmcgcGx1Z2lucyBiZSBvcmRlcmVkIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSBhcmUgaW5qZWN0ZWQgYmVjYXVzZVxuICogdGhhdCBvcmRlcmluZyB3b3VsZCBiZSBpbmZsdWVuY2VkIGJ5IHRoZSBwYWNrYWdpbmcgb3JkZXIuXG4gKiBgUmVzcG9uZGVyRXZlbnRQbHVnaW5gIG11c3Qgb2NjdXIgYmVmb3JlIGBTaW1wbGVFdmVudFBsdWdpbmAgc28gdGhhdFxuICogcHJldmVudGluZyBkZWZhdWx0IG9uIGV2ZW50cyBpcyBjb252ZW5pZW50IGluIGBTaW1wbGVFdmVudFBsdWdpbmAgaGFuZGxlcnMuXG4gKi9cbnZhciBEZWZhdWx0RXZlbnRQbHVnaW5PcmRlciA9IFtrZXlPZih7IFJlc3BvbmRlckV2ZW50UGx1Z2luOiBudWxsIH0pLCBrZXlPZih7IFNpbXBsZUV2ZW50UGx1Z2luOiBudWxsIH0pLCBrZXlPZih7IFRhcEV2ZW50UGx1Z2luOiBudWxsIH0pLCBrZXlPZih7IEVudGVyTGVhdmVFdmVudFBsdWdpbjogbnVsbCB9KSwga2V5T2YoeyBDaGFuZ2VFdmVudFBsdWdpbjogbnVsbCB9KSwga2V5T2YoeyBTZWxlY3RFdmVudFBsdWdpbjogbnVsbCB9KSwga2V5T2YoeyBCZWZvcmVJbnB1dEV2ZW50UGx1Z2luOiBudWxsIH0pXTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0RXZlbnRQbHVnaW5PcmRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvRGVmYXVsdEV2ZW50UGx1Z2luT3JkZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFbnRlckxlYXZlRXZlbnRQbHVnaW5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFdmVudENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRXZlbnRDb25zdGFudHMnKTtcbnZhciBFdmVudFByb3BhZ2F0b3JzID0gcmVxdWlyZSgnLi9FdmVudFByb3BhZ2F0b3JzJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBTeW50aGV0aWNNb3VzZUV2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNNb3VzZUV2ZW50Jyk7XG5cbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG5cbnZhciB0b3BMZXZlbFR5cGVzID0gRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlcztcblxudmFyIGV2ZW50VHlwZXMgPSB7XG4gIG1vdXNlRW50ZXI6IHtcbiAgICByZWdpc3RyYXRpb25OYW1lOiBrZXlPZih7IG9uTW91c2VFbnRlcjogbnVsbCB9KSxcbiAgICBkZXBlbmRlbmNpZXM6IFt0b3BMZXZlbFR5cGVzLnRvcE1vdXNlT3V0LCB0b3BMZXZlbFR5cGVzLnRvcE1vdXNlT3Zlcl1cbiAgfSxcbiAgbW91c2VMZWF2ZToge1xuICAgIHJlZ2lzdHJhdGlvbk5hbWU6IGtleU9mKHsgb25Nb3VzZUxlYXZlOiBudWxsIH0pLFxuICAgIGRlcGVuZGVuY2llczogW3RvcExldmVsVHlwZXMudG9wTW91c2VPdXQsIHRvcExldmVsVHlwZXMudG9wTW91c2VPdmVyXVxuICB9XG59O1xuXG52YXIgRW50ZXJMZWF2ZUV2ZW50UGx1Z2luID0ge1xuXG4gIGV2ZW50VHlwZXM6IGV2ZW50VHlwZXMsXG5cbiAgLyoqXG4gICAqIEZvciBhbG1vc3QgZXZlcnkgaW50ZXJhY3Rpb24gd2UgY2FyZSBhYm91dCwgdGhlcmUgd2lsbCBiZSBib3RoIGEgdG9wLWxldmVsXG4gICAqIGBtb3VzZW92ZXJgIGFuZCBgbW91c2VvdXRgIGV2ZW50IHRoYXQgb2NjdXJzLiBPbmx5IHVzZSBgbW91c2VvdXRgIHNvIHRoYXRcbiAgICogd2UgZG8gbm90IGV4dHJhY3QgZHVwbGljYXRlIGV2ZW50cy4gSG93ZXZlciwgbW92aW5nIHRoZSBtb3VzZSBpbnRvIHRoZVxuICAgKiBicm93c2VyIGZyb20gb3V0c2lkZSB3aWxsIG5vdCBmaXJlIGEgYG1vdXNlb3V0YCBldmVudC4gSW4gdGhpcyBjYXNlLCB3ZSB1c2VcbiAgICogdGhlIGBtb3VzZW92ZXJgIHRvcC1sZXZlbCBldmVudC5cbiAgICovXG4gIGV4dHJhY3RFdmVudHM6IGZ1bmN0aW9uICh0b3BMZXZlbFR5cGUsIHRhcmdldEluc3QsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCkge1xuICAgIGlmICh0b3BMZXZlbFR5cGUgPT09IHRvcExldmVsVHlwZXMudG9wTW91c2VPdmVyICYmIChuYXRpdmVFdmVudC5yZWxhdGVkVGFyZ2V0IHx8IG5hdGl2ZUV2ZW50LmZyb21FbGVtZW50KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0b3BMZXZlbFR5cGUgIT09IHRvcExldmVsVHlwZXMudG9wTW91c2VPdXQgJiYgdG9wTGV2ZWxUeXBlICE9PSB0b3BMZXZlbFR5cGVzLnRvcE1vdXNlT3Zlcikge1xuICAgICAgLy8gTXVzdCBub3QgYmUgYSBtb3VzZSBpbiBvciBtb3VzZSBvdXQgLSBpZ25vcmluZy5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB3aW47XG4gICAgaWYgKG5hdGl2ZUV2ZW50VGFyZ2V0LndpbmRvdyA9PT0gbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgICAgIC8vIGBuYXRpdmVFdmVudFRhcmdldGAgaXMgcHJvYmFibHkgYSB3aW5kb3cgb2JqZWN0LlxuICAgICAgd2luID0gbmF0aXZlRXZlbnRUYXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IGBvd25lckRvY3VtZW50YCBpcyBzb21ldGltZXMgdW5kZWZpbmVkIGluIElFOC5cbiAgICAgIHZhciBkb2MgPSBuYXRpdmVFdmVudFRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKGRvYykge1xuICAgICAgICB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbiA9IHdpbmRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZnJvbTtcbiAgICB2YXIgdG87XG4gICAgaWYgKHRvcExldmVsVHlwZSA9PT0gdG9wTGV2ZWxUeXBlcy50b3BNb3VzZU91dCkge1xuICAgICAgZnJvbSA9IHRhcmdldEluc3Q7XG4gICAgICB2YXIgcmVsYXRlZCA9IG5hdGl2ZUV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgbmF0aXZlRXZlbnQudG9FbGVtZW50O1xuICAgICAgdG8gPSByZWxhdGVkID8gUmVhY3RET01Db21wb25lbnRUcmVlLmdldENsb3Nlc3RJbnN0YW5jZUZyb21Ob2RlKHJlbGF0ZWQpIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTW92aW5nIHRvIGEgbm9kZSBmcm9tIG91dHNpZGUgdGhlIHdpbmRvdy5cbiAgICAgIGZyb20gPSBudWxsO1xuICAgICAgdG8gPSB0YXJnZXRJbnN0O1xuICAgIH1cblxuICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgLy8gTm90aGluZyBwZXJ0YWlucyB0byBvdXIgbWFuYWdlZCBjb21wb25lbnRzLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZyb21Ob2RlID0gZnJvbSA9PSBudWxsID8gd2luIDogUmVhY3RET01Db21wb25lbnRUcmVlLmdldE5vZGVGcm9tSW5zdGFuY2UoZnJvbSk7XG4gICAgdmFyIHRvTm9kZSA9IHRvID09IG51bGwgPyB3aW4gOiBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZSh0byk7XG5cbiAgICB2YXIgbGVhdmUgPSBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChldmVudFR5cGVzLm1vdXNlTGVhdmUsIGZyb20sIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG4gICAgbGVhdmUudHlwZSA9ICdtb3VzZWxlYXZlJztcbiAgICBsZWF2ZS50YXJnZXQgPSBmcm9tTm9kZTtcbiAgICBsZWF2ZS5yZWxhdGVkVGFyZ2V0ID0gdG9Ob2RlO1xuXG4gICAgdmFyIGVudGVyID0gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQoZXZlbnRUeXBlcy5tb3VzZUVudGVyLCB0bywgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KTtcbiAgICBlbnRlci50eXBlID0gJ21vdXNlZW50ZXInO1xuICAgIGVudGVyLnRhcmdldCA9IHRvTm9kZTtcbiAgICBlbnRlci5yZWxhdGVkVGFyZ2V0ID0gZnJvbU5vZGU7XG5cbiAgICBFdmVudFByb3BhZ2F0b3JzLmFjY3VtdWxhdGVFbnRlckxlYXZlRGlzcGF0Y2hlcyhsZWF2ZSwgZW50ZXIsIGZyb20sIHRvKTtcblxuICAgIHJldHVybiBbbGVhdmUsIGVudGVyXTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVudGVyTGVhdmVFdmVudFBsdWdpbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvRW50ZXJMZWF2ZUV2ZW50UGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gMTgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU3ludGhldGljTW91c2VFdmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFN5bnRoZXRpY1VJRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY1VJRXZlbnQnKTtcbnZhciBWaWV3cG9ydE1ldHJpY3MgPSByZXF1aXJlKCcuL1ZpZXdwb3J0TWV0cmljcycpO1xuXG52YXIgZ2V0RXZlbnRNb2RpZmllclN0YXRlID0gcmVxdWlyZSgnLi9nZXRFdmVudE1vZGlmaWVyU3RhdGUnKTtcblxuLyoqXG4gKiBAaW50ZXJmYWNlIE1vdXNlRXZlbnRcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzL1xuICovXG52YXIgTW91c2VFdmVudEludGVyZmFjZSA9IHtcbiAgc2NyZWVuWDogbnVsbCxcbiAgc2NyZWVuWTogbnVsbCxcbiAgY2xpZW50WDogbnVsbCxcbiAgY2xpZW50WTogbnVsbCxcbiAgY3RybEtleTogbnVsbCxcbiAgc2hpZnRLZXk6IG51bGwsXG4gIGFsdEtleTogbnVsbCxcbiAgbWV0YUtleTogbnVsbCxcbiAgZ2V0TW9kaWZpZXJTdGF0ZTogZ2V0RXZlbnRNb2RpZmllclN0YXRlLFxuICBidXR0b246IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFdlYmtpdCwgRmlyZWZveCwgSUU5K1xuICAgIC8vIHdoaWNoOiAgMSAyIDNcbiAgICAvLyBidXR0b246IDAgMSAyIChzdGFuZGFyZClcbiAgICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICAgIGlmICgnd2hpY2gnIGluIGV2ZW50KSB7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICAvLyBJRTw5XG4gICAgLy8gd2hpY2g6ICB1bmRlZmluZWRcbiAgICAvLyBidXR0b246IDAgMCAwXG4gICAgLy8gYnV0dG9uOiAxIDQgMiAob25tb3VzZXVwKVxuICAgIHJldHVybiBidXR0b24gPT09IDIgPyAyIDogYnV0dG9uID09PSA0ID8gMSA6IDA7XG4gIH0sXG4gIGJ1dHRvbnM6IG51bGwsXG4gIHJlbGF0ZWRUYXJnZXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5mcm9tRWxlbWVudCA9PT0gZXZlbnQuc3JjRWxlbWVudCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50KTtcbiAgfSxcbiAgLy8gXCJQcm9wcmlldGFyeVwiIEludGVyZmFjZS5cbiAgcGFnZVg6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiAncGFnZVgnIGluIGV2ZW50ID8gZXZlbnQucGFnZVggOiBldmVudC5jbGllbnRYICsgVmlld3BvcnRNZXRyaWNzLmN1cnJlbnRTY3JvbGxMZWZ0O1xuICB9LFxuICBwYWdlWTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuICdwYWdlWScgaW4gZXZlbnQgPyBldmVudC5wYWdlWSA6IGV2ZW50LmNsaWVudFkgKyBWaWV3cG9ydE1ldHJpY3MuY3VycmVudFNjcm9sbFRvcDtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZGlzcGF0Y2hDb25maWcgQ29uZmlndXJhdGlvbiB1c2VkIHRvIGRpc3BhdGNoIHRoaXMgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGF0Y2hNYXJrZXIgTWFya2VyIGlkZW50aWZ5aW5nIHRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge29iamVjdH0gbmF0aXZlRXZlbnQgTmF0aXZlIGJyb3dzZXIgZXZlbnQuXG4gKiBAZXh0ZW5kcyB7U3ludGhldGljVUlFdmVudH1cbiAqL1xuZnVuY3Rpb24gU3ludGhldGljTW91c2VFdmVudChkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCkge1xuICByZXR1cm4gU3ludGhldGljVUlFdmVudC5jYWxsKHRoaXMsIGRpc3BhdGNoQ29uZmlnLCBkaXNwYXRjaE1hcmtlciwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KTtcbn1cblxuU3ludGhldGljVUlFdmVudC5hdWdtZW50Q2xhc3MoU3ludGhldGljTW91c2VFdmVudCwgTW91c2VFdmVudEludGVyZmFjZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGhldGljTW91c2VFdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvU3ludGhldGljTW91c2VFdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFN5bnRoZXRpY1VJRXZlbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTeW50aGV0aWNFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljRXZlbnQnKTtcblxudmFyIGdldEV2ZW50VGFyZ2V0ID0gcmVxdWlyZSgnLi9nZXRFdmVudFRhcmdldCcpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgVUlFdmVudFxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvXG4gKi9cbnZhciBVSUV2ZW50SW50ZXJmYWNlID0ge1xuICB2aWV3OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmlldykge1xuICAgICAgcmV0dXJuIGV2ZW50LnZpZXc7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICBpZiAodGFyZ2V0ICE9IG51bGwgJiYgdGFyZ2V0LndpbmRvdyA9PT0gdGFyZ2V0KSB7XG4gICAgICAvLyB0YXJnZXQgaXMgYSB3aW5kb3cgb2JqZWN0XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHZhciBkb2MgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSBgb3duZXJEb2N1bWVudGAgaXMgc29tZXRpbWVzIHVuZGVmaW5lZCBpbiBJRTguXG4gICAgaWYgKGRvYykge1xuICAgICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgfSxcbiAgZGV0YWlsOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQuZGV0YWlsIHx8IDA7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY0V2ZW50fVxuICovXG5mdW5jdGlvbiBTeW50aGV0aWNVSUV2ZW50KGRpc3BhdGNoQ29uZmlnLCBkaXNwYXRjaE1hcmtlciwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KSB7XG4gIHJldHVybiBTeW50aGV0aWNFdmVudC5jYWxsKHRoaXMsIGRpc3BhdGNoQ29uZmlnLCBkaXNwYXRjaE1hcmtlciwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KTtcbn1cblxuU3ludGhldGljRXZlbnQuYXVnbWVudENsYXNzKFN5bnRoZXRpY1VJRXZlbnQsIFVJRXZlbnRJbnRlcmZhY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bnRoZXRpY1VJRXZlbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1N5bnRoZXRpY1VJRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXRFdmVudE1vZGlmaWVyU3RhdGVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVHJhbnNsYXRpb24gZnJvbSBtb2RpZmllciBrZXkgdG8gdGhlIGFzc29jaWF0ZWQgcHJvcGVydHkgaW4gdGhlIGV2ZW50LlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2tleXMtTW9kaWZpZXJzXG4gKi9cblxudmFyIG1vZGlmaWVyS2V5VG9Qcm9wID0ge1xuICAnQWx0JzogJ2FsdEtleScsXG4gICdDb250cm9sJzogJ2N0cmxLZXknLFxuICAnTWV0YSc6ICdtZXRhS2V5JyxcbiAgJ1NoaWZ0JzogJ3NoaWZ0S2V5J1xufTtcblxuLy8gSUU4IGRvZXMgbm90IGltcGxlbWVudCBnZXRNb2RpZmllclN0YXRlIHNvIHdlIHNpbXBseSBtYXAgaXQgdG8gdGhlIG9ubHlcbi8vIG1vZGlmaWVyIGtleXMgZXhwb3NlZCBieSB0aGUgZXZlbnQgaXRzZWxmLCBkb2VzIG5vdCBzdXBwb3J0IExvY2sta2V5cy5cbi8vIEN1cnJlbnRseSwgYWxsIG1ham9yIGJyb3dzZXJzIGV4Y2VwdCBDaHJvbWUgc2VlbXMgdG8gc3VwcG9ydCBMb2NrLWtleXMuXG5mdW5jdGlvbiBtb2RpZmllclN0YXRlR2V0dGVyKGtleUFyZykge1xuICB2YXIgc3ludGhldGljRXZlbnQgPSB0aGlzO1xuICB2YXIgbmF0aXZlRXZlbnQgPSBzeW50aGV0aWNFdmVudC5uYXRpdmVFdmVudDtcbiAgaWYgKG5hdGl2ZUV2ZW50LmdldE1vZGlmaWVyU3RhdGUpIHtcbiAgICByZXR1cm4gbmF0aXZlRXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShrZXlBcmcpO1xuICB9XG4gIHZhciBrZXlQcm9wID0gbW9kaWZpZXJLZXlUb1Byb3Bba2V5QXJnXTtcbiAgcmV0dXJuIGtleVByb3AgPyAhIW5hdGl2ZUV2ZW50W2tleVByb3BdIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50TW9kaWZpZXJTdGF0ZShuYXRpdmVFdmVudCkge1xuICByZXR1cm4gbW9kaWZpZXJTdGF0ZUdldHRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRFdmVudE1vZGlmaWVyU3RhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL2dldEV2ZW50TW9kaWZpZXJTdGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEhUTUxET01Qcm9wZXJ0eUNvbmZpZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERPTVByb3BlcnR5ID0gcmVxdWlyZSgnLi9ET01Qcm9wZXJ0eScpO1xuXG52YXIgTVVTVF9VU0VfUFJPUEVSVFkgPSBET01Qcm9wZXJ0eS5pbmplY3Rpb24uTVVTVF9VU0VfUFJPUEVSVFk7XG52YXIgSEFTX0JPT0xFQU5fVkFMVUUgPSBET01Qcm9wZXJ0eS5pbmplY3Rpb24uSEFTX0JPT0xFQU5fVkFMVUU7XG52YXIgSEFTX1NJREVfRUZGRUNUUyA9IERPTVByb3BlcnR5LmluamVjdGlvbi5IQVNfU0lERV9FRkZFQ1RTO1xudmFyIEhBU19OVU1FUklDX1ZBTFVFID0gRE9NUHJvcGVydHkuaW5qZWN0aW9uLkhBU19OVU1FUklDX1ZBTFVFO1xudmFyIEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFID0gRE9NUHJvcGVydHkuaW5qZWN0aW9uLkhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFO1xudmFyIEhBU19PVkVSTE9BREVEX0JPT0xFQU5fVkFMVUUgPSBET01Qcm9wZXJ0eS5pbmplY3Rpb24uSEFTX09WRVJMT0FERURfQk9PTEVBTl9WQUxVRTtcblxudmFyIEhUTUxET01Qcm9wZXJ0eUNvbmZpZyA9IHtcbiAgaXNDdXN0b21BdHRyaWJ1dGU6IFJlZ0V4cC5wcm90b3R5cGUudGVzdC5iaW5kKG5ldyBSZWdFeHAoJ14oZGF0YXxhcmlhKS1bJyArIERPTVByb3BlcnR5LkFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJykpLFxuICBQcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgUHJvcGVydGllc1xuICAgICAqL1xuICAgIGFjY2VwdDogMCxcbiAgICBhY2NlcHRDaGFyc2V0OiAwLFxuICAgIGFjY2Vzc0tleTogMCxcbiAgICBhY3Rpb246IDAsXG4gICAgYWxsb3dGdWxsU2NyZWVuOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBhbGxvd1RyYW5zcGFyZW5jeTogMCxcbiAgICBhbHQ6IDAsXG4gICAgYXN5bmM6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGF1dG9Db21wbGV0ZTogMCxcbiAgICAvLyBhdXRvRm9jdXMgaXMgcG9seWZpbGxlZC9ub3JtYWxpemVkIGJ5IEF1dG9Gb2N1c1V0aWxzXG4gICAgLy8gYXV0b0ZvY3VzOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBhdXRvUGxheTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgY2FwdHVyZTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgY2VsbFBhZGRpbmc6IDAsXG4gICAgY2VsbFNwYWNpbmc6IDAsXG4gICAgY2hhclNldDogMCxcbiAgICBjaGFsbGVuZ2U6IDAsXG4gICAgY2hlY2tlZDogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBjaXRlOiAwLFxuICAgIGNsYXNzSUQ6IDAsXG4gICAgY2xhc3NOYW1lOiAwLFxuICAgIGNvbHM6IEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFLFxuICAgIGNvbFNwYW46IDAsXG4gICAgY29udGVudDogMCxcbiAgICBjb250ZW50RWRpdGFibGU6IDAsXG4gICAgY29udGV4dE1lbnU6IDAsXG4gICAgY29udHJvbHM6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGNvb3JkczogMCxcbiAgICBjcm9zc09yaWdpbjogMCxcbiAgICBkYXRhOiAwLCAvLyBGb3IgYDxvYmplY3QgLz5gIGFjdHMgYXMgYHNyY2AuXG4gICAgZGF0ZVRpbWU6IDAsXG4gICAgJ2RlZmF1bHQnOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBkZWZlcjogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgZGlyOiAwLFxuICAgIGRpc2FibGVkOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBkb3dubG9hZDogSEFTX09WRVJMT0FERURfQk9PTEVBTl9WQUxVRSxcbiAgICBkcmFnZ2FibGU6IDAsXG4gICAgZW5jVHlwZTogMCxcbiAgICBmb3JtOiAwLFxuICAgIGZvcm1BY3Rpb246IDAsXG4gICAgZm9ybUVuY1R5cGU6IDAsXG4gICAgZm9ybU1ldGhvZDogMCxcbiAgICBmb3JtTm9WYWxpZGF0ZTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgZm9ybVRhcmdldDogMCxcbiAgICBmcmFtZUJvcmRlcjogMCxcbiAgICBoZWFkZXJzOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBoaWRkZW46IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGhpZ2g6IDAsXG4gICAgaHJlZjogMCxcbiAgICBocmVmTGFuZzogMCxcbiAgICBodG1sRm9yOiAwLFxuICAgIGh0dHBFcXVpdjogMCxcbiAgICBpY29uOiAwLFxuICAgIGlkOiAwLFxuICAgIGlucHV0TW9kZTogMCxcbiAgICBpbnRlZ3JpdHk6IDAsXG4gICAgaXM6IDAsXG4gICAga2V5UGFyYW1zOiAwLFxuICAgIGtleVR5cGU6IDAsXG4gICAga2luZDogMCxcbiAgICBsYWJlbDogMCxcbiAgICBsYW5nOiAwLFxuICAgIGxpc3Q6IDAsXG4gICAgbG9vcDogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgbG93OiAwLFxuICAgIG1hbmlmZXN0OiAwLFxuICAgIG1hcmdpbkhlaWdodDogMCxcbiAgICBtYXJnaW5XaWR0aDogMCxcbiAgICBtYXg6IDAsXG4gICAgbWF4TGVuZ3RoOiAwLFxuICAgIG1lZGlhOiAwLFxuICAgIG1lZGlhR3JvdXA6IDAsXG4gICAgbWV0aG9kOiAwLFxuICAgIG1pbjogMCxcbiAgICBtaW5MZW5ndGg6IDAsXG4gICAgLy8gQ2F1dGlvbjsgYG9wdGlvbi5zZWxlY3RlZGAgaXMgbm90IHVwZGF0ZWQgaWYgYHNlbGVjdC5tdWx0aXBsZWAgaXNcbiAgICAvLyBkaXNhYmxlZCB3aXRoIGByZW1vdmVBdHRyaWJ1dGVgLlxuICAgIG11bHRpcGxlOiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIG11dGVkOiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIG5hbWU6IDAsXG4gICAgbm9uY2U6IDAsXG4gICAgbm9WYWxpZGF0ZTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgb3BlbjogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgb3B0aW11bTogMCxcbiAgICBwYXR0ZXJuOiAwLFxuICAgIHBsYWNlaG9sZGVyOiAwLFxuICAgIHBvc3RlcjogMCxcbiAgICBwcmVsb2FkOiAwLFxuICAgIHByb2ZpbGU6IDAsXG4gICAgcmFkaW9Hcm91cDogMCxcbiAgICByZWFkT25seTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgcmVsOiAwLFxuICAgIHJlcXVpcmVkOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICByZXZlcnNlZDogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgcm9sZTogMCxcbiAgICByb3dzOiBIQVNfUE9TSVRJVkVfTlVNRVJJQ19WQUxVRSxcbiAgICByb3dTcGFuOiBIQVNfTlVNRVJJQ19WQUxVRSxcbiAgICBzYW5kYm94OiAwLFxuICAgIHNjb3BlOiAwLFxuICAgIHNjb3BlZDogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgc2Nyb2xsaW5nOiAwLFxuICAgIHNlYW1sZXNzOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBzZWxlY3RlZDogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBzaGFwZTogMCxcbiAgICBzaXplOiBIQVNfUE9TSVRJVkVfTlVNRVJJQ19WQUxVRSxcbiAgICBzaXplczogMCxcbiAgICBzcGFuOiBIQVNfUE9TSVRJVkVfTlVNRVJJQ19WQUxVRSxcbiAgICBzcGVsbENoZWNrOiAwLFxuICAgIHNyYzogMCxcbiAgICBzcmNEb2M6IDAsXG4gICAgc3JjTGFuZzogMCxcbiAgICBzcmNTZXQ6IDAsXG4gICAgc3RhcnQ6IEhBU19OVU1FUklDX1ZBTFVFLFxuICAgIHN0ZXA6IDAsXG4gICAgc3R5bGU6IDAsXG4gICAgc3VtbWFyeTogMCxcbiAgICB0YWJJbmRleDogMCxcbiAgICB0YXJnZXQ6IDAsXG4gICAgdGl0bGU6IDAsXG4gICAgLy8gU2V0dGluZyAudHlwZSB0aHJvd3Mgb24gbm9uLTxpbnB1dD4gdGFnc1xuICAgIHR5cGU6IDAsXG4gICAgdXNlTWFwOiAwLFxuICAgIHZhbHVlOiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19TSURFX0VGRkVDVFMsXG4gICAgd2lkdGg6IDAsXG4gICAgd21vZGU6IDAsXG4gICAgd3JhcDogMCxcblxuICAgIC8qKlxuICAgICAqIFJERmEgUHJvcGVydGllc1xuICAgICAqL1xuICAgIGFib3V0OiAwLFxuICAgIGRhdGF0eXBlOiAwLFxuICAgIGlubGlzdDogMCxcbiAgICBwcmVmaXg6IDAsXG4gICAgLy8gcHJvcGVydHkgaXMgYWxzbyBzdXBwb3J0ZWQgZm9yIE9wZW5HcmFwaCBpbiBtZXRhIHRhZ3MuXG4gICAgcHJvcGVydHk6IDAsXG4gICAgcmVzb3VyY2U6IDAsXG4gICAgJ3R5cGVvZic6IDAsXG4gICAgdm9jYWI6IDAsXG5cbiAgICAvKipcbiAgICAgKiBOb24tc3RhbmRhcmQgUHJvcGVydGllc1xuICAgICAqL1xuICAgIC8vIGF1dG9DYXBpdGFsaXplIGFuZCBhdXRvQ29ycmVjdCBhcmUgc3VwcG9ydGVkIGluIE1vYmlsZSBTYWZhcmkgZm9yXG4gICAgLy8ga2V5Ym9hcmQgaGludHMuXG4gICAgYXV0b0NhcGl0YWxpemU6IDAsXG4gICAgYXV0b0NvcnJlY3Q6IDAsXG4gICAgLy8gYXV0b1NhdmUgYWxsb3dzIFdlYktpdC9CbGluayB0byBwZXJzaXN0IHZhbHVlcyBvZiBpbnB1dCBmaWVsZHMgb24gcGFnZSByZWxvYWRzXG4gICAgYXV0b1NhdmU6IDAsXG4gICAgLy8gY29sb3IgaXMgZm9yIFNhZmFyaSBtYXNrLWljb24gbGlua1xuICAgIGNvbG9yOiAwLFxuICAgIC8vIGl0ZW1Qcm9wLCBpdGVtU2NvcGUsIGl0ZW1UeXBlIGFyZSBmb3JcbiAgICAvLyBNaWNyb2RhdGEgc3VwcG9ydC4gU2VlIGh0dHA6Ly9zY2hlbWEub3JnL2RvY3MvZ3MuaHRtbFxuICAgIGl0ZW1Qcm9wOiAwLFxuICAgIGl0ZW1TY29wZTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgaXRlbVR5cGU6IDAsXG4gICAgLy8gaXRlbUlEIGFuZCBpdGVtUmVmIGFyZSBmb3IgTWljcm9kYXRhIHN1cHBvcnQgYXMgd2VsbCBidXRcbiAgICAvLyBvbmx5IHNwZWNpZmllZCBpbiB0aGUgV0hBVFdHIHNwZWMgZG9jdW1lbnQuIFNlZVxuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL21pY3JvZGF0YS5odG1sI21pY3JvZGF0YS1kb20tYXBpXG4gICAgaXRlbUlEOiAwLFxuICAgIGl0ZW1SZWY6IDAsXG4gICAgLy8gcmVzdWx0cyBzaG93IGxvb2tpbmcgZ2xhc3MgaWNvbiBhbmQgcmVjZW50IHNlYXJjaGVzIG9uIGlucHV0XG4gICAgLy8gc2VhcmNoIGZpZWxkcyBpbiBXZWJLaXQvQmxpbmtcbiAgICByZXN1bHRzOiAwLFxuICAgIC8vIElFLW9ubHkgYXR0cmlidXRlIHRoYXQgc3BlY2lmaWVzIHNlY3VyaXR5IHJlc3RyaWN0aW9ucyBvbiBhbiBpZnJhbWVcbiAgICAvLyBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgc2FuZGJveCBhdHRyaWJ1dGUgb24gSUU8MTBcbiAgICBzZWN1cml0eTogMCxcbiAgICAvLyBJRS1vbmx5IGF0dHJpYnV0ZSB0aGF0IGNvbnRyb2xzIGZvY3VzIGJlaGF2aW9yXG4gICAgdW5zZWxlY3RhYmxlOiAwXG4gIH0sXG4gIERPTUF0dHJpYnV0ZU5hbWVzOiB7XG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgaHRtbEZvcjogJ2ZvcicsXG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdidcbiAgfSxcbiAgRE9NUHJvcGVydHlOYW1lczoge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSFRNTERPTVByb3BlcnR5Q29uZmlnO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9IVE1MRE9NUHJvcGVydHlDb25maWcuanNcbiAqKiBtb2R1bGUgaWQgPSAxODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdENvbXBvbmVudEJyb3dzZXJFbnZpcm9ubWVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERPTUNoaWxkcmVuT3BlcmF0aW9ucyA9IHJlcXVpcmUoJy4vRE9NQ2hpbGRyZW5PcGVyYXRpb25zJyk7XG52YXIgUmVhY3RET01JRE9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL1JlYWN0RE9NSURPcGVyYXRpb25zJyk7XG5cbi8qKlxuICogQWJzdHJhY3RzIGF3YXkgYWxsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHJlY29uY2lsZXIgdGhhdCByZXF1aXJlcyBrbm93bGVkZ2Ugb2ZcbiAqIHRoZSBicm93c2VyIGNvbnRleHQuIFRPRE86IFRoZXNlIGNhbGxlcnMgc2hvdWxkIGJlIHJlZmFjdG9yZWQgdG8gYXZvaWQgdGhlXG4gKiBuZWVkIGZvciB0aGlzIGluamVjdGlvbi5cbiAqL1xudmFyIFJlYWN0Q29tcG9uZW50QnJvd3NlckVudmlyb25tZW50ID0ge1xuXG4gIHByb2Nlc3NDaGlsZHJlblVwZGF0ZXM6IFJlYWN0RE9NSURPcGVyYXRpb25zLmRhbmdlcm91c2x5UHJvY2Vzc0NoaWxkcmVuVXBkYXRlcyxcblxuICByZXBsYWNlTm9kZVdpdGhNYXJrdXA6IERPTUNoaWxkcmVuT3BlcmF0aW9ucy5kYW5nZXJvdXNseVJlcGxhY2VOb2RlV2l0aE1hcmt1cCxcblxuICAvKipcbiAgICogSWYgYSBwYXJ0aWN1bGFyIGVudmlyb25tZW50IHJlcXVpcmVzIHRoYXQgc29tZSByZXNvdXJjZXMgYmUgY2xlYW5lZCB1cCxcbiAgICogc3BlY2lmeSB0aGlzIGluIHRoZSBpbmplY3RlZCBNaXhpbi4gSW4gdGhlIERPTSwgd2Ugd291bGQgbGlrZWx5IHdhbnQgdG9cbiAgICogcHVyZ2UgYW55IGNhY2hlZCBub2RlIElEIGxvb2t1cHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bm1vdW50SURGcm9tRW52aXJvbm1lbnQ6IGZ1bmN0aW9uIChyb290Tm9kZUlEKSB7fVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50QnJvd3NlckVudmlyb25tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdENvbXBvbmVudEJyb3dzZXJFbnZpcm9ubWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERPTUNoaWxkcmVuT3BlcmF0aW9uc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERPTUxhenlUcmVlID0gcmVxdWlyZSgnLi9ET01MYXp5VHJlZScpO1xudmFyIERhbmdlciA9IHJlcXVpcmUoJy4vRGFuZ2VyJyk7XG52YXIgUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXMgPSByZXF1aXJlKCcuL1JlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdEluc3RydW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vUmVhY3RJbnN0cnVtZW50YXRpb24nKTtcblxudmFyIGNyZWF0ZU1pY3Jvc29mdFVuc2FmZUxvY2FsRnVuY3Rpb24gPSByZXF1aXJlKCcuL2NyZWF0ZU1pY3Jvc29mdFVuc2FmZUxvY2FsRnVuY3Rpb24nKTtcbnZhciBzZXRJbm5lckhUTUwgPSByZXF1aXJlKCcuL3NldElubmVySFRNTCcpO1xudmFyIHNldFRleHRDb250ZW50ID0gcmVxdWlyZSgnLi9zZXRUZXh0Q29udGVudCcpO1xuXG5mdW5jdGlvbiBnZXROb2RlQWZ0ZXIocGFyZW50Tm9kZSwgbm9kZSkge1xuICAvLyBTcGVjaWFsIGNhc2UgZm9yIHRleHQgY29tcG9uZW50cywgd2hpY2ggcmV0dXJuIFtvcGVuLCBjbG9zZV0gY29tbWVudHNcbiAgLy8gZnJvbSBnZXROYXRpdmVOb2RlLlxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIG5vZGUgPSBub2RlWzFdO1xuICB9XG4gIHJldHVybiBub2RlID8gbm9kZS5uZXh0U2libGluZyA6IHBhcmVudE5vZGUuZmlyc3RDaGlsZDtcbn1cblxuLyoqXG4gKiBJbnNlcnRzIGBjaGlsZE5vZGVgIGFzIGEgY2hpbGQgb2YgYHBhcmVudE5vZGVgIGF0IHRoZSBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcGFyZW50Tm9kZSBQYXJlbnQgbm9kZSBpbiB3aGljaCB0byBpbnNlcnQuXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IGNoaWxkTm9kZSBDaGlsZCBub2RlIHRvIGluc2VydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGNoaWxkLlxuICogQGludGVybmFsXG4gKi9cbnZhciBpbnNlcnRDaGlsZEF0ID0gY3JlYXRlTWljcm9zb2Z0VW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbiAocGFyZW50Tm9kZSwgY2hpbGROb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gIC8vIFdlIHJlbHkgZXhjbHVzaXZlbHkgb24gYGluc2VydEJlZm9yZShub2RlLCBudWxsKWAgaW5zdGVhZCBvZiBhbHNvIHVzaW5nXG4gIC8vIGBhcHBlbmRDaGlsZChub2RlKWAuIChVc2luZyBgdW5kZWZpbmVkYCBpcyBub3QgYWxsb3dlZCBieSBhbGwgYnJvd3NlcnMgc29cbiAgLy8gd2UgYXJlIGNhcmVmdWwgdG8gdXNlIGBudWxsYC4pXG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZSk7XG59KTtcblxuZnVuY3Rpb24gaW5zZXJ0TGF6eVRyZWVDaGlsZEF0KHBhcmVudE5vZGUsIGNoaWxkVHJlZSwgcmVmZXJlbmNlTm9kZSkge1xuICBET01MYXp5VHJlZS5pbnNlcnRUcmVlQmVmb3JlKHBhcmVudE5vZGUsIGNoaWxkVHJlZSwgcmVmZXJlbmNlTm9kZSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVDaGlsZChwYXJlbnROb2RlLCBjaGlsZE5vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGROb2RlKSkge1xuICAgIG1vdmVEZWxpbWl0ZWRUZXh0KHBhcmVudE5vZGUsIGNoaWxkTm9kZVswXSwgY2hpbGROb2RlWzFdLCByZWZlcmVuY2VOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpbnNlcnRDaGlsZEF0KHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkTm9kZSkpIHtcbiAgICB2YXIgY2xvc2luZ0NvbW1lbnQgPSBjaGlsZE5vZGVbMV07XG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlWzBdO1xuICAgIHJlbW92ZURlbGltaXRlZFRleHQocGFyZW50Tm9kZSwgY2hpbGROb2RlLCBjbG9zaW5nQ29tbWVudCk7XG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9zaW5nQ29tbWVudCk7XG4gIH1cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZE5vZGUpO1xufVxuXG5mdW5jdGlvbiBtb3ZlRGVsaW1pdGVkVGV4dChwYXJlbnROb2RlLCBvcGVuaW5nQ29tbWVudCwgY2xvc2luZ0NvbW1lbnQsIHJlZmVyZW5jZU5vZGUpIHtcbiAgdmFyIG5vZGUgPSBvcGVuaW5nQ29tbWVudDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIGluc2VydENoaWxkQXQocGFyZW50Tm9kZSwgbm9kZSwgcmVmZXJlbmNlTm9kZSk7XG4gICAgaWYgKG5vZGUgPT09IGNsb3NpbmdDb21tZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbm9kZSA9IG5leHROb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURlbGltaXRlZFRleHQocGFyZW50Tm9kZSwgc3RhcnROb2RlLCBjbG9zaW5nQ29tbWVudCkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBub2RlID0gc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuICAgIGlmIChub2RlID09PSBjbG9zaW5nQ29tbWVudCkge1xuICAgICAgLy8gVGhlIGNsb3NpbmcgY29tbWVudCBpcyByZW1vdmVkIGJ5IFJlYWN0TXVsdGlDaGlsZC5cbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlRGVsaW1pdGVkVGV4dChvcGVuaW5nQ29tbWVudCwgY2xvc2luZ0NvbW1lbnQsIHN0cmluZ1RleHQpIHtcbiAgdmFyIHBhcmVudE5vZGUgPSBvcGVuaW5nQ29tbWVudC5wYXJlbnROb2RlO1xuICB2YXIgbm9kZUFmdGVyQ29tbWVudCA9IG9wZW5pbmdDb21tZW50Lm5leHRTaWJsaW5nO1xuICBpZiAobm9kZUFmdGVyQ29tbWVudCA9PT0gY2xvc2luZ0NvbW1lbnQpIHtcbiAgICAvLyBUaGVyZSBhcmUgbm8gdGV4dCBub2RlcyBiZXR3ZWVuIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIGNvbW1lbnRzOyBpbnNlcnRcbiAgICAvLyBhIG5ldyBvbmUgaWYgc3RyaW5nVGV4dCBpc24ndCBlbXB0eS5cbiAgICBpZiAoc3RyaW5nVGV4dCkge1xuICAgICAgaW5zZXJ0Q2hpbGRBdChwYXJlbnROb2RlLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHJpbmdUZXh0KSwgbm9kZUFmdGVyQ29tbWVudCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChzdHJpbmdUZXh0KSB7XG4gICAgICAvLyBTZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZmlyc3Qgbm9kZSBhZnRlciB0aGUgb3BlbmluZyBjb21tZW50LCBhbmRcbiAgICAgIC8vIHJlbW92ZSBhbGwgZm9sbG93aW5nIG5vZGVzIHVwIHVudGlsIHRoZSBjbG9zaW5nIGNvbW1lbnQuXG4gICAgICBzZXRUZXh0Q29udGVudChub2RlQWZ0ZXJDb21tZW50LCBzdHJpbmdUZXh0KTtcbiAgICAgIHJlbW92ZURlbGltaXRlZFRleHQocGFyZW50Tm9kZSwgbm9kZUFmdGVyQ29tbWVudCwgY2xvc2luZ0NvbW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVEZWxpbWl0ZWRUZXh0KHBhcmVudE5vZGUsIG9wZW5pbmdDb21tZW50LCBjbG9zaW5nQ29tbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25OYXRpdmVPcGVyYXRpb24oUmVhY3RET01Db21wb25lbnRUcmVlLmdldEluc3RhbmNlRnJvbU5vZGUob3BlbmluZ0NvbW1lbnQpLl9kZWJ1Z0lELCAncmVwbGFjZSB0ZXh0Jywgc3RyaW5nVGV4dCk7XG4gIH1cbn1cblxudmFyIGRhbmdlcm91c2x5UmVwbGFjZU5vZGVXaXRoTWFya3VwID0gRGFuZ2VyLmRhbmdlcm91c2x5UmVwbGFjZU5vZGVXaXRoTWFya3VwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgZGFuZ2Vyb3VzbHlSZXBsYWNlTm9kZVdpdGhNYXJrdXAgPSBmdW5jdGlvbiAob2xkQ2hpbGQsIG1hcmt1cCwgcHJldkluc3RhbmNlKSB7XG4gICAgRGFuZ2VyLmRhbmdlcm91c2x5UmVwbGFjZU5vZGVXaXRoTWFya3VwKG9sZENoaWxkLCBtYXJrdXApO1xuICAgIGlmIChwcmV2SW5zdGFuY2UuX2RlYnVnSUQgIT09IDApIHtcbiAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vbk5hdGl2ZU9wZXJhdGlvbihwcmV2SW5zdGFuY2UuX2RlYnVnSUQsICdyZXBsYWNlIHdpdGgnLCBtYXJrdXAudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0SW5zdGFuY2UgPSBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0SW5zdGFuY2VGcm9tTm9kZShtYXJrdXAubm9kZSk7XG4gICAgICBpZiAobmV4dEluc3RhbmNlLl9kZWJ1Z0lEICE9PSAwKSB7XG4gICAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vbk5hdGl2ZU9wZXJhdGlvbihuZXh0SW5zdGFuY2UuX2RlYnVnSUQsICdtb3VudCcsIG1hcmt1cC50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogT3BlcmF0aW9ucyBmb3IgdXBkYXRpbmcgd2l0aCBET00gY2hpbGRyZW4uXG4gKi9cbnZhciBET01DaGlsZHJlbk9wZXJhdGlvbnMgPSB7XG5cbiAgZGFuZ2Vyb3VzbHlSZXBsYWNlTm9kZVdpdGhNYXJrdXA6IGRhbmdlcm91c2x5UmVwbGFjZU5vZGVXaXRoTWFya3VwLFxuXG4gIHJlcGxhY2VEZWxpbWl0ZWRUZXh0OiByZXBsYWNlRGVsaW1pdGVkVGV4dCxcblxuICAvKipcbiAgICogVXBkYXRlcyBhIGNvbXBvbmVudCdzIGNoaWxkcmVuIGJ5IHByb2Nlc3NpbmcgYSBzZXJpZXMgb2YgdXBkYXRlcy4gVGhlXG4gICAqIHVwZGF0ZSBjb25maWd1cmF0aW9ucyBhcmUgZWFjaCBleHBlY3RlZCB0byBoYXZlIGEgYHBhcmVudE5vZGVgIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5PG9iamVjdD59IHVwZGF0ZXMgTGlzdCBvZiB1cGRhdGUgY29uZmlndXJhdGlvbnMuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvY2Vzc1VwZGF0ZXM6IGZ1bmN0aW9uIChwYXJlbnROb2RlLCB1cGRhdGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBwYXJlbnROb2RlRGVidWdJRCA9IFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXRJbnN0YW5jZUZyb21Ob2RlKHBhcmVudE5vZGUpLl9kZWJ1Z0lEO1xuICAgIH1cblxuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdXBkYXRlcy5sZW5ndGg7IGsrKykge1xuICAgICAgdmFyIHVwZGF0ZSA9IHVwZGF0ZXNba107XG4gICAgICBzd2l0Y2ggKHVwZGF0ZS50eXBlKSB7XG4gICAgICAgIGNhc2UgUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXMuSU5TRVJUX01BUktVUDpcbiAgICAgICAgICBpbnNlcnRMYXp5VHJlZUNoaWxkQXQocGFyZW50Tm9kZSwgdXBkYXRlLmNvbnRlbnQsIGdldE5vZGVBZnRlcihwYXJlbnROb2RlLCB1cGRhdGUuYWZ0ZXJOb2RlKSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vbk5hdGl2ZU9wZXJhdGlvbihwYXJlbnROb2RlRGVidWdJRCwgJ2luc2VydCBjaGlsZCcsIHsgdG9JbmRleDogdXBkYXRlLnRvSW5kZXgsIGNvbnRlbnQ6IHVwZGF0ZS5jb250ZW50LnRvU3RyaW5nKCkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzLk1PVkVfRVhJU1RJTkc6XG4gICAgICAgICAgbW92ZUNoaWxkKHBhcmVudE5vZGUsIHVwZGF0ZS5mcm9tTm9kZSwgZ2V0Tm9kZUFmdGVyKHBhcmVudE5vZGUsIHVwZGF0ZS5hZnRlck5vZGUpKTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgUmVhY3RJbnN0cnVtZW50YXRpb24uZGVidWdUb29sLm9uTmF0aXZlT3BlcmF0aW9uKHBhcmVudE5vZGVEZWJ1Z0lELCAnbW92ZSBjaGlsZCcsIHsgZnJvbUluZGV4OiB1cGRhdGUuZnJvbUluZGV4LCB0b0luZGV4OiB1cGRhdGUudG9JbmRleCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXMuU0VUX01BUktVUDpcbiAgICAgICAgICBzZXRJbm5lckhUTUwocGFyZW50Tm9kZSwgdXBkYXRlLmNvbnRlbnQpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25OYXRpdmVPcGVyYXRpb24ocGFyZW50Tm9kZURlYnVnSUQsICdyZXBsYWNlIGNoaWxkcmVuJywgdXBkYXRlLmNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzLlRFWFRfQ09OVEVOVDpcbiAgICAgICAgICBzZXRUZXh0Q29udGVudChwYXJlbnROb2RlLCB1cGRhdGUuY29udGVudCk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vbk5hdGl2ZU9wZXJhdGlvbihwYXJlbnROb2RlRGVidWdJRCwgJ3JlcGxhY2UgdGV4dCcsIHVwZGF0ZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBSZWFjdE11bHRpQ2hpbGRVcGRhdGVUeXBlcy5SRU1PVkVfTk9ERTpcbiAgICAgICAgICByZW1vdmVDaGlsZChwYXJlbnROb2RlLCB1cGRhdGUuZnJvbU5vZGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25OYXRpdmVPcGVyYXRpb24ocGFyZW50Tm9kZURlYnVnSUQsICdyZW1vdmUgY2hpbGQnLCB7IGZyb21JbmRleDogdXBkYXRlLmZyb21JbmRleCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NQ2hpbGRyZW5PcGVyYXRpb25zO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9ET01DaGlsZHJlbk9wZXJhdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBEYW5nZXJcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBET01MYXp5VHJlZSA9IHJlcXVpcmUoJy4vRE9NTGF6eVRyZWUnKTtcbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBjcmVhdGVOb2Rlc0Zyb21NYXJrdXAgPSByZXF1aXJlKCdmYmpzL2xpYi9jcmVhdGVOb2Rlc0Zyb21NYXJrdXAnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGdldE1hcmt1cFdyYXAgPSByZXF1aXJlKCdmYmpzL2xpYi9nZXRNYXJrdXBXcmFwJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbnZhciBPUEVOX1RBR19OQU1FX0VYUCA9IC9eKDxbXiBcXC8+XSspLztcbnZhciBSRVNVTFRfSU5ERVhfQVRUUiA9ICdkYXRhLWRhbmdlci1pbmRleCc7XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGBub2RlTmFtZWAgZnJvbSBhIHN0cmluZyBvZiBtYXJrdXAuXG4gKlxuICogTk9URTogRXh0cmFjdGluZyB0aGUgYG5vZGVOYW1lYCBkb2VzIG5vdCByZXF1aXJlIGEgcmVndWxhciBleHByZXNzaW9uIG1hdGNoXG4gKiBiZWNhdXNlIHdlIG1ha2UgYXNzdW1wdGlvbnMgYWJvdXQgUmVhY3QtZ2VuZXJhdGVkIG1hcmt1cCAoaS5lLiB0aGVyZSBhcmUgbm9cbiAqIHNwYWNlcyBzdXJyb3VuZGluZyB0aGUgb3BlbmluZyB0YWcgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBhdHRyaWJ1dGUpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrdXAgU3RyaW5nIG9mIG1hcmt1cC5cbiAqIEByZXR1cm4ge3N0cmluZ30gTm9kZSBuYW1lIG9mIHRoZSBzdXBwbGllZCBtYXJrdXAuXG4gKiBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2V4dHJhY3Qtbm9kZW5hbWVcbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZU5hbWUobWFya3VwKSB7XG4gIHJldHVybiBtYXJrdXAuc3Vic3RyaW5nKDEsIG1hcmt1cC5pbmRleE9mKCcgJykpO1xufVxuXG52YXIgRGFuZ2VyID0ge1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIG1hcmt1cCBpbnRvIGFuIGFycmF5IG9mIG5vZGVzLiBUaGUgbWFya3VwIGlzIGV4cGVjdGVkIHRvIHJlbmRlclxuICAgKiBpbnRvIGEgbGlzdCBvZiByb290IG5vZGVzLiBBbHNvLCB0aGUgbGVuZ3RoIG9mIGByZXN1bHRMaXN0YCBhbmRcbiAgICogYG1hcmt1cExpc3RgIHNob3VsZCBiZSB0aGUgc2FtZS5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBtYXJrdXBMaXN0IExpc3Qgb2YgbWFya3VwIHN0cmluZ3MgdG8gcmVuZGVyLlxuICAgKiBAcmV0dXJuIHthcnJheTxET01FbGVtZW50Pn0gTGlzdCBvZiByZW5kZXJlZCBub2Rlcy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBkYW5nZXJvdXNseVJlbmRlck1hcmt1cDogZnVuY3Rpb24gKG1hcmt1cExpc3QpIHtcbiAgICAhRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ2Rhbmdlcm91c2x5UmVuZGVyTWFya3VwKC4uLik6IENhbm5vdCByZW5kZXIgbWFya3VwIGluIGEgd29ya2VyICcgKyAndGhyZWFkLiBNYWtlIHN1cmUgYHdpbmRvd2AgYW5kIGBkb2N1bWVudGAgYXJlIGF2YWlsYWJsZSBnbG9iYWxseSAnICsgJ2JlZm9yZSByZXF1aXJpbmcgUmVhY3Qgd2hlbiB1bml0IHRlc3Rpbmcgb3IgdXNlICcgKyAnUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcgZm9yIHNlcnZlciByZW5kZXJpbmcuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhciBub2RlTmFtZTtcbiAgICB2YXIgbWFya3VwQnlOb2RlTmFtZSA9IHt9O1xuICAgIC8vIEdyb3VwIG1hcmt1cCBieSBgbm9kZU5hbWVgIGlmIGEgd3JhcCBpcyBuZWNlc3NhcnksIGVsc2UgYnkgJyonLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya3VwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgIW1hcmt1cExpc3RbaV0gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnZGFuZ2Vyb3VzbHlSZW5kZXJNYXJrdXAoLi4uKTogTWlzc2luZyBtYXJrdXAuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgbm9kZU5hbWUgPSBnZXROb2RlTmFtZShtYXJrdXBMaXN0W2ldKTtcbiAgICAgIG5vZGVOYW1lID0gZ2V0TWFya3VwV3JhcChub2RlTmFtZSkgPyBub2RlTmFtZSA6ICcqJztcbiAgICAgIG1hcmt1cEJ5Tm9kZU5hbWVbbm9kZU5hbWVdID0gbWFya3VwQnlOb2RlTmFtZVtub2RlTmFtZV0gfHwgW107XG4gICAgICBtYXJrdXBCeU5vZGVOYW1lW25vZGVOYW1lXVtpXSA9IG1hcmt1cExpc3RbaV07XG4gICAgfVxuICAgIHZhciByZXN1bHRMaXN0ID0gW107XG4gICAgdmFyIHJlc3VsdExpc3RBc3NpZ25tZW50Q291bnQgPSAwO1xuICAgIGZvciAobm9kZU5hbWUgaW4gbWFya3VwQnlOb2RlTmFtZSkge1xuICAgICAgaWYgKCFtYXJrdXBCeU5vZGVOYW1lLmhhc093blByb3BlcnR5KG5vZGVOYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBtYXJrdXBMaXN0QnlOb2RlTmFtZSA9IG1hcmt1cEJ5Tm9kZU5hbWVbbm9kZU5hbWVdO1xuXG4gICAgICAvLyBUaGlzIGZvci1pbiBsb29wIHNraXBzIHRoZSBob2xlcyBvZiB0aGUgc3BhcnNlIGFycmF5LiBUaGUgb3JkZXIgb2ZcbiAgICAgIC8vIGl0ZXJhdGlvbiBzaG91bGQgZm9sbG93IHRoZSBvcmRlciBvZiBhc3NpZ25tZW50LCB3aGljaCBoYXBwZW5zIHRvIG1hdGNoXG4gICAgICAvLyBudW1lcmljYWwgaW5kZXggb3JkZXIsIGJ1dCB3ZSBkb24ndCByZWx5IG9uIHRoYXQuXG4gICAgICB2YXIgcmVzdWx0SW5kZXg7XG4gICAgICBmb3IgKHJlc3VsdEluZGV4IGluIG1hcmt1cExpc3RCeU5vZGVOYW1lKSB7XG4gICAgICAgIGlmIChtYXJrdXBMaXN0QnlOb2RlTmFtZS5oYXNPd25Qcm9wZXJ0eShyZXN1bHRJbmRleCkpIHtcbiAgICAgICAgICB2YXIgbWFya3VwID0gbWFya3VwTGlzdEJ5Tm9kZU5hbWVbcmVzdWx0SW5kZXhdO1xuXG4gICAgICAgICAgLy8gUHVzaCB0aGUgcmVxdWVzdGVkIG1hcmt1cCB3aXRoIGFuIGFkZGl0aW9uYWwgUkVTVUxUX0lOREVYX0FUVFJcbiAgICAgICAgICAvLyBhdHRyaWJ1dGUuICBJZiB0aGUgbWFya3VwIGRvZXMgbm90IHN0YXJ0IHdpdGggYSA8IGNoYXJhY3RlciwgaXRcbiAgICAgICAgICAvLyB3aWxsIGJlIGRpc2NhcmRlZCBiZWxvdyAod2l0aCBhbiBhcHByb3ByaWF0ZSBjb25zb2xlLmVycm9yKS5cbiAgICAgICAgICBtYXJrdXBMaXN0QnlOb2RlTmFtZVtyZXN1bHRJbmRleF0gPSBtYXJrdXAucmVwbGFjZShPUEVOX1RBR19OQU1FX0VYUCxcbiAgICAgICAgICAvLyBUaGlzIGluZGV4IHdpbGwgYmUgcGFyc2VkIGJhY2sgb3V0IGJlbG93LlxuICAgICAgICAgICckMSAnICsgUkVTVUxUX0lOREVYX0FUVFIgKyAnPVwiJyArIHJlc3VsdEluZGV4ICsgJ1wiICcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbmRlciBlYWNoIGdyb3VwIG9mIG1hcmt1cCB3aXRoIHNpbWlsYXIgd3JhcHBpbmcgYG5vZGVOYW1lYC5cbiAgICAgIHZhciByZW5kZXJOb2RlcyA9IGNyZWF0ZU5vZGVzRnJvbU1hcmt1cChtYXJrdXBMaXN0QnlOb2RlTmFtZS5qb2luKCcnKSwgZW1wdHlGdW5jdGlvbiAvLyBEbyBub3RoaW5nIHNwZWNpYWwgd2l0aCA8c2NyaXB0PiB0YWdzLlxuICAgICAgKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZW5kZXJOb2Rlcy5sZW5ndGg7ICsraikge1xuICAgICAgICB2YXIgcmVuZGVyTm9kZSA9IHJlbmRlck5vZGVzW2pdO1xuICAgICAgICBpZiAocmVuZGVyTm9kZS5oYXNBdHRyaWJ1dGUgJiYgcmVuZGVyTm9kZS5oYXNBdHRyaWJ1dGUoUkVTVUxUX0lOREVYX0FUVFIpKSB7XG5cbiAgICAgICAgICByZXN1bHRJbmRleCA9ICtyZW5kZXJOb2RlLmdldEF0dHJpYnV0ZShSRVNVTFRfSU5ERVhfQVRUUik7XG4gICAgICAgICAgcmVuZGVyTm9kZS5yZW1vdmVBdHRyaWJ1dGUoUkVTVUxUX0lOREVYX0FUVFIpO1xuXG4gICAgICAgICAgISFyZXN1bHRMaXN0Lmhhc093blByb3BlcnR5KHJlc3VsdEluZGV4KSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdEYW5nZXI6IEFzc2lnbmluZyB0byBhbiBhbHJlYWR5LW9jY3VwaWVkIHJlc3VsdCBpbmRleC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgICAgICByZXN1bHRMaXN0W3Jlc3VsdEluZGV4XSA9IHJlbmRlck5vZGU7XG5cbiAgICAgICAgICAvLyBUaGlzIHNob3VsZCBtYXRjaCByZXN1bHRMaXN0Lmxlbmd0aCBhbmQgbWFya3VwTGlzdC5sZW5ndGggd2hlblxuICAgICAgICAgIC8vIHdlJ3JlIGRvbmUuXG4gICAgICAgICAgcmVzdWx0TGlzdEFzc2lnbm1lbnRDb3VudCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEYW5nZXI6IERpc2NhcmRpbmcgdW5leHBlY3RlZCBub2RlOicsIHJlbmRlck5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWx0aG91Z2ggcmVzdWx0TGlzdCB3YXMgcG9wdWxhdGVkIG91dCBvZiBvcmRlciwgaXQgc2hvdWxkIG5vdyBiZSBhIGRlbnNlXG4gICAgLy8gYXJyYXkuXG4gICAgIShyZXN1bHRMaXN0QXNzaWdubWVudENvdW50ID09PSByZXN1bHRMaXN0Lmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGFuZ2VyOiBEaWQgbm90IGFzc2lnbiB0byBldmVyeSBpbmRleCBvZiByZXN1bHRMaXN0LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgICEocmVzdWx0TGlzdC5sZW5ndGggPT09IG1hcmt1cExpc3QubGVuZ3RoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdEYW5nZXI6IEV4cGVjdGVkIG1hcmt1cCB0byByZW5kZXIgJXMgbm9kZXMsIGJ1dCByZW5kZXJlZCAlcy4nLCBtYXJrdXBMaXN0Lmxlbmd0aCwgcmVzdWx0TGlzdC5sZW5ndGgpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIHJldHVybiByZXN1bHRMaXN0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhIG5vZGUgd2l0aCBhIHN0cmluZyBvZiBtYXJrdXAgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGl0c1xuICAgKiBwYXJlbnQuIFRoZSBtYXJrdXAgbXVzdCByZW5kZXIgaW50byBhIHNpbmdsZSByb290IG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gb2xkQ2hpbGQgQ2hpbGQgbm9kZSB0byByZXBsYWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFya3VwIE1hcmt1cCB0byByZW5kZXIgaW4gcGxhY2Ugb2YgdGhlIGNoaWxkIG5vZGUuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZGFuZ2Vyb3VzbHlSZXBsYWNlTm9kZVdpdGhNYXJrdXA6IGZ1bmN0aW9uIChvbGRDaGlsZCwgbWFya3VwKSB7XG4gICAgIUV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdkYW5nZXJvdXNseVJlcGxhY2VOb2RlV2l0aE1hcmt1cCguLi4pOiBDYW5ub3QgcmVuZGVyIG1hcmt1cCBpbiBhICcgKyAnd29ya2VyIHRocmVhZC4gTWFrZSBzdXJlIGB3aW5kb3dgIGFuZCBgZG9jdW1lbnRgIGFyZSBhdmFpbGFibGUgJyArICdnbG9iYWxseSBiZWZvcmUgcmVxdWlyaW5nIFJlYWN0IHdoZW4gdW5pdCB0ZXN0aW5nIG9yIHVzZSAnICsgJ1JlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKCkgZm9yIHNlcnZlciByZW5kZXJpbmcuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICFtYXJrdXAgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnZGFuZ2Vyb3VzbHlSZXBsYWNlTm9kZVdpdGhNYXJrdXAoLi4uKTogTWlzc2luZyBtYXJrdXAuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEob2xkQ2hpbGQubm9kZU5hbWUgIT09ICdIVE1MJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnZGFuZ2Vyb3VzbHlSZXBsYWNlTm9kZVdpdGhNYXJrdXAoLi4uKTogQ2Fubm90IHJlcGxhY2UgbWFya3VwIG9mIHRoZSAnICsgJzxodG1sPiBub2RlLiBUaGlzIGlzIGJlY2F1c2UgYnJvd3NlciBxdWlya3MgbWFrZSB0aGlzIHVucmVsaWFibGUgJyArICdhbmQvb3Igc2xvdy4gSWYgeW91IHdhbnQgdG8gcmVuZGVyIHRvIHRoZSByb290IHlvdSBtdXN0IHVzZSAnICsgJ3NlcnZlciByZW5kZXJpbmcuIFNlZSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZygpLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIGlmICh0eXBlb2YgbWFya3VwID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIG5ld0NoaWxkID0gY3JlYXRlTm9kZXNGcm9tTWFya3VwKG1hcmt1cCwgZW1wdHlGdW5jdGlvbilbMF07XG4gICAgICBvbGRDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdDaGlsZCwgb2xkQ2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBET01MYXp5VHJlZS5yZXBsYWNlQ2hpbGRXaXRoVHJlZShvbGRDaGlsZCwgbWFya3VwKTtcbiAgICB9XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYW5nZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL0Rhbmdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIGZiLXd3dy91bnNhZmUtaHRtbCovXG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIGNyZWF0ZUFycmF5RnJvbU1peGVkID0gcmVxdWlyZSgnLi9jcmVhdGVBcnJheUZyb21NaXhlZCcpO1xudmFyIGdldE1hcmt1cFdyYXAgPSByZXF1aXJlKCcuL2dldE1hcmt1cFdyYXAnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIER1bW15IGNvbnRhaW5lciB1c2VkIHRvIHJlbmRlciBhbGwgbWFya3VwLlxuICovXG52YXIgZHVtbXlOb2RlID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiBudWxsO1xuXG4vKipcbiAqIFBhdHRlcm4gdXNlZCBieSBgZ2V0Tm9kZU5hbWVgLlxuICovXG52YXIgbm9kZU5hbWVQYXR0ZXJuID0gL15cXHMqPChcXHcrKS87XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGBub2RlTmFtZWAgb2YgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzdHJpbmcgb2YgbWFya3VwLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrdXAgU3RyaW5nIG9mIG1hcmt1cC5cbiAqIEByZXR1cm4gez9zdHJpbmd9IE5vZGUgbmFtZSBvZiB0aGUgc3VwcGxpZWQgbWFya3VwLlxuICovXG5mdW5jdGlvbiBnZXROb2RlTmFtZShtYXJrdXApIHtcbiAgdmFyIG5vZGVOYW1lTWF0Y2ggPSBtYXJrdXAubWF0Y2gobm9kZU5hbWVQYXR0ZXJuKTtcbiAgcmV0dXJuIG5vZGVOYW1lTWF0Y2ggJiYgbm9kZU5hbWVNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbm9kZXMgcmVuZGVyZWQgZnJvbSB0aGUgc3VwcGxpZWQgbWFya3VwLiBUaGVcbiAqIG9wdGlvbmFsbHkgc3VwcGxpZWQgYGhhbmRsZVNjcmlwdGAgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIG9uY2UgZm9yIGVhY2hcbiAqIDxzY3JpcHQ+IGVsZW1lbnQgdGhhdCBpcyByZW5kZXJlZC4gSWYgbm8gYGhhbmRsZVNjcmlwdGAgZnVuY3Rpb24gaXMgc3VwcGxpZWQsXG4gKiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGlmIGFueSA8c2NyaXB0PiBlbGVtZW50cyBhcmUgcmVuZGVyZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcmt1cCBBIHN0cmluZyBvZiB2YWxpZCBIVE1MIG1hcmt1cC5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBoYW5kbGVTY3JpcHQgSW52b2tlZCBvbmNlIGZvciBlYWNoIHJlbmRlcmVkIDxzY3JpcHQ+LlxuICogQHJldHVybiB7YXJyYXk8RE9NRWxlbWVudHxET01UZXh0Tm9kZT59IEFuIGFycmF5IG9mIHJlbmRlcmVkIG5vZGVzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21NYXJrdXAobWFya3VwLCBoYW5kbGVTY3JpcHQpIHtcbiAgdmFyIG5vZGUgPSBkdW1teU5vZGU7XG4gICEhIWR1bW15Tm9kZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdjcmVhdGVOb2Rlc0Zyb21NYXJrdXAgZHVtbXkgbm90IGluaXRpYWxpemVkJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB2YXIgbm9kZU5hbWUgPSBnZXROb2RlTmFtZShtYXJrdXApO1xuXG4gIHZhciB3cmFwID0gbm9kZU5hbWUgJiYgZ2V0TWFya3VwV3JhcChub2RlTmFtZSk7XG4gIGlmICh3cmFwKSB7XG4gICAgbm9kZS5pbm5lckhUTUwgPSB3cmFwWzFdICsgbWFya3VwICsgd3JhcFsyXTtcblxuICAgIHZhciB3cmFwRGVwdGggPSB3cmFwWzBdO1xuICAgIHdoaWxlICh3cmFwRGVwdGgtLSkge1xuICAgICAgbm9kZSA9IG5vZGUubGFzdENoaWxkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBub2RlLmlubmVySFRNTCA9IG1hcmt1cDtcbiAgfVxuXG4gIHZhciBzY3JpcHRzID0gbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gIGlmIChzY3JpcHRzLmxlbmd0aCkge1xuICAgICFoYW5kbGVTY3JpcHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnY3JlYXRlTm9kZXNGcm9tTWFya3VwKC4uLik6IFVuZXhwZWN0ZWQgPHNjcmlwdD4gZWxlbWVudCByZW5kZXJlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgY3JlYXRlQXJyYXlGcm9tTWl4ZWQoc2NyaXB0cykuZm9yRWFjaChoYW5kbGVTY3JpcHQpO1xuICB9XG5cbiAgdmFyIG5vZGVzID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpO1xuICB3aGlsZSAobm9kZS5sYXN0Q2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gbm9kZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTm9kZXNGcm9tTWFya3VwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2NyZWF0ZU5vZGVzRnJvbU1hcmt1cC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5LWxpa2Ugb2JqZWN0cyB0byBhcnJheXMuXG4gKlxuICogVGhpcyBBUEkgYXNzdW1lcyB0aGUgY2FsbGVyIGtub3dzIHRoZSBjb250ZW50cyBvZiB0aGUgZGF0YSB0eXBlLiBGb3IgbGVzc1xuICogd2VsbCBkZWZpbmVkIGlucHV0cyB1c2UgY3JlYXRlQXJyYXlGcm9tTWl4ZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb258ZmlsZWxpc3R9IG9ialxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuXG4gIC8vIFNvbWUgYnJvd3NlcnMgYnVpbHRpbiBvYmplY3RzIGNhbiByZXBvcnQgdHlwZW9mICdmdW5jdGlvbicgKGUuZy4gTm9kZUxpc3RcbiAgLy8gaW4gb2xkIHZlcnNpb25zIG9mIFNhZmFyaSkuXG4gICEoIUFycmF5LmlzQXJyYXkob2JqKSAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3RvQXJyYXk6IEFycmF5LWxpa2Ugb2JqZWN0IGV4cGVjdGVkJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gICEodHlwZW9mIGxlbmd0aCA9PT0gJ251bWJlcicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3RvQXJyYXk6IE9iamVjdCBuZWVkcyBhIGxlbmd0aCBwcm9wZXJ0eScpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAhKGxlbmd0aCA9PT0gMCB8fCBsZW5ndGggLSAxIGluIG9iaikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndG9BcnJheTogT2JqZWN0IHNob3VsZCBoYXZlIGtleXMgZm9yIGluZGljZXMnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgISh0eXBlb2Ygb2JqLmNhbGxlZSAhPT0gJ2Z1bmN0aW9uJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndG9BcnJheTogT2JqZWN0IGNhblxcJ3QgYmUgYGFyZ3VtZW50c2AuIFVzZSByZXN0IHBhcmFtcyAnICsgJyhmdW5jdGlvbiguLi5hcmdzKSB7fSkgb3IgQXJyYXkuZnJvbSgpIGluc3RlYWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIC8vIE9sZCBJRSBkb2Vzbid0IGdpdmUgY29sbGVjdGlvbnMgYWNjZXNzIHRvIGhhc093blByb3BlcnR5LiBBc3N1bWUgaW5wdXRzXG4gIC8vIHdpdGhvdXQgbWV0aG9kIHdpbGwgdGhyb3cgZHVyaW5nIHRoZSBzbGljZSBjYWxsIGFuZCBza2lwIHN0cmFpZ2h0IHRvIHRoZVxuICAvLyBmYWxsYmFjay5cbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob2JqKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJRSA8IDkgZG9lcyBub3Qgc3VwcG9ydCBBcnJheSNzbGljZSBvbiBjb2xsZWN0aW9ucyBvYmplY3RzXG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbCBiYWNrIHRvIGNvcHlpbmcga2V5IGJ5IGtleS4gVGhpcyBhc3N1bWVzIGFsbCBrZXlzIGhhdmUgYSB2YWx1ZSxcbiAgLy8gc28gd2lsbCBub3QgcHJlc2VydmUgc3BhcnNlbHkgcG9wdWxhdGVkIGlucHV0cy5cbiAgdmFyIHJldCA9IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBsZW5ndGg7IGlpKyspIHtcbiAgICByZXRbaWldID0gb2JqW2lpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIFBlcmZvcm0gYSBoZXVyaXN0aWMgdGVzdCB0byBkZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIFwiYXJyYXktbGlrZVwiLlxuICpcbiAqICAgQSBtb25rIGFza2VkIEpvc2h1LCBhIFplbiBtYXN0ZXIsIFwiSGFzIGEgZG9nIEJ1ZGRoYSBuYXR1cmU/XCJcbiAqICAgSm9zaHUgcmVwbGllZDogXCJNdS5cIlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiBpdHMgYXJndW1lbnQgaGFzIFwiYXJyYXkgbmF0dXJlXCI6IGl0IHJldHVybnNcbiAqIHRydWUgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIGFjdHVhbCBhcnJheSwgYW4gYGFyZ3VtZW50cycgb2JqZWN0LCBvciBhblxuICogSFRNTENvbGxlY3Rpb24gKGUuZy4gbm9kZS5jaGlsZE5vZGVzIG9yIG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoKSkuXG4gKlxuICogSXQgd2lsbCByZXR1cm4gZmFsc2UgZm9yIG90aGVyIGFycmF5LWxpa2Ugb2JqZWN0cyBsaWtlIEZpbGVsaXN0LlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNBcnJheU5hdHVyZShvYmopIHtcbiAgcmV0dXJuKFxuICAgIC8vIG5vdCBudWxsL2ZhbHNlXG4gICAgISFvYmogJiYgKFxuICAgIC8vIGFycmF5cyBhcmUgb2JqZWN0cywgTm9kZUxpc3RzIGFyZSBmdW5jdGlvbnMgaW4gU2FmYXJpXG4gICAgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicpICYmXG4gICAgLy8gcXVhY2tzIGxpa2UgYW4gYXJyYXlcbiAgICAnbGVuZ3RoJyBpbiBvYmogJiZcbiAgICAvLyBub3Qgd2luZG93XG4gICAgISgnc2V0SW50ZXJ2YWwnIGluIG9iaikgJiZcbiAgICAvLyBubyBET00gbm9kZSBzaG91bGQgYmUgY29uc2lkZXJlZCBhbiBhcnJheS1saWtlXG4gICAgLy8gYSAnc2VsZWN0JyBlbGVtZW50IGhhcyAnbGVuZ3RoJyBhbmQgJ2l0ZW0nIHByb3BlcnRpZXMgb24gSUU4XG4gICAgdHlwZW9mIG9iai5ub2RlVHlwZSAhPSAnbnVtYmVyJyAmJiAoXG4gICAgLy8gYSByZWFsIGFycmF5XG4gICAgQXJyYXkuaXNBcnJheShvYmopIHx8XG4gICAgLy8gYXJndW1lbnRzXG4gICAgJ2NhbGxlZScgaW4gb2JqIHx8XG4gICAgLy8gSFRNTENvbGxlY3Rpb24vTm9kZUxpc3RcbiAgICAnaXRlbScgaW4gb2JqKVxuICApO1xufVxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IHRoZSBhcmd1bWVudCBpcyBhbiBhcnJheSBieSB3cmFwcGluZyBpdCBpbiBhbiBhcnJheSBpZiBpdCBpcyBub3QuXG4gKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgYXJndW1lbnQgaWYgaXQgaXMgYWxyZWFkeSBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGlzIG1vc3RseSB1c2VmdWwgaWRpb21hdGljYWxseTpcbiAqXG4gKiAgIHZhciBjcmVhdGVBcnJheUZyb21NaXhlZCA9IHJlcXVpcmUoJ2NyZWF0ZUFycmF5RnJvbU1peGVkJyk7XG4gKlxuICogICBmdW5jdGlvbiB0YWtlc09uZU9yTW9yZVRoaW5ncyh0aGluZ3MpIHtcbiAqICAgICB0aGluZ3MgPSBjcmVhdGVBcnJheUZyb21NaXhlZCh0aGluZ3MpO1xuICogICAgIC4uLlxuICogICB9XG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHRyZWF0IGB0aGluZ3MnIGFzIGFuIGFycmF5LCBidXQgYWNjZXB0IHNjYWxhcnMgaW4gdGhlIEFQSS5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0byBjb252ZXJ0IGFuIGFycmF5LWxpa2Ugb2JqZWN0LCBsaWtlIGBhcmd1bWVudHNgLCBpbnRvIGFuIGFycmF5XG4gKiB1c2UgdG9BcnJheSBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlGcm9tTWl4ZWQob2JqKSB7XG4gIGlmICghaGFzQXJyYXlOYXR1cmUob2JqKSkge1xuICAgIHJldHVybiBbb2JqXTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLnNsaWNlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRvQXJyYXkob2JqKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFycmF5RnJvbU1peGVkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2NyZWF0ZUFycmF5RnJvbU1peGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMTkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuLyplc2xpbnQtZGlzYWJsZSBmYi13d3cvdW5zYWZlLWh0bWwgKi9cblxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBEdW1teSBjb250YWluZXIgdXNlZCB0byBkZXRlY3Qgd2hpY2ggd3JhcHMgYXJlIG5lY2Vzc2FyeS5cbiAqL1xudmFyIGR1bW15Tm9kZSA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDogbnVsbDtcblxuLyoqXG4gKiBTb21lIGJyb3dzZXJzIGNhbm5vdCB1c2UgYGlubmVySFRNTGAgdG8gcmVuZGVyIGNlcnRhaW4gZWxlbWVudHMgc3RhbmRhbG9uZSxcbiAqIHNvIHdlIHdyYXAgdGhlbSwgcmVuZGVyIHRoZSB3cmFwcGVkIG5vZGVzLCB0aGVuIGV4dHJhY3QgdGhlIGRlc2lyZWQgbm9kZS5cbiAqXG4gKiBJbiBJRTgsIGNlcnRhaW4gZWxlbWVudHMgY2Fubm90IHJlbmRlciBhbG9uZSwgc28gd3JhcCBhbGwgZWxlbWVudHMgKCcqJykuXG4gKi9cblxudmFyIHNob3VsZFdyYXAgPSB7fTtcblxudmFyIHNlbGVjdFdyYXAgPSBbMSwgJzxzZWxlY3QgbXVsdGlwbGU9XCJ0cnVlXCI+JywgJzwvc2VsZWN0PiddO1xudmFyIHRhYmxlV3JhcCA9IFsxLCAnPHRhYmxlPicsICc8L3RhYmxlPiddO1xudmFyIHRyV3JhcCA9IFszLCAnPHRhYmxlPjx0Ym9keT48dHI+JywgJzwvdHI+PC90Ym9keT48L3RhYmxlPiddO1xuXG52YXIgc3ZnV3JhcCA9IFsxLCAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JywgJzwvc3ZnPiddO1xuXG52YXIgbWFya3VwV3JhcCA9IHtcbiAgJyonOiBbMSwgJz88ZGl2PicsICc8L2Rpdj4nXSxcblxuICAnYXJlYSc6IFsxLCAnPG1hcD4nLCAnPC9tYXA+J10sXG4gICdjb2wnOiBbMiwgJzx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+JywgJzwvY29sZ3JvdXA+PC90YWJsZT4nXSxcbiAgJ2xlZ2VuZCc6IFsxLCAnPGZpZWxkc2V0PicsICc8L2ZpZWxkc2V0PiddLFxuICAncGFyYW0nOiBbMSwgJzxvYmplY3Q+JywgJzwvb2JqZWN0PiddLFxuICAndHInOiBbMiwgJzx0YWJsZT48dGJvZHk+JywgJzwvdGJvZHk+PC90YWJsZT4nXSxcblxuICAnb3B0Z3JvdXAnOiBzZWxlY3RXcmFwLFxuICAnb3B0aW9uJzogc2VsZWN0V3JhcCxcblxuICAnY2FwdGlvbic6IHRhYmxlV3JhcCxcbiAgJ2NvbGdyb3VwJzogdGFibGVXcmFwLFxuICAndGJvZHknOiB0YWJsZVdyYXAsXG4gICd0Zm9vdCc6IHRhYmxlV3JhcCxcbiAgJ3RoZWFkJzogdGFibGVXcmFwLFxuXG4gICd0ZCc6IHRyV3JhcCxcbiAgJ3RoJzogdHJXcmFwXG59O1xuXG4vLyBJbml0aWFsaXplIHRoZSBTVkcgZWxlbWVudHMgc2luY2Ugd2Uga25vdyB0aGV5J2xsIGFsd2F5cyBuZWVkIHRvIGJlIHdyYXBwZWRcbi8vIGNvbnNpc3RlbnRseS4gSWYgdGhleSBhcmUgY3JlYXRlZCBpbnNpZGUgYSA8ZGl2PiB0aGV5IHdpbGwgYmUgaW5pdGlhbGl6ZWQgaW5cbi8vIHRoZSB3cm9uZyBuYW1lc3BhY2UgKGFuZCB3aWxsIG5vdCBkaXNwbGF5KS5cbnZhciBzdmdFbGVtZW50cyA9IFsnY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdnJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyR3JhZGllbnQnLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAndGV4dCcsICd0c3BhbiddO1xuc3ZnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobm9kZU5hbWUpIHtcbiAgbWFya3VwV3JhcFtub2RlTmFtZV0gPSBzdmdXcmFwO1xuICBzaG91bGRXcmFwW25vZGVOYW1lXSA9IHRydWU7XG59KTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXJrdXAgd3JhcCBjb25maWd1cmF0aW9uIGZvciB0aGUgc3VwcGxpZWQgYG5vZGVOYW1lYC5cbiAqXG4gKiBOT1RFOiBUaGlzIGxhemlseSBkZXRlY3RzIHdoaWNoIHdyYXBzIGFyZSBuZWNlc3NhcnkgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVOYW1lIExvd2VyY2FzZSBgbm9kZU5hbWVgLlxuICogQHJldHVybiB7P2FycmF5fSBNYXJrdXAgd3JhcCBjb25maWd1cmF0aW9uLCBpZiBhcHBsaWNhYmxlLlxuICovXG5mdW5jdGlvbiBnZXRNYXJrdXBXcmFwKG5vZGVOYW1lKSB7XG4gICEhIWR1bW15Tm9kZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdNYXJrdXAgd3JhcHBpbmcgbm9kZSBub3QgaW5pdGlhbGl6ZWQnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGlmICghbWFya3VwV3JhcC5oYXNPd25Qcm9wZXJ0eShub2RlTmFtZSkpIHtcbiAgICBub2RlTmFtZSA9ICcqJztcbiAgfVxuICBpZiAoIXNob3VsZFdyYXAuaGFzT3duUHJvcGVydHkobm9kZU5hbWUpKSB7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnKicpIHtcbiAgICAgIGR1bW15Tm9kZS5pbm5lckhUTUwgPSAnPGxpbmsgLz4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkdW1teU5vZGUuaW5uZXJIVE1MID0gJzwnICsgbm9kZU5hbWUgKyAnPjwvJyArIG5vZGVOYW1lICsgJz4nO1xuICAgIH1cbiAgICBzaG91bGRXcmFwW25vZGVOYW1lXSA9ICFkdW1teU5vZGUuZmlyc3RDaGlsZDtcbiAgfVxuICByZXR1cm4gc2hvdWxkV3JhcFtub2RlTmFtZV0gPyBtYXJrdXBXcmFwW25vZGVOYW1lXSA6IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFya3VwV3JhcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9nZXRNYXJrdXBXcmFwLmpzXG4gKiogbW9kdWxlIGlkID0gMTkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBrZXlNaXJyb3IgPSByZXF1aXJlKCdmYmpzL2xpYi9rZXlNaXJyb3InKTtcblxuLyoqXG4gKiBXaGVuIGEgY29tcG9uZW50J3MgY2hpbGRyZW4gYXJlIHVwZGF0ZWQsIGEgc2VyaWVzIG9mIHVwZGF0ZSBjb25maWd1cmF0aW9uXG4gKiBvYmplY3RzIGFyZSBjcmVhdGVkIGluIG9yZGVyIHRvIGJhdGNoIGFuZCBzZXJpYWxpemUgdGhlIHJlcXVpcmVkIGNoYW5nZXMuXG4gKlxuICogRW51bWVyYXRlcyBhbGwgdGhlIHBvc3NpYmxlIHR5cGVzIG9mIHVwZGF0ZSBjb25maWd1cmF0aW9ucy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzID0ga2V5TWlycm9yKHtcbiAgSU5TRVJUX01BUktVUDogbnVsbCxcbiAgTU9WRV9FWElTVElORzogbnVsbCxcbiAgUkVNT1ZFX05PREU6IG51bGwsXG4gIFNFVF9NQVJLVVA6IG51bGwsXG4gIFRFWFRfQ09OVEVOVDogbnVsbFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RET01JRE9wZXJhdGlvbnNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBET01DaGlsZHJlbk9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0RPTUNoaWxkcmVuT3BlcmF0aW9ucycpO1xudmFyIFJlYWN0RE9NQ29tcG9uZW50VHJlZSA9IHJlcXVpcmUoJy4vUmVhY3RET01Db21wb25lbnRUcmVlJyk7XG5cbi8qKlxuICogT3BlcmF0aW9ucyB1c2VkIHRvIHByb2Nlc3MgdXBkYXRlcyB0byBET00gbm9kZXMuXG4gKi9cbnZhciBSZWFjdERPTUlET3BlcmF0aW9ucyA9IHtcblxuICAvKipcbiAgICogVXBkYXRlcyBhIGNvbXBvbmVudCdzIGNoaWxkcmVuIGJ5IHByb2Nlc3NpbmcgYSBzZXJpZXMgb2YgdXBkYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheTxvYmplY3Q+fSB1cGRhdGVzIExpc3Qgb2YgdXBkYXRlIGNvbmZpZ3VyYXRpb25zLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGRhbmdlcm91c2x5UHJvY2Vzc0NoaWxkcmVuVXBkYXRlczogZnVuY3Rpb24gKHBhcmVudEluc3QsIHVwZGF0ZXMpIHtcbiAgICB2YXIgbm9kZSA9IFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXROb2RlRnJvbUluc3RhbmNlKHBhcmVudEluc3QpO1xuICAgIERPTUNoaWxkcmVuT3BlcmF0aW9ucy5wcm9jZXNzVXBkYXRlcyhub2RlLCB1cGRhdGVzKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTUlET3BlcmF0aW9ucztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01JRE9wZXJhdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTUNvbXBvbmVudFxuICovXG5cbi8qIGdsb2JhbCBoYXNPd25Qcm9wZXJ0eTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBBdXRvRm9jdXNVdGlscyA9IHJlcXVpcmUoJy4vQXV0b0ZvY3VzVXRpbHMnKTtcbnZhciBDU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5T3BlcmF0aW9ucycpO1xudmFyIERPTUxhenlUcmVlID0gcmVxdWlyZSgnLi9ET01MYXp5VHJlZScpO1xudmFyIERPTU5hbWVzcGFjZXMgPSByZXF1aXJlKCcuL0RPTU5hbWVzcGFjZXMnKTtcbnZhciBET01Qcm9wZXJ0eSA9IHJlcXVpcmUoJy4vRE9NUHJvcGVydHknKTtcbnZhciBET01Qcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0RPTVByb3BlcnR5T3BlcmF0aW9ucycpO1xudmFyIEV2ZW50Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9FdmVudENvbnN0YW50cycpO1xudmFyIEV2ZW50UGx1Z2luSHViID0gcmVxdWlyZSgnLi9FdmVudFBsdWdpbkh1YicpO1xudmFyIEV2ZW50UGx1Z2luUmVnaXN0cnkgPSByZXF1aXJlKCcuL0V2ZW50UGx1Z2luUmVnaXN0cnknKTtcbnZhciBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL1JlYWN0QnJvd3NlckV2ZW50RW1pdHRlcicpO1xudmFyIFJlYWN0Q29tcG9uZW50QnJvd3NlckVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudEJyb3dzZXJFbnZpcm9ubWVudCcpO1xudmFyIFJlYWN0RE9NQnV0dG9uID0gcmVxdWlyZSgnLi9SZWFjdERPTUJ1dHRvbicpO1xudmFyIFJlYWN0RE9NQ29tcG9uZW50RmxhZ3MgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50RmxhZ3MnKTtcbnZhciBSZWFjdERPTUNvbXBvbmVudFRyZWUgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50VHJlZScpO1xudmFyIFJlYWN0RE9NSW5wdXQgPSByZXF1aXJlKCcuL1JlYWN0RE9NSW5wdXQnKTtcbnZhciBSZWFjdERPTU9wdGlvbiA9IHJlcXVpcmUoJy4vUmVhY3RET01PcHRpb24nKTtcbnZhciBSZWFjdERPTVNlbGVjdCA9IHJlcXVpcmUoJy4vUmVhY3RET01TZWxlY3QnKTtcbnZhciBSZWFjdERPTVRleHRhcmVhID0gcmVxdWlyZSgnLi9SZWFjdERPTVRleHRhcmVhJyk7XG52YXIgUmVhY3RJbnN0cnVtZW50YXRpb24gPSByZXF1aXJlKCcuL1JlYWN0SW5zdHJ1bWVudGF0aW9uJyk7XG52YXIgUmVhY3RNdWx0aUNoaWxkID0gcmVxdWlyZSgnLi9SZWFjdE11bHRpQ2hpbGQnKTtcbnZhciBSZWFjdFNlcnZlclJlbmRlcmluZ1RyYW5zYWN0aW9uID0gcmVxdWlyZSgnLi9SZWFjdFNlcnZlclJlbmRlcmluZ1RyYW5zYWN0aW9uJyk7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGVzY2FwZVRleHRDb250ZW50Rm9yQnJvd3NlciA9IHJlcXVpcmUoJy4vZXNjYXBlVGV4dENvbnRlbnRGb3JCcm93c2VyJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgaXNFdmVudFN1cHBvcnRlZCA9IHJlcXVpcmUoJy4vaXNFdmVudFN1cHBvcnRlZCcpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCdmYmpzL2xpYi9zaGFsbG93RXF1YWwnKTtcbnZhciB2YWxpZGF0ZURPTU5lc3RpbmcgPSByZXF1aXJlKCcuL3ZhbGlkYXRlRE9NTmVzdGluZycpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBGbGFncyA9IFJlYWN0RE9NQ29tcG9uZW50RmxhZ3M7XG52YXIgZGVsZXRlTGlzdGVuZXIgPSBFdmVudFBsdWdpbkh1Yi5kZWxldGVMaXN0ZW5lcjtcbnZhciBnZXROb2RlID0gUmVhY3RET01Db21wb25lbnRUcmVlLmdldE5vZGVGcm9tSW5zdGFuY2U7XG52YXIgbGlzdGVuVG8gPSBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIubGlzdGVuVG87XG52YXIgcmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMgPSBFdmVudFBsdWdpblJlZ2lzdHJ5LnJlZ2lzdHJhdGlvbk5hbWVNb2R1bGVzO1xuXG4vLyBGb3IgcXVpY2tseSBtYXRjaGluZyBjaGlsZHJlbiB0eXBlLCB0byB0ZXN0IGlmIGNhbiBiZSB0cmVhdGVkIGFzIGNvbnRlbnQuXG52YXIgQ09OVEVOVF9UWVBFUyA9IHsgJ3N0cmluZyc6IHRydWUsICdudW1iZXInOiB0cnVlIH07XG5cbnZhciBTVFlMRSA9IGtleU9mKHsgc3R5bGU6IG51bGwgfSk7XG52YXIgSFRNTCA9IGtleU9mKHsgX19odG1sOiBudWxsIH0pO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG51bGwsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogbnVsbFxufTtcblxuLy8gTm9kZSB0eXBlIGZvciBkb2N1bWVudCBmcmFnbWVudHMgKE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkuXG52YXIgRE9DX0ZSQUdNRU5UX1RZUEUgPSAxMTtcblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKGludGVybmFsSW5zdGFuY2UpIHtcbiAgaWYgKGludGVybmFsSW5zdGFuY2UpIHtcbiAgICB2YXIgb3duZXIgPSBpbnRlcm5hbEluc3RhbmNlLl9jdXJyZW50RWxlbWVudC5fb3duZXIgfHwgbnVsbDtcbiAgICBpZiAob3duZXIpIHtcbiAgICAgIHZhciBuYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcgVGhpcyBET00gbm9kZSB3YXMgcmVuZGVyZWQgYnkgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBmcmllbmRseVN0cmluZ2lmeShvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuICdbJyArIG9iai5tYXAoZnJpZW5kbHlTdHJpbmdpZnkpLmpvaW4oJywgJykgKyAnXSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgIHZhciBrZXlFc2NhcGVkID0gL15bYS16JF9dW1xcdyRfXSokL2kudGVzdChrZXkpID8ga2V5IDogSlNPTi5zdHJpbmdpZnkoa2V5KTtcbiAgICAgICAgICBwYWlycy5wdXNoKGtleUVzY2FwZWQgKyAnOiAnICsgZnJpZW5kbHlTdHJpbmdpZnkob2JqW2tleV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICd7JyArIHBhaXJzLmpvaW4oJywgJykgKyAnfSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW2Z1bmN0aW9uIG9iamVjdF0nO1xuICB9XG4gIC8vIERpZmZlcnMgZnJvbSBKU09OLnN0cmluZ2lmeSBpbiB0aGF0IHVuZGVmaW5lZCBiZWNhdXNlIHVuZGVmaW5lZCBhbmQgdGhhdFxuICAvLyBpbmYgYW5kIG5hbiBkb24ndCBiZWNvbWUgbnVsbFxuICByZXR1cm4gU3RyaW5nKG9iaik7XG59XG5cbnZhciBzdHlsZU11dGF0aW9uV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBjaGVja0FuZFdhcm5Gb3JNdXRhdGVkU3R5bGUoc3R5bGUxLCBzdHlsZTIsIGNvbXBvbmVudCkge1xuICBpZiAoc3R5bGUxID09IG51bGwgfHwgc3R5bGUyID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNoYWxsb3dFcXVhbChzdHlsZTEsIHN0eWxlMikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5fdGFnO1xuICB2YXIgb3duZXIgPSBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcbiAgdmFyIG93bmVyTmFtZTtcbiAgaWYgKG93bmVyKSB7XG4gICAgb3duZXJOYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICB9XG5cbiAgdmFyIGhhc2ggPSBvd25lck5hbWUgKyAnfCcgKyBjb21wb25lbnROYW1lO1xuXG4gIGlmIChzdHlsZU11dGF0aW9uV2FybmluZy5oYXNPd25Qcm9wZXJ0eShoYXNoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0eWxlTXV0YXRpb25XYXJuaW5nW2hhc2hdID0gdHJ1ZTtcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ2Alc2Agd2FzIHBhc3NlZCBhIHN0eWxlIG9iamVjdCB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gbXV0YXRlZC4gJyArICdNdXRhdGluZyBgc3R5bGVgIGlzIGRlcHJlY2F0ZWQuIENvbnNpZGVyIGNsb25pbmcgaXQgYmVmb3JlaGFuZC4gQ2hlY2sgJyArICd0aGUgYHJlbmRlcmAgJXMuIFByZXZpb3VzIHN0eWxlOiAlcy4gTXV0YXRlZCBzdHlsZTogJXMuJywgY29tcG9uZW50TmFtZSwgb3duZXIgPyAnb2YgYCcgKyBvd25lck5hbWUgKyAnYCcgOiAndXNpbmcgPCcgKyBjb21wb25lbnROYW1lICsgJz4nLCBmcmllbmRseVN0cmluZ2lmeShzdHlsZTEpLCBmcmllbmRseVN0cmluZ2lmeShzdHlsZTIpKSA6IHZvaWQgMDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUHJvcHMoY29tcG9uZW50LCBwcm9wcykge1xuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE5vdGUgdGhlIHVzZSBvZiBgPT1gIHdoaWNoIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWQuXG4gIGlmICh2b2lkRWxlbWVudFRhZ3NbY29tcG9uZW50Ll90YWddKSB7XG4gICAgIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsICYmIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzIGlzIGEgdm9pZCBlbGVtZW50IHRhZyBhbmQgbXVzdCBub3QgaGF2ZSBgY2hpbGRyZW5gIG9yICcgKyAndXNlIGBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAuJXMnLCBjb21wb25lbnQuX3RhZywgY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC5fb3duZXIgPyAnIENoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mICcgKyBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50Ll9vd25lci5nZXROYW1lKCkgKyAnLicgOiAnJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG4gIGlmIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAhPSBudWxsKSB7XG4gICAgIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDYW4gb25seSBzZXQgb25lIG9mIGBjaGlsZHJlbmAgb3IgYHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISh0eXBlb2YgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPT09ICdvYmplY3QnICYmIEhUTUwgaW4gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ2Bwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAgbXVzdCBiZSBpbiB0aGUgZm9ybSBge19faHRtbDogLi4ufWAuICcgKyAnUGxlYXNlIHZpc2l0IGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YXJpYW50LWRhbmdlcm91c2x5LXNldC1pbm5lci1odG1sICcgKyAnZm9yIG1vcmUgaW5mb3JtYXRpb24uJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcocHJvcHMuaW5uZXJIVE1MID09IG51bGwsICdEaXJlY3RseSBzZXR0aW5nIHByb3BlcnR5IGBpbm5lckhUTUxgIGlzIG5vdCBwZXJtaXR0ZWQuICcgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24sIGxvb2t1cCBkb2N1bWVudGF0aW9uIG9uIGBkYW5nZXJvdXNseVNldElubmVySFRNTGAuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcocHJvcHMuc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHx8ICFwcm9wcy5jb250ZW50RWRpdGFibGUgfHwgcHJvcHMuY2hpbGRyZW4gPT0gbnVsbCwgJ0EgY29tcG9uZW50IGlzIGBjb250ZW50RWRpdGFibGVgIGFuZCBjb250YWlucyBgY2hpbGRyZW5gIG1hbmFnZWQgYnkgJyArICdSZWFjdC4gSXQgaXMgbm93IHlvdXIgcmVzcG9uc2liaWxpdHkgdG8gZ3VhcmFudGVlIHRoYXQgbm9uZSBvZiAnICsgJ3Rob3NlIG5vZGVzIGFyZSB1bmV4cGVjdGVkbHkgbW9kaWZpZWQgb3IgZHVwbGljYXRlZC4gVGhpcyBpcyAnICsgJ3Byb2JhYmx5IG5vdCBpbnRlbnRpb25hbC4nKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhwcm9wcy5vbkZvY3VzSW4gPT0gbnVsbCAmJiBwcm9wcy5vbkZvY3VzT3V0ID09IG51bGwsICdSZWFjdCB1c2VzIG9uRm9jdXMgYW5kIG9uQmx1ciBpbnN0ZWFkIG9mIG9uRm9jdXNJbiBhbmQgb25Gb2N1c091dC4gJyArICdBbGwgUmVhY3QgZXZlbnRzIGFyZSBub3JtYWxpemVkIHRvIGJ1YmJsZSwgc28gb25Gb2N1c0luIGFuZCBvbkZvY3VzT3V0ICcgKyAnYXJlIG5vdCBuZWVkZWQvc3VwcG9ydGVkIGJ5IFJlYWN0LicpIDogdm9pZCAwO1xuICB9XG4gICEocHJvcHMuc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdUaGUgYHN0eWxlYCBwcm9wIGV4cGVjdHMgYSBtYXBwaW5nIGZyb20gc3R5bGUgcHJvcGVydGllcyB0byB2YWx1ZXMsICcgKyAnbm90IGEgc3RyaW5nLiBGb3IgZXhhbXBsZSwgc3R5bGU9e3ttYXJnaW5SaWdodDogc3BhY2luZyArIFxcJ2VtXFwnfX0gd2hlbiAnICsgJ3VzaW5nIEpTWC4lcycsIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bShjb21wb25lbnQpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIGVucXVldWVQdXRMaXN0ZW5lcihpbnN0LCByZWdpc3RyYXRpb25OYW1lLCBsaXN0ZW5lciwgdHJhbnNhY3Rpb24pIHtcbiAgaWYgKHRyYW5zYWN0aW9uIGluc3RhbmNlb2YgUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIElFOCBoYXMgbm8gQVBJIGZvciBldmVudCBjYXB0dXJpbmcgYW5kIHRoZSBgb25TY3JvbGxgIGV2ZW50IGRvZXNuJ3RcbiAgICAvLyBidWJibGUuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcocmVnaXN0cmF0aW9uTmFtZSAhPT0gJ29uU2Nyb2xsJyB8fCBpc0V2ZW50U3VwcG9ydGVkKCdzY3JvbGwnLCB0cnVlKSwgJ1RoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCB0aGUgYG9uU2Nyb2xsYCBldmVudCcpIDogdm9pZCAwO1xuICB9XG4gIHZhciBjb250YWluZXJJbmZvID0gaW5zdC5fbmF0aXZlQ29udGFpbmVySW5mbztcbiAgdmFyIGlzRG9jdW1lbnRGcmFnbWVudCA9IGNvbnRhaW5lckluZm8uX25vZGUgJiYgY29udGFpbmVySW5mby5fbm9kZS5ub2RlVHlwZSA9PT0gRE9DX0ZSQUdNRU5UX1RZUEU7XG4gIHZhciBkb2MgPSBpc0RvY3VtZW50RnJhZ21lbnQgPyBjb250YWluZXJJbmZvLl9ub2RlIDogY29udGFpbmVySW5mby5fb3duZXJEb2N1bWVudDtcbiAgbGlzdGVuVG8ocmVnaXN0cmF0aW9uTmFtZSwgZG9jKTtcbiAgdHJhbnNhY3Rpb24uZ2V0UmVhY3RNb3VudFJlYWR5KCkuZW5xdWV1ZShwdXRMaXN0ZW5lciwge1xuICAgIGluc3Q6IGluc3QsXG4gICAgcmVnaXN0cmF0aW9uTmFtZTogcmVnaXN0cmF0aW9uTmFtZSxcbiAgICBsaXN0ZW5lcjogbGlzdGVuZXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1dExpc3RlbmVyKCkge1xuICB2YXIgbGlzdGVuZXJUb1B1dCA9IHRoaXM7XG4gIEV2ZW50UGx1Z2luSHViLnB1dExpc3RlbmVyKGxpc3RlbmVyVG9QdXQuaW5zdCwgbGlzdGVuZXJUb1B1dC5yZWdpc3RyYXRpb25OYW1lLCBsaXN0ZW5lclRvUHV0Lmxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gb3B0aW9uUG9zdE1vdW50KCkge1xuICB2YXIgaW5zdCA9IHRoaXM7XG4gIFJlYWN0RE9NT3B0aW9uLnBvc3RNb3VudFdyYXBwZXIoaW5zdCk7XG59XG5cbnZhciBzZXRDb250ZW50Q2hpbGRGb3JJbnN0cnVtZW50YXRpb24gPSBlbXB0eUZ1bmN0aW9uO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc2V0Q29udGVudENoaWxkRm9ySW5zdHJ1bWVudGF0aW9uID0gZnVuY3Rpb24gKGNvbnRlbnRUb1VzZSkge1xuICAgIHZhciBkZWJ1Z0lEID0gdGhpcy5fZGVidWdJRDtcbiAgICB2YXIgY29udGVudERlYnVnSUQgPSBkZWJ1Z0lEICsgJyN0ZXh0JztcbiAgICB0aGlzLl9jb250ZW50RGVidWdJRCA9IGNvbnRlbnREZWJ1Z0lEO1xuICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vblNldERpc3BsYXlOYW1lKGNvbnRlbnREZWJ1Z0lELCAnI3RleHQnKTtcbiAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25TZXRUZXh0KGNvbnRlbnREZWJ1Z0lELCAnJyArIGNvbnRlbnRUb1VzZSk7XG4gICAgUmVhY3RJbnN0cnVtZW50YXRpb24uZGVidWdUb29sLm9uTW91bnRDb21wb25lbnQoY29udGVudERlYnVnSUQpO1xuICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vblNldENoaWxkcmVuKGRlYnVnSUQsIFtjb250ZW50RGVidWdJRF0pO1xuICB9O1xufVxuXG4vLyBUaGVyZSBhcmUgc28gbWFueSBtZWRpYSBldmVudHMsIGl0IG1ha2VzIHNlbnNlIHRvIGp1c3Rcbi8vIG1haW50YWluIGEgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGUgYSBgdHJhcEJ1YmJsZWRFdmVudGAgZm9yIGVhY2hcbnZhciBtZWRpYUV2ZW50cyA9IHtcbiAgdG9wQWJvcnQ6ICdhYm9ydCcsXG4gIHRvcENhblBsYXk6ICdjYW5wbGF5JyxcbiAgdG9wQ2FuUGxheVRocm91Z2g6ICdjYW5wbGF5dGhyb3VnaCcsXG4gIHRvcER1cmF0aW9uQ2hhbmdlOiAnZHVyYXRpb25jaGFuZ2UnLFxuICB0b3BFbXB0aWVkOiAnZW1wdGllZCcsXG4gIHRvcEVuY3J5cHRlZDogJ2VuY3J5cHRlZCcsXG4gIHRvcEVuZGVkOiAnZW5kZWQnLFxuICB0b3BFcnJvcjogJ2Vycm9yJyxcbiAgdG9wTG9hZGVkRGF0YTogJ2xvYWRlZGRhdGEnLFxuICB0b3BMb2FkZWRNZXRhZGF0YTogJ2xvYWRlZG1ldGFkYXRhJyxcbiAgdG9wTG9hZFN0YXJ0OiAnbG9hZHN0YXJ0JyxcbiAgdG9wUGF1c2U6ICdwYXVzZScsXG4gIHRvcFBsYXk6ICdwbGF5JyxcbiAgdG9wUGxheWluZzogJ3BsYXlpbmcnLFxuICB0b3BQcm9ncmVzczogJ3Byb2dyZXNzJyxcbiAgdG9wUmF0ZUNoYW5nZTogJ3JhdGVjaGFuZ2UnLFxuICB0b3BTZWVrZWQ6ICdzZWVrZWQnLFxuICB0b3BTZWVraW5nOiAnc2Vla2luZycsXG4gIHRvcFN0YWxsZWQ6ICdzdGFsbGVkJyxcbiAgdG9wU3VzcGVuZDogJ3N1c3BlbmQnLFxuICB0b3BUaW1lVXBkYXRlOiAndGltZXVwZGF0ZScsXG4gIHRvcFZvbHVtZUNoYW5nZTogJ3ZvbHVtZWNoYW5nZScsXG4gIHRvcFdhaXRpbmc6ICd3YWl0aW5nJ1xufTtcblxuZnVuY3Rpb24gdHJhcEJ1YmJsZWRFdmVudHNMb2NhbCgpIHtcbiAgdmFyIGluc3QgPSB0aGlzO1xuICAvLyBJZiBhIGNvbXBvbmVudCByZW5kZXJzIHRvIG51bGwgb3IgaWYgYW5vdGhlciBjb21wb25lbnQgZmF0YWxzIGFuZCBjYXVzZXNcbiAgLy8gdGhlIHN0YXRlIG9mIHRoZSB0cmVlIHRvIGJlIGNvcnJ1cHRlZCwgYG5vZGVgIGhlcmUgY2FuIGJlIG51bGwuXG4gICFpbnN0Ll9yb290Tm9kZUlEID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ011c3QgYmUgbW91bnRlZCB0byB0cmFwIGV2ZW50cycpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgdmFyIG5vZGUgPSBnZXROb2RlKGluc3QpO1xuICAhbm9kZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd0cmFwQnViYmxlZEV2ZW50KC4uLik6IFJlcXVpcmVzIG5vZGUgdG8gYmUgcmVuZGVyZWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIHN3aXRjaCAoaW5zdC5fdGFnKSB7XG4gICAgY2FzZSAnaWZyYW1lJzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaW5zdC5fd3JhcHBlclN0YXRlLmxpc3RlbmVycyA9IFtSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIudHJhcEJ1YmJsZWRFdmVudChFdmVudENvbnN0YW50cy50b3BMZXZlbFR5cGVzLnRvcExvYWQsICdsb2FkJywgbm9kZSldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndmlkZW8nOlxuICAgIGNhc2UgJ2F1ZGlvJzpcblxuICAgICAgaW5zdC5fd3JhcHBlclN0YXRlLmxpc3RlbmVycyA9IFtdO1xuICAgICAgLy8gQ3JlYXRlIGxpc3RlbmVyIGZvciBlYWNoIG1lZGlhIGV2ZW50XG4gICAgICBmb3IgKHZhciBldmVudCBpbiBtZWRpYUV2ZW50cykge1xuICAgICAgICBpZiAobWVkaWFFdmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgaW5zdC5fd3JhcHBlclN0YXRlLmxpc3RlbmVycy5wdXNoKFJlYWN0QnJvd3NlckV2ZW50RW1pdHRlci50cmFwQnViYmxlZEV2ZW50KEV2ZW50Q29uc3RhbnRzLnRvcExldmVsVHlwZXNbZXZlbnRdLCBtZWRpYUV2ZW50c1tldmVudF0sIG5vZGUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICBjYXNlICdpbWcnOlxuICAgICAgaW5zdC5fd3JhcHBlclN0YXRlLmxpc3RlbmVycyA9IFtSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIudHJhcEJ1YmJsZWRFdmVudChFdmVudENvbnN0YW50cy50b3BMZXZlbFR5cGVzLnRvcEVycm9yLCAnZXJyb3InLCBub2RlKSwgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVyLnRyYXBCdWJibGVkRXZlbnQoRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlcy50b3BMb2FkLCAnbG9hZCcsIG5vZGUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgaW5zdC5fd3JhcHBlclN0YXRlLmxpc3RlbmVycyA9IFtSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIudHJhcEJ1YmJsZWRFdmVudChFdmVudENvbnN0YW50cy50b3BMZXZlbFR5cGVzLnRvcFJlc2V0LCAncmVzZXQnLCBub2RlKSwgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVyLnRyYXBCdWJibGVkRXZlbnQoRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlcy50b3BTdWJtaXQsICdzdWJtaXQnLCBub2RlKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICBpbnN0Ll93cmFwcGVyU3RhdGUubGlzdGVuZXJzID0gW1JlYWN0QnJvd3NlckV2ZW50RW1pdHRlci50cmFwQnViYmxlZEV2ZW50KEV2ZW50Q29uc3RhbnRzLnRvcExldmVsVHlwZXMudG9wSW52YWxpZCwgJ2ludmFsaWQnLCBub2RlKV07XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0VXBkYXRlU2VsZWN0V3JhcHBlcigpIHtcbiAgUmVhY3RET01TZWxlY3QucG9zdFVwZGF0ZVdyYXBwZXIodGhpcyk7XG59XG5cbi8vIEZvciBIVE1MLCBjZXJ0YWluIHRhZ3Mgc2hvdWxkIG9taXQgdGhlaXIgY2xvc2UgdGFnLiBXZSBrZWVwIGEgd2hpdGVsaXN0IGZvclxuLy8gdGhvc2Ugc3BlY2lhbC1jYXNlIHRhZ3MuXG5cbnZhciBvbWl0dGVkQ2xvc2VUYWdzID0ge1xuICAnYXJlYSc6IHRydWUsXG4gICdiYXNlJzogdHJ1ZSxcbiAgJ2JyJzogdHJ1ZSxcbiAgJ2NvbCc6IHRydWUsXG4gICdlbWJlZCc6IHRydWUsXG4gICdocic6IHRydWUsXG4gICdpbWcnOiB0cnVlLFxuICAnaW5wdXQnOiB0cnVlLFxuICAna2V5Z2VuJzogdHJ1ZSxcbiAgJ2xpbmsnOiB0cnVlLFxuICAnbWV0YSc6IHRydWUsXG4gICdwYXJhbSc6IHRydWUsXG4gICdzb3VyY2UnOiB0cnVlLFxuICAndHJhY2snOiB0cnVlLFxuICAnd2JyJzogdHJ1ZVxufTtcblxuLy8gTk9URTogbWVudWl0ZW0ncyBjbG9zZSB0YWcgc2hvdWxkIGJlIG9taXR0ZWQsIGJ1dCB0aGF0IGNhdXNlcyBwcm9ibGVtcy5cbnZhciBuZXdsaW5lRWF0aW5nVGFncyA9IHtcbiAgJ2xpc3RpbmcnOiB0cnVlLFxuICAncHJlJzogdHJ1ZSxcbiAgJ3RleHRhcmVhJzogdHJ1ZVxufTtcblxuLy8gRm9yIEhUTUwsIGNlcnRhaW4gdGFncyBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4gVGhpcyBoYXMgdGhlIHNhbWUgcHVycG9zZSBhc1xuLy8gYG9taXR0ZWRDbG9zZVRhZ3NgIGV4Y2VwdCB0aGF0IGBtZW51aXRlbWAgc2hvdWxkIHN0aWxsIGhhdmUgaXRzIGNsb3NpbmcgdGFnLlxuXG52YXIgdm9pZEVsZW1lbnRUYWdzID0gX2Fzc2lnbih7XG4gICdtZW51aXRlbSc6IHRydWVcbn0sIG9taXR0ZWRDbG9zZVRhZ3MpO1xuXG4vLyBXZSBhY2NlcHQgYW55IHRhZyB0byBiZSByZW5kZXJlZCBidXQgc2luY2UgdGhpcyBnZXRzIGluamVjdGVkIGludG8gYXJiaXRyYXJ5XG4vLyBIVE1MLCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB0aGF0IGl0J3MgYSBzYWZlIHRhZy5cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy14bWwvI05ULU5hbWVcblxudmFyIFZBTElEX1RBR19SRUdFWCA9IC9eW2EtekEtWl1bYS16QS1aOl9cXC5cXC1cXGRdKiQvOyAvLyBTaW1wbGlmaWVkIHN1YnNldFxudmFyIHZhbGlkYXRlZFRhZ0NhY2hlID0ge307XG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKSB7XG4gIGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0ZWRUYWdDYWNoZSwgdGFnKSkge1xuICAgICFWQUxJRF9UQUdfUkVHRVgudGVzdCh0YWcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0ludmFsaWQgdGFnOiAlcycsIHRhZykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhbGlkYXRlZFRhZ0NhY2hlW3RhZ10gPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ3VzdG9tQ29tcG9uZW50KHRhZ05hbWUsIHByb3BzKSB7XG4gIHJldHVybiB0YWdOYW1lLmluZGV4T2YoJy0nKSA+PSAwIHx8IHByb3BzLmlzICE9IG51bGw7XG59XG5cbnZhciBnbG9iYWxJZENvdW50ZXIgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgUmVhY3QgY2xhc3MgdGhhdCBpcyBpZGVtcG90ZW50IGFuZCBjYXBhYmxlIG9mIGNvbnRhaW5pbmcgb3RoZXJcbiAqIFJlYWN0IGNvbXBvbmVudHMuIEl0IGFjY2VwdHMgZXZlbnQgbGlzdGVuZXJzIGFuZCBET00gcHJvcGVydGllcyB0aGF0IGFyZVxuICogdmFsaWQgYWNjb3JkaW5nIHRvIGBET01Qcm9wZXJ0eWAuXG4gKlxuICogIC0gRXZlbnQgbGlzdGVuZXJzOiBgb25DbGlja2AsIGBvbk1vdXNlRG93bmAsIGV0Yy5cbiAqICAtIERPTSBwcm9wZXJ0aWVzOiBgY2xhc3NOYW1lYCwgYG5hbWVgLCBgdGl0bGVgLCBldGMuXG4gKlxuICogVGhlIGBzdHlsZWAgcHJvcGVydHkgZnVuY3Rpb25zIGRpZmZlcmVudGx5IGZyb20gdGhlIERPTSBBUEkuIEl0IGFjY2VwdHMgYW5cbiAqIG9iamVjdCBtYXBwaW5nIG9mIHN0eWxlIHByb3BlcnRpZXMgdG8gdmFsdWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvciBSZWFjdERPTUNvbXBvbmVudFxuICogQGV4dGVuZHMgUmVhY3RNdWx0aUNoaWxkXG4gKi9cbmZ1bmN0aW9uIFJlYWN0RE9NQ29tcG9uZW50KGVsZW1lbnQpIHtcbiAgdmFyIHRhZyA9IGVsZW1lbnQudHlwZTtcbiAgdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKTtcbiAgdGhpcy5fY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLl90YWcgPSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgdGhpcy5fbmFtZXNwYWNlVVJJID0gbnVsbDtcbiAgdGhpcy5fcmVuZGVyZWRDaGlsZHJlbiA9IG51bGw7XG4gIHRoaXMuX3ByZXZpb3VzU3R5bGUgPSBudWxsO1xuICB0aGlzLl9wcmV2aW91c1N0eWxlQ29weSA9IG51bGw7XG4gIHRoaXMuX25hdGl2ZU5vZGUgPSBudWxsO1xuICB0aGlzLl9uYXRpdmVQYXJlbnQgPSBudWxsO1xuICB0aGlzLl9yb290Tm9kZUlEID0gbnVsbDtcbiAgdGhpcy5fZG9tSUQgPSBudWxsO1xuICB0aGlzLl9uYXRpdmVDb250YWluZXJJbmZvID0gbnVsbDtcbiAgdGhpcy5fd3JhcHBlclN0YXRlID0gbnVsbDtcbiAgdGhpcy5fdG9wTGV2ZWxXcmFwcGVyID0gbnVsbDtcbiAgdGhpcy5fZmxhZ3MgPSAwO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRoaXMuX2FuY2VzdG9ySW5mbyA9IG51bGw7XG4gICAgdGhpcy5fY29udGVudERlYnVnSUQgPSBudWxsO1xuICB9XG59XG5cblJlYWN0RE9NQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ1JlYWN0RE9NQ29tcG9uZW50JztcblxuUmVhY3RET01Db21wb25lbnQuTWl4aW4gPSB7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyByb290IHRhZyBtYXJrdXAgdGhlbiByZWN1cnNlcy4gVGhpcyBtZXRob2QgaGFzIHNpZGUgZWZmZWN0cyBhbmRcbiAgICogaXMgbm90IGlkZW1wb3RlbnQuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb258UmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICogQHBhcmFtIHs/UmVhY3RET01Db21wb25lbnR9IHRoZSBjb250YWluaW5nIERPTSBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBpbmZvIGFib3V0IHRoZSBuYXRpdmUgY29udGFpbmVyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvbXB1dGVkIG1hcmt1cC5cbiAgICovXG4gIG1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIG5hdGl2ZVBhcmVudCwgbmF0aXZlQ29udGFpbmVySW5mbywgY29udGV4dCkge1xuICAgIHRoaXMuX3Jvb3ROb2RlSUQgPSBnbG9iYWxJZENvdW50ZXIrKztcbiAgICB0aGlzLl9kb21JRCA9IG5hdGl2ZUNvbnRhaW5lckluZm8uX2lkQ291bnRlcisrO1xuICAgIHRoaXMuX25hdGl2ZVBhcmVudCA9IG5hdGl2ZVBhcmVudDtcbiAgICB0aGlzLl9uYXRpdmVDb250YWluZXJJbmZvID0gbmF0aXZlQ29udGFpbmVySW5mbztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMuX2N1cnJlbnRFbGVtZW50LnByb3BzO1xuXG4gICAgc3dpdGNoICh0aGlzLl90YWcpIHtcbiAgICAgIGNhc2UgJ2lmcmFtZSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICB0aGlzLl93cmFwcGVyU3RhdGUgPSB7XG4gICAgICAgICAgbGlzdGVuZXJzOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRyYW5zYWN0aW9uLmdldFJlYWN0TW91bnRSZWFkeSgpLmVucXVldWUodHJhcEJ1YmJsZWRFdmVudHNMb2NhbCwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgcHJvcHMgPSBSZWFjdERPTUJ1dHRvbi5nZXROYXRpdmVQcm9wcyh0aGlzLCBwcm9wcywgbmF0aXZlUGFyZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIFJlYWN0RE9NSW5wdXQubW91bnRXcmFwcGVyKHRoaXMsIHByb3BzLCBuYXRpdmVQYXJlbnQpO1xuICAgICAgICBwcm9wcyA9IFJlYWN0RE9NSW5wdXQuZ2V0TmF0aXZlUHJvcHModGhpcywgcHJvcHMpO1xuICAgICAgICB0cmFuc2FjdGlvbi5nZXRSZWFjdE1vdW50UmVhZHkoKS5lbnF1ZXVlKHRyYXBCdWJibGVkRXZlbnRzTG9jYWwsIHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgIFJlYWN0RE9NT3B0aW9uLm1vdW50V3JhcHBlcih0aGlzLCBwcm9wcywgbmF0aXZlUGFyZW50KTtcbiAgICAgICAgcHJvcHMgPSBSZWFjdERPTU9wdGlvbi5nZXROYXRpdmVQcm9wcyh0aGlzLCBwcm9wcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgUmVhY3RET01TZWxlY3QubW91bnRXcmFwcGVyKHRoaXMsIHByb3BzLCBuYXRpdmVQYXJlbnQpO1xuICAgICAgICBwcm9wcyA9IFJlYWN0RE9NU2VsZWN0LmdldE5hdGl2ZVByb3BzKHRoaXMsIHByb3BzKTtcbiAgICAgICAgdHJhbnNhY3Rpb24uZ2V0UmVhY3RNb3VudFJlYWR5KCkuZW5xdWV1ZSh0cmFwQnViYmxlZEV2ZW50c0xvY2FsLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIFJlYWN0RE9NVGV4dGFyZWEubW91bnRXcmFwcGVyKHRoaXMsIHByb3BzLCBuYXRpdmVQYXJlbnQpO1xuICAgICAgICBwcm9wcyA9IFJlYWN0RE9NVGV4dGFyZWEuZ2V0TmF0aXZlUHJvcHModGhpcywgcHJvcHMpO1xuICAgICAgICB0cmFuc2FjdGlvbi5nZXRSZWFjdE1vdW50UmVhZHkoKS5lbnF1ZXVlKHRyYXBCdWJibGVkRXZlbnRzTG9jYWwsIHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBhc3NlcnRWYWxpZFByb3BzKHRoaXMsIHByb3BzKTtcblxuICAgIC8vIFdlIGNyZWF0ZSB0YWdzIGluIHRoZSBuYW1lc3BhY2Ugb2YgdGhlaXIgcGFyZW50IGNvbnRhaW5lciwgZXhjZXB0IEhUTUxcbiAgICAvLyB0YWdzIGdldCBubyBuYW1lc3BhY2UuXG4gICAgdmFyIG5hbWVzcGFjZVVSSTtcbiAgICB2YXIgcGFyZW50VGFnO1xuICAgIGlmIChuYXRpdmVQYXJlbnQgIT0gbnVsbCkge1xuICAgICAgbmFtZXNwYWNlVVJJID0gbmF0aXZlUGFyZW50Ll9uYW1lc3BhY2VVUkk7XG4gICAgICBwYXJlbnRUYWcgPSBuYXRpdmVQYXJlbnQuX3RhZztcbiAgICB9IGVsc2UgaWYgKG5hdGl2ZUNvbnRhaW5lckluZm8uX3RhZykge1xuICAgICAgbmFtZXNwYWNlVVJJID0gbmF0aXZlQ29udGFpbmVySW5mby5fbmFtZXNwYWNlVVJJO1xuICAgICAgcGFyZW50VGFnID0gbmF0aXZlQ29udGFpbmVySW5mby5fdGFnO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlVVJJID09IG51bGwgfHwgbmFtZXNwYWNlVVJJID09PSBET01OYW1lc3BhY2VzLnN2ZyAmJiBwYXJlbnRUYWcgPT09ICdmb3JlaWdub2JqZWN0Jykge1xuICAgICAgbmFtZXNwYWNlVVJJID0gRE9NTmFtZXNwYWNlcy5odG1sO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlVVJJID09PSBET01OYW1lc3BhY2VzLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLl90YWcgPT09ICdzdmcnKSB7XG4gICAgICAgIG5hbWVzcGFjZVVSSSA9IERPTU5hbWVzcGFjZXMuc3ZnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl90YWcgPT09ICdtYXRoJykge1xuICAgICAgICBuYW1lc3BhY2VVUkkgPSBET01OYW1lc3BhY2VzLm1hdGhtbDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbmFtZXNwYWNlVVJJID0gbmFtZXNwYWNlVVJJO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBwYXJlbnRJbmZvO1xuICAgICAgaWYgKG5hdGl2ZVBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEluZm8gPSBuYXRpdmVQYXJlbnQuX2FuY2VzdG9ySW5mbztcbiAgICAgIH0gZWxzZSBpZiAobmF0aXZlQ29udGFpbmVySW5mby5fdGFnKSB7XG4gICAgICAgIHBhcmVudEluZm8gPSBuYXRpdmVDb250YWluZXJJbmZvLl9hbmNlc3RvckluZm87XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50SW5mbykge1xuICAgICAgICAvLyBwYXJlbnRJbmZvIHNob3VsZCBhbHdheXMgYmUgcHJlc2VudCBleGNlcHQgZm9yIHRoZSB0b3AtbGV2ZWxcbiAgICAgICAgLy8gY29tcG9uZW50IHdoZW4gc2VydmVyIHJlbmRlcmluZ1xuICAgICAgICB2YWxpZGF0ZURPTU5lc3RpbmcodGhpcy5fdGFnLCB0aGlzLCBwYXJlbnRJbmZvKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FuY2VzdG9ySW5mbyA9IHZhbGlkYXRlRE9NTmVzdGluZy51cGRhdGVkQW5jZXN0b3JJbmZvKHBhcmVudEluZm8sIHRoaXMuX3RhZywgdGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50SW1hZ2U7XG4gICAgaWYgKHRyYW5zYWN0aW9uLnVzZUNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lckRvY3VtZW50ID0gbmF0aXZlQ29udGFpbmVySW5mby5fb3duZXJEb2N1bWVudDtcbiAgICAgIHZhciBlbDtcbiAgICAgIGlmIChuYW1lc3BhY2VVUkkgPT09IERPTU5hbWVzcGFjZXMuaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5fdGFnID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgc2NyaXB0IHZpYSAuaW5uZXJIVE1MIHNvIGl0cyBcInBhcnNlci1pbnNlcnRlZFwiIGZsYWcgaXNcbiAgICAgICAgICAvLyBzZXQgdG8gdHJ1ZSBhbmQgaXQgZG9lcyBub3QgZXhlY3V0ZVxuICAgICAgICAgIHZhciBkaXYgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHZhciB0eXBlID0gdGhpcy5fY3VycmVudEVsZW1lbnQudHlwZTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwnICsgdHlwZSArICc+PC8nICsgdHlwZSArICc+JztcbiAgICAgICAgICBlbCA9IGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5fY3VycmVudEVsZW1lbnQudHlwZSwgcHJvcHMuaXMgfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCB0aGlzLl9jdXJyZW50RWxlbWVudC50eXBlKTtcbiAgICAgIH1cbiAgICAgIFJlYWN0RE9NQ29tcG9uZW50VHJlZS5wcmVjYWNoZU5vZGUodGhpcywgZWwpO1xuICAgICAgdGhpcy5fZmxhZ3MgfD0gRmxhZ3MuaGFzQ2FjaGVkQ2hpbGROb2RlcztcbiAgICAgIGlmICghdGhpcy5fbmF0aXZlUGFyZW50KSB7XG4gICAgICAgIERPTVByb3BlcnR5T3BlcmF0aW9ucy5zZXRBdHRyaWJ1dGVGb3JSb290KGVsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZURPTVByb3BlcnRpZXMobnVsbCwgcHJvcHMsIHRyYW5zYWN0aW9uKTtcbiAgICAgIHZhciBsYXp5VHJlZSA9IERPTUxhenlUcmVlKGVsKTtcbiAgICAgIHRoaXMuX2NyZWF0ZUluaXRpYWxDaGlsZHJlbih0cmFuc2FjdGlvbiwgcHJvcHMsIGNvbnRleHQsIGxhenlUcmVlKTtcbiAgICAgIG1vdW50SW1hZ2UgPSBsYXp5VHJlZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZ09wZW4gPSB0aGlzLl9jcmVhdGVPcGVuVGFnTWFya3VwQW5kUHV0TGlzdGVuZXJzKHRyYW5zYWN0aW9uLCBwcm9wcyk7XG4gICAgICB2YXIgdGFnQ29udGVudCA9IHRoaXMuX2NyZWF0ZUNvbnRlbnRNYXJrdXAodHJhbnNhY3Rpb24sIHByb3BzLCBjb250ZXh0KTtcbiAgICAgIGlmICghdGFnQ29udGVudCAmJiBvbWl0dGVkQ2xvc2VUYWdzW3RoaXMuX3RhZ10pIHtcbiAgICAgICAgbW91bnRJbWFnZSA9IHRhZ09wZW4gKyAnLz4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW91bnRJbWFnZSA9IHRhZ09wZW4gKyAnPicgKyB0YWdDb250ZW50ICsgJzwvJyArIHRoaXMuX2N1cnJlbnRFbGVtZW50LnR5cGUgKyAnPic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl90YWcpIHtcbiAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBpZiAocHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgdHJhbnNhY3Rpb24uZ2V0UmVhY3RNb3VudFJlYWR5KCkuZW5xdWV1ZShBdXRvRm9jdXNVdGlscy5mb2N1c0RPTUNvbXBvbmVudCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcHRpb24nOlxuICAgICAgICB0cmFuc2FjdGlvbi5nZXRSZWFjdE1vdW50UmVhZHkoKS5lbnF1ZXVlKG9wdGlvblBvc3RNb3VudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdW50SW1hZ2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbWFya3VwIGZvciB0aGUgb3BlbiB0YWcgYW5kIGFsbCBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBoYXMgc2lkZSBlZmZlY3RzIGJlY2F1c2UgZXZlbnRzIGdldCByZWdpc3RlcmVkLlxuICAgKlxuICAgKiBJdGVyYXRpbmcgb3ZlciBvYmplY3QgcHJvcGVydGllcyBpcyBmYXN0ZXIgdGhhbiBpdGVyYXRpbmcgb3ZlciBhcnJheXMuXG4gICAqIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vb2JqLXZzLWFyci1pdGVyYXRpb25cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufFJlYWN0U2VydmVyUmVuZGVyaW5nVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9IE1hcmt1cCBvZiBvcGVuaW5nIHRhZy5cbiAgICovXG4gIF9jcmVhdGVPcGVuVGFnTWFya3VwQW5kUHV0TGlzdGVuZXJzOiBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIHByb3BzKSB7XG4gICAgdmFyIHJldCA9ICc8JyArIHRoaXMuX2N1cnJlbnRFbGVtZW50LnR5cGU7XG5cbiAgICBmb3IgKHZhciBwcm9wS2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BLZXldO1xuICAgICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHJlZ2lzdHJhdGlvbk5hbWVNb2R1bGVzLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUpIHtcbiAgICAgICAgICBlbnF1ZXVlUHV0TGlzdGVuZXIodGhpcywgcHJvcEtleSwgcHJvcFZhbHVlLCB0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9wS2V5ID09PSBTVFlMRSkge1xuICAgICAgICAgIGlmIChwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIFNlZSBgX3VwZGF0ZURPTVByb3BlcnRpZXNgLiBzdHlsZSBibG9ja1xuICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcFZhbHVlID0gdGhpcy5fcHJldmlvdXNTdHlsZUNvcHkgPSBfYXNzaWduKHt9LCBwcm9wcy5zdHlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb3BWYWx1ZSA9IENTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMocHJvcFZhbHVlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWFya3VwID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3RhZyAhPSBudWxsICYmIGlzQ3VzdG9tQ29tcG9uZW50KHRoaXMuX3RhZywgcHJvcHMpKSB7XG4gICAgICAgICAgaWYgKCFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgbWFya3VwID0gRE9NUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvckN1c3RvbUF0dHJpYnV0ZShwcm9wS2V5LCBwcm9wVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXJrdXAgPSBET01Qcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yUHJvcGVydHkocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFya3VwKSB7XG4gICAgICAgICAgcmV0ICs9ICcgJyArIG1hcmt1cDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvciBzdGF0aWMgcGFnZXMsIG5vIG5lZWQgdG8gcHV0IFJlYWN0IElEIGFuZCBjaGVja3N1bS4gU2F2ZXMgbG90cyBvZlxuICAgIC8vIGJ5dGVzLlxuICAgIGlmICh0cmFuc2FjdGlvbi5yZW5kZXJUb1N0YXRpY01hcmt1cCkge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX25hdGl2ZVBhcmVudCkge1xuICAgICAgcmV0ICs9ICcgJyArIERPTVByb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JSb290KCk7XG4gICAgfVxuICAgIHJldCArPSAnICcgKyBET01Qcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9ySUQodGhpcy5fZG9tSUQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbWFya3VwIGZvciB0aGUgY29udGVudCBiZXR3ZWVuIHRoZSB0YWdzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb258UmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEByZXR1cm4ge3N0cmluZ30gQ29udGVudCBtYXJrdXAuXG4gICAqL1xuICBfY3JlYXRlQ29udGVudE1hcmt1cDogZnVuY3Rpb24gKHRyYW5zYWN0aW9uLCBwcm9wcywgY29udGV4dCkge1xuICAgIHZhciByZXQgPSAnJztcblxuICAgIC8vIEludGVudGlvbmFsIHVzZSBvZiAhPSB0byBhdm9pZCBjYXRjaGluZyB6ZXJvL2ZhbHNlLlxuICAgIHZhciBpbm5lckhUTUwgPSBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcbiAgICBpZiAoaW5uZXJIVE1MICE9IG51bGwpIHtcbiAgICAgIGlmIChpbm5lckhUTUwuX19odG1sICE9IG51bGwpIHtcbiAgICAgICAgcmV0ID0gaW5uZXJIVE1MLl9faHRtbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRlbnRUb1VzZSA9IENPTlRFTlRfVFlQRVNbdHlwZW9mIHByb3BzLmNoaWxkcmVuXSA/IHByb3BzLmNoaWxkcmVuIDogbnVsbDtcbiAgICAgIHZhciBjaGlsZHJlblRvVXNlID0gY29udGVudFRvVXNlICE9IG51bGwgPyBudWxsIDogcHJvcHMuY2hpbGRyZW47XG4gICAgICBpZiAoY29udGVudFRvVXNlICE9IG51bGwpIHtcbiAgICAgICAgLy8gVE9ETzogVmFsaWRhdGUgdGhhdCB0ZXh0IGlzIGFsbG93ZWQgYXMgYSBjaGlsZCBvZiB0aGlzIG5vZGVcbiAgICAgICAgcmV0ID0gZXNjYXBlVGV4dENvbnRlbnRGb3JCcm93c2VyKGNvbnRlbnRUb1VzZSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgc2V0Q29udGVudENoaWxkRm9ySW5zdHJ1bWVudGF0aW9uLmNhbGwodGhpcywgY29udGVudFRvVXNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHJlblRvVXNlICE9IG51bGwpIHtcbiAgICAgICAgdmFyIG1vdW50SW1hZ2VzID0gdGhpcy5tb3VudENoaWxkcmVuKGNoaWxkcmVuVG9Vc2UsIHRyYW5zYWN0aW9uLCBjb250ZXh0KTtcbiAgICAgICAgcmV0ID0gbW91bnRJbWFnZXMuam9pbignJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuZXdsaW5lRWF0aW5nVGFnc1t0aGlzLl90YWddICYmIHJldC5jaGFyQXQoMCkgPT09ICdcXG4nKSB7XG4gICAgICAvLyB0ZXh0L2h0bWwgaWdub3JlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZXNlIHRhZ3MgaWYgaXQncyBhIG5ld2xpbmVcbiAgICAgIC8vIFByZWZlciB0byBicmVhayBhcHBsaWNhdGlvbi94bWwgb3ZlciB0ZXh0L2h0bWwgKGZvciBub3cpIGJ5IGFkZGluZ1xuICAgICAgLy8gYSBuZXdsaW5lIHNwZWNpZmljYWxseSB0byBnZXQgZWF0ZW4gYnkgdGhlIHBhcnNlci4gKEFsdGVybmF0ZWx5IGZvclxuICAgICAgLy8gdGV4dGFyZWFzLCByZXBsYWNpbmcgXCJeXFxuXCIgd2l0aCBcIlxcclxcblwiIGRvZXNuJ3QgZ2V0IGVhdGVuLCBhbmQgdGhlIGZpcnN0XG4gICAgICAvLyBcXHIgaXMgbm9ybWFsaXplZCBvdXQgYnkgSFRNTFRleHRBcmVhRWxlbWVudCN2YWx1ZS4pXG4gICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sLXBvbHlnbG90LyNuZXdsaW5lcy1pbi10ZXh0YXJlYS1hbmQtcHJlPlxuICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudC1yZXN0cmljdGlvbnM+XG4gICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNuZXdsaW5lcz5cbiAgICAgIC8vIFNlZTogUGFyc2luZyBvZiBcInRleHRhcmVhXCIgXCJsaXN0aW5nXCIgYW5kIFwicHJlXCIgZWxlbWVudHNcbiAgICAgIC8vICBmcm9tIDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5ib2R5PlxuICAgICAgcmV0dXJuICdcXG4nICsgcmV0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgfSxcblxuICBfY3JlYXRlSW5pdGlhbENoaWxkcmVuOiBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIHByb3BzLCBjb250ZXh0LCBsYXp5VHJlZSkge1xuICAgIC8vIEludGVudGlvbmFsIHVzZSBvZiAhPSB0byBhdm9pZCBjYXRjaGluZyB6ZXJvL2ZhbHNlLlxuICAgIHZhciBpbm5lckhUTUwgPSBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcbiAgICBpZiAoaW5uZXJIVE1MICE9IG51bGwpIHtcbiAgICAgIGlmIChpbm5lckhUTUwuX19odG1sICE9IG51bGwpIHtcbiAgICAgICAgRE9NTGF6eVRyZWUucXVldWVIVE1MKGxhenlUcmVlLCBpbm5lckhUTUwuX19odG1sKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRlbnRUb1VzZSA9IENPTlRFTlRfVFlQRVNbdHlwZW9mIHByb3BzLmNoaWxkcmVuXSA/IHByb3BzLmNoaWxkcmVuIDogbnVsbDtcbiAgICAgIHZhciBjaGlsZHJlblRvVXNlID0gY29udGVudFRvVXNlICE9IG51bGwgPyBudWxsIDogcHJvcHMuY2hpbGRyZW47XG4gICAgICBpZiAoY29udGVudFRvVXNlICE9IG51bGwpIHtcbiAgICAgICAgLy8gVE9ETzogVmFsaWRhdGUgdGhhdCB0ZXh0IGlzIGFsbG93ZWQgYXMgYSBjaGlsZCBvZiB0aGlzIG5vZGVcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBzZXRDb250ZW50Q2hpbGRGb3JJbnN0cnVtZW50YXRpb24uY2FsbCh0aGlzLCBjb250ZW50VG9Vc2UpO1xuICAgICAgICB9XG4gICAgICAgIERPTUxhenlUcmVlLnF1ZXVlVGV4dChsYXp5VHJlZSwgY29udGVudFRvVXNlKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5Ub1VzZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBtb3VudEltYWdlcyA9IHRoaXMubW91bnRDaGlsZHJlbihjaGlsZHJlblRvVXNlLCB0cmFuc2FjdGlvbiwgY29udGV4dCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW91bnRJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBET01MYXp5VHJlZS5xdWV1ZUNoaWxkKGxhenlUcmVlLCBtb3VudEltYWdlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlY2VpdmVzIGEgbmV4dCBlbGVtZW50IGFuZCB1cGRhdGVzIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gbmV4dEVsZW1lbnRcbiAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufFJlYWN0U2VydmVyUmVuZGVyaW5nVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqL1xuICByZWNlaXZlQ29tcG9uZW50OiBmdW5jdGlvbiAobmV4dEVsZW1lbnQsIHRyYW5zYWN0aW9uLCBjb250ZXh0KSB7XG4gICAgdmFyIHByZXZFbGVtZW50ID0gdGhpcy5fY3VycmVudEVsZW1lbnQ7XG4gICAgdGhpcy5fY3VycmVudEVsZW1lbnQgPSBuZXh0RWxlbWVudDtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCh0cmFuc2FjdGlvbiwgcHJldkVsZW1lbnQsIG5leHRFbGVtZW50LCBjb250ZXh0KTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyBhIG5hdGl2ZSBET00gY29tcG9uZW50IGFmdGVyIGl0IGhhcyBhbHJlYWR5IGJlZW4gYWxsb2NhdGVkIGFuZFxuICAgKiBhdHRhY2hlZCB0byB0aGUgRE9NLiBSZWNvbmNpbGVzIHRoZSByb290IERPTSBub2RlLCB0aGVuIHJlY3Vyc2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBwcmV2RWxlbWVudFxuICAgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gbmV4dEVsZW1lbnRcbiAgICogQGludGVybmFsXG4gICAqIEBvdmVycmlkYWJsZVxuICAgKi9cbiAgdXBkYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCwgY29udGV4dCkge1xuICAgIHZhciBsYXN0UHJvcHMgPSBwcmV2RWxlbWVudC5wcm9wcztcbiAgICB2YXIgbmV4dFByb3BzID0gdGhpcy5fY3VycmVudEVsZW1lbnQucHJvcHM7XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3RhZykge1xuICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgbGFzdFByb3BzID0gUmVhY3RET01CdXR0b24uZ2V0TmF0aXZlUHJvcHModGhpcywgbGFzdFByb3BzKTtcbiAgICAgICAgbmV4dFByb3BzID0gUmVhY3RET01CdXR0b24uZ2V0TmF0aXZlUHJvcHModGhpcywgbmV4dFByb3BzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIFJlYWN0RE9NSW5wdXQudXBkYXRlV3JhcHBlcih0aGlzKTtcbiAgICAgICAgbGFzdFByb3BzID0gUmVhY3RET01JbnB1dC5nZXROYXRpdmVQcm9wcyh0aGlzLCBsYXN0UHJvcHMpO1xuICAgICAgICBuZXh0UHJvcHMgPSBSZWFjdERPTUlucHV0LmdldE5hdGl2ZVByb3BzKHRoaXMsIG5leHRQcm9wcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3B0aW9uJzpcbiAgICAgICAgbGFzdFByb3BzID0gUmVhY3RET01PcHRpb24uZ2V0TmF0aXZlUHJvcHModGhpcywgbGFzdFByb3BzKTtcbiAgICAgICAgbmV4dFByb3BzID0gUmVhY3RET01PcHRpb24uZ2V0TmF0aXZlUHJvcHModGhpcywgbmV4dFByb3BzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBsYXN0UHJvcHMgPSBSZWFjdERPTVNlbGVjdC5nZXROYXRpdmVQcm9wcyh0aGlzLCBsYXN0UHJvcHMpO1xuICAgICAgICBuZXh0UHJvcHMgPSBSZWFjdERPTVNlbGVjdC5nZXROYXRpdmVQcm9wcyh0aGlzLCBuZXh0UHJvcHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgUmVhY3RET01UZXh0YXJlYS51cGRhdGVXcmFwcGVyKHRoaXMpO1xuICAgICAgICBsYXN0UHJvcHMgPSBSZWFjdERPTVRleHRhcmVhLmdldE5hdGl2ZVByb3BzKHRoaXMsIGxhc3RQcm9wcyk7XG4gICAgICAgIG5leHRQcm9wcyA9IFJlYWN0RE9NVGV4dGFyZWEuZ2V0TmF0aXZlUHJvcHModGhpcywgbmV4dFByb3BzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgYXNzZXJ0VmFsaWRQcm9wcyh0aGlzLCBuZXh0UHJvcHMpO1xuICAgIHRoaXMuX3VwZGF0ZURPTVByb3BlcnRpZXMobGFzdFByb3BzLCBuZXh0UHJvcHMsIHRyYW5zYWN0aW9uKTtcbiAgICB0aGlzLl91cGRhdGVET01DaGlsZHJlbihsYXN0UHJvcHMsIG5leHRQcm9wcywgdHJhbnNhY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMuX3RhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIC8vIDxzZWxlY3Q+IHZhbHVlIHVwZGF0ZSBuZWVkcyB0byBvY2N1ciBhZnRlciA8b3B0aW9uPiBjaGlsZHJlblxuICAgICAgLy8gcmVjb25jaWxpYXRpb25cbiAgICAgIHRyYW5zYWN0aW9uLmdldFJlYWN0TW91bnRSZWFkeSgpLmVucXVldWUocG9zdFVwZGF0ZVNlbGVjdFdyYXBwZXIsIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVjb25jaWxlcyB0aGUgcHJvcGVydGllcyBieSBkZXRlY3RpbmcgZGlmZmVyZW5jZXMgaW4gcHJvcGVydHkgdmFsdWVzIGFuZFxuICAgKiB1cGRhdGluZyB0aGUgRE9NIGFzIG5lY2Vzc2FyeS4gVGhpcyBmdW5jdGlvbiBpcyBwcm9iYWJseSB0aGUgc2luZ2xlIG1vc3RcbiAgICogY3JpdGljYWwgcGF0aCBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICAgKlxuICAgKiBUT0RPOiBCZW5jaG1hcmsgd2hldGhlciBjaGVja2luZyBmb3IgY2hhbmdlZCB2YWx1ZXMgaW4gbWVtb3J5IGFjdHVhbGx5XG4gICAqICAgICAgIGltcHJvdmVzIHBlcmZvcm1hbmNlIChlc3BlY2lhbGx5IHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50cykuXG4gICAqIFRPRE86IEJlbmNobWFyayB0aGUgZWZmZWN0cyBvZiBwdXR0aW5nIHRoaXMgYXQgdGhlIHRvcCBzaW5jZSA5OSUgb2YgcHJvcHNcbiAgICogICAgICAgZG8gbm90IGNoYW5nZSBmb3IgYSBnaXZlbiByZWNvbmNpbGlhdGlvbi5cbiAgICogVE9ETzogQmVuY2htYXJrIGFyZWFzIHRoYXQgY2FuIGJlIGltcHJvdmVkIHdpdGggY2FjaGluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGxhc3RQcm9wc1xuICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAqIEBwYXJhbSB7P0RPTUVsZW1lbnR9IG5vZGVcbiAgICovXG4gIF91cGRhdGVET01Qcm9wZXJ0aWVzOiBmdW5jdGlvbiAobGFzdFByb3BzLCBuZXh0UHJvcHMsIHRyYW5zYWN0aW9uKSB7XG4gICAgdmFyIHByb3BLZXk7XG4gICAgdmFyIHN0eWxlTmFtZTtcbiAgICB2YXIgc3R5bGVVcGRhdGVzO1xuICAgIGZvciAocHJvcEtleSBpbiBsYXN0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkocHJvcEtleSkgfHwgIWxhc3RQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSB8fCBsYXN0UHJvcHNbcHJvcEtleV0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wS2V5ID09PSBTVFlMRSkge1xuICAgICAgICB2YXIgbGFzdFN0eWxlID0gdGhpcy5fcHJldmlvdXNTdHlsZUNvcHk7XG4gICAgICAgIGZvciAoc3R5bGVOYW1lIGluIGxhc3RTdHlsZSkge1xuICAgICAgICAgIGlmIChsYXN0U3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgICAgICAgc3R5bGVVcGRhdGVzID0gc3R5bGVVcGRhdGVzIHx8IHt9O1xuICAgICAgICAgICAgc3R5bGVVcGRhdGVzW3N0eWxlTmFtZV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZUNvcHkgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb25OYW1lTW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICBpZiAobGFzdFByb3BzW3Byb3BLZXldKSB7XG4gICAgICAgICAgLy8gT25seSBjYWxsIGRlbGV0ZUxpc3RlbmVyIGlmIHRoZXJlIHdhcyBhIGxpc3RlbmVyIHByZXZpb3VzbHkgb3JcbiAgICAgICAgICAvLyBlbHNlIHdpbGxEZWxldGVMaXN0ZW5lciBnZXRzIGNhbGxlZCB3aGVuIHRoZXJlIHdhc24ndCBhY3R1YWxseSBhXG4gICAgICAgICAgLy8gbGlzdGVuZXIgKGUuZy4sIG9uQ2xpY2s9e251bGx9KVxuICAgICAgICAgIGRlbGV0ZUxpc3RlbmVyKHRoaXMsIHByb3BLZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKERPTVByb3BlcnR5LnByb3BlcnRpZXNbcHJvcEtleV0gfHwgRE9NUHJvcGVydHkuaXNDdXN0b21BdHRyaWJ1dGUocHJvcEtleSkpIHtcbiAgICAgICAgRE9NUHJvcGVydHlPcGVyYXRpb25zLmRlbGV0ZVZhbHVlRm9yUHJvcGVydHkoZ2V0Tm9kZSh0aGlzKSwgcHJvcEtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAocHJvcEtleSBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBuZXh0UHJvcCA9IG5leHRQcm9wc1twcm9wS2V5XTtcbiAgICAgIHZhciBsYXN0UHJvcCA9IHByb3BLZXkgPT09IFNUWUxFID8gdGhpcy5fcHJldmlvdXNTdHlsZUNvcHkgOiBsYXN0UHJvcHMgIT0gbnVsbCA/IGxhc3RQcm9wc1twcm9wS2V5XSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICghbmV4dFByb3BzLmhhc093blByb3BlcnR5KHByb3BLZXkpIHx8IG5leHRQcm9wID09PSBsYXN0UHJvcCB8fCBuZXh0UHJvcCA9PSBudWxsICYmIGxhc3RQcm9wID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJvcEtleSA9PT0gU1RZTEUpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNoZWNrQW5kV2FybkZvck11dGF0ZWRTdHlsZSh0aGlzLl9wcmV2aW91c1N0eWxlQ29weSwgdGhpcy5fcHJldmlvdXNTdHlsZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlID0gbmV4dFByb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5leHRQcm9wID0gdGhpcy5fcHJldmlvdXNTdHlsZUNvcHkgPSBfYXNzaWduKHt9LCBuZXh0UHJvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZUNvcHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0UHJvcCkge1xuICAgICAgICAgIC8vIFVuc2V0IHN0eWxlcyBvbiBgbGFzdFByb3BgIGJ1dCBub3Qgb24gYG5leHRQcm9wYC5cbiAgICAgICAgICBmb3IgKHN0eWxlTmFtZSBpbiBsYXN0UHJvcCkge1xuICAgICAgICAgICAgaWYgKGxhc3RQcm9wLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkgJiYgKCFuZXh0UHJvcCB8fCAhbmV4dFByb3AuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkpIHtcbiAgICAgICAgICAgICAgc3R5bGVVcGRhdGVzID0gc3R5bGVVcGRhdGVzIHx8IHt9O1xuICAgICAgICAgICAgICBzdHlsZVVwZGF0ZXNbc3R5bGVOYW1lXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBVcGRhdGUgc3R5bGVzIHRoYXQgY2hhbmdlZCBzaW5jZSBgbGFzdFByb3BgLlxuICAgICAgICAgIGZvciAoc3R5bGVOYW1lIGluIG5leHRQcm9wKSB7XG4gICAgICAgICAgICBpZiAobmV4dFByb3AuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSAmJiBsYXN0UHJvcFtzdHlsZU5hbWVdICE9PSBuZXh0UHJvcFtzdHlsZU5hbWVdKSB7XG4gICAgICAgICAgICAgIHN0eWxlVXBkYXRlcyA9IHN0eWxlVXBkYXRlcyB8fCB7fTtcbiAgICAgICAgICAgICAgc3R5bGVVcGRhdGVzW3N0eWxlTmFtZV0gPSBuZXh0UHJvcFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZWxpZXMgb24gYHVwZGF0ZVN0eWxlc0J5SURgIG5vdCBtdXRhdGluZyBgc3R5bGVVcGRhdGVzYC5cbiAgICAgICAgICBzdHlsZVVwZGF0ZXMgPSBuZXh0UHJvcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb25OYW1lTW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICBpZiAobmV4dFByb3ApIHtcbiAgICAgICAgICBlbnF1ZXVlUHV0TGlzdGVuZXIodGhpcywgcHJvcEtleSwgbmV4dFByb3AsIHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0UHJvcCkge1xuICAgICAgICAgIGRlbGV0ZUxpc3RlbmVyKHRoaXMsIHByb3BLZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzQ3VzdG9tQ29tcG9uZW50KHRoaXMuX3RhZywgbmV4dFByb3BzKSkge1xuICAgICAgICBpZiAoIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgRE9NUHJvcGVydHlPcGVyYXRpb25zLnNldFZhbHVlRm9yQXR0cmlidXRlKGdldE5vZGUodGhpcyksIHByb3BLZXksIG5leHRQcm9wKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChET01Qcm9wZXJ0eS5wcm9wZXJ0aWVzW3Byb3BLZXldIHx8IERPTVByb3BlcnR5LmlzQ3VzdG9tQXR0cmlidXRlKHByb3BLZXkpKSB7XG4gICAgICAgIHZhciBub2RlID0gZ2V0Tm9kZSh0aGlzKTtcbiAgICAgICAgLy8gSWYgd2UncmUgdXBkYXRpbmcgdG8gbnVsbCBvciB1bmRlZmluZWQsIHdlIHNob3VsZCByZW1vdmUgdGhlIHByb3BlcnR5XG4gICAgICAgIC8vIGZyb20gdGhlIERPTSBub2RlIGluc3RlYWQgb2YgaW5hZHZlcnRlbnRseSBzZXR0aW5nIHRvIGEgc3RyaW5nLiBUaGlzXG4gICAgICAgIC8vIGJyaW5ncyB1cyBpbiBsaW5lIHdpdGggdGhlIHNhbWUgYmVoYXZpb3Igd2UgaGF2ZSBvbiBpbml0aWFsIHJlbmRlci5cbiAgICAgICAgaWYgKG5leHRQcm9wICE9IG51bGwpIHtcbiAgICAgICAgICBET01Qcm9wZXJ0eU9wZXJhdGlvbnMuc2V0VmFsdWVGb3JQcm9wZXJ0eShub2RlLCBwcm9wS2V5LCBuZXh0UHJvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRE9NUHJvcGVydHlPcGVyYXRpb25zLmRlbGV0ZVZhbHVlRm9yUHJvcGVydHkobm9kZSwgcHJvcEtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0eWxlVXBkYXRlcykge1xuICAgICAgQ1NTUHJvcGVydHlPcGVyYXRpb25zLnNldFZhbHVlRm9yU3R5bGVzKGdldE5vZGUodGhpcyksIHN0eWxlVXBkYXRlcywgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZWNvbmNpbGVzIHRoZSBjaGlsZHJlbiB3aXRoIHRoZSB2YXJpb3VzIHByb3BlcnRpZXMgdGhhdCBhZmZlY3QgdGhlXG4gICAqIGNoaWxkcmVuIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBsYXN0UHJvcHNcbiAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqL1xuICBfdXBkYXRlRE9NQ2hpbGRyZW46IGZ1bmN0aW9uIChsYXN0UHJvcHMsIG5leHRQcm9wcywgdHJhbnNhY3Rpb24sIGNvbnRleHQpIHtcbiAgICB2YXIgbGFzdENvbnRlbnQgPSBDT05URU5UX1RZUEVTW3R5cGVvZiBsYXN0UHJvcHMuY2hpbGRyZW5dID8gbGFzdFByb3BzLmNoaWxkcmVuIDogbnVsbDtcbiAgICB2YXIgbmV4dENvbnRlbnQgPSBDT05URU5UX1RZUEVTW3R5cGVvZiBuZXh0UHJvcHMuY2hpbGRyZW5dID8gbmV4dFByb3BzLmNoaWxkcmVuIDogbnVsbDtcblxuICAgIHZhciBsYXN0SHRtbCA9IGxhc3RQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJiBsYXN0UHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sO1xuICAgIHZhciBuZXh0SHRtbCA9IG5leHRQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJiBuZXh0UHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sO1xuXG4gICAgLy8gTm90ZSB0aGUgdXNlIG9mIGAhPWAgd2hpY2ggY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICB2YXIgbGFzdENoaWxkcmVuID0gbGFzdENvbnRlbnQgIT0gbnVsbCA/IG51bGwgOiBsYXN0UHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIG5leHRDaGlsZHJlbiA9IG5leHRDb250ZW50ICE9IG51bGwgPyBudWxsIDogbmV4dFByb3BzLmNoaWxkcmVuO1xuXG4gICAgLy8gSWYgd2UncmUgc3dpdGNoaW5nIGZyb20gY2hpbGRyZW4gdG8gY29udGVudC9odG1sIG9yIHZpY2UgdmVyc2EsIHJlbW92ZVxuICAgIC8vIHRoZSBvbGQgY29udGVudFxuICAgIHZhciBsYXN0SGFzQ29udGVudE9ySHRtbCA9IGxhc3RDb250ZW50ICE9IG51bGwgfHwgbGFzdEh0bWwgIT0gbnVsbDtcbiAgICB2YXIgbmV4dEhhc0NvbnRlbnRPckh0bWwgPSBuZXh0Q29udGVudCAhPSBudWxsIHx8IG5leHRIdG1sICE9IG51bGw7XG4gICAgaWYgKGxhc3RDaGlsZHJlbiAhPSBudWxsICYmIG5leHRDaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKG51bGwsIHRyYW5zYWN0aW9uLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKGxhc3RIYXNDb250ZW50T3JIdG1sICYmICFuZXh0SGFzQ29udGVudE9ySHRtbCkge1xuICAgICAgdGhpcy51cGRhdGVUZXh0Q29udGVudCgnJyk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25TZXRDaGlsZHJlbih0aGlzLl9kZWJ1Z0lELCBbXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5leHRDb250ZW50ICE9IG51bGwpIHtcbiAgICAgIGlmIChsYXN0Q29udGVudCAhPT0gbmV4dENvbnRlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0Q29udGVudCgnJyArIG5leHRDb250ZW50KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9jb250ZW50RGVidWdJRCA9IHRoaXMuX2RlYnVnSUQgKyAnI3RleHQnO1xuICAgICAgICAgIHNldENvbnRlbnRDaGlsZEZvckluc3RydW1lbnRhdGlvbi5jYWxsKHRoaXMsIG5leHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV4dEh0bWwgIT0gbnVsbCkge1xuICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU1hcmt1cCgnJyArIG5leHRIdG1sKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vblNldENoaWxkcmVuKHRoaXMuX2RlYnVnSUQsIFtdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5leHRDaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5fY29udGVudERlYnVnSUQpIHtcbiAgICAgICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25Vbm1vdW50Q29tcG9uZW50KHRoaXMuX2NvbnRlbnREZWJ1Z0lEKTtcbiAgICAgICAgICB0aGlzLl9jb250ZW50RGVidWdJRCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbihuZXh0Q2hpbGRyZW4sIHRyYW5zYWN0aW9uLCBjb250ZXh0KTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TmF0aXZlTm9kZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXROb2RlKHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbGwgZXZlbnQgcmVnaXN0cmF0aW9ucyBmb3IgdGhpcyBpbnN0YW5jZS4gRG9lcyBub3QgcmVtb3ZlIGZyb21cbiAgICogdGhlIERPTS4gVGhhdCBtdXN0IGJlIGRvbmUgYnkgdGhlIHBhcmVudC5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bm1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoc2FmZWx5KSB7XG4gICAgc3dpdGNoICh0aGlzLl90YWcpIHtcbiAgICAgIGNhc2UgJ2lmcmFtZSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fd3JhcHBlclN0YXRlLmxpc3RlbmVycztcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICBjYXNlICdoZWFkJzpcbiAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcG9uZW50cyBsaWtlIDxodG1sPiA8aGVhZD4gYW5kIDxib2R5PiBjYW4ndCBiZSByZW1vdmVkIG9yIGFkZGVkXG4gICAgICAgICAqIGVhc2lseSBpbiBhIGNyb3NzLWJyb3dzZXIgd2F5LCBob3dldmVyIGl0J3MgdmFsdWFibGUgdG8gYmUgYWJsZSB0b1xuICAgICAgICAgKiB0YWtlIGFkdmFudGFnZSBvZiBSZWFjdCdzIHJlY29uY2lsaWF0aW9uIGZvciBzdHlsaW5nIGFuZCA8dGl0bGU+XG4gICAgICAgICAqIG1hbmFnZW1lbnQuIFNvIHdlIGp1c3QgZG9jdW1lbnQgaXQgYW5kIHRocm93IGluIGRhbmdlcm91cyBjYXNlcy5cbiAgICAgICAgICovXG4gICAgICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICc8JXM+IHRyaWVkIHRvIHVubW91bnQuIEJlY2F1c2Ugb2YgY3Jvc3MtYnJvd3NlciBxdWlya3MgaXQgaXMgJyArICdpbXBvc3NpYmxlIHRvIHVubW91bnQgc29tZSB0b3AtbGV2ZWwgY29tcG9uZW50cyAoZWcgPGh0bWw+LCAnICsgJzxoZWFkPiwgYW5kIDxib2R5PikgcmVsaWFibHkgYW5kIGVmZmljaWVudGx5LiBUbyBmaXggdGhpcywgaGF2ZSBhICcgKyAnc2luZ2xlIHRvcC1sZXZlbCBjb21wb25lbnQgdGhhdCBuZXZlciB1bm1vdW50cyByZW5kZXIgdGhlc2UgJyArICdlbGVtZW50cy4nLCB0aGlzLl90YWcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy51bm1vdW50Q2hpbGRyZW4oc2FmZWx5KTtcbiAgICBSZWFjdERPTUNvbXBvbmVudFRyZWUudW5jYWNoZU5vZGUodGhpcyk7XG4gICAgRXZlbnRQbHVnaW5IdWIuZGVsZXRlQWxsTGlzdGVuZXJzKHRoaXMpO1xuICAgIFJlYWN0Q29tcG9uZW50QnJvd3NlckVudmlyb25tZW50LnVubW91bnRJREZyb21FbnZpcm9ubWVudCh0aGlzLl9yb290Tm9kZUlEKTtcbiAgICB0aGlzLl9yb290Tm9kZUlEID0gbnVsbDtcbiAgICB0aGlzLl9kb21JRCA9IG51bGw7XG4gICAgdGhpcy5fd3JhcHBlclN0YXRlID0gbnVsbDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5fY29udGVudERlYnVnSUQpIHtcbiAgICAgICAgUmVhY3RJbnN0cnVtZW50YXRpb24uZGVidWdUb29sLm9uVW5tb3VudENvbXBvbmVudCh0aGlzLl9jb250ZW50RGVidWdJRCk7XG4gICAgICAgIHRoaXMuX2NvbnRlbnREZWJ1Z0lEID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0UHVibGljSW5zdGFuY2U6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0Tm9kZSh0aGlzKTtcbiAgfVxuXG59O1xuXG5fYXNzaWduKFJlYWN0RE9NQ29tcG9uZW50LnByb3RvdHlwZSwgUmVhY3RET01Db21wb25lbnQuTWl4aW4sIFJlYWN0TXVsdGlDaGlsZC5NaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET01Db21wb25lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RE9NQ29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgQXV0b0ZvY3VzVXRpbHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdERPTUNvbXBvbmVudFRyZWUgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50VHJlZScpO1xuXG52YXIgZm9jdXNOb2RlID0gcmVxdWlyZSgnZmJqcy9saWIvZm9jdXNOb2RlJyk7XG5cbnZhciBBdXRvRm9jdXNVdGlscyA9IHtcbiAgZm9jdXNET01Db21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBmb2N1c05vZGUoUmVhY3RET01Db21wb25lbnRUcmVlLmdldE5vZGVGcm9tSW5zdGFuY2UodGhpcykpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9Gb2N1c1V0aWxzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9BdXRvRm9jdXNVdGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlIGlucHV0L3RleHRhcmVhIHRvIGZvY3VzXG4gKi9cblxuZnVuY3Rpb24gZm9jdXNOb2RlKG5vZGUpIHtcbiAgLy8gSUU4IGNhbiB0aHJvdyBcIkNhbid0IG1vdmUgZm9jdXMgdG8gdGhlIGNvbnRyb2wgYmVjYXVzZSBpdCBpcyBpbnZpc2libGUsXG4gIC8vIG5vdCBlbmFibGVkLCBvciBvZiBhIHR5cGUgdGhhdCBkb2VzIG5vdCBhY2NlcHQgdGhlIGZvY3VzLlwiIGZvciBhbGwga2luZHMgb2ZcbiAgLy8gcmVhc29ucyB0aGF0IGFyZSB0b28gZXhwZW5zaXZlIGFuZCBmcmFnaWxlIHRvIHRlc3QuXG4gIHRyeSB7XG4gICAgbm9kZS5mb2N1cygpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzTm9kZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9mb2N1c05vZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBDU1NQcm9wZXJ0eU9wZXJhdGlvbnNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG52YXIgUmVhY3RJbnN0cnVtZW50YXRpb24gPSByZXF1aXJlKCcuL1JlYWN0SW5zdHJ1bWVudGF0aW9uJyk7XG5cbnZhciBjYW1lbGl6ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lJyk7XG52YXIgZGFuZ2Vyb3VzU3R5bGVWYWx1ZSA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzU3R5bGVWYWx1ZScpO1xudmFyIGh5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZScpO1xudmFyIG1lbW9pemVTdHJpbmdPbmx5ID0gcmVxdWlyZSgnZmJqcy9saWIvbWVtb2l6ZVN0cmluZ09ubHknKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IG1lbW9pemVTdHJpbmdPbmx5KGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHlsZU5hbWUpO1xufSk7XG5cbnZhciBoYXNTaG9ydGhhbmRQcm9wZXJ0eUJ1ZyA9IGZhbHNlO1xudmFyIHN0eWxlRmxvYXRBY2Nlc3NvciA9ICdjc3NGbG9hdCc7XG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gIHZhciB0ZW1wU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcbiAgdHJ5IHtcbiAgICAvLyBJRTggdGhyb3dzIFwiSW52YWxpZCBhcmd1bWVudC5cIiBpZiByZXNldHRpbmcgc2hvcnRoYW5kIHN0eWxlIHByb3BlcnRpZXMuXG4gICAgdGVtcFN0eWxlLmZvbnQgPSAnJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc1Nob3J0aGFuZFByb3BlcnR5QnVnID0gdHJ1ZTtcbiAgfVxuICAvLyBJRTggb25seSBzdXBwb3J0cyBhY2Nlc3NpbmcgY3NzRmxvYXQgKHN0YW5kYXJkKSBhcyBzdHlsZUZsb2F0XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0eWxlRmxvYXRBY2Nlc3NvciA9ICdzdHlsZUZsb2F0JztcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyAnbXNUcmFuc2Zvcm0nIGlzIGNvcnJlY3QsIGJ1dCB0aGUgb3RoZXIgcHJlZml4ZXMgc2hvdWxkIGJlIGNhcGl0YWxpemVkXG4gIHZhciBiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4gPSAvXig/OndlYmtpdHxtb3p8bylbQS1aXS87XG5cbiAgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXG4gIHZhciBiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4gPSAvO1xccyokLztcblxuICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xuICB2YXIgd2FybmVkU3R5bGVWYWx1ZXMgPSB7fTtcbiAgdmFyIHdhcm5lZEZvck5hTlZhbHVlID0gZmFsc2U7XG5cbiAgdmFyIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lID0gZnVuY3Rpb24gKG5hbWUsIG93bmVyKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnVW5zdXBwb3J0ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8lcycsIG5hbWUsIGNhbWVsaXplU3R5bGVOYW1lKG5hbWUpLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgfTtcblxuICB2YXIgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lID0gZnVuY3Rpb24gKG5hbWUsIG93bmVyKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnVW5zdXBwb3J0ZWQgdmVuZG9yLXByZWZpeGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JXMnLCBuYW1lLCBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3duZXIpIHtcbiAgICBpZiAod2FybmVkU3R5bGVWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpICYmIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSA9IHRydWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdTdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgc2hvdWxkblxcJ3QgY29udGFpbiBhIHNlbWljb2xvbi4lcyAnICsgJ1RyeSBcIiVzOiAlc1wiIGluc3RlYWQuJywgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSwgbmFtZSwgdmFsdWUucmVwbGFjZShiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4sICcnKSkgOiB2b2lkIDA7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlSXNOYU4gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYE5hTmAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LiVzJywgbmFtZSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gIH07XG5cbiAgdmFyIGNoZWNrUmVuZGVyTWVzc2FnZSA9IGZ1bmN0aW9uIChvd25lcikge1xuICAgIGlmIChvd25lcikge1xuICAgICAgdmFyIG5hbWUgPSBvd25lci5nZXROYW1lKCk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAqL1xuICB2YXIgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAgIHZhciBvd25lcjtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lLCBvd25lcik7XG4gICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBPcGVyYXRpb25zIGZvciBkZWFsaW5nIHdpdGggQ1NTIHByb3BlcnRpZXMuXG4gKi9cbnZhciBDU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSB7XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtYXBwaW5nIG9mIHN0eWxlIHByb3BlcnRpZXMgZm9yIHVzZSBhcyBpbmxpbmUgc3R5bGVzOlxuICAgKlxuICAgKiAgID4gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHt3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAwfSlcbiAgICogICBcIndpZHRoOjIwMHB4O2hlaWdodDowO1wiXG4gICAqXG4gICAqIFVuZGVmaW5lZCB2YWx1ZXMgYXJlIGlnbm9yZWQgc28gdGhhdCBkZWNsYXJhdGl2ZSBwcm9ncmFtbWluZyBpcyBlYXNpZXIuXG4gICAqIFRoZSByZXN1bHQgc2hvdWxkIGJlIEhUTUwtZXNjYXBlZCBiZWZvcmUgaW5zZXJ0aW9uIGludG8gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlc1xuICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICogQHJldHVybiB7P3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZU1hcmt1cEZvclN0eWxlczogZnVuY3Rpb24gKHN0eWxlcywgY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcmlhbGl6ZWQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoIXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlVmFsdWUgPSBzdHlsZXNbc3R5bGVOYW1lXTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm5WYWxpZFN0eWxlKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHlsZVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBwcm9jZXNzU3R5bGVOYW1lKHN0eWxlTmFtZSkgKyAnOic7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCkgKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIGZvciBtdWx0aXBsZSBzdHlsZXMgb24gYSBub2RlLiAgSWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQgYXNcbiAgICogJycgKGVtcHR5IHN0cmluZyksIHRoZSBjb3JyZXNwb25kaW5nIHN0eWxlIHByb3BlcnR5IHdpbGwgYmUgdW5zZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gc3R5bGVzXG4gICAqIEBwYXJhbSB7UmVhY3RET01Db21wb25lbnR9IGNvbXBvbmVudFxuICAgKi9cbiAgc2V0VmFsdWVGb3JTdHlsZXM6IGZ1bmN0aW9uIChub2RlLCBzdHlsZXMsIGNvbXBvbmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25OYXRpdmVPcGVyYXRpb24oY29tcG9uZW50Ll9kZWJ1Z0lELCAndXBkYXRlIHN0eWxlcycsIHN0eWxlcyk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoIXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FyblZhbGlkU3R5bGUoc3R5bGVOYW1lLCBzdHlsZXNbc3R5bGVOYW1lXSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZVZhbHVlID0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlc1tzdHlsZU5hbWVdLCBjb21wb25lbnQpO1xuICAgICAgaWYgKHN0eWxlTmFtZSA9PT0gJ2Zsb2F0JyB8fCBzdHlsZU5hbWUgPT09ICdjc3NGbG9hdCcpIHtcbiAgICAgICAgc3R5bGVOYW1lID0gc3R5bGVGbG9hdEFjY2Vzc29yO1xuICAgICAgfVxuICAgICAgaWYgKHN0eWxlVmFsdWUpIHtcbiAgICAgICAgc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXhwYW5zaW9uID0gaGFzU2hvcnRoYW5kUHJvcGVydHlCdWcgJiYgQ1NTUHJvcGVydHkuc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zW3N0eWxlTmFtZV07XG4gICAgICAgIGlmIChleHBhbnNpb24pIHtcbiAgICAgICAgICAvLyBTaG9ydGhhbmQgcHJvcGVydHkgdGhhdCBJRTggd29uJ3QgbGlrZSB1bnNldHRpbmcsIHNvIHVuc2V0IGVhY2hcbiAgICAgICAgICAvLyBjb21wb25lbnQgdG8gcGxhY2F0ZSBpdFxuICAgICAgICAgIGZvciAodmFyIGluZGl2aWR1YWxTdHlsZU5hbWUgaW4gZXhwYW5zaW9uKSB7XG4gICAgICAgICAgICBzdHlsZVtpbmRpdmlkdWFsU3R5bGVOYW1lXSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtzdHlsZU5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDU1NQcm9wZXJ0eU9wZXJhdGlvbnM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xuXG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIE1vc3Qgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgdW5zZXQgYnkgZG9pbmcgLnN0eWxlW3Byb3BdID0gJycgYnV0IElFOFxuICogZG9lc24ndCBsaWtlIGRvaW5nIHRoYXQgd2l0aCBzaG9ydGhhbmQgcHJvcGVydGllcyBzbyBmb3IgdGhlIHByb3BlcnRpZXMgdGhhdFxuICogSUU4IGJyZWFrcyBvbiwgd2hpY2ggYXJlIGxpc3RlZCBoZXJlLCB3ZSBpbnN0ZWFkIHVuc2V0IGVhY2ggb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHByb3BlcnRpZXMuIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM4NS5cbiAqIFRoZSA0LXZhbHVlICdjbG9jaycgcHJvcGVydGllcyBsaWtlIG1hcmdpbiwgcGFkZGluZywgYm9yZGVyLXdpZHRoIHNlZW0gdG9cbiAqIGJlaGF2ZSB3aXRob3V0IGFueSBwcm9ibGVtcy4gQ3VyaW91c2x5LCBsaXN0LXN0eWxlIHdvcmtzIHRvbyB3aXRob3V0IGFueVxuICogc3BlY2lhbCBwcm9kZGluZy5cbiAqL1xudmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbiAgfSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIGJvcmRlcldpZHRoOiB0cnVlLFxuICAgIGJvcmRlclN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIGJvcmRlckJvdHRvbVdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbVN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBib3JkZXJMZWZ0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyTGVmdFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckxlZnRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIGJvcmRlclJpZ2h0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJSaWdodENvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIGJvcmRlclRvcFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclRvcFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlclRvcENvbG9yOiB0cnVlXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250U3R5bGU6IHRydWUsXG4gICAgZm9udFZhcmlhbnQ6IHRydWUsXG4gICAgZm9udFdlaWdodDogdHJ1ZSxcbiAgICBmb250U2l6ZTogdHJ1ZSxcbiAgICBsaW5lSGVpZ2h0OiB0cnVlLFxuICAgIGZvbnRGYW1pbHk6IHRydWVcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIG91dGxpbmVXaWR0aDogdHJ1ZSxcbiAgICBvdXRsaW5lU3R5bGU6IHRydWUsXG4gICAgb3V0bGluZUNvbG9yOiB0cnVlXG4gIH1cbn07XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHtcbiAgaXNVbml0bGVzc051bWJlcjogaXNVbml0bGVzc051bWJlcixcbiAgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zOiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NTUHJvcGVydHk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL0NTU1Byb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbW96LXRyYW5zaXRpb24nKVxuICogICA8IFwiTW96VHJhbnNpdGlvblwiXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJy1tcy10cmFuc2l0aW9uJylcbiAqICAgPCBcIm1zVHJhbnNpdGlvblwiXG4gKlxuICogQXMgQW5kaSBTbWl0aCBzdWdnZXN0c1xuICogKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGxvd2VyY2FzZSBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBjYW1lbGl6ZShzdHJpbmcucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemVTdHlsZU5hbWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgX2h5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGNhbWVsaXplKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmRDb2xvclwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9oeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbGl6ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGRhbmdlcm91c1N0eWxlVmFsdWVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IENTU1Byb3BlcnR5LmlzVW5pdGxlc3NOdW1iZXI7XG52YXIgc3R5bGVXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGlzTm9uTnVtZXJpYyA9IGlzTmFOKHZhbHVlKTtcbiAgaWYgKGlzTm9uTnVtZXJpYyB8fCB2YWx1ZSA9PT0gMCB8fCBpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTsgLy8gY2FzdCB0byBzdHJpbmdcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIG93bmVyID0gY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gICAgICAgIHZhciBvd25lck5hbWUgPSBvd25lciA/IG93bmVyLmdldE5hbWUoKSA6IG51bGw7XG4gICAgICAgIGlmIChvd25lck5hbWUgJiYgIXN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXSkge1xuICAgICAgICAgIHN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG93bmVyTmFtZSkge1xuICAgICAgICAgIHZhciB3YXJuaW5ncyA9IHN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXTtcbiAgICAgICAgICB3YXJuZWQgPSB3YXJuaW5nc1tuYW1lXTtcbiAgICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgICAgd2FybmluZ3NbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYSBgJXNgIHRhZyAob3duZXI6IGAlc2ApIHdhcyBwYXNzZWQgYSBudW1lcmljIHN0cmluZyB2YWx1ZSAnICsgJ2ZvciBDU1MgcHJvcGVydHkgYCVzYCAodmFsdWU6IGAlc2ApIHdoaWNoIHdpbGwgYmUgdHJlYXRlZCAnICsgJ2FzIGEgdW5pdGxlc3MgbnVtYmVyIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3QuJywgY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC50eXBlLCBvd25lck5hbWUgfHwgJ3Vua25vd24nLCBuYW1lLCB2YWx1ZSkgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlICsgJ3B4Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkYW5nZXJvdXNTdHlsZVZhbHVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMjAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoeXBoZW5hdGUgPSByZXF1aXJlKCcuL2h5cGhlbmF0ZScpO1xuXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF91cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqXG4gKiBGb3IgQ1NTIHN0eWxlIG5hbWVzLCB1c2UgYGh5cGhlbmF0ZVN0eWxlTmFtZWAgaW5zdGVhZCB3aGljaCB3b3JrcyBwcm9wZXJseVxuICogd2l0aCBhbGwgdmVuZG9yIHByZWZpeGVzLCBpbmNsdWRpbmcgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF91cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIvaHlwaGVuYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKiBAdHlwZWNoZWNrcyBzdGF0aWMtb25seVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZW1vaXplcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBzdHJpbmcgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gbWVtb2l6ZVN0cmluZ09ubHkoY2FsbGJhY2spIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKCFjYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHJpbmcpKSB7XG4gICAgICBjYWNoZVtzdHJpbmddID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVbc3RyaW5nXTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplU3RyaW5nT25seTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERPTVByb3BlcnR5T3BlcmF0aW9uc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERPTVByb3BlcnR5ID0gcmVxdWlyZSgnLi9ET01Qcm9wZXJ0eScpO1xudmFyIFJlYWN0RE9NQ29tcG9uZW50VHJlZSA9IHJlcXVpcmUoJy4vUmVhY3RET01Db21wb25lbnRUcmVlJyk7XG52YXIgUmVhY3RET01JbnN0cnVtZW50YXRpb24gPSByZXF1aXJlKCcuL1JlYWN0RE9NSW5zdHJ1bWVudGF0aW9uJyk7XG52YXIgUmVhY3RJbnN0cnVtZW50YXRpb24gPSByZXF1aXJlKCcuL1JlYWN0SW5zdHJ1bWVudGF0aW9uJyk7XG5cbnZhciBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3NlciA9IHJlcXVpcmUoJy4vcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXInKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVggPSBuZXcgUmVnRXhwKCdeWycgKyBET01Qcm9wZXJ0eS5BVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgJ11bJyArIERPTVByb3BlcnR5LkFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xudmFyIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWVTYWZlKGF0dHJpYnV0ZU5hbWUpIHtcbiAgaWYgKHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZS5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChWQUxJRF9BVFRSSUJVVEVfTkFNRV9SRUdFWC50ZXN0KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgdmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lOiBgJXNgJywgYXR0cmlidXRlTmFtZSkgOiB2b2lkIDA7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkSWdub3JlVmFsdWUocHJvcGVydHlJbmZvLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCBwcm9wZXJ0eUluZm8uaGFzQm9vbGVhblZhbHVlICYmICF2YWx1ZSB8fCBwcm9wZXJ0eUluZm8uaGFzTnVtZXJpY1ZhbHVlICYmIGlzTmFOKHZhbHVlKSB8fCBwcm9wZXJ0eUluZm8uaGFzUG9zaXRpdmVOdW1lcmljVmFsdWUgJiYgdmFsdWUgPCAxIHx8IHByb3BlcnR5SW5mby5oYXNPdmVybG9hZGVkQm9vbGVhblZhbHVlICYmIHZhbHVlID09PSBmYWxzZTtcbn1cblxuLyoqXG4gKiBPcGVyYXRpb25zIGZvciBkZWFsaW5nIHdpdGggRE9NIHByb3BlcnRpZXMuXG4gKi9cbnZhciBET01Qcm9wZXJ0eU9wZXJhdGlvbnMgPSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbWFya3VwIGZvciB0aGUgSUQgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBVbmVzY2FwZWQgSUQuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTWFya3VwIHN0cmluZy5cbiAgICovXG4gIGNyZWF0ZU1hcmt1cEZvcklEOiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gRE9NUHJvcGVydHkuSURfQVRUUklCVVRFX05BTUUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3NlcihpZCk7XG4gIH0sXG5cbiAgc2V0QXR0cmlidXRlRm9ySUQ6IGZ1bmN0aW9uIChub2RlLCBpZCkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERPTVByb3BlcnR5LklEX0FUVFJJQlVURV9OQU1FLCBpZCk7XG4gIH0sXG5cbiAgY3JlYXRlTWFya3VwRm9yUm9vdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBET01Qcm9wZXJ0eS5ST09UX0FUVFJJQlVURV9OQU1FICsgJz1cIlwiJztcbiAgfSxcblxuICBzZXRBdHRyaWJ1dGVGb3JSb290OiBmdW5jdGlvbiAobm9kZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERPTVByb3BlcnR5LlJPT1RfQVRUUklCVVRFX05BTUUsICcnKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBtYXJrdXAgZm9yIGEgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybiB7P3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgbnVsbCBpZiB0aGUgcHJvcGVydHkgd2FzIGludmFsaWQuXG4gICAqL1xuICBjcmVhdGVNYXJrdXBGb3JQcm9wZXJ0eTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFJlYWN0RE9NSW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vbkNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgdmFyIHByb3BlcnR5SW5mbyA9IERPTVByb3BlcnR5LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBET01Qcm9wZXJ0eS5wcm9wZXJ0aWVzW25hbWVdIDogbnVsbDtcbiAgICBpZiAocHJvcGVydHlJbmZvKSB7XG4gICAgICBpZiAoc2hvdWxkSWdub3JlVmFsdWUocHJvcGVydHlJbmZvLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eUluZm8uYXR0cmlidXRlTmFtZTtcbiAgICAgIGlmIChwcm9wZXJ0eUluZm8uaGFzQm9vbGVhblZhbHVlIHx8IHByb3BlcnR5SW5mby5oYXNPdmVybG9hZGVkQm9vbGVhblZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz1cIlwiJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoRE9NUHJvcGVydHkuaXNDdXN0b21BdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBtYXJrdXAgZm9yIGEgY3VzdG9tIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgZW1wdHkgc3RyaW5nIGlmIHRoZSBwcm9wZXJ0eSB3YXMgaW52YWxpZC5cbiAgICovXG4gIGNyZWF0ZU1hcmt1cEZvckN1c3RvbUF0dHJpYnV0ZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKCFpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIGZvciBhIHByb3BlcnR5IG9uIGEgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICovXG4gIHNldFZhbHVlRm9yUHJvcGVydHk6IGZ1bmN0aW9uIChub2RlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwcm9wZXJ0eUluZm8gPSBET01Qcm9wZXJ0eS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gRE9NUHJvcGVydHkucHJvcGVydGllc1tuYW1lXSA6IG51bGw7XG4gICAgaWYgKHByb3BlcnR5SW5mbykge1xuICAgICAgdmFyIG11dGF0aW9uTWV0aG9kID0gcHJvcGVydHlJbmZvLm11dGF0aW9uTWV0aG9kO1xuICAgICAgaWYgKG11dGF0aW9uTWV0aG9kKSB7XG4gICAgICAgIG11dGF0aW9uTWV0aG9kKG5vZGUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSWdub3JlVmFsdWUocHJvcGVydHlJbmZvLCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5kZWxldGVWYWx1ZUZvclByb3BlcnR5KG5vZGUsIG5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5SW5mby5tdXN0VXNlUHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlJbmZvLnByb3BlcnR5TmFtZTtcbiAgICAgICAgLy8gTXVzdCBleHBsaWNpdGx5IGNhc3QgdmFsdWVzIGZvciBIQVNfU0lERV9FRkZFQ1RTLXByb3BlcnRpZXMgdG8gdGhlXG4gICAgICAgIC8vIHByb3BlcnR5IHR5cGUgYmVmb3JlIGNvbXBhcmluZzsgb25seSBgdmFsdWVgIGRvZXMgYW5kIGlzIHN0cmluZy5cbiAgICAgICAgaWYgKCFwcm9wZXJ0eUluZm8uaGFzU2lkZUVmZmVjdHMgfHwgJycgKyBub2RlW3Byb3BOYW1lXSAhPT0gJycgKyB2YWx1ZSkge1xuICAgICAgICAgIC8vIENvbnRyYXJ5IHRvIGBzZXRBdHRyaWJ1dGVgLCBvYmplY3QgcHJvcGVydGllcyBhcmUgcHJvcGVybHlcbiAgICAgICAgICAvLyBgdG9TdHJpbmdgZWQgYnkgSUU4LzkuXG4gICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eUluZm8uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IHByb3BlcnR5SW5mby5hdHRyaWJ1dGVOYW1lc3BhY2U7XG4gICAgICAgIC8vIGBzZXRBdHRyaWJ1dGVgIHdpdGggb2JqZWN0cyBiZWNvbWVzIG9ubHkgYFtvYmplY3RdYCBpbiBJRTgvOSxcbiAgICAgICAgLy8gKCcnICsgdmFsdWUpIG1ha2VzIGl0IG91dHB1dCB0aGUgY29ycmVjdCB0b1N0cmluZygpLXZhbHVlLlxuICAgICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGF0dHJpYnV0ZU5hbWUsICcnICsgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5SW5mby5oYXNCb29sZWFuVmFsdWUgfHwgcHJvcGVydHlJbmZvLmhhc092ZXJsb2FkZWRCb29sZWFuVmFsdWUgJiYgdmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJycgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKERPTVByb3BlcnR5LmlzQ3VzdG9tQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICBET01Qcm9wZXJ0eU9wZXJhdGlvbnMuc2V0VmFsdWVGb3JBdHRyaWJ1dGUobm9kZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBSZWFjdERPTUluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25TZXRWYWx1ZUZvclByb3BlcnR5KG5vZGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgIHZhciBwYXlsb2FkID0ge307XG4gICAgICBwYXlsb2FkW25hbWVdID0gdmFsdWU7XG4gICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25OYXRpdmVPcGVyYXRpb24oUmVhY3RET01Db21wb25lbnRUcmVlLmdldEluc3RhbmNlRnJvbU5vZGUobm9kZSkuX2RlYnVnSUQsICd1cGRhdGUgYXR0cmlidXRlJywgcGF5bG9hZCk7XG4gICAgfVxuICB9LFxuXG4gIHNldFZhbHVlRm9yQXR0cmlidXRlOiBmdW5jdGlvbiAobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoIWlzQXR0cmlidXRlTmFtZVNhZmUobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyArIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHBheWxvYWQgPSB7fTtcbiAgICAgIHBheWxvYWRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vbk5hdGl2ZU9wZXJhdGlvbihSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0SW5zdGFuY2VGcm9tTm9kZShub2RlKS5fZGVidWdJRCwgJ3VwZGF0ZSBhdHRyaWJ1dGUnLCBwYXlsb2FkKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIHZhbHVlIGZvciBhIHByb3BlcnR5IG9uIGEgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBkZWxldGVWYWx1ZUZvclByb3BlcnR5OiBmdW5jdGlvbiAobm9kZSwgbmFtZSkge1xuICAgIHZhciBwcm9wZXJ0eUluZm8gPSBET01Qcm9wZXJ0eS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gRE9NUHJvcGVydHkucHJvcGVydGllc1tuYW1lXSA6IG51bGw7XG4gICAgaWYgKHByb3BlcnR5SW5mbykge1xuICAgICAgdmFyIG11dGF0aW9uTWV0aG9kID0gcHJvcGVydHlJbmZvLm11dGF0aW9uTWV0aG9kO1xuICAgICAgaWYgKG11dGF0aW9uTWV0aG9kKSB7XG4gICAgICAgIG11dGF0aW9uTWV0aG9kKG5vZGUsIHVuZGVmaW5lZCk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5SW5mby5tdXN0VXNlUHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlJbmZvLnByb3BlcnR5TmFtZTtcbiAgICAgICAgaWYgKHByb3BlcnR5SW5mby5oYXNCb29sZWFuVmFsdWUpIHtcbiAgICAgICAgICAvLyBObyBIQVNfU0lERV9FRkZFQ1RTIGxvZ2ljIGhlcmUsIG9ubHkgYHZhbHVlYCBoYXMgaXQgYW5kIGlzIHN0cmluZy5cbiAgICAgICAgICBub2RlW3Byb3BOYW1lXSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghcHJvcGVydHlJbmZvLmhhc1NpZGVFZmZlY3RzIHx8ICcnICsgbm9kZVtwcm9wTmFtZV0gIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlW3Byb3BOYW1lXSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHlJbmZvLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoRE9NUHJvcGVydHkuaXNDdXN0b21BdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBSZWFjdERPTUluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25EZWxldGVWYWx1ZUZvclByb3BlcnR5KG5vZGUsIG5hbWUpO1xuICAgICAgUmVhY3RJbnN0cnVtZW50YXRpb24uZGVidWdUb29sLm9uTmF0aXZlT3BlcmF0aW9uKFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXRJbnN0YW5jZUZyb21Ob2RlKG5vZGUpLl9kZWJ1Z0lELCAncmVtb3ZlIGF0dHJpYnV0ZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVByb3BlcnR5T3BlcmF0aW9ucztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvRE9NUHJvcGVydHlPcGVyYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RET01JbnN0cnVtZW50YXRpb25cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdERPTURlYnVnVG9vbCA9IHJlcXVpcmUoJy4vUmVhY3RET01EZWJ1Z1Rvb2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGRlYnVnVG9vbDogUmVhY3RET01EZWJ1Z1Rvb2wgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01JbnN0cnVtZW50YXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTURlYnVnVG9vbFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RE9NVW5rbm93blByb3BlcnR5RGV2dG9vbCA9IHJlcXVpcmUoJy4vUmVhY3RET01Vbmtub3duUHJvcGVydHlEZXZ0b29sJyk7XG5cbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgZXZlbnRIYW5kbGVycyA9IFtdO1xudmFyIGhhbmRsZXJEb2VzVGhyb3dGb3JFdmVudCA9IHt9O1xuXG5mdW5jdGlvbiBlbWl0RXZlbnQoaGFuZGxlckZ1bmN0aW9uTmFtZSwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXJbaGFuZGxlckZ1bmN0aW9uTmFtZV0pIHtcbiAgICAgICAgICBoYW5kbGVyW2hhbmRsZXJGdW5jdGlvbk5hbWVdKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKCFoYW5kbGVyRG9lc1Rocm93Rm9yRXZlbnRbaGFuZGxlckZ1bmN0aW9uTmFtZV0sICdleGNlcHRpb24gdGhyb3duIGJ5IGRldnRvb2wgd2hpbGUgaGFuZGxpbmcgJXM6ICVzJywgaGFuZGxlckZ1bmN0aW9uTmFtZSwgZS5tZXNzYWdlKSA6IHZvaWQgMDtcbiAgICAgICAgaGFuZGxlckRvZXNUaHJvd0ZvckV2ZW50W2hhbmRsZXJGdW5jdGlvbk5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG52YXIgUmVhY3RET01EZWJ1Z1Rvb2wgPSB7XG4gIGFkZERldnRvb2w6IGZ1bmN0aW9uIChkZXZ0b29sKSB7XG4gICAgZXZlbnRIYW5kbGVycy5wdXNoKGRldnRvb2wpO1xuICB9LFxuICByZW1vdmVEZXZ0b29sOiBmdW5jdGlvbiAoZGV2dG9vbCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV2ZW50SGFuZGxlcnNbaV0gPT09IGRldnRvb2wpIHtcbiAgICAgICAgZXZlbnRIYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG9uQ3JlYXRlTWFya3VwRm9yUHJvcGVydHk6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGVtaXRFdmVudCgnb25DcmVhdGVNYXJrdXBGb3JQcm9wZXJ0eScsIG5hbWUsIHZhbHVlKTtcbiAgfSxcbiAgb25TZXRWYWx1ZUZvclByb3BlcnR5OiBmdW5jdGlvbiAobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBlbWl0RXZlbnQoJ29uU2V0VmFsdWVGb3JQcm9wZXJ0eScsIG5vZGUsIG5hbWUsIHZhbHVlKTtcbiAgfSxcbiAgb25EZWxldGVWYWx1ZUZvclByb3BlcnR5OiBmdW5jdGlvbiAobm9kZSwgbmFtZSkge1xuICAgIGVtaXRFdmVudCgnb25EZWxldGVWYWx1ZUZvclByb3BlcnR5Jywgbm9kZSwgbmFtZSk7XG4gIH1cbn07XG5cblJlYWN0RE9NRGVidWdUb29sLmFkZERldnRvb2woUmVhY3RET01Vbmtub3duUHJvcGVydHlEZXZ0b29sKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTURlYnVnVG9vbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01EZWJ1Z1Rvb2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTVVua25vd25Qcm9wZXJ0eURldnRvb2xcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBET01Qcm9wZXJ0eSA9IHJlcXVpcmUoJy4vRE9NUHJvcGVydHknKTtcbnZhciBFdmVudFBsdWdpblJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9FdmVudFBsdWdpblJlZ2lzdHJ5Jyk7XG5cbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcmVhY3RQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogdHJ1ZSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogdHJ1ZSxcbiAgICBrZXk6IHRydWUsXG4gICAgcmVmOiB0cnVlXG4gIH07XG4gIHZhciB3YXJuZWRQcm9wZXJ0aWVzID0ge307XG5cbiAgdmFyIHdhcm5Vbmtub3duUHJvcGVydHkgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChET01Qcm9wZXJ0eS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpIHx8IERPTVByb3BlcnR5LmlzQ3VzdG9tQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZWFjdFByb3BzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHJlYWN0UHJvcHNbbmFtZV0gfHwgd2FybmVkUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgdmFyIGxvd2VyQ2FzZWROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gZGF0YS0qIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGxvd2VyY2FzZTsgc3VnZ2VzdCB0aGUgbG93ZXJjYXNlIHZlcnNpb25cbiAgICB2YXIgc3RhbmRhcmROYW1lID0gRE9NUHJvcGVydHkuaXNDdXN0b21BdHRyaWJ1dGUobG93ZXJDYXNlZE5hbWUpID8gbG93ZXJDYXNlZE5hbWUgOiBET01Qcm9wZXJ0eS5nZXRQb3NzaWJsZVN0YW5kYXJkTmFtZS5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkgPyBET01Qcm9wZXJ0eS5nZXRQb3NzaWJsZVN0YW5kYXJkTmFtZVtsb3dlckNhc2VkTmFtZV0gOiBudWxsO1xuXG4gICAgLy8gRm9yIG5vdywgb25seSB3YXJuIHdoZW4gd2UgaGF2ZSBhIHN1Z2dlc3RlZCBjb3JyZWN0aW9uLiBUaGlzIHByZXZlbnRzXG4gICAgLy8gbG9nZ2luZyB0b28gbXVjaCB3aGVuIHVzaW5nIHRyYW5zZmVyUHJvcHNUby5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhzdGFuZGFyZE5hbWUgPT0gbnVsbCwgJ1Vua25vd24gRE9NIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JywgbmFtZSwgc3RhbmRhcmROYW1lKSA6IHZvaWQgMDtcblxuICAgIHZhciByZWdpc3RyYXRpb25OYW1lID0gRXZlbnRQbHVnaW5SZWdpc3RyeS5wb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSA/IEV2ZW50UGx1Z2luUmVnaXN0cnkucG9zc2libGVSZWdpc3RyYXRpb25OYW1lc1tsb3dlckNhc2VkTmFtZV0gOiBudWxsO1xuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcocmVnaXN0cmF0aW9uTmFtZSA9PSBudWxsLCAnVW5rbm93biBldmVudCBoYW5kbGVyIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCByZWdpc3RyYXRpb25OYW1lKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxudmFyIFJlYWN0RE9NVW5rbm93blByb3BlcnR5RGV2dG9vbCA9IHtcbiAgb25DcmVhdGVNYXJrdXBGb3JQcm9wZXJ0eTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgd2FyblVua25vd25Qcm9wZXJ0eShuYW1lKTtcbiAgfSxcbiAgb25TZXRWYWx1ZUZvclByb3BlcnR5OiBmdW5jdGlvbiAobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICB3YXJuVW5rbm93blByb3BlcnR5KG5hbWUpO1xuICB9LFxuICBvbkRlbGV0ZVZhbHVlRm9yUHJvcGVydHk6IGZ1bmN0aW9uIChub2RlLCBuYW1lKSB7XG4gICAgd2FyblVua25vd25Qcm9wZXJ0eShuYW1lKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTVVua25vd25Qcm9wZXJ0eURldnRvb2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RE9NVW5rbm93blByb3BlcnR5RGV2dG9vbC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXNjYXBlVGV4dENvbnRlbnRGb3JCcm93c2VyID0gcmVxdWlyZSgnLi9lc2NhcGVUZXh0Q29udGVudEZvckJyb3dzZXInKTtcblxuLyoqXG4gKiBFc2NhcGVzIGF0dHJpYnV0ZSB2YWx1ZSB0byBwcmV2ZW50IHNjcmlwdGluZyBhdHRhY2tzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSBBbiBlc2NhcGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpIHtcbiAgcmV0dXJuICdcIicgKyBlc2NhcGVUZXh0Q29udGVudEZvckJyb3dzZXIodmFsdWUpICsgJ1wiJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3NlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTUJ1dHRvblxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERpc2FibGVkSW5wdXRVdGlscyA9IHJlcXVpcmUoJy4vRGlzYWJsZWRJbnB1dFV0aWxzJyk7XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIDxidXR0b24+IG5hdGl2ZSBjb21wb25lbnQgdGhhdCBkb2VzIG5vdCByZWNlaXZlIG1vdXNlIGV2ZW50c1xuICogd2hlbiBgZGlzYWJsZWRgIGlzIHNldC5cbiAqL1xudmFyIFJlYWN0RE9NQnV0dG9uID0ge1xuICBnZXROYXRpdmVQcm9wczogRGlzYWJsZWRJbnB1dFV0aWxzLmdldE5hdGl2ZVByb3BzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NQnV0dG9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdERPTUJ1dHRvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERpc2FibGVkSW5wdXRVdGlsc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGRpc2FibGVhYmxlTW91c2VMaXN0ZW5lck5hbWVzID0ge1xuICBvbkNsaWNrOiB0cnVlLFxuICBvbkRvdWJsZUNsaWNrOiB0cnVlLFxuICBvbk1vdXNlRG93bjogdHJ1ZSxcbiAgb25Nb3VzZU1vdmU6IHRydWUsXG4gIG9uTW91c2VVcDogdHJ1ZSxcblxuICBvbkNsaWNrQ2FwdHVyZTogdHJ1ZSxcbiAgb25Eb3VibGVDbGlja0NhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VEb3duQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZU1vdmVDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlVXBDYXB0dXJlOiB0cnVlXG59O1xuXG4vKipcbiAqIEltcGxlbWVudHMgYSBuYXRpdmUgY29tcG9uZW50IHRoYXQgZG9lcyBub3QgcmVjZWl2ZSBtb3VzZSBldmVudHNcbiAqIHdoZW4gYGRpc2FibGVkYCBpcyBzZXQuXG4gKi9cbnZhciBEaXNhYmxlZElucHV0VXRpbHMgPSB7XG4gIGdldE5hdGl2ZVByb3BzOiBmdW5jdGlvbiAoaW5zdCwgcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgLy8gQ29weSB0aGUgcHJvcHMsIGV4Y2VwdCB0aGUgbW91c2UgbGlzdGVuZXJzXG4gICAgdmFyIG5hdGl2ZVByb3BzID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIWRpc2FibGVhYmxlTW91c2VMaXN0ZW5lck5hbWVzW2tleV0gJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBuYXRpdmVQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmF0aXZlUHJvcHM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzYWJsZWRJbnB1dFV0aWxzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9EaXNhYmxlZElucHV0VXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTUlucHV0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIERpc2FibGVkSW5wdXRVdGlscyA9IHJlcXVpcmUoJy4vRGlzYWJsZWRJbnB1dFV0aWxzJyk7XG52YXIgRE9NUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9ET01Qcm9wZXJ0eU9wZXJhdGlvbnMnKTtcbnZhciBMaW5rZWRWYWx1ZVV0aWxzID0gcmVxdWlyZSgnLi9MaW5rZWRWYWx1ZVV0aWxzJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdFVwZGF0ZXMgPSByZXF1aXJlKCcuL1JlYWN0VXBkYXRlcycpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIGRpZFdhcm5WYWx1ZUxpbmsgPSBmYWxzZTtcbnZhciBkaWRXYXJuQ2hlY2tlZExpbmsgPSBmYWxzZTtcbnZhciBkaWRXYXJuVmFsdWVOdWxsID0gZmFsc2U7XG52YXIgZGlkV2FyblZhbHVlRGVmYXVsdFZhbHVlID0gZmFsc2U7XG52YXIgZGlkV2FybkNoZWNrZWREZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xudmFyIGRpZFdhcm5Db250cm9sbGVkVG9VbmNvbnRyb2xsZWQgPSBmYWxzZTtcbnZhciBkaWRXYXJuVW5jb250cm9sbGVkVG9Db250cm9sbGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZvcmNlVXBkYXRlSWZNb3VudGVkKCkge1xuICBpZiAodGhpcy5fcm9vdE5vZGVJRCkge1xuICAgIC8vIERPTSBjb21wb25lbnQgaXMgc3RpbGwgbW91bnRlZDsgdXBkYXRlXG4gICAgUmVhY3RET01JbnB1dC51cGRhdGVXcmFwcGVyKHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlZhbHVlSXNOdWxsKHByb3BzKSB7XG4gIGlmIChwcm9wcyAhPSBudWxsICYmIHByb3BzLnZhbHVlID09PSBudWxsICYmICFkaWRXYXJuVmFsdWVOdWxsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdgdmFsdWVgIHByb3Agb24gYGlucHV0YCBzaG91bGQgbm90IGJlIG51bGwuICcgKyAnQ29uc2lkZXIgdXNpbmcgdGhlIGVtcHR5IHN0cmluZyB0byBjbGVhciB0aGUgY29tcG9uZW50IG9yIGB1bmRlZmluZWRgICcgKyAnZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzLicpIDogdm9pZCAwO1xuXG4gICAgZGlkV2FyblZhbHVlTnVsbCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGFuIDxpbnB1dD4gbmF0aXZlIGNvbXBvbmVudCB0aGF0IGFsbG93cyBzZXR0aW5nIHRoZXNlIG9wdGlvbmFsXG4gKiBwcm9wczogYGNoZWNrZWRgLCBgdmFsdWVgLCBgZGVmYXVsdENoZWNrZWRgLCBhbmQgYGRlZmF1bHRWYWx1ZWAuXG4gKlxuICogSWYgYGNoZWNrZWRgIG9yIGB2YWx1ZWAgYXJlIG5vdCBzdXBwbGllZCAob3IgbnVsbC91bmRlZmluZWQpLCB1c2VyIGFjdGlvbnNcbiAqIHRoYXQgYWZmZWN0IHRoZSBjaGVja2VkIHN0YXRlIG9yIHZhbHVlIHdpbGwgdHJpZ2dlciB1cGRhdGVzIHRvIHRoZSBlbGVtZW50LlxuICpcbiAqIElmIHRoZXkgYXJlIHN1cHBsaWVkIChhbmQgbm90IG51bGwvdW5kZWZpbmVkKSwgdGhlIHJlbmRlcmVkIGVsZW1lbnQgd2lsbCBub3RcbiAqIHRyaWdnZXIgdXBkYXRlcyB0byB0aGUgZWxlbWVudC4gSW5zdGVhZCwgdGhlIHByb3BzIG11c3QgY2hhbmdlIGluIG9yZGVyIGZvclxuICogdGhlIHJlbmRlcmVkIGVsZW1lbnQgdG8gYmUgdXBkYXRlZC5cbiAqXG4gKiBUaGUgcmVuZGVyZWQgZWxlbWVudCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIHVuY2hlY2tlZCAob3IgYGRlZmF1bHRDaGVja2VkYClcbiAqIHdpdGggYW4gZW1wdHkgdmFsdWUgKG9yIGBkZWZhdWx0VmFsdWVgKS5cbiAqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTIvV0QtaHRtbDUtMjAxMjEwMjUvdGhlLWlucHV0LWVsZW1lbnQuaHRtbFxuICovXG52YXIgUmVhY3RET01JbnB1dCA9IHtcbiAgZ2V0TmF0aXZlUHJvcHM6IGZ1bmN0aW9uIChpbnN0LCBwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IExpbmtlZFZhbHVlVXRpbHMuZ2V0VmFsdWUocHJvcHMpO1xuICAgIHZhciBjaGVja2VkID0gTGlua2VkVmFsdWVVdGlscy5nZXRDaGVja2VkKHByb3BzKTtcblxuICAgIHZhciBuYXRpdmVQcm9wcyA9IF9hc3NpZ24oe1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIHNldCAudHlwZSBiZWZvcmUgYW55IG90aGVyIHByb3BlcnRpZXMgKHNldHRpbmcgLnZhbHVlXG4gICAgICAvLyBiZWZvcmUgLnR5cGUgbWVhbnMgLnZhbHVlIGlzIGxvc3QgaW4gSUUxMSBhbmQgYmVsb3cpXG4gICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICB9LCBEaXNhYmxlZElucHV0VXRpbHMuZ2V0TmF0aXZlUHJvcHMoaW5zdCwgcHJvcHMpLCB7XG4gICAgICBkZWZhdWx0Q2hlY2tlZDogdW5kZWZpbmVkLFxuICAgICAgZGVmYXVsdFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZTogdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogaW5zdC5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSxcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWQgIT0gbnVsbCA/IGNoZWNrZWQgOiBpbnN0Ll93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQsXG4gICAgICBvbkNoYW5nZTogaW5zdC5fd3JhcHBlclN0YXRlLm9uQ2hhbmdlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmF0aXZlUHJvcHM7XG4gIH0sXG5cbiAgbW91bnRXcmFwcGVyOiBmdW5jdGlvbiAoaW5zdCwgcHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgTGlua2VkVmFsdWVVdGlscy5jaGVja1Byb3BUeXBlcygnaW5wdXQnLCBwcm9wcywgaW5zdC5fY3VycmVudEVsZW1lbnQuX293bmVyKTtcblxuICAgICAgdmFyIG93bmVyID0gaW5zdC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuXG4gICAgICBpZiAocHJvcHMudmFsdWVMaW5rICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5WYWx1ZUxpbmspIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdgdmFsdWVMaW5rYCBwcm9wIG9uIGBpbnB1dGAgaXMgZGVwcmVjYXRlZDsgc2V0IGB2YWx1ZWAgYW5kIGBvbkNoYW5nZWAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgZGlkV2FyblZhbHVlTGluayA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuY2hlY2tlZExpbmsgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkNoZWNrZWRMaW5rKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYGNoZWNrZWRMaW5rYCBwcm9wIG9uIGBpbnB1dGAgaXMgZGVwcmVjYXRlZDsgc2V0IGB2YWx1ZWAgYW5kIGBvbkNoYW5nZWAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgZGlkV2FybkNoZWNrZWRMaW5rID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5jaGVja2VkICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdENoZWNrZWQgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkNoZWNrZWREZWZhdWx0Q2hlY2tlZCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzIGNvbnRhaW5zIGFuIGlucHV0IG9mIHR5cGUgJXMgd2l0aCBib3RoIGNoZWNrZWQgYW5kIGRlZmF1bHRDaGVja2VkIHByb3BzLiAnICsgJ0lucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSBjaGVja2VkIHByb3AsIG9yIHRoZSBkZWZhdWx0Q2hlY2tlZCBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgaW5wdXQgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnLCBvd25lciAmJiBvd25lci5nZXROYW1lKCkgfHwgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSkgOiB2b2lkIDA7XG4gICAgICAgIGRpZFdhcm5DaGVja2VkRGVmYXVsdENoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5WYWx1ZURlZmF1bHRWYWx1ZSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzIGNvbnRhaW5zIGFuIGlucHV0IG9mIHR5cGUgJXMgd2l0aCBib3RoIHZhbHVlIGFuZCBkZWZhdWx0VmFsdWUgcHJvcHMuICcgKyAnSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJywgb3duZXIgJiYgb3duZXIuZ2V0TmFtZSgpIHx8ICdBIGNvbXBvbmVudCcsIHByb3BzLnR5cGUpIDogdm9pZCAwO1xuICAgICAgICBkaWRXYXJuVmFsdWVEZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgd2FybklmVmFsdWVJc051bGwocHJvcHMpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgaW5zdC5fd3JhcHBlclN0YXRlID0ge1xuICAgICAgaW5pdGlhbENoZWNrZWQ6IHByb3BzLmRlZmF1bHRDaGVja2VkIHx8IGZhbHNlLFxuICAgICAgaW5pdGlhbFZhbHVlOiBkZWZhdWx0VmFsdWUgIT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IG51bGwsXG4gICAgICBsaXN0ZW5lcnM6IG51bGwsXG4gICAgICBvbkNoYW5nZTogX2hhbmRsZUNoYW5nZS5iaW5kKGluc3QpXG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbnN0Ll93cmFwcGVyU3RhdGUuY29udHJvbGxlZCA9IHByb3BzLmNoZWNrZWQgIT09IHVuZGVmaW5lZCB8fCBwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVXcmFwcGVyOiBmdW5jdGlvbiAoaW5zdCkge1xuICAgIHZhciBwcm9wcyA9IGluc3QuX2N1cnJlbnRFbGVtZW50LnByb3BzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5JZlZhbHVlSXNOdWxsKHByb3BzKTtcblxuICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IGluc3QuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZCB8fCBpbnN0Ll93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO1xuICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRDaGVja2VkIHx8IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgIHZhciBjb250cm9sbGVkID0gcHJvcHMuY2hlY2tlZCAhPT0gdW5kZWZpbmVkIHx8IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgb3duZXIgPSBpbnN0Ll9jdXJyZW50RWxlbWVudC5fb3duZXI7XG5cbiAgICAgIGlmICgoaW5pdGlhbFZhbHVlIHx8ICFpbnN0Ll93cmFwcGVyU3RhdGUuY29udHJvbGxlZCkgJiYgY29udHJvbGxlZCAmJiAhZGlkV2FyblVuY29udHJvbGxlZFRvQ29udHJvbGxlZCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzIGlzIGNoYW5naW5nIGFuIHVuY29udHJvbGxlZCBpbnB1dCBvZiB0eXBlICVzIHRvIGJlIGNvbnRyb2xsZWQuICcgKyAnSW5wdXQgZWxlbWVudHMgc2hvdWxkIG5vdCBzd2l0Y2ggZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuICcgKyAnRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBpbnB1dCAnICsgJ2VsZW1lbnQgZm9yIHRoZSBsaWZldGltZSBvZiB0aGUgY29tcG9uZW50LiBNb3JlIGluZm86IGh0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJywgb3duZXIgJiYgb3duZXIuZ2V0TmFtZSgpIHx8ICdBIGNvbXBvbmVudCcsIHByb3BzLnR5cGUpIDogdm9pZCAwO1xuICAgICAgICBkaWRXYXJuVW5jb250cm9sbGVkVG9Db250cm9sbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0Ll93cmFwcGVyU3RhdGUuY29udHJvbGxlZCAmJiAoZGVmYXVsdFZhbHVlIHx8ICFjb250cm9sbGVkKSAmJiAhZGlkV2FybkNvbnRyb2xsZWRUb1VuY29udHJvbGxlZCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzIGlzIGNoYW5naW5nIGEgY29udHJvbGxlZCBpbnB1dCBvZiB0eXBlICVzIHRvIGJlIHVuY29udHJvbGxlZC4gJyArICdJbnB1dCBlbGVtZW50cyBzaG91bGQgbm90IHN3aXRjaCBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gJyArICdEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBmb3IgdGhlIGxpZmV0aW1lIG9mIHRoZSBjb21wb25lbnQuIE1vcmUgaW5mbzogaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnLCBvd25lciAmJiBvd25lci5nZXROYW1lKCkgfHwgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSkgOiB2b2lkIDA7XG4gICAgICAgIGRpZFdhcm5Db250cm9sbGVkVG9VbmNvbnRyb2xsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IFNob3VsZG4ndCB0aGlzIGJlIGdldENoZWNrZWQocHJvcHMpP1xuICAgIHZhciBjaGVja2VkID0gcHJvcHMuY2hlY2tlZDtcbiAgICBpZiAoY2hlY2tlZCAhPSBudWxsKSB7XG4gICAgICBET01Qcm9wZXJ0eU9wZXJhdGlvbnMuc2V0VmFsdWVGb3JQcm9wZXJ0eShSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZShpbnN0KSwgJ2NoZWNrZWQnLCBjaGVja2VkIHx8IGZhbHNlKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBMaW5rZWRWYWx1ZVV0aWxzLmdldFZhbHVlKHByb3BzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgLy8gQ2FzdCBgdmFsdWVgIHRvIGEgc3RyaW5nIHRvIGVuc3VyZSB0aGUgdmFsdWUgaXMgc2V0IGNvcnJlY3RseS4gV2hpbGVcbiAgICAgIC8vIGJyb3dzZXJzIHR5cGljYWxseSBkbyB0aGlzIGFzIG5lY2Vzc2FyeSwganNkb20gZG9lc24ndC5cbiAgICAgIERPTVByb3BlcnR5T3BlcmF0aW9ucy5zZXRWYWx1ZUZvclByb3BlcnR5KFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXROb2RlRnJvbUluc3RhbmNlKGluc3QpLCAndmFsdWUnLCAnJyArIHZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9oYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgdmFyIHByb3BzID0gdGhpcy5fY3VycmVudEVsZW1lbnQucHJvcHM7XG5cbiAgdmFyIHJldHVyblZhbHVlID0gTGlua2VkVmFsdWVVdGlscy5leGVjdXRlT25DaGFuZ2UocHJvcHMsIGV2ZW50KTtcblxuICAvLyBIZXJlIHdlIHVzZSBhc2FwIHRvIHdhaXQgdW50aWwgYWxsIHVwZGF0ZXMgaGF2ZSBwcm9wYWdhdGVkLCB3aGljaFxuICAvLyBpcyBpbXBvcnRhbnQgd2hlbiB1c2luZyBjb250cm9sbGVkIGNvbXBvbmVudHMgd2l0aGluIGxheWVyczpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNjk4XG4gIFJlYWN0VXBkYXRlcy5hc2FwKGZvcmNlVXBkYXRlSWZNb3VudGVkLCB0aGlzKTtcblxuICB2YXIgbmFtZSA9IHByb3BzLm5hbWU7XG4gIGlmIChwcm9wcy50eXBlID09PSAncmFkaW8nICYmIG5hbWUgIT0gbnVsbCkge1xuICAgIHZhciByb290Tm9kZSA9IFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXROb2RlRnJvbUluc3RhbmNlKHRoaXMpO1xuICAgIHZhciBxdWVyeVJvb3QgPSByb290Tm9kZTtcblxuICAgIHdoaWxlIChxdWVyeVJvb3QucGFyZW50Tm9kZSkge1xuICAgICAgcXVlcnlSb290ID0gcXVlcnlSb290LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgLy8gSWYgYHJvb3ROb2RlLmZvcm1gIHdhcyBub24tbnVsbCwgdGhlbiB3ZSBjb3VsZCB0cnkgYGZvcm0uZWxlbWVudHNgLFxuICAgIC8vIGJ1dCB0aGF0IHNvbWV0aW1lcyBiZWhhdmVzIHN0cmFuZ2VseSBpbiBJRTguIFdlIGNvdWxkIGFsc28gdHJ5IHVzaW5nXG4gICAgLy8gYGZvcm0uZ2V0RWxlbWVudHNCeU5hbWVgLCBidXQgdGhhdCB3aWxsIG9ubHkgcmV0dXJuIGRpcmVjdCBjaGlsZHJlblxuICAgIC8vIGFuZCB3b24ndCBpbmNsdWRlIGlucHV0cyB0aGF0IHVzZSB0aGUgSFRNTDUgYGZvcm09YCBhdHRyaWJ1dGUuIFNpbmNlXG4gICAgLy8gdGhlIGlucHV0IG1pZ2h0IG5vdCBldmVuIGJlIGluIGEgZm9ybSwgbGV0J3MganVzdCB1c2UgdGhlIGdsb2JhbFxuICAgIC8vIGBxdWVyeVNlbGVjdG9yQWxsYCB0byBlbnN1cmUgd2UgZG9uJ3QgbWlzcyBhbnl0aGluZy5cbiAgICB2YXIgZ3JvdXAgPSBxdWVyeVJvb3QucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT0nICsgSlNPTi5zdHJpbmdpZnkoJycgKyBuYW1lKSArICddW3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG90aGVyTm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG90aGVyTm9kZSA9PT0gcm9vdE5vZGUgfHwgb3RoZXJOb2RlLmZvcm0gIT09IHJvb3ROb2RlLmZvcm0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgcmFkaW8gYnV0dG9ucyByZW5kZXJlZCBieSBkaWZmZXJlbnQgY29waWVzIG9mIFJlYWN0XG4gICAgICAvLyBhbmQgdGhlIHNhbWUgbmFtZSBhcmUgcmVuZGVyZWQgaW50byB0aGUgc2FtZSBmb3JtIChzYW1lIGFzICMxOTM5KS5cbiAgICAgIC8vIFRoYXQncyBwcm9iYWJseSBva2F5OyB3ZSBkb24ndCBzdXBwb3J0IGl0IGp1c3QgYXMgd2UgZG9uJ3Qgc3VwcG9ydFxuICAgICAgLy8gbWl4aW5nIFJlYWN0IHJhZGlvIGJ1dHRvbnMgd2l0aCBub24tUmVhY3Qgb25lcy5cbiAgICAgIHZhciBvdGhlckluc3RhbmNlID0gUmVhY3RET01Db21wb25lbnRUcmVlLmdldEluc3RhbmNlRnJvbU5vZGUob3RoZXJOb2RlKTtcbiAgICAgICFvdGhlckluc3RhbmNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0RE9NSW5wdXQ6IE1peGluZyBSZWFjdCBhbmQgbm9uLVJlYWN0IHJhZGlvIGlucHV0cyB3aXRoIHRoZSAnICsgJ3NhbWUgYG5hbWVgIGlzIG5vdCBzdXBwb3J0ZWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgLy8gSWYgdGhpcyBpcyBhIGNvbnRyb2xsZWQgcmFkaW8gYnV0dG9uIGdyb3VwLCBmb3JjaW5nIHRoZSBpbnB1dCB0aGF0XG4gICAgICAvLyB3YXMgcHJldmlvdXNseSBjaGVja2VkIHRvIHVwZGF0ZSB3aWxsIGNhdXNlIGl0IHRvIGJlIGNvbWUgcmUtY2hlY2tlZFxuICAgICAgLy8gYXMgYXBwcm9wcmlhdGUuXG4gICAgICBSZWFjdFVwZGF0ZXMuYXNhcChmb3JjZVVwZGF0ZUlmTW91bnRlZCwgb3RoZXJJbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NSW5wdXQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RE9NSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBMaW5rZWRWYWx1ZVV0aWxzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1JlYWN0UHJvcFR5cGVzJyk7XG52YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZUxvY2F0aW9ucycpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIGhhc1JlYWRPbmx5VmFsdWUgPSB7XG4gICdidXR0b24nOiB0cnVlLFxuICAnY2hlY2tib3gnOiB0cnVlLFxuICAnaW1hZ2UnOiB0cnVlLFxuICAnaGlkZGVuJzogdHJ1ZSxcbiAgJ3JhZGlvJzogdHJ1ZSxcbiAgJ3Jlc2V0JzogdHJ1ZSxcbiAgJ3N1Ym1pdCc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIF9hc3NlcnRTaW5nbGVMaW5rKGlucHV0UHJvcHMpIHtcbiAgIShpbnB1dFByb3BzLmNoZWNrZWRMaW5rID09IG51bGwgfHwgaW5wdXRQcm9wcy52YWx1ZUxpbmsgPT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ2Fubm90IHByb3ZpZGUgYSBjaGVja2VkTGluayBhbmQgYSB2YWx1ZUxpbmsuIElmIHlvdSB3YW50IHRvIHVzZSAnICsgJ2NoZWNrZWRMaW5rLCB5b3UgcHJvYmFibHkgZG9uXFwndCB3YW50IHRvIHVzZSB2YWx1ZUxpbmsgYW5kIHZpY2UgdmVyc2EuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gX2Fzc2VydFZhbHVlTGluayhpbnB1dFByb3BzKSB7XG4gIF9hc3NlcnRTaW5nbGVMaW5rKGlucHV0UHJvcHMpO1xuICAhKGlucHV0UHJvcHMudmFsdWUgPT0gbnVsbCAmJiBpbnB1dFByb3BzLm9uQ2hhbmdlID09IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Nhbm5vdCBwcm92aWRlIGEgdmFsdWVMaW5rIGFuZCBhIHZhbHVlIG9yIG9uQ2hhbmdlIGV2ZW50LiBJZiB5b3Ugd2FudCAnICsgJ3RvIHVzZSB2YWx1ZSBvciBvbkNoYW5nZSwgeW91IHByb2JhYmx5IGRvblxcJ3Qgd2FudCB0byB1c2UgdmFsdWVMaW5rLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydENoZWNrZWRMaW5rKGlucHV0UHJvcHMpIHtcbiAgX2Fzc2VydFNpbmdsZUxpbmsoaW5wdXRQcm9wcyk7XG4gICEoaW5wdXRQcm9wcy5jaGVja2VkID09IG51bGwgJiYgaW5wdXRQcm9wcy5vbkNoYW5nZSA9PSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDYW5ub3QgcHJvdmlkZSBhIGNoZWNrZWRMaW5rIGFuZCBhIGNoZWNrZWQgcHJvcGVydHkgb3Igb25DaGFuZ2UgZXZlbnQuICcgKyAnSWYgeW91IHdhbnQgdG8gdXNlIGNoZWNrZWQgb3Igb25DaGFuZ2UsIHlvdSBwcm9iYWJseSBkb25cXCd0IHdhbnQgdG8gJyArICd1c2UgY2hlY2tlZExpbmsnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG59XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKCFwcm9wc1twcm9wTmFtZV0gfHwgaGFzUmVhZE9ubHlWYWx1ZVtwcm9wcy50eXBlXSB8fCBwcm9wcy5vbkNoYW5nZSB8fCBwcm9wcy5yZWFkT25seSB8fCBwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBwcm92aWRlZCBhIGB2YWx1ZWAgcHJvcCB0byBhIGZvcm0gZmllbGQgd2l0aG91dCBhbiAnICsgJ2BvbkNoYW5nZWAgaGFuZGxlci4gVGhpcyB3aWxsIHJlbmRlciBhIHJlYWQtb25seSBmaWVsZC4gSWYgJyArICd0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBkZWZhdWx0VmFsdWVgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XG4gIH0sXG4gIGNoZWNrZWQ6IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAoIXByb3BzW3Byb3BOYW1lXSB8fCBwcm9wcy5vbkNoYW5nZSB8fCBwcm9wcy5yZWFkT25seSB8fCBwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBwcm92aWRlZCBhIGBjaGVja2VkYCBwcm9wIHRvIGEgZm9ybSBmaWVsZCB3aXRob3V0IGFuICcgKyAnYG9uQ2hhbmdlYCBoYW5kbGVyLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBJZiAnICsgJ3RoZSBmaWVsZCBzaG91bGQgYmUgbXV0YWJsZSB1c2UgYGRlZmF1bHRDaGVja2VkYC4gT3RoZXJ3aXNlLCAnICsgJ3NldCBlaXRoZXIgYG9uQ2hhbmdlYCBvciBgcmVhZE9ubHlgLicpO1xuICB9LFxuICBvbkNoYW5nZTogUmVhY3RQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKG93bmVyKSB7XG4gIGlmIChvd25lcikge1xuICAgIHZhciBuYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUHJvdmlkZSBhIGxpbmtlZCBgdmFsdWVgIGF0dHJpYnV0ZSBmb3IgY29udHJvbGxlZCBmb3Jtcy4gWW91IHNob3VsZCBub3QgdXNlXG4gKiB0aGlzIG91dHNpZGUgb2YgdGhlIFJlYWN0RE9NIGNvbnRyb2xsZWQgZm9ybSBjb21wb25lbnRzLlxuICovXG52YXIgTGlua2VkVmFsdWVVdGlscyA9IHtcbiAgY2hlY2tQcm9wVHlwZXM6IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcywgb3duZXIpIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wVHlwZXMpIHtcbiAgICAgIGlmIChwcm9wVHlwZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHByb3BUeXBlc1twcm9wTmFtZV0ocHJvcHMsIHByb3BOYW1lLCB0YWdOYW1lLCBSZWFjdFByb3BUeXBlTG9jYXRpb25zLnByb3ApO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgdmFyIGFkZGVuZHVtID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKG93bmVyKTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgZm9ybSBwcm9wVHlwZTogJXMlcycsIGVycm9yLm1lc3NhZ2UsIGFkZGVuZHVtKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFByb3BzIFByb3BzIGZvciBmb3JtIGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHsqfSBjdXJyZW50IHZhbHVlIG9mIHRoZSBpbnB1dCBlaXRoZXIgZnJvbSB2YWx1ZSBwcm9wIG9yIGxpbmsuXG4gICAqL1xuICBnZXRWYWx1ZTogZnVuY3Rpb24gKGlucHV0UHJvcHMpIHtcbiAgICBpZiAoaW5wdXRQcm9wcy52YWx1ZUxpbmspIHtcbiAgICAgIF9hc3NlcnRWYWx1ZUxpbmsoaW5wdXRQcm9wcyk7XG4gICAgICByZXR1cm4gaW5wdXRQcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dFByb3BzLnZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gaW5wdXRQcm9wcyBQcm9wcyBmb3IgZm9ybSBjb21wb25lbnRcbiAgICogQHJldHVybiB7Kn0gY3VycmVudCBjaGVja2VkIHN0YXR1cyBvZiB0aGUgaW5wdXQgZWl0aGVyIGZyb20gY2hlY2tlZCBwcm9wXG4gICAqICAgICAgICAgICAgIG9yIGxpbmsuXG4gICAqL1xuICBnZXRDaGVja2VkOiBmdW5jdGlvbiAoaW5wdXRQcm9wcykge1xuICAgIGlmIChpbnB1dFByb3BzLmNoZWNrZWRMaW5rKSB7XG4gICAgICBfYXNzZXJ0Q2hlY2tlZExpbmsoaW5wdXRQcm9wcyk7XG4gICAgICByZXR1cm4gaW5wdXRQcm9wcy5jaGVja2VkTGluay52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0UHJvcHMuY2hlY2tlZDtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IGlucHV0UHJvcHMgUHJvcHMgZm9yIGZvcm0gY29tcG9uZW50XG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IGNoYW5nZSBldmVudCB0byBoYW5kbGVcbiAgICovXG4gIGV4ZWN1dGVPbkNoYW5nZTogZnVuY3Rpb24gKGlucHV0UHJvcHMsIGV2ZW50KSB7XG4gICAgaWYgKGlucHV0UHJvcHMudmFsdWVMaW5rKSB7XG4gICAgICBfYXNzZXJ0VmFsdWVMaW5rKGlucHV0UHJvcHMpO1xuICAgICAgcmV0dXJuIGlucHV0UHJvcHMudmFsdWVMaW5rLnJlcXVlc3RDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0UHJvcHMuY2hlY2tlZExpbmspIHtcbiAgICAgIF9hc3NlcnRDaGVja2VkTGluayhpbnB1dFByb3BzKTtcbiAgICAgIHJldHVybiBpbnB1dFByb3BzLmNoZWNrZWRMaW5rLnJlcXVlc3RDaGFuZ2UoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcmV0dXJuIGlucHV0UHJvcHMub25DaGFuZ2UuY2FsbCh1bmRlZmluZWQsIGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlua2VkVmFsdWVVdGlscztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvTGlua2VkVmFsdWVVdGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RE9NT3B0aW9uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL1JlYWN0Q2hpbGRyZW4nKTtcbnZhciBSZWFjdERPTUNvbXBvbmVudFRyZWUgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50VHJlZScpO1xudmFyIFJlYWN0RE9NU2VsZWN0ID0gcmVxdWlyZSgnLi9SZWFjdERPTVNlbGVjdCcpO1xuXG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxuLyoqXG4gKiBJbXBsZW1lbnRzIGFuIDxvcHRpb24+IG5hdGl2ZSBjb21wb25lbnQgdGhhdCB3YXJucyB3aGVuIGBzZWxlY3RlZGAgaXMgc2V0LlxuICovXG52YXIgUmVhY3RET01PcHRpb24gPSB7XG4gIG1vdW50V3JhcHBlcjogZnVuY3Rpb24gKGluc3QsIHByb3BzLCBuYXRpdmVQYXJlbnQpIHtcbiAgICAvLyBUT0RPICh5dW5nc3RlcnMpOiBSZW1vdmUgc3VwcG9ydCBmb3IgYHNlbGVjdGVkYCBpbiA8b3B0aW9uPi5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcocHJvcHMuc2VsZWN0ZWQgPT0gbnVsbCwgJ1VzZSB0aGUgYGRlZmF1bHRWYWx1ZWAgb3IgYHZhbHVlYCBwcm9wcyBvbiA8c2VsZWN0PiBpbnN0ZWFkIG9mICcgKyAnc2V0dGluZyBgc2VsZWN0ZWRgIG9uIDxvcHRpb24+LicpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIC8vIExvb2sgdXAgd2hldGhlciB0aGlzIG9wdGlvbiBpcyAnc2VsZWN0ZWQnXG4gICAgdmFyIHNlbGVjdFZhbHVlID0gbnVsbDtcbiAgICBpZiAobmF0aXZlUGFyZW50ICE9IG51bGwpIHtcbiAgICAgIHZhciBzZWxlY3RQYXJlbnQgPSBuYXRpdmVQYXJlbnQ7XG5cbiAgICAgIGlmIChzZWxlY3RQYXJlbnQuX3RhZyA9PT0gJ29wdGdyb3VwJykge1xuICAgICAgICBzZWxlY3RQYXJlbnQgPSBzZWxlY3RQYXJlbnQuX25hdGl2ZVBhcmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdFBhcmVudCAhPSBudWxsICYmIHNlbGVjdFBhcmVudC5fdGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgICBzZWxlY3RWYWx1ZSA9IFJlYWN0RE9NU2VsZWN0LmdldFNlbGVjdFZhbHVlQ29udGV4dChzZWxlY3RQYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBudWxsIChlLmcuLCBubyBzcGVjaWZpZWQgdmFsdWUgb3IgYWZ0ZXIgaW5pdGlhbCBtb3VudClcbiAgICAvLyBvciBtaXNzaW5nIChlLmcuLCBmb3IgPGRhdGFsaXN0PiksIHdlIGRvbid0IGNoYW5nZSBwcm9wcy5zZWxlY3RlZFxuICAgIHZhciBzZWxlY3RlZCA9IG51bGw7XG4gICAgaWYgKHNlbGVjdFZhbHVlICE9IG51bGwpIHtcbiAgICAgIHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgLy8gbXVsdGlwbGVcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgnJyArIHNlbGVjdFZhbHVlW2ldID09PSAnJyArIHByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkID0gJycgKyBzZWxlY3RWYWx1ZSA9PT0gJycgKyBwcm9wcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0Ll93cmFwcGVyU3RhdGUgPSB7IHNlbGVjdGVkOiBzZWxlY3RlZCB9O1xuICB9LFxuXG4gIHBvc3RNb3VudFdyYXBwZXI6IGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgLy8gdmFsdWU9XCJcIiBzaG91bGQgbWFrZSBhIHZhbHVlIGF0dHJpYnV0ZSAoIzYyMTkpXG4gICAgdmFyIHByb3BzID0gaW5zdC5fY3VycmVudEVsZW1lbnQucHJvcHM7XG4gICAgaWYgKHByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgIHZhciBub2RlID0gUmVhY3RET01Db21wb25lbnRUcmVlLmdldE5vZGVGcm9tSW5zdGFuY2UoaW5zdCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9wcy52YWx1ZSk7XG4gICAgfVxuICB9LFxuXG4gIGdldE5hdGl2ZVByb3BzOiBmdW5jdGlvbiAoaW5zdCwgcHJvcHMpIHtcbiAgICB2YXIgbmF0aXZlUHJvcHMgPSBfYXNzaWduKHsgc2VsZWN0ZWQ6IHVuZGVmaW5lZCwgY2hpbGRyZW46IHVuZGVmaW5lZCB9LCBwcm9wcyk7XG5cbiAgICAvLyBSZWFkIHN0YXRlIG9ubHkgZnJvbSBpbml0aWFsIG1vdW50IGJlY2F1c2UgPHNlbGVjdD4gdXBkYXRlcyB2YWx1ZVxuICAgIC8vIG1hbnVhbGx5OyB3ZSBuZWVkIHRoZSBpbml0aWFsIHN0YXRlIG9ubHkgZm9yIHNlcnZlciByZW5kZXJpbmdcbiAgICBpZiAoaW5zdC5fd3JhcHBlclN0YXRlLnNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIG5hdGl2ZVByb3BzLnNlbGVjdGVkID0gaW5zdC5fd3JhcHBlclN0YXRlLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gJyc7XG5cbiAgICAvLyBGbGF0dGVuIGNoaWxkcmVuIGFuZCB3YXJuIGlmIHRoZXkgYXJlbid0IHN0cmluZ3Mgb3IgbnVtYmVycztcbiAgICAvLyBpbnZhbGlkIHR5cGVzIGFyZSBpZ25vcmVkLlxuICAgIFJlYWN0Q2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gY2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ09ubHkgc3RyaW5ncyBhbmQgbnVtYmVycyBhcmUgc3VwcG9ydGVkIGFzIDxvcHRpb24+IGNoaWxkcmVuLicpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIG5hdGl2ZVByb3BzLmNoaWxkcmVuID0gY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF0aXZlUHJvcHM7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTU9wdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01PcHRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTVNlbGVjdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBEaXNhYmxlZElucHV0VXRpbHMgPSByZXF1aXJlKCcuL0Rpc2FibGVkSW5wdXRVdGlscycpO1xudmFyIExpbmtlZFZhbHVlVXRpbHMgPSByZXF1aXJlKCcuL0xpbmtlZFZhbHVlVXRpbHMnKTtcbnZhciBSZWFjdERPTUNvbXBvbmVudFRyZWUgPSByZXF1aXJlKCcuL1JlYWN0RE9NQ29tcG9uZW50VHJlZScpO1xudmFyIFJlYWN0VXBkYXRlcyA9IHJlcXVpcmUoJy4vUmVhY3RVcGRhdGVzJyk7XG5cbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgZGlkV2FyblZhbHVlTGluayA9IGZhbHNlO1xudmFyIGRpZFdhcm5WYWx1ZU51bGwgPSBmYWxzZTtcbnZhciBkaWRXYXJuVmFsdWVEZWZhdWx0VmFsdWUgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXBkYXRlT3B0aW9uc0lmUGVuZGluZ1VwZGF0ZUFuZE1vdW50ZWQoKSB7XG4gIGlmICh0aGlzLl9yb290Tm9kZUlEICYmIHRoaXMuX3dyYXBwZXJTdGF0ZS5wZW5kaW5nVXBkYXRlKSB7XG4gICAgdGhpcy5fd3JhcHBlclN0YXRlLnBlbmRpbmdVcGRhdGUgPSBmYWxzZTtcblxuICAgIHZhciBwcm9wcyA9IHRoaXMuX2N1cnJlbnRFbGVtZW50LnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IExpbmtlZFZhbHVlVXRpbHMuZ2V0VmFsdWUocHJvcHMpO1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHVwZGF0ZU9wdGlvbnModGhpcywgQm9vbGVhbihwcm9wcy5tdWx0aXBsZSksIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKG93bmVyKSB7XG4gIGlmIChvd25lcikge1xuICAgIHZhciBuYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlZhbHVlSXNOdWxsKHByb3BzKSB7XG4gIGlmIChwcm9wcyAhPSBudWxsICYmIHByb3BzLnZhbHVlID09PSBudWxsICYmICFkaWRXYXJuVmFsdWVOdWxsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdgdmFsdWVgIHByb3Agb24gYHNlbGVjdGAgc2hvdWxkIG5vdCBiZSBudWxsLiAnICsgJ0NvbnNpZGVyIHVzaW5nIHRoZSBlbXB0eSBzdHJpbmcgdG8gY2xlYXIgdGhlIGNvbXBvbmVudCBvciBgdW5kZWZpbmVkYCAnICsgJ2ZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50cy4nKSA6IHZvaWQgMDtcblxuICAgIGRpZFdhcm5WYWx1ZU51bGwgPSB0cnVlO1xuICB9XG59XG5cbnZhciB2YWx1ZVByb3BOYW1lcyA9IFsndmFsdWUnLCAnZGVmYXVsdFZhbHVlJ107XG5cbi8qKlxuICogVmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgYHZhbHVlYCBhbmQgYGRlZmF1bHRWYWx1ZWAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1NlbGVjdFByb3BUeXBlcyhpbnN0LCBwcm9wcykge1xuICB2YXIgb3duZXIgPSBpbnN0Ll9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gIExpbmtlZFZhbHVlVXRpbHMuY2hlY2tQcm9wVHlwZXMoJ3NlbGVjdCcsIHByb3BzLCBvd25lcik7XG5cbiAgaWYgKHByb3BzLnZhbHVlTGluayAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuVmFsdWVMaW5rKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdgdmFsdWVMaW5rYCBwcm9wIG9uIGBzZWxlY3RgIGlzIGRlcHJlY2F0ZWQ7IHNldCBgdmFsdWVgIGFuZCBgb25DaGFuZ2VgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgZGlkV2FyblZhbHVlTGluayA9IHRydWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlUHJvcE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb3BOYW1lID0gdmFsdWVQcm9wTmFtZXNbaV07XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHByb3BzLm11bHRpcGxlKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhBcnJheS5pc0FycmF5KHByb3BzW3Byb3BOYW1lXSksICdUaGUgYCVzYCBwcm9wIHN1cHBsaWVkIHRvIDxzZWxlY3Q+IG11c3QgYmUgYW4gYXJyYXkgaWYgJyArICdgbXVsdGlwbGVgIGlzIHRydWUuJXMnLCBwcm9wTmFtZSwgZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKG93bmVyKSkgOiB2b2lkIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKCFBcnJheS5pc0FycmF5KHByb3BzW3Byb3BOYW1lXSksICdUaGUgYCVzYCBwcm9wIHN1cHBsaWVkIHRvIDxzZWxlY3Q+IG11c3QgYmUgYSBzY2FsYXIgJyArICd2YWx1ZSBpZiBgbXVsdGlwbGVgIGlzIGZhbHNlLiVzJywgcHJvcE5hbWUsIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bShvd25lcikpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVhY3RET01Db21wb25lbnR9IGluc3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbXVsdGlwbGVcbiAqIEBwYXJhbSB7Kn0gcHJvcFZhbHVlIEEgc3RyaW5nYWJsZSAod2l0aCBgbXVsdGlwbGVgLCBhIGxpc3Qgb2Ygc3RyaW5nYWJsZXMpLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhpbnN0LCBtdWx0aXBsZSwgcHJvcFZhbHVlKSB7XG4gIHZhciBzZWxlY3RlZFZhbHVlLCBpO1xuICB2YXIgb3B0aW9ucyA9IFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXROb2RlRnJvbUluc3RhbmNlKGluc3QpLm9wdGlvbnM7XG5cbiAgaWYgKG11bHRpcGxlKSB7XG4gICAgc2VsZWN0ZWRWYWx1ZSA9IHt9O1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlbGVjdGVkVmFsdWVbJycgKyBwcm9wVmFsdWVbaV1dID0gdHJ1ZTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IHNlbGVjdGVkVmFsdWUuaGFzT3duUHJvcGVydHkob3B0aW9uc1tpXS52YWx1ZSk7XG4gICAgICBpZiAob3B0aW9uc1tpXS5zZWxlY3RlZCAhPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgb3B0aW9uc1tpXS5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBEbyBub3Qgc2V0IGBzZWxlY3QudmFsdWVgIGFzIGV4YWN0IGJlaGF2aW9yIGlzbid0IGNvbnNpc3RlbnQgYWNyb3NzIGFsbFxuICAgIC8vIGJyb3dzZXJzIGZvciBhbGwgY2FzZXMuXG4gICAgc2VsZWN0ZWRWYWx1ZSA9ICcnICsgcHJvcFZhbHVlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3B0aW9uc1tpXS52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBvcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIG9wdGlvbnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEltcGxlbWVudHMgYSA8c2VsZWN0PiBuYXRpdmUgY29tcG9uZW50IHRoYXQgYWxsb3dzIG9wdGlvbmFsbHkgc2V0dGluZyB0aGVcbiAqIHByb3BzIGB2YWx1ZWAgYW5kIGBkZWZhdWx0VmFsdWVgLiBJZiBgbXVsdGlwbGVgIGlzIGZhbHNlLCB0aGUgcHJvcCBtdXN0IGJlIGFcbiAqIHN0cmluZ2FibGUuIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIHByb3AgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdhYmxlcy5cbiAqXG4gKiBJZiBgdmFsdWVgIGlzIG5vdCBzdXBwbGllZCAob3IgbnVsbC91bmRlZmluZWQpLCB1c2VyIGFjdGlvbnMgdGhhdCBjaGFuZ2UgdGhlXG4gKiBzZWxlY3RlZCBvcHRpb24gd2lsbCB0cmlnZ2VyIHVwZGF0ZXMgdG8gdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gKlxuICogSWYgaXQgaXMgc3VwcGxpZWQgKGFuZCBub3QgbnVsbC91bmRlZmluZWQpLCB0aGUgcmVuZGVyZWQgb3B0aW9ucyB3aWxsIG5vdFxuICogdXBkYXRlIGluIHJlc3BvbnNlIHRvIHVzZXIgYWN0aW9ucy4gSW5zdGVhZCwgdGhlIGB2YWx1ZWAgcHJvcCBtdXN0IGNoYW5nZSBpblxuICogb3JkZXIgZm9yIHRoZSByZW5kZXJlZCBvcHRpb25zIHRvIHVwZGF0ZS5cbiAqXG4gKiBJZiBgZGVmYXVsdFZhbHVlYCBpcyBwcm92aWRlZCwgYW55IG9wdGlvbnMgd2l0aCB0aGUgc3VwcGxpZWQgdmFsdWVzIHdpbGwgYmVcbiAqIHNlbGVjdGVkLlxuICovXG52YXIgUmVhY3RET01TZWxlY3QgPSB7XG4gIGdldE5hdGl2ZVByb3BzOiBmdW5jdGlvbiAoaW5zdCwgcHJvcHMpIHtcbiAgICByZXR1cm4gX2Fzc2lnbih7fSwgRGlzYWJsZWRJbnB1dFV0aWxzLmdldE5hdGl2ZVByb3BzKGluc3QsIHByb3BzKSwge1xuICAgICAgb25DaGFuZ2U6IGluc3QuX3dyYXBwZXJTdGF0ZS5vbkNoYW5nZSxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfSxcblxuICBtb3VudFdyYXBwZXI6IGZ1bmN0aW9uIChpbnN0LCBwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja1NlbGVjdFByb3BUeXBlcyhpbnN0LCBwcm9wcyk7XG4gICAgICB3YXJuSWZWYWx1ZUlzTnVsbChwcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gTGlua2VkVmFsdWVVdGlscy5nZXRWYWx1ZShwcm9wcyk7XG4gICAgaW5zdC5fd3JhcHBlclN0YXRlID0ge1xuICAgICAgcGVuZGluZ1VwZGF0ZTogZmFsc2UsXG4gICAgICBpbml0aWFsVmFsdWU6IHZhbHVlICE9IG51bGwgPyB2YWx1ZSA6IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIGxpc3RlbmVyczogbnVsbCxcbiAgICAgIG9uQ2hhbmdlOiBfaGFuZGxlQ2hhbmdlLmJpbmQoaW5zdCksXG4gICAgICB3YXNNdWx0aXBsZTogQm9vbGVhbihwcm9wcy5tdWx0aXBsZSlcbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5WYWx1ZURlZmF1bHRWYWx1ZSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdTZWxlY3QgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIHNlbGVjdCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWNvbnRyb2xsZWQtY29tcG9uZW50cycpIDogdm9pZCAwO1xuICAgICAgZGlkV2FyblZhbHVlRGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0U2VsZWN0VmFsdWVDb250ZXh0OiBmdW5jdGlvbiAoaW5zdCkge1xuICAgIC8vIFJlYWN0RE9NT3B0aW9uIGxvb2tzIGF0IHRoaXMgaW5pdGlhbCB2YWx1ZSBzbyB0aGUgaW5pdGlhbCBnZW5lcmF0ZWRcbiAgICAvLyBtYXJrdXAgaGFzIGNvcnJlY3QgYHNlbGVjdGVkYCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIGluc3QuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7XG4gIH0sXG5cbiAgcG9zdFVwZGF0ZVdyYXBwZXI6IGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgdmFyIHByb3BzID0gaW5zdC5fY3VycmVudEVsZW1lbnQucHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5JZlZhbHVlSXNOdWxsKHByb3BzKTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciB0aGUgaW5pdGlhbCBtb3VudCwgd2UgY29udHJvbCBzZWxlY3RlZC1uZXNzIG1hbnVhbGx5IHNvIGRvbid0IHBhc3NcbiAgICAvLyB0aGlzIHZhbHVlIGRvd25cbiAgICBpbnN0Ll93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlID0gdW5kZWZpbmVkO1xuXG4gICAgdmFyIHdhc011bHRpcGxlID0gaW5zdC5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlO1xuICAgIGluc3QuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSA9IEJvb2xlYW4ocHJvcHMubXVsdGlwbGUpO1xuXG4gICAgdmFyIHZhbHVlID0gTGlua2VkVmFsdWVVdGlscy5nZXRWYWx1ZShwcm9wcyk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIGluc3QuX3dyYXBwZXJTdGF0ZS5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XG4gICAgICB1cGRhdGVPcHRpb25zKGluc3QsIEJvb2xlYW4ocHJvcHMubXVsdGlwbGUpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh3YXNNdWx0aXBsZSAhPT0gQm9vbGVhbihwcm9wcy5tdWx0aXBsZSkpIHtcbiAgICAgIC8vIEZvciBzaW1wbGljaXR5LCByZWFwcGx5IGBkZWZhdWx0VmFsdWVgIGlmIGBtdWx0aXBsZWAgaXMgdG9nZ2xlZC5cbiAgICAgIGlmIChwcm9wcy5kZWZhdWx0VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVPcHRpb25zKGluc3QsIEJvb2xlYW4ocHJvcHMubXVsdGlwbGUpLCBwcm9wcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV2ZXJ0IHRoZSBzZWxlY3QgYmFjayB0byBpdHMgZGVmYXVsdCB1bnNlbGVjdGVkIHN0YXRlLlxuICAgICAgICB1cGRhdGVPcHRpb25zKGluc3QsIEJvb2xlYW4ocHJvcHMubXVsdGlwbGUpLCBwcm9wcy5tdWx0aXBsZSA/IFtdIDogJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gX2hhbmRsZUNoYW5nZShldmVudCkge1xuICB2YXIgcHJvcHMgPSB0aGlzLl9jdXJyZW50RWxlbWVudC5wcm9wcztcbiAgdmFyIHJldHVyblZhbHVlID0gTGlua2VkVmFsdWVVdGlscy5leGVjdXRlT25DaGFuZ2UocHJvcHMsIGV2ZW50KTtcblxuICBpZiAodGhpcy5fcm9vdE5vZGVJRCkge1xuICAgIHRoaXMuX3dyYXBwZXJTdGF0ZS5wZW5kaW5nVXBkYXRlID0gdHJ1ZTtcbiAgfVxuICBSZWFjdFVwZGF0ZXMuYXNhcCh1cGRhdGVPcHRpb25zSWZQZW5kaW5nVXBkYXRlQW5kTW91bnRlZCwgdGhpcyk7XG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTVNlbGVjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01TZWxlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTVRleHRhcmVhXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIERpc2FibGVkSW5wdXRVdGlscyA9IHJlcXVpcmUoJy4vRGlzYWJsZWRJbnB1dFV0aWxzJyk7XG52YXIgRE9NUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9ET01Qcm9wZXJ0eU9wZXJhdGlvbnMnKTtcbnZhciBMaW5rZWRWYWx1ZVV0aWxzID0gcmVxdWlyZSgnLi9MaW5rZWRWYWx1ZVV0aWxzJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdFVwZGF0ZXMgPSByZXF1aXJlKCcuL1JlYWN0VXBkYXRlcycpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIGRpZFdhcm5WYWx1ZUxpbmsgPSBmYWxzZTtcbnZhciBkaWRXYXJuVmFsdWVOdWxsID0gZmFsc2U7XG52YXIgZGlkV2FyblZhbERlZmF1bHRWYWwgPSBmYWxzZTtcblxuZnVuY3Rpb24gZm9yY2VVcGRhdGVJZk1vdW50ZWQoKSB7XG4gIGlmICh0aGlzLl9yb290Tm9kZUlEKSB7XG4gICAgLy8gRE9NIGNvbXBvbmVudCBpcyBzdGlsbCBtb3VudGVkOyB1cGRhdGVcbiAgICBSZWFjdERPTVRleHRhcmVhLnVwZGF0ZVdyYXBwZXIodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2FybklmVmFsdWVJc051bGwocHJvcHMpIHtcbiAgaWYgKHByb3BzICE9IG51bGwgJiYgcHJvcHMudmFsdWUgPT09IG51bGwgJiYgIWRpZFdhcm5WYWx1ZU51bGwpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ2B2YWx1ZWAgcHJvcCBvbiBgdGV4dGFyZWFgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyB0aGUgZW1wdHkgc3RyaW5nIHRvIGNsZWFyIHRoZSBjb21wb25lbnQgb3IgYHVuZGVmaW5lZGAgJyArICdmb3IgdW5jb250cm9sbGVkIGNvbXBvbmVudHMuJykgOiB2b2lkIDA7XG5cbiAgICBkaWRXYXJuVmFsdWVOdWxsID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEltcGxlbWVudHMgYSA8dGV4dGFyZWE+IG5hdGl2ZSBjb21wb25lbnQgdGhhdCBhbGxvd3Mgc2V0dGluZyBgdmFsdWVgLCBhbmRcbiAqIGBkZWZhdWx0VmFsdWVgLiBUaGlzIGRpZmZlcnMgZnJvbSB0aGUgdHJhZGl0aW9uYWwgRE9NIEFQSSBiZWNhdXNlIHZhbHVlIGlzXG4gKiB1c3VhbGx5IHNldCBhcyBQQ0RBVEEgY2hpbGRyZW4uXG4gKlxuICogSWYgYHZhbHVlYCBpcyBub3Qgc3VwcGxpZWQgKG9yIG51bGwvdW5kZWZpbmVkKSwgdXNlciBhY3Rpb25zIHRoYXQgYWZmZWN0IHRoZVxuICogdmFsdWUgd2lsbCB0cmlnZ2VyIHVwZGF0ZXMgdG8gdGhlIGVsZW1lbnQuXG4gKlxuICogSWYgYHZhbHVlYCBpcyBzdXBwbGllZCAoYW5kIG5vdCBudWxsL3VuZGVmaW5lZCksIHRoZSByZW5kZXJlZCBlbGVtZW50IHdpbGxcbiAqIG5vdCB0cmlnZ2VyIHVwZGF0ZXMgdG8gdGhlIGVsZW1lbnQuIEluc3RlYWQsIHRoZSBgdmFsdWVgIHByb3AgbXVzdCBjaGFuZ2UgaW5cbiAqIG9yZGVyIGZvciB0aGUgcmVuZGVyZWQgZWxlbWVudCB0byBiZSB1cGRhdGVkLlxuICpcbiAqIFRoZSByZW5kZXJlZCBlbGVtZW50IHdpbGwgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBlbXB0eSB2YWx1ZSwgdGhlIHByb3BcbiAqIGBkZWZhdWx0VmFsdWVgIGlmIHNwZWNpZmllZCwgb3IgdGhlIGNoaWxkcmVuIGNvbnRlbnQgKGRlcHJlY2F0ZWQpLlxuICovXG52YXIgUmVhY3RET01UZXh0YXJlYSA9IHtcbiAgZ2V0TmF0aXZlUHJvcHM6IGZ1bmN0aW9uIChpbnN0LCBwcm9wcykge1xuICAgICEocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYCBkb2VzIG5vdCBtYWtlIHNlbnNlIG9uIDx0ZXh0YXJlYT4uJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgLy8gQWx3YXlzIHNldCBjaGlsZHJlbiB0byB0aGUgc2FtZSB0aGluZy4gSW4gSUU5LCB0aGUgc2VsZWN0aW9uIHJhbmdlIHdpbGxcbiAgICAvLyBnZXQgcmVzZXQgaWYgYHRleHRDb250ZW50YCBpcyBtdXRhdGVkLlxuICAgIHZhciBuYXRpdmVQcm9wcyA9IF9hc3NpZ24oe30sIERpc2FibGVkSW5wdXRVdGlscy5nZXROYXRpdmVQcm9wcyhpbnN0LCBwcm9wcyksIHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGNoaWxkcmVuOiBpbnN0Ll93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlLFxuICAgICAgb25DaGFuZ2U6IGluc3QuX3dyYXBwZXJTdGF0ZS5vbkNoYW5nZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5hdGl2ZVByb3BzO1xuICB9LFxuXG4gIG1vdW50V3JhcHBlcjogZnVuY3Rpb24gKGluc3QsIHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIExpbmtlZFZhbHVlVXRpbHMuY2hlY2tQcm9wVHlwZXMoJ3RleHRhcmVhJywgcHJvcHMsIGluc3QuX2N1cnJlbnRFbGVtZW50Ll9vd25lcik7XG4gICAgICBpZiAocHJvcHMudmFsdWVMaW5rICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5WYWx1ZUxpbmspIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdgdmFsdWVMaW5rYCBwcm9wIG9uIGB0ZXh0YXJlYWAgaXMgZGVwcmVjYXRlZDsgc2V0IGB2YWx1ZWAgYW5kIGBvbkNoYW5nZWAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgZGlkV2FyblZhbHVlTGluayA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FyblZhbERlZmF1bHRWYWwpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdUZXh0YXJlYSBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgdGV4dGFyZWEgJyArICdhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJykgOiB2b2lkIDA7XG4gICAgICAgIGRpZFdhcm5WYWxEZWZhdWx0VmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHdhcm5JZlZhbHVlSXNOdWxsKHByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgIC8vIFRPRE8gKHl1bmdzdGVycyk6IFJlbW92ZSBzdXBwb3J0IGZvciBjaGlsZHJlbiBjb250ZW50IGluIDx0ZXh0YXJlYT4uXG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnVXNlIHRoZSBgZGVmYXVsdFZhbHVlYCBvciBgdmFsdWVgIHByb3BzIGluc3RlYWQgb2Ygc2V0dGluZyAnICsgJ2NoaWxkcmVuIG9uIDx0ZXh0YXJlYT4uJykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgICAhKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdJZiB5b3Ugc3VwcGx5IGBkZWZhdWx0VmFsdWVgIG9uIGEgPHRleHRhcmVhPiwgZG8gbm90IHBhc3MgY2hpbGRyZW4uJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICEoY2hpbGRyZW4ubGVuZ3RoIDw9IDEpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJzx0ZXh0YXJlYT4gY2FuIG9ubHkgaGF2ZSBhdCBtb3N0IG9uZSBjaGlsZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW5bMF07XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnICsgY2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChkZWZhdWx0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IExpbmtlZFZhbHVlVXRpbHMuZ2V0VmFsdWUocHJvcHMpO1xuICAgIGluc3QuX3dyYXBwZXJTdGF0ZSA9IHtcbiAgICAgIC8vIFdlIHNhdmUgdGhlIGluaXRpYWwgdmFsdWUgc28gdGhhdCBgUmVhY3RET01Db21wb25lbnRgIGRvZXNuJ3QgdXBkYXRlXG4gICAgICAvLyBgdGV4dENvbnRlbnRgICh1bm5lY2Vzc2FyeSBzaW5jZSB3ZSB1cGRhdGUgdmFsdWUpLlxuICAgICAgLy8gVGhlIGluaXRpYWwgdmFsdWUgY2FuIGJlIGEgYm9vbGVhbiBvciBvYmplY3Qgc28gdGhhdCdzIHdoeSBpdCdzXG4gICAgICAvLyBmb3JjZWQgdG8gYmUgYSBzdHJpbmcuXG4gICAgICBpbml0aWFsVmFsdWU6ICcnICsgKHZhbHVlICE9IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZSksXG4gICAgICBsaXN0ZW5lcnM6IG51bGwsXG4gICAgICBvbkNoYW5nZTogX2hhbmRsZUNoYW5nZS5iaW5kKGluc3QpXG4gICAgfTtcbiAgfSxcblxuICB1cGRhdGVXcmFwcGVyOiBmdW5jdGlvbiAoaW5zdCkge1xuICAgIHZhciBwcm9wcyA9IGluc3QuX2N1cnJlbnRFbGVtZW50LnByb3BzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5JZlZhbHVlSXNOdWxsKHByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBMaW5rZWRWYWx1ZVV0aWxzLmdldFZhbHVlKHByb3BzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgLy8gQ2FzdCBgdmFsdWVgIHRvIGEgc3RyaW5nIHRvIGVuc3VyZSB0aGUgdmFsdWUgaXMgc2V0IGNvcnJlY3RseS4gV2hpbGVcbiAgICAgIC8vIGJyb3dzZXJzIHR5cGljYWxseSBkbyB0aGlzIGFzIG5lY2Vzc2FyeSwganNkb20gZG9lc24ndC5cbiAgICAgIERPTVByb3BlcnR5T3BlcmF0aW9ucy5zZXRWYWx1ZUZvclByb3BlcnR5KFJlYWN0RE9NQ29tcG9uZW50VHJlZS5nZXROb2RlRnJvbUluc3RhbmNlKGluc3QpLCAndmFsdWUnLCAnJyArIHZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9oYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgdmFyIHByb3BzID0gdGhpcy5fY3VycmVudEVsZW1lbnQucHJvcHM7XG4gIHZhciByZXR1cm5WYWx1ZSA9IExpbmtlZFZhbHVlVXRpbHMuZXhlY3V0ZU9uQ2hhbmdlKHByb3BzLCBldmVudCk7XG4gIFJlYWN0VXBkYXRlcy5hc2FwKGZvcmNlVXBkYXRlSWZNb3VudGVkLCB0aGlzKTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NVGV4dGFyZWE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RE9NVGV4dGFyZWEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdE11bHRpQ2hpbGRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENvbXBvbmVudEVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudEVudmlyb25tZW50Jyk7XG52YXIgUmVhY3RJbnN0cnVtZW50YXRpb24gPSByZXF1aXJlKCcuL1JlYWN0SW5zdHJ1bWVudGF0aW9uJyk7XG52YXIgUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXMgPSByZXF1aXJlKCcuL1JlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzJyk7XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHJlcXVpcmUoJy4vUmVhY3RDdXJyZW50T3duZXInKTtcbnZhciBSZWFjdFJlY29uY2lsZXIgPSByZXF1aXJlKCcuL1JlYWN0UmVjb25jaWxlcicpO1xudmFyIFJlYWN0Q2hpbGRSZWNvbmNpbGVyID0gcmVxdWlyZSgnLi9SZWFjdENoaWxkUmVjb25jaWxlcicpO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBmbGF0dGVuQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2ZsYXR0ZW5DaGlsZHJlbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIE1ha2UgYW4gdXBkYXRlIGZvciBtYXJrdXAgdG8gYmUgcmVuZGVyZWQgYW5kIGluc2VydGVkIGF0IGEgc3VwcGxpZWQgaW5kZXguXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcmt1cCBNYXJrdXAgdGhhdCByZW5kZXJzIGludG8gYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b0luZGV4IERlc3RpbmF0aW9uIGluZGV4LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZUluc2VydE1hcmt1cChtYXJrdXAsIGFmdGVyTm9kZSwgdG9JbmRleCkge1xuICAvLyBOT1RFOiBOdWxsIHZhbHVlcyByZWR1Y2UgaGlkZGVuIGNsYXNzZXMuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXMuSU5TRVJUX01BUktVUCxcbiAgICBjb250ZW50OiBtYXJrdXAsXG4gICAgZnJvbUluZGV4OiBudWxsLFxuICAgIGZyb21Ob2RlOiBudWxsLFxuICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgYWZ0ZXJOb2RlOiBhZnRlck5vZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBNYWtlIGFuIHVwZGF0ZSBmb3IgbW92aW5nIGFuIGV4aXN0aW5nIGVsZW1lbnQgdG8gYW5vdGhlciBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFNvdXJjZSBpbmRleCBvZiB0aGUgZXhpc3RpbmcgZWxlbWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b0luZGV4IERlc3RpbmF0aW9uIGluZGV4IG9mIHRoZSBlbGVtZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZU1vdmUoY2hpbGQsIGFmdGVyTm9kZSwgdG9JbmRleCkge1xuICAvLyBOT1RFOiBOdWxsIHZhbHVlcyByZWR1Y2UgaGlkZGVuIGNsYXNzZXMuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVhY3RNdWx0aUNoaWxkVXBkYXRlVHlwZXMuTU9WRV9FWElTVElORyxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGZyb21JbmRleDogY2hpbGQuX21vdW50SW5kZXgsXG4gICAgZnJvbU5vZGU6IFJlYWN0UmVjb25jaWxlci5nZXROYXRpdmVOb2RlKGNoaWxkKSxcbiAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgIGFmdGVyTm9kZTogYWZ0ZXJOb2RlXG4gIH07XG59XG5cbi8qKlxuICogTWFrZSBhbiB1cGRhdGUgZm9yIHJlbW92aW5nIGFuIGVsZW1lbnQgYXQgYW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBJbmRleCBvZiB0aGUgZWxlbWVudCB0byByZW1vdmUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtYWtlUmVtb3ZlKGNoaWxkLCBub2RlKSB7XG4gIC8vIE5PVEU6IE51bGwgdmFsdWVzIHJlZHVjZSBoaWRkZW4gY2xhc3Nlcy5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZWFjdE11bHRpQ2hpbGRVcGRhdGVUeXBlcy5SRU1PVkVfTk9ERSxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGZyb21JbmRleDogY2hpbGQuX21vdW50SW5kZXgsXG4gICAgZnJvbU5vZGU6IG5vZGUsXG4gICAgdG9JbmRleDogbnVsbCxcbiAgICBhZnRlck5vZGU6IG51bGxcbiAgfTtcbn1cblxuLyoqXG4gKiBNYWtlIGFuIHVwZGF0ZSBmb3Igc2V0dGluZyB0aGUgbWFya3VwIG9mIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFya3VwIE1hcmt1cCB0aGF0IHJlbmRlcnMgaW50byBhbiBlbGVtZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZVNldE1hcmt1cChtYXJrdXApIHtcbiAgLy8gTk9URTogTnVsbCB2YWx1ZXMgcmVkdWNlIGhpZGRlbiBjbGFzc2VzLlxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzLlNFVF9NQVJLVVAsXG4gICAgY29udGVudDogbWFya3VwLFxuICAgIGZyb21JbmRleDogbnVsbCxcbiAgICBmcm9tTm9kZTogbnVsbCxcbiAgICB0b0luZGV4OiBudWxsLFxuICAgIGFmdGVyTm9kZTogbnVsbFxuICB9O1xufVxuXG4vKipcbiAqIE1ha2UgYW4gdXBkYXRlIGZvciBzZXR0aW5nIHRoZSB0ZXh0IGNvbnRlbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRDb250ZW50IFRleHQgY29udGVudCB0byBzZXQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtYWtlVGV4dENvbnRlbnQodGV4dENvbnRlbnQpIHtcbiAgLy8gTk9URTogTnVsbCB2YWx1ZXMgcmVkdWNlIGhpZGRlbiBjbGFzc2VzLlxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlYWN0TXVsdGlDaGlsZFVwZGF0ZVR5cGVzLlRFWFRfQ09OVEVOVCxcbiAgICBjb250ZW50OiB0ZXh0Q29udGVudCxcbiAgICBmcm9tSW5kZXg6IG51bGwsXG4gICAgZnJvbU5vZGU6IG51bGwsXG4gICAgdG9JbmRleDogbnVsbCxcbiAgICBhZnRlck5vZGU6IG51bGxcbiAgfTtcbn1cblxuLyoqXG4gKiBQdXNoIGFuIHVwZGF0ZSwgaWYgYW55LCBvbnRvIHRoZSBxdWV1ZS4gQ3JlYXRlcyBhIG5ldyBxdWV1ZSBpZiBub25lIGlzXG4gKiBwYXNzZWQgYW5kIGFsd2F5cyByZXR1cm5zIHRoZSBxdWV1ZS4gTXV0YXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIHVwZGF0ZSkge1xuICBpZiAodXBkYXRlKSB7XG4gICAgcXVldWUgPSBxdWV1ZSB8fCBbXTtcbiAgICBxdWV1ZS5wdXNoKHVwZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHF1ZXVlO1xufVxuXG4vKipcbiAqIFByb2Nlc3NlcyBhbnkgZW5xdWV1ZWQgdXBkYXRlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUoaW5zdCwgdXBkYXRlUXVldWUpIHtcbiAgUmVhY3RDb21wb25lbnRFbnZpcm9ubWVudC5wcm9jZXNzQ2hpbGRyZW5VcGRhdGVzKGluc3QsIHVwZGF0ZVF1ZXVlKTtcbn1cblxudmFyIHNldENoaWxkcmVuRm9ySW5zdHJ1bWVudGF0aW9uID0gZW1wdHlGdW5jdGlvbjtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHNldENoaWxkcmVuRm9ySW5zdHJ1bWVudGF0aW9uID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgUmVhY3RJbnN0cnVtZW50YXRpb24uZGVidWdUb29sLm9uU2V0Q2hpbGRyZW4odGhpcy5fZGVidWdJRCwgY2hpbGRyZW4gPyBPYmplY3Qua2V5cyhjaGlsZHJlbikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbltrZXldLl9kZWJ1Z0lEO1xuICAgIH0pIDogW10pO1xuICB9O1xufVxuXG4vKipcbiAqIFJlYWN0TXVsdGlDaGlsZCBhcmUgY2FwYWJsZSBvZiByZWNvbmNpbGluZyBtdWx0aXBsZSBjaGlsZHJlbi5cbiAqXG4gKiBAY2xhc3MgUmVhY3RNdWx0aUNoaWxkXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0TXVsdGlDaGlsZCA9IHtcblxuICAvKipcbiAgICogUHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHkgZm9yIGNvbXBvbmVudHMgdGhhdCBtdXN0IHJlY29uY2lsZSBtdWx0aXBsZVxuICAgKiBjaGlsZHJlbi4gVGhpcyBpcyB1c2VkIGJ5IGBSZWFjdERPTUNvbXBvbmVudGAgdG8gbW91bnQsIHVwZGF0ZSwgYW5kXG4gICAqIHVubW91bnQgY2hpbGQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQGxlbmRzIHtSZWFjdE11bHRpQ2hpbGQucHJvdG90eXBlfVxuICAgKi9cbiAgTWl4aW46IHtcblxuICAgIF9yZWNvbmNpbGVySW5zdGFudGlhdGVDaGlsZHJlbjogZnVuY3Rpb24gKG5lc3RlZENoaWxkcmVuLCB0cmFuc2FjdGlvbiwgY29udGV4dCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgPSB0aGlzLl9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3RDaGlsZFJlY29uY2lsZXIuaW5zdGFudGlhdGVDaGlsZHJlbihuZXN0ZWRDaGlsZHJlbiwgdHJhbnNhY3Rpb24sIGNvbnRleHQpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdENoaWxkUmVjb25jaWxlci5pbnN0YW50aWF0ZUNoaWxkcmVuKG5lc3RlZENoaWxkcmVuLCB0cmFuc2FjdGlvbiwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIF9yZWNvbmNpbGVyVXBkYXRlQ2hpbGRyZW46IGZ1bmN0aW9uIChwcmV2Q2hpbGRyZW4sIG5leHROZXN0ZWRDaGlsZHJlbkVsZW1lbnRzLCByZW1vdmVkTm9kZXMsIHRyYW5zYWN0aW9uLCBjb250ZXh0KSB7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgPSB0aGlzLl9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gICAgICAgICAgICBuZXh0Q2hpbGRyZW4gPSBmbGF0dGVuQ2hpbGRyZW4obmV4dE5lc3RlZENoaWxkcmVuRWxlbWVudHMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhY3RDaGlsZFJlY29uY2lsZXIudXBkYXRlQ2hpbGRyZW4ocHJldkNoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIHJlbW92ZWROb2RlcywgdHJhbnNhY3Rpb24sIGNvbnRleHQpO1xuICAgICAgICAgIHJldHVybiBuZXh0Q2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5leHRDaGlsZHJlbiA9IGZsYXR0ZW5DaGlsZHJlbihuZXh0TmVzdGVkQ2hpbGRyZW5FbGVtZW50cyk7XG4gICAgICBSZWFjdENoaWxkUmVjb25jaWxlci51cGRhdGVDaGlsZHJlbihwcmV2Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgcmVtb3ZlZE5vZGVzLCB0cmFuc2FjdGlvbiwgY29udGV4dCk7XG4gICAgICByZXR1cm4gbmV4dENoaWxkcmVuO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBcIm1vdW50IGltYWdlXCIgZm9yIGVhY2ggb2YgdGhlIHN1cHBsaWVkIGNoaWxkcmVuLiBJbiB0aGUgY2FzZVxuICAgICAqIG9mIGBSZWFjdERPTUNvbXBvbmVudGAsIGEgbW91bnQgaW1hZ2UgaXMgYSBzdHJpbmcgb2YgbWFya3VwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXN0ZWRDaGlsZHJlbiBOZXN0ZWQgY2hpbGQgbWFwcy5cbiAgICAgKiBAcmV0dXJuIHthcnJheX0gQW4gYXJyYXkgb2YgbW91bnRlZCByZXByZXNlbnRhdGlvbnMuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgbW91bnRDaGlsZHJlbjogZnVuY3Rpb24gKG5lc3RlZENoaWxkcmVuLCB0cmFuc2FjdGlvbiwgY29udGV4dCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5fcmVjb25jaWxlckluc3RhbnRpYXRlQ2hpbGRyZW4obmVzdGVkQ2hpbGRyZW4sIHRyYW5zYWN0aW9uLCBjb250ZXh0KTtcbiAgICAgIHRoaXMuX3JlbmRlcmVkQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAgdmFyIG1vdW50SW1hZ2VzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBjaGlsZHJlbikge1xuICAgICAgICBpZiAoY2hpbGRyZW4uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltuYW1lXTtcbiAgICAgICAgICB2YXIgbW91bnRJbWFnZSA9IFJlYWN0UmVjb25jaWxlci5tb3VudENvbXBvbmVudChjaGlsZCwgdHJhbnNhY3Rpb24sIHRoaXMsIHRoaXMuX25hdGl2ZUNvbnRhaW5lckluZm8sIGNvbnRleHQpO1xuICAgICAgICAgIGNoaWxkLl9tb3VudEluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICBtb3VudEltYWdlcy5wdXNoKG1vdW50SW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHNldENoaWxkcmVuRm9ySW5zdHJ1bWVudGF0aW9uLmNhbGwodGhpcywgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbW91bnRJbWFnZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGFueSByZW5kZXJlZCBjaGlsZHJlbiB3aXRoIGEgdGV4dCBjb250ZW50IHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0Q29udGVudCBTdHJpbmcgb2YgY29udGVudC5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB1cGRhdGVUZXh0Q29udGVudDogZnVuY3Rpb24gKG5leHRDb250ZW50KSB7XG4gICAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5fcmVuZGVyZWRDaGlsZHJlbjtcbiAgICAgIC8vIFJlbW92ZSBhbnkgcmVuZGVyZWQgY2hpbGRyZW4uXG4gICAgICBSZWFjdENoaWxkUmVjb25jaWxlci51bm1vdW50Q2hpbGRyZW4ocHJldkNoaWxkcmVuLCBmYWxzZSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHByZXZDaGlsZHJlbikge1xuICAgICAgICBpZiAocHJldkNoaWxkcmVuLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZVRleHRDb250ZW50IGNhbGxlZCBvbiBub24tZW1wdHkgY29tcG9uZW50LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IG5ldyB0ZXh0IGNvbnRlbnQuXG4gICAgICB2YXIgdXBkYXRlcyA9IFttYWtlVGV4dENvbnRlbnQobmV4dENvbnRlbnQpXTtcbiAgICAgIHByb2Nlc3NRdWV1ZSh0aGlzLCB1cGRhdGVzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYW55IHJlbmRlcmVkIGNoaWxkcmVuIHdpdGggYSBtYXJrdXAgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5leHRNYXJrdXAgU3RyaW5nIG9mIG1hcmt1cC5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB1cGRhdGVNYXJrdXA6IGZ1bmN0aW9uIChuZXh0TWFya3VwKSB7XG4gICAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5fcmVuZGVyZWRDaGlsZHJlbjtcbiAgICAgIC8vIFJlbW92ZSBhbnkgcmVuZGVyZWQgY2hpbGRyZW4uXG4gICAgICBSZWFjdENoaWxkUmVjb25jaWxlci51bm1vdW50Q2hpbGRyZW4ocHJldkNoaWxkcmVuLCBmYWxzZSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHByZXZDaGlsZHJlbikge1xuICAgICAgICBpZiAocHJldkNoaWxkcmVuLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZVRleHRDb250ZW50IGNhbGxlZCBvbiBub24tZW1wdHkgY29tcG9uZW50LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHVwZGF0ZXMgPSBbbWFrZVNldE1hcmt1cChuZXh0TWFya3VwKV07XG4gICAgICBwcm9jZXNzUXVldWUodGhpcywgdXBkYXRlcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHJlbmRlcmVkIGNoaWxkcmVuIHdpdGggbmV3IGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0TmVzdGVkQ2hpbGRyZW5FbGVtZW50cyBOZXN0ZWQgY2hpbGQgZWxlbWVudCBtYXBzLlxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB1cGRhdGVDaGlsZHJlbjogZnVuY3Rpb24gKG5leHROZXN0ZWRDaGlsZHJlbkVsZW1lbnRzLCB0cmFuc2FjdGlvbiwgY29udGV4dCkge1xuICAgICAgLy8gSG9vayB1c2VkIGJ5IFJlYWN0IEFSVFxuICAgICAgdGhpcy5fdXBkYXRlQ2hpbGRyZW4obmV4dE5lc3RlZENoaWxkcmVuRWxlbWVudHMsIHRyYW5zYWN0aW9uLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0TmVzdGVkQ2hpbGRyZW5FbGVtZW50cyBOZXN0ZWQgY2hpbGQgZWxlbWVudCBtYXBzLlxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAZmluYWxcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3VwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAobmV4dE5lc3RlZENoaWxkcmVuRWxlbWVudHMsIHRyYW5zYWN0aW9uLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5fcmVuZGVyZWRDaGlsZHJlbjtcbiAgICAgIHZhciByZW1vdmVkTm9kZXMgPSB7fTtcbiAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0aGlzLl9yZWNvbmNpbGVyVXBkYXRlQ2hpbGRyZW4ocHJldkNoaWxkcmVuLCBuZXh0TmVzdGVkQ2hpbGRyZW5FbGVtZW50cywgcmVtb3ZlZE5vZGVzLCB0cmFuc2FjdGlvbiwgY29udGV4dCk7XG4gICAgICBpZiAoIW5leHRDaGlsZHJlbiAmJiAhcHJldkNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB1cGRhdGVzID0gbnVsbDtcbiAgICAgIHZhciBuYW1lO1xuICAgICAgLy8gYG5leHRJbmRleGAgd2lsbCBpbmNyZW1lbnQgZm9yIGVhY2ggY2hpbGQgaW4gYG5leHRDaGlsZHJlbmAsIGJ1dFxuICAgICAgLy8gYGxhc3RJbmRleGAgd2lsbCBiZSB0aGUgbGFzdCBpbmRleCB2aXNpdGVkIGluIGBwcmV2Q2hpbGRyZW5gLlxuICAgICAgdmFyIGxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgIHZhciBsYXN0UGxhY2VkTm9kZSA9IG51bGw7XG4gICAgICBmb3IgKG5hbWUgaW4gbmV4dENoaWxkcmVuKSB7XG4gICAgICAgIGlmICghbmV4dENoaWxkcmVuLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZHJlbiAmJiBwcmV2Q2hpbGRyZW5bbmFtZV07XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5bbmFtZV07XG4gICAgICAgIGlmIChwcmV2Q2hpbGQgPT09IG5leHRDaGlsZCkge1xuICAgICAgICAgIHVwZGF0ZXMgPSBlbnF1ZXVlKHVwZGF0ZXMsIHRoaXMubW92ZUNoaWxkKHByZXZDaGlsZCwgbGFzdFBsYWNlZE5vZGUsIG5leHRJbmRleCwgbGFzdEluZGV4KSk7XG4gICAgICAgICAgbGFzdEluZGV4ID0gTWF0aC5tYXgocHJldkNoaWxkLl9tb3VudEluZGV4LCBsYXN0SW5kZXgpO1xuICAgICAgICAgIHByZXZDaGlsZC5fbW91bnRJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJldkNoaWxkKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgYGxhc3RJbmRleGAgYmVmb3JlIGBfbW91bnRJbmRleGAgZ2V0cyB1bnNldCBieSB1bm1vdW50aW5nLlxuICAgICAgICAgICAgbGFzdEluZGV4ID0gTWF0aC5tYXgocHJldkNoaWxkLl9tb3VudEluZGV4LCBsYXN0SW5kZXgpO1xuICAgICAgICAgICAgLy8gVGhlIGByZW1vdmVkTm9kZXNgIGxvb3AgYmVsb3cgd2lsbCBhY3R1YWxseSByZW1vdmUgdGhlIGNoaWxkLlxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUaGUgY2hpbGQgbXVzdCBiZSBpbnN0YW50aWF0ZWQgYmVmb3JlIGl0J3MgbW91bnRlZC5cbiAgICAgICAgICB1cGRhdGVzID0gZW5xdWV1ZSh1cGRhdGVzLCB0aGlzLl9tb3VudENoaWxkQXRJbmRleChuZXh0Q2hpbGQsIGxhc3RQbGFjZWROb2RlLCBuZXh0SW5kZXgsIHRyYW5zYWN0aW9uLCBjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dEluZGV4Kys7XG4gICAgICAgIGxhc3RQbGFjZWROb2RlID0gUmVhY3RSZWNvbmNpbGVyLmdldE5hdGl2ZU5vZGUobmV4dENoaWxkKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBjaGlsZHJlbiB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudC5cbiAgICAgIGZvciAobmFtZSBpbiByZW1vdmVkTm9kZXMpIHtcbiAgICAgICAgaWYgKHJlbW92ZWROb2Rlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHVwZGF0ZXMgPSBlbnF1ZXVlKHVwZGF0ZXMsIHRoaXMuX3VubW91bnRDaGlsZChwcmV2Q2hpbGRyZW5bbmFtZV0sIHJlbW92ZWROb2Rlc1tuYW1lXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodXBkYXRlcykge1xuICAgICAgICBwcm9jZXNzUXVldWUodGhpcywgdXBkYXRlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlZENoaWxkcmVuID0gbmV4dENoaWxkcmVuO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBzZXRDaGlsZHJlbkZvckluc3RydW1lbnRhdGlvbi5jYWxsKHRoaXMsIG5leHRDaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubW91bnRzIGFsbCByZW5kZXJlZCBjaGlsZHJlbi4gVGhpcyBzaG91bGQgYmUgdXNlZCB0byBjbGVhbiB1cCBjaGlsZHJlblxuICAgICAqIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgdW5tb3VudGVkLiBJdCBkb2VzIG5vdCBhY3R1YWxseSBwZXJmb3JtIGFueVxuICAgICAqIGJhY2tlbmQgb3BlcmF0aW9ucy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHVubW91bnRDaGlsZHJlbjogZnVuY3Rpb24gKHNhZmVseSkge1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLl9yZW5kZXJlZENoaWxkcmVuO1xuICAgICAgUmVhY3RDaGlsZFJlY29uY2lsZXIudW5tb3VudENoaWxkcmVuKHJlbmRlcmVkQ2hpbGRyZW4sIHNhZmVseSk7XG4gICAgICB0aGlzLl9yZW5kZXJlZENoaWxkcmVuID0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYSBjaGlsZCBjb21wb25lbnQgdG8gdGhlIHN1cHBsaWVkIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFjdENvbXBvbmVudH0gY2hpbGQgQ29tcG9uZW50IHRvIG1vdmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvSW5kZXggRGVzdGluYXRpb24gaW5kZXggb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxhc3RJbmRleCBMYXN0IGluZGV4IHZpc2l0ZWQgb2YgdGhlIHNpYmxpbmdzIG9mIGBjaGlsZGAuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG1vdmVDaGlsZDogZnVuY3Rpb24gKGNoaWxkLCBhZnRlck5vZGUsIHRvSW5kZXgsIGxhc3RJbmRleCkge1xuICAgICAgLy8gSWYgdGhlIGluZGV4IG9mIGBjaGlsZGAgaXMgbGVzcyB0aGFuIGBsYXN0SW5kZXhgLCB0aGVuIGl0IG5lZWRzIHRvXG4gICAgICAvLyBiZSBtb3ZlZC4gT3RoZXJ3aXNlLCB3ZSBkbyBub3QgbmVlZCB0byBtb3ZlIGl0IGJlY2F1c2UgYSBjaGlsZCB3aWxsIGJlXG4gICAgICAvLyBpbnNlcnRlZCBvciBtb3ZlZCBiZWZvcmUgYGNoaWxkYC5cbiAgICAgIGlmIChjaGlsZC5fbW91bnRJbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICByZXR1cm4gbWFrZU1vdmUoY2hpbGQsIGFmdGVyTm9kZSwgdG9JbmRleCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjaGlsZCBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWN0Q29tcG9uZW50fSBjaGlsZCBDb21wb25lbnQgdG8gY3JlYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb3VudEltYWdlIE1hcmt1cCB0byBpbnNlcnQuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZUNoaWxkOiBmdW5jdGlvbiAoY2hpbGQsIGFmdGVyTm9kZSwgbW91bnRJbWFnZSkge1xuICAgICAgcmV0dXJuIG1ha2VJbnNlcnRNYXJrdXAobW91bnRJbWFnZSwgYWZ0ZXJOb2RlLCBjaGlsZC5fbW91bnRJbmRleCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjaGlsZCBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWN0Q29tcG9uZW50fSBjaGlsZCBDaGlsZCB0byByZW1vdmUuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkOiBmdW5jdGlvbiAoY2hpbGQsIG5vZGUpIHtcbiAgICAgIHJldHVybiBtYWtlUmVtb3ZlKGNoaWxkLCBub2RlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW91bnRzIGEgY2hpbGQgd2l0aCB0aGUgc3VwcGxpZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaXMgcGFydCBvZiBgdXBkYXRlQ2hpbGRyZW5gIGFuZCBpcyBoZXJlIGZvciByZWFkYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVhY3RDb21wb25lbnR9IGNoaWxkIENvbXBvbmVudCB0byBtb3VudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjaGlsZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSBjaGlsZC5cbiAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbW91bnRDaGlsZEF0SW5kZXg6IGZ1bmN0aW9uIChjaGlsZCwgYWZ0ZXJOb2RlLCBpbmRleCwgdHJhbnNhY3Rpb24sIGNvbnRleHQpIHtcbiAgICAgIHZhciBtb3VudEltYWdlID0gUmVhY3RSZWNvbmNpbGVyLm1vdW50Q29tcG9uZW50KGNoaWxkLCB0cmFuc2FjdGlvbiwgdGhpcywgdGhpcy5fbmF0aXZlQ29udGFpbmVySW5mbywgY29udGV4dCk7XG4gICAgICBjaGlsZC5fbW91bnRJbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoY2hpbGQsIGFmdGVyTm9kZSwgbW91bnRJbWFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubW91bnRzIGEgcmVuZGVyZWQgY2hpbGQuXG4gICAgICpcbiAgICAgKiBOT1RFOiBUaGlzIGlzIHBhcnQgb2YgYHVwZGF0ZUNoaWxkcmVuYCBhbmQgaXMgaGVyZSBmb3IgcmVhZGFiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWN0Q29tcG9uZW50fSBjaGlsZCBDb21wb25lbnQgdG8gdW5tb3VudC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91bm1vdW50Q2hpbGQ6IGZ1bmN0aW9uIChjaGlsZCwgbm9kZSkge1xuICAgICAgdmFyIHVwZGF0ZSA9IHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQsIG5vZGUpO1xuICAgICAgY2hpbGQuX21vdW50SW5kZXggPSBudWxsO1xuICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICB9XG5cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0TXVsdGlDaGlsZDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RNdWx0aUNoaWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMjE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RDaGlsZFJlY29uY2lsZXJcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFJlY29uY2lsZXIgPSByZXF1aXJlKCcuL1JlYWN0UmVjb25jaWxlcicpO1xuXG52YXIgaW5zdGFudGlhdGVSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vaW5zdGFudGlhdGVSZWFjdENvbXBvbmVudCcpO1xudmFyIEtleUVzY2FwZVV0aWxzID0gcmVxdWlyZSgnLi9LZXlFc2NhcGVVdGlscycpO1xudmFyIHNob3VsZFVwZGF0ZVJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9zaG91bGRVcGRhdGVSZWFjdENvbXBvbmVudCcpO1xudmFyIHRyYXZlcnNlQWxsQ2hpbGRyZW4gPSByZXF1aXJlKCcuL3RyYXZlcnNlQWxsQ2hpbGRyZW4nKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG5mdW5jdGlvbiBpbnN0YW50aWF0ZUNoaWxkKGNoaWxkSW5zdGFuY2VzLCBjaGlsZCwgbmFtZSkge1xuICAvLyBXZSBmb3VuZCBhIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgdmFyIGtleVVuaXF1ZSA9IGNoaWxkSW5zdGFuY2VzW25hbWVdID09PSB1bmRlZmluZWQ7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoa2V5VW5pcXVlLCAnZmxhdHRlbkNoaWxkcmVuKC4uLik6IEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGtleSwgJyArICdgJXNgLiBDaGlsZCBrZXlzIG11c3QgYmUgdW5pcXVlOyB3aGVuIHR3byBjaGlsZHJlbiBzaGFyZSBhIGtleSwgb25seSAnICsgJ3RoZSBmaXJzdCBjaGlsZCB3aWxsIGJlIHVzZWQuJywgS2V5RXNjYXBlVXRpbHMudW5lc2NhcGUobmFtZSkpIDogdm9pZCAwO1xuICB9XG4gIGlmIChjaGlsZCAhPSBudWxsICYmIGtleVVuaXF1ZSkge1xuICAgIGNoaWxkSW5zdGFuY2VzW25hbWVdID0gaW5zdGFudGlhdGVSZWFjdENvbXBvbmVudChjaGlsZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWFjdENoaWxkUmVjb25jaWxlciBwcm92aWRlcyBoZWxwZXJzIGZvciBpbml0aWFsaXppbmcgb3IgdXBkYXRpbmcgYSBzZXQgb2ZcbiAqIGNoaWxkcmVuLiBJdHMgb3V0cHV0IGlzIHN1aXRhYmxlIGZvciBwYXNzaW5nIGl0IG9udG8gUmVhY3RNdWx0aUNoaWxkIHdoaWNoXG4gKiBkb2VzIGRpZmZlZCByZW9yZGVyaW5nIGFuZCBpbnNlcnRpb24uXG4gKi9cbnZhciBSZWFjdENoaWxkUmVjb25jaWxlciA9IHtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIFwibW91bnQgaW1hZ2VcIiBmb3IgZWFjaCBvZiB0aGUgc3VwcGxpZWQgY2hpbGRyZW4uIEluIHRoZSBjYXNlXG4gICAqIG9mIGBSZWFjdERPTUNvbXBvbmVudGAsIGEgbW91bnQgaW1hZ2UgaXMgYSBzdHJpbmcgb2YgbWFya3VwLlxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG5lc3RlZENoaWxkTm9kZXMgTmVzdGVkIGNoaWxkIG1hcHMuXG4gICAqIEByZXR1cm4gez9vYmplY3R9IEEgc2V0IG9mIGNoaWxkIGluc3RhbmNlcy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBpbnN0YW50aWF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAobmVzdGVkQ2hpbGROb2RlcywgdHJhbnNhY3Rpb24sIGNvbnRleHQpIHtcbiAgICBpZiAobmVzdGVkQ2hpbGROb2RlcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGNoaWxkSW5zdGFuY2VzID0ge307XG4gICAgdHJhdmVyc2VBbGxDaGlsZHJlbihuZXN0ZWRDaGlsZE5vZGVzLCBpbnN0YW50aWF0ZUNoaWxkLCBjaGlsZEluc3RhbmNlcyk7XG4gICAgcmV0dXJuIGNoaWxkSW5zdGFuY2VzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSByZW5kZXJlZCBjaGlsZHJlbiBhbmQgcmV0dXJucyBhIG5ldyBzZXQgb2YgY2hpbGRyZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gcHJldkNoaWxkcmVuIFByZXZpb3VzbHkgaW5pdGlhbGl6ZWQgc2V0IG9mIGNoaWxkcmVuLlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRDaGlsZHJlbiBGbGF0IGNoaWxkIGVsZW1lbnQgbWFwcy5cbiAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcmV0dXJuIHs/b2JqZWN0fSBBIG5ldyBzZXQgb2YgY2hpbGQgaW5zdGFuY2VzLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAocHJldkNoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIHJlbW92ZWROb2RlcywgdHJhbnNhY3Rpb24sIGNvbnRleHQpIHtcbiAgICAvLyBXZSBjdXJyZW50bHkgZG9uJ3QgaGF2ZSBhIHdheSB0byB0cmFjayBtb3ZlcyBoZXJlIGJ1dCBpZiB3ZSB1c2UgaXRlcmF0b3JzXG4gICAgLy8gaW5zdGVhZCBvZiBmb3IuLmluIHdlIGNhbiB6aXAgdGhlIGl0ZXJhdG9ycyBhbmQgY2hlY2sgaWYgYW4gaXRlbSBoYXNcbiAgICAvLyBtb3ZlZC5cbiAgICAvLyBUT0RPOiBJZiBub3RoaW5nIGhhcyBjaGFuZ2VkLCByZXR1cm4gdGhlIHByZXZDaGlsZHJlbiBvYmplY3Qgc28gdGhhdCB3ZVxuICAgIC8vIGNhbiBxdWlja2x5IGJhaWxvdXQgaWYgbm90aGluZyBoYXMgY2hhbmdlZC5cbiAgICBpZiAoIW5leHRDaGlsZHJlbiAmJiAhcHJldkNoaWxkcmVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuYW1lO1xuICAgIHZhciBwcmV2Q2hpbGQ7XG4gICAgZm9yIChuYW1lIGluIG5leHRDaGlsZHJlbikge1xuICAgICAgaWYgKCFuZXh0Q2hpbGRyZW4uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRyZW4gJiYgcHJldkNoaWxkcmVuW25hbWVdO1xuICAgICAgdmFyIHByZXZFbGVtZW50ID0gcHJldkNoaWxkICYmIHByZXZDaGlsZC5fY3VycmVudEVsZW1lbnQ7XG4gICAgICB2YXIgbmV4dEVsZW1lbnQgPSBuZXh0Q2hpbGRyZW5bbmFtZV07XG4gICAgICBpZiAocHJldkNoaWxkICE9IG51bGwgJiYgc2hvdWxkVXBkYXRlUmVhY3RDb21wb25lbnQocHJldkVsZW1lbnQsIG5leHRFbGVtZW50KSkge1xuICAgICAgICBSZWFjdFJlY29uY2lsZXIucmVjZWl2ZUNvbXBvbmVudChwcmV2Q2hpbGQsIG5leHRFbGVtZW50LCB0cmFuc2FjdGlvbiwgY29udGV4dCk7XG4gICAgICAgIG5leHRDaGlsZHJlbltuYW1lXSA9IHByZXZDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcmV2Q2hpbGQpIHtcbiAgICAgICAgICByZW1vdmVkTm9kZXNbbmFtZV0gPSBSZWFjdFJlY29uY2lsZXIuZ2V0TmF0aXZlTm9kZShwcmV2Q2hpbGQpO1xuICAgICAgICAgIFJlYWN0UmVjb25jaWxlci51bm1vdW50Q29tcG9uZW50KHByZXZDaGlsZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBjaGlsZCBtdXN0IGJlIGluc3RhbnRpYXRlZCBiZWZvcmUgaXQncyBtb3VudGVkLlxuICAgICAgICB2YXIgbmV4dENoaWxkSW5zdGFuY2UgPSBpbnN0YW50aWF0ZVJlYWN0Q29tcG9uZW50KG5leHRFbGVtZW50KTtcbiAgICAgICAgbmV4dENoaWxkcmVuW25hbWVdID0gbmV4dENoaWxkSW5zdGFuY2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFVubW91bnQgY2hpbGRyZW4gdGhhdCBhcmUgbm8gbG9uZ2VyIHByZXNlbnQuXG4gICAgZm9yIChuYW1lIGluIHByZXZDaGlsZHJlbikge1xuICAgICAgaWYgKHByZXZDaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiAhKG5leHRDaGlsZHJlbiAmJiBuZXh0Q2hpbGRyZW4uaGFzT3duUHJvcGVydHkobmFtZSkpKSB7XG4gICAgICAgIHByZXZDaGlsZCA9IHByZXZDaGlsZHJlbltuYW1lXTtcbiAgICAgICAgcmVtb3ZlZE5vZGVzW25hbWVdID0gUmVhY3RSZWNvbmNpbGVyLmdldE5hdGl2ZU5vZGUocHJldkNoaWxkKTtcbiAgICAgICAgUmVhY3RSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQocHJldkNoaWxkLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBVbm1vdW50cyBhbGwgcmVuZGVyZWQgY2hpbGRyZW4uIFRoaXMgc2hvdWxkIGJlIHVzZWQgdG8gY2xlYW4gdXAgY2hpbGRyZW5cbiAgICogd2hlbiB0aGlzIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gcmVuZGVyZWRDaGlsZHJlbiBQcmV2aW91c2x5IGluaXRpYWxpemVkIHNldCBvZiBjaGlsZHJlbi5cbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bm1vdW50Q2hpbGRyZW46IGZ1bmN0aW9uIChyZW5kZXJlZENoaWxkcmVuLCBzYWZlbHkpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHJlbmRlcmVkQ2hpbGRyZW4pIHtcbiAgICAgIGlmIChyZW5kZXJlZENoaWxkcmVuLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHZhciByZW5kZXJlZENoaWxkID0gcmVuZGVyZWRDaGlsZHJlbltuYW1lXTtcbiAgICAgICAgUmVhY3RSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQocmVuZGVyZWRDaGlsZCwgc2FmZWx5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENoaWxkUmVjb25jaWxlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RDaGlsZFJlY29uY2lsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBmbGF0dGVuQ2hpbGRyZW5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBLZXlFc2NhcGVVdGlscyA9IHJlcXVpcmUoJy4vS2V5RXNjYXBlVXRpbHMnKTtcbnZhciB0cmF2ZXJzZUFsbENoaWxkcmVuID0gcmVxdWlyZSgnLi90cmF2ZXJzZUFsbENoaWxkcmVuJyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBwYXNzZWQgdGhyb3VnaCB0cmF2ZXJzYWwuXG4gKiBAcGFyYW0gez9SZWFjdENvbXBvbmVudH0gY2hpbGQgUmVhY3QgY2hpbGQgY29tcG9uZW50LlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lIFN0cmluZyBuYW1lIG9mIGtleSBwYXRoIHRvIGNoaWxkLlxuICovXG5mdW5jdGlvbiBmbGF0dGVuU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkLCBuYW1lKSB7XG4gIC8vIFdlIGZvdW5kIGEgY29tcG9uZW50IGluc3RhbmNlLlxuICB2YXIgcmVzdWx0ID0gdHJhdmVyc2VDb250ZXh0O1xuICB2YXIga2V5VW5pcXVlID0gcmVzdWx0W25hbWVdID09PSB1bmRlZmluZWQ7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoa2V5VW5pcXVlLCAnZmxhdHRlbkNoaWxkcmVuKC4uLik6IEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGtleSwgJyArICdgJXNgLiBDaGlsZCBrZXlzIG11c3QgYmUgdW5pcXVlOyB3aGVuIHR3byBjaGlsZHJlbiBzaGFyZSBhIGtleSwgb25seSAnICsgJ3RoZSBmaXJzdCBjaGlsZCB3aWxsIGJlIHVzZWQuJywgS2V5RXNjYXBlVXRpbHMudW5lc2NhcGUobmFtZSkpIDogdm9pZCAwO1xuICB9XG4gIGlmIChrZXlVbmlxdWUgJiYgY2hpbGQgIT0gbnVsbCkge1xuICAgIHJlc3VsdFtuYW1lXSA9IGNoaWxkO1xuICB9XG59XG5cbi8qKlxuICogRmxhdHRlbnMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLiBBbnkgbnVsbFxuICogY2hpbGRyZW4gd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdGluZyBvYmplY3QuXG4gKiBAcmV0dXJuIHshb2JqZWN0fSBmbGF0dGVuZWQgY2hpbGRyZW4ga2V5ZWQgYnkgbmFtZS5cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZmxhdHRlblNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkNoaWxkcmVuO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9mbGF0dGVuQ2hpbGRyZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFNlcnZlclJlbmRlcmluZ1RyYW5zYWN0aW9uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFBvb2xlZENsYXNzID0gcmVxdWlyZSgnLi9Qb29sZWRDbGFzcycpO1xudmFyIFRyYW5zYWN0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2FjdGlvbicpO1xuXG4vKipcbiAqIEV4ZWN1dGVkIHdpdGhpbiB0aGUgc2NvcGUgb2YgdGhlIGBUcmFuc2FjdGlvbmAgaW5zdGFuY2UuIENvbnNpZGVyIHRoZXNlIGFzXG4gKiBiZWluZyBtZW1iZXIgbWV0aG9kcywgYnV0IHdpdGggYW4gaW1wbGllZCBvcmRlcmluZyB3aGlsZSBiZWluZyBpc29sYXRlZCBmcm9tXG4gKiBlYWNoIG90aGVyLlxuICovXG52YXIgVFJBTlNBQ1RJT05fV1JBUFBFUlMgPSBbXTtcblxudmFyIG5vb3BDYWxsYmFja1F1ZXVlID0ge1xuICBlbnF1ZXVlOiBmdW5jdGlvbiAoKSB7fVxufTtcblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvblxuICogQHBhcmFtIHtib29sZWFufSByZW5kZXJUb1N0YXRpY01hcmt1cFxuICovXG5mdW5jdGlvbiBSZWFjdFNlcnZlclJlbmRlcmluZ1RyYW5zYWN0aW9uKHJlbmRlclRvU3RhdGljTWFya3VwKSB7XG4gIHRoaXMucmVpbml0aWFsaXplVHJhbnNhY3Rpb24oKTtcbiAgdGhpcy5yZW5kZXJUb1N0YXRpY01hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwO1xuICB0aGlzLnVzZUNyZWF0ZUVsZW1lbnQgPSBmYWxzZTtcbn1cblxudmFyIE1peGluID0ge1xuICAvKipcbiAgICogQHNlZSBUcmFuc2FjdGlvblxuICAgKiBAYWJzdHJhY3RcbiAgICogQGZpbmFsXG4gICAqIEByZXR1cm4ge2FycmF5fSBFbXB0eSBsaXN0IG9mIG9wZXJhdGlvbiB3cmFwIHByb2NlZHVyZXMuXG4gICAqL1xuICBnZXRUcmFuc2FjdGlvbldyYXBwZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRSQU5TQUNUSU9OX1dSQVBQRVJTO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBxdWV1ZSB0byBjb2xsZWN0IGBvbkRPTVJlYWR5YCBjYWxsYmFja3Mgd2l0aC5cbiAgICovXG4gIGdldFJlYWN0TW91bnRSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBub29wQ2FsbGJhY2tRdWV1ZTtcbiAgfSxcblxuICAvKipcbiAgICogYFBvb2xlZENsYXNzYCBsb29rcyBmb3IgdGhpcywgYW5kIHdpbGwgaW52b2tlIHRoaXMgYmVmb3JlIGFsbG93aW5nIHRoaXNcbiAgICogaW5zdGFuY2UgdG8gYmUgcmV1c2VkLlxuICAgKi9cbiAgZGVzdHJ1Y3RvcjogZnVuY3Rpb24gKCkge30sXG5cbiAgY2hlY2twb2ludDogZnVuY3Rpb24gKCkge30sXG5cbiAgcm9sbGJhY2s6IGZ1bmN0aW9uICgpIHt9XG59O1xuXG5fYXNzaWduKFJlYWN0U2VydmVyUmVuZGVyaW5nVHJhbnNhY3Rpb24ucHJvdG90eXBlLCBUcmFuc2FjdGlvbi5NaXhpbiwgTWl4aW4pO1xuXG5Qb29sZWRDbGFzcy5hZGRQb29saW5nVG8oUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbik7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKiBcbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoeCA9PT0geSkge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcbiAqIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgYXJndW1lbnRzLlxuICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxdWFsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL3NoYWxsb3dFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RE9NRW1wdHlDb21wb25lbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgRE9NTGF6eVRyZWUgPSByZXF1aXJlKCcuL0RPTUxhenlUcmVlJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcblxudmFyIFJlYWN0RE9NRW1wdHlDb21wb25lbnQgPSBmdW5jdGlvbiAoaW5zdGFudGlhdGUpIHtcbiAgLy8gUmVhY3RDb21wb3NpdGVDb21wb25lbnQgdXNlcyB0aGlzOlxuICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IG51bGw7XG4gIC8vIFJlYWN0RE9NQ29tcG9uZW50VHJlZSB1c2VzIHRoZXNlOlxuICB0aGlzLl9uYXRpdmVOb2RlID0gbnVsbDtcbiAgdGhpcy5fbmF0aXZlUGFyZW50ID0gbnVsbDtcbiAgdGhpcy5fbmF0aXZlQ29udGFpbmVySW5mbyA9IG51bGw7XG4gIHRoaXMuX2RvbUlEID0gbnVsbDtcbn07XG5fYXNzaWduKFJlYWN0RE9NRW1wdHlDb21wb25lbnQucHJvdG90eXBlLCB7XG4gIG1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIG5hdGl2ZVBhcmVudCwgbmF0aXZlQ29udGFpbmVySW5mbywgY29udGV4dCkge1xuICAgIHZhciBkb21JRCA9IG5hdGl2ZUNvbnRhaW5lckluZm8uX2lkQ291bnRlcisrO1xuICAgIHRoaXMuX2RvbUlEID0gZG9tSUQ7XG4gICAgdGhpcy5fbmF0aXZlUGFyZW50ID0gbmF0aXZlUGFyZW50O1xuICAgIHRoaXMuX25hdGl2ZUNvbnRhaW5lckluZm8gPSBuYXRpdmVDb250YWluZXJJbmZvO1xuXG4gICAgdmFyIG5vZGVWYWx1ZSA9ICcgcmVhY3QtZW1wdHk6ICcgKyB0aGlzLl9kb21JRCArICcgJztcbiAgICBpZiAodHJhbnNhY3Rpb24udXNlQ3JlYXRlRWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBuYXRpdmVDb250YWluZXJJbmZvLl9vd25lckRvY3VtZW50O1xuICAgICAgdmFyIG5vZGUgPSBvd25lckRvY3VtZW50LmNyZWF0ZUNvbW1lbnQobm9kZVZhbHVlKTtcbiAgICAgIFJlYWN0RE9NQ29tcG9uZW50VHJlZS5wcmVjYWNoZU5vZGUodGhpcywgbm9kZSk7XG4gICAgICByZXR1cm4gRE9NTGF6eVRyZWUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0cmFuc2FjdGlvbi5yZW5kZXJUb1N0YXRpY01hcmt1cCkge1xuICAgICAgICAvLyBOb3JtYWxseSB3ZSdkIGluc2VydCBhIGNvbW1lbnQgbm9kZSwgYnV0IHNpbmNlIHRoaXMgaXMgYSBzaXR1YXRpb25cbiAgICAgICAgLy8gd2hlcmUgUmVhY3Qgd29uJ3QgdGFrZSBvdmVyIChzdGF0aWMgcGFnZXMpLCB3ZSBjYW4gc2ltcGx5IHJldHVyblxuICAgICAgICAvLyBub3RoaW5nLlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJzwhLS0nICsgbm9kZVZhbHVlICsgJy0tPic7XG4gICAgfVxuICB9LFxuICByZWNlaXZlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgZ2V0TmF0aXZlTm9kZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZSh0aGlzKTtcbiAgfSxcbiAgdW5tb3VudENvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgIFJlYWN0RE9NQ29tcG9uZW50VHJlZS51bmNhY2hlTm9kZSh0aGlzKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET01FbXB0eUNvbXBvbmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01FbXB0eUNvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RE9NVHJlZVRyYXZlcnNhbFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbG93ZXN0IGNvbW1vbiBhbmNlc3RvciBvZiBBIGFuZCBCLCBvciBudWxsIGlmIHRoZXkgYXJlIGluXG4gKiBkaWZmZXJlbnQgdHJlZXMuXG4gKi9cbmZ1bmN0aW9uIGdldExvd2VzdENvbW1vbkFuY2VzdG9yKGluc3RBLCBpbnN0Qikge1xuICAhKCdfbmF0aXZlTm9kZScgaW4gaW5zdEEpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ2dldE5vZGVGcm9tSW5zdGFuY2U6IEludmFsaWQgYXJndW1lbnQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAhKCdfbmF0aXZlTm9kZScgaW4gaW5zdEIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ2dldE5vZGVGcm9tSW5zdGFuY2U6IEludmFsaWQgYXJndW1lbnQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIHZhciBkZXB0aEEgPSAwO1xuICBmb3IgKHZhciB0ZW1wQSA9IGluc3RBOyB0ZW1wQTsgdGVtcEEgPSB0ZW1wQS5fbmF0aXZlUGFyZW50KSB7XG4gICAgZGVwdGhBKys7XG4gIH1cbiAgdmFyIGRlcHRoQiA9IDA7XG4gIGZvciAodmFyIHRlbXBCID0gaW5zdEI7IHRlbXBCOyB0ZW1wQiA9IHRlbXBCLl9uYXRpdmVQYXJlbnQpIHtcbiAgICBkZXB0aEIrKztcbiAgfVxuXG4gIC8vIElmIEEgaXMgZGVlcGVyLCBjcmF3bCB1cC5cbiAgd2hpbGUgKGRlcHRoQSAtIGRlcHRoQiA+IDApIHtcbiAgICBpbnN0QSA9IGluc3RBLl9uYXRpdmVQYXJlbnQ7XG4gICAgZGVwdGhBLS07XG4gIH1cblxuICAvLyBJZiBCIGlzIGRlZXBlciwgY3Jhd2wgdXAuXG4gIHdoaWxlIChkZXB0aEIgLSBkZXB0aEEgPiAwKSB7XG4gICAgaW5zdEIgPSBpbnN0Qi5fbmF0aXZlUGFyZW50O1xuICAgIGRlcHRoQi0tO1xuICB9XG5cbiAgLy8gV2FsayBpbiBsb2Nrc3RlcCB1bnRpbCB3ZSBmaW5kIGEgbWF0Y2guXG4gIHZhciBkZXB0aCA9IGRlcHRoQTtcbiAgd2hpbGUgKGRlcHRoLS0pIHtcbiAgICBpZiAoaW5zdEEgPT09IGluc3RCKSB7XG4gICAgICByZXR1cm4gaW5zdEE7XG4gICAgfVxuICAgIGluc3RBID0gaW5zdEEuX25hdGl2ZVBhcmVudDtcbiAgICBpbnN0QiA9IGluc3RCLl9uYXRpdmVQYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJuIGlmIEEgaXMgYW4gYW5jZXN0b3Igb2YgQi5cbiAqL1xuZnVuY3Rpb24gaXNBbmNlc3RvcihpbnN0QSwgaW5zdEIpIHtcbiAgISgnX25hdGl2ZU5vZGUnIGluIGluc3RBKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdpc0FuY2VzdG9yOiBJbnZhbGlkIGFyZ3VtZW50LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgISgnX25hdGl2ZU5vZGUnIGluIGluc3RCKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdpc0FuY2VzdG9yOiBJbnZhbGlkIGFyZ3VtZW50LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICB3aGlsZSAoaW5zdEIpIHtcbiAgICBpZiAoaW5zdEIgPT09IGluc3RBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdEIgPSBpbnN0Qi5fbmF0aXZlUGFyZW50O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHBhcmVudCBpbnN0YW5jZSBvZiB0aGUgcGFzc2VkLWluIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnRJbnN0YW5jZShpbnN0KSB7XG4gICEoJ19uYXRpdmVOb2RlJyBpbiBpbnN0KSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdnZXRQYXJlbnRJbnN0YW5jZTogSW52YWxpZCBhcmd1bWVudC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgcmV0dXJuIGluc3QuX25hdGl2ZVBhcmVudDtcbn1cblxuLyoqXG4gKiBTaW11bGF0ZXMgdGhlIHRyYXZlcnNhbCBvZiBhIHR3by1waGFzZSwgY2FwdHVyZS9idWJibGUgZXZlbnQgZGlzcGF0Y2guXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlVHdvUGhhc2UoaW5zdCwgZm4sIGFyZykge1xuICB2YXIgcGF0aCA9IFtdO1xuICB3aGlsZSAoaW5zdCkge1xuICAgIHBhdGgucHVzaChpbnN0KTtcbiAgICBpbnN0ID0gaW5zdC5fbmF0aXZlUGFyZW50O1xuICB9XG4gIHZhciBpO1xuICBmb3IgKGkgPSBwYXRoLmxlbmd0aDsgaS0tID4gMDspIHtcbiAgICBmbihwYXRoW2ldLCBmYWxzZSwgYXJnKTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGZuKHBhdGhbaV0sIHRydWUsIGFyZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgdGhlIElEIGhpZXJhcmNoeSBhbmQgaW52b2tlcyB0aGUgc3VwcGxpZWQgYGNiYCBvbiBhbnkgSURzIHRoYXRcbiAqIHNob3VsZCB3b3VsZCByZWNlaXZlIGEgYG1vdXNlRW50ZXJgIG9yIGBtb3VzZUxlYXZlYCBldmVudC5cbiAqXG4gKiBEb2VzIG5vdCBpbnZva2UgdGhlIGNhbGxiYWNrIG9uIHRoZSBuZWFyZXN0IGNvbW1vbiBhbmNlc3RvciBiZWNhdXNlIG5vdGhpbmdcbiAqIFwiZW50ZXJlZFwiIG9yIFwibGVmdFwiIHRoYXQgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VFbnRlckxlYXZlKGZyb20sIHRvLCBmbiwgYXJnRnJvbSwgYXJnVG8pIHtcbiAgdmFyIGNvbW1vbiA9IGZyb20gJiYgdG8gPyBnZXRMb3dlc3RDb21tb25BbmNlc3Rvcihmcm9tLCB0bykgOiBudWxsO1xuICB2YXIgcGF0aEZyb20gPSBbXTtcbiAgd2hpbGUgKGZyb20gJiYgZnJvbSAhPT0gY29tbW9uKSB7XG4gICAgcGF0aEZyb20ucHVzaChmcm9tKTtcbiAgICBmcm9tID0gZnJvbS5fbmF0aXZlUGFyZW50O1xuICB9XG4gIHZhciBwYXRoVG8gPSBbXTtcbiAgd2hpbGUgKHRvICYmIHRvICE9PSBjb21tb24pIHtcbiAgICBwYXRoVG8ucHVzaCh0byk7XG4gICAgdG8gPSB0by5fbmF0aXZlUGFyZW50O1xuICB9XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgcGF0aEZyb20ubGVuZ3RoOyBpKyspIHtcbiAgICBmbihwYXRoRnJvbVtpXSwgdHJ1ZSwgYXJnRnJvbSk7XG4gIH1cbiAgZm9yIChpID0gcGF0aFRvLmxlbmd0aDsgaS0tID4gMDspIHtcbiAgICBmbihwYXRoVG9baV0sIGZhbHNlLCBhcmdUbyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQW5jZXN0b3I6IGlzQW5jZXN0b3IsXG4gIGdldExvd2VzdENvbW1vbkFuY2VzdG9yOiBnZXRMb3dlc3RDb21tb25BbmNlc3RvcixcbiAgZ2V0UGFyZW50SW5zdGFuY2U6IGdldFBhcmVudEluc3RhbmNlLFxuICB0cmF2ZXJzZVR3b1BoYXNlOiB0cmF2ZXJzZVR3b1BoYXNlLFxuICB0cmF2ZXJzZUVudGVyTGVhdmU6IHRyYXZlcnNlRW50ZXJMZWF2ZVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01UcmVlVHJhdmVyc2FsLmpzXG4gKiogbW9kdWxlIGlkID0gMjI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RET01UZXh0Q29tcG9uZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIERPTUNoaWxkcmVuT3BlcmF0aW9ucyA9IHJlcXVpcmUoJy4vRE9NQ2hpbGRyZW5PcGVyYXRpb25zJyk7XG52YXIgRE9NTGF6eVRyZWUgPSByZXF1aXJlKCcuL0RPTUxhenlUcmVlJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdEluc3RydW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vUmVhY3RJbnN0cnVtZW50YXRpb24nKTtcblxudmFyIGVzY2FwZVRleHRDb250ZW50Rm9yQnJvd3NlciA9IHJlcXVpcmUoJy4vZXNjYXBlVGV4dENvbnRlbnRGb3JCcm93c2VyJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgdmFsaWRhdGVET01OZXN0aW5nID0gcmVxdWlyZSgnLi92YWxpZGF0ZURPTU5lc3RpbmcnKTtcblxuLyoqXG4gKiBUZXh0IG5vZGVzIHZpb2xhdGUgYSBjb3VwbGUgYXNzdW1wdGlvbnMgdGhhdCBSZWFjdCBtYWtlcyBhYm91dCBjb21wb25lbnRzOlxuICpcbiAqICAtIFdoZW4gbW91bnRpbmcgdGV4dCBpbnRvIHRoZSBET00sIGFkamFjZW50IHRleHQgbm9kZXMgYXJlIG1lcmdlZC5cbiAqICAtIFRleHQgbm9kZXMgY2Fubm90IGJlIGFzc2lnbmVkIGEgUmVhY3Qgcm9vdCBJRC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIHRvIHdyYXAgc3RyaW5ncyBiZXR3ZWVuIGNvbW1lbnQgbm9kZXMgc28gdGhhdCB0aGV5XG4gKiBjYW4gdW5kZXJnbyB0aGUgc2FtZSByZWNvbmNpbGlhdGlvbiB0aGF0IGlzIGFwcGxpZWQgdG8gZWxlbWVudHMuXG4gKlxuICogVE9ETzogSW52ZXN0aWdhdGUgcmVwcmVzZW50aW5nIFJlYWN0IGNvbXBvbmVudHMgaW4gdGhlIERPTSB3aXRoIHRleHQgbm9kZXMuXG4gKlxuICogQGNsYXNzIFJlYWN0RE9NVGV4dENvbXBvbmVudFxuICogQGV4dGVuZHMgUmVhY3RDb21wb25lbnRcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RET01UZXh0Q29tcG9uZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgLy8gVE9ETzogVGhpcyBpcyByZWFsbHkgYSBSZWFjdFRleHQgKFJlYWN0Tm9kZSksIG5vdCBhIFJlYWN0RWxlbWVudFxuICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IHRleHQ7XG4gIHRoaXMuX3N0cmluZ1RleHQgPSAnJyArIHRleHQ7XG4gIC8vIFJlYWN0RE9NQ29tcG9uZW50VHJlZSB1c2VzIHRoZXNlOlxuICB0aGlzLl9uYXRpdmVOb2RlID0gbnVsbDtcbiAgdGhpcy5fbmF0aXZlUGFyZW50ID0gbnVsbDtcblxuICAvLyBQcm9wZXJ0aWVzXG4gIHRoaXMuX2RvbUlEID0gbnVsbDtcbiAgdGhpcy5fbW91bnRJbmRleCA9IDA7XG4gIHRoaXMuX2Nsb3NpbmdDb21tZW50ID0gbnVsbDtcbiAgdGhpcy5fY29tbWVudE5vZGVzID0gbnVsbDtcbn07XG5cbl9hc3NpZ24oUmVhY3RET01UZXh0Q29tcG9uZW50LnByb3RvdHlwZSwge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBtYXJrdXAgZm9yIHRoaXMgdGV4dCBub2RlLiBUaGlzIG5vZGUgaXMgbm90IGludGVuZGVkIHRvIGhhdmVcbiAgICogYW55IGZlYXR1cmVzIGJlc2lkZXMgY29udGFpbmluZyB0ZXh0IGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbnxSZWFjdFNlcnZlclJlbmRlcmluZ1RyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IE1hcmt1cCBmb3IgdGhpcyB0ZXh0IG5vZGUuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgbmF0aXZlUGFyZW50LCBuYXRpdmVDb250YWluZXJJbmZvLCBjb250ZXh0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFJlYWN0SW5zdHJ1bWVudGF0aW9uLmRlYnVnVG9vbC5vblNldFRleHQodGhpcy5fZGVidWdJRCwgdGhpcy5fc3RyaW5nVGV4dCk7XG5cbiAgICAgIHZhciBwYXJlbnRJbmZvO1xuICAgICAgaWYgKG5hdGl2ZVBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEluZm8gPSBuYXRpdmVQYXJlbnQuX2FuY2VzdG9ySW5mbztcbiAgICAgIH0gZWxzZSBpZiAobmF0aXZlQ29udGFpbmVySW5mbyAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEluZm8gPSBuYXRpdmVDb250YWluZXJJbmZvLl9hbmNlc3RvckluZm87XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50SW5mbykge1xuICAgICAgICAvLyBwYXJlbnRJbmZvIHNob3VsZCBhbHdheXMgYmUgcHJlc2VudCBleGNlcHQgZm9yIHRoZSB0b3AtbGV2ZWxcbiAgICAgICAgLy8gY29tcG9uZW50IHdoZW4gc2VydmVyIHJlbmRlcmluZ1xuICAgICAgICB2YWxpZGF0ZURPTU5lc3RpbmcoJyN0ZXh0JywgdGhpcywgcGFyZW50SW5mbyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRvbUlEID0gbmF0aXZlQ29udGFpbmVySW5mby5faWRDb3VudGVyKys7XG4gICAgdmFyIG9wZW5pbmdWYWx1ZSA9ICcgcmVhY3QtdGV4dDogJyArIGRvbUlEICsgJyAnO1xuICAgIHZhciBjbG9zaW5nVmFsdWUgPSAnIC9yZWFjdC10ZXh0ICc7XG4gICAgdGhpcy5fZG9tSUQgPSBkb21JRDtcbiAgICB0aGlzLl9uYXRpdmVQYXJlbnQgPSBuYXRpdmVQYXJlbnQ7XG4gICAgaWYgKHRyYW5zYWN0aW9uLnVzZUNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lckRvY3VtZW50ID0gbmF0aXZlQ29udGFpbmVySW5mby5fb3duZXJEb2N1bWVudDtcbiAgICAgIHZhciBvcGVuaW5nQ29tbWVudCA9IG93bmVyRG9jdW1lbnQuY3JlYXRlQ29tbWVudChvcGVuaW5nVmFsdWUpO1xuICAgICAgdmFyIGNsb3NpbmdDb21tZW50ID0gb3duZXJEb2N1bWVudC5jcmVhdGVDb21tZW50KGNsb3NpbmdWYWx1ZSk7XG4gICAgICB2YXIgbGF6eVRyZWUgPSBET01MYXp5VHJlZShvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSk7XG4gICAgICBET01MYXp5VHJlZS5xdWV1ZUNoaWxkKGxhenlUcmVlLCBET01MYXp5VHJlZShvcGVuaW5nQ29tbWVudCkpO1xuICAgICAgaWYgKHRoaXMuX3N0cmluZ1RleHQpIHtcbiAgICAgICAgRE9NTGF6eVRyZWUucXVldWVDaGlsZChsYXp5VHJlZSwgRE9NTGF6eVRyZWUob3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLl9zdHJpbmdUZXh0KSkpO1xuICAgICAgfVxuICAgICAgRE9NTGF6eVRyZWUucXVldWVDaGlsZChsYXp5VHJlZSwgRE9NTGF6eVRyZWUoY2xvc2luZ0NvbW1lbnQpKTtcbiAgICAgIFJlYWN0RE9NQ29tcG9uZW50VHJlZS5wcmVjYWNoZU5vZGUodGhpcywgb3BlbmluZ0NvbW1lbnQpO1xuICAgICAgdGhpcy5fY2xvc2luZ0NvbW1lbnQgPSBjbG9zaW5nQ29tbWVudDtcbiAgICAgIHJldHVybiBsYXp5VHJlZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVzY2FwZWRUZXh0ID0gZXNjYXBlVGV4dENvbnRlbnRGb3JCcm93c2VyKHRoaXMuX3N0cmluZ1RleHQpO1xuXG4gICAgICBpZiAodHJhbnNhY3Rpb24ucmVuZGVyVG9TdGF0aWNNYXJrdXApIHtcbiAgICAgICAgLy8gTm9ybWFsbHkgd2UnZCB3cmFwIHRoaXMgYmV0d2VlbiBjb21tZW50IG5vZGVzIGZvciB0aGUgcmVhc29ucyBzdGF0ZWRcbiAgICAgICAgLy8gYWJvdmUsIGJ1dCBzaW5jZSB0aGlzIGlzIGEgc2l0dWF0aW9uIHdoZXJlIFJlYWN0IHdvbid0IHRha2Ugb3ZlclxuICAgICAgICAvLyAoc3RhdGljIHBhZ2VzKSwgd2UgY2FuIHNpbXBseSByZXR1cm4gdGhlIHRleHQgYXMgaXQgaXMuXG4gICAgICAgIHJldHVybiBlc2NhcGVkVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICc8IS0tJyArIG9wZW5pbmdWYWx1ZSArICctLT4nICsgZXNjYXBlZFRleHQgKyAnPCEtLScgKyBjbG9zaW5nVmFsdWUgKyAnLS0+JztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhpcyBjb21wb25lbnQgYnkgdXBkYXRpbmcgdGhlIHRleHQgY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdFRleHR9IG5leHRUZXh0IFRoZSBuZXh0IHRleHQgY29udGVudFxuICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVjZWl2ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5leHRUZXh0LCB0cmFuc2FjdGlvbikge1xuICAgIGlmIChuZXh0VGV4dCAhPT0gdGhpcy5fY3VycmVudEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRFbGVtZW50ID0gbmV4dFRleHQ7XG4gICAgICB2YXIgbmV4dFN0cmluZ1RleHQgPSAnJyArIG5leHRUZXh0O1xuICAgICAgaWYgKG5leHRTdHJpbmdUZXh0ICE9PSB0aGlzLl9zdHJpbmdUZXh0KSB7XG4gICAgICAgIC8vIFRPRE86IFNhdmUgdGhpcyBhcyBwZW5kaW5nIHByb3BzIGFuZCB1c2UgcGVyZm9ybVVwZGF0ZUlmTmVjZXNzYXJ5XG4gICAgICAgIC8vIGFuZC9vciB1cGRhdGVDb21wb25lbnQgdG8gZG8gdGhlIGFjdHVhbCB1cGRhdGUgZm9yIGNvbnNpc3RlbmN5IHdpdGhcbiAgICAgICAgLy8gb3RoZXIgY29tcG9uZW50IHR5cGVzP1xuICAgICAgICB0aGlzLl9zdHJpbmdUZXh0ID0gbmV4dFN0cmluZ1RleHQ7XG4gICAgICAgIHZhciBjb21tZW50Tm9kZXMgPSB0aGlzLmdldE5hdGl2ZU5vZGUoKTtcbiAgICAgICAgRE9NQ2hpbGRyZW5PcGVyYXRpb25zLnJlcGxhY2VEZWxpbWl0ZWRUZXh0KGNvbW1lbnROb2Rlc1swXSwgY29tbWVudE5vZGVzWzFdLCBuZXh0U3RyaW5nVGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25TZXRUZXh0KHRoaXMuX2RlYnVnSUQsIG5leHRTdHJpbmdUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBnZXROYXRpdmVOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hdGl2ZU5vZGUgPSB0aGlzLl9jb21tZW50Tm9kZXM7XG4gICAgaWYgKG5hdGl2ZU5vZGUpIHtcbiAgICAgIHJldHVybiBuYXRpdmVOb2RlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Nsb3NpbmdDb21tZW50KSB7XG4gICAgICB2YXIgb3BlbmluZ0NvbW1lbnQgPSBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZSh0aGlzKTtcbiAgICAgIHZhciBub2RlID0gb3BlbmluZ0NvbW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAhKG5vZGUgIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnTWlzc2luZyBjbG9zaW5nIGNvbW1lbnQgZm9yIHRleHQgY29tcG9uZW50ICVzJywgdGhpcy5fZG9tSUQpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggJiYgbm9kZS5ub2RlVmFsdWUgPT09ICcgL3JlYWN0LXRleHQgJykge1xuICAgICAgICAgIHRoaXMuX2Nsb3NpbmdDb21tZW50ID0gbm9kZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG4gICAgbmF0aXZlTm9kZSA9IFt0aGlzLl9uYXRpdmVOb2RlLCB0aGlzLl9jbG9zaW5nQ29tbWVudF07XG4gICAgdGhpcy5fY29tbWVudE5vZGVzID0gbmF0aXZlTm9kZTtcbiAgICByZXR1cm4gbmF0aXZlTm9kZTtcbiAgfSxcblxuICB1bm1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fY2xvc2luZ0NvbW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2NvbW1lbnROb2RlcyA9IG51bGw7XG4gICAgUmVhY3RET01Db21wb25lbnRUcmVlLnVuY2FjaGVOb2RlKHRoaXMpO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NVGV4dENvbXBvbmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01UZXh0Q29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3REZWZhdWx0QmF0Y2hpbmdTdHJhdGVneVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFVwZGF0ZXMgPSByZXF1aXJlKCcuL1JlYWN0VXBkYXRlcycpO1xudmFyIFRyYW5zYWN0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2FjdGlvbicpO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcblxudmFyIFJFU0VUX0JBVENIRURfVVBEQVRFUyA9IHtcbiAgaW5pdGlhbGl6ZTogZW1wdHlGdW5jdGlvbixcbiAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICBSZWFjdERlZmF1bHRCYXRjaGluZ1N0cmF0ZWd5LmlzQmF0Y2hpbmdVcGRhdGVzID0gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBGTFVTSF9CQVRDSEVEX1VQREFURVMgPSB7XG4gIGluaXRpYWxpemU6IGVtcHR5RnVuY3Rpb24sXG4gIGNsb3NlOiBSZWFjdFVwZGF0ZXMuZmx1c2hCYXRjaGVkVXBkYXRlcy5iaW5kKFJlYWN0VXBkYXRlcylcbn07XG5cbnZhciBUUkFOU0FDVElPTl9XUkFQUEVSUyA9IFtGTFVTSF9CQVRDSEVEX1VQREFURVMsIFJFU0VUX0JBVENIRURfVVBEQVRFU107XG5cbmZ1bmN0aW9uIFJlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3lUcmFuc2FjdGlvbigpIHtcbiAgdGhpcy5yZWluaXRpYWxpemVUcmFuc2FjdGlvbigpO1xufVxuXG5fYXNzaWduKFJlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3lUcmFuc2FjdGlvbi5wcm90b3R5cGUsIFRyYW5zYWN0aW9uLk1peGluLCB7XG4gIGdldFRyYW5zYWN0aW9uV3JhcHBlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVFJBTlNBQ1RJT05fV1JBUFBFUlM7XG4gIH1cbn0pO1xuXG52YXIgdHJhbnNhY3Rpb24gPSBuZXcgUmVhY3REZWZhdWx0QmF0Y2hpbmdTdHJhdGVneVRyYW5zYWN0aW9uKCk7XG5cbnZhciBSZWFjdERlZmF1bHRCYXRjaGluZ1N0cmF0ZWd5ID0ge1xuICBpc0JhdGNoaW5nVXBkYXRlczogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGwgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGluIGEgY29udGV4dCB3aXRoaW4gd2hpY2ggY2FsbHMgdG8gYHNldFN0YXRlYFxuICAgKiBhbmQgZnJpZW5kcyBhcmUgYmF0Y2hlZCBzdWNoIHRoYXQgY29tcG9uZW50cyBhcmVuJ3QgdXBkYXRlZCB1bm5lY2Vzc2FyaWx5LlxuICAgKi9cbiAgYmF0Y2hlZFVwZGF0ZXM6IGZ1bmN0aW9uIChjYWxsYmFjaywgYSwgYiwgYywgZCwgZSkge1xuICAgIHZhciBhbHJlYWR5QmF0Y2hpbmdVcGRhdGVzID0gUmVhY3REZWZhdWx0QmF0Y2hpbmdTdHJhdGVneS5pc0JhdGNoaW5nVXBkYXRlcztcblxuICAgIFJlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3kuaXNCYXRjaGluZ1VwZGF0ZXMgPSB0cnVlO1xuXG4gICAgLy8gVGhlIGNvZGUgaXMgd3JpdHRlbiB0aGlzIHdheSB0byBhdm9pZCBleHRyYSBhbGxvY2F0aW9uc1xuICAgIGlmIChhbHJlYWR5QmF0Y2hpbmdVcGRhdGVzKSB7XG4gICAgICBjYWxsYmFjayhhLCBiLCBjLCBkLCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNhY3Rpb24ucGVyZm9ybShjYWxsYmFjaywgbnVsbCwgYSwgYiwgYywgZCwgZSk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3k7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RGVmYXVsdEJhdGNoaW5nU3RyYXRlZ3kuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdEV2ZW50TGlzdGVuZXJcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2ZianMvbGliL0V2ZW50TGlzdGVuZXInKTtcbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG52YXIgUG9vbGVkQ2xhc3MgPSByZXF1aXJlKCcuL1Bvb2xlZENsYXNzJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBSZWFjdFVwZGF0ZXMgPSByZXF1aXJlKCcuL1JlYWN0VXBkYXRlcycpO1xuXG52YXIgZ2V0RXZlbnRUYXJnZXQgPSByZXF1aXJlKCcuL2dldEV2ZW50VGFyZ2V0Jyk7XG52YXIgZ2V0VW5ib3VuZGVkU2Nyb2xsUG9zaXRpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9nZXRVbmJvdW5kZWRTY3JvbGxQb3NpdGlvbicpO1xuXG4vKipcbiAqIEZpbmQgdGhlIGRlZXBlc3QgUmVhY3QgY29tcG9uZW50IGNvbXBsZXRlbHkgY29udGFpbmluZyB0aGUgcm9vdCBvZiB0aGVcbiAqIHBhc3NlZC1pbiBpbnN0YW5jZSAoZm9yIHVzZSB3aGVuIGVudGlyZSBSZWFjdCB0cmVlcyBhcmUgbmVzdGVkIHdpdGhpbiBlYWNoXG4gKiBvdGhlcikuIElmIFJlYWN0IHRyZWVzIGFyZSBub3QgbmVzdGVkLCByZXR1cm5zIG51bGwuXG4gKi9cbmZ1bmN0aW9uIGZpbmRQYXJlbnQoaW5zdCkge1xuICAvLyBUT0RPOiBJdCBtYXkgYmUgYSBnb29kIGlkZWEgdG8gY2FjaGUgdGhpcyB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IERPTVxuICAvLyB0cmF2ZXJzYWwsIGJ1dCBjYWNoaW5nIGlzIGRpZmZpY3VsdCB0byBkbyBjb3JyZWN0bHkgd2l0aG91dCB1c2luZyBhXG4gIC8vIG11dGF0aW9uIG9ic2VydmVyIHRvIGxpc3RlbiBmb3IgYWxsIERPTSBjaGFuZ2VzLlxuICB3aGlsZSAoaW5zdC5fbmF0aXZlUGFyZW50KSB7XG4gICAgaW5zdCA9IGluc3QuX25hdGl2ZVBhcmVudDtcbiAgfVxuICB2YXIgcm9vdE5vZGUgPSBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZShpbnN0KTtcbiAgdmFyIGNvbnRhaW5lciA9IHJvb3ROb2RlLnBhcmVudE5vZGU7XG4gIHJldHVybiBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Q2xvc2VzdEluc3RhbmNlRnJvbU5vZGUoY29udGFpbmVyKTtcbn1cblxuLy8gVXNlZCB0byBzdG9yZSBhbmNlc3RvciBoaWVyYXJjaHkgaW4gdG9wIGxldmVsIGNhbGxiYWNrXG5mdW5jdGlvbiBUb3BMZXZlbENhbGxiYWNrQm9va0tlZXBpbmcodG9wTGV2ZWxUeXBlLCBuYXRpdmVFdmVudCkge1xuICB0aGlzLnRvcExldmVsVHlwZSA9IHRvcExldmVsVHlwZTtcbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuICB0aGlzLmFuY2VzdG9ycyA9IFtdO1xufVxuX2Fzc2lnbihUb3BMZXZlbENhbGxiYWNrQm9va0tlZXBpbmcucHJvdG90eXBlLCB7XG4gIGRlc3RydWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvcExldmVsVHlwZSA9IG51bGw7XG4gICAgdGhpcy5uYXRpdmVFdmVudCA9IG51bGw7XG4gICAgdGhpcy5hbmNlc3RvcnMubGVuZ3RoID0gMDtcbiAgfVxufSk7XG5Qb29sZWRDbGFzcy5hZGRQb29saW5nVG8oVG9wTGV2ZWxDYWxsYmFja0Jvb2tLZWVwaW5nLCBQb29sZWRDbGFzcy50d29Bcmd1bWVudFBvb2xlcik7XG5cbmZ1bmN0aW9uIGhhbmRsZVRvcExldmVsSW1wbChib29rS2VlcGluZykge1xuICB2YXIgbmF0aXZlRXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChib29rS2VlcGluZy5uYXRpdmVFdmVudCk7XG4gIHZhciB0YXJnZXRJbnN0ID0gUmVhY3RET01Db21wb25lbnRUcmVlLmdldENsb3Nlc3RJbnN0YW5jZUZyb21Ob2RlKG5hdGl2ZUV2ZW50VGFyZ2V0KTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGhpZXJhcmNoeSwgaW4gY2FzZSB0aGVyZSdzIGFueSBuZXN0ZWQgY29tcG9uZW50cy5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdGhhdCB3ZSBidWlsZCB0aGUgYXJyYXkgb2YgYW5jZXN0b3JzIGJlZm9yZSBjYWxsaW5nIGFueVxuICAvLyBldmVudCBoYW5kbGVycywgYmVjYXVzZSBldmVudCBoYW5kbGVycyBjYW4gbW9kaWZ5IHRoZSBET00sIGxlYWRpbmcgdG9cbiAgLy8gaW5jb25zaXN0ZW5jaWVzIHdpdGggUmVhY3RNb3VudCdzIG5vZGUgY2FjaGUuIFNlZSAjMTEwNS5cbiAgdmFyIGFuY2VzdG9yID0gdGFyZ2V0SW5zdDtcbiAgZG8ge1xuICAgIGJvb2tLZWVwaW5nLmFuY2VzdG9ycy5wdXNoKGFuY2VzdG9yKTtcbiAgICBhbmNlc3RvciA9IGFuY2VzdG9yICYmIGZpbmRQYXJlbnQoYW5jZXN0b3IpO1xuICB9IHdoaWxlIChhbmNlc3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBib29rS2VlcGluZy5hbmNlc3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB0YXJnZXRJbnN0ID0gYm9va0tlZXBpbmcuYW5jZXN0b3JzW2ldO1xuICAgIFJlYWN0RXZlbnRMaXN0ZW5lci5faGFuZGxlVG9wTGV2ZWwoYm9va0tlZXBpbmcudG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0LCBib29rS2VlcGluZy5uYXRpdmVFdmVudCwgZ2V0RXZlbnRUYXJnZXQoYm9va0tlZXBpbmcubmF0aXZlRXZlbnQpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzY3JvbGxWYWx1ZU1vbml0b3IoY2IpIHtcbiAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZ2V0VW5ib3VuZGVkU2Nyb2xsUG9zaXRpb24od2luZG93KTtcbiAgY2Ioc2Nyb2xsUG9zaXRpb24pO1xufVxuXG52YXIgUmVhY3RFdmVudExpc3RlbmVyID0ge1xuICBfZW5hYmxlZDogdHJ1ZSxcbiAgX2hhbmRsZVRvcExldmVsOiBudWxsLFxuXG4gIFdJTkRPV19IQU5ETEU6IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHdpbmRvdyA6IG51bGwsXG5cbiAgc2V0SGFuZGxlVG9wTGV2ZWw6IGZ1bmN0aW9uIChoYW5kbGVUb3BMZXZlbCkge1xuICAgIFJlYWN0RXZlbnRMaXN0ZW5lci5faGFuZGxlVG9wTGV2ZWwgPSBoYW5kbGVUb3BMZXZlbDtcbiAgfSxcblxuICBzZXRFbmFibGVkOiBmdW5jdGlvbiAoZW5hYmxlZCkge1xuICAgIFJlYWN0RXZlbnRMaXN0ZW5lci5fZW5hYmxlZCA9ICEhZW5hYmxlZDtcbiAgfSxcblxuICBpc0VuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVhY3RFdmVudExpc3RlbmVyLl9lbmFibGVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFwcyB0b3AtbGV2ZWwgZXZlbnRzIGJ5IHVzaW5nIGV2ZW50IGJ1YmJsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9wTGV2ZWxUeXBlIFJlY29yZCBmcm9tIGBFdmVudENvbnN0YW50c2AuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVyQmFzZU5hbWUgRXZlbnQgbmFtZSAoZS5nLiBcImNsaWNrXCIpLlxuICAgKiBAcGFyYW0ge29iamVjdH0gaGFuZGxlIEVsZW1lbnQgb24gd2hpY2ggdG8gYXR0YWNoIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHs/b2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIHJlbW92ZSBmdW5jdGlvbiB3aGljaCB3aWxsIGZvcmNlZnVsbHlcbiAgICogICAgICAgICAgICAgICAgICByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRyYXBCdWJibGVkRXZlbnQ6IGZ1bmN0aW9uICh0b3BMZXZlbFR5cGUsIGhhbmRsZXJCYXNlTmFtZSwgaGFuZGxlKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBoYW5kbGU7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEV2ZW50TGlzdGVuZXIubGlzdGVuKGVsZW1lbnQsIGhhbmRsZXJCYXNlTmFtZSwgUmVhY3RFdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQuYmluZChudWxsLCB0b3BMZXZlbFR5cGUpKTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhcHMgYSB0b3AtbGV2ZWwgZXZlbnQgYnkgdXNpbmcgZXZlbnQgY2FwdHVyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9wTGV2ZWxUeXBlIFJlY29yZCBmcm9tIGBFdmVudENvbnN0YW50c2AuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVyQmFzZU5hbWUgRXZlbnQgbmFtZSAoZS5nLiBcImNsaWNrXCIpLlxuICAgKiBAcGFyYW0ge29iamVjdH0gaGFuZGxlIEVsZW1lbnQgb24gd2hpY2ggdG8gYXR0YWNoIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHs/b2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIHJlbW92ZSBmdW5jdGlvbiB3aGljaCB3aWxsIGZvcmNlZnVsbHlcbiAgICogICAgICAgICAgICAgICAgICByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRyYXBDYXB0dXJlZEV2ZW50OiBmdW5jdGlvbiAodG9wTGV2ZWxUeXBlLCBoYW5kbGVyQmFzZU5hbWUsIGhhbmRsZSkge1xuICAgIHZhciBlbGVtZW50ID0gaGFuZGxlO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBFdmVudExpc3RlbmVyLmNhcHR1cmUoZWxlbWVudCwgaGFuZGxlckJhc2VOYW1lLCBSZWFjdEV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudC5iaW5kKG51bGwsIHRvcExldmVsVHlwZSkpO1xuICB9LFxuXG4gIG1vbml0b3JTY3JvbGxWYWx1ZTogZnVuY3Rpb24gKHJlZnJlc2gpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBzY3JvbGxWYWx1ZU1vbml0b3IuYmluZChudWxsLCByZWZyZXNoKTtcbiAgICBFdmVudExpc3RlbmVyLmxpc3Rlbih3aW5kb3csICdzY3JvbGwnLCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHRvcExldmVsVHlwZSwgbmF0aXZlRXZlbnQpIHtcbiAgICBpZiAoIVJlYWN0RXZlbnRMaXN0ZW5lci5fZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBib29rS2VlcGluZyA9IFRvcExldmVsQ2FsbGJhY2tCb29rS2VlcGluZy5nZXRQb29sZWQodG9wTGV2ZWxUeXBlLCBuYXRpdmVFdmVudCk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEV2ZW50IHF1ZXVlIGJlaW5nIHByb2Nlc3NlZCBpbiB0aGUgc2FtZSBjeWNsZSBhbGxvd3NcbiAgICAgIC8vIGBwcmV2ZW50RGVmYXVsdGAuXG4gICAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoaGFuZGxlVG9wTGV2ZWxJbXBsLCBib29rS2VlcGluZyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFRvcExldmVsQ2FsbGJhY2tCb29rS2VlcGluZy5yZWxlYXNlKGJvb2tLZWVwaW5nKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFdmVudExpc3RlbmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdEV2ZW50TGlzdGVuZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogVXBzdHJlYW0gdmVyc2lvbiBvZiBldmVudCBsaXN0ZW5lci4gRG9lcyBub3QgdGFrZSBpbnRvIGFjY291bnQgc3BlY2lmaWNcbiAqIG5hdHVyZSBvZiBwbGF0Zm9ybS5cbiAqL1xudmFyIEV2ZW50TGlzdGVuZXIgPSB7XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGJ1YmJsZSBwaGFzZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0IERPTSBlbGVtZW50IHRvIHJlZ2lzdGVyIGxpc3RlbmVyIG9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHR5cGUsIGUuZy4gJ2NsaWNrJyBvciAnbW91c2VvdmVyJy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggYSBgcmVtb3ZlYCBtZXRob2QuXG4gICAqL1xuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGNhcHR1cmUgcGhhc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRXZlbnRUYXJnZXR9IHRhcmdldCBET00gZWxlbWVudCB0byByZWdpc3RlciBsaXN0ZW5lciBvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCB0eXBlLCBlLmcuICdjbGljaycgb3IgJ21vdXNlb3ZlcicuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCB3aXRoIGEgYHJlbW92ZWAgbWV0aG9kLlxuICAgKi9cbiAgY2FwdHVyZTogZnVuY3Rpb24gY2FwdHVyZSh0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byBsaXN0ZW4gdG8gZXZlbnRzIGR1cmluZyB0aGUgY2FwdHVyZSBwaGFzZSBvbiBhICcgKyAnYnJvd3NlciB0aGF0IGRvZXMgbm90IHN1cHBvcnQgdGhlIGNhcHR1cmUgcGhhc2UuIFlvdXIgYXBwbGljYXRpb24gJyArICd3aWxsIG5vdCByZWNlaXZlIHNvbWUgZXZlbnRzLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBlbXB0eUZ1bmN0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICByZWdpc3RlckRlZmF1bHQ6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdCgpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50TGlzdGVuZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIvRXZlbnRMaXN0ZW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDIyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEdldHMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgc3VwcGxpZWQgZWxlbWVudCBvciB3aW5kb3cuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZXMgYXJlIHVuYm91bmRlZCwgdW5saWtlIGBnZXRTY3JvbGxQb3NpdGlvbmAuIFRoaXMgbWVhbnMgdGhleVxuICogbWF5IGJlIG5lZ2F0aXZlIG9yIGV4Y2VlZCB0aGUgZWxlbWVudCBib3VuZGFyaWVzICh3aGljaCBpcyBwb3NzaWJsZSB1c2luZ1xuICogaW5lcnRpYWwgc2Nyb2xsaW5nKS5cbiAqXG4gKiBAcGFyYW0ge0RPTVdpbmRvd3xET01FbGVtZW50fSBzY3JvbGxhYmxlXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcCB3aXRoIGB4YCBhbmQgYHlgIGtleXMuXG4gKi9cblxuZnVuY3Rpb24gZ2V0VW5ib3VuZGVkU2Nyb2xsUG9zaXRpb24oc2Nyb2xsYWJsZSkge1xuICBpZiAoc2Nyb2xsYWJsZSA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IHNjcm9sbGFibGUuc2Nyb2xsTGVmdCxcbiAgICB5OiBzY3JvbGxhYmxlLnNjcm9sbFRvcFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFVuYm91bmRlZFNjcm9sbFBvc2l0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2dldFVuYm91bmRlZFNjcm9sbFBvc2l0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RJbmplY3Rpb25cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBET01Qcm9wZXJ0eSA9IHJlcXVpcmUoJy4vRE9NUHJvcGVydHknKTtcbnZhciBFdmVudFBsdWdpbkh1YiA9IHJlcXVpcmUoJy4vRXZlbnRQbHVnaW5IdWInKTtcbnZhciBFdmVudFBsdWdpblV0aWxzID0gcmVxdWlyZSgnLi9FdmVudFBsdWdpblV0aWxzJyk7XG52YXIgUmVhY3RDb21wb25lbnRFbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRFbnZpcm9ubWVudCcpO1xudmFyIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL1JlYWN0Q2xhc3MnKTtcbnZhciBSZWFjdEVtcHR5Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9SZWFjdEVtcHR5Q29tcG9uZW50Jyk7XG52YXIgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnLi9SZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXInKTtcbnZhciBSZWFjdE5hdGl2ZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vUmVhY3ROYXRpdmVDb21wb25lbnQnKTtcbnZhciBSZWFjdFVwZGF0ZXMgPSByZXF1aXJlKCcuL1JlYWN0VXBkYXRlcycpO1xuXG52YXIgUmVhY3RJbmplY3Rpb24gPSB7XG4gIENvbXBvbmVudDogUmVhY3RDb21wb25lbnRFbnZpcm9ubWVudC5pbmplY3Rpb24sXG4gIENsYXNzOiBSZWFjdENsYXNzLmluamVjdGlvbixcbiAgRE9NUHJvcGVydHk6IERPTVByb3BlcnR5LmluamVjdGlvbixcbiAgRW1wdHlDb21wb25lbnQ6IFJlYWN0RW1wdHlDb21wb25lbnQuaW5qZWN0aW9uLFxuICBFdmVudFBsdWdpbkh1YjogRXZlbnRQbHVnaW5IdWIuaW5qZWN0aW9uLFxuICBFdmVudFBsdWdpblV0aWxzOiBFdmVudFBsdWdpblV0aWxzLmluamVjdGlvbixcbiAgRXZlbnRFbWl0dGVyOiBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIuaW5qZWN0aW9uLFxuICBOYXRpdmVDb21wb25lbnQ6IFJlYWN0TmF0aXZlQ29tcG9uZW50LmluamVjdGlvbixcbiAgVXBkYXRlczogUmVhY3RVcGRhdGVzLmluamVjdGlvblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEluamVjdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RJbmplY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENhbGxiYWNrUXVldWUgPSByZXF1aXJlKCcuL0NhbGxiYWNrUXVldWUnKTtcbnZhciBQb29sZWRDbGFzcyA9IHJlcXVpcmUoJy4vUG9vbGVkQ2xhc3MnKTtcbnZhciBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL1JlYWN0QnJvd3NlckV2ZW50RW1pdHRlcicpO1xudmFyIFJlYWN0SW5wdXRTZWxlY3Rpb24gPSByZXF1aXJlKCcuL1JlYWN0SW5wdXRTZWxlY3Rpb24nKTtcbnZhciBUcmFuc2FjdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNhY3Rpb24nKTtcblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQsIHdoZW4gcG9zc2libGUsIHRoZSBzZWxlY3Rpb24gcmFuZ2UgKGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0XG4gKiBpbnB1dCkgaXMgbm90IGRpc3R1cmJlZCBieSBwZXJmb3JtaW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAqL1xudmFyIFNFTEVDVElPTl9SRVNUT1JBVElPTiA9IHtcbiAgLyoqXG4gICAqIEByZXR1cm4ge1NlbGVjdGlvbn0gU2VsZWN0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgaW5pdGlhbGl6ZTogUmVhY3RJbnB1dFNlbGVjdGlvbi5nZXRTZWxlY3Rpb25JbmZvcm1hdGlvbixcbiAgLyoqXG4gICAqIEBwYXJhbSB7U2VsZWN0aW9ufSBzZWwgU2VsZWN0aW9uIGluZm9ybWF0aW9uIHJldHVybmVkIGZyb20gYGluaXRpYWxpemVgLlxuICAgKi9cbiAgY2xvc2U6IFJlYWN0SW5wdXRTZWxlY3Rpb24ucmVzdG9yZVNlbGVjdGlvblxufTtcblxuLyoqXG4gKiBTdXBwcmVzc2VzIGV2ZW50cyAoYmx1ci9mb2N1cykgdGhhdCBjb3VsZCBiZSBpbmFkdmVydGVudGx5IGRpc3BhdGNoZWQgZHVlIHRvXG4gKiBoaWdoIGxldmVsIERPTSBtYW5pcHVsYXRpb25zIChsaWtlIHRlbXBvcmFyaWx5IHJlbW92aW5nIGEgdGV4dCBpbnB1dCBmcm9tIHRoZVxuICogRE9NKS5cbiAqL1xudmFyIEVWRU5UX1NVUFBSRVNTSU9OID0ge1xuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIGVuYWJsZWQgc3RhdHVzIG9mIGBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXJgIGJlZm9yZVxuICAgKiB0aGUgcmVjb25jaWxpYXRpb24uXG4gICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRseUVuYWJsZWQgPSBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIuaXNFbmFibGVkKCk7XG4gICAgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVyLnNldEVuYWJsZWQoZmFsc2UpO1xuICAgIHJldHVybiBjdXJyZW50bHlFbmFibGVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZXZpb3VzbHlFbmFibGVkIEVuYWJsZWQgc3RhdHVzIG9mXG4gICAqICAgYFJlYWN0QnJvd3NlckV2ZW50RW1pdHRlcmAgYmVmb3JlIHRoZSByZWNvbmNpbGlhdGlvbiBvY2N1cnJlZC4gYGNsb3NlYFxuICAgKiAgIHJlc3RvcmVzIHRoZSBwcmV2aW91cyB2YWx1ZS5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbiAocHJldmlvdXNseUVuYWJsZWQpIHtcbiAgICBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIuc2V0RW5hYmxlZChwcmV2aW91c2x5RW5hYmxlZCk7XG4gIH1cbn07XG5cbi8qKlxuICogUHJvdmlkZXMgYSBxdWV1ZSBmb3IgY29sbGVjdGluZyBgY29tcG9uZW50RGlkTW91bnRgIGFuZFxuICogYGNvbXBvbmVudERpZFVwZGF0ZWAgY2FsbGJhY2tzIGR1cmluZyB0aGUgdHJhbnNhY3Rpb24uXG4gKi9cbnZhciBPTl9ET01fUkVBRFlfUVVFVUVJTkcgPSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgaW50ZXJuYWwgYG9uRE9NUmVhZHlgIHF1ZXVlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVhY3RNb3VudFJlYWR5LnJlc2V0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFmdGVyIERPTSBpcyBmbHVzaGVkLCBpbnZva2UgYWxsIHJlZ2lzdGVyZWQgYG9uRE9NUmVhZHlgIGNhbGxiYWNrcy5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZWFjdE1vdW50UmVhZHkubm90aWZ5QWxsKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRXhlY3V0ZWQgd2l0aGluIHRoZSBzY29wZSBvZiB0aGUgYFRyYW5zYWN0aW9uYCBpbnN0YW5jZS4gQ29uc2lkZXIgdGhlc2UgYXNcbiAqIGJlaW5nIG1lbWJlciBtZXRob2RzLCBidXQgd2l0aCBhbiBpbXBsaWVkIG9yZGVyaW5nIHdoaWxlIGJlaW5nIGlzb2xhdGVkIGZyb21cbiAqIGVhY2ggb3RoZXIuXG4gKi9cbnZhciBUUkFOU0FDVElPTl9XUkFQUEVSUyA9IFtTRUxFQ1RJT05fUkVTVE9SQVRJT04sIEVWRU5UX1NVUFBSRVNTSU9OLCBPTl9ET01fUkVBRFlfUVVFVUVJTkddO1xuXG4vKipcbiAqIEN1cnJlbnRseTpcbiAqIC0gVGhlIG9yZGVyIHRoYXQgdGhlc2UgYXJlIGxpc3RlZCBpbiB0aGUgdHJhbnNhY3Rpb24gaXMgY3JpdGljYWw6XG4gKiAtIFN1cHByZXNzZXMgZXZlbnRzLlxuICogLSBSZXN0b3JlcyBzZWxlY3Rpb24gcmFuZ2UuXG4gKlxuICogRnV0dXJlOlxuICogLSBSZXN0b3JlIGRvY3VtZW50L292ZXJmbG93IHNjcm9sbCBwb3NpdGlvbnMgdGhhdCB3ZXJlIHVuaW50ZW50aW9uYWxseVxuICogICBtb2RpZmllZCB2aWEgRE9NIGluc2VydGlvbnMgYWJvdmUgdGhlIHRvcCB2aWV3cG9ydCBib3VuZGFyeS5cbiAqIC0gSW1wbGVtZW50L2ludGVncmF0ZSB3aXRoIGN1c3RvbWl6ZWQgY29uc3RyYWludCBiYXNlZCBsYXlvdXQgc3lzdGVtIGFuZCBrZWVwXG4gKiAgIHRyYWNrIG9mIHdoaWNoIGRpbWVuc2lvbnMgbXVzdCBiZSByZW1lYXN1cmVkLlxuICpcbiAqIEBjbGFzcyBSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIFJlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb24odXNlQ3JlYXRlRWxlbWVudCkge1xuICB0aGlzLnJlaW5pdGlhbGl6ZVRyYW5zYWN0aW9uKCk7XG4gIC8vIE9ubHkgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlYWxseSBuZWVkcyB0aGlzIG9wdGlvbiAoc2VlXG4gIC8vIGBSZWFjdFNlcnZlclJlbmRlcmluZ2ApLCBidXQgc2VydmVyLXNpZGUgdXNlc1xuICAvLyBgUmVhY3RTZXJ2ZXJSZW5kZXJpbmdUcmFuc2FjdGlvbmAgaW5zdGVhZC4gVGhpcyBvcHRpb24gaXMgaGVyZSBzbyB0aGF0IGl0J3NcbiAgLy8gYWNjZXNzaWJsZSBhbmQgZGVmYXVsdHMgdG8gZmFsc2Ugd2hlbiBgUmVhY3RET01Db21wb25lbnRgIGFuZFxuICAvLyBgUmVhY3RUZXh0Q29tcG9uZW50YCBjaGVja3MgaXQgaW4gYG1vdW50Q29tcG9uZW50YC5gXG4gIHRoaXMucmVuZGVyVG9TdGF0aWNNYXJrdXAgPSBmYWxzZTtcbiAgdGhpcy5yZWFjdE1vdW50UmVhZHkgPSBDYWxsYmFja1F1ZXVlLmdldFBvb2xlZChudWxsKTtcbiAgdGhpcy51c2VDcmVhdGVFbGVtZW50ID0gdXNlQ3JlYXRlRWxlbWVudDtcbn1cblxudmFyIE1peGluID0ge1xuICAvKipcbiAgICogQHNlZSBUcmFuc2FjdGlvblxuICAgKiBAYWJzdHJhY3RcbiAgICogQGZpbmFsXG4gICAqIEByZXR1cm4ge2FycmF5PG9iamVjdD59IExpc3Qgb2Ygb3BlcmF0aW9uIHdyYXAgcHJvY2VkdXJlcy5cbiAgICogICBUT0RPOiBjb252ZXJ0IHRvIGFycmF5PFRyYW5zYWN0aW9uV3JhcHBlcj5cbiAgICovXG4gIGdldFRyYW5zYWN0aW9uV3JhcHBlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVFJBTlNBQ1RJT05fV1JBUFBFUlM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHF1ZXVlIHRvIGNvbGxlY3QgYG9uRE9NUmVhZHlgIGNhbGxiYWNrcyB3aXRoLlxuICAgKi9cbiAgZ2V0UmVhY3RNb3VudFJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RNb3VudFJlYWR5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgdHJhbnNhY3Rpb24gc3RhdGUgLS0gaWYgdGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgbWV0aG9kIGlzXG4gICAqIHBhc3NlZCB0byBgcm9sbGJhY2tgLCB0aGUgdHJhbnNhY3Rpb24gd2lsbCBiZSByZXNldCB0byB0aGF0IHN0YXRlLlxuICAgKi9cbiAgY2hlY2twb2ludDogZnVuY3Rpb24gKCkge1xuICAgIC8vIHJlYWN0TW91bnRSZWFkeSBpcyB0aGUgb3VyIG9ubHkgc3RhdGVmdWwgd3JhcHBlclxuICAgIHJldHVybiB0aGlzLnJlYWN0TW91bnRSZWFkeS5jaGVja3BvaW50KCk7XG4gIH0sXG5cbiAgcm9sbGJhY2s6IGZ1bmN0aW9uIChjaGVja3BvaW50KSB7XG4gICAgdGhpcy5yZWFjdE1vdW50UmVhZHkucm9sbGJhY2soY2hlY2twb2ludCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIGBQb29sZWRDbGFzc2AgbG9va3MgZm9yIHRoaXMsIGFuZCB3aWxsIGludm9rZSB0aGlzIGJlZm9yZSBhbGxvd2luZyB0aGlzXG4gICAqIGluc3RhbmNlIHRvIGJlIHJldXNlZC5cbiAgICovXG4gIGRlc3RydWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICBDYWxsYmFja1F1ZXVlLnJlbGVhc2UodGhpcy5yZWFjdE1vdW50UmVhZHkpO1xuICAgIHRoaXMucmVhY3RNb3VudFJlYWR5ID0gbnVsbDtcbiAgfVxufTtcblxuX2Fzc2lnbihSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uLnByb3RvdHlwZSwgVHJhbnNhY3Rpb24uTWl4aW4sIE1peGluKTtcblxuUG9vbGVkQ2xhc3MuYWRkUG9vbGluZ1RvKFJlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdElucHV0U2VsZWN0aW9uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RET01TZWxlY3Rpb24gPSByZXF1aXJlKCcuL1JlYWN0RE9NU2VsZWN0aW9uJyk7XG5cbnZhciBjb250YWluc05vZGUgPSByZXF1aXJlKCdmYmpzL2xpYi9jb250YWluc05vZGUnKTtcbnZhciBmb2N1c05vZGUgPSByZXF1aXJlKCdmYmpzL2xpYi9mb2N1c05vZGUnKTtcbnZhciBnZXRBY3RpdmVFbGVtZW50ID0gcmVxdWlyZSgnZmJqcy9saWIvZ2V0QWN0aXZlRWxlbWVudCcpO1xuXG5mdW5jdGlvbiBpc0luRG9jdW1lbnQobm9kZSkge1xuICByZXR1cm4gY29udGFpbnNOb2RlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgbm9kZSk7XG59XG5cbi8qKlxuICogQFJlYWN0SW5wdXRTZWxlY3Rpb246IFJlYWN0IGlucHV0IHNlbGVjdGlvbiBtb2R1bGUuIEJhc2VkIG9uIFNlbGVjdGlvbi5qcyxcbiAqIGJ1dCBtb2RpZmllZCB0byBiZSBzdWl0YWJsZSBmb3IgcmVhY3QgYW5kIGhhcyBhIGNvdXBsZSBvZiBidWcgZml4ZXMgKGRvZXNuJ3RcbiAqIGFzc3VtZSBidXR0b25zIGhhdmUgcmFuZ2Ugc2VsZWN0aW9ucyBhbGxvd2VkKS5cbiAqIElucHV0IHNlbGVjdGlvbiBtb2R1bGUgZm9yIFJlYWN0LlxuICovXG52YXIgUmVhY3RJbnB1dFNlbGVjdGlvbiA9IHtcblxuICBoYXNTZWxlY3Rpb25DYXBhYmlsaXRpZXM6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgdmFyIG5vZGVOYW1lID0gZWxlbSAmJiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbm9kZU5hbWUgJiYgKG5vZGVOYW1lID09PSAnaW5wdXQnICYmIGVsZW0udHlwZSA9PT0gJ3RleHQnIHx8IG5vZGVOYW1lID09PSAndGV4dGFyZWEnIHx8IGVsZW0uY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xuICB9LFxuXG4gIGdldFNlbGVjdGlvbkluZm9ybWF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvY3VzZWRFbGVtID0gZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgIHJldHVybiB7XG4gICAgICBmb2N1c2VkRWxlbTogZm9jdXNlZEVsZW0sXG4gICAgICBzZWxlY3Rpb25SYW5nZTogUmVhY3RJbnB1dFNlbGVjdGlvbi5oYXNTZWxlY3Rpb25DYXBhYmlsaXRpZXMoZm9jdXNlZEVsZW0pID8gUmVhY3RJbnB1dFNlbGVjdGlvbi5nZXRTZWxlY3Rpb24oZm9jdXNlZEVsZW0pIDogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXN0b3JlU2VsZWN0aW9uOiBJZiBhbnkgc2VsZWN0aW9uIGluZm9ybWF0aW9uIHdhcyBwb3RlbnRpYWxseSBsb3N0LFxuICAgKiByZXN0b3JlIGl0LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHBlcmZvcm1pbmcgb3BlcmF0aW9ucyB0aGF0IGNvdWxkIHJlbW92ZSBkb21cbiAgICogbm9kZXMgYW5kIHBsYWNlIHRoZW0gYmFjayBpbiwgcmVzdWx0aW5nIGluIGZvY3VzIGJlaW5nIGxvc3QuXG4gICAqL1xuICByZXN0b3JlU2VsZWN0aW9uOiBmdW5jdGlvbiAocHJpb3JTZWxlY3Rpb25JbmZvcm1hdGlvbikge1xuICAgIHZhciBjdXJGb2N1c2VkRWxlbSA9IGdldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICB2YXIgcHJpb3JGb2N1c2VkRWxlbSA9IHByaW9yU2VsZWN0aW9uSW5mb3JtYXRpb24uZm9jdXNlZEVsZW07XG4gICAgdmFyIHByaW9yU2VsZWN0aW9uUmFuZ2UgPSBwcmlvclNlbGVjdGlvbkluZm9ybWF0aW9uLnNlbGVjdGlvblJhbmdlO1xuICAgIGlmIChjdXJGb2N1c2VkRWxlbSAhPT0gcHJpb3JGb2N1c2VkRWxlbSAmJiBpc0luRG9jdW1lbnQocHJpb3JGb2N1c2VkRWxlbSkpIHtcbiAgICAgIGlmIChSZWFjdElucHV0U2VsZWN0aW9uLmhhc1NlbGVjdGlvbkNhcGFiaWxpdGllcyhwcmlvckZvY3VzZWRFbGVtKSkge1xuICAgICAgICBSZWFjdElucHV0U2VsZWN0aW9uLnNldFNlbGVjdGlvbihwcmlvckZvY3VzZWRFbGVtLCBwcmlvclNlbGVjdGlvblJhbmdlKTtcbiAgICAgIH1cbiAgICAgIGZvY3VzTm9kZShwcmlvckZvY3VzZWRFbGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBnZXRTZWxlY3Rpb246IEdldHMgdGhlIHNlbGVjdGlvbiBib3VuZHMgb2YgYSBmb2N1c2VkIHRleHRhcmVhLCBpbnB1dCBvclxuICAgKiBjb250ZW50RWRpdGFibGUgbm9kZS5cbiAgICogLUBpbnB1dDogTG9vayB1cCBzZWxlY3Rpb24gYm91bmRzIG9mIHRoaXMgaW5wdXRcbiAgICogLUByZXR1cm4ge3N0YXJ0OiBzZWxlY3Rpb25TdGFydCwgZW5kOiBzZWxlY3Rpb25FbmR9XG4gICAqL1xuICBnZXRTZWxlY3Rpb246IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBzZWxlY3Rpb247XG5cbiAgICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCkge1xuICAgICAgLy8gTW9kZXJuIGJyb3dzZXIgd2l0aCBpbnB1dCBvciB0ZXh0YXJlYS5cbiAgICAgIHNlbGVjdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IGlucHV0LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IGlucHV0LnNlbGVjdGlvbkVuZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBpbnB1dC5ub2RlTmFtZSAmJiBpbnB1dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAvLyBJRTggaW5wdXQuXG4gICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgIC8vIFRoZXJlIGNhbiBvbmx5IGJlIG9uZSBzZWxlY3Rpb24gcGVyIGRvY3VtZW50IGluIElFLCBzbyBpdCBtdXN0XG4gICAgICAvLyBiZSBpbiBvdXIgZWxlbWVudC5cbiAgICAgIGlmIChyYW5nZS5wYXJlbnRFbGVtZW50KCkgPT09IGlucHV0KSB7XG4gICAgICAgIHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICBzdGFydDogLXJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLWlucHV0LnZhbHVlLmxlbmd0aCksXG4gICAgICAgICAgZW5kOiAtcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgLWlucHV0LnZhbHVlLmxlbmd0aClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29udGVudCBlZGl0YWJsZSBvciBvbGQgSUUgdGV4dGFyZWEuXG4gICAgICBzZWxlY3Rpb24gPSBSZWFjdERPTVNlbGVjdGlvbi5nZXRPZmZzZXRzKGlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uIHx8IHsgc3RhcnQ6IDAsIGVuZDogMCB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAc2V0U2VsZWN0aW9uOiBTZXRzIHRoZSBzZWxlY3Rpb24gYm91bmRzIG9mIGEgdGV4dGFyZWEgb3IgaW5wdXQgYW5kIGZvY3VzZXNcbiAgICogdGhlIGlucHV0LlxuICAgKiAtQGlucHV0ICAgICBTZXQgc2VsZWN0aW9uIGJvdW5kcyBvZiB0aGlzIGlucHV0IG9yIHRleHRhcmVhXG4gICAqIC1Ab2Zmc2V0cyAgIE9iamVjdCBvZiBzYW1lIGZvcm0gdGhhdCBpcyByZXR1cm5lZCBmcm9tIGdldCpcbiAgICovXG4gIHNldFNlbGVjdGlvbjogZnVuY3Rpb24gKGlucHV0LCBvZmZzZXRzKSB7XG4gICAgdmFyIHN0YXJ0ID0gb2Zmc2V0cy5zdGFydDtcbiAgICB2YXIgZW5kID0gb2Zmc2V0cy5lbmQ7XG4gICAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmQgPSBzdGFydDtcbiAgICB9XG5cbiAgICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCkge1xuICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IE1hdGgubWluKGVuZCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBpbnB1dC5ub2RlTmFtZSAmJiBpbnB1dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBpbnB1dC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBzdGFydCk7XG4gICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBlbmQgLSBzdGFydCk7XG4gICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3RET01TZWxlY3Rpb24uc2V0T2Zmc2V0cyhpbnB1dCwgb2Zmc2V0cyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0SW5wdXRTZWxlY3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0SW5wdXRTZWxlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTVNlbGVjdGlvblxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZmJqcy9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIGdldE5vZGVGb3JDaGFyYWN0ZXJPZmZzZXQgPSByZXF1aXJlKCcuL2dldE5vZGVGb3JDaGFyYWN0ZXJPZmZzZXQnKTtcbnZhciBnZXRUZXh0Q29udGVudEFjY2Vzc29yID0gcmVxdWlyZSgnLi9nZXRUZXh0Q29udGVudEFjY2Vzc29yJyk7XG5cbi8qKlxuICogV2hpbGUgYGlzQ29sbGFwc2VkYCBpcyBhdmFpbGFibGUgb24gdGhlIFNlbGVjdGlvbiBvYmplY3QgYW5kIGBjb2xsYXBzZWRgXG4gKiBpcyBhdmFpbGFibGUgb24gdGhlIFJhbmdlIG9iamVjdCwgSUUxMSBzb21ldGltZXMgZ2V0cyB0aGVtIHdyb25nLlxuICogSWYgdGhlIGFuY2hvci9mb2N1cyBub2RlcyBhbmQgb2Zmc2V0cyBhcmUgdGhlIHNhbWUsIHRoZSByYW5nZSBpcyBjb2xsYXBzZWQuXG4gKi9cbmZ1bmN0aW9uIGlzQ29sbGFwc2VkKGFuY2hvck5vZGUsIGFuY2hvck9mZnNldCwgZm9jdXNOb2RlLCBmb2N1c09mZnNldCkge1xuICByZXR1cm4gYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmIGFuY2hvck9mZnNldCA9PT0gZm9jdXNPZmZzZXQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBhcHByb3ByaWF0ZSBhbmNob3IgYW5kIGZvY3VzIG5vZGUvb2Zmc2V0IHBhaXJzIGZvciBJRS5cbiAqXG4gKiBUaGUgY2F0Y2ggaGVyZSBpcyB0aGF0IElFJ3Mgc2VsZWN0aW9uIEFQSSBkb2Vzbid0IHByb3ZpZGUgaW5mb3JtYXRpb25cbiAqIGFib3V0IHdoZXRoZXIgdGhlIHNlbGVjdGlvbiBpcyBmb3J3YXJkIG9yIGJhY2t3YXJkLCBzbyB3ZSBoYXZlIHRvXG4gKiBiZWhhdmUgYXMgdGhvdWdoIGl0J3MgYWx3YXlzIGZvcndhcmQuXG4gKlxuICogSUUgdGV4dCBkaWZmZXJzIGZyb20gbW9kZXJuIHNlbGVjdGlvbiBpbiB0aGF0IGl0IGJlaGF2ZXMgYXMgdGhvdWdoXG4gKiBibG9jayBlbGVtZW50cyBlbmQgd2l0aCBhIG5ldyBsaW5lLiBUaGlzIG1lYW5zIGNoYXJhY3RlciBvZmZzZXRzIHdpbGxcbiAqIGRpZmZlciBiZXR3ZWVuIHRoZSB0d28gQVBJcy5cbiAqXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0SUVPZmZzZXRzKG5vZGUpIHtcbiAgdmFyIHNlbGVjdGlvbiA9IGRvY3VtZW50LnNlbGVjdGlvbjtcbiAgdmFyIHNlbGVjdGVkUmFuZ2UgPSBzZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgdmFyIHNlbGVjdGVkTGVuZ3RoID0gc2VsZWN0ZWRSYW5nZS50ZXh0Lmxlbmd0aDtcblxuICAvLyBEdXBsaWNhdGUgc2VsZWN0aW9uIHNvIHdlIGNhbiBtb3ZlIHJhbmdlIHdpdGhvdXQgYnJlYWtpbmcgdXNlciBzZWxlY3Rpb24uXG4gIHZhciBmcm9tU3RhcnQgPSBzZWxlY3RlZFJhbmdlLmR1cGxpY2F0ZSgpO1xuICBmcm9tU3RhcnQubW92ZVRvRWxlbWVudFRleHQobm9kZSk7XG4gIGZyb21TdGFydC5zZXRFbmRQb2ludCgnRW5kVG9TdGFydCcsIHNlbGVjdGVkUmFuZ2UpO1xuXG4gIHZhciBzdGFydE9mZnNldCA9IGZyb21TdGFydC50ZXh0Lmxlbmd0aDtcbiAgdmFyIGVuZE9mZnNldCA9IHN0YXJ0T2Zmc2V0ICsgc2VsZWN0ZWRMZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydDogc3RhcnRPZmZzZXQsXG4gICAgZW5kOiBlbmRPZmZzZXRcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4gez9vYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldE1vZGVybk9mZnNldHMobm9kZSkge1xuICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgaWYgKCFzZWxlY3Rpb24gfHwgc2VsZWN0aW9uLnJhbmdlQ291bnQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBhbmNob3JOb2RlID0gc2VsZWN0aW9uLmFuY2hvck5vZGU7XG4gIHZhciBhbmNob3JPZmZzZXQgPSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICB2YXIgZm9jdXNOb2RlID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcbiAgdmFyIGZvY3VzT2Zmc2V0ID0gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuXG4gIHZhciBjdXJyZW50UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcblxuICAvLyBJbiBGaXJlZm94LCByYW5nZS5zdGFydENvbnRhaW5lciBhbmQgcmFuZ2UuZW5kQ29udGFpbmVyIGNhbiBiZSBcImFub255bW91c1xuICAvLyBkaXZzXCIsIGUuZy4gdGhlIHVwL2Rvd24gYnV0dG9ucyBvbiBhbiA8aW5wdXQgdHlwZT1cIm51bWJlclwiPi4gQW5vbnltb3VzXG4gIC8vIGRpdnMgZG8gbm90IHNlZW0gdG8gZXhwb3NlIHByb3BlcnRpZXMsIHRyaWdnZXJpbmcgYSBcIlBlcm1pc3Npb24gZGVuaWVkXG4gIC8vIGVycm9yXCIgaWYgYW55IG9mIGl0cyBwcm9wZXJ0aWVzIGFyZSBhY2Nlc3NlZC4gVGhlIG9ubHkgc2VlbWluZ2x5IHBvc3NpYmxlXG4gIC8vIHdheSB0byBhdm9pZCBlcnJvcmluZyBpcyB0byBhY2Nlc3MgYSBwcm9wZXJ0eSB0aGF0IHR5cGljYWxseSB3b3JrcyBmb3JcbiAgLy8gbm9uLWFub255bW91cyBkaXZzIGFuZCBjYXRjaCBhbnkgZXJyb3IgdGhhdCBtYXkgb3RoZXJ3aXNlIGFyaXNlLiBTZWVcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjA4NDI3XG4gIHRyeSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgY3VycmVudFJhbmdlLnN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlO1xuICAgIGN1cnJlbnRSYW5nZS5lbmRDb250YWluZXIubm9kZVR5cGU7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gSWYgdGhlIG5vZGUgYW5kIG9mZnNldCB2YWx1ZXMgYXJlIHRoZSBzYW1lLCB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZC5cbiAgLy8gYFNlbGVjdGlvbi5pc0NvbGxhcHNlZGAgaXMgYXZhaWxhYmxlIG5hdGl2ZWx5LCBidXQgSUUgc29tZXRpbWVzIGdldHNcbiAgLy8gdGhpcyB2YWx1ZSB3cm9uZy5cbiAgdmFyIGlzU2VsZWN0aW9uQ29sbGFwc2VkID0gaXNDb2xsYXBzZWQoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQsIHNlbGVjdGlvbi5mb2N1c05vZGUsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XG5cbiAgdmFyIHJhbmdlTGVuZ3RoID0gaXNTZWxlY3Rpb25Db2xsYXBzZWQgPyAwIDogY3VycmVudFJhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xuXG4gIHZhciB0ZW1wUmFuZ2UgPSBjdXJyZW50UmFuZ2UuY2xvbmVSYW5nZSgpO1xuICB0ZW1wUmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xuICB0ZW1wUmFuZ2Uuc2V0RW5kKGN1cnJlbnRSYW5nZS5zdGFydENvbnRhaW5lciwgY3VycmVudFJhbmdlLnN0YXJ0T2Zmc2V0KTtcblxuICB2YXIgaXNUZW1wUmFuZ2VDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZCh0ZW1wUmFuZ2Uuc3RhcnRDb250YWluZXIsIHRlbXBSYW5nZS5zdGFydE9mZnNldCwgdGVtcFJhbmdlLmVuZENvbnRhaW5lciwgdGVtcFJhbmdlLmVuZE9mZnNldCk7XG5cbiAgdmFyIHN0YXJ0ID0gaXNUZW1wUmFuZ2VDb2xsYXBzZWQgPyAwIDogdGVtcFJhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xuICB2YXIgZW5kID0gc3RhcnQgKyByYW5nZUxlbmd0aDtcblxuICAvLyBEZXRlY3Qgd2hldGhlciB0aGUgc2VsZWN0aW9uIGlzIGJhY2t3YXJkLlxuICB2YXIgZGV0ZWN0aW9uUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBkZXRlY3Rpb25SYW5nZS5zZXRTdGFydChhbmNob3JOb2RlLCBhbmNob3JPZmZzZXQpO1xuICBkZXRlY3Rpb25SYW5nZS5zZXRFbmQoZm9jdXNOb2RlLCBmb2N1c09mZnNldCk7XG4gIHZhciBpc0JhY2t3YXJkID0gZGV0ZWN0aW9uUmFuZ2UuY29sbGFwc2VkO1xuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IGlzQmFja3dhcmQgPyBlbmQgOiBzdGFydCxcbiAgICBlbmQ6IGlzQmFja3dhcmQgPyBzdGFydCA6IGVuZFxuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RE9NRWxlbWVudHxET01UZXh0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IG9mZnNldHNcbiAqL1xuZnVuY3Rpb24gc2V0SUVPZmZzZXRzKG5vZGUsIG9mZnNldHMpIHtcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuZHVwbGljYXRlKCk7XG4gIHZhciBzdGFydCwgZW5kO1xuXG4gIGlmIChvZmZzZXRzLmVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSBvZmZzZXRzLnN0YXJ0O1xuICAgIGVuZCA9IHN0YXJ0O1xuICB9IGVsc2UgaWYgKG9mZnNldHMuc3RhcnQgPiBvZmZzZXRzLmVuZCkge1xuICAgIHN0YXJ0ID0gb2Zmc2V0cy5lbmQ7XG4gICAgZW5kID0gb2Zmc2V0cy5zdGFydDtcbiAgfSBlbHNlIHtcbiAgICBzdGFydCA9IG9mZnNldHMuc3RhcnQ7XG4gICAgZW5kID0gb2Zmc2V0cy5lbmQ7XG4gIH1cblxuICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChub2RlKTtcbiAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBzdGFydCk7XG4gIHJhbmdlLnNldEVuZFBvaW50KCdFbmRUb1N0YXJ0JywgcmFuZ2UpO1xuICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBlbmQgLSBzdGFydCk7XG4gIHJhbmdlLnNlbGVjdCgpO1xufVxuXG4vKipcbiAqIEluIG1vZGVybiBub24tSUUgYnJvd3NlcnMsIHdlIGNhbiBzdXBwb3J0IGJvdGggZm9yd2FyZCBhbmQgYmFja3dhcmRcbiAqIHNlbGVjdGlvbnMuXG4gKlxuICogTm90ZTogSUUxMCsgc3VwcG9ydHMgdGhlIFNlbGVjdGlvbiBvYmplY3QsIGJ1dCBpdCBkb2VzIG5vdCBzdXBwb3J0XG4gKiB0aGUgYGV4dGVuZGAgbWV0aG9kLCB3aGljaCBtZWFucyB0aGF0IGV2ZW4gaW4gbW9kZXJuIElFLCBpdCdzIG5vdCBwb3NzaWJsZVxuICogdG8gcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSBiYWNrd2FyZCBzZWxlY3Rpb24uIFRodXMsIGZvciBhbGwgSUVcbiAqIHZlcnNpb25zLCB3ZSB1c2UgdGhlIG9sZCBJRSBBUEkgdG8gY3JlYXRlIG91ciBzZWxlY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7RE9NRWxlbWVudHxET01UZXh0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IG9mZnNldHNcbiAqL1xuZnVuY3Rpb24gc2V0TW9kZXJuT2Zmc2V0cyhub2RlLCBvZmZzZXRzKSB7XG4gIGlmICghd2luZG93LmdldFNlbGVjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gIHZhciBsZW5ndGggPSBub2RlW2dldFRleHRDb250ZW50QWNjZXNzb3IoKV0ubGVuZ3RoO1xuICB2YXIgc3RhcnQgPSBNYXRoLm1pbihvZmZzZXRzLnN0YXJ0LCBsZW5ndGgpO1xuICB2YXIgZW5kID0gb2Zmc2V0cy5lbmQgPT09IHVuZGVmaW5lZCA/IHN0YXJ0IDogTWF0aC5taW4ob2Zmc2V0cy5lbmQsIGxlbmd0aCk7XG5cbiAgLy8gSUUgMTEgdXNlcyBtb2Rlcm4gc2VsZWN0aW9uLCBidXQgZG9lc24ndCBzdXBwb3J0IHRoZSBleHRlbmQgbWV0aG9kLlxuICAvLyBGbGlwIGJhY2t3YXJkIHNlbGVjdGlvbnMsIHNvIHdlIGNhbiBzZXQgd2l0aCBhIHNpbmdsZSByYW5nZS5cbiAgaWYgKCFzZWxlY3Rpb24uZXh0ZW5kICYmIHN0YXJ0ID4gZW5kKSB7XG4gICAgdmFyIHRlbXAgPSBlbmQ7XG4gICAgZW5kID0gc3RhcnQ7XG4gICAgc3RhcnQgPSB0ZW1wO1xuICB9XG5cbiAgdmFyIHN0YXJ0TWFya2VyID0gZ2V0Tm9kZUZvckNoYXJhY3Rlck9mZnNldChub2RlLCBzdGFydCk7XG4gIHZhciBlbmRNYXJrZXIgPSBnZXROb2RlRm9yQ2hhcmFjdGVyT2Zmc2V0KG5vZGUsIGVuZCk7XG5cbiAgaWYgKHN0YXJ0TWFya2VyICYmIGVuZE1hcmtlcikge1xuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnRNYXJrZXIubm9kZSwgc3RhcnRNYXJrZXIub2Zmc2V0KTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICBzZWxlY3Rpb24uZXh0ZW5kKGVuZE1hcmtlci5ub2RlLCBlbmRNYXJrZXIub2Zmc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2Uuc2V0RW5kKGVuZE1hcmtlci5ub2RlLCBlbmRNYXJrZXIub2Zmc2V0KTtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciB1c2VJRU9mZnNldHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gJiYgJ3NlbGVjdGlvbicgaW4gZG9jdW1lbnQgJiYgISgnZ2V0U2VsZWN0aW9uJyBpbiB3aW5kb3cpO1xuXG52YXIgUmVhY3RET01TZWxlY3Rpb24gPSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcbiAgICovXG4gIGdldE9mZnNldHM6IHVzZUlFT2Zmc2V0cyA/IGdldElFT2Zmc2V0cyA6IGdldE1vZGVybk9mZnNldHMsXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudHxET01UZXh0Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gb2Zmc2V0c1xuICAgKi9cbiAgc2V0T2Zmc2V0czogdXNlSUVPZmZzZXRzID8gc2V0SUVPZmZzZXRzIDogc2V0TW9kZXJuT2Zmc2V0c1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTVNlbGVjdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01TZWxlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXROb2RlRm9yQ2hhcmFjdGVyT2Zmc2V0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEdpdmVuIGFueSBub2RlIHJldHVybiB0aGUgZmlyc3QgbGVhZiBub2RlIHdpdGhvdXQgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fERPTVRleHROb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtET01FbGVtZW50fERPTVRleHROb2RlfVxuICovXG5cbmZ1bmN0aW9uIGdldExlYWZOb2RlKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUgJiYgbm9kZS5maXJzdENoaWxkKSB7XG4gICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG5leHQgc2libGluZyB3aXRoaW4gYSBjb250YWluZXIuIFRoaXMgd2lsbCB3YWxrIHVwIHRoZVxuICogRE9NIGlmIGEgbm9kZSdzIHNpYmxpbmdzIGhhdmUgYmVlbiBleGhhdXN0ZWQuXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fERPTVRleHROb2RlfSBub2RlXG4gKiBAcmV0dXJuIHs/RE9NRWxlbWVudHxET01UZXh0Tm9kZX1cbiAqL1xuZnVuY3Rpb24gZ2V0U2libGluZ05vZGUobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBvYmplY3QgZGVzY3JpYmluZyB0aGUgbm9kZXMgd2hpY2ggY29udGFpbiBjaGFyYWN0ZXJzIGF0IG9mZnNldC5cbiAqXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR8RE9NVGV4dE5vZGV9IHJvb3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEByZXR1cm4gez9vYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVGb3JDaGFyYWN0ZXJPZmZzZXQocm9vdCwgb2Zmc2V0KSB7XG4gIHZhciBub2RlID0gZ2V0TGVhZk5vZGUocm9vdCk7XG4gIHZhciBub2RlU3RhcnQgPSAwO1xuICB2YXIgbm9kZUVuZCA9IDA7XG5cbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgbm9kZUVuZCA9IG5vZGVTdGFydCArIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZVN0YXJ0IDw9IG9mZnNldCAmJiBub2RlRW5kID49IG9mZnNldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQgLSBub2RlU3RhcnRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbm9kZVN0YXJ0ID0gbm9kZUVuZDtcbiAgICB9XG5cbiAgICBub2RlID0gZ2V0TGVhZk5vZGUoZ2V0U2libGluZ05vZGUobm9kZSkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Tm9kZUZvckNoYXJhY3Rlck9mZnNldDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvZ2V0Tm9kZUZvckNoYXJhY3Rlck9mZnNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxudmFyIGlzVGV4dE5vZGUgPSByZXF1aXJlKCcuL2lzVGV4dE5vZGUnKTtcblxuLyplc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gRE9NIG5vZGUgY29udGFpbnMgb3IgaXMgYW5vdGhlciBET00gbm9kZS5cbiAqL1xuZnVuY3Rpb24gY29udGFpbnNOb2RlKG91dGVyTm9kZSwgaW5uZXJOb2RlKSB7XG4gIGlmICghb3V0ZXJOb2RlIHx8ICFpbm5lck5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAob3V0ZXJOb2RlID09PSBpbm5lck5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc1RleHROb2RlKG91dGVyTm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaXNUZXh0Tm9kZShpbm5lck5vZGUpKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5zTm9kZShvdXRlck5vZGUsIGlubmVyTm9kZS5wYXJlbnROb2RlKTtcbiAgfSBlbHNlIGlmICgnY29udGFpbnMnIGluIG91dGVyTm9kZSkge1xuICAgIHJldHVybiBvdXRlck5vZGUuY29udGFpbnMoaW5uZXJOb2RlKTtcbiAgfSBlbHNlIGlmIChvdXRlck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICByZXR1cm4gISEob3V0ZXJOb2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGlubmVyTm9kZSkgJiAxNik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbnNOb2RlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2NvbnRhaW5zTm9kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9pc05vZGUnKTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIG9iamVjdCBpcyBhIERPTSB0ZXh0IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGlzVGV4dE5vZGUob2JqZWN0KSB7XG4gIHJldHVybiBpc05vZGUob2JqZWN0KSAmJiBvYmplY3Qubm9kZVR5cGUgPT0gMztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1RleHROb2RlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2lzVGV4dE5vZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIG9iamVjdCBpcyBhIERPTSBub2RlLlxuICovXG5mdW5jdGlvbiBpc05vZGUob2JqZWN0KSB7XG4gIHJldHVybiAhIShvYmplY3QgJiYgKHR5cGVvZiBOb2RlID09PSAnZnVuY3Rpb24nID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZSA6IHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOb2RlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2lzTm9kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmYi13d3cvdHlwZW9mLXVuZGVmaW5lZCAqL1xuXG4vKipcbiAqIFNhbWUgYXMgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBidXQgd3JhcHMgaW4gYSB0cnktY2F0Y2ggYmxvY2suIEluIElFIGl0IGlzXG4gKiBub3Qgc2FmZSB0byBjYWxsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaWYgdGhlcmUgaXMgbm90aGluZyBmb2N1c2VkLlxuICpcbiAqIFRoZSBhY3RpdmVFbGVtZW50IHdpbGwgYmUgbnVsbCBvbmx5IGlmIHRoZSBkb2N1bWVudCBvciBkb2N1bWVudCBib2R5IGlzIG5vdFxuICogeWV0IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoKSAvKj9ET01FbGVtZW50Ki97XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBY3RpdmVFbGVtZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2dldEFjdGl2ZUVsZW1lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTVkdET01Qcm9wZXJ0eUNvbmZpZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIE5TID0ge1xuICB4bGluazogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLFxuICB4bWw6ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnXG59O1xuXG4vLyBXZSB1c2UgYXR0cmlidXRlcyBmb3IgZXZlcnl0aGluZyBTVkcgc28gbGV0J3MgYXZvaWQgc29tZSBkdXBsaWNhdGlvbiBhbmQgcnVuXG4vLyBjb2RlIGluc3RlYWQuXG4vLyBUaGUgZm9sbG93aW5nIGFyZSBhbGwgc3BlY2lmaWVkIGluIHRoZSBIVE1MIGNvbmZpZyBhbHJlYWR5IHNvIHdlIGV4Y2x1ZGUgaGVyZS5cbi8vIC0gY2xhc3MgKGFzIGNsYXNzTmFtZSlcbi8vIC0gY29sb3Jcbi8vIC0gaGVpZ2h0XG4vLyAtIGlkXG4vLyAtIGxhbmdcbi8vIC0gbWF4XG4vLyAtIG1lZGlhXG4vLyAtIG1ldGhvZFxuLy8gLSBtaW5cbi8vIC0gbmFtZVxuLy8gLSBzdHlsZVxuLy8gLSB0YXJnZXRcbi8vIC0gdHlwZVxuLy8gLSB3aWR0aFxudmFyIEFUVFJTID0ge1xuICBhY2NlbnRIZWlnaHQ6ICdhY2NlbnQtaGVpZ2h0JyxcbiAgYWNjdW11bGF0ZTogMCxcbiAgYWRkaXRpdmU6IDAsXG4gIGFsaWdubWVudEJhc2VsaW5lOiAnYWxpZ25tZW50LWJhc2VsaW5lJyxcbiAgYWxsb3dSZW9yZGVyOiAnYWxsb3dSZW9yZGVyJyxcbiAgYWxwaGFiZXRpYzogMCxcbiAgYW1wbGl0dWRlOiAwLFxuICBhcmFiaWNGb3JtOiAnYXJhYmljLWZvcm0nLFxuICBhc2NlbnQ6IDAsXG4gIGF0dHJpYnV0ZU5hbWU6ICdhdHRyaWJ1dGVOYW1lJyxcbiAgYXR0cmlidXRlVHlwZTogJ2F0dHJpYnV0ZVR5cGUnLFxuICBhdXRvUmV2ZXJzZTogJ2F1dG9SZXZlcnNlJyxcbiAgYXppbXV0aDogMCxcbiAgYmFzZUZyZXF1ZW5jeTogJ2Jhc2VGcmVxdWVuY3knLFxuICBiYXNlUHJvZmlsZTogJ2Jhc2VQcm9maWxlJyxcbiAgYmFzZWxpbmVTaGlmdDogJ2Jhc2VsaW5lLXNoaWZ0JyxcbiAgYmJveDogMCxcbiAgYmVnaW46IDAsXG4gIGJpYXM6IDAsXG4gIGJ5OiAwLFxuICBjYWxjTW9kZTogJ2NhbGNNb2RlJyxcbiAgY2FwSGVpZ2h0OiAnY2FwLWhlaWdodCcsXG4gIGNsaXA6IDAsXG4gIGNsaXBQYXRoOiAnY2xpcC1wYXRoJyxcbiAgY2xpcFJ1bGU6ICdjbGlwLXJ1bGUnLFxuICBjbGlwUGF0aFVuaXRzOiAnY2xpcFBhdGhVbml0cycsXG4gIGNvbG9ySW50ZXJwb2xhdGlvbjogJ2NvbG9yLWludGVycG9sYXRpb24nLFxuICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJyxcbiAgY29sb3JQcm9maWxlOiAnY29sb3ItcHJvZmlsZScsXG4gIGNvbG9yUmVuZGVyaW5nOiAnY29sb3ItcmVuZGVyaW5nJyxcbiAgY29udGVudFNjcmlwdFR5cGU6ICdjb250ZW50U2NyaXB0VHlwZScsXG4gIGNvbnRlbnRTdHlsZVR5cGU6ICdjb250ZW50U3R5bGVUeXBlJyxcbiAgY3Vyc29yOiAwLFxuICBjeDogMCxcbiAgY3k6IDAsXG4gIGQ6IDAsXG4gIGRlY2VsZXJhdGU6IDAsXG4gIGRlc2NlbnQ6IDAsXG4gIGRpZmZ1c2VDb25zdGFudDogJ2RpZmZ1c2VDb25zdGFudCcsXG4gIGRpcmVjdGlvbjogMCxcbiAgZGlzcGxheTogMCxcbiAgZGl2aXNvcjogMCxcbiAgZG9taW5hbnRCYXNlbGluZTogJ2RvbWluYW50LWJhc2VsaW5lJyxcbiAgZHVyOiAwLFxuICBkeDogMCxcbiAgZHk6IDAsXG4gIGVkZ2VNb2RlOiAnZWRnZU1vZGUnLFxuICBlbGV2YXRpb246IDAsXG4gIGVuYWJsZUJhY2tncm91bmQ6ICdlbmFibGUtYmFja2dyb3VuZCcsXG4gIGVuZDogMCxcbiAgZXhwb25lbnQ6IDAsXG4gIGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQ6ICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJyxcbiAgZmlsbDogMCxcbiAgZmlsbE9wYWNpdHk6ICdmaWxsLW9wYWNpdHknLFxuICBmaWxsUnVsZTogJ2ZpbGwtcnVsZScsXG4gIGZpbHRlcjogMCxcbiAgZmlsdGVyUmVzOiAnZmlsdGVyUmVzJyxcbiAgZmlsdGVyVW5pdHM6ICdmaWx0ZXJVbml0cycsXG4gIGZsb29kQ29sb3I6ICdmbG9vZC1jb2xvcicsXG4gIGZsb29kT3BhY2l0eTogJ2Zsb29kLW9wYWNpdHknLFxuICBmb2N1c2FibGU6IDAsXG4gIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScsXG4gIGZvbnRTaXplOiAnZm9udC1zaXplJyxcbiAgZm9udFNpemVBZGp1c3Q6ICdmb250LXNpemUtYWRqdXN0JyxcbiAgZm9udFN0cmV0Y2g6ICdmb250LXN0cmV0Y2gnLFxuICBmb250U3R5bGU6ICdmb250LXN0eWxlJyxcbiAgZm9udFZhcmlhbnQ6ICdmb250LXZhcmlhbnQnLFxuICBmb250V2VpZ2h0OiAnZm9udC13ZWlnaHQnLFxuICBmb3JtYXQ6IDAsXG4gIGZyb206IDAsXG4gIGZ4OiAwLFxuICBmeTogMCxcbiAgZzE6IDAsXG4gIGcyOiAwLFxuICBnbHlwaE5hbWU6ICdnbHlwaC1uYW1lJyxcbiAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6ICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJyxcbiAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnLFxuICBnbHlwaFJlZjogJ2dseXBoUmVmJyxcbiAgZ3JhZGllbnRUcmFuc2Zvcm06ICdncmFkaWVudFRyYW5zZm9ybScsXG4gIGdyYWRpZW50VW5pdHM6ICdncmFkaWVudFVuaXRzJyxcbiAgaGFuZ2luZzogMCxcbiAgaG9yaXpBZHZYOiAnaG9yaXotYWR2LXgnLFxuICBob3Jpek9yaWdpblg6ICdob3Jpei1vcmlnaW4teCcsXG4gIGlkZW9ncmFwaGljOiAwLFxuICBpbWFnZVJlbmRlcmluZzogJ2ltYWdlLXJlbmRlcmluZycsXG4gICdpbic6IDAsXG4gIGluMjogMCxcbiAgaW50ZXJjZXB0OiAwLFxuICBrOiAwLFxuICBrMTogMCxcbiAgazI6IDAsXG4gIGszOiAwLFxuICBrNDogMCxcbiAga2VybmVsTWF0cml4OiAna2VybmVsTWF0cml4JyxcbiAga2VybmVsVW5pdExlbmd0aDogJ2tlcm5lbFVuaXRMZW5ndGgnLFxuICBrZXJuaW5nOiAwLFxuICBrZXlQb2ludHM6ICdrZXlQb2ludHMnLFxuICBrZXlTcGxpbmVzOiAna2V5U3BsaW5lcycsXG4gIGtleVRpbWVzOiAna2V5VGltZXMnLFxuICBsZW5ndGhBZGp1c3Q6ICdsZW5ndGhBZGp1c3QnLFxuICBsZXR0ZXJTcGFjaW5nOiAnbGV0dGVyLXNwYWNpbmcnLFxuICBsaWdodGluZ0NvbG9yOiAnbGlnaHRpbmctY29sb3InLFxuICBsaW1pdGluZ0NvbmVBbmdsZTogJ2xpbWl0aW5nQ29uZUFuZ2xlJyxcbiAgbG9jYWw6IDAsXG4gIG1hcmtlckVuZDogJ21hcmtlci1lbmQnLFxuICBtYXJrZXJNaWQ6ICdtYXJrZXItbWlkJyxcbiAgbWFya2VyU3RhcnQ6ICdtYXJrZXItc3RhcnQnLFxuICBtYXJrZXJIZWlnaHQ6ICdtYXJrZXJIZWlnaHQnLFxuICBtYXJrZXJVbml0czogJ21hcmtlclVuaXRzJyxcbiAgbWFya2VyV2lkdGg6ICdtYXJrZXJXaWR0aCcsXG4gIG1hc2s6IDAsXG4gIG1hc2tDb250ZW50VW5pdHM6ICdtYXNrQ29udGVudFVuaXRzJyxcbiAgbWFza1VuaXRzOiAnbWFza1VuaXRzJyxcbiAgbWF0aGVtYXRpY2FsOiAwLFxuICBtb2RlOiAwLFxuICBudW1PY3RhdmVzOiAnbnVtT2N0YXZlcycsXG4gIG9mZnNldDogMCxcbiAgb3BhY2l0eTogMCxcbiAgb3BlcmF0b3I6IDAsXG4gIG9yZGVyOiAwLFxuICBvcmllbnQ6IDAsXG4gIG9yaWVudGF0aW9uOiAwLFxuICBvcmlnaW46IDAsXG4gIG92ZXJmbG93OiAwLFxuICBvdmVybGluZVBvc2l0aW9uOiAnb3ZlcmxpbmUtcG9zaXRpb24nLFxuICBvdmVybGluZVRoaWNrbmVzczogJ292ZXJsaW5lLXRoaWNrbmVzcycsXG4gIHBhaW50T3JkZXI6ICdwYWludC1vcmRlcicsXG4gIHBhbm9zZTE6ICdwYW5vc2UtMScsXG4gIHBhdGhMZW5ndGg6ICdwYXRoTGVuZ3RoJyxcbiAgcGF0dGVybkNvbnRlbnRVbml0czogJ3BhdHRlcm5Db250ZW50VW5pdHMnLFxuICBwYXR0ZXJuVHJhbnNmb3JtOiAncGF0dGVyblRyYW5zZm9ybScsXG4gIHBhdHRlcm5Vbml0czogJ3BhdHRlcm5Vbml0cycsXG4gIHBvaW50ZXJFdmVudHM6ICdwb2ludGVyLWV2ZW50cycsXG4gIHBvaW50czogMCxcbiAgcG9pbnRzQXRYOiAncG9pbnRzQXRYJyxcbiAgcG9pbnRzQXRZOiAncG9pbnRzQXRZJyxcbiAgcG9pbnRzQXRaOiAncG9pbnRzQXRaJyxcbiAgcHJlc2VydmVBbHBoYTogJ3ByZXNlcnZlQWxwaGEnLFxuICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAncHJlc2VydmVBc3BlY3RSYXRpbycsXG4gIHByaW1pdGl2ZVVuaXRzOiAncHJpbWl0aXZlVW5pdHMnLFxuICByOiAwLFxuICByYWRpdXM6IDAsXG4gIHJlZlg6ICdyZWZYJyxcbiAgcmVmWTogJ3JlZlknLFxuICByZW5kZXJpbmdJbnRlbnQ6ICdyZW5kZXJpbmctaW50ZW50JyxcbiAgcmVwZWF0Q291bnQ6ICdyZXBlYXRDb3VudCcsXG4gIHJlcGVhdER1cjogJ3JlcGVhdER1cicsXG4gIHJlcXVpcmVkRXh0ZW5zaW9uczogJ3JlcXVpcmVkRXh0ZW5zaW9ucycsXG4gIHJlcXVpcmVkRmVhdHVyZXM6ICdyZXF1aXJlZEZlYXR1cmVzJyxcbiAgcmVzdGFydDogMCxcbiAgcmVzdWx0OiAwLFxuICByb3RhdGU6IDAsXG4gIHJ4OiAwLFxuICByeTogMCxcbiAgc2NhbGU6IDAsXG4gIHNlZWQ6IDAsXG4gIHNoYXBlUmVuZGVyaW5nOiAnc2hhcGUtcmVuZGVyaW5nJyxcbiAgc2xvcGU6IDAsXG4gIHNwYWNpbmc6IDAsXG4gIHNwZWN1bGFyQ29uc3RhbnQ6ICdzcGVjdWxhckNvbnN0YW50JyxcbiAgc3BlY3VsYXJFeHBvbmVudDogJ3NwZWN1bGFyRXhwb25lbnQnLFxuICBzcGVlZDogMCxcbiAgc3ByZWFkTWV0aG9kOiAnc3ByZWFkTWV0aG9kJyxcbiAgc3RhcnRPZmZzZXQ6ICdzdGFydE9mZnNldCcsXG4gIHN0ZERldmlhdGlvbjogJ3N0ZERldmlhdGlvbicsXG4gIHN0ZW1oOiAwLFxuICBzdGVtdjogMCxcbiAgc3RpdGNoVGlsZXM6ICdzdGl0Y2hUaWxlcycsXG4gIHN0b3BDb2xvcjogJ3N0b3AtY29sb3InLFxuICBzdG9wT3BhY2l0eTogJ3N0b3Atb3BhY2l0eScsXG4gIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nLFxuICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnLFxuICBzdHJpbmc6IDAsXG4gIHN0cm9rZTogMCxcbiAgc3Ryb2tlRGFzaGFycmF5OiAnc3Ryb2tlLWRhc2hhcnJheScsXG4gIHN0cm9rZURhc2hvZmZzZXQ6ICdzdHJva2UtZGFzaG9mZnNldCcsXG4gIHN0cm9rZUxpbmVjYXA6ICdzdHJva2UtbGluZWNhcCcsXG4gIHN0cm9rZUxpbmVqb2luOiAnc3Ryb2tlLWxpbmVqb2luJyxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogJ3N0cm9rZS1taXRlcmxpbWl0JyxcbiAgc3Ryb2tlT3BhY2l0eTogJ3N0cm9rZS1vcGFjaXR5JyxcbiAgc3Ryb2tlV2lkdGg6ICdzdHJva2Utd2lkdGgnLFxuICBzdXJmYWNlU2NhbGU6ICdzdXJmYWNlU2NhbGUnLFxuICBzeXN0ZW1MYW5ndWFnZTogJ3N5c3RlbUxhbmd1YWdlJyxcbiAgdGFibGVWYWx1ZXM6ICd0YWJsZVZhbHVlcycsXG4gIHRhcmdldFg6ICd0YXJnZXRYJyxcbiAgdGFyZ2V0WTogJ3RhcmdldFknLFxuICB0ZXh0QW5jaG9yOiAndGV4dC1hbmNob3InLFxuICB0ZXh0RGVjb3JhdGlvbjogJ3RleHQtZGVjb3JhdGlvbicsXG4gIHRleHRSZW5kZXJpbmc6ICd0ZXh0LXJlbmRlcmluZycsXG4gIHRleHRMZW5ndGg6ICd0ZXh0TGVuZ3RoJyxcbiAgdG86IDAsXG4gIHRyYW5zZm9ybTogMCxcbiAgdTE6IDAsXG4gIHUyOiAwLFxuICB1bmRlcmxpbmVQb3NpdGlvbjogJ3VuZGVybGluZS1wb3NpdGlvbicsXG4gIHVuZGVybGluZVRoaWNrbmVzczogJ3VuZGVybGluZS10aGlja25lc3MnLFxuICB1bmljb2RlOiAwLFxuICB1bmljb2RlQmlkaTogJ3VuaWNvZGUtYmlkaScsXG4gIHVuaWNvZGVSYW5nZTogJ3VuaWNvZGUtcmFuZ2UnLFxuICB1bml0c1BlckVtOiAndW5pdHMtcGVyLWVtJyxcbiAgdkFscGhhYmV0aWM6ICd2LWFscGhhYmV0aWMnLFxuICB2SGFuZ2luZzogJ3YtaGFuZ2luZycsXG4gIHZJZGVvZ3JhcGhpYzogJ3YtaWRlb2dyYXBoaWMnLFxuICB2TWF0aGVtYXRpY2FsOiAndi1tYXRoZW1hdGljYWwnLFxuICB2YWx1ZXM6IDAsXG4gIHZlY3RvckVmZmVjdDogJ3ZlY3Rvci1lZmZlY3QnLFxuICB2ZXJzaW9uOiAwLFxuICB2ZXJ0QWR2WTogJ3ZlcnQtYWR2LXknLFxuICB2ZXJ0T3JpZ2luWDogJ3ZlcnQtb3JpZ2luLXgnLFxuICB2ZXJ0T3JpZ2luWTogJ3ZlcnQtb3JpZ2luLXknLFxuICB2aWV3Qm94OiAndmlld0JveCcsXG4gIHZpZXdUYXJnZXQ6ICd2aWV3VGFyZ2V0JyxcbiAgdmlzaWJpbGl0eTogMCxcbiAgd2lkdGhzOiAwLFxuICB3b3JkU3BhY2luZzogJ3dvcmQtc3BhY2luZycsXG4gIHdyaXRpbmdNb2RlOiAnd3JpdGluZy1tb2RlJyxcbiAgeDogMCxcbiAgeEhlaWdodDogJ3gtaGVpZ2h0JyxcbiAgeDE6IDAsXG4gIHgyOiAwLFxuICB4Q2hhbm5lbFNlbGVjdG9yOiAneENoYW5uZWxTZWxlY3RvcicsXG4gIHhsaW5rQWN0dWF0ZTogJ3hsaW5rOmFjdHVhdGUnLFxuICB4bGlua0FyY3JvbGU6ICd4bGluazphcmNyb2xlJyxcbiAgeGxpbmtIcmVmOiAneGxpbms6aHJlZicsXG4gIHhsaW5rUm9sZTogJ3hsaW5rOnJvbGUnLFxuICB4bGlua1Nob3c6ICd4bGluazpzaG93JyxcbiAgeGxpbmtUaXRsZTogJ3hsaW5rOnRpdGxlJyxcbiAgeGxpbmtUeXBlOiAneGxpbms6dHlwZScsXG4gIHhtbEJhc2U6ICd4bWw6YmFzZScsXG4gIHhtbExhbmc6ICd4bWw6bGFuZycsXG4gIHhtbFNwYWNlOiAneG1sOnNwYWNlJyxcbiAgeTogMCxcbiAgeTE6IDAsXG4gIHkyOiAwLFxuICB5Q2hhbm5lbFNlbGVjdG9yOiAneUNoYW5uZWxTZWxlY3RvcicsXG4gIHo6IDAsXG4gIHpvb21BbmRQYW46ICd6b29tQW5kUGFuJ1xufTtcblxudmFyIFNWR0RPTVByb3BlcnR5Q29uZmlnID0ge1xuICBQcm9wZXJ0aWVzOiB7fSxcbiAgRE9NQXR0cmlidXRlTmFtZXNwYWNlczoge1xuICAgIHhsaW5rQWN0dWF0ZTogTlMueGxpbmssXG4gICAgeGxpbmtBcmNyb2xlOiBOUy54bGluayxcbiAgICB4bGlua0hyZWY6IE5TLnhsaW5rLFxuICAgIHhsaW5rUm9sZTogTlMueGxpbmssXG4gICAgeGxpbmtTaG93OiBOUy54bGluayxcbiAgICB4bGlua1RpdGxlOiBOUy54bGluayxcbiAgICB4bGlua1R5cGU6IE5TLnhsaW5rLFxuICAgIHhtbEJhc2U6IE5TLnhtbCxcbiAgICB4bWxMYW5nOiBOUy54bWwsXG4gICAgeG1sU3BhY2U6IE5TLnhtbFxuICB9LFxuICBET01BdHRyaWJ1dGVOYW1lczoge31cbn07XG5cbk9iamVjdC5rZXlzKEFUVFJTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgU1ZHRE9NUHJvcGVydHlDb25maWcuUHJvcGVydGllc1trZXldID0gMDtcbiAgaWYgKEFUVFJTW2tleV0pIHtcbiAgICBTVkdET01Qcm9wZXJ0eUNvbmZpZy5ET01BdHRyaWJ1dGVOYW1lc1trZXldID0gQVRUUlNba2V5XTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHRE9NUHJvcGVydHlDb25maWc7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1NWR0RPTVByb3BlcnR5Q29uZmlnLmpzXG4gKiogbW9kdWxlIGlkID0gMjQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU2VsZWN0RXZlbnRQbHVnaW5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFdmVudENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRXZlbnRDb25zdGFudHMnKTtcbnZhciBFdmVudFByb3BhZ2F0b3JzID0gcmVxdWlyZSgnLi9FdmVudFByb3BhZ2F0b3JzJyk7XG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xudmFyIFJlYWN0RE9NQ29tcG9uZW50VHJlZSA9IHJlcXVpcmUoJy4vUmVhY3RET01Db21wb25lbnRUcmVlJyk7XG52YXIgUmVhY3RJbnB1dFNlbGVjdGlvbiA9IHJlcXVpcmUoJy4vUmVhY3RJbnB1dFNlbGVjdGlvbicpO1xudmFyIFN5bnRoZXRpY0V2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNFdmVudCcpO1xuXG52YXIgZ2V0QWN0aXZlRWxlbWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL2dldEFjdGl2ZUVsZW1lbnQnKTtcbnZhciBpc1RleHRJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lzVGV4dElucHV0RWxlbWVudCcpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCdmYmpzL2xpYi9zaGFsbG93RXF1YWwnKTtcblxudmFyIHRvcExldmVsVHlwZXMgPSBFdmVudENvbnN0YW50cy50b3BMZXZlbFR5cGVzO1xuXG52YXIgc2tpcFNlbGVjdGlvbkNoYW5nZUV2ZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmICdkb2N1bWVudE1vZGUnIGluIGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA8PSAxMTtcblxudmFyIGV2ZW50VHlwZXMgPSB7XG4gIHNlbGVjdDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25TZWxlY3RDYXB0dXJlOiBudWxsIH0pXG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFt0b3BMZXZlbFR5cGVzLnRvcEJsdXIsIHRvcExldmVsVHlwZXMudG9wQ29udGV4dE1lbnUsIHRvcExldmVsVHlwZXMudG9wRm9jdXMsIHRvcExldmVsVHlwZXMudG9wS2V5RG93biwgdG9wTGV2ZWxUeXBlcy50b3BNb3VzZURvd24sIHRvcExldmVsVHlwZXMudG9wTW91c2VVcCwgdG9wTGV2ZWxUeXBlcy50b3BTZWxlY3Rpb25DaGFuZ2VdXG4gIH1cbn07XG5cbnZhciBhY3RpdmVFbGVtZW50ID0gbnVsbDtcbnZhciBhY3RpdmVFbGVtZW50SW5zdCA9IG51bGw7XG52YXIgbGFzdFNlbGVjdGlvbiA9IG51bGw7XG52YXIgbW91c2VEb3duID0gZmFsc2U7XG5cbi8vIFRyYWNrIHdoZXRoZXIgYSBsaXN0ZW5lciBleGlzdHMgZm9yIHRoaXMgcGx1Z2luLiBJZiBub25lIGV4aXN0LCB3ZSBkb1xuLy8gbm90IGV4dHJhY3QgZXZlbnRzLiBTZWUgIzM2MzkuXG52YXIgaGFzTGlzdGVuZXIgPSBmYWxzZTtcbnZhciBPTl9TRUxFQ1RfS0VZID0ga2V5T2YoeyBvblNlbGVjdDogbnVsbCB9KTtcblxuLyoqXG4gKiBHZXQgYW4gb2JqZWN0IHdoaWNoIGlzIGEgdW5pcXVlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgbm90IGJlIGNvbnNpc3RlbnQgYWNyb3NzIG5vZGVzIG9yIGJyb3dzZXJzLCBidXRcbiAqIHR3byBpZGVudGljYWwgc2VsZWN0aW9ucyBvbiB0aGUgc2FtZSBub2RlIHdpbGwgcmV0dXJuIGlkZW50aWNhbCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb24obm9kZSkge1xuICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBub2RlICYmIFJlYWN0SW5wdXRTZWxlY3Rpb24uaGFzU2VsZWN0aW9uQ2FwYWJpbGl0aWVzKG5vZGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBub2RlLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgZW5kOiBub2RlLnNlbGVjdGlvbkVuZFxuICAgIH07XG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuY2hvck5vZGU6IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxuICAgICAgYW5jaG9yT2Zmc2V0OiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0LFxuICAgICAgZm9jdXNOb2RlOiBzZWxlY3Rpb24uZm9jdXNOb2RlLFxuICAgICAgZm9jdXNPZmZzZXQ6IHNlbGVjdGlvbi5mb2N1c09mZnNldFxuICAgIH07XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudEVsZW1lbnQ6IHJhbmdlLnBhcmVudEVsZW1lbnQoKSxcbiAgICAgIHRleHQ6IHJhbmdlLnRleHQsXG4gICAgICB0b3A6IHJhbmdlLmJvdW5kaW5nVG9wLFxuICAgICAgbGVmdDogcmFuZ2UuYm91bmRpbmdMZWZ0XG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFBvbGwgc2VsZWN0aW9uIHRvIHNlZSB3aGV0aGVyIGl0J3MgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbmF0aXZlRXZlbnRcbiAqIEByZXR1cm4gez9TeW50aGV0aWNFdmVudH1cbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0U2VsZWN0RXZlbnQobmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KSB7XG4gIC8vIEVuc3VyZSB3ZSBoYXZlIHRoZSByaWdodCBlbGVtZW50LCBhbmQgdGhhdCB0aGUgdXNlciBpcyBub3QgZHJhZ2dpbmcgYVxuICAvLyBzZWxlY3Rpb24gKHRoaXMgbWF0Y2hlcyBuYXRpdmUgYHNlbGVjdGAgZXZlbnQgYmVoYXZpb3IpLiBJbiBIVE1MNSwgc2VsZWN0XG4gIC8vIGZpcmVzIG9ubHkgb24gaW5wdXQgYW5kIHRleHRhcmVhIHRodXMgaWYgdGhlcmUncyBubyBmb2N1c2VkIGVsZW1lbnQgd2VcbiAgLy8gd29uJ3QgZGlzcGF0Y2guXG4gIGlmIChtb3VzZURvd24gfHwgYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IGFjdGl2ZUVsZW1lbnQgIT09IGdldEFjdGl2ZUVsZW1lbnQoKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gT25seSBmaXJlIHdoZW4gc2VsZWN0aW9uIGhhcyBhY3R1YWxseSBjaGFuZ2VkLlxuICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGdldFNlbGVjdGlvbihhY3RpdmVFbGVtZW50KTtcbiAgaWYgKCFsYXN0U2VsZWN0aW9uIHx8ICFzaGFsbG93RXF1YWwobGFzdFNlbGVjdGlvbiwgY3VycmVudFNlbGVjdGlvbikpIHtcbiAgICBsYXN0U2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbjtcblxuICAgIHZhciBzeW50aGV0aWNFdmVudCA9IFN5bnRoZXRpY0V2ZW50LmdldFBvb2xlZChldmVudFR5cGVzLnNlbGVjdCwgYWN0aXZlRWxlbWVudEluc3QsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG5cbiAgICBzeW50aGV0aWNFdmVudC50eXBlID0gJ3NlbGVjdCc7XG4gICAgc3ludGhldGljRXZlbnQudGFyZ2V0ID0gYWN0aXZlRWxlbWVudDtcblxuICAgIEV2ZW50UHJvcGFnYXRvcnMuYWNjdW11bGF0ZVR3b1BoYXNlRGlzcGF0Y2hlcyhzeW50aGV0aWNFdmVudCk7XG5cbiAgICByZXR1cm4gc3ludGhldGljRXZlbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBUaGlzIHBsdWdpbiBjcmVhdGVzIGFuIGBvblNlbGVjdGAgZXZlbnQgdGhhdCBub3JtYWxpemVzIHNlbGVjdCBldmVudHNcbiAqIGFjcm9zcyBmb3JtIGVsZW1lbnRzLlxuICpcbiAqIFN1cHBvcnRlZCBlbGVtZW50cyBhcmU6XG4gKiAtIGlucHV0IChzZWUgYGlzVGV4dElucHV0RWxlbWVudGApXG4gKiAtIHRleHRhcmVhXG4gKiAtIGNvbnRlbnRFZGl0YWJsZVxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIG5hdGl2ZSBicm93c2VyIGltcGxlbWVudGF0aW9ucyBpbiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKiAtIEZpcmVzIG9uIGNvbnRlbnRFZGl0YWJsZSBmaWVsZHMgYXMgd2VsbCBhcyBpbnB1dHMuXG4gKiAtIEZpcmVzIGZvciBjb2xsYXBzZWQgc2VsZWN0aW9uLlxuICogLSBGaXJlcyBhZnRlciB1c2VyIGlucHV0LlxuICovXG52YXIgU2VsZWN0RXZlbnRQbHVnaW4gPSB7XG5cbiAgZXZlbnRUeXBlczogZXZlbnRUeXBlcyxcblxuICBleHRyYWN0RXZlbnRzOiBmdW5jdGlvbiAodG9wTGV2ZWxUeXBlLCB0YXJnZXRJbnN0LCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgICBpZiAoIWhhc0xpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRhcmdldEluc3QgPyBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0Tm9kZUZyb21JbnN0YW5jZSh0YXJnZXRJbnN0KSA6IHdpbmRvdztcblxuICAgIHN3aXRjaCAodG9wTGV2ZWxUeXBlKSB7XG4gICAgICAvLyBUcmFjayB0aGUgaW5wdXQgbm9kZSB0aGF0IGhhcyBmb2N1cy5cbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BGb2N1czpcbiAgICAgICAgaWYgKGlzVGV4dElucHV0RWxlbWVudCh0YXJnZXROb2RlKSB8fCB0YXJnZXROb2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHRhcmdldE5vZGU7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudEluc3QgPSB0YXJnZXRJbnN0O1xuICAgICAgICAgIGxhc3RTZWxlY3Rpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEJsdXI6XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICBhY3RpdmVFbGVtZW50SW5zdCA9IG51bGw7XG4gICAgICAgIGxhc3RTZWxlY3Rpb24gPSBudWxsO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRG9uJ3QgZmlyZSB0aGUgZXZlbnQgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcuIFRoaXMgbWF0Y2hlcyB0aGVcbiAgICAgIC8vIHNlbWFudGljcyBvZiB0aGUgbmF0aXZlIHNlbGVjdCBldmVudC5cbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BNb3VzZURvd246XG4gICAgICAgIG1vdXNlRG93biA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcENvbnRleHRNZW51OlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcE1vdXNlVXA6XG4gICAgICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gY29uc3RydWN0U2VsZWN0RXZlbnQobmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KTtcblxuICAgICAgLy8gQ2hyb21lIGFuZCBJRSBmaXJlIG5vbi1zdGFuZGFyZCBldmVudCB3aGVuIHNlbGVjdGlvbiBpcyBjaGFuZ2VkIChhbmRcbiAgICAgIC8vIHNvbWV0aW1lcyB3aGVuIGl0IGhhc24ndCkuIElFJ3MgZXZlbnQgZmlyZXMgb3V0IG9mIG9yZGVyIHdpdGggcmVzcGVjdFxuICAgICAgLy8gdG8ga2V5IGFuZCBpbnB1dCBldmVudHMgb24gZGVsZXRpb24sIHNvIHdlIGRpc2NhcmQgaXQuXG4gICAgICAvL1xuICAgICAgLy8gRmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgc2VsZWN0aW9uY2hhbmdlLCBzbyBjaGVjayBzZWxlY3Rpb24gc3RhdHVzXG4gICAgICAvLyBhZnRlciBlYWNoIGtleSBlbnRyeS4gVGhlIHNlbGVjdGlvbiBjaGFuZ2VzIGFmdGVyIGtleWRvd24gYW5kIGJlZm9yZVxuICAgICAgLy8ga2V5dXAsIGJ1dCB3ZSBjaGVjayBvbiBrZXlkb3duIGFzIHdlbGwgaW4gdGhlIGNhc2Ugb2YgaG9sZGluZyBkb3duIGFcbiAgICAgIC8vIGtleSwgd2hlbiBtdWx0aXBsZSBrZXlkb3duIGV2ZW50cyBhcmUgZmlyZWQgYnV0IG9ubHkgb25lIGtleXVwIGlzLlxuICAgICAgLy8gVGhpcyBpcyBhbHNvIG91ciBhcHByb2FjaCBmb3IgSUUgaGFuZGxpbmcsIGZvciB0aGUgcmVhc29uIGFib3ZlLlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFNlbGVjdGlvbkNoYW5nZTpcbiAgICAgICAgaWYgKHNraXBTZWxlY3Rpb25DaGFuZ2VFdmVudCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wS2V5RG93bjpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BLZXlVcDpcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdFNlbGVjdEV2ZW50KG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZGlkUHV0TGlzdGVuZXI6IGZ1bmN0aW9uIChpbnN0LCByZWdpc3RyYXRpb25OYW1lLCBsaXN0ZW5lcikge1xuICAgIGlmIChyZWdpc3RyYXRpb25OYW1lID09PSBPTl9TRUxFQ1RfS0VZKSB7XG4gICAgICBoYXNMaXN0ZW5lciA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdEV2ZW50UGx1Z2luO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9TZWxlY3RFdmVudFBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFNpbXBsZUV2ZW50UGx1Z2luXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXZlbnRDb25zdGFudHMgPSByZXF1aXJlKCcuL0V2ZW50Q29uc3RhbnRzJyk7XG52YXIgRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2ZianMvbGliL0V2ZW50TGlzdGVuZXInKTtcbnZhciBFdmVudFByb3BhZ2F0b3JzID0gcmVxdWlyZSgnLi9FdmVudFByb3BhZ2F0b3JzJyk7XG52YXIgUmVhY3RET01Db21wb25lbnRUcmVlID0gcmVxdWlyZSgnLi9SZWFjdERPTUNvbXBvbmVudFRyZWUnKTtcbnZhciBTeW50aGV0aWNBbmltYXRpb25FdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljQW5pbWF0aW9uRXZlbnQnKTtcbnZhciBTeW50aGV0aWNDbGlwYm9hcmRFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljQ2xpcGJvYXJkRXZlbnQnKTtcbnZhciBTeW50aGV0aWNFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljRXZlbnQnKTtcbnZhciBTeW50aGV0aWNGb2N1c0V2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNGb2N1c0V2ZW50Jyk7XG52YXIgU3ludGhldGljS2V5Ym9hcmRFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljS2V5Ym9hcmRFdmVudCcpO1xudmFyIFN5bnRoZXRpY01vdXNlRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY01vdXNlRXZlbnQnKTtcbnZhciBTeW50aGV0aWNEcmFnRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY0RyYWdFdmVudCcpO1xudmFyIFN5bnRoZXRpY1RvdWNoRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY1RvdWNoRXZlbnQnKTtcbnZhciBTeW50aGV0aWNUcmFuc2l0aW9uRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY1RyYW5zaXRpb25FdmVudCcpO1xudmFyIFN5bnRoZXRpY1VJRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY1VJRXZlbnQnKTtcbnZhciBTeW50aGV0aWNXaGVlbEV2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNXaGVlbEV2ZW50Jyk7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGdldEV2ZW50Q2hhckNvZGUgPSByZXF1aXJlKCcuL2dldEV2ZW50Q2hhckNvZGUnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG5cbnZhciB0b3BMZXZlbFR5cGVzID0gRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlcztcblxudmFyIGV2ZW50VHlwZXMgPSB7XG4gIGFib3J0OiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25BYm9ydDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQWJvcnRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBhbmltYXRpb25FbmQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkFuaW1hdGlvbkVuZDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQW5pbWF0aW9uRW5kQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25BbmltYXRpb25JdGVyYXRpb246IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkFuaW1hdGlvbkl0ZXJhdGlvbkNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGFuaW1hdGlvblN0YXJ0OiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25BbmltYXRpb25TdGFydDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQW5pbWF0aW9uU3RhcnRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBibHVyOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25CbHVyOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25CbHVyQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgY2FuUGxheToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uQ2FuUGxheTogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQ2FuUGxheUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGNhblBsYXlUaHJvdWdoOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25DYW5QbGF5VGhyb3VnaDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQ2FuUGxheVRocm91Z2hDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBjbGljazoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uQ2xpY2s6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkNsaWNrQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgY29udGV4dE1lbnU6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkNvbnRleHRNZW51OiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Db250ZXh0TWVudUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGNvcHk6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkNvcHk6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkNvcHlDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBjdXQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkN1dDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uQ3V0Q2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgZG91YmxlQ2xpY2s6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkRvdWJsZUNsaWNrOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Eb3VibGVDbGlja0NhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGRyYWc6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkRyYWc6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkRyYWdDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBkcmFnRW5kOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25EcmFnRW5kOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25EcmFnRW5kQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgZHJhZ0VudGVyOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25EcmFnRW50ZXI6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkRyYWdFbnRlckNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGRyYWdFeGl0OiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25EcmFnRXhpdDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uRHJhZ0V4aXRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBkcmFnTGVhdmU6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkRyYWdMZWF2ZTogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uRHJhZ0xlYXZlQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgZHJhZ092ZXI6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkRyYWdPdmVyOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25EcmFnT3ZlckNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGRyYWdTdGFydDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uRHJhZ1N0YXJ0OiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25EcmFnU3RhcnRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBkcm9wOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Ecm9wOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Ecm9wQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgZHVyYXRpb25DaGFuZ2U6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkR1cmF0aW9uQ2hhbmdlOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25EdXJhdGlvbkNoYW5nZUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGVtcHRpZWQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkVtcHRpZWQ6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkVtcHRpZWRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBlbmNyeXB0ZWQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkVuY3J5cHRlZDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uRW5jcnlwdGVkQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgZW5kZWQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkVuZGVkOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25FbmRlZENhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGVycm9yOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25FcnJvcjogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uRXJyb3JDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBmb2N1czoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uRm9jdXM6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkZvY3VzQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbklucHV0OiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25JbnB1dENhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGludmFsaWQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkludmFsaWQ6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbkludmFsaWRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBrZXlEb3duOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25LZXlEb3duOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25LZXlEb3duQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAga2V5UHJlc3M6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbktleVByZXNzOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25LZXlQcmVzc0NhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGtleVVwOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25LZXlVcDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uS2V5VXBDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBsb2FkOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Mb2FkOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Mb2FkQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgbG9hZGVkRGF0YToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uTG9hZGVkRGF0YTogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uTG9hZGVkRGF0YUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIGxvYWRlZE1ldGFkYXRhOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Mb2FkZWRNZXRhZGF0YTogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uTG9hZGVkTWV0YWRhdGFDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBsb2FkU3RhcnQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbkxvYWRTdGFydDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uTG9hZFN0YXJ0Q2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgLy8gTm90ZTogV2UgZG8gbm90IGFsbG93IGxpc3RlbmluZyB0byBtb3VzZU92ZXIgZXZlbnRzLiBJbnN0ZWFkLCB1c2UgdGhlXG4gIC8vIG9uTW91c2VFbnRlci9vbk1vdXNlTGVhdmUgY3JlYXRlZCBieSBgRW50ZXJMZWF2ZUV2ZW50UGx1Z2luYC5cbiAgbW91c2VEb3duOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Nb3VzZURvd246IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbk1vdXNlRG93bkNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIG1vdXNlTW92ZToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uTW91c2VNb3ZlOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Nb3VzZU1vdmVDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBtb3VzZU91dDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uTW91c2VPdXQ6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbk1vdXNlT3V0Q2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgbW91c2VPdmVyOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Nb3VzZU92ZXI6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbk1vdXNlT3ZlckNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIG1vdXNlVXA6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbk1vdXNlVXA6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbk1vdXNlVXBDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBwYXN0ZToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uUGFzdGU6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblBhc3RlQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgcGF1c2U6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvblBhdXNlOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25QYXVzZUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHBsYXk6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvblBsYXk6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblBsYXlDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBwbGF5aW5nOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25QbGF5aW5nOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25QbGF5aW5nQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgcHJvZ3Jlc3M6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvblByb2dyZXNzOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25Qcm9ncmVzc0NhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHJhdGVDaGFuZ2U6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvblJhdGVDaGFuZ2U6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblJhdGVDaGFuZ2VDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICByZXNldDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uUmVzZXQ6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblJlc2V0Q2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgc2Nyb2xsOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25TY3JvbGw6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblNjcm9sbENhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHNlZWtlZDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uU2Vla2VkOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25TZWVrZWRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBzZWVraW5nOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25TZWVraW5nOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25TZWVraW5nQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgc3RhbGxlZDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uU3RhbGxlZDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uU3RhbGxlZENhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uU3VibWl0OiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25TdWJtaXRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICBzdXNwZW5kOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25TdXNwZW5kOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25TdXNwZW5kQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgdGltZVVwZGF0ZToge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uVGltZVVwZGF0ZTogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uVGltZVVwZGF0ZUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHRvdWNoQ2FuY2VsOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Ub3VjaENhbmNlbDogdHJ1ZSB9KSxcbiAgICAgIGNhcHR1cmVkOiBrZXlPZih7IG9uVG91Y2hDYW5jZWxDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICB0b3VjaEVuZDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uVG91Y2hFbmQ6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblRvdWNoRW5kQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgdG91Y2hNb3ZlOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Ub3VjaE1vdmU6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblRvdWNoTW92ZUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHRvdWNoU3RhcnQ6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvblRvdWNoU3RhcnQ6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblRvdWNoU3RhcnRDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICB0cmFuc2l0aW9uRW5kOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25UcmFuc2l0aW9uRW5kOiB0cnVlIH0pLFxuICAgICAgY2FwdHVyZWQ6IGtleU9mKHsgb25UcmFuc2l0aW9uRW5kQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgdm9sdW1lQ2hhbmdlOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHsgb25Wb2x1bWVDaGFuZ2U6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvblZvbHVtZUNoYW5nZUNhcHR1cmU6IHRydWUgfSlcbiAgICB9XG4gIH0sXG4gIHdhaXRpbmc6IHtcbiAgICBwaGFzZWRSZWdpc3RyYXRpb25OYW1lczoge1xuICAgICAgYnViYmxlZDoga2V5T2YoeyBvbldhaXRpbmc6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbldhaXRpbmdDYXB0dXJlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICB3aGVlbDoge1xuICAgIHBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOiB7XG4gICAgICBidWJibGVkOiBrZXlPZih7IG9uV2hlZWw6IHRydWUgfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2YoeyBvbldoZWVsQ2FwdHVyZTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxufTtcblxudmFyIHRvcExldmVsRXZlbnRzVG9EaXNwYXRjaENvbmZpZyA9IHtcbiAgdG9wQWJvcnQ6IGV2ZW50VHlwZXMuYWJvcnQsXG4gIHRvcEFuaW1hdGlvbkVuZDogZXZlbnRUeXBlcy5hbmltYXRpb25FbmQsXG4gIHRvcEFuaW1hdGlvbkl0ZXJhdGlvbjogZXZlbnRUeXBlcy5hbmltYXRpb25JdGVyYXRpb24sXG4gIHRvcEFuaW1hdGlvblN0YXJ0OiBldmVudFR5cGVzLmFuaW1hdGlvblN0YXJ0LFxuICB0b3BCbHVyOiBldmVudFR5cGVzLmJsdXIsXG4gIHRvcENhblBsYXk6IGV2ZW50VHlwZXMuY2FuUGxheSxcbiAgdG9wQ2FuUGxheVRocm91Z2g6IGV2ZW50VHlwZXMuY2FuUGxheVRocm91Z2gsXG4gIHRvcENsaWNrOiBldmVudFR5cGVzLmNsaWNrLFxuICB0b3BDb250ZXh0TWVudTogZXZlbnRUeXBlcy5jb250ZXh0TWVudSxcbiAgdG9wQ29weTogZXZlbnRUeXBlcy5jb3B5LFxuICB0b3BDdXQ6IGV2ZW50VHlwZXMuY3V0LFxuICB0b3BEb3VibGVDbGljazogZXZlbnRUeXBlcy5kb3VibGVDbGljayxcbiAgdG9wRHJhZzogZXZlbnRUeXBlcy5kcmFnLFxuICB0b3BEcmFnRW5kOiBldmVudFR5cGVzLmRyYWdFbmQsXG4gIHRvcERyYWdFbnRlcjogZXZlbnRUeXBlcy5kcmFnRW50ZXIsXG4gIHRvcERyYWdFeGl0OiBldmVudFR5cGVzLmRyYWdFeGl0LFxuICB0b3BEcmFnTGVhdmU6IGV2ZW50VHlwZXMuZHJhZ0xlYXZlLFxuICB0b3BEcmFnT3ZlcjogZXZlbnRUeXBlcy5kcmFnT3ZlcixcbiAgdG9wRHJhZ1N0YXJ0OiBldmVudFR5cGVzLmRyYWdTdGFydCxcbiAgdG9wRHJvcDogZXZlbnRUeXBlcy5kcm9wLFxuICB0b3BEdXJhdGlvbkNoYW5nZTogZXZlbnRUeXBlcy5kdXJhdGlvbkNoYW5nZSxcbiAgdG9wRW1wdGllZDogZXZlbnRUeXBlcy5lbXB0aWVkLFxuICB0b3BFbmNyeXB0ZWQ6IGV2ZW50VHlwZXMuZW5jcnlwdGVkLFxuICB0b3BFbmRlZDogZXZlbnRUeXBlcy5lbmRlZCxcbiAgdG9wRXJyb3I6IGV2ZW50VHlwZXMuZXJyb3IsXG4gIHRvcEZvY3VzOiBldmVudFR5cGVzLmZvY3VzLFxuICB0b3BJbnB1dDogZXZlbnRUeXBlcy5pbnB1dCxcbiAgdG9wSW52YWxpZDogZXZlbnRUeXBlcy5pbnZhbGlkLFxuICB0b3BLZXlEb3duOiBldmVudFR5cGVzLmtleURvd24sXG4gIHRvcEtleVByZXNzOiBldmVudFR5cGVzLmtleVByZXNzLFxuICB0b3BLZXlVcDogZXZlbnRUeXBlcy5rZXlVcCxcbiAgdG9wTG9hZDogZXZlbnRUeXBlcy5sb2FkLFxuICB0b3BMb2FkZWREYXRhOiBldmVudFR5cGVzLmxvYWRlZERhdGEsXG4gIHRvcExvYWRlZE1ldGFkYXRhOiBldmVudFR5cGVzLmxvYWRlZE1ldGFkYXRhLFxuICB0b3BMb2FkU3RhcnQ6IGV2ZW50VHlwZXMubG9hZFN0YXJ0LFxuICB0b3BNb3VzZURvd246IGV2ZW50VHlwZXMubW91c2VEb3duLFxuICB0b3BNb3VzZU1vdmU6IGV2ZW50VHlwZXMubW91c2VNb3ZlLFxuICB0b3BNb3VzZU91dDogZXZlbnRUeXBlcy5tb3VzZU91dCxcbiAgdG9wTW91c2VPdmVyOiBldmVudFR5cGVzLm1vdXNlT3ZlcixcbiAgdG9wTW91c2VVcDogZXZlbnRUeXBlcy5tb3VzZVVwLFxuICB0b3BQYXN0ZTogZXZlbnRUeXBlcy5wYXN0ZSxcbiAgdG9wUGF1c2U6IGV2ZW50VHlwZXMucGF1c2UsXG4gIHRvcFBsYXk6IGV2ZW50VHlwZXMucGxheSxcbiAgdG9wUGxheWluZzogZXZlbnRUeXBlcy5wbGF5aW5nLFxuICB0b3BQcm9ncmVzczogZXZlbnRUeXBlcy5wcm9ncmVzcyxcbiAgdG9wUmF0ZUNoYW5nZTogZXZlbnRUeXBlcy5yYXRlQ2hhbmdlLFxuICB0b3BSZXNldDogZXZlbnRUeXBlcy5yZXNldCxcbiAgdG9wU2Nyb2xsOiBldmVudFR5cGVzLnNjcm9sbCxcbiAgdG9wU2Vla2VkOiBldmVudFR5cGVzLnNlZWtlZCxcbiAgdG9wU2Vla2luZzogZXZlbnRUeXBlcy5zZWVraW5nLFxuICB0b3BTdGFsbGVkOiBldmVudFR5cGVzLnN0YWxsZWQsXG4gIHRvcFN1Ym1pdDogZXZlbnRUeXBlcy5zdWJtaXQsXG4gIHRvcFN1c3BlbmQ6IGV2ZW50VHlwZXMuc3VzcGVuZCxcbiAgdG9wVGltZVVwZGF0ZTogZXZlbnRUeXBlcy50aW1lVXBkYXRlLFxuICB0b3BUb3VjaENhbmNlbDogZXZlbnRUeXBlcy50b3VjaENhbmNlbCxcbiAgdG9wVG91Y2hFbmQ6IGV2ZW50VHlwZXMudG91Y2hFbmQsXG4gIHRvcFRvdWNoTW92ZTogZXZlbnRUeXBlcy50b3VjaE1vdmUsXG4gIHRvcFRvdWNoU3RhcnQ6IGV2ZW50VHlwZXMudG91Y2hTdGFydCxcbiAgdG9wVHJhbnNpdGlvbkVuZDogZXZlbnRUeXBlcy50cmFuc2l0aW9uRW5kLFxuICB0b3BWb2x1bWVDaGFuZ2U6IGV2ZW50VHlwZXMudm9sdW1lQ2hhbmdlLFxuICB0b3BXYWl0aW5nOiBldmVudFR5cGVzLndhaXRpbmcsXG4gIHRvcFdoZWVsOiBldmVudFR5cGVzLndoZWVsXG59O1xuXG5mb3IgKHZhciB0eXBlIGluIHRvcExldmVsRXZlbnRzVG9EaXNwYXRjaENvbmZpZykge1xuICB0b3BMZXZlbEV2ZW50c1RvRGlzcGF0Y2hDb25maWdbdHlwZV0uZGVwZW5kZW5jaWVzID0gW3R5cGVdO1xufVxuXG52YXIgT05fQ0xJQ0tfS0VZID0ga2V5T2YoeyBvbkNsaWNrOiBudWxsIH0pO1xudmFyIG9uQ2xpY2tMaXN0ZW5lcnMgPSB7fTtcblxudmFyIFNpbXBsZUV2ZW50UGx1Z2luID0ge1xuXG4gIGV2ZW50VHlwZXM6IGV2ZW50VHlwZXMsXG5cbiAgZXh0cmFjdEV2ZW50czogZnVuY3Rpb24gKHRvcExldmVsVHlwZSwgdGFyZ2V0SW5zdCwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KSB7XG4gICAgdmFyIGRpc3BhdGNoQ29uZmlnID0gdG9wTGV2ZWxFdmVudHNUb0Rpc3BhdGNoQ29uZmlnW3RvcExldmVsVHlwZV07XG4gICAgaWYgKCFkaXNwYXRjaENvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBFdmVudENvbnN0cnVjdG9yO1xuICAgIHN3aXRjaCAodG9wTGV2ZWxUeXBlKSB7XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQWJvcnQ6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQ2FuUGxheTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BDYW5QbGF5VGhyb3VnaDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BEdXJhdGlvbkNoYW5nZTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BFbXB0aWVkOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEVuY3J5cHRlZDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BFbmRlZDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BFcnJvcjpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BJbnB1dDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BJbnZhbGlkOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcExvYWQ6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wTG9hZGVkRGF0YTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BMb2FkZWRNZXRhZGF0YTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BMb2FkU3RhcnQ6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wUGF1c2U6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wUGxheTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BQbGF5aW5nOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFByb2dyZXNzOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFJhdGVDaGFuZ2U6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wUmVzZXQ6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wU2Vla2VkOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFNlZWtpbmc6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wU3RhbGxlZDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BTdWJtaXQ6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wU3VzcGVuZDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BUaW1lVXBkYXRlOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFZvbHVtZUNoYW5nZTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BXYWl0aW5nOlxuICAgICAgICAvLyBIVE1MIEV2ZW50c1xuICAgICAgICAvLyBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZGV4Lmh0bWwjZXZlbnRzLTBcbiAgICAgICAgRXZlbnRDb25zdHJ1Y3RvciA9IFN5bnRoZXRpY0V2ZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BLZXlQcmVzczpcbiAgICAgICAgLy8gRmlyZWZveCBjcmVhdGVzIGEga2V5cHJlc3MgZXZlbnQgZm9yIGZ1bmN0aW9uIGtleXMgdG9vLiBUaGlzIHJlbW92ZXNcbiAgICAgICAgLy8gdGhlIHVud2FudGVkIGtleXByZXNzIGV2ZW50cy4gRW50ZXIgaXMgaG93ZXZlciBib3RoIHByaW50YWJsZSBhbmRcbiAgICAgICAgLy8gbm9uLXByaW50YWJsZS4gT25lIHdvdWxkIGV4cGVjdCBUYWIgdG8gYmUgYXMgd2VsbCAoYnV0IGl0IGlzbid0KS5cbiAgICAgICAgaWYgKGdldEV2ZW50Q2hhckNvZGUobmF0aXZlRXZlbnQpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BLZXlEb3duOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEtleVVwOlxuICAgICAgICBFdmVudENvbnN0cnVjdG9yID0gU3ludGhldGljS2V5Ym9hcmRFdmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQmx1cjpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BGb2N1czpcbiAgICAgICAgRXZlbnRDb25zdHJ1Y3RvciA9IFN5bnRoZXRpY0ZvY3VzRXZlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcENsaWNrOlxuICAgICAgICAvLyBGaXJlZm94IGNyZWF0ZXMgYSBjbGljayBldmVudCBvbiByaWdodCBtb3VzZSBjbGlja3MuIFRoaXMgcmVtb3ZlcyB0aGVcbiAgICAgICAgLy8gdW53YW50ZWQgY2xpY2sgZXZlbnRzLlxuICAgICAgICBpZiAobmF0aXZlRXZlbnQuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BDb250ZXh0TWVudTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BEb3VibGVDbGljazpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BNb3VzZURvd246XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wTW91c2VNb3ZlOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcE1vdXNlT3V0OlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcE1vdXNlT3ZlcjpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BNb3VzZVVwOlxuICAgICAgICBFdmVudENvbnN0cnVjdG9yID0gU3ludGhldGljTW91c2VFdmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wRHJhZzpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BEcmFnRW5kOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcERyYWdFbnRlcjpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BEcmFnRXhpdDpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BEcmFnTGVhdmU6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wRHJhZ092ZXI6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wRHJhZ1N0YXJ0OlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcERyb3A6XG4gICAgICAgIEV2ZW50Q29uc3RydWN0b3IgPSBTeW50aGV0aWNEcmFnRXZlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFRvdWNoQ2FuY2VsOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFRvdWNoRW5kOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFRvdWNoTW92ZTpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BUb3VjaFN0YXJ0OlxuICAgICAgICBFdmVudENvbnN0cnVjdG9yID0gU3ludGhldGljVG91Y2hFdmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQW5pbWF0aW9uRW5kOlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcEFuaW1hdGlvbkl0ZXJhdGlvbjpcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BBbmltYXRpb25TdGFydDpcbiAgICAgICAgRXZlbnRDb25zdHJ1Y3RvciA9IFN5bnRoZXRpY0FuaW1hdGlvbkV2ZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BUcmFuc2l0aW9uRW5kOlxuICAgICAgICBFdmVudENvbnN0cnVjdG9yID0gU3ludGhldGljVHJhbnNpdGlvbkV2ZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BTY3JvbGw6XG4gICAgICAgIEV2ZW50Q29uc3RydWN0b3IgPSBTeW50aGV0aWNVSUV2ZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9wTGV2ZWxUeXBlcy50b3BXaGVlbDpcbiAgICAgICAgRXZlbnRDb25zdHJ1Y3RvciA9IFN5bnRoZXRpY1doZWVsRXZlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcENvcHk6XG4gICAgICBjYXNlIHRvcExldmVsVHlwZXMudG9wQ3V0OlxuICAgICAgY2FzZSB0b3BMZXZlbFR5cGVzLnRvcFBhc3RlOlxuICAgICAgICBFdmVudENvbnN0cnVjdG9yID0gU3ludGhldGljQ2xpcGJvYXJkRXZlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAhRXZlbnRDb25zdHJ1Y3RvciA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdTaW1wbGVFdmVudFBsdWdpbjogVW5oYW5kbGVkIGV2ZW50IHR5cGUsIGAlc2AuJywgdG9wTGV2ZWxUeXBlKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgdmFyIGV2ZW50ID0gRXZlbnRDb25zdHJ1Y3Rvci5nZXRQb29sZWQoZGlzcGF0Y2hDb25maWcsIHRhcmdldEluc3QsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG4gICAgRXZlbnRQcm9wYWdhdG9ycy5hY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzKGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH0sXG5cbiAgZGlkUHV0TGlzdGVuZXI6IGZ1bmN0aW9uIChpbnN0LCByZWdpc3RyYXRpb25OYW1lLCBsaXN0ZW5lcikge1xuICAgIC8vIE1vYmlsZSBTYWZhcmkgZG9lcyBub3QgZmlyZSBwcm9wZXJseSBidWJibGUgY2xpY2sgZXZlbnRzIG9uXG4gICAgLy8gbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzLCB3aGljaCBtZWFucyBkZWxlZ2F0ZWQgY2xpY2sgbGlzdGVuZXJzIGRvIG5vdFxuICAgIC8vIGZpcmUuIFRoZSB3b3JrYXJvdW5kIGZvciB0aGlzIGJ1ZyBpbnZvbHZlcyBhdHRhY2hpbmcgYW4gZW1wdHkgY2xpY2tcbiAgICAvLyBsaXN0ZW5lciBvbiB0aGUgdGFyZ2V0IG5vZGUuXG4gICAgaWYgKHJlZ2lzdHJhdGlvbk5hbWUgPT09IE9OX0NMSUNLX0tFWSkge1xuICAgICAgdmFyIGlkID0gaW5zdC5fcm9vdE5vZGVJRDtcbiAgICAgIHZhciBub2RlID0gUmVhY3RET01Db21wb25lbnRUcmVlLmdldE5vZGVGcm9tSW5zdGFuY2UoaW5zdCk7XG4gICAgICBpZiAoIW9uQ2xpY2tMaXN0ZW5lcnNbaWRdKSB7XG4gICAgICAgIG9uQ2xpY2tMaXN0ZW5lcnNbaWRdID0gRXZlbnRMaXN0ZW5lci5saXN0ZW4obm9kZSwgJ2NsaWNrJywgZW1wdHlGdW5jdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHdpbGxEZWxldGVMaXN0ZW5lcjogZnVuY3Rpb24gKGluc3QsIHJlZ2lzdHJhdGlvbk5hbWUpIHtcbiAgICBpZiAocmVnaXN0cmF0aW9uTmFtZSA9PT0gT05fQ0xJQ0tfS0VZKSB7XG4gICAgICB2YXIgaWQgPSBpbnN0Ll9yb290Tm9kZUlEO1xuICAgICAgb25DbGlja0xpc3RlbmVyc1tpZF0ucmVtb3ZlKCk7XG4gICAgICBkZWxldGUgb25DbGlja0xpc3RlbmVyc1tpZF07XG4gICAgfVxuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltcGxlRXZlbnRQbHVnaW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1NpbXBsZUV2ZW50UGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gMjQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU3ludGhldGljQW5pbWF0aW9uRXZlbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTeW50aGV0aWNFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljRXZlbnQnKTtcblxuLyoqXG4gKiBAaW50ZXJmYWNlIEV2ZW50XG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtYW5pbWF0aW9ucy8jQW5pbWF0aW9uRXZlbnQtaW50ZXJmYWNlXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9BbmltYXRpb25FdmVudFxuICovXG52YXIgQW5pbWF0aW9uRXZlbnRJbnRlcmZhY2UgPSB7XG4gIGFuaW1hdGlvbk5hbWU6IG51bGwsXG4gIGVsYXBzZWRUaW1lOiBudWxsLFxuICBwc2V1ZG9FbGVtZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBkaXNwYXRjaENvbmZpZyBDb25maWd1cmF0aW9uIHVzZWQgdG8gZGlzcGF0Y2ggdGhpcyBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwYXRjaE1hcmtlciBNYXJrZXIgaWRlbnRpZnlpbmcgdGhlIGV2ZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudCBOYXRpdmUgYnJvd3NlciBldmVudC5cbiAqIEBleHRlbmRzIHtTeW50aGV0aWNFdmVudH1cbiAqL1xuZnVuY3Rpb24gU3ludGhldGljQW5pbWF0aW9uRXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY0V2ZW50LmNhbGwodGhpcywgZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpO1xufVxuXG5TeW50aGV0aWNFdmVudC5hdWdtZW50Q2xhc3MoU3ludGhldGljQW5pbWF0aW9uRXZlbnQsIEFuaW1hdGlvbkV2ZW50SW50ZXJmYWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW50aGV0aWNBbmltYXRpb25FdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvU3ludGhldGljQW5pbWF0aW9uRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTeW50aGV0aWNDbGlwYm9hcmRFdmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFN5bnRoZXRpY0V2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNFdmVudCcpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgRXZlbnRcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvY2xpcGJvYXJkLWFwaXMvXG4gKi9cbnZhciBDbGlwYm9hcmRFdmVudEludGVyZmFjZSA9IHtcbiAgY2xpcGJvYXJkRGF0YTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuICdjbGlwYm9hcmREYXRhJyBpbiBldmVudCA/IGV2ZW50LmNsaXBib2FyZERhdGEgOiB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZGlzcGF0Y2hDb25maWcgQ29uZmlndXJhdGlvbiB1c2VkIHRvIGRpc3BhdGNoIHRoaXMgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGF0Y2hNYXJrZXIgTWFya2VyIGlkZW50aWZ5aW5nIHRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge29iamVjdH0gbmF0aXZlRXZlbnQgTmF0aXZlIGJyb3dzZXIgZXZlbnQuXG4gKiBAZXh0ZW5kcyB7U3ludGhldGljVUlFdmVudH1cbiAqL1xuZnVuY3Rpb24gU3ludGhldGljQ2xpcGJvYXJkRXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY0V2ZW50LmNhbGwodGhpcywgZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpO1xufVxuXG5TeW50aGV0aWNFdmVudC5hdWdtZW50Q2xhc3MoU3ludGhldGljQ2xpcGJvYXJkRXZlbnQsIENsaXBib2FyZEV2ZW50SW50ZXJmYWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW50aGV0aWNDbGlwYm9hcmRFdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvU3ludGhldGljQ2xpcGJvYXJkRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTeW50aGV0aWNGb2N1c0V2ZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ludGhldGljVUlFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljVUlFdmVudCcpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgRm9jdXNFdmVudFxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvXG4gKi9cbnZhciBGb2N1c0V2ZW50SW50ZXJmYWNlID0ge1xuICByZWxhdGVkVGFyZ2V0OiBudWxsXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBkaXNwYXRjaENvbmZpZyBDb25maWd1cmF0aW9uIHVzZWQgdG8gZGlzcGF0Y2ggdGhpcyBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwYXRjaE1hcmtlciBNYXJrZXIgaWRlbnRpZnlpbmcgdGhlIGV2ZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudCBOYXRpdmUgYnJvd3NlciBldmVudC5cbiAqIEBleHRlbmRzIHtTeW50aGV0aWNVSUV2ZW50fVxuICovXG5mdW5jdGlvbiBTeW50aGV0aWNGb2N1c0V2ZW50KGRpc3BhdGNoQ29uZmlnLCBkaXNwYXRjaE1hcmtlciwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KSB7XG4gIHJldHVybiBTeW50aGV0aWNVSUV2ZW50LmNhbGwodGhpcywgZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpO1xufVxuXG5TeW50aGV0aWNVSUV2ZW50LmF1Z21lbnRDbGFzcyhTeW50aGV0aWNGb2N1c0V2ZW50LCBGb2N1c0V2ZW50SW50ZXJmYWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW50aGV0aWNGb2N1c0V2ZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9TeW50aGV0aWNGb2N1c0V2ZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU3ludGhldGljS2V5Ym9hcmRFdmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFN5bnRoZXRpY1VJRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY1VJRXZlbnQnKTtcblxudmFyIGdldEV2ZW50Q2hhckNvZGUgPSByZXF1aXJlKCcuL2dldEV2ZW50Q2hhckNvZGUnKTtcbnZhciBnZXRFdmVudEtleSA9IHJlcXVpcmUoJy4vZ2V0RXZlbnRLZXknKTtcbnZhciBnZXRFdmVudE1vZGlmaWVyU3RhdGUgPSByZXF1aXJlKCcuL2dldEV2ZW50TW9kaWZpZXJTdGF0ZScpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgS2V5Ym9hcmRFdmVudFxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvXG4gKi9cbnZhciBLZXlib2FyZEV2ZW50SW50ZXJmYWNlID0ge1xuICBrZXk6IGdldEV2ZW50S2V5LFxuICBsb2NhdGlvbjogbnVsbCxcbiAgY3RybEtleTogbnVsbCxcbiAgc2hpZnRLZXk6IG51bGwsXG4gIGFsdEtleTogbnVsbCxcbiAgbWV0YUtleTogbnVsbCxcbiAgcmVwZWF0OiBudWxsLFxuICBsb2NhbGU6IG51bGwsXG4gIGdldE1vZGlmaWVyU3RhdGU6IGdldEV2ZW50TW9kaWZpZXJTdGF0ZSxcbiAgLy8gTGVnYWN5IEludGVyZmFjZVxuICBjaGFyQ29kZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gYGNoYXJDb2RlYCBpcyB0aGUgcmVzdWx0IG9mIGEgS2V5UHJlc3MgZXZlbnQgYW5kIHJlcHJlc2VudHMgdGhlIHZhbHVlIG9mXG4gICAgLy8gdGhlIGFjdHVhbCBwcmludGFibGUgY2hhcmFjdGVyLlxuXG4gICAgLy8gS2V5UHJlc3MgaXMgZGVwcmVjYXRlZCwgYnV0IGl0cyByZXBsYWNlbWVudCBpcyBub3QgeWV0IGZpbmFsIGFuZCBub3RcbiAgICAvLyBpbXBsZW1lbnRlZCBpbiBhbnkgbWFqb3IgYnJvd3Nlci4gT25seSBLZXlQcmVzcyBoYXMgY2hhckNvZGUuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycpIHtcbiAgICAgIHJldHVybiBnZXRFdmVudENoYXJDb2RlKGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG4gIGtleUNvZGU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGBrZXlDb2RlYCBpcyB0aGUgcmVzdWx0IG9mIGEgS2V5RG93bi9VcCBldmVudCBhbmQgcmVwcmVzZW50cyB0aGUgdmFsdWUgb2ZcbiAgICAvLyBwaHlzaWNhbCBrZXlib2FyZCBrZXkuXG5cbiAgICAvLyBUaGUgYWN0dWFsIG1lYW5pbmcgb2YgdGhlIHZhbHVlIGRlcGVuZHMgb24gdGhlIHVzZXJzJyBrZXlib2FyZCBsYXlvdXRcbiAgICAvLyB3aGljaCBjYW5ub3QgYmUgZGV0ZWN0ZWQuIEFzc3VtaW5nIHRoYXQgaXQgaXMgYSBVUyBrZXlib2FyZCBsYXlvdXRcbiAgICAvLyBwcm92aWRlcyBhIHN1cnByaXNpbmdseSBhY2N1cmF0ZSBtYXBwaW5nIGZvciBVUyBhbmQgRXVyb3BlYW4gdXNlcnMuXG4gICAgLy8gRHVlIHRvIHRoaXMsIGl0IGlzIGxlZnQgdG8gdGhlIHVzZXIgdG8gaW1wbGVtZW50IGF0IHRoaXMgdGltZS5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgIHJldHVybiBldmVudC5rZXlDb2RlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcbiAgd2hpY2g6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGB3aGljaGAgaXMgYW4gYWxpYXMgZm9yIGVpdGhlciBga2V5Q29kZWAgb3IgYGNoYXJDb2RlYCBkZXBlbmRpbmcgb24gdGhlXG4gICAgLy8gdHlwZSBvZiB0aGUgZXZlbnQuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycpIHtcbiAgICAgIHJldHVybiBnZXRFdmVudENoYXJDb2RlKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyB8fCBldmVudC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICByZXR1cm4gZXZlbnQua2V5Q29kZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY1VJRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY0tleWJvYXJkRXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY1VJRXZlbnQuY2FsbCh0aGlzLCBkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG59XG5cblN5bnRoZXRpY1VJRXZlbnQuYXVnbWVudENsYXNzKFN5bnRoZXRpY0tleWJvYXJkRXZlbnQsIEtleWJvYXJkRXZlbnRJbnRlcmZhY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bnRoZXRpY0tleWJvYXJkRXZlbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1N5bnRoZXRpY0tleWJvYXJkRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXRFdmVudENoYXJDb2RlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGBjaGFyQ29kZWAgcmVwcmVzZW50cyB0aGUgYWN0dWFsIFwiY2hhcmFjdGVyIGNvZGVcIiBhbmQgaXMgc2FmZSB0byB1c2Ugd2l0aFxuICogYFN0cmluZy5mcm9tQ2hhckNvZGVgLiBBcyBzdWNoLCBvbmx5IGtleXMgdGhhdCBjb3JyZXNwb25kIHRvIHByaW50YWJsZVxuICogY2hhcmFjdGVycyBwcm9kdWNlIGEgdmFsaWQgYGNoYXJDb2RlYCwgdGhlIG9ubHkgZXhjZXB0aW9uIHRvIHRoaXMgaXMgRW50ZXIuXG4gKiBUaGUgVGFiLWtleSBpcyBjb25zaWRlcmVkIG5vbi1wcmludGFibGUgYW5kIGRvZXMgbm90IGhhdmUgYSBgY2hhckNvZGVgLFxuICogcHJlc3VtYWJseSBiZWNhdXNlIGl0IGRvZXMgbm90IHByb2R1Y2UgYSB0YWItY2hhcmFjdGVyIGluIGJyb3dzZXJzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBuYXRpdmVFdmVudCBOYXRpdmUgYnJvd3NlciBldmVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gTm9ybWFsaXplZCBgY2hhckNvZGVgIHByb3BlcnR5LlxuICovXG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2hhckNvZGUobmF0aXZlRXZlbnQpIHtcbiAgdmFyIGNoYXJDb2RlO1xuICB2YXIga2V5Q29kZSA9IG5hdGl2ZUV2ZW50LmtleUNvZGU7XG5cbiAgaWYgKCdjaGFyQ29kZScgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICBjaGFyQ29kZSA9IG5hdGl2ZUV2ZW50LmNoYXJDb2RlO1xuXG4gICAgLy8gRkYgZG9lcyBub3Qgc2V0IGBjaGFyQ29kZWAgZm9yIHRoZSBFbnRlci1rZXksIGNoZWNrIGFnYWluc3QgYGtleUNvZGVgLlxuICAgIGlmIChjaGFyQ29kZSA9PT0gMCAmJiBrZXlDb2RlID09PSAxMykge1xuICAgICAgY2hhckNvZGUgPSAxMztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSUU4IGRvZXMgbm90IGltcGxlbWVudCBgY2hhckNvZGVgLCBidXQgYGtleUNvZGVgIGhhcyB0aGUgY29ycmVjdCB2YWx1ZS5cbiAgICBjaGFyQ29kZSA9IGtleUNvZGU7XG4gIH1cblxuICAvLyBTb21lIG5vbi1wcmludGFibGUga2V5cyBhcmUgcmVwb3J0ZWQgaW4gYGNoYXJDb2RlYC9ga2V5Q29kZWAsIGRpc2NhcmQgdGhlbS5cbiAgLy8gTXVzdCBub3QgZGlzY2FyZCB0aGUgKG5vbi0pcHJpbnRhYmxlIEVudGVyLWtleS5cbiAgaWYgKGNoYXJDb2RlID49IDMyIHx8IGNoYXJDb2RlID09PSAxMykge1xuICAgIHJldHVybiBjaGFyQ29kZTtcbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEV2ZW50Q2hhckNvZGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL2dldEV2ZW50Q2hhckNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXRFdmVudEtleVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGdldEV2ZW50Q2hhckNvZGUgPSByZXF1aXJlKCcuL2dldEV2ZW50Q2hhckNvZGUnKTtcblxuLyoqXG4gKiBOb3JtYWxpemF0aW9uIG9mIGRlcHJlY2F0ZWQgSFRNTDUgYGtleWAgdmFsdWVzXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50I0tleV9uYW1lc1xuICovXG52YXIgbm9ybWFsaXplS2V5ID0ge1xuICAnRXNjJzogJ0VzY2FwZScsXG4gICdTcGFjZWJhcic6ICcgJyxcbiAgJ0xlZnQnOiAnQXJyb3dMZWZ0JyxcbiAgJ1VwJzogJ0Fycm93VXAnLFxuICAnUmlnaHQnOiAnQXJyb3dSaWdodCcsXG4gICdEb3duJzogJ0Fycm93RG93bicsXG4gICdEZWwnOiAnRGVsZXRlJyxcbiAgJ1dpbic6ICdPUycsXG4gICdNZW51JzogJ0NvbnRleHRNZW51JyxcbiAgJ0FwcHMnOiAnQ29udGV4dE1lbnUnLFxuICAnU2Nyb2xsJzogJ1Njcm9sbExvY2snLFxuICAnTW96UHJpbnRhYmxlS2V5JzogJ1VuaWRlbnRpZmllZCdcbn07XG5cbi8qKlxuICogVHJhbnNsYXRpb24gZnJvbSBsZWdhY3kgYGtleUNvZGVgIHRvIEhUTUw1IGBrZXlgXG4gKiBPbmx5IHNwZWNpYWwga2V5cyBzdXBwb3J0ZWQsIGFsbCBvdGhlcnMgZGVwZW5kIG9uIGtleWJvYXJkIGxheW91dCBvciBicm93c2VyXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50I0tleV9uYW1lc1xuICovXG52YXIgdHJhbnNsYXRlVG9LZXkgPSB7XG4gIDg6ICdCYWNrc3BhY2UnLFxuICA5OiAnVGFiJyxcbiAgMTI6ICdDbGVhcicsXG4gIDEzOiAnRW50ZXInLFxuICAxNjogJ1NoaWZ0JyxcbiAgMTc6ICdDb250cm9sJyxcbiAgMTg6ICdBbHQnLFxuICAxOTogJ1BhdXNlJyxcbiAgMjA6ICdDYXBzTG9jaycsXG4gIDI3OiAnRXNjYXBlJyxcbiAgMzI6ICcgJyxcbiAgMzM6ICdQYWdlVXAnLFxuICAzNDogJ1BhZ2VEb3duJyxcbiAgMzU6ICdFbmQnLFxuICAzNjogJ0hvbWUnLFxuICAzNzogJ0Fycm93TGVmdCcsXG4gIDM4OiAnQXJyb3dVcCcsXG4gIDM5OiAnQXJyb3dSaWdodCcsXG4gIDQwOiAnQXJyb3dEb3duJyxcbiAgNDU6ICdJbnNlcnQnLFxuICA0NjogJ0RlbGV0ZScsXG4gIDExMjogJ0YxJywgMTEzOiAnRjInLCAxMTQ6ICdGMycsIDExNTogJ0Y0JywgMTE2OiAnRjUnLCAxMTc6ICdGNicsXG4gIDExODogJ0Y3JywgMTE5OiAnRjgnLCAxMjA6ICdGOScsIDEyMTogJ0YxMCcsIDEyMjogJ0YxMScsIDEyMzogJ0YxMicsXG4gIDE0NDogJ051bUxvY2snLFxuICAxNDU6ICdTY3JvbGxMb2NrJyxcbiAgMjI0OiAnTWV0YSdcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQHJldHVybiB7c3RyaW5nfSBOb3JtYWxpemVkIGBrZXlgIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBnZXRFdmVudEtleShuYXRpdmVFdmVudCkge1xuICBpZiAobmF0aXZlRXZlbnQua2V5KSB7XG4gICAgLy8gTm9ybWFsaXplIGluY29uc2lzdGVudCB2YWx1ZXMgcmVwb3J0ZWQgYnkgYnJvd3NlcnMgZHVlIHRvXG4gICAgLy8gaW1wbGVtZW50YXRpb25zIG9mIGEgd29ya2luZyBkcmFmdCBzcGVjaWZpY2F0aW9uLlxuXG4gICAgLy8gRmlyZUZveCBpbXBsZW1lbnRzIGBrZXlgIGJ1dCByZXR1cm5zIGBNb3pQcmludGFibGVLZXlgIGZvciBhbGxcbiAgICAvLyBwcmludGFibGUgY2hhcmFjdGVycyAobm9ybWFsaXplZCB0byBgVW5pZGVudGlmaWVkYCksIGlnbm9yZSBpdC5cbiAgICB2YXIga2V5ID0gbm9ybWFsaXplS2V5W25hdGl2ZUV2ZW50LmtleV0gfHwgbmF0aXZlRXZlbnQua2V5O1xuICAgIGlmIChrZXkgIT09ICdVbmlkZW50aWZpZWQnKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIC8vIEJyb3dzZXIgZG9lcyBub3QgaW1wbGVtZW50IGBrZXlgLCBwb2x5ZmlsbCBhcyBtdWNoIG9mIGl0IGFzIHdlIGNhbi5cbiAgaWYgKG5hdGl2ZUV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycpIHtcbiAgICB2YXIgY2hhckNvZGUgPSBnZXRFdmVudENoYXJDb2RlKG5hdGl2ZUV2ZW50KTtcblxuICAgIC8vIFRoZSBlbnRlci1rZXkgaXMgdGVjaG5pY2FsbHkgYm90aCBwcmludGFibGUgYW5kIG5vbi1wcmludGFibGUgYW5kIGNhblxuICAgIC8vIHRodXMgYmUgY2FwdHVyZWQgYnkgYGtleXByZXNzYCwgbm8gb3RoZXIgbm9uLXByaW50YWJsZSBrZXkgc2hvdWxkLlxuICAgIHJldHVybiBjaGFyQ29kZSA9PT0gMTMgPyAnRW50ZXInIDogU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gIH1cbiAgaWYgKG5hdGl2ZUV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyB8fCBuYXRpdmVFdmVudC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgLy8gV2hpbGUgdXNlciBrZXlib2FyZCBsYXlvdXQgZGV0ZXJtaW5lcyB0aGUgYWN0dWFsIG1lYW5pbmcgb2YgZWFjaFxuICAgIC8vIGBrZXlDb2RlYCB2YWx1ZSwgYWxtb3N0IGFsbCBmdW5jdGlvbiBrZXlzIGhhdmUgYSB1bml2ZXJzYWwgdmFsdWUuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZVRvS2V5W25hdGl2ZUV2ZW50LmtleUNvZGVdIHx8ICdVbmlkZW50aWZpZWQnO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRFdmVudEtleTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvZ2V0RXZlbnRLZXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTeW50aGV0aWNEcmFnRXZlbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTeW50aGV0aWNNb3VzZUV2ZW50ID0gcmVxdWlyZSgnLi9TeW50aGV0aWNNb3VzZUV2ZW50Jyk7XG5cbi8qKlxuICogQGludGVyZmFjZSBEcmFnRXZlbnRcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzL1xuICovXG52YXIgRHJhZ0V2ZW50SW50ZXJmYWNlID0ge1xuICBkYXRhVHJhbnNmZXI6IG51bGxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY1VJRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY0RyYWdFdmVudChkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCkge1xuICByZXR1cm4gU3ludGhldGljTW91c2VFdmVudC5jYWxsKHRoaXMsIGRpc3BhdGNoQ29uZmlnLCBkaXNwYXRjaE1hcmtlciwgbmF0aXZlRXZlbnQsIG5hdGl2ZUV2ZW50VGFyZ2V0KTtcbn1cblxuU3ludGhldGljTW91c2VFdmVudC5hdWdtZW50Q2xhc3MoU3ludGhldGljRHJhZ0V2ZW50LCBEcmFnRXZlbnRJbnRlcmZhY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bnRoZXRpY0RyYWdFdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvU3ludGhldGljRHJhZ0V2ZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU3ludGhldGljVG91Y2hFdmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFN5bnRoZXRpY1VJRXZlbnQgPSByZXF1aXJlKCcuL1N5bnRoZXRpY1VJRXZlbnQnKTtcblxudmFyIGdldEV2ZW50TW9kaWZpZXJTdGF0ZSA9IHJlcXVpcmUoJy4vZ2V0RXZlbnRNb2RpZmllclN0YXRlJyk7XG5cbi8qKlxuICogQGludGVyZmFjZSBUb3VjaEV2ZW50XG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL3RvdWNoLWV2ZW50cy9cbiAqL1xudmFyIFRvdWNoRXZlbnRJbnRlcmZhY2UgPSB7XG4gIHRvdWNoZXM6IG51bGwsXG4gIHRhcmdldFRvdWNoZXM6IG51bGwsXG4gIGNoYW5nZWRUb3VjaGVzOiBudWxsLFxuICBhbHRLZXk6IG51bGwsXG4gIG1ldGFLZXk6IG51bGwsXG4gIGN0cmxLZXk6IG51bGwsXG4gIHNoaWZ0S2V5OiBudWxsLFxuICBnZXRNb2RpZmllclN0YXRlOiBnZXRFdmVudE1vZGlmaWVyU3RhdGVcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY1VJRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY1RvdWNoRXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY1VJRXZlbnQuY2FsbCh0aGlzLCBkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG59XG5cblN5bnRoZXRpY1VJRXZlbnQuYXVnbWVudENsYXNzKFN5bnRoZXRpY1RvdWNoRXZlbnQsIFRvdWNoRXZlbnRJbnRlcmZhY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bnRoZXRpY1RvdWNoRXZlbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1N5bnRoZXRpY1RvdWNoRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTeW50aGV0aWNUcmFuc2l0aW9uRXZlbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTeW50aGV0aWNFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljRXZlbnQnKTtcblxuLyoqXG4gKiBAaW50ZXJmYWNlIEV2ZW50XG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDkvV0QtY3NzMy10cmFuc2l0aW9ucy0yMDA5MDMyMC8jdHJhbnNpdGlvbi1ldmVudHMtXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9UcmFuc2l0aW9uRXZlbnRcbiAqL1xudmFyIFRyYW5zaXRpb25FdmVudEludGVyZmFjZSA9IHtcbiAgcHJvcGVydHlOYW1lOiBudWxsLFxuICBlbGFwc2VkVGltZTogbnVsbCxcbiAgcHNldWRvRWxlbWVudDogbnVsbFxufTtcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZGlzcGF0Y2hDb25maWcgQ29uZmlndXJhdGlvbiB1c2VkIHRvIGRpc3BhdGNoIHRoaXMgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGF0Y2hNYXJrZXIgTWFya2VyIGlkZW50aWZ5aW5nIHRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge29iamVjdH0gbmF0aXZlRXZlbnQgTmF0aXZlIGJyb3dzZXIgZXZlbnQuXG4gKiBAZXh0ZW5kcyB7U3ludGhldGljRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY1RyYW5zaXRpb25FdmVudChkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCkge1xuICByZXR1cm4gU3ludGhldGljRXZlbnQuY2FsbCh0aGlzLCBkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG59XG5cblN5bnRoZXRpY0V2ZW50LmF1Z21lbnRDbGFzcyhTeW50aGV0aWNUcmFuc2l0aW9uRXZlbnQsIFRyYW5zaXRpb25FdmVudEludGVyZmFjZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGhldGljVHJhbnNpdGlvbkV2ZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9TeW50aGV0aWNUcmFuc2l0aW9uRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTeW50aGV0aWNXaGVlbEV2ZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ludGhldGljTW91c2VFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljTW91c2VFdmVudCcpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgV2hlZWxFdmVudFxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvXG4gKi9cbnZhciBXaGVlbEV2ZW50SW50ZXJmYWNlID0ge1xuICBkZWx0YVg6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiAnZGVsdGFYJyBpbiBldmVudCA/IGV2ZW50LmRlbHRhWCA6XG4gICAgLy8gRmFsbGJhY2sgdG8gYHdoZWVsRGVsdGFYYCBmb3IgV2Via2l0IGFuZCBub3JtYWxpemUgKHJpZ2h0IGlzIHBvc2l0aXZlKS5cbiAgICAnd2hlZWxEZWx0YVgnIGluIGV2ZW50ID8gLWV2ZW50LndoZWVsRGVsdGFYIDogMDtcbiAgfSxcbiAgZGVsdGFZOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gJ2RlbHRhWScgaW4gZXZlbnQgPyBldmVudC5kZWx0YVkgOlxuICAgIC8vIEZhbGxiYWNrIHRvIGB3aGVlbERlbHRhWWAgZm9yIFdlYmtpdCBhbmQgbm9ybWFsaXplIChkb3duIGlzIHBvc2l0aXZlKS5cbiAgICAnd2hlZWxEZWx0YVknIGluIGV2ZW50ID8gLWV2ZW50LndoZWVsRGVsdGFZIDpcbiAgICAvLyBGYWxsYmFjayB0byBgd2hlZWxEZWx0YWAgZm9yIElFPDkgYW5kIG5vcm1hbGl6ZSAoZG93biBpcyBwb3NpdGl2ZSkuXG4gICAgJ3doZWVsRGVsdGEnIGluIGV2ZW50ID8gLWV2ZW50LndoZWVsRGVsdGEgOiAwO1xuICB9LFxuICBkZWx0YVo6IG51bGwsXG5cbiAgLy8gQnJvd3NlcnMgd2l0aG91dCBcImRlbHRhTW9kZVwiIGlzIHJlcG9ydGluZyBpbiByYXcgd2hlZWwgZGVsdGEgd2hlcmUgb25lXG4gIC8vIG5vdGNoIG9uIHRoZSBzY3JvbGwgaXMgYWx3YXlzICsvLSAxMjAsIHJvdWdobHkgZXF1aXZhbGVudCB0byBwaXhlbHMuXG4gIC8vIEEgZ29vZCBhcHByb3hpbWF0aW9uIG9mIERPTV9ERUxUQV9MSU5FICgxKSBpcyA1JSBvZiB2aWV3cG9ydCBzaXplIG9yXG4gIC8vIH40MCBwaXhlbHMsIGZvciBET01fREVMVEFfU0NSRUVOICgyKSBpdCBpcyA4Ny41JSBvZiB2aWV3cG9ydCBzaXplLlxuICBkZWx0YU1vZGU6IG51bGxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGRpc3BhdGNoQ29uZmlnIENvbmZpZ3VyYXRpb24gdXNlZCB0byBkaXNwYXRjaCB0aGlzIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BhdGNoTWFya2VyIE1hcmtlciBpZGVudGlmeWluZyB0aGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICogQGV4dGVuZHMge1N5bnRoZXRpY01vdXNlRXZlbnR9XG4gKi9cbmZ1bmN0aW9uIFN5bnRoZXRpY1doZWVsRXZlbnQoZGlzcGF0Y2hDb25maWcsIGRpc3BhdGNoTWFya2VyLCBuYXRpdmVFdmVudCwgbmF0aXZlRXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIFN5bnRoZXRpY01vdXNlRXZlbnQuY2FsbCh0aGlzLCBkaXNwYXRjaENvbmZpZywgZGlzcGF0Y2hNYXJrZXIsIG5hdGl2ZUV2ZW50LCBuYXRpdmVFdmVudFRhcmdldCk7XG59XG5cblN5bnRoZXRpY01vdXNlRXZlbnQuYXVnbWVudENsYXNzKFN5bnRoZXRpY1doZWVsRXZlbnQsIFdoZWVsRXZlbnRJbnRlcmZhY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bnRoZXRpY1doZWVsRXZlbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1N5bnRoZXRpY1doZWVsRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBmaW5kRE9NTm9kZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gcmVxdWlyZSgnLi9SZWFjdEN1cnJlbnRPd25lcicpO1xudmFyIFJlYWN0RE9NQ29tcG9uZW50VHJlZSA9IHJlcXVpcmUoJy4vUmVhY3RET01Db21wb25lbnRUcmVlJyk7XG52YXIgUmVhY3RJbnN0YW5jZU1hcCA9IHJlcXVpcmUoJy4vUmVhY3RJbnN0YW5jZU1hcCcpO1xuXG52YXIgZ2V0TmF0aXZlQ29tcG9uZW50RnJvbUNvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vZ2V0TmF0aXZlQ29tcG9uZW50RnJvbUNvbXBvc2l0ZScpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgRE9NIG5vZGUgcmVuZGVyZWQgYnkgdGhpcyBlbGVtZW50LlxuICpcbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdGRvbS5maW5kZG9tbm9kZVxuICpcbiAqIEBwYXJhbSB7UmVhY3RDb21wb25lbnR8RE9NRWxlbWVudH0gY29tcG9uZW50T3JFbGVtZW50XG4gKiBAcmV0dXJuIHs/RE9NRWxlbWVudH0gVGhlIHJvb3Qgbm9kZSBvZiB0aGlzIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGZpbmRET01Ob2RlKGNvbXBvbmVudE9yRWxlbWVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgaWYgKG93bmVyICE9PSBudWxsKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhvd25lci5fd2FybmVkQWJvdXRSZWZzSW5SZW5kZXIsICclcyBpcyBhY2Nlc3NpbmcgZmluZERPTU5vZGUgaW5zaWRlIGl0cyByZW5kZXIoKS4gJyArICdyZW5kZXIoKSBzaG91bGQgYmUgYSBwdXJlIGZ1bmN0aW9uIG9mIHByb3BzIGFuZCBzdGF0ZS4gSXQgc2hvdWxkICcgKyAnbmV2ZXIgYWNjZXNzIHNvbWV0aGluZyB0aGF0IHJlcXVpcmVzIHN0YWxlIGRhdGEgZnJvbSB0aGUgcHJldmlvdXMgJyArICdyZW5kZXIsIHN1Y2ggYXMgcmVmcy4gTW92ZSB0aGlzIGxvZ2ljIHRvIGNvbXBvbmVudERpZE1vdW50IGFuZCAnICsgJ2NvbXBvbmVudERpZFVwZGF0ZSBpbnN0ZWFkLicsIG93bmVyLmdldE5hbWUoKSB8fCAnQSBjb21wb25lbnQnKSA6IHZvaWQgMDtcbiAgICAgIG93bmVyLl93YXJuZWRBYm91dFJlZnNJblJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChjb21wb25lbnRPckVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjb21wb25lbnRPckVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICByZXR1cm4gY29tcG9uZW50T3JFbGVtZW50O1xuICB9XG5cbiAgdmFyIGluc3QgPSBSZWFjdEluc3RhbmNlTWFwLmdldChjb21wb25lbnRPckVsZW1lbnQpO1xuICBpZiAoaW5zdCkge1xuICAgIGluc3QgPSBnZXROYXRpdmVDb21wb25lbnRGcm9tQ29tcG9zaXRlKGluc3QpO1xuICAgIHJldHVybiBpbnN0ID8gUmVhY3RET01Db21wb25lbnRUcmVlLmdldE5vZGVGcm9tSW5zdGFuY2UoaW5zdCkgOiBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnRPckVsZW1lbnQucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ2ZpbmRET01Ob2RlIHdhcyBjYWxsZWQgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH0gZWxzZSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0VsZW1lbnQgYXBwZWFycyB0byBiZSBuZWl0aGVyIFJlYWN0Q29tcG9uZW50IG5vciBET01Ob2RlIChrZXlzOiAlcyknLCBPYmplY3Qua2V5cyhjb21wb25lbnRPckVsZW1lbnQpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kRE9NTm9kZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvZmluZERPTU5vZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXROYXRpdmVDb21wb25lbnRGcm9tQ29tcG9zaXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3ROb2RlVHlwZXMgPSByZXF1aXJlKCcuL1JlYWN0Tm9kZVR5cGVzJyk7XG5cbmZ1bmN0aW9uIGdldE5hdGl2ZUNvbXBvbmVudEZyb21Db21wb3NpdGUoaW5zdCkge1xuICB2YXIgdHlwZTtcblxuICB3aGlsZSAoKHR5cGUgPSBpbnN0Ll9yZW5kZXJlZE5vZGVUeXBlKSA9PT0gUmVhY3ROb2RlVHlwZXMuQ09NUE9TSVRFKSB7XG4gICAgaW5zdCA9IGluc3QuX3JlbmRlcmVkQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJlYWN0Tm9kZVR5cGVzLk5BVElWRSkge1xuICAgIHJldHVybiBpbnN0Ll9yZW5kZXJlZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBSZWFjdE5vZGVUeXBlcy5FTVBUWSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlQ29tcG9uZW50RnJvbUNvbXBvc2l0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvZ2V0TmF0aXZlQ29tcG9uZW50RnJvbUNvbXBvc2l0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuKiBAcHJvdmlkZXNNb2R1bGUgcmVuZGVyU3VidHJlZUludG9Db250YWluZXJcbiovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0TW91bnQgPSByZXF1aXJlKCcuL1JlYWN0TW91bnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdE1vdW50LnJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgXHQ8aDE+UmVhY3QgVG9Eb3MgQXBwITwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=