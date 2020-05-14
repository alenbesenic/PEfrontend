<template>
  <div class="container">
    <v-card class="mx-auto" max-width="400" v-for="event in events" :key="event.id">
      <v-img class="white--text align-end" height="200px" :src="event.picture_url">
        <v-card-title>{{event.event_name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Date: {{event.date}}     Price:{{event.event_price}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{event.location}}</div>
        <div>{{event.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="goToEventPage(event.event_url)">See Event</v-btn>
      </v-card-actions>
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
    },
    goToEventPage(a){
      window.open(a)
    }
  }
}
</script>
