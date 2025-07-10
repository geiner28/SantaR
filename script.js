





const categories = [

//categoría de trajes
  [
      { name: 'Producto 14',img: 'images/trajes/Sakura Mujer.jpg' },
    { name: 'Producto 15',img: 'images/trajes/HipHop Mujer.jpg' },
    { name: 'Producto 16',img: 'images/trajes/Destructor Mujer.jpg' },
    { name: 'Producto 17',img: 'images/trajes/Reyes Mujer.jpg' },
    { name: 'Producto 18',img: 'images/trajes/Piratas Mujer.jpg' },
    { name: 'Producto 19',img: 'images/trajes/Gamer Mujer.jpg' },
    { name: 'Producto 20',img: 'images/trajes/Stempuk Mujer.jpg' },

    { name: 'Producto 1', img: 'images/trajes/Naruto (1).jpg' },
    { name: 'Producto 1', video: 'images/trajes/sakura.mp4', costoDiamantes: 500 },
    { name: 'Producto 2',video: 'images/trajes/HipHop.mp4', costoDiamantes: 500 },
    { name: 'Producto 3',video: 'images/trajes/destructor.mp4', costoDiamantes: 500 },
    { name: 'Producto 4',video: 'images/trajes/principe.mp4', costoDiamantes: 500 },
    { name: 'Producto 5',video: 'images/trajes/pirata.mp4', costoDiamantes: 500 },
    { name: 'Producto 6',video: 'images/trajes/gamer.mp4', costoDiamantes: 500 },
    { name: 'Producto 7',img: 'images/trajes/Stempuk (1).jpg' },
    { name: 'Producto 8',img: 'images/trajes/Criminal Amarillo (1).jpg' },
    { name: 'Producto 9',img: 'images/trajes/Criminal Azul (1).jpg' },
    { name: 'Producto 10',img: 'images/trajes/Criminal Morado (1).jpg' },
    { name: 'Producto 11',img: 'images/trajes/Criminal Rojo (1).jpg' },
    { name: 'Producto 12',img: 'images/trajes/Criminal Verde (1).jpg' },


  ],


//categoría de ropa
  [
  { name: 'Producto 3',  img: 'images/ropa/Chaqueta Roja2.jpg' },
    { name: 'Producto 3',  img: 'images/ropa/Panoleta Veterana2.jpg' },
     { name: 'Producto 3',  img: 'images/ropa/Camiseta de Heroico.jpg' },
    { name: 'Producto 3',  img: 'images/ropa/angelicalesverdes.png' },
    { name: 'Producto 4',  img: 'images/ropa/Angelical Azul.jpg' },
    { name: 'Producto 1', img: 'images/ropa/angelicalesrojos.png' },
    { name: 'Producto 2', img: 'images/ropa/angelicalesrosas.png' },

  
  
  
   

  ],


//categoría de armas
  [
    { name: 'Producto 8',  img: 'images/armas/11.jpg' },
    { name: 'Producto 8',  img: 'images/armas/12.jpg' },
    { name: 'Producto 1',  img: 'images/armas/1.jpg' },
   { name: 'Producto 6',  img: 'images/armas/6.jpg' },
    { name: 'Producto 7',  img: 'images/armas/7.jpg' },
    { name: 'Producto 4',  img: 'images/armas/4.jpg' },
    { name: 'Producto 5',  img: 'images/armas/5.jpg' },
    { name: 'Producto 8',  img: 'images/armas/8.jpg' },
    { name: 'Producto 8',  img: 'images/armas/9.jpg' },
    { name: 'Producto 8',  img: 'images/armas/10.jpg' },
    { name: 'Producto 2',  img: 'images/armas/2.jpg' },
    { name: 'Producto 3',  img: 'images/armas/3.jpg' },



  ],


//categoría de emotes
  [
    { name: 'Producto 14', img: 'images/emotes/emote14.png' },
    { name: 'Producto 15', img: 'images/emotes/emote15.png' },
    { name: 'Producto 12', img: 'images/emotes/emote12.png' },
    { name: 'Producto 13', img: 'images/emotes/emote13.png' },
     { name: 'Producto 8', img: 'images/emotes/emote8.png' },
    { name: 'Producto 9', img: 'images/emotes/emote9.png' },
    { name: 'Producto 5', img: 'images/emotes/emote5.png' },
    { name: 'Producto 6', img: 'images/emotes/emote6.png' },
    { name: 'Producto 7', img: 'images/emotes/emote7.png' },
    { name: 'Producto 10', img: 'images/emotes/emote10.png' },
    { name: 'Producto 11', img: 'images/emotes/emote11.jpg' },
   { name: 'Producto 3', img: 'images/emotes/emote3.png' },
    { name: 'Producto 4', img: 'images/emotes/emote4.png' },
        { name: 'Producto 1', img: 'images/emotes/emote1.png' },
    { name: 'Producto 2', img: 'images/emotes/emote2.png' },


  
  ],


//categoría de diamantes
  [

 

    { name: 'Producto 2', img: 'images/diamantes/100 Diamantes.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/300 diamantes.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/500 Diamantes.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/1000 Diamantes.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/2000 Diamantes.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/5000 Diamantes.jpg' },
     { name: 'Producto 1', img: 'images/diamantes/pase.png' },
  ]


];

let selectedProducts = [];
let currentCategory = 0;


function renderProducts() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  categories[currentCategory].forEach(product => {
    const card = document.createElement('div');
    card.className = `
      product-card 
      bg-gray-800 rounded-xl shadow-md p-2
      flex flex-col items-center justify-center
      aspect-square
    `;

    let mediaContent = '';
    if (product.video) {
      mediaContent = `
        <video class="w-full h-auto object-contain" src="${product.video}" 
               autoplay muted loop playsinline></video>
      `;
    } else if (product.img) {
      mediaContent = `
        <img class="w-full h-auto object-contain" src="${product.img}" alt="${product.name}">
      `;
    }

    card.innerHTML = `
      <div class="loguito-products mb-2">
        <img src="logos/ff.png" id="loguito-garena" alt="">
      </div>
      ${mediaContent}
    `;

    card.onclick = () => toggleSelection(product);
    container.appendChild(card);
  });
}



let oroCount = 10000;
let diamantesCount = 10000;

// Mostrar los valores iniciales en la página
document.getElementById('oro-count').textContent = oroCount;
document.getElementById('diamantes-count').textContent = diamantesCount;


function toggleSelection(product) {
  const container = document.getElementById('product-container');
  const cards = container.getElementsByClassName('product-card');
  
  categories[currentCategory].forEach((p, index) => {
    if (p === product) {
      const card = cards[index];
      if (selectedProducts.includes(product)) {
        selectedProducts = selectedProducts.filter(p => p !== product);
        card.classList.remove('selected');
        // Si el producto tiene costoDiamantes y se deselecciona, suma los diamantes de vuelta
        if (product.costoDiamantes) {
          diamantesCount += product.costoDiamantes;
          // Si los diamantes llegan a 0 o menos, reinicia el saldo
          if (diamantesCount <= 0) {
            diamantesCount = 10000;
          }
          document.getElementById('diamantes-count').textContent = diamantesCount;
        }
            } else {
        // Si el producto tiene costoDiamantes y hay suficientes diamantes, réstalos
        if (product.costoDiamantes) {
          if (diamantesCount >= product.costoDiamantes) {
            diamantesCount -= product.costoDiamantes;
            // Si los diamantes llegan a 0 o menos, reinicia el saldo
            if (diamantesCount <= 0) {
              diamantesCount = 10000;
            }
            document.getElementById('diamantes-count').textContent = diamantesCount;
            selectedProducts.push(product);
            card.classList.add('selected');
          } else {
            alert('No tienes suficientes diamantes para este producto.');
          }
        } else {
          selectedProducts.push(product);
          card.classList.add('selected');
        }
            }
    }
  });
}

function showCategory(index) {
  // Actualiza la categoría actual
  currentCategory = index;
  renderProducts();

  // Actualiza la animación de los botones
  const buttons = document.getElementsByClassName('nav-btn');
  for (let i = 0; i < buttons.length; i++) {
    if (i === index) {
      buttons[i].classList.add('animation');
    } else {
      buttons[i].classList.remove('animation');
    }
  }
}

function openIdModal() {
  if (!selectedProducts.length) {
    alert('Selecciona al menos un producto.');
    return;
  }
  document.getElementById('id-modal').classList.add('show');
}



function cancelarEnvio() {
  // Limpiar nombre, ID y ocultar botones
  nombreJugador = null;
  document.getElementById('user-id').value = '';
  document.getElementById('nombre-jugador').textContent = '';
  document.getElementById('div-botones-enviar').style.display = 'none';

  // Cerrar el modal
  closeModal('id-modal');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('show');
}

function processPurchase() {
  const userId = document.getElementById('user-id').value;
  if (!userId) {
    alert('Ingresa un ID.');
    return;
  }

  // Cierra el modal de ID
  closeModal('id-modal');

  // Generar datos del pedido
  const nombre = nombreJugador;
  const orderNumber = Math.floor(Math.random() * 1000000);
  const timestamp = new Date().toLocaleString();
  const randomHours = Math.floor(Math.random() * 24) + 4; // Generar número aleatorio entre 4 y 27

  // Mostrar los datos en el modal
  document.getElementById('summary-id').textContent = userId;
  document.getElementById('summary-order').textContent = selectedProducts.length;
  document.getElementById('summary-timestamp').textContent = timestamp;
  document.getElementById('summary-name').textContent = nombre || 'No encontrado';

  // Actualizar el mensaje con las horas aleatorias
  const deliveryMessage = document.querySelector('#detalles-pedido p:last-child');
  deliveryMessage.textContent = `Tu pedido llegará a tu cuenta en ${randomHours} horas.`;

  // Renderizar los productos seleccionados
  const summaryProducts = document.getElementById('summary-products');
  summaryProducts.innerHTML = '';

  const summaryContainer = document.createElement('div');
  summaryContainer.style.display = 'flex';
  summaryContainer.style.flexWrap = 'wrap';
  summaryProducts.appendChild(summaryContainer);

  selectedProducts.forEach(product => {
    let element;

    if (product.video) {
      element = document.createElement('video');
      element.src = product.video;
      element.autoplay = true;
      element.muted = true;
      element.loop = true;
      element.playsInline = true;
    } else if (product.img) {
      element = document.createElement('img');
      element.src = product.img;
      element.alt = product.name;
    }

    element.style.border = '3px solid gold';
    element.style.width = '50px'; // Ajusta el tamaño
    element.style.margin = '5px';

    summaryContainer.appendChild(element);
  });

  // Reproducir el video adicional
  playVideo();
}



let nombreJugador = null;

async function buscarJugador() {
  const id = document.getElementById('user-id').value.trim();
  const nombreEl = document.getElementById('nombre-jugador');
  const botonesDiv = document.getElementById('div-botones-enviar');

  if (!id || isNaN(id)) {
    nombreJugador = null;
    nombreEl.textContent = 'Por favor, ingresa un ID válido.';
    botonesDiv.style.display = 'none';
    return;
  }

  nombreEl.textContent = 'Consultando...';
  botonesDiv.style.display = 'none'; // Ocultar mientras consulta

  try {
    const response = await fetch(`https://api-free-fire-nine.vercel.app/api/id?uid=${id}`);
    
    if (!response.ok) {
      throw new Error('Respuesta no válida de la API');
    }

    const data = await response.json();

    if (data.nombre) {
      nombreJugador = data.nombre;
      nombreEl.innerHTML = `Nombre del jugador: <span style="color:#000000;">${nombreJugador}</span>`;
      botonesDiv.style.display = 'flex'; // Mostrar los botones si se encontró el nombre
    } else {
      nombreJugador = null;
      nombreEl.textContent = 'No se encontró el jugador.';
      botonesDiv.style.display = 'none';
    }
  } catch (error) {
    nombreJugador = null;
    nombreEl.textContent = 'Error al consultar la API.';
    botonesDiv.style.display = 'none';
    console.error(error);
  }
}


function playVideo() {
  const videoContainer = document.getElementById('div-video');
  const overlay = document.getElementById('overlay');
  videoContainer.classList.add('show'); // Mostrar el contenedor del video
  overlay.style.display = 'block'; // Mostrar la capa de superposición
  const video = videoContainer.querySelector('.video-regalo');

  // Configurar el video para iniciar en silencio y sin interacción
  video.muted = true;
  video.play(); // Reproducir el video

  // Escuchar el evento `ended` para cerrar el video automáticamente
  video.addEventListener('ended', () => {
    closeVideo(); // Cierra el video
    showSummary(); // Muestra el resumen del pedido
  });
}









function closeVideo() {
  const videoContainer = document.getElementById('div-video');
  const overlay = document.getElementById('overlay');
  const video = videoContainer.querySelector('.video-regalo');
  video.pause();
  video.currentTime = 0; // Reinicia el video
  videoContainer.classList.remove('show'); // Oculta el contenedor del video
  overlay.style.display = 'none'; // Oculta la capa de superposición
}

function showSummary() {
  // Mostrar el modal de resumen del pedido
  document.getElementById('summary-modal').classList.add('show');
}

function resetPage() {
  nombreJugador = null;
  document.getElementById('nombre-jugador').textContent = '';

  // Ocultar los botones de enviar regalos
  document.getElementById('div-botones-enviar').style.display = 'none';

  // Reiniciar la selección de productos
  selectedProducts = [];
  const cards = document.getElementsByClassName('product-card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('selected');
  }

  // Vaciar el campo de ID del jugador
  document.getElementById('user-id').value = '';

  // Cerrar el modal de resumen
  closeModal('summary-modal');

  // Reiniciar el video
  closeVideo();
}
// Inicializa la primera categoría al cargar
renderProducts();



const rainContainer = document.querySelector('.rain-container');
const numDrops = 100;

for (let i = 0; i < numDrops; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  drop.style.left = `${Math.random() * 100}vw`;
  drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`; // más corto para mejor efecto

  rainContainer.appendChild(drop);
}
