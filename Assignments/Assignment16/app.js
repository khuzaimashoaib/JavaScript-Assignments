function createProductCard(ad) {
  return `
     <div class="d_flex single_cat_art_main width_1280 flex_1 b2e0090c f_dir_column ad_card">
          <a onclick='saveProduct(${JSON.stringify(ad)})'>
            <img src="${ad.thumbnail}" alt="${ad.title}" />
            <div class="card-content">
              <div class="d_flex jc_space_between _371e9918 price">
                <span class="b7af14b4 a1c1940e">Price: $${ad.price}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="#002f34" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="heart_svg">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5
                    5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5
                    5.5 0 0 0 0-7.8z"/>
                </svg>
              </div>
              <p class="a1c1940e title_p">${ad.title}.</p>
              <div class="d_flex f_dir_column loc_date">
                <p class="location a1c1940e"><span class="rating">Brand: </span> ${
                  ad.brand || "Unknown"
                }</p>
                <p class="rating">Raiting: ${ad.rating || "N/A"}</p>
              </div>
            </div>
          </a>
        </div>
  `;
}

function createSingleProductCard(product) {
  return `
    <div class="product-image d_flex">
      <img
        src="${product.images[0]}"
        alt="${product.title}"
      />
    </div>
    <div class="product-content">
      <h1 class="product-title">${product.title}</h1>
      <p class="product-description">
        ${product.description || ""}
      </p>
      <div class="product-info">
        <span class="price">Price: $${product.price}</span>
      </div>

      <span class="sku">SKU: ${product.id}</span>
      <div class="product-meta">
        <span class="brand">Brand: ${product.brand || "Unknown"}</span>
        <span class="category">Category: ${product.category}</span>
        <span class="tags">Tags: ${product.tags || "N/A"}</span>
      </div>
      <div class="product-rating">Rating: ⭐${product.rating}</div>

      <div class="quantity-selector">
        <input type="number" value="1" min="1" />
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  <div class="product_card d_flex f_dir_column ">
        <div class="product_card_header">
          <div class="product_card_avatar d_flex">
            <div>
              <img
                src="https://www.olx.com.pk/assets/iconProfilePicture_noinline.6327fd8895807f09fafb0ad1e3d99b83.svg"
                alt=""
              />
            </div>
            <div class="product_card_user_info d_flex">
              <small>Posted by</small>
              <h4>Anonymous</h4>
            </div>
          </div>
          <div class="card_divider"></div>
          <div class="product_card_details d_flex">
            <div class="product_card_detail">
              📅 Member Since <span>2018</span>
            </div>
            <div class="product_card_detail">📰 Active Ads <span>1</span></div>
          </div>
        </div>

        <button class="product_card_btn">📞 Show phone number</button>
        <button class="product_card_chat_btn">💬 Chat</button>

        <div class="product_card_footer">
          <div>Ad ID: ${product.id}</div>
          <a href="#">Report this ad</a>
        </div>
      </div>
        `;
}

function saveProduct(ad) {
  localStorage.removeItem("selectedProduct"); // purana data remove
  localStorage.setItem("selectedProduct", JSON.stringify(ad));

  const pathName = window.location.pathname;

  window.location.href = pathName.includes("/pages/")
    ? "single-card.html"
    : "pages/single-card.html";
}

async function fetchAllProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=200");
    const data = await res.json();
    // console.log("All products fetched:", data.products.length);
    return data.products;
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    return [];
  }
}

function renderProductsByCategory(products, category, containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = products.filter((p) => p.category === category);
  if (filtered.length === 0) {
    container.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  const toRender = limit ? filtered.slice(0, limit) : filtered; // limit laga do agar home page ho
  container.innerHTML = toRender.map(createProductCard).join("");
}

async function initProducts() {
  const allProducts = await fetchAllProducts();

  // --- Home page sections ---
  renderProductsByCategory(allProducts, "smartphones", "mobiles-container", 4);
  renderProductsByCategory(allProducts, "vehicle", "cars-container", 4);
  renderProductsByCategory(allProducts, "beauty", "beauty-container", 4);
  renderProductsByCategory(allProducts, "furniture", "furniture-container", 4);

  // --- Category page (View More) ---
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (category) {
    console.log("Category from URL:", category);
    document.getElementById("category-title").textContent =
      category.charAt(0).toUpperCase() + category.slice(1);
    renderProductsByCategory(allProducts, category, "category-page-container");
  }
}

initProducts();

function renderSingleProduct() {
  const productData = localStorage.getItem("selectedProduct");
  const container = document.getElementById("single-card-container");

  if (!productData) {
    document.getElementById("single-card-container").innerHTML =
      "<p>No product selected.</p>";
    return;
  }

  const product = JSON.parse(productData);

  container.innerHTML = createSingleProductCard(product);
}

window.addEventListener("pageshow", renderSingleProduct);
