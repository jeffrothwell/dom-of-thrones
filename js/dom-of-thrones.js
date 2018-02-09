var time = 0

function frame(actions) {

  setTimeout(function () {
    actions()
  }, time)

  time += 200

}

document.addEventListener('DOMContentLoaded', function () {
  scene3()
})
