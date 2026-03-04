// Javascript - საშინაო დავალება
// ლექცია 13
// 📌 დავალება — Side Panel Components (3 ღილაკი)
// 🎯 მიზანი
// შექმენი ვებგვერდი, სადაც იქნება სამი ვერტიკალურად განლაგებული ღილაკი.
// ღილაკზე დაჭერისას მარჯვნიდან უნდა "გამოიწიოს" შესაბამისი პანელი (slide effect).
// ________________________________________
// 🧱 HTML მოთხოვნები
// შექმენი:
// 🔘 3 ღილაკი (ვერტიკალურად)
// •	☰ Menu
// •	📝 Todo
// •	🧮 Calculator
// 📦 3 ცალკე side panel
// •	mobile-menu
// •	todo-panel
// •	calculator-panel
// ყველა panel:
// •	უნდა იყოს position: fixed;
// •	თავიდან იყოს right: -300px;
// •	სიგანე: 300px
// •	სიმაღლე: 100vh
// ________________________________________
// ⚙️ ფუნქციონალი (JavaScript)
// 1️⃣ Mobile Menu
// ღილაკზე დაჭერისას:
// •	Panel უნდა გამოვიდეს მარჯვნიდან (right: 0)
// •	ხელახლა დაჭერისას დაიხუროს
// •	შიგნით ჩაწერე 4 ლინკი (Home, About, Contact, Profile)
// 📌 გამოიყენე:
// •	querySelector
// •	addEventListener
// •	classList.toggle()
// ________________________________________
// 2️⃣ Todo App Panel
// Panel-ში უნდა იყოს:
// •	input
// •	Add ღილაკი
// •	ul სია
// ფუნქციონალი:
// •	მომხმარებელმა შეიყვანოს ტექსტი
// •	Add-ზე დაჭერისას დაემატოს li
// •	ცარიელი ტექსტი არ დაემატოს
// •	სურვილის შემთხვევაში დაამატე delete ღილაკიც
// 📌 გამოიყენე:
// •	createElement
// •	appendChild
// •	value
// •	if შემოწმება
// ________________________________________
// 3️⃣ Mini Calculator Panel
// Panel-ში უნდა იყოს:
// •	ორი input (number ტიპის)
// •	4 ღილაკი: + - * /
// ფუნქციონალი:
// •	ოპერატორზე დაჭერისას დაითვალოს შედეგი
// •	შედეგი გამოჩნდეს ქვემოთ div-ში
// •	თუ input ცარიელია → არ დაითვალოს
// 📌 გამოიყენე:
// •	Number()
// •	textContent
// •	if შემოწმება
// ________________________________________
// 🎨 დამატებითი მოთხოვნა
// •	მხოლოდ ერთი panel შეიძლება იყოს გახსნილი ერთდროულად
// (თუ ერთი გაიხსნა, სხვა უნდა დაიხუროს)

// button selects

let menuBtn = document.querySelector("#menubtn");
let todoBtn = document.querySelector("#todobtn");
let calcBtn = document.querySelector("#calcbtn");

// panel select

let menuPanel = document.querySelector("#mobile-menu");
let todoPanel = document.querySelector("#todo-panel");
let calcPanel = document.querySelector("#calculator-panel");

// ---------------------------------------------------------------

function closeAllPanels() {
  menuPanel.classList.remove("active");
  todoPanel.classList.remove("active");
  calcPanel.classList.remove("active");
}

// -----------------------------------------------------------------

menuBtn.addEventListener("click", function () {
  let isOpen = menuPanel.classList.contains("active");
  closeAllPanels();
  if (!isOpen) {
    menuPanel.classList.add("active");
  }
});

todoBtn.addEventListener("click", function () {
  let isOpen = todoPanel.classList.contains("active");
  closeAllPanels();
  if (!isOpen) {
    todoPanel.classList.add("active");
  }
});

calcBtn.addEventListener("click", function () {
  let isOpen = calcPanel.classList.contains("active");
  closeAllPanels();
  if (!isOpen) {
    calcPanel.classList.add("active");
  }
});

// ----------------------------------------------------------------

let todoInput = document.querySelector("#todoInput");
let addTodo = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");

addTodo.addEventListener("click", function () {
  if (todoInput.value.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = todoInput.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
});

// calculator

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");
let operations = document.querySelectorAll(".op");

operations.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      return;
    }

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let op = btn.dataset.op;
    let res;

    if (op === "+") res = n1 + n2;
    if (op === "-") res = n1 - n2;
    if (op === "*") res = n1 * n2;
    if (op === "/") res = n1 / n2;

    result.textContent = "Result:" + res;
  });
});
