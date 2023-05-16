<template>
<div>
  <main class="landing-main">

        <div class="row no-gutters">

              <Indicacion/>

        </div>

        <div class="row no-gutters">

              <Tablero/>

        </div>

  </main>
  <Funcionalidades/>
  <Contacto/>
</div>
</template>

<script>
import landing from "../assets/css/landing.css";
import Funcionalidades from '../components/inicio/Funcionalidades.vue';
import Indicacion from '../components/inicio/Indicacion.vue';
import Tablero from '../components/inicio/Tablero.vue'
import Contacto from '../components/inicio/Contacto.vue'

export default {
  components: { Indicacion, Tablero, Funcionalidades, Contacto },
  name: "Inicio",
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
