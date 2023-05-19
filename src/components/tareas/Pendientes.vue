<template>
  <section class="task-list">
      <h2>Pendiente</h2>
      <div class="task-div">
        <p class="no-tasks">No hay tareas 😁</p>
        <ul id="pendiente" class="task-list-div">
            <!-- Tarea -->
            <li class="tarea">
              <!-- Tipos de tarea -->
              <div class="tipos-de-tarea">
                  <span></span>
                  <span class="span2"></span>
              </div>
              <!-- Cuerpo de la tarea -->
              <div class="cuerpo-tarea">
                  <p>Terminar la página de Tareas</p>
              </div>
            </li>
        </ul>
      </div>
      <button class="add-task">+ Añadir nueva tarea</button>
  </section>
</template>

<script>

export default {
  name: "Pendientes",
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>

</style>
