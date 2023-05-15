<template>
  <div>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container">
        <div class="card login-card">
          <div class="row no-gutters">
            <div class="col-md-5">
              <ImagenFormulario/>
            </div>
            <div class="col-md-7">
              <FormularioLogin/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import login from "../assets/css/login.css"
import ImagenFormulario from '../components/login/ImagenFormulario.vue'
import FormularioLogin from '../components/login/FormularioLogin.vue'

export default {
  name: "Login",
  components:{
    ImagenFormulario,
    FormularioLogin
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
