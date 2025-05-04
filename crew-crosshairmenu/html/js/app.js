let userSettings = {
  url: '',
  size: 32,
  opacity: 100,
  rotation: 0
};

let favorites = [];

const backgrounds = [
  { id: 'default', name: 'Varsayılan', class: 'bg-default' },
  { id: 'dark', name: 'Karanlık', class: 'bg-dark-scene' },
  { id: 'light', name: 'Aydınlık', class: 'bg-light-scene' },
  { id: 'game', name: 'Oyun', class: 'bg-game-scene' }
];

const additionalPresets = [
  { id: 'red_dot', name: 'Kırmızı Nokta', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="2" fill="red"/></svg>' },
  { id: 'white_dot', name: 'Beyaz Nokta', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="2" fill="white"/></svg>' },
  { id: 'red_cross', name: 'Kırmızı Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="16" x2="20" y2="16" stroke="red" stroke-width="2"/><line x1="16" y1="12" x2="16" y2="20" stroke="red" stroke-width="2"/></svg>' },
  { id: 'purple_cross', name: 'Mor Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="16" x2="20" y2="16" stroke="purple" stroke-width="2"/><line x1="16" y1="12" x2="16" y2="20" stroke="purple" stroke-width="2"/></svg>' },
  { id: 'cyan_cross', name: 'Turkuaz Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="16" x2="20" y2="16" stroke="cyan" stroke-width="2"/><line x1="16" y1="12" x2="16" y2="20" stroke="cyan" stroke-width="2"/></svg>' },
  { id: 'dot_outline', name: 'Nokta Çizgisi', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="1" fill="white"/></svg>' },

  { id: 'green_circle', name: 'Yeşil Halka', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4" fill="none" stroke="lime" stroke-width="1.5"/><circle cx="16" cy="16" r="1" fill="lime"/></svg>' },
  { id: 'purple_circle', name: 'Mor Halka', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4" fill="none" stroke="purple" stroke-width="1.5"/><circle cx="16" cy="16" r="1" fill="purple"/></svg>' },
  { id: 'thick_plus', name: 'Kalın Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="14" y="8" width="4" height="16" fill="white"/><rect x="8" y="14" width="16" height="4" fill="white"/></svg>' },
  { id: 'small_x_green', name: 'Yeşil X', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="12" x2="20" y2="20" stroke="lime" stroke-width="1.5"/><line x1="20" y1="12" x2="12" y2="20" stroke="lime" stroke-width="1.5"/></svg>' },
  { id: 'small_x_red', name: 'Kırmızı X', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="12" x2="20" y2="20" stroke="red" stroke-width="1.5"/><line x1="20" y1="12" x2="12" y2="20" stroke="red" stroke-width="1.5"/></svg>' },
  { id: 'colorful_x', name: 'Renkli X', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="12" x2="20" y2="20" stroke="red" stroke-width="1.5"/><line x1="20" y1="12" x2="12" y2="20" stroke="blue" stroke-width="1.5"/></svg>' },

  { id: 'cyan_square', name: 'Turkuaz Kare', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="14" y="14" width="4" height="4" fill="cyan"/></svg>' },
  { id: 'white_dot_small', name: 'Küçük Nokta', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="1" fill="white"/></svg>' },
  { id: 'brackets', name: 'Parantezler', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12,12 C10,16 10,16 12,20" stroke="white" fill="none" stroke-width="2"/><path d="M20,12 C22,16 22,16 20,20" stroke="white" fill="none" stroke-width="2"/></svg>' },
  { id: 'plus_x', name: 'Artı X', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="10" y1="10" x2="22" y2="22" stroke="white" stroke-width="1"/><line x1="22" y1="10" x2="10" y2="22" stroke="white" stroke-width="1"/><line x1="16" y1="10" x2="16" y2="22" stroke="white" stroke-width="1"/><line x1="10" y1="16" x2="22" y2="16" stroke="white" stroke-width="1"/></svg>' },
  { id: 'diamond_outline', name: 'Elmas Çizgisi', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="12" y="12" width="8" height="8" fill="none" stroke="white" stroke-width="1" transform="rotate(45 16 16)"/></svg>' },
  { id: 'cyan_cross', name: 'Turkuaz Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="16" y1="10" x2="16" y2="22" stroke="cyan" stroke-width="1.5"/><line x1="10" y1="16" x2="22" y2="16" stroke="cyan" stroke-width="1.5"/></svg>' },

  { id: 'green_dot', name: 'Yeşil Nokta', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="1" fill="lime"/></svg>' },
  { id: 'orange_x', name: 'Turuncu X', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="12" x2="20" y2="20" stroke="orange" stroke-width="1.5"/><line x1="20" y1="12" x2="12" y2="20" stroke="orange" stroke-width="1.5"/></svg>' },
  { id: 'purple_x', name: 'Mor X', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="12" y1="12" x2="20" y2="20" stroke="purple" stroke-width="1.5"/><line x1="20" y1="12" x2="12" y2="20" stroke="purple" stroke-width="1.5"/></svg>' },
  { id: 'cyan_circle', name: 'Turkuaz Halka', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4" fill="none" stroke="cyan" stroke-width="1.5"/><circle cx="16" cy="16" r="1" fill="cyan"/></svg>' },
  { id: 'green_plus', name: 'Yeşil Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="16" y1="10" x2="16" y2="22" stroke="lime" stroke-width="1.5"/><line x1="10" y1="16" x2="22" y2="16" stroke="lime" stroke-width="1.5"/></svg>' },
  { id: 'orange_plus', name: 'Turuncu Artı', url: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line x1="16" y1="10" x2="16" y2="22" stroke="orange" stroke-width="1.5"/><line x1="10" y1="16" x2="22" y2="16" stroke="orange" stroke-width="1.5"/></svg>' },
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

    document.getElementById('sizeValue').textContent = userSettings.size + 'px';
    document.getElementById('opacityValue').textContent = userSettings.opacity + '%';
    document.getElementById('rotationValue').textContent = userSettings.rotation + '°';
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

    if (data.visible) {
      updatePreview();
    } else {

      clearCrosshairDisplay();
    }
  }
});

function clearCrosshairDisplay() {
  const crosshairImage = document.getElementById('crosshairImage');
  if (crosshairImage) {
    crosshairImage.style.display = "none";
  }
  
  const preview = document.getElementById('crosshairPreview');
  const settingsPreview = document.getElementById('settingsPreview');
  const allPreviews = [preview, settingsPreview].filter(el => el);
  
  allPreviews.forEach(previewElement => {
    if (previewElement) {
      previewElement.style.backgroundImage = 'none';
    }
  });
}

function applySettingsToUI() {
  document.getElementById('urlInput').value = userSettings.url || "";
  document.getElementById('sizeSlider').value = userSettings.size || 32;
  document.getElementById('opacitySlider').value = userSettings.opacity || 100;
  document.getElementById('rotationSlider').value = userSettings.rotation || 0;

  document.getElementById('sizeValue').textContent = (userSettings.size || 32) + 'px';
  document.getElementById('opacityValue').textContent = (userSettings.opacity || 100) + '%';
  document.getElementById('rotationValue').textContent = (userSettings.rotation || 0) + '°';
}

function updateColorPreview() {
  const colorPreview = document.getElementById('colorPreview');
  const presetColorPreview = document.getElementById('presetColorPreview');
  
  if (colorPreview) {
    colorPreview.style.backgroundColor = userSettings.color;
  }
  
  if (presetColorPreview) {
    presetColorPreview.style.backgroundColor = userSettings.color;
  }
}

function setupRangeSliders() {
  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValue = document.getElementById('sizeValue');
  
  sizeSlider.addEventListener('input', function() {
    userSettings.size = parseInt(this.value);
    sizeValue.textContent = this.value + 'px';
    updatePreview();
    

    fetch(`https://${GetParentResourceName()}/setCrosshair`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    }).catch(error => {
      console.error('Ayar değişikliği kaydedilemedi:', error);
    });
  });

  const opacitySlider = document.getElementById('opacitySlider');
  const opacityValue = document.getElementById('opacityValue');
  
  opacitySlider.addEventListener('input', function() {
    userSettings.opacity = parseInt(this.value);
    opacityValue.textContent = this.value + '%';
    updatePreview();

    fetch(`https://${GetParentResourceName()}/setCrosshair`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    }).catch(error => {
      console.error('Ayar değişikliği kaydedilemedi:', error);
    });
  });

  const rotationSlider = document.getElementById('rotationSlider');
  const rotationValue = document.getElementById('rotationValue');
  
  rotationSlider.addEventListener('input', function() {
    userSettings.rotation = parseInt(this.value);
    rotationValue.textContent = this.value + '°';
    updatePreview();

    fetch(`https://${GetParentResourceName()}/setCrosshair`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    }).catch(error => {
      console.error('Ayar değişikliği kaydedilemedi:', error);
    });
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

  const basePresets = [];  

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

    let previewHTML = '';
    
    if (preset.url.startsWith('<svg')) {

      previewHTML = `
        <div class="preset-crosshair-container">
          ${preset.url}
        </div>`;
    } else if (preset.url.startsWith('data:image/svg+xml;')) {

      previewHTML = `
        <div class="preset-crosshair-container">
          <img src="${preset.url}" alt="${preset.name}" style="width:100%; height:100%;" />
        </div>`;
    } else {

      previewHTML = `
        <div class="preset-crosshair-container">
          <img src="${preset.url}" alt="${preset.name}" style="width:100%; height:100%;" />
        </div>`;
    }
    
    presetElement.innerHTML = `
      ${previewHTML}
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
    favorites = []; 
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

    let previewContent = '';
    if (fav.url) {
      if (fav.url.startsWith('<svg')) {

        previewContent = `<div class="favorite-preview-svg">${fav.url}</div>`;
      } else if (fav.url.startsWith('data:image/svg+xml;')) {

        previewContent = `<div class="favorite-preview" style="background-image: url('${fav.url}')"></div>`;
      } else {

        previewContent = `<div class="favorite-preview" style="background-image: url('${fav.url}')"></div>`;
      }
    }
    
    favElement.innerHTML = `
      ${previewContent}
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

function validateUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const cleanUrl = url.trim().replace(/\n/g, '');

  if (cleanUrl.length > 5000) {
    return false;
  }
  

  if (cleanUrl.startsWith('<svg') || cleanUrl.startsWith('data:image/svg+xml;')) {
    return cleanUrl;
  }

  return cleanUrl;
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

  if (validUrl.startsWith('<svg') || validUrl.startsWith('data:image/svg+xml;')) {
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

function addToFavorites() {
  const favName = document.getElementById('favoriteNameInput')?.value || `Favori ${favorites.length + 1}`;
  const currentUrl = userSettings.url;

  const validUrl = validateUrl(currentUrl);
  if (!validUrl) {
    showNotification('Geçerli bir crosshair URL\'si mevcut değil', 'warning');
    return;
  }

  if (validUrl.startsWith('<svg') || validUrl.startsWith('data:image/svg+xml;')) {
    const newFavorite = {
      name: favName,
      url: validUrl,
      size: userSettings.size,
      opacity: userSettings.opacity,
      rotation: userSettings.rotation
    };
    
    favorites.push(newFavorite);
    localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
    
    renderFavorites();

    if (document.getElementById('favoriteNameInput')) {
      document.getElementById('favoriteNameInput').value = '';
    }

    showNotification('Favori başarıyla eklendi!', 'success');
    return;
  }
  const img = new Image();
  img.onload = function() {
    const newFavorite = {
      name: favName,
      url: validUrl,
      size: userSettings.size,
      opacity: userSettings.opacity,
      rotation: userSettings.rotation
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

function applyFavorite(index) {
  const favorite = favorites[index];
  if (!favorite) return;

  const validUrl = validateUrl(favorite.url);
  if (!validUrl) {
    showNotification('Geçersiz crosshair URL\'si', 'error');
    return;
  }

  favorite.url = validUrl;
  userSettings = {
    url: favorite.url,
    size: favorite.size || userSettings.size,
    opacity: favorite.opacity || userSettings.opacity,
    rotation: favorite.rotation || userSettings.rotation
  };

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

  switchTab('settings');
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

    if (isSvgImage(userSettings.url)) {
      try {
        let svg = '';
        let newSvgUrl = '';

        if (userSettings.url.startsWith('<svg')) {

          svg = userSettings.url;

          newSvgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        } 
        else if (userSettings.url.startsWith('data:image/svg+xml;base64,')) {

          svg = atob(userSettings.url.split(',')[1] || userSettings.url.split('base64,')[1]);
          newSvgUrl = userSettings.url;
        }
        else if (userSettings.url.startsWith('data:image/svg+xml;')) {

          newSvgUrl = userSettings.url;
        } 
        else if (userSettings.url.endsWith('.svg') || userSettings.url.includes('.svg')) {

          fetch(userSettings.url)
            .then(response => response.text())
            .then(svgContent => {
              const newSvgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent);
              userSettings.url = newSvgUrl;
              updateSVGDisplay(newSvgUrl, crosshairImage, allPreviews);
            })
            .catch(error => {
              console.error('SVG fetch error:', error);
            });
          return;
        }
        
        if (newSvgUrl) {
          userSettings.url = newSvgUrl;
          updateSVGDisplay(newSvgUrl, crosshairImage, allPreviews);
        }
      } catch (e) {
        console.error('SVG processing error:', e);
      }
    } else {

      updateNormalDisplay(crosshairImage, allPreviews);
    }
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


function updateSVGDisplay(svgUrl, crosshairImage, allPreviews) {

  if (crosshairImage) {
    crosshairImage.src = svgUrl;
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
    
    previewElement.style.backgroundImage = `url('${svgUrl}')`;
    previewElement.style.backgroundPosition = "center";
    previewElement.style.backgroundRepeat = "no-repeat";
    previewElement.style.backgroundSize = "contain";
    previewElement.style.width = `${userSettings.size}px`;
    previewElement.style.height = `${userSettings.size}px`;
    previewElement.style.opacity = userSettings.opacity / 100;
    previewElement.style.transform = `rotate(${userSettings.rotation}deg)`;
  });
}

function updateNormalDisplay(crosshairImage, allPreviews) {
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
    previewElement.style.backgroundPosition = "center";
    previewElement.style.backgroundRepeat = "no-repeat";
    previewElement.style.backgroundSize = "contain";
    previewElement.style.width = `${userSettings.size}px`;
    previewElement.style.height = `${userSettings.size}px`;
    previewElement.style.opacity = userSettings.opacity / 100;
    previewElement.style.transform = `rotate(${userSettings.rotation}deg)`;
  });
}

function isSvgImage(url) {
  if (!url) return false;
  return url.startsWith('data:image/svg+xml;base64,') || 
         url.startsWith('<svg') ||
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
    const presetUrl = activeThumbnail.getAttribute('data-url') || '';

    const validUrl = validateUrl(presetUrl);
    if (!validUrl) {
      showNotification('Geçersiz preset URL formatı', 'error');
      return;
    }
    
    userSettings.url = validUrl;
    document.getElementById('urlInput').value = userSettings.url;

    updatePreview();

    switchTab('settings');

    fetch(`https://${GetParentResourceName()}/setCrosshair`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    }).catch(error => {
      console.error('Preset uygulama hatası:', error);
      showNotification('Preset uygulanırken hata oluştu', 'error');
    });
    
    showNotification('Crosshair seçildi.', 'info');
  }
}

function saveSettings() {
  const sizeValue = parseInt(document.getElementById('sizeSlider').value);
  const opacityValue = parseInt(document.getElementById('opacitySlider').value);
  const rotationValue = parseInt(document.getElementById('rotationSlider').value);

  userSettings.size = sizeValue;
  userSettings.opacity = opacityValue;
  userSettings.rotation = rotationValue;

  updatePreview();
  
  setTimeout(function() {

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
  }, 100);
}

function removeFavorite(index) {
  favorites.splice(index, 1);
  localStorage.setItem('crosshairFavorites', JSON.stringify(favorites));
  
  renderFavorites();
  showNotification('Favori silindi', 'info');
} 