
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


const handleCounter = () => {
    
    let count = 0;

    const updateCounter = (num) => {

        if (count >= 0) count += num;
        if (count < 0) count = 0;
        countEl.textContent = count;
    }

    const resetSave = () => {
        let results = "Previous count: " + count;

        score.textContent = results;

        count = 0;
        countEl.textContent = count;
    }

    plus.addEventListener("click", () => updateCounter(1));
    minus.addEventListener("click", () => updateCounter(-1));
    reset.addEventListener("click", resetSave);

};

handleCounter();






