<script setup>
    defineProps({
        image: String, 
        title: String,
    })
</script>

<template>
<div class="gallery-item">
    <n-image
      :src="image"
      :alt="title"
      previewed
      width="100%"
      style="border-radius: 8px; cursor: zoom-in;"
    />
    <p class="caption"> {{ title }}</p>
</div>
</template>

<style scoped>
.gallery-item {
  width: 100%;
  max-width: 100%;
}
.gallery-item img {
    display: block;
}
.caption {
  margin-top: 12px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: after;
  opacity: 0.7;
}

.gallery-item img {
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}
</style>