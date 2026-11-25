// ---------- 1. DATOS ----------

const NUMERO_WHATSAPP = "5493492315341";
const URL_DOLAR = "https://dolarapi.com/v1/dolares/oficial";
const CLAVE_BORRADOR = "monina-borrador-contacto";

// PRECIOS DE PRUEBA: cuando tenga los reales, los cambiaré.
// oferta: true  -> aparece al tocar "Solo ofertas"
// precioAnterior -> si existe, se muestra tachado
// etiqueta / promo -> textos opcionales ("" si no hay)
const productos = [
    // ----- MUJER -----
    { id: "remera-supreme-mujer", categoria: "mujer", marca: "Corpofit", nombre: "Remera Supreme", precio: 18000, precioAnterior: null, etiqueta: "Nuevo", promo: "", oferta: false, talles: ["S", "M", "L"], imagen: "img/nuevo1.jpeg" },
    { id: "remera-impulse-mujer", categoria: "mujer", marca: "Corpofit", nombre: "Remera Impulse", precio: 18000, precioAnterior: null, etiqueta: "Nuevo", promo: "", oferta: false, talles: ["S", "M", "L"], imagen: "img/nuevo2.png" },
    { id: "top-deportivo", categoria: "mujer", marca: "Corpofit", nombre: "Top Deportivo", precio: 15000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["S", "M", "L"], imagen: "img/topCorpo.jpg" },
    { id: "musculosa-morley", categoria: "mujer", marca: "Lanz", nombre: "Musculosa Morley con Vuelos", precio: 12000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["Único"], imagen: "img/MusculosaMorleyVuelitos.jpg" },
    { id: "jean-oxford", categoria: "mujer", marca: "Atrapame Denim", nombre: "Jean Oxford con brillos", precio: 40000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["36 al 46"], imagen: "img/jeanOxford.png" },
    { id: "jean-baggy", categoria: "mujer", marca: "Atrapame Denim", nombre: "Jean Baggy", precio: 31500, precioAnterior: 45000, etiqueta: "-30%", promo: "Hasta agotar stock", oferta: true, talles: ["36 al 46"], imagen: "img/nuevo3.JPG" },

    // ----- HOMBRE -----
    { id: "bermuda-baggy", categoria: "hombre", marca: "Atrapame Denim", nombre: "Bermuda Baggy", precio: 30000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["38 al 44"], imagen: "img/bermudaBaggy.jpg" },
    { id: "remera-impulse-hombre", categoria: "hombre", marca: "Corpofit", nombre: "Remera Impulse", precio: 18000, precioAnterior: null, etiqueta: "Nuevo", promo: "", oferta: false, talles: ["S", "M", "L", "XL"], imagen: "img/impulseHombre.jpeg" },
    { id: "bermuda-cargo", categoria: "hombre", marca: "Roby", nombre: "Bermuda Cargo", precio: 28000, precioAnterior: null, etiqueta: "Último par", promo: "", oferta: false, talles: ["42"], imagen: "img/bermudaCargo.jpg" },
    { id: "chomba-beige", categoria: "hombre", marca: "Roby", nombre: "Chomba Beige con Vivos Verdes", precio: 22000, precioAnterior: null, etiqueta: "2x1", promo: "Llevando las 2, pagás c/u: ", oferta: true, talles: ["L"], imagen: "img/chombaBeige.jpg" },
    { id: "chomba-roja", categoria: "hombre", marca: "Roby", nombre: "Chomba Roja con Vivos Blancos", precio: 22000, precioAnterior: null, etiqueta: "2x1", promo: "Llevando las 2, pagás c/u:", oferta: true, talles: ["L"], imagen: "img/chombaRoja.jpg" },
    { id: "pantalon-buzo", categoria: "hombre", marca: "Sport", nombre: "Pantalón de buzo rústico", precio: 20000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["XL"], imagen: "img/PantalonBuzo.png" },

    // ----- CALZADO -----
    { id: "kappa-kombat", categoria: "calzado", marca: "Kappa", nombre: "Zapatillas Kappa Kombat", precio: 44000, precioAnterior: 55000, etiqueta: "-20%", promo: "Último par, talle 40", oferta: true, talles: ["40"], imagen: "img/kappaKombat.jpg" },
    { id: "diadora-running", categoria: "calzado", marca: "Diadora", nombre: "Zapatilla Running Diadora", precio: 60000, precioAnterior: 75000, etiqueta: "-20%", promo: "Último par, talle 42", oferta: true, talles: ["42"], imagen: "img/ZapasDiadora.jpg" },
    { id: "fila-running", categoria: "calzado", marca: "Fila", nombre: "Zapatillas Running Fila", precio: 46400, precioAnterior: 58000, etiqueta: "-20%", promo: "Último par, talle 39", oferta: true, talles: ["39"], imagen: "img/zapasFila.jpg" },
    { id: "lecoq-urban", categoria: "calzado", marca: "Le Coq", nombre: "Zapatillas Urban", precio: 62000, precioAnterior: null, etiqueta: "Último par", promo: "", oferta: false, talles: ["44"], imagen: "img/lecoq.jpg" },
    { id: "joma-running", categoria: "calzado", marca: "Joma", nombre: "Zapatillas Running Joma", precio: 57000, precioAnterior: null, etiqueta: "Último par", promo: "", oferta: false, talles: ["43"], imagen: "img/ZapasJoma.jpg" },
    { id: "botin-penalty", categoria: "calzado", marca: "Penalty", nombre: "Botines Campo Penalty", precio: 50000, precioAnterior: null, etiqueta: "Último par", promo: "", oferta: false, talles: ["41"], imagen: "img/BotinPenalty.jpg" },

    // ----- ACCESORIOS -----
    { id: "pelota-futbol", categoria: "accesorios", marca: "Diadora", nombre: "Pelota de Fútbol", precio: 25000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["Nº 5"], imagen: "img/pelotaFutbol.jpg" },
    { id: "pelota-basquet", categoria: "accesorios", marca: "Ushuaia", nombre: "Pelota de Básquet", precio: 22000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: ["Nº 3"], imagen: "img/pelotaBasquet.jpg" },
    { id: "botella-termica", categoria: "accesorios", marca: "Sport", nombre: "Botella Térmica doble pico", precio: 14000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: [], imagen: "img/BotellaTermica.png" },
    { id: "mini-bag-charol", categoria: "accesorios", marca: "Marroquinería Monina", nombre: "Mini Bag Charol", precio: 20000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: [], imagen: "img/cartera.jpeg" },
    { id: "cartera-morral", categoria: "accesorios", marca: "Marroquinería Monina", nombre: "Cartera Morral", precio: 26000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: [], imagen: "img/carteraRosa.png" },
    { id: "mochila-eco-cuero", categoria: "accesorios", marca: "Marroquinería Monina", nombre: "Mochila Eco Cuero", precio: 32000, precioAnterior: null, etiqueta: "", promo: "", oferta: false, talles: [], imagen: "img/mochila.jpeg" }
];

// Estado de la página (valores que cambian mientras se usa el sitio)
let cotizacionDolar = null;
let soloOfertas = false;


// ---------- 2. FUNCIONES AUXILIARES ----------

// Crea un elemento con clase y texto opcionales
function crearElemento(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta);
    if (clase) {
        elemento.className = clase;
    }
    if (texto) {
        elemento.textContent = texto;
    }
    return elemento;
}

// 31500 -> "$ 31.500"
function formatearPrecio(numero) {
    return "$ " + numero.toLocaleString("es-AR");
}

// Arma el link de WhatsApp con el mensaje ya codificado
function crearLinkWhatsapp(mensaje) {
    return "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);
}


// ---------- 3. TARJETAS DE PRODUCTO ----------

function crearPrecio(producto) {
    const contenedor = crearElemento("p", "producto-precio");

    if (producto.precioAnterior) {
        // Oferta: precio viejo tachado + precio nuevo
        const tachado = crearElemento("del");
        tachado.appendChild(crearElemento("span", "visually-hidden", "Precio anterior: "));
        tachado.appendChild(document.createTextNode(formatearPrecio(producto.precioAnterior)));
        contenedor.appendChild(tachado);
        contenedor.appendChild(crearElemento("ins", "", formatearPrecio(producto.precio)));
    } else {
        contenedor.textContent = formatearPrecio(producto.precio);
    }
    return contenedor;
}

function crearTalles(talles) {
    const lista = crearElemento("div", "talles-lista");
    talles.forEach(function (talle) {
        lista.appendChild(crearElemento("span", "talle", talle));
    });
    return lista;
}

function crearBotonConsultar(producto) {
    let mensaje = "Hola! Quiero consultar por: " + producto.nombre;
    if (producto.oferta) {
        mensaje += " (en oferta)";
    }
    const boton = crearElemento("a", "btn btn-consultar", "Consultar por WhatsApp");
    boton.href = crearLinkWhatsapp(mensaje);
    boton.target = "_blank";
    boton.rel = "noopener";
    return boton;
}

// Construye una tarjeta con la misma estructura que tenía en el HTML original
function crearTarjeta(producto) {
    const tarjeta = crearElemento("div", "card producto-card");
    if (producto.categoria === "calzado") {
        tarjeta.classList.add("calzado-card");
    }

    if (producto.etiqueta) {
        const claseExtra = producto.etiqueta === "Último par" ? " etiqueta-ultimos" : "";
        tarjeta.appendChild(crearElemento("span", "etiqueta" + claseExtra, producto.etiqueta));
    }

    const imagen = crearElemento("img", "card-img-top");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    tarjeta.appendChild(imagen);

    const cuerpo = crearElemento("div", "card-body");
    cuerpo.appendChild(crearElemento("p", "producto-marca", producto.marca));
    cuerpo.appendChild(crearElemento("h3", "", producto.nombre));
    cuerpo.appendChild(crearPrecio(producto));

    // Precio aproximado en dólares
    if (cotizacionDolar) {
        const enDolares = (producto.precio / cotizacionDolar).toLocaleString("es-AR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        cuerpo.appendChild(crearElemento("p", "precio-usd", "≈ US$ " + enDolares));
    }

    if (producto.promo) {
        cuerpo.appendChild(crearElemento("p", "promo-texto", producto.promo));
    }
    if (producto.talles.length > 0) {
        cuerpo.appendChild(crearTalles(producto.talles));
    }
    cuerpo.appendChild(crearBotonConsultar(producto));

    tarjeta.appendChild(cuerpo);
    return tarjeta;
}

// Dibuja una lista de productos en la grilla
function mostrarProductos(lista) {
    const grilla = document.getElementById("productos");
    const sinResultados = document.getElementById("sin-resultados");

    grilla.innerHTML = "";
    lista.forEach(function (producto) {
        grilla.appendChild(crearTarjeta(producto));
    });

    // Si no hay nada para mostrar, aparece el aviso
    sinResultados.classList.toggle("oculto", lista.length > 0);
}


// ---------- 4. BUSCADOR Y FILTRO DE OFERTAS ----------

// Combina categoría de la página + texto buscado + botón de ofertas
function aplicarFiltros() {
    const grilla = document.getElementById("productos");
    const buscador = document.getElementById("buscador");
    const categoria = grilla.dataset.categoria;
    const texto = buscador.value.trim().toLowerCase();

    const lista = productos.filter(function (producto) {
        const coincideCategoria = producto.categoria === categoria;
        const coincideTexto = producto.nombre.toLowerCase().includes(texto)
            || producto.marca.toLowerCase().includes(texto);
        const coincideOferta = !soloOfertas || producto.oferta;
        return coincideCategoria && coincideTexto && coincideOferta;
    });

    mostrarProductos(lista);
}

function iniciarCatalogo() {
    const grilla = document.getElementById("productos");
    if (!grilla) {
        return; // esta página no tiene catálogo (por ejemplo, index.html)
    }

    const buscador = document.getElementById("buscador");
    const botonOfertas = document.getElementById("btn-ofertas");

    // Evento 1: escribir en el buscador
    buscador.addEventListener("input", aplicarFiltros);

    // Evento 2: clic en "Solo ofertas"
    botonOfertas.addEventListener("click", function () {
        soloOfertas = !soloOfertas;
        botonOfertas.classList.toggle("activo", soloOfertas);
        aplicarFiltros();
    });

    aplicarFiltros();
    cargarCotizacion();
}


// ---------- 5. API: COTIZACIÓN DEL DÓLAR ----------

async function cargarCotizacion() {
    const aviso = document.getElementById("cotizacion-dolar");
    if (!aviso) {
        return;
    }

    // Estado de carga
    aviso.className = "cotizacion cargando";
    aviso.textContent = "Cargando cotización del dólar...";

    try {
        const respuesta = await fetch(URL_DOLAR);
        if (!respuesta.ok) {
            throw new Error("Respuesta con error: " + respuesta.status);
        }
        const datos = await respuesta.json();
        if (typeof datos.venta !== "number") {
            throw new Error("Dato de cotización inválido");
        }

        cotizacionDolar = datos.venta;
        aviso.className = "cotizacion";
        aviso.textContent = "Dólar oficial: " + formatearPrecio(cotizacionDolar);
        aplicarFiltros(); // vuelve a dibujar para mostrar los precios en dólares
    } catch (error) {
        // Estado de error: la tienda sigue funcionando igual, solo sin dólares
        aviso.className = "cotizacion error";
        aviso.textContent = "No pudimos traer la cotización del dólar. Los precios en pesos siguen vigentes.";
    }
}


// ---------- 6. FORMULARIO DE CONTACTO ----------

function mostrarError(idCampo, mensaje) {
    document.getElementById("error-" + idCampo).textContent = mensaje;
    document.getElementById(idCampo).classList.add("invalido");
}

function limpiarError(idCampo) {
    document.getElementById("error-" + idCampo).textContent = "";
    document.getElementById(idCampo).classList.remove("invalido");
}

// Revisa los 3 campos. Devuelve true solo si todo está bien.
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.replace(/\s/g, ""); // sin espacios
    const mensaje = document.getElementById("mensaje").value.trim();
    let esValido = true;

    ["nombre", "telefono", "mensaje"].forEach(limpiarError);

    if (nombre.length < 3) {
        mostrarError("nombre", "Escribí tu nombre (al menos 3 letras).");
        esValido = false;
    }

     // isNaN da true si el texto no es un número (por ejemplo, si tiene letras o guiones)
    if (telefono === "" || isNaN(telefono) || telefono.includes(".")) {
        mostrarError("telefono", "El teléfono debe tener solo números.");
        esValido = false;
    } else if (telefono.length < 8) {
        mostrarError("telefono", "El teléfono debe tener al menos 8 dígitos.");
        esValido = false;
    }

    if (mensaje.length < 10) {
        mostrarError("mensaje", "Contanos qué buscás (al menos 10 caracteres).");
        esValido = false;
    }

    return esValido;
}

// --- localStorage: borrador del formulario ---

function guardarBorrador() {
    const borrador = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        mensaje: document.getElementById("mensaje").value
    };
    try {
        localStorage.setItem(CLAVE_BORRADOR, JSON.stringify(borrador));
    } catch (error) {
        // Si el navegador no deja guardar, el formulario sigue funcionando
    }
}

function cargarBorrador() {
    try {
        const guardado = localStorage.getItem(CLAVE_BORRADOR);
        if (!guardado) {
            return;
        }
        const borrador = JSON.parse(guardado);
        document.getElementById("nombre").value = borrador.nombre || "";
        document.getElementById("telefono").value = borrador.telefono || "";
        document.getElementById("mensaje").value = borrador.mensaje || "";
    } catch (error) {
        // Si lo guardado está roto, se descarta y se arranca vacío
        localStorage.removeItem(CLAVE_BORRADOR);
    }
}

function enviarFormulario(evento) {
    evento.preventDefault(); // evita que la página se recargue

    if (!validarFormulario()) {
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const consulta = document.getElementById("mensaje").value.trim();

    const textoWhatsapp = "Hola! Soy " + nombre + " (tel: " + telefono + "). " + consulta;
    window.open(crearLinkWhatsapp(textoWhatsapp), "_blank", "noopener");

    const exito = document.getElementById("contacto-exito");
    exito.textContent = "¡Gracias, " + nombre + "! Se abrió WhatsApp para enviar tu consulta.";
    exito.classList.remove("oculto");

    document.getElementById("form-contacto").reset();
    localStorage.removeItem(CLAVE_BORRADOR); // ya se envió: se borra el borrador
}

function iniciarFormulario() {
    const formulario = document.getElementById("form-contacto");
    if (!formulario) {
        return; // esta página no tiene formulario
    }

    cargarBorrador();
    formulario.addEventListener("submit", enviarFormulario);

    // Al escribir: se guarda el borrador y se limpia el error de ese campo
    ["nombre", "telefono", "mensaje"].forEach(function (idCampo) {
        document.getElementById(idCampo).addEventListener("input", function () {
            limpiarError(idCampo);
            guardarBorrador();
        });
    });
}
// ---------- OFERTAS EN LA PÁGINA DE INICIO ----------

function iniciarOfertasInicio() {
    const contenedor = document.getElementById("ofertas-home");
    if (!contenedor) {
        return; // esta página no tiene la sección de ofertas
    }

    const ofertas = productos.filter(function (producto) {
        return producto.oferta;
    });

    ofertas.forEach(function (producto) {
        contenedor.appendChild(crearTarjeta(producto));
    });
}

// ---------- 7. ARRANQUE ----------

iniciarCatalogo();
iniciarFormulario();
iniciarOfertasInicio();
