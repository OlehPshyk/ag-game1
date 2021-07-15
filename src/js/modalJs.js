import VanillaModal from 'vanilla-modal';
import Typewriter from 'typewriter-effect/dist/core';
const modalJs = () => {   
  const qBtn = document.querySelectorAll('[data-q-ch]');
  const qInput = document.querySelector('[data-q]'); 
  let spanTotal = null;
  let inputValue,total;
  const calcTotal = (q) => {       
    return (q * 0.052).toFixed(3);
  }
  const resetInput = () => {
    qInput.value = 0;  
    qBtn[0].setAttribute('disabled', true);
  }
  const onOpenModal = () => {
    let t1writer, t2writer; 
    const endAnime2 = () => {
      let cursor2 = document.querySelector('#m-t2').querySelector('.Typewriter__cursor'); 
      if(cursor2){
        cursor2.remove()
      } 
      spanTotal = document.querySelector('[data-total]');
    }
    const startWrite2 = () => {             
      t2writer
      .pauseFor(100)
      .typeString(`Total: <span data-total="total">${total}</span> Ξ`)         
      .start()    
      .callFunction(endAnime2);
    }
    const endAnime = () => {
      let cursor1 = document.querySelector('#m-t1').querySelector('.Typewriter__cursor');
      if(cursor1){
        cursor1.remove();        
      }
      startWrite2();
    }
    t1writer = new Typewriter(document.getElementById('m-t1'), {
      loop: false,
      delay: 10,    
    });    
    t2writer = new Typewriter(document.getElementById('m-t2'), {
      loop: false,
      delay: 10,    
    }); 
    let cursor2 = document.querySelector('#m-t2').querySelector('.Typewriter__cursor'); 
    if(cursor2){
      cursor2.remove()
    }
    t1writer
      .pauseFor(100)
      .typeString('> Launch sequence initiated...<br><br>')
      .pauseFor(300)
      .typeString('> System demands 0.052 Ξ<br><br>')    
      .pauseFor(300)
      .typeString('> Please enter quantity')       
      .start()    
      .callFunction(endAnime);
  }
  const onCloseModal = () => {
    document.querySelector('#m-t1').innerHTML = '';
    document.querySelector('#m-t2').innerHTML = '';
    total = calcTotal(0);
    resetInput();
  }
  const changeInput = (e)=>{ 
    let val = parseInt(qInput.value);
    qInput.value = val + parseInt(e.target.dataset.qCh);
    inputValue = parseInt(qInput.value);
    total = calcTotal(inputValue);
    if(spanTotal){
      spanTotal.innerText = total;
    }
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
  const sendMintForm = (e) => {
    e.preventDefault();    
    let qMint = e.target.querySelector('[data-q]').value;
    console.log("quantity Mint:",qMint);
    console.log("total Mint:",total);
    document.location.href=`${document.location.origin}${document.location.pathname}second.html`;
  }
  
  inputValue = parseInt(qInput.value);
  total = calcTotal(parseInt(qInput.value));
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
    onOpen: onOpenModal,
    onClose: onCloseModal
  }
  const modal = new VanillaModal(options);
  [...qBtn].map(el=>el.addEventListener('click', changeInput));
  document.getElementById('mint-submit-form').addEventListener('submit',sendMintForm);  
}
export default modalJs;