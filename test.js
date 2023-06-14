// Lista de usuarios
const usuarios = [
  { nombre: "Administrador", documento: "admin", contraseña: "admin", tipo: 1 },
  { nombre: "Cliente1", documento: "123456789", contraseña: "cliente1", tipo: 2 }
];

// Inicialización del cajero
let cajero = [];

// Función para solicitar y validar usuario y contraseña
function solicitarCredenciales() {
  const documento = prompt("Ingrese su número de documento:");
  const contraseña = prompt("Ingrese su contraseña:");

  const usuario = usuarios.find(u => u.documento === documento && u.contraseña === contraseña);
  if (!usuario) {
    console.log("Usuario o contraseña incorrectos. Por favor, intente nuevamente.");
    solicitarCredenciales();
    return;
  }

  if (usuario.tipo === 1) {
    // Usuario administrador
    cargarCajero();
  } else {
    // Usuario cliente
    if (cajero.length === 0) {
      console.log("Cajero en mantenimiento, vuelva pronto.");
      reiniciar();
    } else {
      retirarDinero();
    }
  }
}

// Función para cargar el cajero
function cargarCajero() {
  const billetes = [5, 10, 20, 50, 100];
  cajero = [];

  for (let i = 0; i < billetes.length; i++) {
    const cantidad = parseInt(prompt(`Ingrese la cantidad de billetes de ${billetes[i]} mil pesos:`));
    cajero.push({ denominacion: billetes[i], cantidad });
  }
  console.log(cajero)
  mostrarCajero();
  // reiniciar();
}

// Función para mostrar el estado del cajero
function mostrarCajero() {
  let total = 0;

  console.log("Estado del cajero:");
  for (let i = 0; i < cajero.length; i++) {
    const { denominacion, cantidad } = cajero[i];
    const subtotal = denominacion * cantidad;
    total += subtotal;
    console.log(`- ${cantidad} billetes de ${denominacion} mil pesos: ${subtotal} mil pesos`);
  }

  console.log(`Total general: ${total} mil pesos`);
}

// Función para reiniciar el proceso
function reiniciar() {
  solicitarCredenciales();
}

// Función para retirar dinero
function retirarDinero() {
  const cantidadRetiro = parseInt(prompt("Ingrese la cantidad deseada a retirar:"));
  let cantidadRestante = cantidadRetiro;
  const billetesEntregados = [];

  for (let i = cajero.length - 1; i >= 0; i--) {
    const { denominacion, cantidad } = cajero[i];
    const cantidadBilletes = Math.floor(cantidadRestante / denominacion);

    if (cantidadBilletes > 0 && cantidad >= cantidadBilletes) {
      cantidadRestante -= denominacion * cantidadBilletes;
      cajero[i].cantidad -= cantidadBilletes;
      billetesEntregados.push({ denominacion, cantidad: cantidadBilletes });
    }
  }

  if (cantidadRestante === 0) {
    console.log(`Cantidad retirada: ${cantidadRetiro} mil pesos`);
    console.log("Billetes entregados:");
    billetesEntregados.forEach(billete => {
      console.log(`- ${billete.cantidad} billetes de ${billete.denominacion} mil pesos`);
    });
  } else {
    console.log("No se puede entregar la cantidad solicitada. Por favor, intente nuevamente.");
  }

  mostrarCajero();
  reiniciar();
}

// Iniciar el programa
solicitarCredenciales();
