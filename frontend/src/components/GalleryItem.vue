<script setup>
    defineProps({
        image: String, 
        title: String,
    })
</script>

<template>
<div class="gallery-item">
    <div class="image-wrap">
    <n-image
      :src="image"
      :alt="title"
      previewed
      width="100%"
      style="border-radius: 8px; cursor: zoom-in;"
    />
  </div>

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
.image-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;     /* 👈 выбери: 1/1, 4/3, 16/9 */
  overflow: hidden;
  border-radius: 8px;
  background: #f0f0f0;
}
.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* 🔥 ключевая строка */
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