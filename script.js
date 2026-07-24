// ============================================
// DỮ LIỆU GỐC — 135 nguyên tố (đã cập nhật với gradient đa-tầng)
// ============================================
const SEED = {
    "Fire": ["#f6290c", "#fb6143"],
    "Gamma-Ray": ["#d0010c", "#ff5b48"],
    "Malware": ["#56092e", "#942544", "#ef646a"],
    "Lava": ["#db0303", "#f26b1d", "#eb4b06"],
    "Fireworks": ["#fa7306", "#f2b134", "#ff6472"],
    "Virus": ["#fb6e01", "#d42b4d", "#b40f67"],
    "Demon": ["#fd7a03", "#b23205", "#630709"],
    "Equinox": ["#c10001", "#e65c00", "#f29a0d"],
    "Ribbon": ["#db0504", "#f46a2a", "#ffd043"],
    "Treasurefire": ["#fa410b", "#c2810a", "#745a0a"],
    "Coded Void": ["#340d0a", "#7d4807", "#e2a50a"],
    "Eclipse": ["#7d4005", "#c45c3b", "#fe8579"],
    "Inferno": ["#f9d290", "#e87b61", "#81313e"],
    "Vampire": ["#8a0406", "#4e3a4e", "#979797"],
    "Peppermint": ["#f5c0c2", "#fa7d82", "#f82f31"],
    "Campfire Tales": ["#fb7267", "#be4a50", "#8f313a"],
    "Pumpkin Spice": ["#edae9f", "#e6bc9c", "#e1aaa8"],
    "Sun": ["#fcc30b", "#f88427", "#ff4d48"],
    "Thorned Apple": ["#ffa554", "#e8dbae", "#fefff6"],
    "Solar Winds": ["#f86c02", "#f5b70a", "#f7e213"],
    "Honey": ["#fbb806", "#fbc822", "#fb9e3e"],
    "Lightning": ["#fff2a5", "#f9c668", "#f2932f"],
    "Gold": ["#feeea9", "#f5be4f", "#da8509"],
    "Gold Coin": ["#f5cf5c", "#fae390", "#fdf8c1"],
    "Film star": ["#f5c035", "#f9de81", "#fef9cd"],
    "Maple": ["#f57b4b", "#f0a235", "#e48722"],
    "Messier": ["#a95040", "#d18e4f", "#f9cd63"],
    "Pan Dulce": ["#752f0c", "#a67342", "#d8c681"],
    "Fossil": ["#5e5045", "#92806b", "#c7ae90"],
    "Auspicious Clouds": ["#372d22", "#947a5b", "#fbce97"],
    "Egged": ["#e0c729", "#cea979", "#ba8d61"],
    "Cat Toys": ["#f6dfc5", "#dba281", "#be8568"],
    "Explorer": ["#e8c26d", "#d8a363", "#c98a5d"],
    "Ashfall": ["#44302b", "#8f6c55", "#dba97f"],
    "Chocolate": ["#511b1b", "#8e645d", "#cab29f"],
    "Battle": ["#873906", "#7e622b", "#756f51"],
    "Warrior": ["#793f0a", "#7c5a35", "#807663"],
    "Drill": ["#312c17", "#6e5e3d", "#ac9023"],
    "Divine Essence": ["#d1cab1", "#e4c771", "#f8c136"],
    "Tungsten": ["#61641a", "#b0ae53", "#fff88b"],
    "Shooting Star": ["#fcdab3", "#f9bfa0", "#f7a68f"],
    "Angel": ["#f6e38a", "#fadbaf", "#fdd8cc"],
    "Light": ["#faf2b3", "#fef8d6", "#fef4bf"],
    "Dandelion": ["#f7df4c", "#aade5e", "#e1ef6f"],
    "Grass": ["#1b953e", "#1c923f", "#1f9041"],
    "Life": ["#05e827", "#1be334", "#34df41"],
    "Clover": ["#006901", "#039e05", "#06d70a"],
    "Biohazard": ["#bdf608", "#84aa1d", "#4b7331"],
    "Binary": ["#a6e702", "#77c427", "#4aa64c"],
    "Shockwave": ["#ecf6d2", "#d4eebd", "#bdef90"],
    "Zephyr": ["#fcfffa", "#d7ffd3", "#b6fdac"],
    "Lucky Gold": ["#037f0a", "#7aae30", "#ffdc57"],
    "Carrot": ["#fd8b00", "#cda30a", "#9bbb15"],
    "Verdant": ["#ffc554", "#a8a954", "#588d6b"],
    "Moss": ["#7ec844", "#7ad06d", "#78d996"],
    "Corrosive": ["#5e6d48", "#2fa566", "#03de89"],
    "Deepwood": ["#362924", "#1b925b", "#03fc91"],
    "Toxic": ["#00dd07", "#688da5", "#d03dd3"],
    "Poison Field": ["#99ce7a", "#a2a8a7", "#aa83d9"],
    "Pulsar": ["#0c8672", "#47bdab", "#83f5d7"],
    "Paint": ["#1dc59a", "#62e2b4", "#a5ffce"],
    "Ghost": ["#92fcca", "#4ac4a7", "#028c84"],
    "Ocean": ["#03f4f7", "#0897f5", "#0cf1f8"],
    "Icicle": ["#6786b5", "#8aaabf", "#accfe3"],
    "Ice": ["#8be0f8", "#53eab9", "#1bf4df"],
    "Water": ["#216ace", "#468be6", "#6ba8f5"],
    "Storm": ["#0b2f4c", "#527692", "#99c3db"],
    "Subzero": ["#1d3858", "#558db0", "#8de4e0"],
    "Runic Waters": ["#2b859b", "#5698a9", "#82acb7"],
    "Moonward": ["#243949", "#7c8ea5", "#d3e2f6"],
    "Deep Sea": ["#2173a7", "#417bcfa", "#6285b7"],
    "Frostbite": ["#085b98", "#5798cc", "#a7d5fe"],
    "Soulflame": ["#c3f8ff", "#7890bc", "#2a2377"],
    "Starlight": ["#2b3680", "#2a4ebd", "#2966ff"],
    "Death": ["#060921", "#03114f", "#00197d"],
    "Snowflake": ["#d0a0ca", "#aec5e4", "#89caff"],
    "Air": ["#dbdbd9", "#bfe6e4", "#a3f6ee"],
    "Superheated": ["#ad6b78", "#b7a5aa", "#c1dfde"],
    "Sunswept Sea": ["#74a8e4", "#bac8b9", "#ffe894"],
    "Diamond": ["#50ade4", "#70bfcb", "#90d1ad"],
    "Moon": ["#4764bc", "#8c9cd3", "#d1d5ea"],
    "Dream": ["#cbf0fb", "#b4c6e0", "#9ca2c6"],
    "Scythe": ["#b0ebf7", "#c3a3cb", "#d65c9e"],
    "Aurora Borealis": ["#00c9f2", "#59bccd", "#b2afe9"],
    "Laser": ["#9e97f9", "#aec3f9", "#bfe1fa"],
    "Bubble": ["#6c82f3", "#a6bffa", "#e0fcf7"],
    "Cotton": ["#e3fcff", "#ece8ec", "#f6d7fc"],
    "Sakura": ["#bbe3fa", "#c4d6f4", "#c8c9ef"],
    "Debug": ["#8db3fc", "#abcbff", "#c9b1d5"],
    "BlueFire": ["#1462d0", "#8775d1", "#fb8bd3"],
    "Plasma": ["#d32cbd", "#b335d2", "#9340d7"],
    "Obsession": ["#6916b8", "#b01e93", "#f7276f"],
    "Abyss": ["#120f59", "#29067a", "#41049b"],
    "Lunaris": ["#1e0468", "#2f02a4", "#4101e1"],
    "Celestial": ["#8c3cf2", "#5b25ce", "#280eab"],
    "Antimatter": ["#9756c9", "#be6cdb", "#e581ee"],
    "Dragonseer": ["#5e3e96", "#8a6ab6", "#b696d3"],
    "Fear": ["#503268", "#a471b8", "#f9aeff"],
    "Pixie": ["#541c91", "#a362b0", "#f3a9ce"],
    "Obsidian": ["#672269", "#7a3770", "#8d4d77"],
    "Stygian": ["#2e2232", "#4e2e47", "#6d395d"],
    "Targeting System": ["#10111a", "#3f3b4d", "#6e667f"],
    "Dark": ["#463d57", "#323551", "#1e2e4b"],
    "Gilded Moon": ["#342b63", "#987881", "#fdc59f"],
    "Orbit": ["#4d0b7a", "#a5654f", "#fdbf25"],
    "Nightshade": ["#63378d", "#aa6c36", "#f1a785"],
    "Opulence": ["#021f5c", "#2e1a5a", "#6b1b59", "#b32a52", "#9a4053"],
    "Sugar": ["#7efed3", "#b9f4bd", "#f8daa7"],
    "Love": ["#fe81d6", "#f491e4", "#e6a2f7"],
    "Chocolate Strawberry": ["#8d0006", "#c33149", "#fa638d"],
    "Prickly Rose": ["#960a2c", "#6f3e36", "#497940"],
    "Holly Berry": ["#d03963", "#a98275", "#82cc8c"],
    "Wraith": ["#2b9bd1", "#4588d7", "#5f75dd"],
    "Vivid Bloom": ["#d664ac", "#b464d0", "#9264f5"],
    "JellyBean": ["#38afc5", "#7da5c3", "#c1a2ac"],
    "WitchBrew": ["#70ed83", "#80afae", "#912fd9"],
    "Tempest": ["#f7ce00", "#76ab72", "#6f87e5"],
    "Time": ["#302fc1", "#916e88", "#f2ad50"],
    "Magister": ["#035491", "#667451", "#ca9412"],
    "Relic": ["#6194ab", "#a4a889", "#e8bd67"],
    "Aspect": ["#ffbf53", "#b79a6a", "#707883"],
    "Seashell": ["#b0e3db", "#bca56a", "#c68b54"],
    "Opal": ["#a59ac0", "#88c6a5", "#6cf98c"],
    "Rainbow": ["#f6290c", "#fbd43d", "#38cf5d", "#38ccf5", "#b2afe9"],
    "Christmas": ["#e31920", "#82c64e", "#21b37b"],
    "Confetti": ["#38cf5d", "#9ccf32", "#ff6b07"],
    "Eternal": ["#ee9165", "#8ab486", "#25d8a7"],
    "Floral": ["#f3a245", "#c38f6e", "#937c98"],
    "Classic": ["#933048", "#987e54", "#9fcc61"],
    "Chitin": ["#080744", "#627251", "#badc5f"],
    "Bone": ["#e2d8c4", "#c5bd94", "#a8a29d"],
    "Melody": ["#cbc9c5", "#a29f99", "#797570"],
    "War Cry": ["#f8fcff", "#d4d8e4", "#b0b5bf"],
    "Metal": ["#c5c5c5", "#949697", "#68676c"],
    "Nightmare": ["#151515", "#444444", "#747474"]
};

const STORAGE_KEY = "color-chart-data";

let state = { elements: {}, order: [], deleted: [] };
let sortMode = 'alpha';
let editingName = null;
let selectedColor = null;

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const overlay = document.getElementById('overlay');
const toastEl = document.getElementById('toast');
const detailPanel = document.getElementById('detailPanel');
const detailGradient = document.getElementById('detailGradient');
const detailInfo = document.getElementById('detailInfo');

function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(()=>toastEl.classList.remove('show'), 1800);
}

function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      state.elements = parsed.elements || {};
      state.order = parsed.order || [];
      state.deleted = parsed.deleted || [];
    }
  }catch(e){
    console.error('Không đọc được dữ liệu đã lưu:', e);
  }
  render();
}

function persist(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }catch(e){
    showToast('⚠️ Lỗi khi lưu, thử lại nhé');
  }
}

function getAllEntries(){
  const combined = {};
  const seedNames = Object.keys(SEED);
  seedNames.forEach(n=>{
    if(state.deleted.includes(n)) return;
    combined[n] = state.elements[n] || SEED[n];
  });
  Object.keys(state.elements).forEach(n=>{
    if(!seedNames.includes(n) && !state.deleted.includes(n)){
      combined[n] = state.elements[n];
    }
  });
  return combined;
}

function isCustom(name){
  return !SEED.hasOwnProperty(name) || state.elements.hasOwnProperty(name);
}

// Tạo gradient CSS từ mảy màu (cho detail-info)
function createGradient(colors){
  if(!colors || colors.length === 0) return 'linear-gradient(90deg, #000, #fff)';
  if(colors.length === 1) return colors[0];
  
  const stops = colors.map((c, i) => {
    const percent = (i / (colors.length - 1)) * 100;
    return `${c} ${percent}%`;
  });
  return `linear-gradient(90deg, ${stops.join(', ')})`;
}

// Hàm interpolate màu (chuyển đổi từ màu A sang màu B)
function interpolateColor(c1, c2, ratio){
  const hex2rgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };
  
  const rgb2hex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  
  const rgb1 = hex2rgb(c1);
  const rgb2 = hex2rgb(c2);
  
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * ratio);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * ratio);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * ratio);
  
  return rgb2hex(r, g, b);
}

function showDetailPanel(name, colors){
  selectedColor = name;
  
  // Tạo màu trung gian để animation mượt hơn
  const interpolatedColors = [];
  const stepsPerSegment = 10; // Số bước giữa mỗi cặp màu
  
  for(let i = 0; i < colors.length; i++){
    interpolatedColors.push(colors[i]);
    
    if(i < colors.length - 1){
      const c1 = colors[i];
      const c2 = colors[i + 1];
      
      // Tạo màu trung gian từ c1 đến c2
      for(let step = 1; step < stepsPerSegment; step++){
        const ratio = step / stepsPerSegment;
        const interpolated = interpolateColor(c1, c2, ratio);
        interpolatedColors.push(interpolated);
      }
    }
  }
  
  // Tạo keyframes animation động
  const keyframes = interpolatedColors.map((c, i) => {
    const percent = (i / interpolatedColors.length) * 100;
    return `${percent}% { background: ${c}; }`;
  }).join('\n');
  
  const fullKeyframes = `@keyframes colorShift_${name.replace(/\s+/g, '_')} {
    ${keyframes}
    100% { background: ${colors[0]}; }
  }`;
  
  // Inject CSS động
  let style = document.getElementById('dynamicKeyframes');
  if(style) style.remove();
  style = document.createElement('style');
  style.id = 'dynamicKeyframes';
  style.textContent = fullKeyframes;
  document.head.appendChild(style);
  
  // Apply animation
  detailGradient.style.background = colors[0];
  detailGradient.style.animation = 'none';
  void detailGradient.offsetWidth;
  const animationName = `colorShift_${name.replace(/\s+/g, '_')}`;
  const duration = interpolatedColors.length * 0.25; // Mỗi bước 250ms
  detailGradient.style.animation = `${animationName} ${duration}s steps(${interpolatedColors.length}, end) infinite`;
  
  // Hiển thị tên với gradient
  const gradient = createGradient(colors);
  detailInfo.innerHTML = `<div class="detail-name" style="background:${gradient}; -webkit-background-clip:text; background-clip:text; color:transparent;">${escapeHtml(name)}</div>`;
  
  // Highlight card được chọn
  document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
  const selectedCard = Array.from(document.querySelectorAll('.card')).find(card => card.dataset.name === name);
  if(selectedCard) selectedCard.classList.add('active');
}

function render(){
  const all = getAllEntries();
  let names = Object.keys(all);

  const q = searchInput.value.trim().toLowerCase();
  if(q) names = names.filter(n => n.toLowerCase().includes(q));

  if(sortMode === 'alpha'){
    names.sort((a,b)=>a.localeCompare(b));
  } else {
    const ordered = [...state.order].reverse().filter(n=>names.includes(n));
    const rest = names.filter(n=>!ordered.includes(n)).sort((a,b)=>a.localeCompare(b));
    names = [...ordered, ...rest];
  }

  document.getElementById('totalCount').textContent = Object.keys(all).length;

  grid.innerHTML = '';
  document.getElementById('emptyState').style.display = names.length === 0 ? 'block' : 'none';

  names.forEach(name=>{
    const colors = all[name];
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.name = name;
    
    const gradient = createGradient(colors);
    card.innerHTML = `
      ${isCustom(name) ? '<div class="custom-tag">CỦA BẠN</div>' : ''}
      <div class="swatch" style="background:${gradient};"></div>
      <div class="ename">${escapeHtml(name)}</div>
    `;
    card.addEventListener('click', ()=>showDetailPanel(name, colors));
    grid.appendChild(card);
  });

  if(selectedColor){
    const selectedCard = Array.from(document.querySelectorAll('.card')).find(card => card.dataset.name === selectedColor);
    if(selectedCard) selectedCard.classList.add('active');
  }
}

function escapeHtml(s){
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function openAdd(){
  editingName = null;
  document.getElementById('modalTitle').textContent = 'Thêm nguyên tố';
  document.getElementById('fName').value = '';
  document.getElementById('fColor1').value = '#ff5fb8';
  document.getElementById('fColor1Text').value = '#ff5fb8';
  document.getElementById('fColor2').value = '#7c5cff';
  document.getElementById('fColor2Text').value = '#7c5cff';
  document.getElementById('deleteBtn').style.display = 'none';
  updatePreview();
  overlay.classList.add('show');
  document.getElementById('fName').focus();
}

function openEdit(name, colors){
  editingName = name;
  document.getElementById('modalTitle').textContent = 'Sửa nguyên tố';
  document.getElementById('fName').value = name;
  document.getElementById('fColor1').value = colors[0];
  document.getElementById('fColor1Text').value = colors[0];
  document.getElementById('fColor2').value = colors[colors.length - 1];
  document.getElementById('fColor2Text').value = colors[colors.length - 1];
  document.getElementById('deleteBtn').style.display = 'block';
  updatePreview();
  overlay.classList.add('show');
}

function closeModal(){
  overlay.classList.remove('show');
}

function updatePreview(){
  const c1 = document.getElementById('fColor1Text').value;
  const c2 = document.getElementById('fColor2Text').value;
  document.getElementById('previewBar').style.background = `linear-gradient(90deg, ${c1}, ${c2})`;
}

document.getElementById('fColor1').addEventListener('input', e=>{
  document.getElementById('fColor1Text').value = e.target.value;
  updatePreview();
});
document.getElementById('fColor2').addEventListener('input', e=>{
  document.getElementById('fColor2Text').value = e.target.value;
  updatePreview();
});
document.getElementById('fColor1Text').addEventListener('input', e=>{
  if(/^#[0-9a-fA-F]{6}$/.test(e.target.value)) document.getElementById('fColor1').value = e.target.value;
  updatePreview();
});
document.getElementById('fColor2Text').addEventListener('input', e=>{
  if(/^#[0-9a-fA-F]{6}$/.test(e.target.value)) document.getElementById('fColor2').value = e.target.value;
  updatePreview();
});

document.getElementById('addBtn').addEventListener('click', openAdd);
document.getElementById('closeModal').addEventListener('click', closeModal);
overlay.addEventListener('click', e=>{ if(e.target === overlay) closeModal(); });

document.getElementById('saveBtn').addEventListener('click', ()=>{
  const name = document.getElementById('fName').value.trim();
  const c1 = document.getElementById('fColor1Text').value;
  const c2 = document.getElementById('fColor2Text').value;

  if(!name){ showToast('⚠️ Nhập tên nguyên tố đã'); return; }
  if(!/^#[0-9a-fA-F]{6}$/.test(c1) || !/^#[0-9a-fA-F]{6}$/.test(c2)){
    showToast('⚠️ Mã màu không hợp lệ'); return;
  }

  if(editingName && editingName !== name){
    delete state.elements[editingName];
    if(SEED.hasOwnProperty(editingName) && !state.deleted.includes(editingName)){
      state.deleted.push(editingName);
    }
    state.order = state.order.filter(n=>n!==editingName);
  }

  state.elements[name] = [c1, c2];
  if(!state.order.includes(name)) state.order.push(name);
  state.deleted = state.deleted.filter(n=>n!==name);

  persist();
  render();
  closeModal();
  showToast(editingName ? '✓ Đã cập nhật' : '✓ Đã thêm nguyên tố mới');
});

document.getElementById('deleteBtn').addEventListener('click', ()=>{
  if(!editingName) return;
  if(!confirm(`Xoá "${editingName}" khỏi danh sách?`)) return;

  delete state.elements[editingName];
  state.order = state.order.filter(n=>n!==editingName);
  if(SEED.hasOwnProperty(editingName) && !state.deleted.includes(editingName)){
    state.deleted.push(editingName);
  }

  persist();
  render();
  closeModal();
  showToast('🗑️ Đã xoá');
});

searchInput.addEventListener('input', render);

document.querySelectorAll('.chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    sortMode = chip.dataset.sort;
    render();
  });
});

loadData();