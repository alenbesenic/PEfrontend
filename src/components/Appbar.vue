<template>
    <div>
        <v-app-bar class="white--text" color="indigo darken-2">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>PulaEvents</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn router-link to="/Login" color="white" icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn router-link to="/Signup" color="white" icon>
                <v-icon>mdi-account-plus</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" color="indigo darken-2">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-btn class="white--text" icon>
                        <p>MyAccount</p>
                        <v-icon>mdi-account-details</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <p>Ovdje budu išle neke rute</p>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <p>Još neke rute</p>
                    </v-list-item-action>
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