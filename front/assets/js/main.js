const brand = document.getElementsByClassName('brand') || null
const brandName = document.getElementsByClassName('brand_name') || null
const brandLogo = document.getElementsByClassName('brand_logo') || null
const sbBtn = document.getElementById('score-board') || null
const score = document.getElementById('scoreBoard') || null


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

const back = () => {
  window.Location = "/"
}



score.classList.add('hide')

if (sbBtn !== null){
  sbBtn.onclick = (e) => {
    e.preventDefault();
    toggle('scoreBoard')
  }
}

if (brand !== null) {
  brand.onclick = (e) => {
    e.preventDefault()
    console.log('click');
    back();
  }
}

if (brandName !== null) {
  brandName.onclick = (e) => {
    e.preventDefault()
    console.log('click');
    back();
  }
}

if (brandLogo !== null) {
  brandLogo.onclick = (e) => {
    e.preventDefault()
    console.log('click');
    back();
  }
}