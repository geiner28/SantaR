const categories = [


  [
    

    { name: 'Producto 1', img: 'images/product1.jpg' },
    { name: 'Producto 2',img: 'images/trajes/sakura.png' },
    { name: 'Producto 3',img: 'images/trajes/hiphop.png' },
    { name: 'Producto 4',img: 'images/trajes/destructor.png' },
    { name: 'Producto 5',img: 'images/trajes/goku.jpg' },
    { name: 'Producto 6',img: 'images/trajes/itachi.png' },
    { name: 'Producto 7',img: 'images/trajes/criminalRojo.png' },
    { name: 'Producto 8',img: 'images/trajes/criminalRojonuevo.png' },
    { name: 'Producto 9',img: 'images/trajes/criminalmorado.png' },
    { name: 'Producto 10',img: 'images/trajes/criminalazul.png' },
    { name: 'Producto 11',img: 'images/trajes/criminalAmarillo.png' },
    { name: 'Producto 12',img: 'images/trajes/criminalneonAzul.png' },
    { name: 'Producto 13',img: 'images/trajes/conejoMorado.png' },
    { name: 'Producto 14',img: 'images/trajes/jingjdorado.png' },
    { name: 'Producto 15',img: 'images/trajes/jingnuevo.png' },
    { name: 'Producto 16',img: 'images/trajes/jinjangdorado.png' },


  ],
  [


    { name: 'Producto 17', price: 30, img: 'images/ropa/angelicalesrojos.png' },
    { name: 'Producto 18', price: 20, img: 'images/ropa/angelicalesrosas.png' },
    { name: 'Producto 19', price: 30, img: 'images/ropa/angelicalesverdes.png' }

  ],
  [
    { name: 'Producto 1', price: 10, img: 'images/armas/vss.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/ak47.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/akroja.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/famasAzu;.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/mac10.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/scar.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/ump.jpg' },
    { name: 'Producto 1', price: 10, img: 'images/armas/umpamarilla.jpg' }

  ],
  [
    { name: 'Producto 1', price: 10, img: 'images/product1.jpg' },
    { name: 'Producto 2', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 3', price: 30, img: 'images/product3.jpg' },
    { name: 'Producto 4', price: 10, img: 'images/product1.jpg' },
    { name: 'Producto 5', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 6', price: 30, img: 'images/product3.jpg' },
    { name: 'Producto 7', price: 10, img: 'images/product1.jpg' },
    { name: 'Producto 8', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 9', price: 30, img: 'images/product3.jpg' }
  ],
  [
    {  img: 'images/product1.jpg' },

    { name: 'Producto 9', price: 30, img: 'images/product3.jpg' },
    { name: 'Producto 5', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 6', price: 30, img: 'images/product1.jpg' },
    { name: 'Producto 7', price: 10, img: 'images/product1.jpg' },
    { name: 'Producto 8', price: 20, img: 'images/product1.jpg' },
    { name: 'Producto 9', price: 30, img: 'images/product1.jpg' },
    { name: 'Producto 5', price: 20, img: 'images/product1.jpg' },
    { name: 'Producto 6', price: 30, img: 'images/product3.jpg' },
    { name: 'Producto 7', price: 10, img: 'images/product1.jpg' },
    { name: 'Producto 8', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 9', price: 30, img: 'images/product3.jpg' },
    { name: 'Producto 5', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 6', price: 30, img: 'images/product3.jpg' },
    { name: 'Producto 7', price: 10, img: 'images/product1.jpg' },
    { name: 'Producto 8', price: 20, img: 'images/product2.jpg' },
    { name: 'Producto 9', price: 30, img: 'images/product3.jpg' }

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

  closeModal('id-modal');
  const orderNumber = Math.floor(Math.random() * 1000000);
  const timestamp = new Date().toLocaleString();
  const summaryId = document.getElementById('summary-id');
  summaryId.textContent = userId;

  const summaryProducts = document.getElementById('summary-products');
  summaryProducts.innerHTML = '';
  selectedProducts.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    summaryProducts.appendChild(li);
  });

  document.getElementById('summary-modal').classList.add('show');
}

function resetPage() {
  window.location.reload();
}

// Inicializa la primera categoría al cargar
renderProducts();