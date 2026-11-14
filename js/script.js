// Petaluna Florist — interaksi sederhana untuk project UTS.
// Nomor WhatsApp Petaluna: 0895-4042-37475
const WHATSAPP_NUMBER = "62895404237475"; // format internasional, tanpa tanda + atau spasi

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Filter kategori produk: semua, fresh flower, atau artificial flower.
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('selected'));
    button.classList.add('selected');
    const filter = button.dataset.filter;
    productCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.hidden = !show;
    });
  });
});

const modal = document.getElementById('order-modal');
const orderForm = document.getElementById('order-form');
const bouquetChoice = document.getElementById('bouquet-choice');
const toast = document.getElementById('toast');
let lastFocusedElement = null;

function openOrderModal(productName = '') {
  lastFocusedElement = document.activeElement;
  bouquetChoice.value = productName;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('input[name="customer"]').focus();
}
function closeOrderModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastFocusedElement?.focus();
}

document.getElementById('open-custom').addEventListener('click', () => openOrderModal());
document.querySelectorAll('.product-order').forEach(button => {
  button.addEventListener('click', () => openOrderModal(button.dataset.product));
});
document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeOrderModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeOrderModal();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3200);
}

orderForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!orderForm.reportValidity()) return;
  const data = new FormData(orderForm);
  const message = [
    'Halo Petaluna Florist! Saya ingin memesan bouquet.',
    `Nama: ${data.get('customer')}`,
    `Pilihan bouquet: ${data.get('bouquet')}`,
    `Jenis bunga: ${data.get('type')}`,
    `Budget: ${data.get('budget')}`,
    `Catatan: ${data.get('notes') || '-'}`
  ].join('\n');
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  closeOrderModal();
});

document.getElementById('year').textContent = new Date().getFullYear();
