import Vue from 'vue'
import './assets/css/foundation.min.css'
import './assets/css/app.css'

new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  }
})
