'use strict'

$(document).ready(function () {
  var modalButon = document.getElementById('modalButon')
  var overlay = document.getElementById('overlay')
  var modal = document.getElementById('modal')
  var content = document.getElementById('content')
  var closeModalButton = document.getElementById('closeModalButton')
  var body = document.getElementsByTagName('body')
  var slideShow = document.getElementById('slideShow')

  $(modalButon).on('click', function () {
    $(overlay).addClass('on')
    $(modal).addClass('open')
    $(content).addClass('modal-opened')
  })

  $(overlay).on('click', function () {
    if ($(modal).hasClass('open')) {
      $(modal).removeClass('open')
      $(overlay).removeClass('on')
      $(content).removeClass('modal-opened')
    }
  })

  $(closeModalButton).on('click', function () {
    if ($(modal).hasClass('open')) {
      $(modal).removeClass('open')
      $(overlay).removeClass('on')
      $(content).removeClass('modal-opened')
    }
  })

  if (slideShow) {
    if ($(body).hasClass('dark')) {
      $(slideShow).backstretch([
        '../assets/images/bg001.jpg',
        '../assets/images/bg002.jpg',
        '../assets/images/bg003.jpg',
        '../assets/images/bg004.jpg'
      ], {duration: 4000, fade: 2500})
    }
    else{
      $(slideShow).backstretch([
        '../assets/images/bg006.jpg',
        '../assets/images/bg007.jpg',
        '../assets/images/bg008.jpg',
        '../assets/images/bg009.jpg',
        '../assets/images/bg010.jpg'
      ], {duration: 4000, fade: 2500})
    }
  }


  $(body).mCustomScrollbar({
    scrollInertia: 200
  })

  $(modal).mCustomScrollbar({
    scrollInertia: 200
  })

})
