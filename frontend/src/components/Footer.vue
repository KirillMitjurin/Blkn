<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Logo Section -->
            <!-- <div class="footer-section logo-section">
                <img src="@/assets/logo.png" alt="Logo" class="footer-logo" />
            </div> -->

            <!-- Contact Section -->
            <div class="footer-section contact-section">
                <h3>Kontaktid</h3>
                <div class="contact-item">
                    <span class="label">Email :</span>
                    <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div class="contact-item">
                    <span class="label">Telefoni Number:</span>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
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
    padding: 40px 20px;
    margin-top: 0px;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.footer-section {
    display: flex;
    flex-direction: column;
}


.contact-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
}

.contact-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.contact-item .label {
    font-weight: bold;
}

.contact-item a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
}

.contact-item a:hover {
    color: #2980b9;
}

.copyright-section {
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #34495e;
}
</style>