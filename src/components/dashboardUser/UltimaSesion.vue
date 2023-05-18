<template>
<div class="tarjeta-main">
  <h2 class="tarjeta-main-h2">Última sesión</h2>
  <div class="sesion-container">
      <h2 class="contador-horas">8,00h</h2>
      <div class="sesion-options">
        <div>
            <p>Inicio: <span>9:30</span></p>
            <p>Final: <span>19:45</span></p>
        </div>
        <div>
            <p>Jornada: <span>8 h</span></p>
            <p>Euro/h: <span>9,35 €</span></p>
        </div>
      </div>

      <div class="sesion-buttons">
        <button class="button-sesiones">Ver</button>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: "UltimaSesion",
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
