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

    /***/ './src/admin/index.tsx':
      /*!*****************************!*\
  !*** ./src/admin/index.tsx ***!
  \*****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ FeedbackPage,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
        /* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ 'flarum/admin/app');
        /* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! flarum/admin/components/AdminPage */ 'flarum/admin/components/AdminPage'
        );
        /* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var flarum_common_components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! flarum/common/components/Avatar */ 'flarum/common/components/Avatar'
        );
        /* harmony import */ var flarum_common_components_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_components_Avatar__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! flarum/common/components/LinkButton */ 'flarum/common/components/LinkButton'
        );
        /* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! flarum/common/components/LoadingIndicator */ 'flarum/common/components/LoadingIndicator'
        );
        /* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! flarum/common/extend */ 'flarum/common/extend'
        );
        /* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! flarum/admin/components/AdminNav */ 'flarum/admin/components/AdminNav'
        );
        /* harmony import */ var flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_7__
        );

        flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('mcaxe-feedback', () => {
          (0, flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)(
            flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_7___default().prototype,
            'items',
            function (items) {
              items.add(
                'feedback-link',
                m(
                  flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default(),
                  {
                    icon: 'fas fa-comment-dots',
                    href: '/mcaxe-feedback',
                  },
                  '\u610F\u89C1\u53CD\u9988'
                )
              );
            }
          );
          flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().routes['mcaxe-feedback'] = {
            path: '/mcaxe-feedback',
            component: FeedbackPage,
          };
        });
        class FeedbackPage extends flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2___default() {
          constructor() {
            super(...arguments);
            (0, _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'feedbacks', []);
            (0, _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'loading', true);
            (0, _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'pageOffset', 0);
            (0, _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'pageLimit', 20);
          }
          headerInfo() {
            return {
              title: '用户反馈',
              description: '查看用户提交的反馈信息',
              icon: 'fas fa-comment-dots',
              className: 'FeedbackPage',
            };
          }
          oninit(vnode) {
            super.oninit(vnode);
            this.loadFeedbacks();
          }
          loadFeedbacks() {
            this.loading = true;
            flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default()
              .request({
                method: 'GET',
                url:
                  flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') +
                  `/mcaxe-flarum-feedbacks-list?page[offset]=${this.pageOffset}&page[limit]=${this.pageLimit}`,
              })
              .then((result) => {
                flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(result);
                this.feedbacks = result.data;
                this.loading = false;
                m.redraw();
              });
          }
          prevPage() {
            if (this.pageOffset >= this.pageLimit) {
              this.pageOffset -= this.pageLimit;
              this.loadFeedbacks();
            }
          }
          nextPage() {
            // if (this.feedbacks.length === this.pageLimit) {
            this.pageOffset += this.pageLimit;
            this.loadFeedbacks();
            // }
          }
          content() {
            return m(
              'div',
              {
                className: 'FeedbackPage-container',
              },
              this.loading
                ? m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default(), null)
                : m(
                    'div',
                    {
                      className: 'FeedbackPage-grid',
                    },
                    this.feedbacks.map((item) => {
                      const user = item.relationships?.user?.data;
                      const userModel = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('users', user?.id);
                      if (!userModel) return null;
                      return m(
                        'div',
                        {
                          className: 'FeedbackPage-card',
                        },
                        m(
                          'div',
                          {
                            className: 'FeedbackPage-user-info',
                          },
                          m(flarum_common_components_Avatar__WEBPACK_IMPORTED_MODULE_3___default(), {
                            user: userModel,
                            className: 'FeedbackPage-avatar',
                          }),
                          m(
                            'div',
                            null,
                            m(
                              'a',
                              {
                                href: `${flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl')}/u/${userModel.username()}`,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: 'FeedbackPage-username',
                              },
                              userModel.username()
                            ),
                            m(
                              'p',
                              {
                                className: 'FeedbackPage-timestamp',
                              },
                              new Date(item.attributes.createdAt).toLocaleString()
                            )
                          )
                        ),
                        m(
                          'p',
                          {
                            className: 'FeedbackPage-feedback',
                          },
                          item.attributes.feedback
                        )
                      );
                    })
                  ),
              !this.loading &&
                m(
                  'div',
                  {
                    className: 'FeedbackPage-pagination',
                  },
                  m(
                    'button',
                    {
                      className: 'Button',
                      onclick: () => this.prevPage(),
                      disabled: this.pageOffset === 0,
                    },
                    '\u4E0A\u4E00\u9875'
                  ),
                  m(
                    'button',
                    {
                      className: 'Button',
                      onclick: () => this.nextPage(),
                    },
                    '\u4E0B\u4E00\u9875'
                  )
                )
            );
          }
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

    /***/ 'flarum/admin/app':
      /*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'admin/app')" ***!
  \******************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'admin/app');

        /***/
      },

    /***/ 'flarum/admin/components/AdminNav':
      /*!**********************************************************************!*\
  !*** external "flarum.reg.get('core', 'admin/components/AdminNav')" ***!
  \**********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'admin/components/AdminNav');

        /***/
      },

    /***/ 'flarum/admin/components/AdminPage':
      /*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'admin/components/AdminPage')" ***!
  \***********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'admin/components/AdminPage');

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

    /***/ 'flarum/common/components/Avatar':
      /*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Avatar')" ***!
  \*********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/components/Avatar');

        /***/
      },

    /***/ 'flarum/common/components/LinkButton':
      /*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LinkButton')" ***!
  \*************************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/components/LinkButton');

        /***/
      },

    /***/ 'flarum/common/components/LoadingIndicator':
      /*!*******************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LoadingIndicator')" ***!
  \*******************************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = flarum.reg.get('core', 'common/components/LoadingIndicator');

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
  !*** ./admin.ts ***!
  \******************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ './src/common/index.ts');
    /* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ './src/admin/index.tsx');
  })();

  module.exports = __webpack_exports__;
  /******/
})();
//# sourceMappingURL=admin.js.map
