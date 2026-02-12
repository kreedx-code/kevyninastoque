const toggle = document.getElementById("toggleTheme");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

const input = document.getElementById("suggestionInput");
const button = document.getElementById("addSuggestion");
const list = document.getElementById("suggestionsList");

let suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

function renderSuggestions() {
  list.innerHTML = "";
  suggestions.forEach(text => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.textContent = text;
    list.appendChild(div);
  });
}

button.addEventListener("click", () => {
  const value = input.value.trim();
  if (value !== "") {
    suggestions.push(value);
    localStorage.setItem("suggestions", JSON.stringify(suggestions));
    input.value = "";
    renderSuggestions();
  }
});

renderSuggestions();

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());
