(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  4: function (n, o, r) {
    var e = {
      './zh-cn': 1,
      './zh-cn.js': 1
    }

    function t (n) {
      var o = c(n)
      return r(o)
    }

    function c (n) {
      if (!r.o(e, n)) {
        var o = new Error('Cannot find module \'' + n + '\'')
        throw o.code = 'MODULE_NOT_FOUND', o
      }
      return e[n]
    }

    t.keys = function () {return Object.keys(e)}, t.resolve = c, n.exports = t, t.id = 4
  }
}])
