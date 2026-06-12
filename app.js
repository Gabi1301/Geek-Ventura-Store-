// MÓDULO DE GERENCIAMENTO DE ESTADO - GEEK VENTURA STORE
class EcommerceApp {
  constructor() {
    this.products = productsData;
    this.cart = this.loadCartFromStorage();
    this.currentCategory = "";
    this.searchQuery = "";
    
    this.initElements();
    this.initEvents();
    this.render();
  }

  initElements() {
    this.productsGrid = document.getElementById("productsGrid");
    this.offersGrid = document.getElementById("offersGrid");
    this.searchInput = document.getElementById("searchInput");
    this.vitrineTitle = document.getElementById("vitrineTitle");
    this.resultsCounter = document.getElementById("resultsCounter");
    this.cartCounter = document.getElementById("cartCounter");
    this.cartItemsContainer = document.getElementById("cartItemsContainer");
    this.cartSubtotal = document.getElementById("cartSubtotal");
    this.cartTotal = document.getElementById("cartTotal");
    
    // Modal de Detalhes
    this.bsModal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
  }

  initEvents() {
    // Escuta pesquisa em tempo real
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.renderProducts();
    });
  }

  loadCartFromStorage() {
    const saved = localStorage.getItem("geek_ventura_cart");
    return saved ? JSON.parse(saved) : [];
  }

  saveCartToStorage() {
    localStorage.setItem("geek_ventura_cart", JSON.stringify(this.cart));
    this.updateCartUI();
  }

  // FILTRAGEM E RENDERIZAÇÃO
  filterCategory(category) {
    this.currentCategory = category;
    this.vitrineTitle.innerText = category ? `Categoria: ${category}` : "Todos os Produtos";
    this.renderProducts();
  }

  showOffersOnly() {
    this.currentCategory = "PROMOCOES_GERAL";
    this.vitrineTitle.innerText = "🔥 Ofertas Especiais";
    this.renderProducts();
    document.getElementById("vitrine-produtos").scrollIntoView();
  }

  resetLayout() {
    this.currentCategory = "";
    this.searchQuery = "";
    this.searchInput.value = "";
    this.vitrineTitle.innerText = "Todos os Produtos";
    this.renderProducts();
  }

  getFilteredProducts() {
    return this.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(this.searchQuery) || p.category.toLowerCase().includes(this.searchQuery);
      
      if (this.currentCategory === "PROMOCOES_GERAL") {
        return matchSearch && p.lowStock;
      }
      if (this.currentCategory) {
        return matchSearch && p.category === this.currentCategory;
      }
      return matchSearch;
    });
  }

  render() {
    this.renderProducts();
    this.renderOffersWeekly();
    this.updateCartUI();
  }

  createProductCardHtml(product) {
    const discountPercent = Math.round(((product.priceOriginal - product.pricePromotional) / product.priceOriginal) * 100);
    
    return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 section-fade-in">
        <div class="product-card">
          <!-- Selos Visuais Incorporados -->
          <div class="badge-container">
            ${product.lowStock ? '<span class="badge-custom badge-promo"><i class="fas fa-fire me-1"></i>Últimas Unidades</span>' : ''}
            <span class="badge-custom badge-stock">${discountPercent}% OFF</span>
          </div>
          
          <!-- Imagem do Produto -->
          <div class="product-image-container">
            <img
              src="${product.imagePlaceholder}"
              alt="${product.name}"
              class="product-img"
              onerror="this.onerror=null; this.src='./img/placeholder.png';"
            >
          </div>

          <!-- Corpo de Informações -->
          <div class="card-body-custom">
            <span class="p-category">${product.category}</span>
            <h4 class="p-name">${product.name}</h4>
            
            <div class="price-box">
              <div class="old-price">De: R$ ${product.priceOriginal.toFixed(2).replace('.',',')}</div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="promo-price">Por: R$ ${product.pricePromotional.toFixed(2).replace('.',',')}</span>
              </div>
            </div>

            <div class="stock-counter">
              <i class="fas fa-layer-group me-1 text-muted"></i> Estoque: <strong class="${product.stock <= 8 ? 'text-danger':'text-dark'}">${product.stock} unidades</strong>
            </div>

            <!-- Botões de Ação Regulamentares -->
            <div class="d-grid gap-2 mt-auto">
              <button class="btn btn-primary-custom text-uppercase fw-bold btn-sm" onclick="app.addToCart('${product.code}')">
                Comprar <i class="fas fa-shopping-basket ms-1"></i>
              </button>
              <button class="btn btn-details text-uppercase fw-bold btn-sm" onclick="app.openDetails('${product.code}')">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderProducts() {
    const filtered = this.getFilteredProducts();
    this.resultsCounter.innerText = `Mostrando ${filtered.length} produtos`;
    
    if (filtered.length === 0) {
      this.productsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fas fa-search-minus fa-3x text-muted mb-3"></i>
          <h4>Nenhum produto correspondente encontrado.</h4>
          <p class="text-muted">Tente mudar os termos da busca ou selecione outra categoria.</p>
        </div>`;
      return;
    }

    this.productsGrid.innerHTML = filtered.map(p => this.createProductCardHtml(p)).join("");
  }

  renderOffersWeekly() {
    // Filtra produtos com estoque baixo para a Seção Destacada
    const weeklyOffers = this.products.filter(p => p.lowStock).slice(0, 4);
    this.offersGrid.innerHTML = weeklyOffers.map(p => this.createProductCardHtml(p)).join("");
  }

  // LÓGICA DO DETALHES MODAL
  openDetails(code) {
    const product = this.products.find(p => p.code === code);
    if (!product) return;

    document.getElementById("modalProductName").innerText = `CÓDIGO: ${product.code}`;
    document.getElementById("modalProductCategory").innerText = product.category;
    document.getElementById("modalProductCode").innerText = `Cód: ${product.code}`;
    document.getElementById("modalRealName").innerText = product.name;
    document.getElementById("modalPriceOriginal").innerText = `De: R$ ${product.priceOriginal.toFixed(2).replace('.', ',')}`;
    document.getElementById("modalPricePromotional").innerText = `Por: R$ ${product.pricePromotional.toFixed(2).replace('.', ',')}`;
    document.getElementById("modalProductDescription").innerText = product.description;
    document.getElementById("modalProductImage").src = product.imagePlaceholder;
    document.getElementById("modalProductImage").alt = product.name;

    const stockBadge = document.getElementById("modalProductStock");
    stockBadge.innerText = `${product.stock} unidades em estoque`;
    stockBadge.className = product.lowStock ? "badge bg-danger" : "badge bg-success";

    const buyBtn = document.getElementById("modalBuyBtn");
    buyBtn.onclick = () => {
      this.addToCart(product.code);
      this.bsModal.hide();
    };

    this.bsModal.show();
  }

  // GERENCIAMENTO INTERNO DO CARRINHO
  addToCart(code) {
    const product = this.products.find(p => p.code === code);
    if (!product) return;

    const cartItem = this.cart.find(item => item.code === code);
    if (cartItem) {
      if (cartItem.quantity >= product.stock) {
        alert(`Desculpe, o estoque máximo deste produto (${product.stock} un.) já foi atingido.`);
        return;
      }
      cartItem.quantity++;
    } else {
      this.cart.push({
        code: product.code,
        name: product.name,
        price: product.pricePromotional,
        imagePlaceholder: product.imagePlaceholder,
        quantity: 1,
        maxStock: product.stock
      });
    }

    this.saveCartToStorage();
    this.triggerToast(product.name);
  }

  removeItem(code) {
    this.cart = this.cart.filter(item => item.code !== code);
    this.saveCartToStorage();
  }

  updateQuantity(code, newQuantity) {
    const item = this.cart.find(item => item.code === code);
    if (!item) return;

    const qty = parseInt(newQuantity);
    if (isNaN(qty) || qty <= 0) {
      this.removeItem(code);
      return;
    }

    if (qty > item.maxStock) {
      alert(`Quantidade limitada ao estoque disponível: ${item.maxStock} unidades.`);
      item.quantity = item.maxStock;
    } else {
      item.quantity = qty;
    }
    
    this.saveCartToStorage();
  }

  updateCartUI() {
    // Atualiza Contador Superior
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCounter.innerText = totalItems;

    if (this.cart.length === 0) {
      this.cartItemsContainer.innerHTML = `
        <div class="text-center py-5 text-muted">
          <i class="fas fa-shopping-basket fa-2x mb-2"></i>
          <p class="mb-0">Seu carrinho está vazio.</p>
        </div>`;
      this.cartSubtotal.innerText = "R$ 0,00";
      this.cartTotal.innerText = "R$ 0,00";
      return;
    }

    // Renderiza Itens Internos
    let subtotal = 0;
    this.cartItemsContainer.innerHTML = this.cart.map(item => {
      const itemSum = item.price * item.quantity;
      subtotal += itemSum;
      return `
        <div class="cart-item d-flex align-items-center justify-content-between">
          <div class="cart-placeholder-mini d-flex flex-column align-items-center justify-content-center p-1 text-center text-muted text-break me-2">
            <span>IMG</span>
          </div>
          <div class="flex-grow-1 min-width-0 me-2">
            <h6 class="mb-0 text-truncate font-weight-bold" style="max-width: 150px;">${item.name}</h6>
            <small class="text-muted">R$ ${item.price.toFixed(2).replace('.',',')}</small>
          </div>
          <div class="d-flex align-items-center me-2">
            <input type="number" class="form-control form-control-sm qty-input" value="${item.quantity}" min="1" onchange="app.updateQuantity('${item.code}', this.value)">
          </div>
          <div>
            <span class="small fw-bold me-2">R$ ${itemSum.toFixed(2).replace('.',',')}</span>
            <button class="btn btn-sm btn-link text-danger p-0" onclick="app.removeItem('${item.code}')"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      `;
    }).join("");

    this.cartSubtotal.innerText = `R$ ${subtotal.toFixed(2).replace('.',',')}`;
    this.cartTotal.innerText = `R$ ${subtotal.toFixed(2).replace('.',',')}`;
  }

  triggerToast(productName) {
    // Alerta nativo rápido e amigável sem poluir a tela
    console.log(`[Geek Ventura] Adicionado ao carrinho: ${productName}`);
  }

  checkout() {
    if (this.cart.length === 0) return;
    alert("🚀 Pedido Simulado com Sucesso!\nObrigado por comprar na Geek Ventura Store.");
    this.cart = [];
    this.saveCartToStorage();
    bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas')).hide();
  }
}

// Inicialização Global da Instância do App
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new EcommerceApp();
});