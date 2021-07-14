export class ProgressBar{
  add_progress_bar(){
    document.addEventListener('turbolinks:load', ()=>this.set_control())
  }
  
  set_control(){
    let control = document.getElementById('progress-bar')

    if (control) {
        this.showCurrentProgress(control)
    }
  }
  showCurrentProgress(control) {
      let progress = control.dataset.progress
      control.style.width = progress 
  }
}
