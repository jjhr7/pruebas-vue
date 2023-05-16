<template>
  <div class="landing-image">
    <div class="floating-tags popup-tareas">
        <p>Registra el horario de tus empleados.</p>
    </div>
    <div class="floating-tags popup-notificaciones">
        <p>Tienes 3 <strong>tareas</strong> nuevas.</p>
    </div>
    <div class="floating-tags popup-departamentos">
        <p>Gestiona <strong>departamentos</strong> desde una sola app.</p>
    </div>
    <!-- Mini Web -->
    <div class="mini-web">
        <!-- Body -->
        <div class="mini-body">
            <!-- Menu -->
            <div class="mini-menu">
                <img
                    src="../../assets/images/logo.png"
                    alt="Logotipo"
                />
                <div class="mini-enlaces">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <!-- Container -->
            <div class="mini-container">
                <div class="mini-container-header">
                    <h2>Dashboard</h2>
                    <span></span>
                </div>
                <div class="mini-container-body">
                    <div class="mini-cb-top">
                        <div class="mini-cb-cuad">
                            <h3>Jornada</h3>
                            <div id="contador-div">
                                <h4 id="h4-contador"><span id="num-contador">5</span>,<span id="dec-contador">00</span>h</h4>
                                <div id="contador-spans">
                                    <span id="cs-1"></span>
                                    <span id="cs-2"></span>
                                </div>
                                <div id="contador-spans-2">
                                    <span id="cs-3"></span>
                                    <span id="cs-4"></span>
                                </div>
                                <div id="contador-btn">
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <div class="mini-cb-cuad">
                            <h3>Productividad</h3>
                            <img
                                src="../../assets/images/grafica-tags.svg"
                                alt="Gráfica"
                            />
                        </div>

                        <div class="mini-cb-cuad">
                            <h3>Tareas</h3>
                            <div class="lista-tareas">
                                <span class="task-active"
                                    ><svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve"
                                    class="path">



                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="117.3902" y1="500" x2="882.5588" y2="500">
                                    <stop  offset="0" style="stop-color:#FC5284"/>
                                    <stop  offset="0.5" style="stop-color:#E45AC9"/>
                                    <stop  offset="1" style="stop-color:#FF7C5D"/>
                                </linearGradient>
                                <path class="st0" d="M379,791.9l498.5-498.5c6.8-6.8,6.8-17.8,0-24.6l-60.8-60.8c-6.8-6.8-17.8-6.8-24.6,0L377.7,622.4
                                    c-6.8,6.8-17.8,6.8-24.6,0L205.7,475c-6.8-6.8-17.8-6.8-24.6,0l-58.5,58.5c-6.8,6.8-6.8,17.8-0.1,24.6l231.9,233.8
                                    C361.1,798.7,372.2,798.7,379,791.9z"/>
                                </svg>
                                </span>
                                <span class="task-inactive"><svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve"
                                    class="path">

                                <path class="st0 svgIn" d="M379,791.9l498.5-498.5c6.8-6.8,6.8-17.8,0-24.6l-60.8-60.8c-6.8-6.8-17.8-6.8-24.6,0L377.7,622.4
                                    c-6.8,6.8-17.8,6.8-24.6,0L205.7,475c-6.8-6.8-17.8-6.8-24.6,0l-58.5,58.5c-6.8,6.8-6.8,17.8-0.1,24.6l231.9,233.8
                                    C361.1,798.7,372.2,798.7,379,791.9z"/>
                                </svg></span>
                                <span class="task-inactive"><svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve"
                                    class="path">

                                <path class="st0 svgIn" d="M379,791.9l498.5-498.5c6.8-6.8,6.8-17.8,0-24.6l-60.8-60.8c-6.8-6.8-17.8-6.8-24.6,0L377.7,622.4
                                    c-6.8,6.8-17.8,6.8-24.6,0L205.7,475c-6.8-6.8-17.8-6.8-24.6,0l-58.5,58.5c-6.8,6.8-6.8,17.8-0.1,24.6l231.9,233.8
                                    C361.1,798.7,372.2,798.7,379,791.9z"/>
                                </svg></span>
                                <span class="task-inactive"><svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve"
                                    class="path">

                                <path class="st0 svgIn" d="M379,791.9l498.5-498.5c6.8-6.8,6.8-17.8,0-24.6l-60.8-60.8c-6.8-6.8-17.8-6.8-24.6,0L377.7,622.4
                                    c-6.8,6.8-17.8,6.8-24.6,0L205.7,475c-6.8-6.8-17.8-6.8-24.6,0l-58.5,58.5c-6.8,6.8-6.8,17.8-0.1,24.6l231.9,233.8
                                    C361.1,798.7,372.2,798.7,379,791.9z"/>
                                </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="mini-cb-bottom">
                        <div class="mini-cb-bottom-header">
                            <h3>Horario</h3>
                            <span></span>
                        </div>
                        <div class="mini-cb-bottom-body">
                            <span class="horario-rect" id="horario-1"></span>
                            <span class="horario-linea"></span>
                            <span class="horario-rect" id="horario-2"></span>
                            <span class="horario-linea"></span>
                            <span class="horario-rect" id="horario-3"></span>
                            <span class="horario-linea"></span>
                            <span class="horario-rect" id="horario-4"></span>
                            <span class="horario-linea"></span>
                            <span class="horario-rect" id="horario-5"></span>
                            <span class="horario-linea"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tablero",
  data() {
    return {};
  },
  methods: {

  },
};
</script>


 <style type="text/css">
    .st0{fill:url(#SVGID_1_);};
    .svgIn{fill: #10254d;};
    .svgIn{fill: #10254d;};
    .svgIn{fill: #91a1bb;}
 </style>


