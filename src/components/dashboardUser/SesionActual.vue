<template>
  <div class="row vertical-gap">
    <div class="col-sm-4">
      <div class="tarjeta-main">
        <h2 class="tarjeta-main-h2">Sesión actual</h2>
        <div class="sesion-container">
            <h2 class="contador-horas">4,21h</h2>
            <div class="sesion-options">
              <div>
                  <p>Inicio: <span>12:20</span></p>
                  <p>Final: <span>...</span></p>
              </div>
              <div>
                  <p>Jornada: <span>8 h</span></p>
                  <p>Euro/h: <span>9,35 €</span></p>
              </div>
            </div>

            <div class="sesion-buttons">
              <button class="button-sesiones">Detener</button>
              <button class="button-sesiones">Terminar</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SesionActual",
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
