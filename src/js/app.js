/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

import casheImages from './casheImages';



document.addEventListener('DOMContentLoaded', () => {
  console.log("code is ready");
  casheImages();  
});


if (module.hot) {
  module.hot.accept();
}
