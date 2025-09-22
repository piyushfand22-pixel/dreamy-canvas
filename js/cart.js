const { readJsonFromLocalStorage, writeJsonToLocalStorage, formatCurrencyINR } = window.Utils;

const CART_KEY = 'cart_items';

function readCart() {
  return readJsonFromLocalStorage(CART_KEY, []);
}

function writeCart(items) {
  writeJsonToLocalStorage(CART_KEY, items);
}

function addToCart(item) {
  const items = readCart();
  const existing = items.find(i => i.id === item.id);
  if (existing) existing.qty += item.qty || 1;
  else items.push({ ...item, qty: item.qty || 1 });
  writeCart(items);
}

function removeFromCart(id) {
  writeCart(readCart().filter(i => i.id !== id));
}

function updateQty(id, qty) {
  const items = readCart().map(i => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  writeCart(items);
}

function clearCart() {
  writeCart([]);
}

function calculateTotals(items) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;
  return { subtotal, tax, total, f: (n) => formatCurrencyINR(n) };
}

// Page bootstrap for cart.html
function renderCartPage() {
  const itemsContainer = document.getElementById('cart-items');
  const totalsContainer = document.getElementById('cart-total');
  const clearBtn = document.getElementById('clear-cart');
  if (!itemsContainer || !totalsContainer || !clearBtn) return;

  function render() {
    const items = readCart();
    itemsContainer.innerHTML = '';
    if (items.length === 0) {
      itemsContainer.innerHTML = "<p class='empty-msg'>No items in cart</p>";
      totalsContainer.innerHTML = '';
      clearBtn.style.display = 'none';
      return;
    }
    const { subtotal, tax, total, f } = calculateTotals(items);
    items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <h4>${item.name}</h4>
        <p>${f(item.price)} × 
          <button aria-label="Decrease quantity" class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty">${item.qty}</span>
          <button aria-label="Increase quantity" class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </p>
        <button class="remove-btn" data-remove="${item.id}">Remove</button>
      `;
      itemsContainer.appendChild(row);
    });
    totalsContainer.innerHTML = `Subtotal: ${f(subtotal)} | Tax: ${f(tax)} | Total: ${f(total)}`;
    clearBtn.style.display = 'inline-block';
  }

  itemsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('[data-remove]')) {
      removeFromCart(target.getAttribute('data-remove'));
      render();
    }
    if (target.matches('.qty-btn')) {
      const id = target.getAttribute('data-id');
      const delta = Number(target.getAttribute('data-delta'));
      const items = readCart();
      const found = items.find(i => i.id === id);
      if (found) {
        updateQty(id, found.qty + delta);
        render();
      }
    }
  });

  clearBtn.addEventListener('click', () => {
    clearCart();
    render();
  });

  render();
}

window.Cart = { readCart, writeCart, addToCart, removeFromCart, updateQty, clearCart, calculateTotals, renderCartPage };


