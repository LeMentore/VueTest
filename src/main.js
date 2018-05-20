import Vue from 'vue'
import './assets/css/foundation.min.css'
import './assets/css/app.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame(){
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    }
  }
})
