<template>
    <v-container fluid>
    <v-row>
        <v-card class="mx-auto" router-link :to="cat.route" max-width="400" v-for="cat in categories" :key="cat.title" outlined>
            <v-img :src="cat.picture" ></v-img>
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
                {title:'Outdor', picture:'https://www.tramontana-outdoor.com/wp-content/uploads/2019/04/2-4.jpg', route:'/Outdoor'},
                {title:'Nightlife', picture:'https://www.cvitanic.info/wp-content/uploads/2015/01/nightlife-7.jpg',  route:'/Nightlife'},
                {title:'Library', picture:'https://internova.hr/wp-content/uploads/2019/03/internova_public_library_01.jpg', route:'/Library'}
            ]
        }
    }
}
</script>