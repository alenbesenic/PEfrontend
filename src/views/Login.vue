<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form @submit="login">
                  <v-text-field
                    id="username"
                    label="Username"
                    name="username"
                    
                    type="username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    
                    type="password"
                  ></v-text-field>
                   <v-btn type="submit" color="primary">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Auth } from "@/services"
  export default {
    props: {
      source: String,
    },
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods: {
    async login(){
     let success = await Auth.login(this.username, this.password);
     console.log("Rezultat prijave", success);
      }
    }
  };

  
</script>
