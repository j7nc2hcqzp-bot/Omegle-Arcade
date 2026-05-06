const content = document.getElementById('main-content');

// Cargar inicio al abrir
window.onload = () => changeTab('inicio');

function changeTab(tab) {
  if (tab === 'inicio') {
    content.innerHTML = `
      <div class="card"><div class="card-banner"></div><div class="card-body">
      <div><b>Survival Técnico</b><br><small>👤 12/20</small></div>
      <button class="btn-join" onclick="alert('Conectando...')">UNIRSE</button></div></div>
      <div class="card"><div class="card-banner" style="filter:hue-rotate(45deg)"></div><div class="card-body">
      <div><b>Skywars Pro</b><br><small>👤 5/8</small></div>
      <button class="btn-join" onclick="alert('Conectando...')">UNIRSE</button></div></div>
    `;
  } 
  else if (tab === 'chat') {
    content.innerHTML = `
      <div class="chat-box">
        <div class="msg received"><b>Steve:</b> ¿Alguien para jugar?</div>
        <div class="msg sent"><b>Tú:</b> ¡Yo! Pasa el ID.</div>
      </div>
      <div style="display:flex; margin-top:10px;">
        <input type="text" style="flex:1; border-radius:20px; padding:10px; border:none;" placeholder="Mensaje...">
        <button style="background:none; border:none; font-size:20px; color:#ff6a00;">➔</button>
      </div>
    `;
  }
  else if (tab === 'tienda') {
    content.innerHTML = `
      <div class="grid">
        <div class="item"><div style="border:3px solid #ff4500; border-radius:50%; width:40px; height:40px; margin:auto;"></div>Fuego <span class="price">1k</span></div>
        <div class="item"><div style="border:3px solid #8a2be2; border-radius:50%; width:40px; height:40px; margin:auto;"></div>Galaxia <span class="price">2k</span></div>
      </div>
    `;
  }
  else if (tab === 'perfil') {
    content.innerHTML = `
      <div class="profile-card">
        <div class="gold-frame"><div class="avatar"></div></div>
        <h3>Gamer_Arcade</h3>
        <p style="color:#ff9d00">Nivel 50</p>
        <div style="display:flex; justify-content:space-around; font-size:12px;">
          <div><b>1.2k</b><br>Seguidores</div>
          <div><b>85</b><br>Mundos</div>
        </div>
      </div>
    `;
  }
}

function openActionMenu() {
  alert("Menú Omegle Arcade:\n1. Transmitir\n2. Grabar\n3. Publicar");
}
