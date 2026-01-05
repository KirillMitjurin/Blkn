<script setup>
    import GaleryItem from './GalleryItem.vue';

    defineProps({
        title: { 
            type: String,
            required: true,
            }
    ,
        items: {
            type: Array,
            required: true,
        }});

</script>

<template>
    <section class="gallery">
        <h2 class="gallery-title"> {{title}} </h2>

        <div class="gallery-grid"> 
            <GaleryItem 
                v-for="(item, index) in items" 
                :key="index" 
                :image="item.image" 
                :title="item.title" 
            />
        </div>
    </section>

</template>

<style scoped>
    .gallery {
        background: #ffffff;
        padding: 40px 40px;
    }

    .gallery-title {
        text-align: center;
        margin-bottom: 60px;
        font-size: 28px;}
        
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        justify-content: center;
    }

    @media (max-width: 1200px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    }

    @media (max-width: 600px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    }
</style>