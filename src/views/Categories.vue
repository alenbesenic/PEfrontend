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
                {title:'Aquarium', picture:'https://aquarium.hr/images/vijesti/koralji_normalna.jpg',  route:'/Aquarium'},
                {title:'Entertainment', picture:'https://croatia.hr/sites/default/files/styles/image_full_width/public/2019-04/dani-antike-2018-2_tz_pula.jpg?itok=1d7UO4Ir', route:'/Entertainment'},
                {title:'Music', picture:'https://media.timeout.com/images/105379302/630/472/image.jpg', route:'/Music'},
                {title:'Gastro', picture:'https://www.croatiaweek.com/wp-content/uploads/2018/09/22339339_1496372747078210_8843046998292750347_o.jpg', route:'/Restaurant'},
                {title:'Museum', picture:'https://media-cdn.tripadvisor.com/media/photo-s/15/b6/a4/9f/museum-olei-histriae.jpg', route:'/Museum'}
            ]
        }
    }
}
</script>