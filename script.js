let selectedProducts = [];

// Alterna la selección de un producto
function toggleSelection(card, productName) {
  const checkmark = card.querySelector('.checkmark');

  if (selectedProducts.includes(productName)) {
    selectedProducts = selectedProducts.filter(product => product !== productName);
    checkmark.classList.add('hidden');
  } else {
    selectedProducts.push(productName);
    checkmark.classList.remove('hidden');
  }
}

// Abre un modal
function openIdModal() {
  if (selectedProducts.length === 0) {
    alert('Por favor selecciona al menos un producto antes de comprar.');
    return;
  }
  document.getElementById('id-modal').classList.add('show');
}

// Cierra un modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('show');
}

// Procesa la compra después de ingresar el ID
function processPurchase() {
  const userId = document.getElementById('user-id').value;
  if (!userId) {
    alert('Por favor ingresa un ID válido.');
    return;
  }

  closeModal('id-modal');

  const orderNumber = Math.floor(Math.random() * 1000000);
  const timestamp = new Date().toLocaleString();

  document.getElementById('summary-id').textContent = userId;
  document.getElementById('summary-order').textContent = orderNumber;
  document.getElementById('summary-timestamp').textContent = timestamp;

  const summaryProducts = document.getElementById('summary-products');
  summaryProducts.innerHTML = '';
  selectedProducts.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    summaryProducts.appendChild(li);
  });

  document.getElementById('summary-modal').classList.add('show');
}

// Reinicia la página
function resetPage() {
  window.location.reload();
}