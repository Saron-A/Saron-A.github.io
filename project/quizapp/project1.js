let count = 0;
let totalCount = 0;
let total = document.getElementById("total");
let studName = "";
let studAge = 0;
let studGradeLevel = "";


function totalScore() {
  let Q1 = document.querySelector("input[name=question1]:checked");
  if (Q1.value === "Saturn") {
    document.getElementById("result1").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result1").textContent = "❌: The answer is Saturn";
  }

  let Q2 = document.querySelector("input[name=question2]:checked");
  if (Q2.value === "Canberra") {
    document.getElementById("result2").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result2").textContent =
      "❌: The answer is Canberra";
  }
 
  let Q3 = document.querySelector("input[name=question3]:checked");
  if (Q3.value === "William Shakespeare") {
    document.getElementById("result3").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result3").textContent =
      "❌: The answer is William Shakespeare";
  }


  let Q4 = document.querySelector("input[name=question4]:checked");
  if (Q4.value === "Leonardo da Vinci") {
    document.getElementById("result4").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result4").textContent =
      "❌: The answer is Leonardo da Vinci";
  }

  let Q5 = document.querySelector("input[name=question5]:checked");
  if (Q5.value === "District of Colombia") {
    document.getElementById("result5").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result5").textContent =
      "❌: The answer is District of Colombia";
  }

  let Q6 = document.querySelector("input[name=question6]:checked");
  if (Q6.value === "Addis Ababa") {
    // console.log(Q6.value === "Addis Ababa");
    document.getElementById("result6").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result6").textContent =
      "❌: The answer is Addis Ababa";
  }

  let Q7 = document.querySelector("input[name=question7]:checked");
  if (Q7.value === "Pacific Ocean") {
    document.getElementById("result7").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result7").textContent =
      "❌: The answer is Pacific Ocean";
  }

  let Q8 = document.querySelector("input[name=question8]:checked");
  if (Q8.value === "Mount Everest") {
    document.getElementById("result8").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result8").textContent =
      "❌: The answer is Mount Everest";
  }

  let Q9 = document.querySelector("input[name=question9]:checked");
  if (Q9.value === "Ag") {
    document.getElementById("result9").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result9").textContent = "❌: The answer is Ag";
  }

  let Q10 = document.querySelector("input[name=question10]:checked");
  if (Q10.value === "Sudan") {
    document.getElementById("result10").textContent = "✅: Correct";
    counter();
  } else {
    document.getElementById("result10").textContent = "❌: The answer is Sudan";
  }

  studInfo = prompt("What is your full name?");
  studName = studInfo;
  let Age = prompt("How old are you?");
  studAge = Age;

  total.textContent = "Your total score is " + totalCount + "/10";
  saveScore();

  
}

function counter() {
  count++;
  totalCount = count;
}

function saveScore() {

  let Tbody = document.querySelector("tbody");

  let Tr = document.createElement("tr");
  let Td1 = document.createElement("td");
  Td1.textContent = studName;

  let Td2 = document.createElement("td");
  Td2.textContent = studAge;

  let Td3 = document.createElement("td");
  Td3.textContent = totalCount;


  Tr.appendChild(Td1);
  Tr.appendChild(Td2);
  Tr.appendChild(Td3);
 
  
  Tbody.appendChild(Tr);
  
  let Td4 = document.createElement("td");
  
  let Del = document.createElement("button");
  Del.textContent = "Delete"
  let Edit = document.createElement("button");
  Edit.textContent = "Edit";

  Del.addEventListener("click", () => {
    Tbody.removeChild(Tr)
  })
  
  Edit.addEventListener("click", () => {
    Td1.contentEditable = "true";
    Td2.contentEditable = "true";
  })

  Tr.appendChild(Td4);

  Td4.appendChild(Edit);
  Td4.appendChild(Del);
  
}

function reset() {


  let radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });

  document.getElementById("result1").textContent = "";
  
  document.getElementById("result2").textContent = "";

  document.getElementById("result3").textContent = "";

  document.getElementById("result4").textContent = "";
  
  document.getElementById("result5").textContent = "";

  document.getElementById("result6").textContent = "";

  document.getElementById("result7").textContent = "";

  document.getElementById("result8").textContent = "";

  document.getElementById("result9").textContent = "";

  document.getElementById("result10").textContent = "";

  count = 0;

  totalCount = 0;

  total.textContent = "";

}


document.body.addEventListener("click", (event) => {
  console.log(event.target)
  const parent = event.target.parentElement
  console.log(parent);
})