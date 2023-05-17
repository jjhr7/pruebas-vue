<template>
  <div>
    <div class="rui-page-title b-none">
      <div class="container-fluid">
          <h1 class="section-title">Dashboard</h1>
      </div>
    </div>

      <div class="rui-page-content">
        <div class="container-fluid">
          <SesionActua/>
          <UltimaSesion/>
          <TareasPendientes/>
          <PlanificacionSemanal/>
        </div>
      </div>

  </div>
</template>
<script>

import SesionActua from '../components/dashboardUser/SesionActual.vue';
import UltimaSesion from '../components/dashboardUser/UltimaSesion.vue';
import TareasPendientes from '../components/dashboardUser/TareasPendientes.vue';
import PlanificacionSemanal from '../components/dashboardUser/PlanificacionSemanal.vue';


export default {
  name: "Home",
  components:{
    SesionActua, UltimaSesion, TareasPendientes, PlanificacionSemanal
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>
