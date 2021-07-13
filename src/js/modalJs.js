import VanillaModal from 'vanilla-modal';
import Typewriter from 'typewriter-effect/dist/core';
const modalJs = () => {
   
  const qBtn = document.querySelectorAll('[data-q-ch]');
  const qInput = document.querySelector('[data-q]');  
  let inputValue = parseInt(qInput.value);
  if(inputValue === 0){
    qBtn[0].setAttribute('disabled', true);
  }else{
    qBtn[0].removeAttribute('disabled');
  }
  if(inputValue === 30){
    qBtn[1].setAttribute('disabled', true);
  }else{
    qBtn[1].removeAttribute('disabled');
  }
  const onOpenModal = () => {    
    let t1writer; 
    const endAnime = () => {
      document.querySelector('#m-t1').querySelector('.Typewriter__cursor').remove();
    }   

    t1writer = new Typewriter(document.getElementById('m-t1'), {
      loop: false,
      delay: 75,    
    });

    t1writer
      .pauseFor(500)
      .typeString('> Launch sequence initiated...<br><br>')
      .pauseFor(1000)
      .typeString('> System demands 0.052 Ξ<br><br>')    
      .pauseFor(1000)
      .typeString('> Please enter quantity')       
      .start()    
      .callFunction(endAnime);
  }
  
  const options = {
    modal: '.modal',
    modalInner: '.modal-inner',
    modalContent: '.modal-content',
    open: '[data-modal-open]',
    close: '[data-modal-close]',
    page: 'body',
    loadClass: 'vanilla-modal',
    class: 'modal-visible',
    clickOutside: true,
    closeKeys: [27],
    transitions: true,
    onBeforeOpen: null,
    onBeforeClose: null,
    onOpen: onOpenModal,
    onClose: null
  }
  const modal = new VanillaModal(options);

         
  const changeInput = (e)=>{ 
    let val = parseInt(qInput.value);
    qInput.value = val + parseInt(e.target.dataset.qCh);
    inputValue = parseInt(qInput.value);
    if(inputValue === 0){
      qBtn[0].setAttribute('disabled', true);
    }else{
      qBtn[0].removeAttribute('disabled');
    }
    if(inputValue === 30){
      qBtn[1].setAttribute('disabled', true);
    }else{
      qBtn[1].removeAttribute('disabled');
    }
  }
  [...qBtn].map(el=>el.addEventListener('click', changeInput))
}

export default modalJs;