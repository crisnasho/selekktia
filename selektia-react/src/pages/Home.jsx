import React from 'react'

export default function Home() {
  return (
    <div className='container py-4'>
      <div dangerouslySetInnerHTML={ { __html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selektia - Inicio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <div class="logo">SELEKTIA</div>
    <nav>
      <ul>
        <li><a href="index.html" class="active">Nosotros</a></li>
        <li><a href="oferta.html">Oferta</a></li>
        <li><a href="contacto.html">Contáctanos</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <section class="hero">
      <h1>CONECTAMOS TALENTO CON OPORTUNIDADES.</h1>
      <p>SELEKTIA ES TU EMPRESA DE CONFIANZA SI QUIERES ENCONTRAR TU TRABAJO IDEAL.</p>
      <div class="hero-images">
        <img src="img/hero1.jpg" alt="Equipo de trabajo">
        <img src="img/hero2.jpg" alt="Reunión online">
      </div>
    </section>

    <!-- Nosotros -->
    <section id="nosotros" class="nosotros">
      <div class="nosotros-text">
        <h2>SOBRE NOSOTROS</h2>
        <p>En Selektia nos especializamos en reclutamiento y selección de personal, ayudando a las empresas a encontrar el talento que necesitan y a los profesionales a descubrir las oportunidades que se merecen.</p>
        <p>Creemos que el éxito de una organización comienza con las personas correctas en el lugar correcto.</p>
      </div>
      <div class="nosotros-img">
        <img src="img/nosotros.jpg" alt="Equipo trabajando">
        <span class="vertical-text">NOSOTROS</span>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <p>© 2025 Selektia - Todos los derechos reservados</p>
  </footer>
</body>
</html>
` } } />
    </div>
  )
}
