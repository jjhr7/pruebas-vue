<template>
  <div>
    <div class="card-body">
      <div class="brand-wrapper">
        <img src="../../assets/images/logo.svg" alt="logo" class="logo">
      </div>
      <p class="login-card-description">Entra en tu cuenta</p>
      <form action="#!">
        <div class="form-group">
          <label for="email" class="sr-only">Email</label>
          <input type="email" v-model="email" class="form-control" placeholder="Correo electrónico">
        </div>
        <div class="form-group mb-4">
          <label for="password" class="sr-only">Contraseña</label>
          <input type="password" v-model="password" class="form-control" placeholder="Contraseña">
        </div>
        <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login" @click="login">
      </form>
      <!--<a href="#!" class="forgot-password-link">¿Has olvidado la contraseña?</a>-->
      <!--<p class="login-card-footer-text">¿No estás registrado? <a href="#!" class="text-reset">Regístrate aquí</a></p>-->
      <p class="login-card-footer-text">Volver a la página principal</p>
      <nav class="login-card-footer-nav">
        <a href="#!">Términos de uso</a>
        <a href="#!">Política de privacidad</a>
      </nav>
    </div>
  </div>
</template>

<script>
import api from '../../common/apiService'
export default {
  name: "FormularioLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(){
      console.log(this.email)
      console.log(this.password)
      api.jsonAsync("login",{email: this.email, pssword: this.password},(err, result)=>{
        console.log(err)
        console.log(result)
      });
    }
  },
};
</script>

<style>

</style>
