const score = document.getElementById('scoreBoard').classList.add('hide')

const toggle = (element) => {
  const el = document.getElementById(element)
  if (el.classList.contains('show')) {
    el.classList.add('hide')
    el.classList.remove('show');
  } else {
    el.classList.add('show')
    el.classList.remove('hide')
  }
}

const sbBtn = document.getElementById('score-board')

sbBtn.onclick = (e) => {
  e.preventDefault();
  toggle('scoreBoard')
}

const brand = document.getElementById('brand')
brand.onclick = (e) => {
  e.preventDefault();
  this.location = "/"
}