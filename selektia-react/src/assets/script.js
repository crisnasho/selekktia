document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const correo = document.getElementById("correo").value.trim();
      const telefono = document.getElementById("telefono").value.trim();

      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonoRegex = /^[0-9]{8,15}$/;

      let errores = [];

      if (!correoRegex.test(correo)) {
        errores.push("Por favor ingresa un correo electrónico válido.");
      }

      if (!telefonoRegex.test(telefono)) {
        errores.push("El número de teléfono debe contener entre 8 y 15 dígitos.");
      }

      const msgBox = document.createElement("div");
      msgBox.classList.add("form-message");

      if (errores.length > 0) {
        msgBox.textContent = "⚠️ " + errores.join(" ");
        msgBox.style.background = "#ffcccc";
        msgBox.style.color = "#a60000";
      } else {
        msgBox.textContent = "✅ Formulario enviado correctamente";
        msgBox.style.background = "#ccffcc";
        msgBox.style.color = "#006600";
        form.reset();
      }

      const oldMsg = document.querySelector(".form-message");
      if (oldMsg) oldMsg.remove();
      form.parentNode.appendChild(msgBox);

      setTimeout(() => msgBox.remove(), 4000);
    });
  }
});
