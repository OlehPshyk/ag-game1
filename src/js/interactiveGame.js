var AudioSynth = require('audiosynth');
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var synth = new AudioSynth(context);
// Default oscillator wave is sawtooth
synth.setOscWave(0); // Sine Wave
synth.setOscWave(1); // Square Wave
synth.setOscWave(2); // Sawtooth Wave
synth.setOscWave(3); // Triangle Wave

const interactiveGame = () => {  
  const resolveGameTop = (event) => {
    const tg1Btn = event.target.closest('[data-id="tg1-btn"]');    
    if(tg1Btn){
      tg1Btn.classList.toggle('active');
    }    
  }
  const resolveGameMedium = (event) => {    
    const g3Btn = event.target.closest('[data-id="g3-btn"]');
    if(g3Btn){
      console.log("g3Btn"); 
      console.log("g3Btn note:",g3Btn.dataset.note);     
      synth.playNote(synth.noteToMIDI(g3Btn.dataset.note||'C', 4), 1.0, 1.0, 0);      
    }
  }
  document.querySelector('.js-game-top').addEventListener('click', resolveGameTop);
  document.querySelector('.js-game-medium').addEventListener('click', resolveGameMedium);
}

export default interactiveGame;