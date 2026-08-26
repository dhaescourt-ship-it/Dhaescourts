/* ============================================================
   SHARED SETTINGS + RENDER HELPERS — used by store.html and
   product.html. Change the number once here, it updates
   everywhere (header, buttons, floating icons, book now).
   ============================================================ */

const WHATSAPP_NUMBER = "923292158393"; // <-- update with real number
const CALL_NUMBER     = "923292158393"; // <-- update with real number

function waLink(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function bookNowLink(p){
  return waLink(`Hi, I'm interested in ${p.name} (${p.code}). Please share more details.`);
}

/* Shows the real photo from /images/ if it exists.
   If the file is missing, it falls back to a placeholder
   box automatically — so nothing breaks before you add photos. */
function productThumbHTML(p){
  const img = p.images[0];
  return `<div class="product-thumb">
    <img src="images/${img}" alt="${p.name}"
      onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'thumb-fallback',textContent:'${p.images.length} PHOTOS'}));">
  </div>`;
}

function productCardHTML(p){
  return `
  <div class="product-card">
    <a class="product-link" href="product.html?id=${p.id}">
      ${productThumbHTML(p)}
      <div class="product-info">
        <div class="product-code">${p.code}</div>
        <h3>${p.name}</h3>
        <div class="product-price">${p.price}</div>
      </div>
    </a>
    <a class="book-btn" href="${bookNowLink(p)}" target="_blank" rel="noopener">Book Now</a>
  </div>`;
}

function renderCategoryGrid(containerId, categoryNum, excludeId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const items = PRODUCTS.filter(p => p.category === categoryNum && p.id !== excludeId);
  el.innerHTML = items.map(productCardHTML).join("");
}

function renderMoreProducts(containerId, excludeId, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  const current = PRODUCTS.find(p => p.id === excludeId);
  let pool = PRODUCTS.filter(p => p.id !== excludeId);
  pool.sort((a,b) => {
    const aSame = current && a.category === current.category ? 0 : 1;
    const bSame = current && b.category === current.category ? 0 : 1;
    return aSame - bSame;
  });
  el.innerHTML = pool.slice(0, limit).map(productCardHTML).join("");
}
