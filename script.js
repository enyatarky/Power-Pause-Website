// SHUFFLE DECK
const shuffleButton = document.querySelector("#shuffleBtn");
const cards = document.querySelectorAll(".mini-card");
const selectedCard = document.querySelector("#selectedCard");

const cardOptions = [
  { name: "Eye Rolls", type: "Screen break", points: "+1", color: "green" },
  { name: "Neck Circles", type: "Desk reset", points: "+2", color: "blue" },
  { name: "Front Leg Stretch", type: "Stretch break", points: "+4", color: "yellow" },
  { name: "Squats", type: "Energy break", points: "+5", color: "red" }
];

shuffleButton.addEventListener("click", function () {
  gsap.to(cards, {
    x: "random(-90, 90)",
    y: "random(-45, 45)",
    rotation: "random(-22, 22)",
    duration: 0.45,
    stagger: 0.08,
    yoyo: true,
    repeat: 1
  });

  const randomNumber = Math.floor(Math.random() * cardOptions.length);
  const chosenCard = cardOptions[randomNumber];

  selectedCard.className = `selected-card ${chosenCard.color}`;

  selectedCard.innerHTML = `
    <div class="card-line"></div>
    <h3>${chosenCard.name}</h3>
    <p>${chosenCard.type}</p>
    <span>${chosenCard.points}</span>
  `;

  gsap.from(selectedCard, {
    scale: 0.75,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  });
});

// RECOMMENDATION TOOL
const recommendButton = document.querySelector("#recommendBtn");
const needInput = document.querySelector("#need");
const timeInput = document.querySelector("#time");
const resultBox = document.querySelector("#result");

recommendButton.addEventListener("click", function () {
  const need = needInput.value;
  const time = timeInput.value;

  let recommendation;

  if (need === "energy") {
    recommendation = { name: "Squats", type: `${time} minute energy break`, points: "+5", color: "red" };
  } else if (need === "stretch") {
    recommendation = { name: "Front Leg Stretch", type: `${time} minute stretch break`, points: "+4", color: "yellow" };
  } else {
    recommendation = { name: "Eye Rolls", type: `${time} minute screen reset`, points: "+1", color: "green" };
  }

  resultBox.innerHTML = `
    <div class="recommend-card ${recommendation.color}">
      <h3>${recommendation.name}</h3>
      <p>${recommendation.type}</p>
      <span>${recommendation.points}</span>
    </div>
  `;

  gsap.from(".recommend-card", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
  });
});

// ACCORDION
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;
    const arrow = button.querySelector(".arrow");

    content.classList.toggle("active");
    arrow.classList.toggle("rotate");
  });
});