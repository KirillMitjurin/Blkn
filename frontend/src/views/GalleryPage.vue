<script setup>
import GalleryGrid from '../components/GalleryGrid.vue';
import { ref } from 'vue';


const homeGallery = ref([
  { image: '/dist/img/work2.jpg', title: '' },
  { image: '/dist/img/work1.jpg', title: '' },
  { image: '/dist/img/work3.jpg', title: '' },
  { image: '/dist/img/work4.jpeg', title: '' }

])
</script>

<template> 
<div class="gallery-page">
    <GalleryGrid
    title="Meie poolt tehtud tugevdamine"
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