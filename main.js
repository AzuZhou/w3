document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })

  window.onscroll = function() {
    if (window.scrollY > 400) {
      document.getElementById('nuestro-estilo').style.animation = 'fade-in .5s linear both'
    }
    if (window.scrollY > 800) {
      document.getElementById('galeria').style.animation = 'fade-in .5s linear both'
    }
    if (window.scrollY > 1600) {
      document.getElementById('contactate').style.animation = 'fade-in .5s linear both'
    }
    if (window.scrollY > 2000) {
      document.getElementById('contacto').style.animation = 'fade-in .5s linear both'
    }
  }

  let currentImgId
  let currentImg

  getImg = () => {
    document.getElementsByClassName('siguiente')[0].style.display = 'flex'
    document.getElementsByClassName('anterior')[0].style.display = 'flex'

    if (currentImgId === 'img1') {
      currentImg = 'galeria_1.jpg'
      document.getElementsByClassName('anterior')[0].style.display = 'none'
    } else if (currentImgId === 'img2') {
      currentImg = 'galeria_2.jpg'
    } else if (currentImgId === 'img3') {
      currentImg = 'galeria_3.jpg'
    } else if (currentImgId === 'img4') {
      currentImg = 'galeria_4.jpg'
    } else if (currentImgId === 'img5') {
      currentImg = 'galeria_5.jpg'
    } else {
      currentImg = 'galeria_6.jpg'
      document.getElementsByClassName('siguiente')[0].style.display = 'none'
    }
  }

  showImg = () => {
    document.getElementsByClassName('image')[0].innerHTML =
      '<img id=' +
      "'" +
      currentImgId +
      "'" +
      ' src=' +
      "'" +
      currentImg +
      "'" +
      ' class="popup-img">'
  }

  popup = () => {
    currentImgId = event.target.id
    getImg()
    showImg()
    document.getElementById('popup').style.display = 'flex'
  }

  close = () => {
    document.getElementById('popup').style.display = 'none'
  }

  anterior = () => {
    let idInt = parseInt(currentImgId[3])
    let newId

    if (idInt > 1) {
      newId = idInt - 1
      currentImgId = 'img' + newId
      getImg()
      showImg()
    }
  }

  siguiente = () => {
    let idInt = parseInt(currentImgId[3])
    let newId

    if (idInt < 6) {
      newId = idInt + 1
      currentImgId = 'img' + newId
      getImg()
      showImg()
    }
  }

  document.getElementById('img1').addEventListener('click', popup)
  document.getElementById('img2').addEventListener('click', popup)
  document.getElementById('img3').addEventListener('click', popup)
  document.getElementById('img4').addEventListener('click', popup)
  document.getElementById('img5').addEventListener('click', popup)
  document.getElementById('img6').addEventListener('click', popup)
  document.getElementsByClassName('cerrar')[0].addEventListener('click', close)
  document.getElementsByClassName('anterior')[0].addEventListener('click', anterior)
  document.getElementsByClassName('siguiente')[0].addEventListener('click', siguiente)
})
