<template>
  <section class="contact-page">
    <div class="container">
      <header class="head">
        <h1>Võta meiega ühendust</h1>
        <p>
          Kirjelda lühidalt oma objekti või küsimust — leiame sobiva lahenduse rõdu või lodža renoveerimiseks.
        </p>
      </header>

      <div class="grid">
        <!-- LEFT: Contact -->
        <div class="card">
          <h2>Kontakt</h2>

          <div class="row">
            <div class="label">Telefon</div>
            <a class="value link" href="tel:+37253664998">+372 5366 4998</a>
          </div>

          <div class="row">
            <div class="label">E-post</div>
            <a class="value link" href="mailto:boronetsivanevgenevich81@gmail.com">
              boronetsivanevgenevich81@gmail.com
            </a>
          </div>

          <div class="actions">
            <a class="btn primary" href="tel:+37253664998">Helista</a>
            <a class="btn ghost" href="mailto:boronetsivanevgenevich81@gmail.com">Saada e-kiri</a>
          </div>

          <p class="hint">
            Kui me kohe ei vasta, helistame esimesel võimalusel tagasi.
          </p>
        </div>

        <!-- RIGHT: Hours + Address -->
        <div class="card">
          <h2>Lahtiolekuajad</h2>

          <div class="hours">
            <div class="hours-row">
              <span class="day">E–R</span>
              <span class="time">08:00–17:00</span>
            </div>
            <div class="hours-row">
              <span class="day">L</span>
              <span class="time">09:00–15:00</span>
            </div>
            <div class="hours-row muted">
              <span class="day">P</span>
              <span class="time">Suletud</span>
            </div>
          </div>

          <div class="divider"></div>

          <h2>Ettevõte</h2>
          <p class="company"><strong>SilverShell OÜ</strong></p>
          <p class="address">
            Raua 15-43<br />
            Tallinn, Estonia
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  background: #f2f1ee;
  padding: 60px 16px;
  min-height: calc(100vh - 72px);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.head {
  text-align: center;
  margin-bottom: 28px;
}

.head h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.head p {
  max-width: 720px;
  margin: 0 auto;
  opacity: 0.8;
  line-height: 1.6;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.card {
  background: #ffffff;
  border: 1px solid #e8e6e0;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card h2 {
  font-size: 18px;
  margin-bottom: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}

.row:last-of-type {
  border-bottom: none;
}

.label {
  font-weight: 700;
}

.value {
  justify-self: start;
  word-break: break-word;
}

.link {
  color: #3498db;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 14px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  font-weight: 600;
}

.primary {
  background: #000;
  color: #fff;
}

.primary:hover {
  background: #1a1a1a;
}

.ghost {
  background: transparent;
  color: #000;
  border-color: #d8d8d8;
}

.ghost:hover {
  background: #f5f5f5;
}

.hint {
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.75;
}

.hours {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  max-width: 320px;
}

.day {
  font-weight: 700;
}

.muted {
  opacity: 0.6;
}

.divider {
  height: 1px;
  background: #efefef;
  margin: 18px 0;
}

.company,
.address {
  margin: 0;
  line-height: 1.6;
}

.map {
  margin-top: 14px;
  background: #3a3f58;
  color: #fff;
}

.map:hover {
  background: #2d3146;
}

/* Mobile */
@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .head h1 {
    font-size: 28px;
  }

  .row {
    grid-template-columns: 1fr;
  }
}
</style>
