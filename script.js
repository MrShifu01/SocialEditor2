// Select all menu items
const menuItems = document.querySelectorAll('.menu__button');

// Function to remove active class from all items
function removeActiveClasses() {
  menuItems.forEach(item => {
    item.classList.remove('menu__button--active');
  });
}

// Iterate over all menu items to add click event listeners
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the active class from all menu items
    removeActiveClasses();

    // Add the active class to the clicked item
    item.classList.add('menu__button--active');
  });
});