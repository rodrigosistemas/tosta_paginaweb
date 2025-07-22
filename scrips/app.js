document.addEventListener("DOMContentLoaded", function () {
  const rutasImagenes = [
    "../imagenes/chicacomiendo.png",
    "../imagenes/mono.png",
    "../imagenes/chicafeliz.png",
    "../imagenes/galletera.png",
    "../imagenes/hotdogpapas.png",
    "../imagenes/helado.png",
    "../imagenes/tostamadera.png",
    "../imagenes/pastel.png",
    "../imagenes/comida.png",
    "../imagenes/postre.png",
    "../imagenes/tostavitrina.png",
    "../imagenes/imagenuno.png"
  ];

  const imagenesContainer = document.getElementById("imagenes");
  const puntos = document.getElementById("puntos");
  const adelante = document.getElementById("adelante");
  const atras = document.getElementById("atras");

  const imagenesPorGrupo = 6;
  let grupoActual = 0;

  function mostrarGrupo() {
    imagenesContainer.innerHTML = "";
    const inicio = grupoActual * imagenesPorGrupo;
    const fin = inicio + imagenesPorGrupo;
    const grupo = rutasImagenes.slice(inicio, fin);

    grupo.forEach(src => {
      imagenesContainer.innerHTML += `
        <div class="img-container">
          <a href="#"><img src="${src}" class="img" loading="lazy"></a>
        </div>`;
    });

    actualizarPuntos();
  }

  function actualizarPuntos() {
    puntos.innerHTML = "";
    const totalGrupos = Math.ceil(rutasImagenes.length / imagenesPorGrupo);

    for (let i = 0; i < totalGrupos; i++) {
      if (i === grupoActual) {
        puntos.innerHTML += `<p class="bold">●</p>`;
      } else {
        puntos.innerHTML += `<p>●</p>`;
      }
    }
  }

  adelante.addEventListener("click", () => {
    const totalGrupos = Math.ceil(rutasImagenes.length / imagenesPorGrupo);
    grupoActual = (grupoActual + 1) % totalGrupos;
    mostrarGrupo();
  });

  atras.addEventListener("click", () => {
    const totalGrupos = Math.ceil(rutasImagenes.length / imagenesPorGrupo);
    grupoActual = (grupoActual - 1 + totalGrupos) % totalGrupos;
    mostrarGrupo();
  });

  mostrarGrupo();
});



