<template>
    <v-container fluid>
    <v-row>
        <v-card class="mx-auto" max-width="400" v-for="cat in categories" :key="cat.title" outlined>
            <v-image :src="cat.picture" router-link :to="cat.route"></v-image>
         <v-card-title>
             {{cat.title}}
         </v-card-title>

        </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            categories:[
                {title:'Outdor', picture:'../components/catpicture/libra', route:'/Libray'},
                {title:'Nightlife'},
                {title:'Library'}
            ]
        }
    }
}
</script>