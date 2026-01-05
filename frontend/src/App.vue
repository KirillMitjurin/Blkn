<script setup>
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>
<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<style>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
