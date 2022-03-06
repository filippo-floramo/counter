
let count = 0 

function increment() {

    count++;
    countEl.textContent = count;
}

function decrement() {

   count = 0 ? 0 : count--;

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
