const interactiveGame = () => {  
  const resolveGameTop = (event) => {
    const tg1Btn = event.target.closest('[data-id="tg1-btn"]');
    if(tg1Btn){
      tg1Btn.classList.toggle('active');
    }
  }
  document.querySelector('.js-game-top').addEventListener('click', resolveGameTop);
}

export default interactiveGame;