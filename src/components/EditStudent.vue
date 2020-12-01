<template>
  <div>
    
    <b-container>

      <b-row class="justify-content-md-center mt-4">

        <b-col col md="8">

          <b-card 
            header="Atualizando o Aluno"
            header-bg-variant="dark"
            header-text-variant="white"
          >
          
          <b-card-text>
             <b-form @submit.prevent="handleUpdate">

              <b-form-group 
                description="Qual é o nome dele?"
                label="Nome: ">

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
                label="Digite um telefone válido">

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
                variant="outline-primary"

                >

                  Atualizar

                </b-button>

              </b-form-group>

            </b-form>

            <b-button size="sm" @click="handleGoBack()" class="btn btn-warning">
                
                Voltar

            </b-button>

            &nbsp;

            <b-button size="sm" @click="handleDelete()" class="btn btn-danger">
                
                Apagar

            </b-button>


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
  
  created(){

    this.getInfo();

  },

  methods: {

        getInfo(){

            api.get(`students/${this.$route.params.id}`)
            .then(( response )=>{

                const { data } = response;
                
                this.student = data;
                
                

            })
           
        },

        handleUpdate(){

            api.put(`students/${this.$route.params.id}`)
            .then(()=>{

                alert('Usuário atualizado com Sucesso!')

            })
            


        },

        handleDelete(){

         

            api.delete(`students/${this.$route.params.id}`)
            .then(()=>{

                alert('Usuário deletado com Sucesso!')

            })
           

          

        },

        handleGoBack(){

            this.$router.go(-1)

        }

  }
};
</script>