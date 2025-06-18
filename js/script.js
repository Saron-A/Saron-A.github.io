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
    bar.style.setProperty("--target-width", percent);
  });
}

let links = document.querySelectorAll(".projects a");

links.forEach((link) => {
  link.target = "_blank";
  link.rel = "noopener";
});

const form = document.getElementById(".contact form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset();
    alert("Thank you for your message! I will get back to you soon.");
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }
});
