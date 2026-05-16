/* =============================================
   TARUN KIRANA STORE - script.js
   ============================================= */


/* =============================================
   ⚙️  SETTINGS — SIRF YAHAN APNA DATA DAALEN
   ============================================= */

// 👇 APNA WHATSAPP NUMBER YAHAN DAALEN (country code ke saath, koi + ya space nahi)
// Example: India ka number 7860142874 hai to likhein "917860142874"
const WHATSAPP_NUMBER = "917860142874";   // ← CHANGE THIS

// 👇 SHOP KA PHONE NUMBER (footer mein dikhega)
const SHOP_PHONE = "+91 78601 42874";     // ← CHANGE THIS

// 👇 LOGO IMAGE PATH (agar apna logo add karna ho)
// Example: "images/logo.png"  — images folder mein rakho
const LOGO_PATH = "images/logo.png";  // ← APNA LOGO PATH YAHAN DAALEN (khali rehne do agar nahi chahiye)


/* =============================================
   PRODUCT DATA
   Har product mein:
     id       — unique number
     name     — product ka naam
     unit     — unit (1 kg, 500g, etc.)
     price    — selling price (₹)
     mrp      — original price (₹) — discount calculate hoga
     category — category id (neeche categories mein hona chahiye)
     emoji    — jab tak image nahi hai, ye dikhega
     tag      — "Best Seller" / "Fresh Stock" / "" (khali)
     img      — IMAGE PATH — "images/atta.jpg" ya URL
                 KHALI REHNE DO agar abhi image nahi add karni
   ============================================= */
const products = [

  /* ---- Atta & Dal ---- */
  { id:1,  name:"Aashirvaad Atta",    unit:"5 kg",    price:220, mrp:250, category:"atta-dal",    emoji:"🌾", tag:"Best Seller", img:"" },
  { id:2,  name:"Chakki Fresh Atta",  unit:"10 kg",   price:410, mrp:450, category:"atta-dal",    emoji:"🌾", tag:"",            img:"" },
  { id:3,  name:"Toor Dal",           unit:"1 kg",    price:135, mrp:150, category:"atta-dal",    emoji:"🟡", tag:"Fresh Stock",  img:"" },
  { id:4,  name:"Moong Dal",          unit:"500 g",   price:68,  mrp:75,  category:"atta-dal",    emoji:"🟢", tag:"",            img:"" },
  { id:5,  name:"Chana Dal",          unit:"1 kg",    price:95,  mrp:110, category:"atta-dal",    emoji:"🟤", tag:"",            img:"" },
  { id:6,  name:"Masoor Dal",         unit:"1 kg",    price:90,  mrp:105, category:"atta-dal",    emoji:"🔴", tag:"",            img:"" },

  /* ---- Chawal ---- */
  { id:7,  name:"India Gate Basmati", unit:"5 kg",    price:480, mrp:530, category:"chawal",      emoji:"🍚", tag:"Premium",     img:"" },
  { id:8,  name:"Sona Masoori Rice",  unit:"5 kg",    price:320, mrp:360, category:"chawal",      emoji:"🍚", tag:"",            img:"" },
  { id:9,  name:"PR-11 Rice (Sela)",  unit:"10 kg",   price:420, mrp:460, category:"chawal",      emoji:"🍚", tag:"",            img:"" },

  /* ---- Tel & Ghee ---- */
  { id:10, name:"Patanjali Ghee",     unit:"1 Liter", price:520, mrp:580, category:"tel-ghee",    emoji:"🫙", tag:"Popular",     img:"" },
  { id:11, name:"Fortune Soyabean Oil",unit:"1 Liter",price:128, mrp:145, category:"tel-ghee",    emoji:"🛢️", tag:"",            img:"" },
  { id:12, name:"Amul Butter",        unit:"500 g",   price:260, mrp:280, category:"tel-ghee",    emoji:"🧈", tag:"",            img:"" },

  /* ---- Masale ---- */
  { id:13, name:"Everest Garam Masala",unit:"50 g",   price:48,  mrp:55,  category:"masale",      emoji:"🌶️", tag:"",            img:"" },
  { id:14, name:"MDH Haldi Powder",   unit:"200 g",   price:62,  mrp:72,  category:"masale",      emoji:"🟡", tag:"",            img:"" },
  { id:15, name:"Catch Mirch Powder", unit:"200 g",   price:55,  mrp:65,  category:"masale",      emoji:"🌶️", tag:"",            img:"" },
  { id:16, name:"Rajma (Chitra)",     unit:"1 kg",    price:115, mrp:130, category:"masale",      emoji:"🫘", tag:"",            img:"" },

  /* ---- Dairy ---- */
  { id:17, name:"Amul Doodh (Full Cream)",unit:"1 L", price:66,  mrp:70,  category:"dairy",       emoji:"🥛", tag:"Daily Need",  img:"" },
  { id:18, name:"Amul Paneer",        unit:"200 g",   price:88,  mrp:95,  category:"dairy",       emoji:"🧀", tag:"Fresh",       img:"" },
  { id:19, name:"Mother Dairy Curd",  unit:"400 g",   price:42,  mrp:48,  category:"dairy",       emoji:"🥣", tag:"",            img:"" },

  /* ---- Snacks ---- */
  { id:20, name:"Haldiram Aloo Bhujia",unit:"400 g",  price:88,  mrp:100, category:"snacks",      emoji:"🍿", tag:"Tasty",       img:"" },
  { id:21, name:"Lays Chips (Mixed)", unit:"Pack of 6",price:120,mrp:138, category:"snacks",      emoji:"🍟", tag:"",            img:"" },
  { id:22, name:"Parle-G Biscuit",    unit:"800 g",   price:55,  mrp:60,  category:"snacks",      emoji:"🍪", tag:"",            img:"" },

  /* ---- Sabun & Care ---- */
  { id:23, name:"Surf Excel Detergent",unit:"2 kg",   price:245, mrp:275, category:"sabun",       emoji:"🧺", tag:"",            img:"" },
  { id:24, name:"Dettol Soap",        unit:"Pack of 4",price:145,mrp:168, category:"sabun",       emoji:"🧼", tag:"",            img:"" },
  { id:25, name:"Colgate Toothpaste", unit:"300 g",   price:92,  mrp:110, category:"sabun",       emoji:"🪥", tag:"",            img:"" },

  /* ---- Sugar & Namak ---- */
  { id:26, name:"Sugar (Cheeni)",     unit:"1 kg",    price:46,  mrp:52,  category:"sugar-namak", emoji:"🍬", tag:"",            img:"" },
  { id:27, name:"Tata Salt",          unit:"1 kg",    price:22,  mrp:26,  category:"sugar-namak", emoji:"🧂", tag:"",            img:"" },
  { id:28, name:"Tea (Brooke Bond)",  unit:"250 g",   price:92,  mrp:105, category:"sugar-namak", emoji:"🍵", tag:"",            img:"" },

];

/* =============================================
   CATEGORY LIST
   (Naam aur ID — products ke saath match karein)
   ============================================= */
const categories = [
  { id:"atta-dal",    name:"🌾 Atta & Dal"   },
  { id:"chawal",      name:"🍚 Chawal"        },
  { id:"tel-ghee",    name:"🫙 Tel & Ghee"   },
  { id:"masale",      name:"🌶️ Masale"       },
  { id:"dairy",       name:"🥛 Dairy"         },
  { id:"snacks",      name:"🍿 Snacks"        },
  { id:"sabun",       name:"🧼 Sabun & Care"  },
  { id:"sugar-namak", name:"🧂 Sugar & Namak" },
];


/* =============================================
   CART STATE
   ============================================= */
let cart = {};   // { productId: quantity }


/* =============================================
   RENDER — CATEGORY NAV
   ============================================= */
function renderCategories() {
  const nav = document.getElementById("categoryNav");
  nav.innerHTML =
    `<a href="#" class="active" onclick="filterCat(event,'all')">🏠 All Products</a>` +
    categories.map(c =>
      `<a href="#cat-${c.id}" onclick="filterCat(event,'${c.id}')">${c.name}</a>`
    ).join("");
}

function filterCat(e, catId) {
  e.preventDefault();
  document.querySelectorAll(".category-nav a").forEach(a => a.classList.remove("active"));
  e.target.classList.add("active");
  if (catId === "all") {
    document.querySelectorAll(".cat-section").forEach(s => s.style.display = "block");
  } else {
    document.querySelectorAll(".cat-section").forEach(s => {
      s.style.display = s.dataset.cat === catId ? "block" : "none";
    });
  }
  document.getElementById("noResults").classList.remove("show");
}


/* =============================================
   RENDER — ALL PRODUCTS
   ============================================= */
function renderProducts() {
  const main = document.getElementById("mainContent");
  main.innerHTML = "";

  categories.forEach(cat => {
    const prods = products.filter(p => p.category === cat.id);
    if (!prods.length) return;

    const section = document.createElement("section");
    section.className  = "cat-section";
    section.dataset.cat = cat.id;
    section.id         = `cat-${cat.id}`;

    section.innerHTML = `
      <div class="section-title">
        <span class="cat-emoji">${cat.name.split(" ")[0]}</span>
        <h3>${cat.name.replace(/^\S+\s/, "")}</h3>
        <div class="section-line"></div>
      </div>
      <div class="products-grid" id="grid-${cat.id}">
        ${prods.map(p => buildCard(p)).join("")}
      </div>`;

    main.appendChild(section);
  });
}

function buildCard(p) {
  const hasImg   = p.img && p.img.trim() !== "";
  const discount = p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;

  const imgTag = hasImg
    ? `<img src="${p.img}" alt="${p.name}"
            onload="this.style.opacity=1"
            onerror="this.style.display='none';
                     document.getElementById('ph-${p.id}').style.display='flex'"
            style="opacity:0;transition:opacity 0.3s"/>`
    : "";

  const placeholderStyle = hasImg ? "display:none" : "display:flex";

  return `
  <div class="product-card" id="card-${p.id}"
       data-name="${p.name.toLowerCase()}" data-cat="${p.category}">

    <div class="product-img-wrap">
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
      ${imgTag}
      <div class="product-img-placeholder" id="ph-${p.id}"
           style="${placeholderStyle};align-items:center;justify-content:center;
                  width:100%;height:100%">${p.emoji}</div>
    </div>

    <div class="product-body">
      <div class="product-name">${p.name}</div>
      <div class="product-unit">${p.unit}</div>

      <div class="product-footer">
        <div class="product-price">
          ₹${p.price}
          ${p.mrp > p.price ? `<span class="mrp">₹${p.mrp}</span>` : ""}
          ${discount > 0   ? `<span class="discount-badge">${discount}% off</span>` : ""}
        </div>

        <div style="display:flex;align-items:center;gap:6px">
          <button class="add-btn" id="addbtn-${p.id}" onclick="addToCart(${p.id})">+ Add</button>
          <div class="qty-control" id="qty-${p.id}">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <span class="qty-num" id="qnum-${p.id}">1</span>
            <button class="qty-btn" onclick="changeQty(${p.id},+1)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}


/* =============================================
   CART LOGIC
   ============================================= */
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  document.getElementById(`addbtn-${id}`).style.display = "none";
  document.getElementById(`qty-${id}`).classList.add("show");
  document.getElementById(`qnum-${id}`).textContent = cart[id];
  updateCartUI();
  showToast("Cart mein add ho gaya! ✅");
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) {
    delete cart[id];
    document.getElementById(`addbtn-${id}`).style.display = "";
    document.getElementById(`qty-${id}`).classList.remove("show");
  } else {
    if (document.getElementById(`qnum-${id}`))
      document.getElementById(`qnum-${id}`).textContent = cart[id];
  }
  updateCartUI();
  renderCartItems();   // refresh sidebar too
}

function updateCartUI() {
  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find(x => x.id == id);
    return sum + (p ? p.price * qty : 0);
  }, 0);

  const count = Object.values(cart).reduce((s, q) => s + q, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = total;
}

function renderCartItems() {
  const el      = document.getElementById("cartItems");
  const entries = Object.entries(cart);

  if (!entries.length) {
    el.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Cart khali hai</p>
        <p style="font-size:0.82rem">Products add karein!</p>
      </div>`;
    return;
  }

  el.innerHTML = entries.map(([id, qty]) => {
    const p = products.find(x => x.id == id);
    if (!p) return "";
    const imgEl = p.img
      ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'"/>`
      : `<span>${p.emoji}</span>`;
    return `
    <div class="cart-item">
      <div class="cart-item-img">${imgEl}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">₹${p.price} × ${qty} = ₹${p.price * qty}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        <button class="qty-btn" onclick="changeQty(${id},-1)">−</button>
        <span class="qty-num">${qty}</span>
        <button class="qty-btn" onclick="changeQty(${id},+1)">+</button>
      </div>
    </div>`;
  }).join("");
}

function openCart()  {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  renderCartItems();
}
function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}


/* =============================================
   WHATSAPP ORDER
   ============================================= */
function sendWhatsAppOrder() {
  const name    = document.getElementById("custName").value.trim();
  const phone   = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const note    = document.getElementById("custNote").value.trim();

  // Validation
  if (!name)               { showToast("⚠️ Apna naam daalen!"); return; }
  if (phone.length < 10)   { showToast("⚠️ Sahi mobile number daalen!"); return; }
  if (!Object.keys(cart).length) { showToast("⚠️ Cart mein kuch add karein pehle!"); return; }

  // Build message
  let msg = `🛒 *NAMASKAR! Tarun Kirana Store - Naya Order* 🌿\n\n`;
  msg += `*👤 Customer Details:*\n`;
  msg += `• Naam: ${name}\n`;
  msg += `• Phone: ${phone}\n`;
  if (address) msg += `• Address: ${address}\n`;

  msg += `\n*📦 Order Items:*\n`;
  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const p = products.find(x => x.id == id);
    if (p) {
      msg  += `• ${p.emoji} ${p.name} (${p.unit}) × ${qty} = ₹${p.price * qty}\n`;
      total += p.price * qty;
    }
  });

  msg += `\n💰 *Kul Rakam: ₹${total}*\n`;
  if (note) msg += `\n📝 Note: ${note}\n`;
  msg += `\n_Order Tarun Kirana Store website se kiya gaya_ ✅`;

  // Open WhatsApp
  const url = `https://wa.me/917860142874?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}


/* =============================================
   SEARCH
   ============================================= */
function setupSearch() {
  const inp      = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");

  inp.addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();

    if (!q) {
      dropdown.classList.remove("active");
      showAllCards();
      return;
    }

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.includes(q)
    );

    // Dropdown suggestions
    dropdown.innerHTML = matches.slice(0, 8).map(p => `
      <div class="search-result-item" onclick="scrollToProduct(${p.id})">
        <div class="sr-icon">${p.emoji}</div>
        <div>
          <div class="sr-name">${p.name}</div>
          <div class="sr-price">₹${p.price} / ${p.unit}</div>
        </div>
      </div>`).join("");

    dropdown.classList.toggle("active", matches.length > 0);

    filterBySearch(q);
  });

  inp.addEventListener("blur",    () => setTimeout(() => dropdown.classList.remove("active"), 200));
  inp.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      inp.value = "";
      dropdown.classList.remove("active");
      showAllCards();
    }
  });
}

function filterBySearch(q) {
  let anyVisible = false;
  products.forEach(p => {
    const card  = document.getElementById(`card-${p.id}`);
    if (!card) return;
    const match = p.name.toLowerCase().includes(q);
    card.classList.toggle("hidden", !match);
    if (match) anyVisible = true;
  });
  document.querySelectorAll(".cat-section").forEach(sec => {
    const visible = sec.querySelectorAll(".product-card:not(.hidden)").length;
    sec.style.display = visible ? "block" : "none";
  });
  document.getElementById("noResults").classList.toggle("show", !anyVisible);
}

function showAllCards() {
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("hidden"));
  document.querySelectorAll(".cat-section").forEach(s  => s.style.display = "block");
  document.getElementById("noResults").classList.remove("show");
}

function scrollToProduct(id) {
  document.getElementById("searchDropdown").classList.remove("active");
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.outline = "3px solid var(--green)";
    setTimeout(() => card.style.outline = "", 2200);
  }
}


/* =============================================
   LOGO
   ============================================= */
function initLogo() {
  if (!LOGO_PATH) return;   // koi logo set nahi hai
  const img = document.getElementById("logoImgEl");
  img.src = LOGO_PATH;
  img.onload = () => {
    img.classList.add("loaded");
    document.getElementById("logoFallback").style.display = "none";
  };
}


/* =============================================
   WHATSAPP LINKS SET KARO
   ============================================= */
function initWhatsAppLinks() {
 const baseUrl = `https://wa.me/917860142874`;
  const greeting = encodeURIComponent("Namaste! Tarun Kirana Store se baat karna chahta/chahti hoon.");

  document.getElementById("floatWA").href  = `${baseUrl}?text=${greeting}`;
  document.getElementById("footerWA").href = `${baseUrl}?text=${greeting}`;
  document.getElementById("footerPhone").textContent = SHOP_PHONE;
}


/* =============================================
   TOAST NOTIFICATION
   ============================================= */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}


/* =============================================
   SCROLL TO TOP
   ============================================= */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  document.getElementById("scrollTopBtn")
    .classList.toggle("visible", window.scrollY > 300);
});


/* =============================================
   INITIALISE EVERYTHING
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  initLogo();
  initWhatsAppLinks();
  renderCategories();
  renderProducts();
  setupSearch();
  updateCartUI();
});
