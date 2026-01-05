<script setup>
import GalleryGrid from '../components/GalleryGrid.vue';
import { ref } from 'vue';


const homeGallery = ref([
  { image: 'https://picsum.photos/600/400?1', title: 'Ardmore, PA' },
  { image: 'https://picsum.photos/600/400?2', title: 'Downingtown, PA' },
  { image: 'https://picsum.photos/600/400?3', title: 'Malvern, PA' }
])

const balconyGallery = ref([
  { image: 'https://picsum.photos/600/400?4', title: 'Balcony project #1' },
  { image: 'https://picsum.photos/600/400?5', title: 'Balcony project #2' }
])
</script>

<template> 
<div class="gallery-page">
    <GalleryGrid
    title="Home Transformations"
    :items="homeGallery"
  />

  <GalleryGrid
    title="Balcony & Terrace Projects"
    :items="balconyGallery"
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
        height: auto;
        border-radius: 6px;
    }
</style>