/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

// import casheImages from './casheImages';

import interactiveGame from './interactiveGame';

document.addEventListener('DOMContentLoaded', () => {  
  var AudioSynth = require('audiosynth');

  
  // casheImages();  
  interactiveGame(); 
  
  // var AudioContext = window.AudioContext || window.webkitAudioContext;
  // var context = new AudioContext();
  // var Synth = new AudioSynth(context);
  // Synth.setOscWave(0); // Sine Wave
  // Synth.setOscWave(1); // Square Wave
  // Synth.setOscWave(2); // Sawtooth Wave
  // Synth.setOscWave(3); // Triangle Wave
  // // function(MIDINote, amplitude, filterOffset, currentTime)
  // Synth.playNote(69, 1.0, 1.0, 0);
  // // Set notes using traditional note names
  // Synth.playNote(Synth.noteToMIDI('A', 4), 1.0, 1.0, 0);
  // var piano = Synth.createInstrument('piano');
  // piano.play('C', 4, 2);

});


if (module.hot) {
  module.hot.accept();
}
