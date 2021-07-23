const interactiveCdb = () => { 
  if(document.body.clientWidth>=576){
    const resolveCdbTop = (event) => {
      const tg1Btn = event.target.closest('[data-id="tg1-btn"]');    
      if(tg1Btn){
        tg1Btn.classList.toggle('active');
      }    
    }
    let topCdb = document.querySelector('.js-cdb-top');
    topCdb&&topCdb.addEventListener('click', resolveCdbTop);
    const attentionLamp = document.querySelector('[data-attention-lamp]');
    const activateAttentionLamp = () => {
      if(attentionLamp){
        attentionLamp.classList.toggle('active');
      }
    }
    setInterval(activateAttentionLamp, 1000);
    const hoverLinks = document.querySelectorAll('[data-hover-link]');
    const activateLamp = (e) => {
      document.querySelector(`[data-link-lamp="${e.target.dataset.hoverLink}"]`).classList.add('active');
    }
    const deactivateLamp = (e) => {
      document.querySelector(`[data-link-lamp="${e.target.dataset.hoverLink}"]`).classList.remove('active');
    }  
    [...hoverLinks].map(el=>el.addEventListener("mouseover", activateLamp));
    [...hoverLinks].map(el=>el.addEventListener("focus", activateLamp));
    [...hoverLinks].map(el=>el.addEventListener("mouseleave", deactivateLamp));
    [...hoverLinks].map(el=>el.addEventListener("blur", deactivateLamp));
    const g2Btn = document.querySelector('.js-g2-btn');
    if(g2Btn){
      const toggleG2BtnHover  = () => {
        g2Btn.classList.toggle('hover');
      }
      setTimeout(toggleG2BtnHover,1000);
      setInterval(toggleG2BtnHover, 5000);
    }
    var AudioSynth = require('audiosynth');
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    var synth = new AudioSynth(context);  
    synth.setOscWave(3);
    const resolveCdbMedium = (event) => {    
      const g3Btn = event.target.closest('[data-id="g3-btn"]');
      if(g3Btn){
        synth.setDelayFeedback(0.2);     
        synth.setDelayTimeTempo(110, 0.25);
        synth.setFilterCutoff(0.2);     
        synth.setAmpReleaseTime(0.9);
        synth.setFilterEnvMod(0.8);
        synth.setFilterAttackTime(0.9);      
        synth.playNote(synth.noteToMIDI(g3Btn.dataset.note||'C', 3), 1.0, 1.0, 0); 
      }
    }
    let mediumCdb = document.querySelector('.js-cdb-medium');
    mediumCdb&&mediumCdb.addEventListener('mousedown', resolveCdbMedium);  
  }  
}

export default interactiveCdb;