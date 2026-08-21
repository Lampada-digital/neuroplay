const NPAccess={
  init(){this.apply();this.createPanel()},
  apply(){
    const s=NPStorage.getAccess();
    document.body.classList.toggle('high-contrast',s.highContrast);
    document.body.classList.toggle('large-buttons',s.largeButtons);
    document.body.classList.toggle('large-font',s.largeFont);
    document.body.classList.toggle('reduce-motion',s.reduceMotion);
  },
  update(k,v){const s=NPStorage.getAccess();s[k]=v;NPStorage.setAccess(s);this.apply()},
  createPanel(){
    const p=document.createElement('div');
    p.className='accessibility-panel';
    p.innerHTML='<button class="accessibility-toggle" id="accToggle" aria-label="Acessibilidade">♿</button><div class="accessibility-menu" id="accMenu"><h3 style="margin-bottom:1rem">Acessibilidade</h3>'+this.opt('highContrast','Alto contraste')+this.opt('largeButtons','Botões grandes')+this.opt('largeFont','Fonte maior')+this.opt('reduceMotion','Reduzir animações')+this.opt('sound','Sons')+this.opt('speech','Narração')+'</div>';
    document.body.appendChild(p);
    document.getElementById('accToggle').addEventListener('click',()=>document.getElementById('accMenu').classList.toggle('open'));
    document.querySelectorAll('.acc-switch').forEach(sw=>sw.addEventListener('change',e=>this.update(e.target.dataset.setting,e.target.checked)));
  },
  opt(k,l){const s=NPStorage.getAccess();return '<div class="accessibility-option"><span>'+l+'</span><label class="switch"><input type="checkbox" class="acc-switch" data-setting="'+k+'" '+(s[k]?'checked':'')+'><span class="slider"></span></label></div>'},
  playSound(t){
    const s=NPStorage.getAccess();if(!s.sound)return;
    try{const ctx=new (window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator();const g=ctx.createGain();o.connect(g);g.connect(ctx.destination);if(t==='success'){o.frequency.value=800;g.gain.value=.1}else if(t==='error'){o.frequency.value=200;g.gain.value=.1}else{o.frequency.value=500;g.gain.value=.05}o.start();setTimeout(()=>{o.stop();ctx.close()},150)}catch(e){}
  },
  speak(t){const s=NPStorage.getAccess();if(!s.speech||!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='pt-BR';u.rate=.9;window.speechSynthesis.speak(u)},
  feedback(t){
    const f=document.createElement('div');f.className='game-feedback';
    if(t==='success'){f.textContent='✨';this.playSound('success')}
    else if(t==='error'){f.textContent='❌';this.playSound('error')}
    else if(t==='star'){f.textContent='⭐';this.playSound('success')}
    document.body.appendChild(f);setTimeout(()=>f.remove(),800);
  },
  toast(msg,type){
    const t=document.createElement('div');t.className='toast toast-'+(type||'info');t.textContent=msg;
    document.body.appendChild(t);setTimeout(()=>t.remove(),3000);
  }
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>NPAccess.init());
else NPAccess.init();
window.NPAccess=NPAccess;