<template>
  <div>
    <div class="rui-page-title b-none">
      <div class="container-fluid">
          <h1 class="section-title">Tareas</h1>
      </div>
    </div>
    <div class="rui-page-content">
      <div class="container-fluid">
        <div class="row">
            <Pendientes/>
            <EnProceso/>
            <Terminado/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tareas from "../assets/css/tareas.css";
import Pendientes from '../components/tareas/Pendientes.vue';
import EnProceso from '../components/tareas/EnProceso.vue';
import Terminado from '../components/tareas/Terminado.vue';

export default {
  name: "Tareas",
  components:{
    Pendientes, EnProceso, Terminado
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>
