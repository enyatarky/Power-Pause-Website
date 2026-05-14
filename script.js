// Select the button and result text from the HTML
const recommendButton = document.getElementById("recommendButton");
const recommendationResult = document.getElementById("recommendationResult");

// Run this function when the user clicks the button
recommendButton.addEventListener("click", function () {
  const need = document.getElementById("need").value;

  if (need === "energy") {
    recommendationResult.textContent =
      "Recommended break: Energy Shake — a quick movement break to wake up your body.";
  } else if (need === "stretch") {
    recommendationResult.textContent =
      "Recommended break: Shoulder Reset — a short desk-friendly stretch to reduce tension.";
  } else if (need === "relax") {
    recommendationResult.textContent =
      "Recommended break: Breathing Break — a calm pause to reset your focus.";
  }
});
