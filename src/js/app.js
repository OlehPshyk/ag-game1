// import casheImages from './casheImages';
import interactiveGame from './interactiveGame';
import modalJs from './modalJs';
document.addEventListener('DOMContentLoaded', () => { 
  // casheImages();    
  interactiveGame();
  modalJs();
});
if (module.hot) {
  module.hot.accept();
}
