// Kullanıcı ayarları ve varsayılan değerler
let userSettings = {
  url: '',
  size: 32,
  opacity: 100,
  rotation: 0,
  color: '#ffffff'
};

let favorites = [];

const backgrounds = [
  { id: 'default', name: 'Varsayılan', class: 'bg-default' },
  { id: 'dark', name: 'Karanlık', class: 'bg-dark-scene' },
  { id: 'light', name: 'Aydınlık', class: 'bg-light-scene' },
  { id: 'game', name: 'Oyun', class: 'bg-game-scene' }
];

const additionalPresets = [

  { id: 'cross', name: 'İnce Artı', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGxpbmUgeDE9IjE2IiB5MT0iOCIgeDI9IjE2IiB5Mj0iMjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSI4IiB5MT0iMTYiIHgyPSIyNCIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=' },
  { id: 'square', name: 'Kare', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=' },
  { id: 'triangle', name: 'Üçgen', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlnb24gcG9pbnRzPSIxNiw4IDI0LDI0IDgsMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==' },
  { id: 'star', name: 'Yıldız', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlnb24gcG9pbnRzPSIxNiw2IDIwLDE0IDI4LDE2IDIwLDE4IDE2LDI2IDEyLDE4IDQsMTYgMTIsMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=' },
  { id: 'sniper', name: 'Sniper', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE2IiB5MT0iOCIgeDI9IjE0IiB5Mj0iMTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIxNiIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIyNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjgiIHkxPSIxNiIgeDI9IjE0IiB5Mj0iMTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIxOCIgeTE9IjE2IiB4Mj0iMjQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+' },

  { id: 'dot_medium', name: 'Orta Nokta', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMyIgZmlsbD0id2hpdGUiLz48L3N2Zz4=' },
  { id: 'dot_big', name: 'Büyük Nokta', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=' },
  { id: 'cross_thick', name: 'Kalın Artı', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGxpbmUgeDE9IjE2IiB5MT0iOCIgeDI9IjE2IiB5Mj0iMjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSI4IiB5MT0iMTYiIHgyPSIyNCIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=' },
  { id: 'cross_small', name: 'Küçük Artı', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGxpbmUgeDE9IjE2IiB5MT0iMTIiIHgyPSIxNiIgeTI9IjIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxsaW5lIHgxPSIxMiIgeTE9IjE2IiB4Mj0iMjAiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=' },
  { id: 'cross_circle', name: 'Artı ve Daire', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE2IiB5MT0iMTAiIHgyPSIxNiIgeTI9IjIyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMTAiIHkxPSIxNiIgeDI9IjIyIiB5Mj0iMTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==' },
  { id: 'dot_circle', name: 'Nokta ve Daire', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=' },

  { id: 'sniper_dot', name: 'Sniper Noktalı', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMSIgZmlsbD0id2hpdGUiLz48bGluZSB4MT0iMTYiIHkxPSI4IiB4Mj0iMTYiIHkyPSIxNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE2IiB5MT0iMTgiIHgyPSIxNiIgeTI9IjI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iOCIgeTE9IjE2IiB4Mj0iMTQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE4IiB5MT0iMTYiIHgyPSIyNCIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=' },
  { id: 'sniper_complex', name: 'Komplex Sniper', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjEiIGZpbGw9IndoaXRlIi8+PGxpbmUgeDE9IjE2IiB5MT0iNCIgeDI9IjE2IiB5Mj0iMTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjE2IiB5MT0iMTgiIHgyPSIxNiIgeTI9IjI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI0IiB5MT0iMTYiIHgyPSIxNCIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIxOCIgeTE9IjE2IiB4Mj0iMjgiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=' },
  { id: 'tactical_cross', name: 'Taktik Nişangah', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGxpbmUgeDE9IjE2IiB5MT0iOCIgeDI9IjE2IiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIxNiIgeTE9IjIwIiB4Mj0iMTYiIHkyPSIyNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjgiIHkxPSIxNiIgeDI9IjEyIiB5Mj0iMTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIyMCIgeTE9IjE2IiB4Mj0iMjQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+' },
  { id: 'chevron', name: 'Şevron', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlsaW5lIHBvaW50cz0iMTIsMTIgMTYsMTYgMjAsMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==' },
  { id: 'arrow_up', name: 'Yukarı Ok', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlsaW5lIHBvaW50cz0iMTIsMTggMTYsMTQgMjAsMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==' },

  { id: 'scope_minimal', name: 'Minimal Dürbün', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGxpbmUgeDE9IjE2IiB5MT0iNCIgeDI9IjE2IiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIxNiIgeTE9IjIwIiB4Mj0iMTYiIHkyPSIyOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjQiIHkxPSIxNiIgeDI9IjEyIiB5Mj0iMTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIyMCIgeTE9IjE2IiB4Mj0iMjgiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+' },
  { id: 'rect_dot', name: 'Kare ve Nokta', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==' },
  { id: 'angle_bracket', name: 'Açılı Parantez', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTEyLDEyIEw4LDE2IEwxMiwyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwLDEyIEwyNCwxNiBMMjAsMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==' },
  { id: 'quad_dot', name: 'Dört Nokta', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMSIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE0IiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjE0IiBjeT0iMTgiIHI9IjEiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=' },
  { id: 'triple_dot', name: 'Üç Nokta', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxMiIgcj0iMSIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjE4IiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTgiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+' },
  { id: 'diamond', name: 'Elmas', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlnb24gcG9pbnRzPSIxNiwxMCAyMCwxNiAxNiwyMiAxMiwxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=' },
  { id: 'target', name: 'Hedef', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSI2IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=' }
];

document.addEventListener('DOMContentLoaded', function () {

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  const thumbnails = document.querySelectorAll('.preset-thumbnail');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.getElementById('urlInput').addEventListener('input', function () {
    userSettings.url = this.value;
    updatePreview();
  });

  document.getElementById('colorPicker').addEventListener('input', function() {
    userSettings.color = this.value;
    updateColorPreview();
    updatePreview();
  });

  setupBackgrounds();

  loadPresets();

  setupRangeSliders();

  loadFavorites();

  document.getElementById('presetSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const presetThumbnails = document.querySelectorAll('.preset-thumbnail');
    
    presetThumbnails.forEach(thumb => {
      const presetName = thumb.querySelector('small').textContent.toLowerCase();
      if (presetName.includes(searchTerm)) {
        thumb.style.display = 'flex';
      } else {
        thumb.style.display = 'none';
      }
    });
  });
});

window.addEventListener("message", function (event) {
  const data = event.data;

  if (data.action === "openMenu") {
    document.getElementById('crosshairMenu').classList.add('active');

    if (data.settings) {
      userSettings = {...userSettings, ...data.settings};
    } else if (data.url) {
      userSettings.url = data.url;
    }

    applySettingsToUI();
    updatePreview();
  }

  if (data.action === "showCrosshair") {

    if (data.settings) {
      userSettings = {...userSettings, ...data.settings};
    }
    
    if (data.url) {
      userSettings.url = data.url;
    }

    const img = document.getElementById('crosshairImage');
    if (img) {
      img.style.display = data.visible ? "block" : "none";
    }

    updatePreview();
  }
});

function applySettingsToUI() {
  document.getElementById('urlInput').value = userSettings.url || "";
  document.getElementById('sizeSlider').value = userSettings.size || 32;
  document.getElementById('opacitySlider').value = userSettings.opacity || 100;
  document.getElementById('rotationSlider').value = userSettings.rotation || 0;
  document.getElementById('colorPicker').value = userSettings.color || "#ffffff";
  
  updateColorPreview();
}

function updateColorPreview() {
  const colorPreview = document.getElementById('colorPreview');
  if (colorPreview) {
    colorPreview.style.backgroundColor = userSettings.color;
  }
}

function setupRangeSliders() {

  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValue = document.getElementById('sizeValue');
  
  sizeSlider.addEventListener('input', function() {
    userSettings.size = parseInt(this.value);
    sizeValue.textContent = this.value + 'px';
    updatePreview();
  });

  const opacitySlider = document.getElementById('opacitySlider');
  const opacityValue = document.getElementById('opacityValue');
  
  opacitySlider.addEventListener('input', function() {
    userSettings.opacity = parseInt(this.value);
    opacityValue.textContent = this.value + '%';
    updatePreview();
  });

  const rotationSlider = document.getElementById('rotationSlider');
  const rotationValue = document.getElementById('rotationValue');
  
  rotationSlider.addEventListener('input', function() {
    userSettings.rotation = parseInt(this.value);
    rotationValue.textContent = this.value + '°';
    updatePreview();
  });
}

function setupBackgrounds() {
  const bgContainer = document.getElementById('backgroundSelector');
  if (!bgContainer) return;

  backgrounds.forEach(bg => {
    const bgOption = document.createElement('div');
    bgOption.className = 'bg-option ' + bg.class;
    bgOption.setAttribute('data-bg', bg.id);
    bgOption.innerHTML = `<span>${bg.name}</span>`;
    
    bgOption.addEventListener('click', function() {
      document.querySelectorAll('.bg-option').forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      const previewContainer = document.querySelector('.preview-container');
      backgrounds.forEach(b => previewContainer.classList.remove(b.class));
      previewContainer.classList.add(bg.class);
    });
    
    bgContainer.appendChild(bgOption);
  });

  const firstBg = bgContainer.querySelector('.bg-option');
  if (firstBg) firstBg.click();
}

function loadPresets() {
  const presetContainer = document.getElementById('presetContainer');
  if (!presetContainer) return;

  presetContainer.innerHTML = '';

  const basePresets = [
    { id: 'default', name: 'Varsayılan', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjE2IiB5MT0iMCIgeDI9IjE2IiB5Mj0iMzIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIwIiB5MT0iMTYiIHgyPSIzMiIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=' },
    { id: 'dot', name: 'Nokta', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=' },
    { id: 'circle', name: 'Yuvarlak', url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+' }
  ];

  const allPresets = [...basePresets, ...additionalPresets];

  const presetGrid = document.createElement('div');
  presetGrid.className = 'presets-grid';
  presetContainer.appendChild(presetGrid);

  setTimeout(() => {
    const gridElement = document.querySelector('.presets-grid');
    if (gridElement) {
      gridElement.style.scrollbarWidth = 'thin';
      gridElement.style.scrollbarColor = 'var(--primary-500) var(--background-200)';
    }
  }, 100);

  const helpText = document.createElement('div');
  helpText.className = 'help-text';
  helpText.innerHTML = '<small>Daha fazla crosshair görmek için aşağı kaydırın</small>';
  helpText.style.textAlign = 'center';
  helpText.style.gridColumn = '1 / -1';
  helpText.style.marginBottom = 'var(--space-xs)';
  helpText.style.color = 'var(--text-tertiary)';
  presetGrid.appendChild(helpText);

  allPresets.forEach(preset => {
    const presetElement = document.createElement('div');
    presetElement.className = 'preset-thumbnail';
    presetElement.setAttribute('data-preset', preset.id);
    presetElement.setAttribute('data-url', preset.url);
    
    presetElement.innerHTML = `
      <div class="preview-crosshair" style="background-image: url('${preset.url}')"></div>
      <small>${preset.name}</small>
    `;
    
    presetElement.addEventListener('click', function() {
      document.querySelectorAll('.preset-thumbnail').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
    
    presetGrid.appendChild(presetElement);
  });

  const firstPreset = presetGrid.querySelector('.preset-thumbnail');
  if (firstPreset) firstPreset.classList.add('active');
}

function loadFavorites() {
  try {

    const savedFavorites = localStorage.getItem('crosshairFavorites');
    if (savedFavorites) {
      const parsed = JSON.parse(savedFavorites);
      
      // Geçerli favorileri filtrele
      if (Array.isArray(parsed)) {
        favorites = parsed.filter(fav => 
          fav && 
          typeof fav === 'object' && 
          fav.url && 
          typeof fav.url === 'string' && 
          fav.url.length < 500
        );

        if (favorites.length !== parsed.length) {
          localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
        }
      } else {

        favorites = [];
        localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
      }
    } else {
      favorites = [];
    }
    
    renderFavorites();
  } catch (error) {
    console.error('Favoriler yüklenirken hata oluştu:', error);
    favorites = [];
    localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
    renderFavorites();
  }
}


function renderFavorites() {
  const favContainer = document.getElementById('favoritesContainer');
  if (!favContainer) return;
  
  favContainer.innerHTML = '';
  
  if (favorites.length === 0) {
    favContainer.innerHTML = '<p class="text-center text-tertiary">Henüz favori crosshair eklenmemiş.</p>';
    return;
  }
  
  const validFavorites = favorites.filter(fav => fav && fav.url && typeof fav.url === 'string');
  
  if (validFavorites.length === 0) {
    favContainer.innerHTML = '<p class="text-center text-tertiary">Henüz favori crosshair eklenmemiş.</p>';
    favorites = []; // Geçersiz favorileri temizle
    localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
    return;
  }

  if (validFavorites.length !== favorites.length) {
    favorites = validFavorites;
    localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
  }
  
  validFavorites.forEach((fav, index) => {
    const favElement = document.createElement('div');
    favElement.className = 'favorite-item';

    let previewStyle = '';
    if (fav.url) {
      previewStyle = `background-image: url('${fav.url}')`;
    }
    
    favElement.innerHTML = `
      <div class="favorite-preview" style="${previewStyle}"></div>
      <div class="favorite-info">
        <span>${fav.name || 'Favori ' + (index + 1)}</span>
      </div>
      <div class="favorite-actions">
        <button class="btn-icon" onclick="applyFavorite(${index})"><i class="fas fa-check"></i></button>
        <button class="btn-icon" onclick="removeFavorite(${index})"><i class="fas fa-trash"></i></button>
      </div>
    `;
    
    favContainer.appendChild(favElement);
  });
}

function addToFavorites() {
  const favName = document.getElementById('favoriteNameInput')?.value || `Favori ${favorites.length + 1}`;
  const currentUrl = userSettings.url;

  const validUrl = validateUrl(currentUrl);
  if (!validUrl) {
    showNotification('Geçerli bir crosshair URL\'si mevcut değil', 'warning');
    return;
  }

  const img = new Image();
  img.onload = function() {
    const newFavorite = {
      name: favName,
      url: validUrl,
      size: userSettings.size,
      opacity: userSettings.opacity,
      rotation: userSettings.rotation,
      color: userSettings.color
    };
    
    favorites.push(newFavorite);
    localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
    
    renderFavorites();

    if (document.getElementById('favoriteNameInput')) {
      document.getElementById('favoriteNameInput').value = '';
    }

    showNotification('Favori başarıyla eklendi!', 'success');
  };
  
  img.onerror = function() {

    showNotification('Geçersiz resim URL\'si, favori eklenemedi', 'error');
  };

  img.src = validUrl;
}

function validateUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const cleanUrl = url.trim().replace(/\n/g, '');

  if (cleanUrl.length > 500) {
    return false;
  }
  
  return cleanUrl;
}

function applyFavorite(index) {
  const favorite = favorites[index];
  if (!favorite) return;

  const validUrl = validateUrl(favorite.url);
  if (!validUrl) {
    showNotification('Geçersiz crosshair URL\'si', 'error');
    return;
  }

  favorite.url = validUrl;

  userSettings = {...userSettings, ...favorite};
  applySettingsToUI();
  updatePreview();

  fetch(`https://${GetParentResourceName()}/setCrosshair`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userSettings),
  }).catch(error => {
    console.error('Favori uygulama hatası:', error);
  });
  
  showNotification('Favori crosshair uygulandı', 'success');
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-icon">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
    </div>
    <div class="notification-message">${message}</div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

function updatePreview() {
  const preview = document.getElementById('crosshairPreview');
  const settingsPreview = document.getElementById('settingsPreview');
  const crosshairImage = document.getElementById('crosshairImage');
  const allPreviews = [preview, settingsPreview].filter(el => el);
  
  if (userSettings.url) {
    if (crosshairImage) {
      crosshairImage.src = userSettings.url;
      crosshairImage.style.display = "block";
      crosshairImage.style.width = `${userSettings.size}px`;
      crosshairImage.style.height = `${userSettings.size}px`;
      crosshairImage.style.opacity = userSettings.opacity / 100;
      crosshairImage.style.transform = `translate(-50%, -50%) rotate(${userSettings.rotation}deg)`;

      crosshairImage.style.position = "absolute";
      crosshairImage.style.top = "50%";
      crosshairImage.style.left = "50%";
      crosshairImage.style.backgroundColor = "transparent";
      crosshairImage.style.border = "none";
      crosshairImage.style.textIndent = "-9999px";
      crosshairImage.style.zIndex = "1000";
      crosshairImage.style.pointerEvents = "none";
    }
    

    allPreviews.forEach(previewElement => {
      if (!previewElement) return;
      
      previewElement.style.backgroundImage = `url('${userSettings.url}')`;
      previewElement.style.width = `${userSettings.size}px`;
      previewElement.style.height = `${userSettings.size}px`;
      previewElement.style.opacity = userSettings.opacity / 100;
      previewElement.style.transform = `rotate(${userSettings.rotation}deg)`;

      if (isSvgImage(userSettings.url)) {
        try {
          let svg = '';
          let newSvgUrl = '';

          if (userSettings.url.startsWith('data:image/svg+xml;base64,')) {

            svg = atob(userSettings.url.split(',')[1] || userSettings.url.split('base64,')[1]);
            const coloredSvg = replaceColorInSvg(svg, userSettings.color);
            newSvgUrl = 'data:image/svg+xml;base64,' + btoa(coloredSvg);
          } else if (userSettings.url.endsWith('.svg') || userSettings.url.includes('.svg')) {

            fetch(userSettings.url)
              .then(response => response.text())
              .then(svgContent => {
                const coloredSvg = replaceColorInSvg(svgContent, userSettings.color);
                newSvgUrl = 'data:image/svg+xml;base64,' + btoa(coloredSvg);

                previewElement.style.backgroundImage = `url('${newSvgUrl}')`;
                if (crosshairImage) {
                  crosshairImage.src = newSvgUrl;
                }
              })
              .catch(error => {
                console.error('SVG fetch hatası:', error);
              });

            return;
          }
          
          if (newSvgUrl) {
            previewElement.style.backgroundImage = `url('${newSvgUrl}')`;

            if (crosshairImage) {
              crosshairImage.src = newSvgUrl;
            }
          }
        } catch (e) {
          console.error('SVG renk değişimi yapılamadı:', e);
        }
      } else {
        if (userSettings.color !== '#ffffff') {

          const colorFilter = generateColorFilter(userSettings.color);
          previewElement.style.filter = colorFilter;
          
          if (crosshairImage) {
            crosshairImage.style.filter = colorFilter;
          }
        } else {
          previewElement.style.filter = '';
          if (crosshairImage) {
            crosshairImage.style.filter = '';
          }
        }
      }
    });
  } else {

    if (crosshairImage) {
      crosshairImage.style.display = "none";
      crosshairImage.src = "";
    }
    
    allPreviews.forEach(previewElement => {
      if (previewElement) previewElement.style.backgroundImage = 'none';
    });
  }
}

function replaceColorInSvg(svg, newColor) {
  let coloredSvg = svg;

  coloredSvg = coloredSvg.replace(/fill="white"/gi, `fill="${newColor}"`);
  coloredSvg = coloredSvg.replace(/stroke="white"/gi, `stroke="${newColor}"`);

  coloredSvg = coloredSvg.replace(/fill='white'/gi, `fill='${newColor}'`);
  coloredSvg = coloredSvg.replace(/stroke='white'/gi, `stroke='${newColor}'`);

  coloredSvg = coloredSvg.replace(/fill="#ffffff"/gi, `fill="${newColor}"`);
  coloredSvg = coloredSvg.replace(/stroke="#ffffff"/gi, `stroke="${newColor}"`);

  coloredSvg = coloredSvg.replace(/fill="#fff"/gi, `fill="${newColor}"`);
  coloredSvg = coloredSvg.replace(/stroke="#fff"/gi, `stroke="${newColor}"`);

  coloredSvg = coloredSvg.replace(/fill='#ffffff'/gi, `fill='${newColor}'`);
  coloredSvg = coloredSvg.replace(/stroke='#ffffff'/gi, `stroke='${newColor}'`);
  coloredSvg = coloredSvg.replace(/fill='#fff'/gi, `fill='${newColor}'`);
  coloredSvg = coloredSvg.replace(/stroke='#fff'/gi, `stroke='${newColor}'`);

  coloredSvg = coloredSvg.replace(/fill="rgb\(255,\s*255,\s*255\)"/gi, `fill="${newColor}"`);
  coloredSvg = coloredSvg.replace(/stroke="rgb\(255,\s*255,\s*255\)"/gi, `stroke="${newColor}"`);

  coloredSvg = coloredSvg.replace(/white/g, newColor.replace('#', ''));
  
  return coloredSvg;
}

function isSvgImage(url) {
  if (!url) return false;
  return url.startsWith('data:image/svg+xml;base64,') || 
         url.endsWith('.svg') || 
         url.includes('.svg');
}

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function generateColorFilter(hexColor) {
  if (hexColor === '#ffffff') return ''; 
  
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '';
  

  return `grayscale(100%) brightness(2) sepia(100%) hue-rotate(${calculateHueRotate(rgb)}deg) saturate(${calculateSaturation(rgb)}%) brightness(${calculateBrightness(rgb)}%)`;
}

function calculateHueRotate(rgb) {

  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;
  
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h;
  
  if (max === min) {
    h = 0; 
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else {
    h = 60 * (4 + (r - g) / (max - min));
  }
  
  if (h < 0) h += 360;
  
  return Math.round(h);
}

function calculateSaturation(rgb) {

  const max = Math.max(rgb.r, rgb.g, rgb.b) / 255;

  const min = Math.min(rgb.r, rgb.g, rgb.b) / 255;

  const s = max === 0 ? 0 : (max - min) / max;
  
  return Math.round(s * 100);
}

function calculateBrightness(rgb) {

  const perceivedBrightness = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) / 255;

  return Math.round(100 - (perceivedBrightness * 50));
}

function submitUrl() {
  const urlInput = document.getElementById('urlInput');
  if (!urlInput || !urlInput.value) {
    showNotification('Lütfen bir URL girin', 'warning');
    return;
  }

  const validUrl = validateUrl(urlInput.value);
  if (!validUrl) {
    showNotification('Geçersiz URL formatı', 'error');
    return;
  }

  const img = new Image();
  img.onload = function() {
  
    userSettings.url = validUrl;
    

    updatePreview();
    
 
    fetch(`https://${GetParentResourceName()}/setCrosshair`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    }).catch(error => {
      console.error('Kaydetme hatası:', error);
      showNotification('Kaydetme işlemi başarısız oldu', 'error');
    });
    

    showNotification('Crosshair başarıyla kaydedildi', 'success');
    

    closeMenu();
  };
  
  img.onerror = function() {

    showNotification('Geçersiz resim URL\'si, resim yüklenemedi', 'error');
  };

  img.src = validUrl;
}

function closeMenu() {

  document.getElementById('crosshairMenu').classList.remove('active');
  

  fetch(`https://${GetParentResourceName()}/closeMenu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ closed: true })
  }).catch(error => {
    console.error('Menü kapatma hatası:', error);
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
  document.querySelector(`.tab-content[data-tab-content="${tabName}"]`).classList.add('active');
}

function applyPreset() {
  const activeThumbnail = document.querySelector('.preset-thumbnail.active');
  if (activeThumbnail) {
    userSettings.url = activeThumbnail.getAttribute('data-url') || '';

    document.getElementById('urlInput').value = userSettings.url;

    updatePreview();

    fetch(`https://${GetParentResourceName()}/setCrosshair`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    });

    showNotification('Önayar uygulandı', 'success');

    switchTab('url');
  }
}

function saveSettings() {

  const sizeValue = parseInt(document.getElementById('sizeSlider').value);
  const opacityValue = parseInt(document.getElementById('opacitySlider').value);
  const rotationValue = parseInt(document.getElementById('rotationSlider').value);
  const colorValue = document.getElementById('colorPicker').value;

  userSettings.size = sizeValue;
  userSettings.opacity = opacityValue;
  userSettings.rotation = rotationValue;
  userSettings.color = colorValue;

  updatePreview();

  fetch(`https://${GetParentResourceName()}/setCrosshair`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userSettings),
  }).catch(error => {
    console.error('Ayarları kaydetme hatası:', error);
    showNotification('Kaydetme işlemi başarısız oldu', 'error');
    return;
  });

  showNotification('Ayarlar kaydedildi', 'success');

  closeMenu();
}

function removeFavorite(index) {
  favorites.splice(index, 1);
  localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
  
  renderFavorites();
  showNotification('Favori silindi', 'info');
} 