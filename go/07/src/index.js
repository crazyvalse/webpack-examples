import './style.css'

document.getElementById('btn').onclick = function () {
  import(/* webpackChunkName: 'moment', webpackPrefetch: true */'moment').then(function ({ default: mm }) {
    document.getElementById('app').innerText = mm().format('L')
  })
}
