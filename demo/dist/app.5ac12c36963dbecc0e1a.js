!function (e) {
  var n = {}

  function r (t) {
    if (n[t]) return n[t].exports
    var o = n[t] = { i: t, l: !1, exports: {} }
    return e[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }

  r.m = e, r.c = n, r.d = function (e, n, t) {
    r.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    })
  }, r.r = function (e) {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })}, r.t = function (e, n) {
    if (1 & n && (e = r(e)), 8 & n) return e
    if (4 & n && 'object' == typeof e && e && e.__esModule) return e
    var t = Object.create(null)
    if (r.r(t), Object.defineProperty(t, 'default', {
      enumerable: !0,
      value: e
    }), 2 & n && 'string' != typeof e) for (var o in e) r.d(t, o, function (n) {return e[n]}.bind(null, o))
    return t
  }, r.n = function (e) {
    var n = e && e.__esModule ? function () {return e.default} : function () {return e}
    return r.d(n, 'a', n), n
  }, r.o = function (e, n) {return Object.prototype.hasOwnProperty.call(e, n)}, r.p = '', r(r.s = 8)
}({
  8: function (e, n, r) {
    'use strict'
    r.r(n)
    var t = {}
    r.r(t), r.d(t, 'square', (function () {return o})), r.d(t, 'cube', (function () {return u})), r.d(t, 'floor', (function () {return i})), r.d(t, 'ceil', (function () {return f}))

    function o (e) {return e * e}

    function u (e) {return e * e * e}

    function i (e) {return Math.floor(e)}

    function f (e) {return Math.ceil(e)}

    console.info('这里是bar'), console.info(t)
  }
})
