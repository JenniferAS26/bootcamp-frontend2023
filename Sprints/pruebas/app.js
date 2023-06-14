// Lista de usuarios
const usuarios = [
    { nombre: "Admin", documento: "admin", contrasena: "admin", tipo: 1 },
    { nombre: "Cliente", documento: "123456", contrasena: "123456", tipo: 2 }
  ];
  
  // Array para almacenar el cajero
  let cajero = [];
  
  // Función para mostrar un elemento HTML
  function mostrarElemento(elementoId) {
    const elemento = document.getElementById(elementoId);
    elemento.classList.remove("hidden");
  }
  
  // Función para ocultar un elemento HTML
  function ocultarElemento(elementoId) {
    const elemento = document.getElementById(elementoId);
    elemento.classList.add("hidden");
  }
  
  // Función para limpiar los campos del formulario
  function limpiarFormulario(formularioId) {
    const formulario = document.getElementById(formularioId);
    formulario.reset();
  }
  
  // Función para mostrar el mensaje de resultado del retiro
  function mostrarResultado(retiro) {
    const billetesDiv = document.getElementById("billetes");
    billetesDiv.innerHTML = "";
  
    Object.keys(retiro).forEach(denominacion => {
      const cantidad = retiro[denominacion];
      if (cantidad > 0) {
        const billete = document.createElement("p");
        billete.textContent = `Billetes de ${denominacion} mil: ${cantidad}`;
        billetesDiv.appendChild(billete);
      }
    });
  
    mostrarElemento("resultado");
  }
  
  // Función para cargar el cajero
  function cargarCajero(event) {
    event.preventDefault();
  
    const billete5 = parseInt(document.getElementById("billete-5").value) || 0;
    const billete10 = parseInt(document.getElementById("billete-10").value) || 0;
    const billete20 = parseInt(document.getElementById("billete-20").value) || 0;
    const billete50 = parseInt(document.getElementById("billete-50").value) || 0;
    const billete100 = parseInt(document.getElementById("billete-100").value) || 0;
  
    cajero = [
      { denominacion: 5000, cantidad: billete5 },
      { denominacion: 10000, cantidad: billete10 },
      { denominacion: 20000, cantidad: billete20 },
      { denominacion: 50000, cantidad: billete50 },
      { denominacion: 100000, cantidad: billete100 }
    ];
  
    limpiarFormulario("cajero-form");
    ocultarElemento("cajero");
    mostrarElemento("operaciones");
  }
  
  // Función para realizar el retiro
  function realizarRetiro(event) {
    event.preventDefault();
  
    if (cajero.length === 0) {
      console.log("Cajero en mantenimiento, vuelva pronto.");
      limpiarFormulario("login-form");
      ocultarElemento("operaciones");
      mostrarElemento("cajero");
      return;
    }
  
    const montoDeseado = parseInt(prompt("Ingrese el monto deseado a retirar:"));
  
    const retiro = {};
    let montoRestante = montoDeseado;
  
    cajero.sort((a, b) => b.denominacion - a.denominacion);
  
    cajero.forEach(billete => {
      const denominacion = billete.denominacion;
      const cantidadDisponible = billete.cantidad;
  
      if (montoRestante >= denominacion && cantidadDisponible > 0) {
        const cantidadEntregada = Math.floor(montoRestante / denominacion);
        const cantidadRetirada = Math.min(cantidadEntregada, cantidadDisponible);
        retiro[denominacion] = cantidadRetirada;
        montoRestante -= denominacion * cantidadRetirada;
        billete.cantidad -= cantidadRetirada;
      } else {
        retiro[denominacion] = 0;
      }
    });
  
    if (montoRestante === 0) {
      console.log(`Monto retirado: ${montoDeseado}`);
      mostrarResultado(retiro);
    } else {
      console.log("No se puede retirar la cantidad solicitada.");
    }
  
    limpiarFormulario("login-form");
    ocultarElemento("operaciones");
    mostrarElemento("cajero");
  }
  
  // Función para procesar el formulario de inicio de sesión
  function procesarInicioSesion(event) {
    event.preventDefault();
  
    const documento = document.getElementById("documento").value;
    const contrasena = document.getElementById("contrasena").value;
  
    const usuario = usuarios.find(u => u.documento === documento && u.contrasena === contrasena);
  
    if (!usuario) {
      console.log("Usuario no encontrado. Intente nuevamente.");
      limpiarFormulario("login-form");
      return;
    }
  
    if (usuario.tipo === 1) {
      limpiarFormulario("login-form");
      ocultarElemento("cajero");
      ocultarElemento("operaciones");
      mostrarElemento("cajero");
    } else if (usuario.tipo === 2) {
      limpiarFormulario("login-form");
      ocultarElemento("cajero");
      ocultarElemento("operaciones");
      realizarRetiro();
    }
  }
  
  // Event Listeners
  document.getElementById("cajero-form").addEventListener("submit", cargarCajero);
  document.getElementById("retiro").addEventListener("click", realizarRetiro);
  document.getElementById("login-form").addEventListener("submit", procesarInicioSesion);
  