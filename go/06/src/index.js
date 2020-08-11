import moment from 'moment'

function foo () {
  document.getElementById('app').innerText = moment().format('YYYY')
}

foo()

window.foo = foo
