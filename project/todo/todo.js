let item = document.getElementById("no1");
let sec = document.getElementById("todolist")
let deletebtn = document.getElementById("button2");
let labelText = "";

function create() {
//     let P = document.createElement("li")
//     P.textContent = item.value
//    sec.appendChild(P)
//     item.value = ""

    let C = document.createElement("input");
    C.id = "newItem";
    
    let Label = document.createElement("label");

    let textSpan = document.createElement("span"); // to make only the text part editable later
    textSpan.textContent = item.value;

    C.type = "checkbox";
    Label.appendChild(C);
    
    Label.appendChild(textSpan);
  
    
     if (textSpan.textContent !== "") {
        
       
    
        let B = document.createElement("button");
        B.id = "button3";
        B.textContent = "❌";
    
        Label.appendChild(B);

        B.addEventListener("click", () => {
        
            sec.removeChild(Label);
        });
    
        textSpan.addEventListener("dblclick", () => {
           
            textSpan.contentEditable = "true";
        })
   }

    sec.appendChild(Label);
    
    item.value = "";


    C.addEventListener("change", () => {
        if (C.checked) {
            textSpan.classList.add("clicked");
        } else {
            textSpan.classList.remove("clicked");
        }
    });


}

// clear all
deletebtn.addEventListener("click", () => {
    sec.textContent = "";
});
