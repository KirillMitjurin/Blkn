<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- LEFT: Contacts -->
      <div class="footer-section contact-section">
        <h3>Kontaktid</h3>

        <div class="contact-item">
          <span class="label">Email:</span>
          <a href="mailto:boronetsivanevgenevich81@gmail.com">
            boronetsivanevgenevich81@gmail.com
          </a>
        </div>

        <div class="contact-item">
          <span class="label">Telefon:</span>
          <a href="tel:+37253664998">+372 5366 4998</a>
        </div>
      </div>

      <!-- CENTER: Logo -->
      <div class="footer-section logo-section">
        <img src="/img/logofreee.png" alt="Logo" class="footer-logo" />
      </div>

      <!-- RIGHT: Company info -->
      <div class="footer-section company-section">
        <h3>Ettevõte</h3>

        <div class="company-item">
          <strong>SilverShell OÜ</strong>
        </div>

        <div class="company-item">
          Retke tee 22-26<br />
          Tallinn, Estonia
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  color: #000000;
  padding: 60px 20px;
}

.footer-container {
  max-width: 1400px;
  max-height: 200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 40px;
}

/* Sections */
.footer-section {
  display: flex;
  flex-direction: column;
}

/* Center logo */
.logo-section {
  align-items: center;
}

.footer-logo {
  max-height: 180px;
  width: auto;
}

/* Headings */
.footer-section h3 {
  margin-bottom: 10px;
  font-size: 18px;
}


/* Contact */
.contact-item {
  margin-bottom: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.contact-item .label {
  font-weight: 600;
}

.contact-item a {
  color: #3498db;
  text-decoration: none;
}

.contact-item a:hover {
  color: #2980b9;
}

/* Company */
.company-item {
  margin-bottom: 8px;
  line-height: 1.5;

}

/* Mobile */
@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-item {
    justify-content: center;
  }
}

</style>