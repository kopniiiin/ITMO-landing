const navigation = document.querySelector(`.navigation`);
const burgerButton = navigation.querySelector(`.navigation__burger-button`);

const toggleNavigation = () => navigation.classList.toggle(`navigation_active`);
const toggleBurgerButton = () => burgerButton.classList.toggle(`burger-button_active`);

const burgerButtonClickHandler = () => {
  toggleNavigation();
  toggleBurgerButton();
};

burgerButton.addEventListener(`click`, burgerButtonClickHandler);
