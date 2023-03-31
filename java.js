// const baseOptions = document.querySelectorAll('.base-option');
// const base = document.querySelector('.base');
// const toppingOptions = document.querySelectorAll('.topping-option');
// const toppingsContainer = document.querySelector('.toppings-container');

// let currentToppings = [];

// // Add event listeners for drag and drop
// base.addEventListener('dragover', (event) => {
//   event.preventDefault();
// });

// base.addEventListener('drop', (event) => {
//   const data = event.dataTransfer.getData('text/plain');
//   base.style.backgroundImage = `url(${data})`;
// });

// toppingsContainer.addEventListener('dragstart', (event) => {
//   event.dataTransfer.setData('text/plain', event.target.dataset.image);
// });

// toppingsContainer.addEventListener('dragover', (event) => {
//   event.preventDefault();
// });

// toppingsContainer.addEventListener('drop', (event) => {
//     event.preventDefault();
//     const toppingImage = event.dataTransfer.getData('text/plain');
//     currentToppings.push(toppingImage);
//     updateToppings();
//     });
    
//     // Function to update the toppings display
//     const updateToppings = () => {
//     let toppingsHTML = '';
//     currentToppings.forEach((topping) => {
//     toppingsHTML += `<img src="${topping}" alt="Topping" class="topping" draggable="true">`;
//     });
//     toppingsContainer.innerHTML = toppingsHTML;
//     };
    
//     // Add event listeners for topping options
//     toppingOptions.forEach((option) => {
//     option.addEventListener('click', () => {
//     const toppingImage = option.dataset.image;
//     currentToppings.push(toppingImage);
//     updateToppings();
//     });
//     });
    
//     updateToppings(); // initialize toppings display
    
    
    
    