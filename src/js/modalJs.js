import VanillaModal from 'vanilla-modal';
import Typewriter from 'typewriter-effect/dist/core';
const modalJs = () => {   
  let qBtn1 = document.querySelectorAll('#mint-submit-form-1 [data-q-ch]');
  let qBtn2 = document.querySelectorAll('#mint-submit-form-2 [data-q-ch]');
  let qInput1 = document.querySelector('#mint-submit-form-1 [data-q]');    
  let qInput2 = document.querySelector('#mint-submit-form-2 [data-q]');
  let spanTotal1 = null, spanTotal2 = null;
  let inputValue1,inputValue2,total1,total2;
  let activeModal=null;
  let calcTotal = (q,price) => {    
    return (q * price).toFixed(4);
  }
  const resetInput = () => {    
    qInput1.value = 1;  
    qBtn1[0].setAttribute('disabled', true);
    qInput2.value = 1; 
    qBtn2[0].setAttribute('disabled', true);
  }
  inputValue1 = parseInt(qInput1.value);
  inputValue2 = parseInt(qInput2.value);
  total1 = calcTotal(parseInt(qInput1.value),0.0520);
  total2 = calcTotal(parseInt(qInput2.value),0.0468);
  if(inputValue1 === 1){
    qBtn1[0].setAttribute('disabled', true);    
  }else{
    qBtn1[0].removeAttribute('disabled');    
  }
  if(inputValue1 === 30){
    qBtn1[1].setAttribute('disabled', true);    
  }else{
    qBtn1[1].removeAttribute('disabled');    
  }
  if(inputValue2 === 1){
    qBtn2[0].setAttribute('disabled', true);
  }else{    
    qBtn2[0].removeAttribute('disabled');
  }
  if(inputValue2 === 30){    
    qBtn2[1].setAttribute('disabled', true);
  }else{    
    qBtn2[1].removeAttribute('disabled');
  }  
  const onOpenModal = () => {
    activeModal=document.body.dataset.currentModal;
    if(activeModal==='popup-1'){        
      let t1writer, t2writer;
      t1writer = new Typewriter(document.getElementById('m-t1'), {
        loop: false,
        delay: 10,    
      });    
      t2writer = new Typewriter(document.getElementById('m-t2'), {
        loop: false,
        delay: 10,    
      }); 
      const endAnime2 = () => {
        let cursor2 = document.querySelector('#m-t2').querySelector('.Typewriter__cursor'); 
        if(cursor2){
          cursor2.remove()
        } 
        spanTotal1 = document.querySelector('[data-total1]');
      }
      const startWrite2 = () => {             
        t2writer
        .pauseFor(100)
        .typeString(`Total: <span data-total1="total">${total1}</span> Ξ`)         
        .start()    
        .callFunction(endAnime2);
      }
      const endAnime1 = () => {
        let cursor1 = document.querySelector('#m-t1').querySelector('.Typewriter__cursor');
        if(cursor1){
          cursor1.remove();        
        }
        startWrite2();
      }
      
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
        .callFunction(endAnime1); 
    }   
    if(activeModal==='popup-2'){
      let t3writer, t4writer;
      t3writer = new Typewriter(document.getElementById('m-t3'), {
        loop: false,
        delay: 10,    
      });    
      t4writer = new Typewriter(document.getElementById('m-t4'), {
        loop: false,
        delay: 10,    
      }); 
      const endAnime4 = () => {
        let cursor4 = document.querySelector('#m-t4').querySelector('.Typewriter__cursor'); 
        if(cursor4){
          cursor4.remove()
        } 
        spanTotal2 = document.querySelector('[data-total2]');
      }
      const startWrite4 = () => {             
        t4writer
        .pauseFor(100)
        .typeString(`Total: <span data-total2="total">${total2}</span> Ξ`)         
        .start()    
        .callFunction(endAnime4);
      }
      const endAnime3 = () => {
        let cursor3 = document.querySelector('#m-t3').querySelector('.Typewriter__cursor');
        if(cursor3){
          cursor3.remove();        
        }
        startWrite4();
      }
      
      let cursor4 = document.querySelector('#m-t4').querySelector('.Typewriter__cursor'); 
      if(cursor4){
        cursor4.remove()
      }
      t3writer
        .pauseFor(100)
        .typeString('> Launch sequence initiated...<br><br>')
        .pauseFor(300)
        .typeString('> Partner discount detected<br><br>')
        .typeString('> System demands 0.0468 Ξ<br><br>')    
        .pauseFor(300)
        .typeString('> Please enter quantity')       
        .start()    
        .callFunction(endAnime3); 
    }    
  }


  const onCloseModal = () => {
    document.querySelector('#m-t1').innerHTML = '';
    document.querySelector('#m-t2').innerHTML = '';
    document.querySelector('#m-t3').innerHTML = '';
    document.querySelector('#m-t4').innerHTML = '';
    total1 = calcTotal(1,0.052);
    total2 = calcTotal(1,0.0468);
    resetInput();
  }



  const changeInput = (e)=>{ 
    let activeModal = document.body.dataset.currentModal;
    if(activeModal==="popup-1"){
      let val = parseInt(qInput1.value);
      qInput1.value = val + parseInt(e.target.dataset.qCh);
      inputValue1 = parseInt(qInput1.value);  
      total1 = calcTotal(inputValue1,0.052);
      if(spanTotal1){
        spanTotal1.innerText = total1;
      }
      if(inputValue1 === 1){
        qBtn1[0].setAttribute('disabled', true);
      }else{
        qBtn1[0].removeAttribute('disabled');
      }
      if(inputValue1 === 30){
        qBtn1[1].setAttribute('disabled', true);
      }else{
        qBtn1[1].removeAttribute('disabled');
      }
    }
    if(activeModal==="popup-2"){
      let val = parseInt(qInput2.value);      
      qInput2.value = val + parseInt(e.target.dataset.qCh);      
      inputValue2 = parseInt(qInput2.value);       
      total2 = calcTotal(inputValue2,0.0468);      
      if(spanTotal2){
        spanTotal2.innerText = total2;
      }
      if(inputValue2 === 1){
        qBtn2[0].setAttribute('disabled', true);
      }else{
        qBtn2[0].removeAttribute('disabled');
      }
      if(inputValue2=== 30){
        qBtn2[1].setAttribute('disabled', true);
      }else{
        qBtn2[1].removeAttribute('disabled');
      }
    }    
  }  
  const updateURL = (newpath)=>{
    // if (history.pushState) {
    //   let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    //   if (newpath) {
    //     newurl = newurl + newpath
    //   }
    //   window.history.pushState({
    //     path: newurl
    //   }, '', newurl);
    //   document.location.reload();
    // }else{
      document.location.href=`${document.location.origin}${document.location.pathname}${newpath}`;
    // }
  }
  const sendMintForm1 = (e) => {
    e.preventDefault();    
    let qMint = e.target.querySelector('[data-q]').value;
    console.log("quantity Mint:",qMint);
    console.log("total Mint:",total1);
    updateURL('thanks');
  }
  const sendMintForm2 = (e) => {
    e.preventDefault();    
    let qMint = e.target.querySelector('[data-q]').value;
    console.log("quantity Mint:",qMint);
    console.log("total Mint:",total2);
    updateURL('thanks');
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
  [...qBtn1,...qBtn2].map(el=>el.addEventListener('click', changeInput));  

  document.getElementById('mint-submit-form-1').addEventListener('submit',sendMintForm1);
  document.getElementById('mint-submit-form-2').addEventListener('submit',sendMintForm2);  
}
export default modalJs;