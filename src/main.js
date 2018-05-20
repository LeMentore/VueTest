import Vue from 'vue'
import './assets/css/foundation.min.css'
import './assets/css/app.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame(){
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack(){
      const damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Вы нанесли урон противнику: ${damage}`
      })
      if(this.checkWin()) return

      this.monsterAttack()
    },
    specialAttack(){
      this.monsterHealth -= this.calculateDamage(10, 20)
      if(this.checkWin()) return
      this.monsterAttack()
    },
    heal(){
      if(this.playerHealth <= 90){
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }

      this.monsterAttack()
    },
    giveUp(){
      this.gameIsRunning = false
    },
    monsterAttack(){
      const damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage
      this.checkWin()
      this.turns.unshift({
        isPlayer: false,
        text: `Противник нанёс вам урон: ${damage}`
      })
    },
    calculateDamage(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin(){
      if(this.monsterHealth <= 0){
        if(confirm('Победа! Начать новую игру?')){
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if(this.playerHealth <= 0){
        if(confirm('Поражение! Начать новую игру?')){
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }

  }
})
