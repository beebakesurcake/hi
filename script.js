// 1. Select DOM elements
const counterValueEl = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

// 2. Initialize state variable
let count = 0;

// 3. Add Event Listeners for user clicks
incrementBtn.addEventListener('click', () => {
    count++;
    counterValueEl.textContent = count;
    console.log(`Count increased to: ${count}`);
});

decrementBtn.addEventListener('click', () => {
    count--;
    counterValueEl.textContent = count;
    console.log(`Count decreased to: ${count}`);
});
