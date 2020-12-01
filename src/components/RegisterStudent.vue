<template>
  <div>
    
    <b-container>

      <b-row class="justify-content-md-center mt-4">

        <b-col col md="8">

          <b-card 
            header="Cadastro de Novo Estudante"
            header-bg-variant="dark"
            header-text-variant="white"
          >
          
          <b-card-text>
             <b-form @submit.prevent="handleRegister">

              <b-form-group 
                description="Qual o Nome do Estudante?"
                label="Nome:">

                <b-form-input
                v-model="student.name"
                required
                >
                </b-form-input>

              </b-form-group>

              <b-form-group 
                description="Digite um Email válido"
                label="Email:">

                <b-form-input
                v-model="student.email"
                required
                type="email"
                min=1
                >
                </b-form-input>

              </b-form-group>

              <b-form-group 
                description="Telefone:"
                label="Digite um Telefone válido">

                <b-form-input
                v-model="student.phone"
                required
                type="number"
                min=1
                >
                </b-form-input>

              </b-form-group>

              <b-form-group>

                <b-button
                
                type="submit"
                variant="outline-dark"

                >

                  Enviar

                </b-button>

              </b-form-group>

            </b-form>
          </b-card-text>
          
          </b-card>

        </b-col>

      </b-row>

    </b-container>
   
  </div>
  
</template>

<script>

import api from "@/services/api";
export default {

  
  name: "RegisterStudent",
  data() {
    return {

      student: {
        name: "",
        email: "",
        phone: ""
      }

    };
  },
  components: {
    
  },
  methods: {
      

      handleRegister(){

        const {
          name,
          email,
          phone,
        } = this.student;


        api.post('students', { 
          name,
          email,
          phone
        })
        .then(()=>{

          alert('O Estudante foi cadastrado com sucesso');
          this.onReset();
         

        })
        


      }
  }
};
</script>
<style>
</style>