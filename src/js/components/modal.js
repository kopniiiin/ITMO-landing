const Key = { ESCAPE: `Escape`, TAB: `Tab` };

const TIME_TO_SEND_DATA = 4000;
const TIME_TO_SHOW_ALERT = 6000;

const page = document.querySelector(`.page`);
const modal = page.querySelector(`.modal`);
const alert = page.querySelector(`.alert`);

const overlay = modal.querySelector(`.modal__overlay`);
const form = modal.querySelector(`.modal__form`);

const openButton = page.querySelector(`.contacts__button`);
const closeButton = modal.querySelector(`.modal__close-button`);
const submitButton = form.querySelector(`.modal__submit-button`);

const toggleScroll = () => page.classList.toggle(`page_no-scroll`);
const toggleModal = () => modal.classList.toggle(`modal_active`);
const toggleAlert = () => alert.classList.toggle(`alert_active`);

const focusFirstFormElement = () => form.elements[0].focus();
const clearForm = () => [...form.elements].forEach(element => element.value = ``);

const openModal = () => {
  toggleScroll();
  toggleModal();
  focusFirstFormElement();
  document.addEventListener(`keydown`, documentKeydownHandler);
};

const closeModal = () => {
  toggleScroll();
  toggleModal();
  clearForm();
  document.removeEventListener(`keydown`, documentKeydownHandler);
};

const manageFocus = (evt) => {
  const {shiftKey} = evt;
  const {activeElement} = document;

  if (shiftKey) {
    if (activeElement === closeButton) {
      evt.preventDefault();
      submitButton.focus();
    }
  } else if (activeElement === submitButton) {
    evt.preventDefault();
    closeButton.focus();
  }
}

// Имитация передачи данных по сети и показ сообщения
const sendData = () => new Promise(resolve => setTimeout(resolve, TIME_TO_SEND_DATA))
  .then(() => {
    toggleAlert();
    setTimeout(toggleAlert, TIME_TO_SHOW_ALERT);
    closeModal();
  });

const documentKeydownHandler = (evt) => {
  const {key} = evt;

  switch (key) {
    case Key.ESCAPE:
      evt.preventDefault();
      closeModal();
      break;
    case Key.TAB:
      manageFocus(evt);
      break;
  }
}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  sendData();
}

const openButtonClickHandler = () => openModal();
const closeButtonClickHandler = () => closeModal();
const overlayClickHandler = () => closeModal();

form.addEventListener(`submit`, formSubmitHandler);
openButton.addEventListener(`click`, openButtonClickHandler);
closeButton.addEventListener(`click`, closeButtonClickHandler);
overlay.addEventListener(`click`, overlayClickHandler);
