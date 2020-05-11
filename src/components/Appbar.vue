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
                            Moj account
                        </v-list-item-title>
                        <v-list-item-icon>
                            <v-icon color="white">mdi-account-details</v-icon>
                        </v-list-item-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon color="white">mdi-calendar</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="white--text">
                        <v-list-item-title>Eventi po datutima recimo</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon color="white">mdi-plus-box</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="white--text">
                        <v-list-item-title>Neke dodante rute</v-list-item-title>
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
            drawer:false
        }
    }
}
</script>