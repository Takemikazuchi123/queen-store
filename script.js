/* ============================================================
   QUEEN STORE — script.js (Pink Cute Theme)
   ============================================================ */

/* ----------------------------------------------------------------
   ⚙️ KONFIGURASI — Ganti nomor WhatsApp kamu di sini!
   Format: 628xxxxxxxxxx (tanpa +, spasi, atau tanda kurung)
   ---------------------------------------------------------------- */
const WHATSAPP_NUMBER = '628992335539'; // <-- GANTI DENGAN NOMOR WA KAMU

/* ----------------------------------------------------------------
   DATA HARGA
   ---------------------------------------------------------------- */
const PRICE_DATA = {
  login: [
    { robux: 80,   price: 15000,  label: '80 Robux — Rp 15.000' },
    { robux: 160,  price: 29500,  label: '160 Robux — Rp 29.500' },
    { robux: 240,  price: 44000,  label: '240 Robux — Rp 44.000' },
    { robux: 320,  price: 58500,  label: '320 Robux — Rp 58.500' },
    { robux: 400,  price: 68000,  label: '400 Robux — Rp 68.000' },
    { robux: 500,  price: 69000,  label: '500 Robux — Rp 69.000' },
    { robux: 800,  price: 135500, label: '800 Robux — Rp 135.500' },
    { robux: 1000, price: 137000, label: '1.000 Robux — Rp 137.000' },
    { robux: 1700, price: 270500, label: '1.700 Robux — Rp 270.500' },
    { robux: 2000, price: 273000, label: '2.000 Robux — Rp 273.000' },
    { robux: 3000, price: 409000, label: '3.000 Robux — Rp 409.000' },
    { robux: 3400, price: 540500, label: '3.400 Robux — Rp 540.500' },
    { robux: 4000, price: 545000, label: '4.000 Robux — Rp 545.000' },
    { robux: 5000, price: 681000, label: '5.000 Robux — Rp 681.000' },
  ],
  gamepass: [
    { robux: 100,  price: 14000,  label: '100 Robux — Rp 14.000' },
    { robux: 200,  price: 27000,  label: '200 Robux — Rp 27.000' },
    { robux: 300,  price: 40000,  label: '300 Robux — Rp 40.000' },
    { robux: 400,  price: 53000,  label: '400 Robux — Rp 53.000' },
    { robux: 500,  price: 66000,  label: '500 Robux — Rp 66.000' },
    { robux: 600,  price: 79000,  label: '600 Robux — Rp 79.000' },
    { robux: 700,  price: 92000,  label: '700 Robux — Rp 92.000' },
    { robux: 800,  price: 105000, label: '800 Robux — Rp 105.000' },
    { robux: 900,  price: 118000, label: '900 Robux — Rp 118.000' },
    { robux: 1000, price: 131000, label: '1.000 Robux — Rp 131.000' },
  ],
  gift: [
    { robux: 100, price: 21000, label: '100 Robux — Rp 21.000' },
    { robux: 200, price: 36000, label: '200 Robux — Rp 36.000' },
    { robux: 300, price: 51000, label: '300 Robux — Rp 51.000' },
    { robux: 400, price: 64000, label: '400 Robux — Rp 64.000' },
    { robux: 500, price: 79000, label: '500 Robux — Rp 79.000' },
  ],
  mlbb: [
    { robux: 5, price: 2000, label: '5 Diamonds — Rp 2.000' },
    { robux: 12, price: 4000, label: '12 Diamonds — Rp 4.000' },
    { robux: 19, price: 6000, label: '19 Diamonds — Rp 6.000' },
    { robux: 28, price: 8500, label: '28 Diamonds — Rp 8.500' },
    { robux: 44, price: 12500, label: '44 Diamonds — Rp 12.500' },
    { robux: 59, price: 16000, label: '59 Diamonds — Rp 16.000' },
    { robux: 85, price: 23500, label: '85 Diamonds — Rp 23.500' },
    { robux: 170, price: 45500, label: '170 Diamonds — Rp 45.500' },
    { robux: 240, price: 64500, label: '240 Diamonds — Rp 64.500' },
    { robux: 257, price: 69000, label: '257 Diamonds — Rp 69.000' },
    { robux: 284, price: 75500, label: '284 Diamonds — Rp 75.500' },
    { robux: 296, price: 78500, label: '296 Diamonds — Rp 78.500' },
    { robux: 355, price: 94500, label: '355 Diamonds — Rp 94.500' },
    { robux: 408, price: 108500, label: '408 Diamonds — Rp 108.500' },
    { robux: 568, price: 146500, label: '568 Diamonds — Rp 146.500' },
    { robux: 716, price: 187500, label: '716 Diamonds — Rp 187.500' },
    { robux: 875, price: 224500, label: '875 Diamonds — Rp 224.500' },
    { robux: 963, price: 248000, label: '963 Diamonds — Rp 248.000' },
    { robux: 1050, price: 271000, label: '1.050 Diamonds — Rp 271.000' },
    { robux: 1220, price: 316000, label: '1.220 Diamonds — Rp 316.000' },
    { robux: 'Twilight Pass', price: 152000, label: 'Twilight Pass — Rp 152.000' },
    { robux: 'Weekly Diamond Pass', price: 29000, label: 'Weekly Diamond Pass — Rp 29.000' },
  ],
  pubg_id: [
    { robux: 60, price: 16000, label: '60 UC — Rp 16.000' },
    { robux: 120, price: 31000, label: '120 UC — Rp 31.000' },
    { robux: 180, price: 46000, label: '180 UC — Rp 46.000' },
    { robux: 240, price: 62000, label: '240 UC — Rp 62.000' },
    { robux: 325, price: 76000, label: '325 UC — Rp 76.000' },
    { robux: 445, price: 107000, label: '445 UC — Rp 107.000' },
    { robux: 565, price: 137000, label: '565 UC — Rp 137.000' },
    { robux: 660, price: 151000, label: '660 UC — Rp 151.000' },
    { robux: 840, price: 197000, label: '840 UC — Rp 197.000' },
    { robux: 985, price: 226000, label: '985 UC — Rp 226.000' },
    { robux: 1320, price: 302000, label: '1.320 UC — Rp 302.000' },
    { robux: 1800, price: 376000, label: '1.800 UC — Rp 376.000' },
    { robux: 2125, price: 452000, label: '2.125 UC — Rp 452.000' },
    { robux: 2460, price: 527000, label: '2.460 UC — Rp 527.000' },
    { robux: 3120, price: 677000, label: '3.120 UC — Rp 677.000' },
  ],
};

/* ----------------------------------------------------------------
   FORMAT RUPIAH
   ---------------------------------------------------------------- */
function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

/* ----------------------------------------------------------------
   NAVBAR SCROLL
   ---------------------------------------------------------------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ----------------------------------------------------------------
   MOBILE MENU
   ---------------------------------------------------------------- */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', !isHidden);
  mobileMenu.style.display = isHidden ? 'flex' : '';
  menuBtn.textContent = isHidden ? '✕' : '☰';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.style.display = '';
    menuBtn.textContent = '☰';
  });
});

/* ----------------------------------------------------------------
   PRICELIST TABS (DROPDOWN)
   ---------------------------------------------------------------- */
const robloxTabBtn    = document.getElementById('roblox-tab-btn');
const mlbbTabBtn      = document.getElementById('mlbb-tab-btn');
const pubgTabBtn      = document.getElementById('pubg-tab-btn');
const robloxDropdown  = document.getElementById('roblox-dropdown');
const robloxTabText   = document.getElementById('roblox-tab-text');
const robloxTabArrow  = document.getElementById('roblox-tab-arrow');
const tabContents = document.querySelectorAll('.tab-content');

let currentRobloxTab = 'login';

function showTabContent(tabId) {
  tabContents.forEach(c => {
    c.classList.toggle('hidden', c.id !== `tab-${tabId}`);
  });
}

if (robloxTabBtn) {
  robloxTabBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Tutup custom dropdown form (jika ada yang sedang terbuka)
    document.querySelectorAll('.custom-options').forEach(el => {
      if (el !== robloxDropdown) el.classList.add('hidden');
    });

    const isHidden = robloxDropdown.classList.contains('hidden');
    robloxDropdown.classList.toggle('hidden', !isHidden);
    if (robloxTabArrow) robloxTabArrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    
    if (mlbbTabBtn) mlbbTabBtn.classList.remove('active');
    if (pubgTabBtn) pubgTabBtn.classList.remove('active');
    robloxTabBtn.classList.add('active');
    showTabContent(currentRobloxTab);
  });
}

if (robloxDropdown) {
  robloxDropdown.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    
    currentRobloxTab = li.dataset.tab;
    
    const shortLabel = li.textContent.replace(/[🔐🎮🎁💎]/g, '').trim();
    robloxTabText.textContent = `🎮 Roblox (${shortLabel})`;
    
    showTabContent(currentRobloxTab);
    
    robloxDropdown.classList.add('hidden');
    if (robloxTabArrow) robloxTabArrow.style.transform = 'rotate(0deg)';
  });
}

if (mlbbTabBtn) {
  mlbbTabBtn.addEventListener('click', () => {
    robloxTabBtn.classList.remove('active');
    if (pubgTabBtn) pubgTabBtn.classList.remove('active');
    mlbbTabBtn.classList.add('active');
    robloxDropdown.classList.add('hidden');
    if (robloxTabArrow) robloxTabArrow.style.transform = 'rotate(0deg)';
    showTabContent('mlbb');
  });
}

if (pubgTabBtn) {
  pubgTabBtn.addEventListener('click', () => {
    robloxTabBtn.classList.remove('active');
    if (mlbbTabBtn) mlbbTabBtn.classList.remove('active');
    pubgTabBtn.classList.add('active');
    robloxDropdown.classList.add('hidden');
    if (robloxTabArrow) robloxTabArrow.style.transform = 'rotate(0deg)';
    showTabContent('pubg_id');
  });
}

// Tutup dropdown bila mengeklik di luar area tab
document.addEventListener('click', (e) => {
  if (robloxTabBtn && !robloxTabBtn.contains(e.target) && robloxDropdown && !robloxDropdown.contains(e.target)) {
    robloxDropdown.classList.add('hidden');
    if (robloxTabArrow) robloxTabArrow.style.transform = 'rotate(0deg)';
  }
});

/* ----------------------------------------------------------------
   HELPER SINKRONISASI CUSTOM DROPDOWN UI
   ---------------------------------------------------------------- */
function syncCustomDropdownUI(selectId, value) {
  const selectEl = document.getElementById(selectId);
  if (selectEl) selectEl.value = value;
  const textEl = document.getElementById(selectId + 'SelectedText');
  const optionLi = document.querySelector(`#${selectId}Options li[data-value="${value}"]`);
  if (textEl && optionLi) textEl.innerHTML = optionLi.innerHTML;
}

/* ----------------------------------------------------------------
   PRICE CARD CLICK → auto isi form
   ---------------------------------------------------------------- */
document.querySelectorAll('.price-card').forEach(card => {
  card.addEventListener('click', () => {
    const mainActive = document.querySelector('.main-tab-btn.active');
    if (!mainActive) return;
    
    let tabVal = '';
    if (mainActive.dataset.target === 'mlbb') {
      tabVal = 'mlbb';
    } else if (mainActive.dataset.target === 'pubg_id') {
      tabVal = 'pubg_id';
    } else {
      tabVal = currentRobloxTab;
    }

    if (tabVal === 'mlbb') {
      syncCustomDropdownUI('game', 'mlbb');
      document.getElementById('game').dispatchEvent(new Event('change'));
    } else if (tabVal === 'pubg_id') {
      syncCustomDropdownUI('game', 'pubg_id');
      document.getElementById('game').dispatchEvent(new Event('change'));
    } else {
      syncCustomDropdownUI('game', 'roblox');
      document.getElementById('game').dispatchEvent(new Event('change'));
      syncCustomDropdownUI('tipe', tabVal);
      document.getElementById('tipe').dispatchEvent(new Event('change'));
    }

    setTimeout(() => {
      const nominal = document.getElementById('nominal');
      for (const opt of nominal.options) {
        if (opt.value === card.dataset.robux) {
          syncCustomDropdownUI('nominal', card.dataset.robux);
          nominal.dispatchEvent(new Event('change'));
          break;
        }
      }
    }, 60);

    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('.price-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

/* ----------------------------------------------------------------
   FORM: METODE CHANGE
   ---------------------------------------------------------------- */
const gameSelect    = document.getElementById('game');
const tipeSelect    = document.getElementById('tipe');
const tipeGroup     = document.getElementById('tipeGroup');
const nominalSelect = document.getElementById('nominal');
const passwordGroup = document.getElementById('passwordGroup');
const passwordInput = document.getElementById('password');
const zoneIdGroup   = document.getElementById('zoneIdGroup');
const zoneIdInput   = document.getElementById('zoneId');

gameSelect.addEventListener('change', () => {
  const game = gameSelect.value;

  if (game === 'roblox') {
    tipeGroup.classList.remove('hidden');
    zoneIdGroup.classList.add('hidden');
    zoneIdInput.required = false;
    zoneIdInput.value = '';
    document.getElementById('labelUsername').innerHTML = 'Username Roblox <span style="color:#ec4899;">*</span>';
    document.getElementById('username').placeholder = 'Masukkan username Roblox kamu 🌸';
    tipeSelect.dispatchEvent(new Event('change'));
  } else if (game === 'mlbb') {
    tipeGroup.classList.add('hidden');
    passwordGroup.classList.add('hidden');
    passwordInput.required = false;
    passwordInput.value = '';
    zoneIdGroup.classList.remove('hidden');
    zoneIdInput.required = true;
    document.getElementById('labelUsername').innerHTML = 'User ID MLBB <span style="color:#ec4899;">*</span>';
    document.getElementById('username').placeholder = 'Masukkan User ID kamu 🌸';
    updateNominalOptions('mlbb');
    updatePreview();
  } else if (game === 'pubg_id') {
    tipeGroup.classList.add('hidden');
    passwordGroup.classList.add('hidden');
    passwordInput.required = false;
    passwordInput.value = '';
    zoneIdGroup.classList.add('hidden');
    zoneIdInput.required = false;
    zoneIdInput.value = '';
    document.getElementById('labelUsername').innerHTML = 'User ID PUBG <span style="color:#ec4899;">*</span>';
    document.getElementById('username').placeholder = 'Masukkan User ID PUBG kamu 🌸';
    updateNominalOptions('pubg_id');
    updatePreview();
  } else {
    tipeGroup.classList.add('hidden');
    zoneIdGroup.classList.add('hidden');
    passwordGroup.classList.add('hidden');
    updateNominalOptions('');
    updatePreview();
  }
});

tipeSelect.addEventListener('change', () => {
  if (gameSelect.value !== 'roblox') return;
  const tipe = tipeSelect.value;

  if (tipe === 'login') {
    passwordGroup.classList.remove('hidden');
    passwordInput.required = true;
  } else {
    passwordGroup.classList.add('hidden');
    passwordInput.required = false;
    passwordInput.value = '';
  }

  updateNominalOptions(tipe);
  updatePreview();
});

function updateNominalOptions(metode) {
  nominalSelect.innerHTML = '<option value="">— Pilih Nominal —</option>';
  
  const nominalOptionsEl = document.getElementById('nominalOptions');
  const nominalTextEl = document.getElementById('nominalSelectedText');
  const nominalTrigger = document.getElementById('nominalTrigger');

  if (nominalOptionsEl) nominalOptionsEl.innerHTML = '';
  if (nominalTextEl) nominalTextEl.innerHTML = '— Pilih Nominal —';

  if (!metode || !PRICE_DATA[metode]) { 
    nominalSelect.disabled = true; 
    if (nominalTrigger) {
      nominalTrigger.classList.add('cursor-not-allowed', 'opacity-60');
      nominalTrigger.classList.remove('cursor-pointer');
    }
    return; 
  }
  nominalSelect.disabled = false;
  if (nominalTrigger) {
    nominalTrigger.classList.remove('cursor-not-allowed', 'opacity-60');
    nominalTrigger.classList.add('cursor-pointer');
  }
  
  PRICE_DATA[metode].forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.robux;
    opt.textContent = item.label;
    opt.dataset.price = item.price;
    nominalSelect.appendChild(opt);

    if (nominalOptionsEl) {
      const li = document.createElement('li');
      li.className = 'px-5 py-3 hover:bg-[#fff5f8] cursor-pointer transition-colors border-b border-[#ffe8f0] last:border-0';
      li.dataset.value = item.robux;
      li.innerHTML = item.label;
      nominalOptionsEl.appendChild(li);
    }
  });
}

/* ----------------------------------------------------------------
   TOGGLE PASSWORD VISIBILITY
   ---------------------------------------------------------------- */
document.getElementById('togglePassword').addEventListener('click', () => {
  const isPass = passwordInput.type === 'password';
  passwordInput.type = isPass ? 'text' : 'password';
  document.getElementById('togglePassword').textContent = isPass ? '🙈' : '👁';
});

/* ----------------------------------------------------------------
   PREVIEW PESANAN (REALTIME)
   ---------------------------------------------------------------- */
const previewDiv     = document.getElementById('orderPreview');
const previewContent = document.getElementById('previewContent');

['game','tipe','nominal','username','password','catatan','zoneId'].forEach(id => {
  const el = document.getElementById(id);
  if (el) { el.addEventListener('change', updatePreview); el.addEventListener('input', updatePreview); }
});
nominalSelect.addEventListener('change', updatePreview);

function getActiveMetode() {
  const game = document.getElementById('game').value;
  if (game === 'mlbb') return 'mlbb';
  if (game === 'pubg_id') return 'pubg_id';
  if (game === 'roblox') return document.getElementById('tipe').value;
  return '';
}

function getMetodeLabel(val) {
  const map = { login: '🔐 Via Login', gamepass: '🎮 Via Gamepass', gift: '🎁 Via Gift Card', mlbb: '💎 Mobile Legends', pubg_id: '🔫 PUBG Mobile (Via ID)' };
  return map[val] || val;
}
function getSelectedPrice() {
  const opt = nominalSelect.options[nominalSelect.selectedIndex];
  return opt && opt.dataset.price ? parseInt(opt.dataset.price) : null;
}

function updatePreview() {
  const metode   = getActiveMetode();
  const robux    = nominalSelect.value;
  const username = document.getElementById('username').value.trim();
  const catatan  = document.getElementById('catatan').value.trim();
  const zoneId   = document.getElementById('zoneId') ? document.getElementById('zoneId').value.trim() : '';
  const price    = getSelectedPrice();

  if (metode && robux) {
    const unit = metode === 'mlbb' ? 'Diamonds' : (metode === 'pubg_id' ? 'UC' : 'Robux');
    const displayNominal = isNaN(robux) ? robux : `${Number(robux).toLocaleString('id-ID')} ${unit}`;
    previewDiv.classList.remove('hidden');
    previewContent.innerHTML = `
      <p>📦 <span style="color:#b07090;">Metode :</span> <b>${getMetodeLabel(metode)}</b></p>
      <p>🔸 &nbsp;&nbsp;<span style="color:#b07090;">Nominal :</span> <b>${displayNominal}</b></p>
      ${price ? `<p>💰 <span style="color:#b07090;">Harga &nbsp;&nbsp;:</span> <b style="color:#ec4899;">${formatRupiah(price)}</b></p>` : ''}
      ${username ? `<p>👤 <span style="color:#b07090;">${['mlbb', 'pubg_id'].includes(metode) ? 'User ID' : 'Username'}:</span> <b>${username}</b> ${zoneId ? `(${zoneId})` : ''}</p>` : ''}
      ${catatan  ? `<p>📝 <span style="color:#b07090;">Catatan :</span> ${catatan}</p>` : ''}
    `;
  } else {
    previewDiv.classList.add('hidden');
  }
}

/* ----------------------------------------------------------------
   VALIDASI FORM
   ---------------------------------------------------------------- */
function validateForm() {
  const game     = document.getElementById('game').value;
  const metode   = getActiveMetode();
  const robux    = nominalSelect.value;
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const zoneId   = document.getElementById('zoneId') ? document.getElementById('zoneId').value.trim() : '';

  if (!game)     { alert('🌸 Mohon pilih game dulu ya kak~'); return false; }
  if (game === 'roblox' && !metode) { alert('🌸 Mohon pilih tipe Roblox ya kak~'); return false; }
  if (!robux)    { alert('🌸 Mohon pilih nominal ya kak~');      nominalSelect.focus(); return false; }
  if (!username) { alert(`🌸 Mohon masukkan ${['mlbb', 'pubg_id'].includes(metode) ? 'User ID' : 'Username'} kamu~`);   document.getElementById('username').focus(); return false; }
  if (metode === 'login' && !password) { alert('🌸 Password wajib diisi untuk metode Via Login ya kak~'); document.getElementById('password').focus(); return false; }
  if (metode === 'mlbb' && !zoneId) { alert('🌸 Zone ID wajib diisi untuk pesanan Mobile Legends ya kak~'); document.getElementById('zoneId').focus(); return false; }
  return true;
}

/* ----------------------------------------------------------------
   CUSTOM DROPDOWN SETUP
   ---------------------------------------------------------------- */
function setupCustomDropdown(selectId, triggerId, textId, optionsId, arrowId) {
  const selectEl = document.getElementById(selectId);
  const triggerEl = document.getElementById(triggerId);
  const textEl = document.getElementById(textId);
  const optionsEl = document.getElementById(optionsId);
  const arrowEl = document.getElementById(arrowId);
  
  if (!triggerEl) return;

  triggerEl.addEventListener('click', (e) => {
    if (triggerEl.classList.contains('cursor-not-allowed')) return;
    e.stopPropagation();
    
    // Tutup dropdown lain yang sedang terbuka
    document.querySelectorAll('.custom-options').forEach(el => { if (el !== optionsEl) el.classList.add('hidden'); });
    document.querySelectorAll('.dropdown-arrow').forEach(el => { if (el !== arrowEl) el.style.transform = 'rotate(0deg)'; });

    const isHidden = optionsEl.classList.contains('hidden');
    optionsEl.classList.toggle('hidden', !isHidden);
    if (arrowEl) arrowEl.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  });

  optionsEl.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    
    selectEl.value = li.dataset.value;
    textEl.innerHTML = li.innerHTML;
    optionsEl.classList.add('hidden');
    if (arrowEl) arrowEl.style.transform = 'rotate(0deg)';
    
    selectEl.dispatchEvent(new Event('change'));
  });

  // Tutup bila klik di luar dropdown
  document.addEventListener('click', (e) => {
    if (!triggerEl.contains(e.target) && !optionsEl.contains(e.target)) {
      optionsEl.classList.add('hidden');
      if (arrowEl) arrowEl.style.transform = 'rotate(0deg)';
    }
  });
}

// Inisialisasi dropdown form
setupCustomDropdown('game', 'gameTrigger', 'gameSelectedText', 'gameOptions', 'gameArrow');
setupCustomDropdown('tipe', 'tipeTrigger', 'tipeSelectedText', 'tipeOptions', 'tipeArrow');
setupCustomDropdown('nominal', 'nominalTrigger', 'nominalSelectedText', 'nominalOptions', 'nominalArrow');

/* ----------------------------------------------------------------
   ORDER VIA WHATSAPP
   ---------------------------------------------------------------- */
document.getElementById('orderBtn').addEventListener('click', () => {
  if (!validateForm()) return;

  const metode   = getActiveMetode();
  const robux    = nominalSelect.value;
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const catatan  = document.getElementById('catatan').value.trim();
  const zoneId   = document.getElementById('zoneId') ? document.getElementById('zoneId').value.trim() : '';
  const price    = getSelectedPrice();

  const unit = metode === 'mlbb' ? 'Diamonds' : (metode === 'pubg_id' ? 'UC' : 'Robux');
  const displayNominal = isNaN(robux) ? robux : `${Number(robux).toLocaleString('id-ID')} ${unit}`;
  let pesan =
`🌸✨ *QUEEN STORE* ✨🌸

📦 *Metode*     : ${getMetodeLabel(metode)}
🔷  *Nominal*    : ${displayNominal}
💰 *Total Bayar*: ${price ? formatRupiah(price) : '-'}

👤 *${['mlbb', 'pubg_id'].includes(metode) ? 'User ID' : 'Username'}*   : ${username} ${zoneId ? `(${zoneId})` : ''}`;

  if (metode === 'login' && password) {
    pesan += `\n🔑 *Password*   : ${password}`;
  }
  if (catatan) {
    pesan += `\n📝 *Catatan*    : ${catatan}`;
  }

  pesan += `

Kak, minta konfirmasi ketersediaan & info pembayarannya ya~ Makasih banyak! 💕🎀`;

  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
});

/* ----------------------------------------------------------------
   FLOATING HEARTS CANVAS
   ---------------------------------------------------------------- */
(function initHearts() {
  const canvas = document.getElementById('hearts');
  const ctx    = canvas.getContext('2d');
  let W, H;
  const hearts = [];
  const EMOJIS = ['💕', '🌸', '✿', '💗', '✦', '❀', '🩷'];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 22; i++) {
    hearts.push({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      size:  Math.random() * 16 + 10,
      speed: Math.random() * 0.4 + 0.1,
      drift: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    hearts.forEach(h => {
      ctx.globalAlpha = h.alpha;
      ctx.font = `${h.size}px serif`;
      ctx.fillText(h.emoji, h.x, h.y);
      h.y -= h.speed;
      h.x += h.drift;
      if (h.y < -30) { h.y = H + 30; h.x = Math.random() * W; }
      if (h.x < -30 || h.x > W + 30) h.x = Math.random() * W;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ----------------------------------------------------------------
   SCROLL REVEAL
   ---------------------------------------------------------------- */
(function initReveal() {
  const els = document.querySelectorAll('.price-card, .stat-card, .form-card, .note-cute');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity .5s ease ${i * 0.035}s, transform .5s ease ${i * 0.035}s`;
    obs.observe(el);
  });
})();