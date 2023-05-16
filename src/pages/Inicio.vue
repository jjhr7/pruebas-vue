<template>
  <div>
    <main class="landing-main" style="height: 50rem;">
      <Indicacion/>
      <Tablero/>
    </main>
    <section class="section-used">
        <h2><span></span> Equipos que están mejorando su productividad</h2>
        <div class="used-by">
            <img src="../assets/images/logo-upv.svg" alt="Logo de la Universidad Politécnica de Valencia">
            <img id="logo-htsk" src="../assets/images/htsk.svg" alt="Logo de HTSK">
            <img id="logo-oink" src="../assets/images/oink.svg" alt="Logo de Oink!">
            <img src="../assets/images/logo-ideas.svg" alt="Logo de Ideas UPV">
        </div>
    </section>
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
