<template>
        <v-dialog v-model="dilaog">
            <template v-slot:activator="{on}"> 
                <v-btn v-on="on">
                  See Me
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    {{event.event_name}}
                </v-card-title>
            </v-card>
        </v-dialog>  
</template>

<script>
import {Events} from '../services'
export default {
    name:"popup",
    props: ['id'],
    data(){
        return{
            event: [],
            dilaog: false
        }
    },
    async mounted(){
        console.log("Ovaj id", this.id)
        this.event = await Events.getOneEvent(10003)
        console.log("This event", this.event)
    },
}
</script>