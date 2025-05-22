let skills_container = document.querySelector(".skills");

let skills = document.querySelectorAll(".skills ul div li");
let progressRates = document.querySelectorAll(".subcontent span");
let progressBars = document.querySelectorAll(".progress-bar .progress");

progressBarFilling();

function progressBarFilling() {
  progressBars.forEach((bar, index) => {
    const percent = progressRates[index].textContent.trim();
    bar.style.width = percent;
    bar.classList.add("active");
  });
}

let links = document.querySelectorAll(".projects a");

links.forEach((link) => {
  link.target = "_blank";
  link.rel = "noopener";
});
