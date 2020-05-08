<template>
  <div class="container">
    <v-card v-for="event in events" :key="event.id">
      <v-card-title>{{event.event_name}}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import {Events} from '../services'

export default {
  name: 'Home',
  components: {
    
  },
  data:()=>({
    events:[]
  }),
  created(){
    this.getEvents()
  },
  methods:{
    async getEvents(){
      this.events = await Events.getAllEvents()
      console.log("All events", this.events)
    }
  }
}
</script>
