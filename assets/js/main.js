
/*Setting elementss and the Count Number to 0*/

let nameCounter = document.querySelector("#editable");
nameCounter.contentEditable = "true";

let countEl = document.querySelector("#count-num");
countEl.textContent = 0;

let score = document.querySelector("#score-count");

let reset = document.querySelector("#reset")



/*Creating Plus Button*/
let plus = document.querySelector("#incr");

let plusBtn = document.createElement("button");
plusBtn.textContent = "+";
plusBtn.classList.add("bt");

plus.appendChild(plusBtn);


/*Creating Minus Button */

let minus = document.querySelector("#decr");

let minusBtn = document.createElement("button");
minusBtn.textContent = "-";
minusBtn.classList.add("bt");

minus.appendChild(minusBtn);



/* Creating Handling Functions */

let count = 0;

function increment() {

    count++;
    countEl.textContent = count;
}

function decrement() {

    if (count > 0) count--;
    
    countEl.textContent = count;
}

function resetSave() {
    let results = "Previous count: " + count;

    score.textContent = results;

    count = 0;
    countEl.textContent = count;
} 




plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);
reset.addEventListener("click", resetSave);









