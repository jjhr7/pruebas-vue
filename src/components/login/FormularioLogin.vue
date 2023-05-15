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
          <input type="email" name="email" id="email" class="form-control" placeholder="Correo electrónico">
        </div>
        <div class="form-group mb-4">
          <label for="password" class="sr-only">Contraseña</label>
          <input type="password" name="password" id="password" class="form-control" placeholder="***********">
        </div>
        <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login">
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

export default {
  name: "FormularioLogin",
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
