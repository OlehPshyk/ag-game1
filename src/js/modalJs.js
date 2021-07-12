import VanillaModal from 'vanilla-modal';
const modalJs = () => {  
  const options = {
    modal: '.modal',
    modalInner: '.modal-inner',
    modalContent: '.modal-content',
    open: '[data-modal-open]',
    close: '[data-modal-close]',
    page: 'body',
    loadClass: 'vanilla-modal',
    class: 'modal-visible',
    clickOutside: false,
    closeKeys: [27],
    transitions: true,
    onBeforeOpen: null,
    onBeforeClose: null,
    onOpen: null,
    onClose: null
  }
  const modal = new VanillaModal(options);
}

export default modalJs;