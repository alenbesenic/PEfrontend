<template>
    <v-container fluid>
    <v-row>
        <v-card class="mx-auto my-4" max-width="400" v-for="event in events" :key="event.id" outlined>
          <v-img class="white--text align-end" height="200px" :src="event.picture_url">
            <v-card-title>{{event.event_name}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Date: {{event.date}}     Price:{{event.event_price}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Location: {{event.location}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="goToEventPage(event.event_url)">See Event</v-btn>
            <v-spacer></v-spacer>
            
            <v-dialog :key="event.id" hide-overlay max-width="600">
              <template v-slot:activator="{on}"> 
                <v-btn v-on="on">
                  See More
                </v-btn>
              </template>
              <v-card class="mx-auto" max-width="600" max-height="600" outlined>
                <v-img class="white--text align-end" :src="event.picture_url" contain></v-img>
                  <v-card-title>
                    {{event.event_name}}
                  </v-card-title>
                  <v-card-subtitle class="pb-0">Date: {{event.date}}</v-card-subtitle>
                  <v-card-subtitle class="pb-0">Price:{{event.event_price}}</v-card-subtitle>
                  <v-card-text class="text--primary">
                  <div>Location: {{event.location}}</div>
                    <br>
                  <div>{{event.description}}</div>
                  </v-card-text>
              </v-card>
            </v-dialog>  

          </v-card-actions>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
import {Events} from '../services'

export default {
  components: {
    
  },
  data:()=>({
    events:[],
    
  }),
  created(){
    this.getPast()
  },
  methods:{
    async getPast(){
      this.events = await Events.getPastEvents()
      console.log("Canceled", this.events)
    },
    goToEventPage(a){
      window.open(a)
    }
  }
}
</script>