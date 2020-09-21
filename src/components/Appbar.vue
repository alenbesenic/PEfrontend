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
                                <v-icon v-if= "auth.authenticated" color="white"></v-icon>
                                {{auth.userEmail}}
                                <v-btn v-if= "auth.authenticated" color="primary" @click="logout">Logout</v-btn>
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
import { Auth } from '@/services';
export default {
    data(){
        return{
            drawer:false,
            auth: Auth.state,
            links:[
                {icon:'mdi-calendar', text:'Upcoming Events', route:'/UpcomingEvents'},
                {icon:'mdi-close-circle', text:'Past Events', route:'/PastEvents'},
                {icon:'mdi-format-list-checkbox', text:'Categories', route:'/Categories'},
                {icon:'mdi-cash-multiple', text:'Free Events', route:'/FreeEvents'}
            ],
        }
    },
    methods: {
        logout(){
            Auth.logout();
            this.$router.go();
        }
    }
}
</script>