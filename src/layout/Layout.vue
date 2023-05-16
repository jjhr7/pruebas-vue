<template>
  <div>

    <!-- Side bar -->
    <div class="yaybar yay-hide-to-small yay-shrink yay-gestures rui-yaybar" style="background-color: #fff;">
        <div class="yay-wrap-menu">
            <div class="yaybar-wrap">
               <ul style="margin-top: 5rem;">
                  <li class="yay-label">Menú</li>
                  <li class=" yay-item-active">
                     <a id="menu-first" href="dashboard.html">
                     <span class="yay-icon"><span data-feather="home" class="rui-icon rui-icon-stroke-1_5"></span></span>
                     <span>Dashboard</span>
                     <span class="rui-yaybar-circle"></span>
                     </a>
                  </li>
                  <li>
                    <a href="tareas.html">
                    <span class="yay-icon"><span stroke-width="1.5" data-feather="file-text"></span></span>
                    <span>Tareas</span>
                    <span class="rui-yaybar-circle"></span>
                    </a>
                 </li>
                 <li>
                    <a href="dashboard.html">
                    <span class="yay-icon"><span stroke-width="1.5" data-feather="calendar"></span></span>
                    <span>Horario</span>
                    <span class="rui-yaybar-circle"></span>
                    </a>
                 </li>
                 <li>
                    <a href="dashboard.html">
                    <span class="yay-icon"><span stroke-width="1.5" data-feather="users"></span></span>
                    <span>Equipo</span>
                    <span class="rui-yaybar-circle"></span>
                    </a>
                 </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="rui-yaybar-bg"></div>
      <!-- END: Yaybar -->
      <!--
         START: Navbar

         Additional Classes:
             .rui-navbar-sticky
             .rui-navbar-autohide
             .rui-navbar-dark
         -->
      <nav class="rui-navbar rui-navbar-top rui-navbar-sticky"  style="background-color: #eef2f5;">
         <div class="rui-navbar-brand">
            <a href="dashboard.html" class="rui-navbar-logo">
            <img src="../assets/images/logo.svg" data-src-night="../assets/images/logo-white.svg" data-src-day="../assets/images/logo.svg" alt="" width="45">
            </a>
            <button class="yay-toggle rui-yaybar-toggle" type="button">
            <span></span>
            </button>
         </div>
         <div class="container-fluid">
            <div class="rui-navbar-content">
               <ul class="nav">
                  <li class="dropdown dropdown-hover dropdown-keep-open dropdown-triangle">

                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <!-- END: Navbar -->

      <div class="rui-page content-wrap">

        <router-view></router-view>
         <!-- START: Footer -->
         <footer class="rui-footer"  style="background-color: #fff;">
            <div class="container-fluid">
               <p class="mb-0">2021 &copy; Sudle.</p>
            </div>
         </footer>
         <!-- END: Footer -->
      </div>
  </div>
</template>
<script>
import bootstap from "../assets/css/bootstrap-custom.css";
import OverlayScrollbars from "../assets/vendor/overlayscrollbars/css/OverlayScrollbars.css";
import yaybar from "../assets/css/yaybar.css";
import fancybox from "../assets/vendor/fancybox/dist/jquery.fancybox.css";
import emojionearea from "../assets/vendor/emojionearea/dist/emojionearea.css";
import swiper from "../assets/vendor/swiper/swiper-bundle.min.css";
import chartist from "../assets/vendor/chartist/dist/chartist.css";
import jqvmap from "../assets/vendor/jqvmap/dist/jqvmap.css";
import rootui from "../assets/css/rootui.css";
import rootui_night from "../assets/css/rootui-night.css";
import dashboard from "../assets/css/dashboard.css";
export default {
  name: "Layout",
  data() {
    return {};
  },
  methods: {

  },
};
</script>
