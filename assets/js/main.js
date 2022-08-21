
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



/* Creating Handling Class */

class Counter  {

    constructor() {
        this.counterCount = 0
    }

    updateTimer(num) {
      if(this.counterCount >= 0)  this.counterCount += num;
      if(this.counterCount < 0) this.counterCount = 0;

      countEl.textContent = this.counterCount;
    }

    resetSave() {
        let results = "Previous count: " + this.counterCount;
    
        score.textContent = results;
    
        this.counterCount = 0;
        countEl.textContent = this.counterCount;
    } 

}

const handleCounter = new Counter()


plus.addEventListener("click", () => handleCounter.updateTimer(1));
minus.addEventListener("click", () => handleCounter.updateTimer(-1));
reset.addEventListener("click", () => handleCounter.resetSave());









