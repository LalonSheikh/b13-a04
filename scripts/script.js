const cardsContainer = document.getElementById("card-container");

const arrays = Array.from(cardsContainer.children);

const interviewNumber = document.getElementById("interview-number");
const selectedInterview = document.getElementById("selected-interview");

for (const card of arrays) {
  const interviewBtn = card.querySelector(".interview-btn");
  const statusSpan = card.querySelector("span");

  interviewBtn.addEventListener("click", function () {


    statusSpan.innerText = "INTERVIEW";
    statusSpan.className =
      "bg-green-100 p-2 font-bold text-green-900 rounded-xl";

    selectedInterview.appendChild(card);

    const currentCount = Number(interviewNumber.innerText);
    interviewNumber.innerText = currentCount + 1;
  });
}
