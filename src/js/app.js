/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

// import casheImages from './casheImages';
import interactiveGame from './interactiveGame';
document.addEventListener('DOMContentLoaded', () => {  
  // casheImages();  
  interactiveGame();
});


if (module.hot) {
  module.hot.accept();
}
