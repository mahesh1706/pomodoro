const timer = document.getElementById('time')
const control = document.getElementById('control')
const settings = document.getElementById('settings')
const pomodoro = document.getElementById('pomodoro')
const short = document.getElementById('short')
const long = document.getElementById('long')
const radio = document.getElementById('radio')


// start-pause controls
control.addEventListener('click', () => {
  if (control.textContent === 'start') {
    control.textContent = 'pause'
    timer.style.color = '#F96C71'
    start()
  }
  else if (control.textContent === 'pause') {
    control.textContent = 'start'
    timer.style.color = '#656A83'
    stop()
  }
})

// Default timer settings
let s = 1500;
timer.textContent = '20:00'

// Change timer settings with user input
radio.addEventListener('change', () => {
  if (pomodoro.checked) {
    timer.textContent = '20:00'
    s = 1200
  } else if (short.checked) {
    timer.textContent = '5:00'
    s = 300
  } else if (long.checked) {
    timer.textContent = '15:00'
    s = 900
  }
})

// timer functionality
let interval
function updateTime() {
    s--
    // calculate s m h
  let hours = Math.floor(s / 3600)
  let mins = Math.floor((s - (hours * 3600)) / 60)
  let secs = s % 60
  // decimal formatting
  if (secs < 10) secs = '0' + secs
  if (mins < 10) mins = '0' + mins
  if (hours < 10) hours = '0' + hours
  
  // update DOM
  timer.textContent = `${mins}:${secs}`
    if (!s) {
      clearInterval(interval)
      alert('🚨 Getting to Close')
    }
  }


function start() {
  if (interval) {
    return
  }
  interval = setInterval(updateTime, 1000)
}

function stop() {
  clearInterval(interval)
  interval = null;
}
