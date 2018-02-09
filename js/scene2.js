function scene2() {

  // Setup Stage
  stage = document.querySelector('#stage');
  castle = document.querySelector('#castle');
  castleImgSrc = castle.getAttribute('src');
  stageImg = stage.querySelector('#stage-img');
  stageImg.setAttribute('src', castleImgSrc);
  // Setup Cast
  // Character 1
  nedContainer = document.createElement('div');
  stage.append(nedContainer);
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  // Character 2
  joffreyContainer = document.createElement('div');
  stage.append(joffreyContainer);
  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '10%'
  joffreyContainer.style.height = '35%'
  joffreyContainer.style.top = '55%'
  joffreyContainer.style.right = '25%'
  // joffreyContainer.style.border = '2px solid red'
  // joffreyContainer.style.background = 'yellow'
  joffrey = document.querySelector('#joffrey')
  joffreyContainer.append(joffrey);
  joffrey.style.width = '52%'
  joffrey.style.position = 'absolute'
  joffrey.style.top = 0
  joffrey.style.right = 0
  king = document.querySelector('#king')
  joffreyContainer.append(king);
  king.style.position = 'absolute'
  king.style.bottom = 0
  king.style.right = 0
  king.style.width = '100%'
  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
