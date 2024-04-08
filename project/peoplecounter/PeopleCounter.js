// document.getElementById("count-el").innerText = 5

/*
let counter = document.getElementById("count-el").innerText;
//let count = counter.innerText;

function increment() {
    counter++;
    document.getElementById("count-el").innerText = counter;
}
*/
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
   console.log(count); // printed on the webpage's console.
    countEl.textContent = count;
}

function save() {
    let contain = count + " - ";
    saveEl.textContent += contain;// to keep on adding new value on the previous ones.
    // textContent reads non-human readable characters like spaces and displays them (unlike innerText)
    count = 0;
    countEl.textContent = count;

    console.log(count); // prints on webpage's console.
}
// save(); // calls the functions so it works.

    
