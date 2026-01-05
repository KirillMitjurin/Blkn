<script setup>

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const reviews = [
  {
    text: "Suurepärane teenus! Minu rõdu näeb nüüd välja nagu uus.",
    author: "Jaan T."
  },
  {
    text: "Töö tehti kiiresti ja kvaliteetselt. Väga rahul!",
    author: "Mari K."
  },
  {
    text: "Professionaalne suhtlus ja suurepärane tulemus.",
    author: "Andres L."
  }
];

    const router = useRouter();


  const current = ref(0);

  const prev = () => {
    current.value = current.value === 0 ? reviews.length - 1 : current.value - 1;
  };

  const next = () => {
    current.value = current.value === reviews.length - 1 ? 0 : current.value + 1;
  };


 function toContact() {
    router.push('/contact');
 }

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
  });
});


document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});
  

</script>

<template>
    <section class="hero">
        <div class="content fade-up">
            <h1 >Rõdude remont ja ehitus</h1>
            <p>
                Teostame rõdude ja terrasside renoveerimistöid ning ehitustöid.
            </p>
        </div>
    </section>
    
    <section class="description fade-up">
        <h1 class="fade-up">Meist</h1>
        <div class="desc-content">
            <p class="text">
                <b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </b>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </section>

    <section class="services fade-up">
    <h1>Meie teenused</h1>  

    <div class="services-container">

      <div class="service-card">
        <img src="https://picsum.photos/400/300?1" />
        <h3>Rõdude renoveerimine</h3>
        <p>Vanade rõdude täielik renoveerimine ja tugevdamine.</p>
      </div>
      <div class="service-card">
        <img src="https://picsum.photos/400/300?2" />
        <h3>Terrasside ehitus</h3>
        <p>Uute terrasside projekteerimine ja ehitus.</p>
      </div>

      <div class="service-card">
        <img src="https://picsum.photos/400/300?3" />
        <h3>Hooldustööd</h3>
        <p>Regulaarsed hooldustööd ja parandused.</p>
      </div>
    </div>

</section>




    

<section class="review ">
  <div class="review-container fade-up">
    <!-- LEFT -->
    
    <div class="review-info">
      <p>Kliendite tagasiside</p>
      <h2>Meie kliendid räägivad meie eest.</h2>
    </div>
    <!-- RIGHT -->
    <div class="review-single">
      <div class="review-text">
        <p>
          "{{ reviews[current].text }}"
        </p>
        <span>— {{ reviews[current].author }}</span>
      </div>
        <div class="arrows">
          <button @click="prev">←</button>
          <button @click="next">→</button>
        </div>
    </div>

    </div>
</section>


<section class="cta">
  <div class="cta-content fade-up">
    <h2>Kas oled valmis alustama?</h2>
    <p>
      Kirjelda meile oma ideed ja leiame koos parima lahenduse sinu rõdu või terrassi jaoks.
    </p>
    <button @click="toContact">
      Võta meiega ühendust
    </button>
  </div>
</section>

</template>

<style scoped>
.hero {
    position: relative;
    height: 100vh;
    background-image: url('https://images5.alphacoders.com/432/thumb-1920-432267.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    background-position: center top;
}

/* затемнение НА ВСЮ картинку */
.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    /* регулируй здесь */
    z-index: 1;
}

/* контент поверх затемнения */
.content {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    max-width: 800px;
    padding: 40px;
}

.content h1 {
    font-size: 48px;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.content p {
    font-size: 18px;
    line-height: 1.6;
}

.text {
    padding: 40px;
}

.description {
    background-color: #F2F1EE;
    padding: 40px 20px;
    text-align: center;
}

.desc-content {
    max-width: 1400px;
    margin: 0 auto;
}

.services {
  background-color: #ffffff;
  padding: 80px 20px;
    text-align: center;
}

.services-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.service-card {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 360px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
}

.review {
  background-color: #f4f4f4;
  color: rgb(0, 0, 0);
  padding: 100px 40px;
}

.review-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 100px;
  align-items: center;
}
.review-info {
  text-align: left;
}

.review-info p {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 30px;
}

.review-info h2 {
  font-size: 28px;
  line-height: 1.4;
  max-width: 360px;
}



/* RIGHT */
.review-single {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.review-text p {
  font-family: serif;
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.review-text span {
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.8;
}

.arrows {
  margin-top: 50px;
  display: flex;
  gap: 30px;
}

.arrows button {
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.5;
}

.arrows button:hover {
  opacity: 1;
}



.cta {
  background: #3A3F58;
  color: rgb(255, 255, 255);
  padding: 120px 40px;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 40px;
  margin-bottom: 20px;
}

.cta p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
}

.cta button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
}

.cta button:hover {
  background-color: #201e1e;
}

.section-divider {
    border: 0.5px solid #5f5e5e;
    width: 60%;
    background-color: #ffffff;
}

.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}


</style>