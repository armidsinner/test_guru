export class Timer{
timeLeft
  constructor(timer) {
    this.timer = timer
  }

  set_timer() {
    this.timeLeft = this.timer.dataset.timer * 60
    setInterval(()=>this.interval_ongoing(), 1000)
  }

  interval_ongoing() {
    if (this.timeLeft <= 0 ){
      document.querySelector('form').submit()
    }
    this.timeLeft--
    this.change_timer()
  }

  change_timer() {
    let minutes = Math.floor(this.timeLeft / 60)
    let seconds = this.timeLeft % 60 
    if (seconds < 10){
      seconds = '0' +  this.timeLeft % 60 
    } 
    this.timer.innerHTML = `Время до окончания теста: ${minutes}:${seconds}`
  }
}
