import moment from 'moment'

function foo () {
  document.getElementById('app').innerText = moment().format('L')
}

foo()
