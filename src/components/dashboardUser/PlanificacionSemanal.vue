<template>
      <div class="tarjeta-main tarjeta-planificacion">
        <h2 class="tarjeta-main-h2">Planificación semanal</h2>
        <a href="index.html" class="ver-mas">Ver más ></a>
        <div class="rui-widget rui-widget-chart div-semanal">
            <div class="dia-semanal">
              <div class="tarjeta-semanal dia-completado">
                  <h3>Ver más</h3>
                  <span stroke-width="1.5" data-feather="check-circle" class="icon-completado"></span>
                  <h5>Completado</h5>
              </div>
              <h3>Lunes</h3>
            </div>
        </div>
      </div>
</template>

<script>

export default {
  name: "PlanificacionSemanal",
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
