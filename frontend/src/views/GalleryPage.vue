<script setup>
import GalleryGrid from '../components/GalleryGrid.vue';
import { ref } from 'vue';


const homeGallery = ref([
  { image: 'img/work2.jpg', title: '' },
  { image: 'img/work1.jpg', title: '' },
  { image: 'img/work3.jpg', title: '' },
  { image: 'img/work4.jpeg', title: '' }

])
</script>

<template> 
<div class="gallery-page">
    <GalleryGrid
    title="Tehtud tugevdamistööd"
    :items="homeGallery"
  />
</div>
</template>

<style scoped>
    .gallery-page {
        padding: 40px 20px;
        text-align: center;
        margin: 0 auto;
        max-width: 1400px;
    }

    .gallery-grid {
        max-width: 1400px;
        margin: 0 auto;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
</style>