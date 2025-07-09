/******/ (() => {
  // webpackBootstrap
  /******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/@babel/runtime/helpers/esm/defineProperty.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _defineProperty,
          /* harmony export */
        });
        /* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./toPropertyKey.js */ './node_modules/@babel/runtime/helpers/esm/toPropertyKey.js'
        );

        function _defineProperty(e, r, t) {
          return (
            (r = (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__['default'])(r)) in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = t),
            e
          );
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/esm/toPrimitive.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ toPrimitive,
          /* harmony export */
        });
        /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./typeof.js */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
        );

        function toPrimitive(t, r) {
          if ('object' != (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__['default'])(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || 'default');
            if ('object' != (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__['default'])(i)) return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === r ? String : Number)(t);
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/esm/toPropertyKey.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ toPropertyKey,
          /* harmony export */
        });
        /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./typeof.js */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
        );
        /* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./toPrimitive.js */ './node_modules/@babel/runtime/helpers/esm/toPrimitive.js'
        );

        function toPropertyKey(t) {
          var i = (0, _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__['default'])(t, 'string');
          return 'symbol' == (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__['default'])(i) ? i : i + '';
        }

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/esm/typeof.js':
      /*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _typeof,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';

          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
                  }),
            _typeof(o)
          );
        }

        /***/
      },

    /***/ './src/common/index.ts':
      /*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ 'flarum/common/app');
        /* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_app__WEBPACK_IMPORTED_MODULE_0__
        );

        flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('mcaxe-feedback-common', () => {
          console.log('[mcaxe/flarum-feedback] Hello, forum and admin!');
        });

        /***/
      },

    /***/ './src/forum/index.tsx':
      /*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
        /* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ 'flarum/forum/app');
        /* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! flarum/common/extend */ 'flarum/common/extend'
        );
        /* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! flarum/forum/components/IndexPage */ 'flarum/forum/components/IndexPage'
        );
        /* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! flarum/common/components/Button */ 'flarum/common/components/Button'
        );
        /* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! flarum/common/components/Modal */ 'flarum/common/components/Modal'
        );
        /* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! flarum/common/utils/Stream */ 'flarum/common/utils/Stream'
        );
        /* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__
        );

        class FeedbackModal extends flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_5___default() {
          constructor() {
            super(...arguments);
            (0, _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'feedbackText', void 0);
            (0, _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'error', void 0);
          }
          oninit(vnode) {
            super.oninit(vnode);
            this.feedbackText = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()('');
            this.loading = false;
            this.error = null;
          }
          view() {
            return m(
              'div',
              {
                className: `Modal ${this.className()}`,
                role: 'dialog',
                'aria-modal': 'true',
              },
              m(
                'div',
                {
                  className: 'Modal-content',
                },
                m(
                  'header',
                  {
                    className: 'Modal-header',
                  },
                  m(
                    'h3',
                    {
                      className: 'Modal-title',
                    },
                    this.title()
                  )
                ),
                this.content(),
                this.footer()
              )
            );
          }
          className() {
            return 'mcaxe-feedback-modal Modal--small';
          }
          title() {
            return '意见反馈';
          }
          content() {
            return m(
              'div',
              {
                className: 'Modal-body',
              },
              m('textarea', {
                className: 'FormControl',
                placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u610F\u89C1',
                value: this.feedbackText(),
                oninput: (e) => this.feedbackText(e.target.value),
                rows: '20',
                cols: '50',
                required: true,
                style: {
                  resize: 'none',
                },
              }),
              this.error &&
                m(
                  'p',
                  {
                    className: 'error',
                  },
                  this.error
                )
            );
          }
          footer() {
            return m(
              'div',
              {
                className: 'Modal-footer',
                style: {
                  display: 'flex',
                  gap: '12px',
                },
              },
              m(
                flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default(),
                {
                  className: 'Button Button--primary',
                  style: {
                    flex: 1,
                  },
                  loading: this.loading,
                  onclick: () => this.submit(),
                },
                '\u63D0\u4EA4'
              ),
              m(
                flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default(),
                {
                  className: 'Button',
                  style: {
                    flex: 1,
                  },
                  onclick: () => this.hide(),
                },
                '\u53D6\u6D88'
              )
            );
          }
          submit() {
            const text = this.feedbackText().trim();
            if (!text) {
              this.error = '反馈内容不能为空';
              return;
            }
            this.loading = true;
            this.error = null;
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default()
              .request({
                method: 'POST',
                url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/mcaxe-flarum-feedbacks',
                body: {
                  feedback: text,
                },
              })
              .then(() => {
                this.loading = false;
                this.hide();
                flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show(
                  {
                    type: 'success',
                  },
                  '反馈提交成功，谢谢！'
                );
              })
              .catch(() => {
                this.loading = false;
                this.error = '提交失败，请稍后重试';
              });
          }
        }
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('mcaxe-feedback', () => {
          console.log('[mcaxe/flarum-feedback] Hello, forum!');
          (0, flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)(
            flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default().prototype,
            'view',
            function (vdom) {
              const FeedbackButton = m(
                'div',
                {
                  className: 'mcaxe-feedback-button',
                },
                m(
                  flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default(),
                  {
                    className: 'Button Button--primary',
                    onclick: () => flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(FeedbackModal),
                  },
                  '\u610F\u89C1\u53CD\u9988'
                )
              );
              if (!Array.isArray(vdom.children)) {
                vdom.children = vdom.children ? [vdom.children] : [];
              }
              vdom.children.push(FeedbackButton);
            }
          );
        });

        /***/
      },

    /***/ 'flarum/common/app':
      /*!*******************************************************!*\
  !*** external "flarum.reg.get('core', 'common/app')" ***!
  \*******************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/app');

        /***/
      },

    /***/ 'flarum/common/components/Button':
      /*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/components/Button');

        /***/
      },

    /***/ 'flarum/common/components/Modal':
      /*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Modal')" ***!
  \********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/components/Modal');

        /***/
      },

    /***/ 'flarum/common/extend':
      /*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/extend');

        /***/
      },

    /***/ 'flarum/common/utils/Stream':
      /*!****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/Stream')" ***!
  \****************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/utils/Stream');

        /***/
      },

    /***/ 'flarum/forum/app':
      /*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'forum/app');

        /***/
      },

    /***/ 'flarum/forum/components/IndexPage':
      /*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/IndexPage')" ***!
  \***********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'forum/components/IndexPage');

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ flarum.reg._webpack_runtimes['mcaxe-feedback'] ||= __webpack_require__; // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
  (() => {
    'use strict';
    /*!******************!*\
  !*** ./forum.ts ***!
  \******************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ './src/common/index.ts');
    /* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ './src/forum/index.tsx');
  })();

  module.exports = __webpack_exports__;
  /******/
})();
//# sourceMappingURL=forum.js.map
