/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

// import casheImages from './casheImages';
import interactiveGame from './interactiveGame';
import './audiosynth.js';
document.addEventListener('DOMContentLoaded', () => {  
  // casheImages();  
  interactiveGame();  
});


if (module.hot) {
  module.hot.accept();
}
