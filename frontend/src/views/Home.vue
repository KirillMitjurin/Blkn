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

</script>

<template>
    <section class="hero">
        <div class="content fade-up">
            <h1 >Rõdude ja lodžade professionaalne renoveerimine</h1>
            <p>
                Teostame rõdude ja lodžade remonti, tugevdamist ja taastamist korteriühistutele ning hoonete omanikele kogu Baltikumis.
            </p>
        </div>
    </section>
    
    <section class="description fade-up">
        <h1 class="fade-up">Meist</h1>
        <div class="desc-content">
<p class="text">
  <b>
    Oleme rõdude ja lodžade renoveerimisele spetsialiseerunud ettevõte.
  </b>
  <br /><br />
  Pakume professionaalseid teenuseid rõdude ja lodžade hoolduseks, remondiks ja
  konstruktsioonide tugevdamiseks. Meie töö hõlmab vanade ja kahjustatud
  elementide demonteerimist, uute kinnituste paigaldamist ning metallkonstruktsioonide
  keevitust ja ankurdamist.
  <br /><br />
  Teenindame korteriühistuid ning hoonete omanikke, aidates pikendada rõdude eluiga,
  parandada ohutust ja säilitada hoonete tehnilist seisukorda.
</p>
        </div>
    </section>

    <section class="services fade-up">
    <h1>Meie teenused</h1>  

    <div class="services-container">

      <div class="service-card">
        <img src="\dist\img\stock1.jpg" />
        <h3>Rõdude ja lodžade renoveerimine</h3>
        <p>Vanade rõdude ja lodžade remont ja taastamine, sealhulgas konstruktsioonide
tugevdamine ja kahjustatud elementide vahetus.</p>
      </div>
      <div class="service-card">
        <img src="/dist/img/stock2.jpg" />
        <h3>Konstruktsioonide tugevdamine</h3>
        <p>Uute terrasside projekteerimine ja ehitus.</p>
      </div>

      <div class="service-card">
        <img src="/dist/img/picofcolour.jpg" />
        <h3>Hooldus ja taastamistööd</h3>
        <p>Rõdude ja lodžade hooldus, värvimine, metallosade taastamine ning
standardsete kinnituste asendamine uute ja vastupidavamatega.</p>
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
    <h2>Võta meiega ühendust</h2>
    <p>
Kirjelda lühidalt oma objekti või probleemi ning leiame sobiva lahenduse
rõdu või lodža renoveerimiseks ja tugevdamiseks.
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
  width: 360px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;
}
.service-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
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

@media (max-width: 900px) {
  /* HERO */
  .hero {
    height: 70vh;
    background-attachment: scroll; /* fixed на мобиле часто лагучий */
  }

  .content {
    padding: 20px;
    max-width: 92%;
  }

  .content h1 {
    font-size: 28px;
    letter-spacing: 0.5px;
  }

  .content p {
    font-size: 16px;
  }

  /* ABOUT */
  .text {
    padding: 20px;
    font-size: 16px;
    line-height: 1.7;
  }

  /* SERVICES */
  .services {
    padding: 50px 16px;
  }

  .services-container {
    gap: 16px;
  }

  .service-card {
    max-width: 100%;
    width: 100%;
  }

  .service-card h3 {
    padding: 12px 14px 0 14px;
    font-size: 18px;
  }

  .service-card p {
    padding: 8px 14px 16px 14px;
    font-size: 15px;
    line-height: 1.6;
  }

  /* REVIEW */
  .review {
    padding: 60px 16px;
  }

  .review-container {
    grid-template-columns: 1fr; /* вместо 1fr 2fr */
    gap: 28px;
  }

  .review-info {
    text-align: center;
  }

  .review-info h2 {
    max-width: 100%;
    font-size: 22px;
  }

  .review-text p {
    font-size: 20px;
    line-height: 1.6;
  }

  .arrows {
    justify-content: center;
    gap: 18px;
    margin-top: 22px;
  }

  /* CTA */
  .cta {
    padding: 70px 16px;
  }

  .cta h2 {
    font-size: 26px;
  }

  .cta p {
    font-size: 16px;
  }

  .cta button {
    width: 100%;
    max-width: 360px;
  }
}



</style>