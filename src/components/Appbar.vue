<template>
    <div>
        <v-app-bar class="white--text" color="indigo darken-2">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/"><v-toolbar-title><img src="favicon.png"></v-toolbar-title></router-link>

            <v-spacer></v-spacer>

            <v-btn router-link to="/Login" color="white" icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn router-link to="/Signup" color="white" icon>
                <v-icon>mdi-account-plus</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app temporary v-model="drawer" color="indigo darken-2">
            <v-list dense nav class="py-0">
                <v-list-item two-line class='px-0'>
                    <v-list-item-avatar>
                        <img src="./avatar.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            <v-list-item-icon>
                                <v-icon color="white">mdi-account-details</v-icon>
                                MyAccount
                            </v-list-item-icon>
                        </v-list-item-title>
                        
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item v-for="link in links" :key="link.text" route :to="link.route" two-line>
                    <v-list-item-content class="white--text">
                        <v-list-item-title>
                            <v-list-item-icon>
                                <v-icon color="white">{{link.icon}}</v-icon>
                            </v-list-item-icon>
                            {{link.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            drawer:false,
            links:[
                {icon:'mdi-calendar', text:'Upcoming Events', route:'/UpcomingEvents'},
                {icon:'mdi-close-circle', text:'Canceled Events', route:'/CanceledEvents'},
                {icon:'mdi-format-list-checkbox', text:'Categories', route:'/Categories'}
            ],
        }
    }
}
</script>