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
  joffreyContainer.style.left = '55%'
  // joffreyContainer.style.border = '2px solid red'
  // joffreyContainer.style.background = 'yellow'
  joffrey = document.querySelector('#joffrey')
  joffreyContainer.append(joffrey);
  joffrey.style.width = '52%'
  joffrey.style.position = 'absolute'
  joffrey.style.top = 0
  joffrey.style.left = '45%'
  king = document.querySelector('#king')
  joffreyContainer.append(king);
  king.style.position = 'absolute'
  king.style.bottom = 0
  king.style.right = 0
  king.style.width = '100%'
  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'
  // Prop 2

  // Action!

  // ned throws sword at joffrey's neck

  frame(function() {
    sword.style.top = '72%'
    sword.style.left = '38%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '46%'
  })

  frame(function() {
    sword.style.top = '63%'
    sword.style.left = '53%'
  })

  // joffrey's head falls off
  // joffrey.style.left = '45%'
  // joffrey.style.top = 0

  frame(function() {
    joffrey.style.top = '20%'
    joffrey.style.left = '81.25%'
    joffrey.style.transform = 'rotateZ(22.5deg)'
  })

  frame(function() {
    joffrey.style.top = '40%'
    joffrey.style.left = '117.5%'
    joffrey.style.transform = 'rotateZ(45deg)'
  })

  frame(function() {
    joffrey.style.top = '60%'
    joffrey.style.left = '153.75%'
    joffrey.style.transform = 'rotateZ(67.5deg)'
  })

  frame(function() {
    joffrey.style.top = '80%'
    joffrey.style.left = '190%'
    joffrey.style.transform = 'rotateZ(90deg)'
  })

}
