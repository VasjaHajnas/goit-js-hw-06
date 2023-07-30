// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector("#counter");
const valueSpan = document.querySelector("#value");
let counterValue = 0;

function incrementCounter() {
  counterValue++;
  updateCounterValue();
}

function decrementCounter() {
  counterValue--;
  updateCounterValue();
}

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

counter.addEventListener("click", (event) => {
  if (event.target.dataset.action === "increment") {
    incrementCounter();
  } else if (event.target.dataset.action === "decrement") {
    decrementCounter();
  }
});

updateCounterValue();
