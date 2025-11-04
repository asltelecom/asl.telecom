
// Minimal JS for interactivity
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if(hamburger){
  hamburger.addEventListener('click',()=>{
    if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
    nav.style.flexDirection='column';
  })
}

function checkCoverage(e){
  e && e.preventDefault();
  const addr = document.getElementById('addr') ? document.getElementById('addr').value : (document.getElementById('address') ? document.getElementById('address').value : '');
  const out = document.getElementById('coverage-response') || document.getElementById('coverage-result');
  if(!addr){ out && (out.textContent='Informe um endereço para verificar.'); return }
  // Simulação de verificação — substituir por chamada real ao seu backend
  out && (out.textContent='Verificando disponibilidade...');
  setTimeout(()=>{
    // regra simples de demo: se contém número par, tem cobertura (só para demo)
    const digits = addr.replace(/[^0-9]/g,'');
    const has = digits && (parseInt(digits.slice(-1)) % 2 === 0);
    out.textContent = has ? 'Boa notícia — já atendemos nessa região! Entre no WhatsApp para contratar.' : 'No momento não atendemos nesse endereço. Clique em WhatsApp para solicitar inclusão.';
  },900)
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  if(window.innerWidth<980) document.getElementById('nav').style.display='none';
}))
// Menu hamburguer responsivo
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('active');
});
