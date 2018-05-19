<template>
  <h3 v-if='email'>Thanks for loggining, <span v-success="'red'">{{email}}</span></h3>
</template>

<script>
  import { eventBus } from './main'
  export default {
    data(){
      return{
        email: ''
      }
    },
    created(){
      eventBus.$on('login', data => {
        this.email = data.email
      })
    }
  }
</script>
