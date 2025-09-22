// Global Cart API used via window.Cart

// Products data is now managed in data/products.json

function bootstrapProductsPage() {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;

  // Optional: search/sort/filter UI could be added here
  function render(list) {
    grid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-category', p.category);
      card.innerHTML = `
        <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <span class="price">₹${p.price}</span>
          <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Prefer global JS data if present (works on file://), otherwise fallback to JSON fetch
  if (Array.isArray(window.PRODUCTS_DATA) && window.PRODUCTS_DATA.length) {
    render(window.PRODUCTS_DATA);
    wireFilters(window.PRODUCTS_DATA);
  } else {
    fetch('data/products.json')
      .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to load products.json')))
      .then(products => {
        render(products);
        wireFilters(products);
      })
      .catch(() => {
        grid.innerHTML = '<p style="text-align:center; padding: 1rem;">Unable to load products.</p>';
      });
  }

  // Add to cart wiring
  grid.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.add-to-cart')) {
      const id = target.getAttribute('data-id');
      const product = (window.__PRODUCTS__ || []).find(p => p.id === id);
      if (product) {
        window.Cart.addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
        alert(`${product.name} added to cart!`);
      }
    }
  });

  function wireFilters(source) {
    window.__PRODUCTS__ = source;
    const targetCategory = document.body.getAttribute('data-category-target');
    if (targetCategory && targetCategory !== 'all') {
      render(source.filter(p => p.category === targetCategory));
      const btn = document.querySelector(`.category-btn[data-category="${targetCategory}"]`);
      if (btn) {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      return;
    }
    // Default: render already done; no-op
  }
}

window.ProductsPage = { bootstrapProductsPage };


