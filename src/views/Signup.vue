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
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                
                  
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="login"
                    
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="repeat_password"
                    label="Repeat Password"
                    name="Repeat_password"
                    
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {Auth} from '../services'
  export default {
    props: {
      source: String,
    },
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      async signup(){
        let success = await Auth.signup(this.username, this.password);
        console.log("Rezultat registracije", success);

         if (success == true){
       this.$router.push({name : 'Login'})
     }
      }
    }
  }
</script>
