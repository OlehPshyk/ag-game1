// import casheImages from './casheImages';
import interactiveCdb from './interactiveCdb';
import modalJs from './modalJs';
document.addEventListener('DOMContentLoaded', () => { 
  // casheImages();    
  interactiveCdb();
  // if(document.getElementById('popup-1')) {
    modalJs();
  // }
});
if (module.hot) {
  module.hot.accept();
}
