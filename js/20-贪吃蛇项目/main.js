const getRandom = (a, b) => {
  let max = Math.max(a, b)
  let min = Math.min(a, b)
  return parseInt(Math.random() * (max - min) + min)
}

//食物类
class Food {
  constructor({ x = 0, y = 0, width = 20, height = 20, color = 'green' } = {}) {
    this.elements = []
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }
  render(map) {
    this.remove()
    this.x = getRandom(0, map.offsetWidth / this.width - 1) * this.width
    this.y = getRandom(0, map.offsetHeight / this.height - 1) * this.height
    let div = document.createElement('div')
    map.appendChild(div)
    this.elements.push(div)
    div.style.position = 'absolute'
    div.style.left = this.x + 'px'
    div.style.top = this.y + 'px'
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    div.style.backgroundColor = this.color
  }
  remove() {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      this.elements[i].parentNode.removeChild(this.elements[i])
      this.elements.splice(i, 1)
    }
  }
}

//🐍类
class Snake {
  constructor({ width = 20, height = 20, direction = 'right' } = {}) {
    this.elements = []
    this.width = width
    this.height = height
    this.direction = direction
    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'blue' },
      { x: 1, y: 2, color: 'blue' }
    ]
  }
  move(food, map) {
    let head = this.body[0]
    for (let i = this.body.length; i > 0; i++) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }

    switch (this.direction) {
      case 'right':
        head.x += 1
        break;
      case 'left':
        head.x -= 1
        break;
      case 'up':
        head.y += 1
        break;
      case 'down':
        head.y -= 1
        break;
      default:
        break;
    }

    let headX = head.x*this.width
    let headY = head.y*this.height
    if (headX===food.x&&headY===food.y) {
      let last = this.body[this.body.length-1]
      this.body.push({
        x:last.x,
        y:last.y,
        color:last.color
      })
      food.render(map)
    }
  }
  render(map) {
    this.remove()
    for (let i = 0; i < this.body.length; i++) {
      let jie = this.body[i]
      let div = document.createElement('div')
      map.appendChild(div)
      this.elements.push(div)
      div.style.position = 'absolute'
      div.style.left = jie.x * this.width + 'px'
      div.style.top = jie.y * this.height + 'px'
      div.style.width = this.width + 'px'
      div.style.height = this.height + 'px'
      div.style.backgroundColor = jie.color
    }
  }
  remove() {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      this.elements[i].parentNode.removeChild(this.elements[i])
      this.elements.splice(i, 1)
    }
  }
}

class Game{
  constructor(){
    this.food=new Food()
    this.snake=new Snake()
    this.map=map
    this.timeId = null
  }
  start(){
    this.food.render(this.map)
    this.snake.render(this.map)
  }
}