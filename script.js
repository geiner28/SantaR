





const categories = [

//categoría de trajes
  [
  
    { name: 'Producto 1', img: 'images/trajes/Sakura.jpg' },
    { name: 'Producto 2',img: 'images/trajes/HipHop.jpg' },
    { name: 'Producto 3',img: 'images/trajes/Destructor.jpg' },
    { name: 'Producto 4',img: 'images/trajes/Principe.jpg' },
    { name: 'Producto 5',img: 'images/trajes/Piratas.jpg' },
    { name: 'Producto 6',img: 'images/trajes/Stempuk.jpg' },
    { name: 'Producto 7',img: 'images/trajes/Gamer.jpg' },
    { name: 'Producto 8',img: 'images/trajes/Criminal Amarillo.jpg' },
    { name: 'Producto 9',img: 'images/trajes/Criminal Azul.jpg' },
    { name: 'Producto 10',img: 'images/trajes/Criminal Morado.jpg' },
    { name: 'Producto 11',img: 'images/trajes/Criminal Rojo.jpg' },
    { name: 'Producto 12',img: 'images/trajes/Criminal Verde.jpg' },
    { name: 'Producto 13',img: 'images/trajes/Naruto.jpg' }
  ],


//categoría de ropa
  [

    { name: 'Producto 1', img: 'images/ropa/angelicalesrojos.png' },
    { name: 'Producto 2', img: 'images/ropa/angelicalesrosas.png' },
    { name: 'Producto 3',  img: 'images/ropa/angelicalesverdes.png' },

  ],


//categoría de armas
  [

    { name: 'Producto 1',  img: 'images/armas/vss.jpg' },
    { name: 'Producto 2',  img: 'images/armas/akroja.jpg' },
    { name: 'Producto 3',  img: 'images/armas/ak47.jpg' },
    { name: 'Producto 4',  img: 'images/armas/famasAzu;.jpg' },
    { name: 'Producto 5',  img: 'images/armas/mac10.jpg' },
    { name: 'Producto 6',  img: 'images/armas/scar.jpg' },
    { name: 'Producto 7',  img: 'images/armas/ump.jpg' },
    { name: 'Producto 8',  img: 'images/armas/umpamarilla.jpg' },

  ],


//categoría de emotes
  [

    { name: 'Producto 1', img: 'images/emotes/emote1.png' },
    { name: 'Producto 2', img: 'images/emotes/emote2.png' },
    { name: 'Producto 3', img: 'images/emotes/emote3.png' },
    { name: 'Producto 4', img: 'images/emotes/emote4.png' },
    { name: 'Producto 5', img: 'images/emotes/emote5.png' },
    { name: 'Producto 6', img: 'images/emotes/emote6.png' },
    { name: 'Producto 7', img: 'images/emotes/emote7.png' },
    { name: 'Producto 8', img: 'images/emotes/emote8.png' },
    { name: 'Producto 9', img: 'images/emotes/emote9.png' },
    { name: 'Producto 10', img: 'images/emotes/emote10.png' },
    { name: 'Producto 11', img: 'images/emotes/emote11.jpg' },
    { name: 'Producto 12', img: 'images/emotes/emote12.png' },
    { name: 'Producto 13', img: 'images/emotes/emote13.png' },
    { name: 'Producto 14', img: 'images/emotes/emote14.png' },
    { name: 'Producto 15', img: 'images/emotes/emote15.png' },
    { name: 'Producto 16', img: 'images/emotes/emote16.png' },
    { name: 'Producto 17', img: 'images/emotes/emote17.png' },
    { name: 'Producto 18', img: 'images/emotes/emote18.png' },
    { name: 'Producto 19', img: 'images/emotes/emote19.png' },
    { name: 'Producto 20', img: 'images/emotes/emote20.png' },
  
  ],


//categoría de diamantes
  [

    { name: 'Producto 1', img: 'images/diamantes/pase.png' },
    { name: 'Producto 2', img: 'images/diamantes/100.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/300.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/500.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/1000.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/2000.jpg' },
    { name: 'Producto 2', img: 'images/diamantes/5000.jpg' },
 
  ]


];

let selectedProducts = [];
let currentCategory = 0;

function renderProducts() {
  const container = document.getElementById('product-container');
  
  // Limpia el contenedor antes de renderizar
  container.innerHTML = '';

  // Renderiza los productos de la categoría actual
  categories[currentCategory].forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Agrega el loguito y el producto al interior de cada card
    card.innerHTML = `
      <div class="loguito-products">  <img src="logos/logo-garena.png" id="loguito-garena" alt=""></div> <!-- Aquí va el loguito -->
      <img class="imgs" src="${product.img}" alt="${product.name}">
    `;
    
    card.onclick = () => toggleSelection(product);
    container.appendChild(card);
  });
}


function toggleSelection(product) {
  const container = document.getElementById('product-container');
  const cards = container.getElementsByClassName('product-card');
  
  categories[currentCategory].forEach((p, index) => {
    if (p === product) {
      const card = cards[index];
      if (selectedProducts.includes(product)) {
      selectedProducts = selectedProducts.filter(p => p !== product);
      card.classList.remove('selected');
      } else {
      selectedProducts.push(product);
      card.classList.add('selected');
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
  const orderNumber = Math.floor(Math.random() * 1000000);
  const timestamp = new Date().toLocaleString();
  const randomHours = Math.floor(Math.random() * 24) + 4; // Generar número aleatorio entre 1 y 24

  // Mostrar los datos en el modal
  document.getElementById('summary-id').textContent = userId;
  document.getElementById('summary-order').textContent = selectedProducts.length;
  document.getElementById('summary-timestamp').textContent = timestamp;

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
    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;
    img.style.width = '50px'; // Ajusta el tamaño de la imagen si es necesario
    img.style.margin = '5px'; // Espaciado entre imágenes
    summaryContainer.appendChild(img);
  });

  // Reproducir el video adicional
  playVideo();
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
  window.location.reload();
}

// Inicializa la primera categoría al cargar
renderProducts();




