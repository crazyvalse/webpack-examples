import moment from 'moment'

function foo () {
  document.getElementById('append').innerText = moment().format('L')
}

foo()
