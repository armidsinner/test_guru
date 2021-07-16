export class Timer{
timeLeft
  set_timer (){
    const timer = document.querySelector('.timer')
    if (timer) {
      this.timeLeft = timer.dataset.timer * 60
      const url = timer.dataset.url
      console.log('1')
      setInterval(()=>this.interval_ongoing(url, timer), 1000)
    }
  }
  //this.interval_ongoing(timeLeft, url, timer)

  interval_ongoing(url, timer){
    if (this.timeLeft <= 0 ){
     window.location.href = url
    }
    this.timeLeft--
    this.change_timer(timer)
  }


  change_timer(timer) {
    let minutes = Math.floor(this.timeLeft / 60)
    let seconds = this.timeLeft % 60 
    if (seconds < 10){
      seconds = '0' +  this.timeLeft % 60 
    } 
    timer.innerHTML = `Время до окончания теста: ${minutes}:${seconds}`
  }
}