:root {
  --bg-dark: #0b1120;
  --bg-light: #f8fafc;
  --text-dark: #e5e7eb;
  --text-light: #020617;
  --primary: #38bdf8;
}

body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  transition: background 0.3s ease, color 0.3s ease;
  user-select: none;
}

/* DARK / LIGHT */
body.dark {
  background: var(--bg-dark);
  color: var(--text-dark);
}

body.light {
  background: var(--bg-light);
  color: var(--text-light);
}

/* HERO */
.hero {
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(135deg, #020617, #020617);
}

.hero h1 {
  font-size: 44px;
  color: var(--primary);
}

.hero h2 {
  font-weight: 400;
  opacity: 0.85;
}

.hero p {
  max-width: 600px;
  margin: 20px auto;
}

button {
  margin-top: 20px;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* SECTIONS */
.section {
  max-width: 1100px;
  margin: auto;
  padding: 70px 20px;
}

h3 {
  color: var(--primary);
  margin-bottom: 25px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
}

.card {
  padding: 22px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
}

/* PROJECT */
.project {
  margin-top: 25px;
  padding: 22px;
  border-left: 4px solid var(--primary);
  background: rgba(255, 255, 255, 0.03);
}

/* SUGESTÕES */
.suggestion-text {
  margin-bottom: 15px;
  opacity: 0.8;
}

textarea {
  width: 100%;
  max-width: 600px;
  height: 100px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  margin-bottom: 15px;
  font-family: inherit;
  user-select: text;
}

.suggestions-container {
  max-width: 700px;
}

.suggestion-item {
  padding: 15px;
  margin-bottom: 12px;
  border-left: 3px solid var(--primary);
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 25px;
  opacity: 0.6;
}

/* SCROLL ANIMATION */
.reveal {
  opacity: 0;
  transform: translateY(45px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}