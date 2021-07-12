const interactiveGame = () => {  
  const resolveGameTop = (event) => {
    const tg1Btn = event.target.closest('[data-id="tg1-btn"]');    
    if(tg1Btn){
      tg1Btn.classList.toggle('active');
    }    
  }
  document.querySelector('.js-game-top').addEventListener('click', resolveGameTop);

  var AudioSynth = require('audiosynth');
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
  var synth = new AudioSynth(context);
  // Default oscillator wave is sawtooth
  // synth.setOscWave(0); // Sine Wave
  // synth.setOscWave(1); // Square Wave
  synth.setOscWave(2); // Sawtooth Wave
  // synth.setOscWave(3); // Triangle Wave
  const resolveGameMedium = (event) => {    
    const g3Btn = event.target.closest('[data-id="g3-btn"]');
    if(g3Btn){ 
      // function(MIDINote, amplitude, filterOffset, currentTime)
      // synth.playNote(69, 1.0, 1.0, 0);
      // Turn up stereo delay
      synth.setDelayFeedback(0.1);
      // Set delay time to tempo
      synth.setDelayTimeTempo(110, 0.25);
      // (MIDINote, amplitude, filterOffset, currentTime)         
      synth.playNote(synth.noteToMIDI(g3Btn.dataset.note||'C', 4), 1.0, 1.0, 0);   
      // Set filter cuttoff
      synth.setFilterCutoff(0.2);
      // Increase amplitude release time
      synth.setAmpReleaseTime(0.7);
      // Set filter envelope modulation amount
      synth.setFilterEnvMod(0.8);
      // Set filter attack time
      synth.setFilterAttackTime(0.6);      
    }
  }  
  document.querySelector('.js-game-medium').addEventListener('click', resolveGameMedium);
}

export default interactiveGame;