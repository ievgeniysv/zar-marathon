const btnCharacterElem = document.getElementById('character-kick')
const btnEnemyElem = document.getElementById('enemy-kick')

const character = {
  name: 'Pikachu',
  defaultHp: 100,
  damageHp: 100,
  elHp: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
  name: 'Charmander',
  defaultHp: 100,
  damageHp: 100,
  elHp: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy')
}

btnCharacterElem.addEventListener('click', () => {
  changeHp(random(20),enemy)
})

btnEnemyElem.addEventListener('click', () => {
  changeHp(random(20),character)
})

function init() {
  console.log('start game')
  renderHp(character)
  renderHp(enemy)
}

function renderHp(person){
  person.elHp.innerText = person.damageHp + '/' + person.defaultHp
  person.elProgressbar.style.width = person.damageHp + '%'
}

function changeHp(count, person) {
  if(person.damageHp < count){
    person.damageHp = 0
    renderHp(person)
    btnCharacterElem.disabled = true
    alert(person.name + ' проиграл!')
  } else {
    person.damageHp -= count;
  }
  renderHp(person)
}

function random (num) {
  return Math.ceil(Math.random()*num)
}

init()
