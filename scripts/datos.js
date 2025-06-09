// Seleccionamos el cuerpo de la tabla donde se van a poner los datos
const tabla = document.querySelector("#tabla tbody");

//Elemento donde se mostrará el total de tecnologías cargadas
const info = document.getElementById("info");

// Esta función muestra un mensaje de error en la tabla si algo falla
const mostrarError = (msg) => {
  tabla.innerHTML = `<tr><td colspan="3" class="mensaje">${msg}</td></tr>`;
};

//Creamos la solicitud para leer el archivo XML
const xhttp = new XMLHttpRequest();

// Esta función se ejecuta cuando el XML se carga correctamente
xhttp.onload = function () {
  if (this.status === 200) {
    // Obtenemos el contenido XML
    const xml = this.responseXML;

    // Buscamos todos los elementos llamados <herramienta>
    const datos = xml.getElementsByTagName("herramienta");

    // Si no hay datos, se muestra mensaje de error
    if (datos.length === 0) {
      mostrarError("No se encontraron tecnologías.");
      return;
    }

    // Limpiamos la tabla antes de insertar los datos nuevos
    tabla.innerHTML = "";

    // Recorremos cada herramienta y agregamos su info a la tabla
    for (let i = 0; i < datos.length; i++) {
      const nombre = datos[i].getElementsByTagName("nombre")[0].textContent;
      const tipo = datos[i].getElementsByTagName("tipo")[0].textContent;
      const desc = datos[i].getElementsByTagName("descripcion")[0].textContent;

      // Insertamos una fila nueva con los datos
      tabla.innerHTML += `
        <tr>
          <td>${nombre}</td>
          <td>${tipo}</td>
          <td>${desc}</td>
        </tr>
      `;
    }

    // Mostramos el número total de tecnologías cargadas
    info.innerHTML = `<p><strong>Total:</strong> ${datos.length} tecnologías cargadas.</p>`;
  } else {
    // Si hubo un error con la solicitud
    mostrarError("Error al cargar el XML.");
  }
};

// Si hay un error al conectar o encontrar el archivo
xhttp.onerror = function () {
  mostrarError("No se pudo acceder al archivo XML.");
};

// Aquí se configura y se envía la solicitud al archivo XML
xhttp.open("GET", "datos/tecnologias.xml", true);
xhttp.send();
