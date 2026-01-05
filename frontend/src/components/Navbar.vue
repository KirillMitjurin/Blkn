<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="app-header">
    <div class="nav-container">

      <!-- Logo -->
      <RouterLink to="/home" class="logo">
        logo
      </RouterLink>

      <!-- Menu -->
      <div class="nav-links">
       <!--  <RouterLink to="/home" class="nav-item">Home</RouterLink>--> 
        <RouterLink to="/gallery" class="nav-item">Meie tööd</RouterLink>
        <RouterLink to="/contact" class="nav-item">Contact</RouterLink>
      </div>

    </div>

  </nav>
</template>

<style scoped>
.app-header {
  position:relative;
  top: 0;
  z-index: 1080;
  height: 120px;
  background-color: #ffffff;
  color: black;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
}

.nav-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 500;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-item {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: rgb(0, 0, 0);
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}
</style>
