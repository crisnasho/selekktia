import React from 'react'

export default function Contact() {
  return (
    <div className='container py-4'>
      <div dangerouslySetInnerHTML={ { __html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selektia - Contáctanos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <div class="logo">SELEKTIA</div>
    <nav>
      <ul>
        <li><a href="index.html">Nosotros</a></li>
        <li><a href="oferta.html">Oferta</a></li>
        <li><a href="contacto.html" class="active">Contáctanos</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Contacto -->
    <section id="contacto">
      <h2>CONTÁCTANOS</h2>
      <div class="contact-grid">
        <img src="img/contacto.jpg" alt="Persona trabajando">
        <form id="contactForm">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required>

          <label for="correo">Correo:</label>
          <input type="email" id="correo" name="correo" required>

          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <p>© 2025 Selektia - Todos los derechos reservados</p>
  </footer>
  
  <script src="script.js"></script>
</body>
</html>
` } } />
    </div>
  )
}
