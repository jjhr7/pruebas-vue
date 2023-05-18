<template>
  <div>
    <main class="landing-main" style="height: 50rem;">
      <Indicacion/>
      <Tablero/>
    </main>
    <Seccion/>
    <Funcionalidades/>
    <Contacto/>

  </div>
</template>

<script>
import landing from "../assets/css/landing.css";
import Funcionalidades from '../components/inicio/Funcionalidades.vue';
import Indicacion from '../components/inicio/Indicacion.vue';
import Tablero from '../components/inicio/Tablero.vue';
import Contacto from '../components/inicio/Contacto.vue';
import Seccion from '../components/inicio/Seccion.vue';

export default {
  components: { Indicacion, Tablero, Funcionalidades, Contacto, Seccion },
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
