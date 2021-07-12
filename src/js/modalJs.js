import VanillaModal from 'vanilla-modal';
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
    onOpen: null,
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