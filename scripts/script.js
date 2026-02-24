const cardsContainer = document.getElementById("card-container");

const arrays = Array.from(cardsContainer.children);

const interviewNumber = document.getElementById("interview-number");
const selectedInterview = document.getElementById("selected-interview");
const rejectedInterview = document.getElementById("rejected-interview");
const rejectedNumber = document.getElementById("rejected-number");
const totalNumber = document.getElementById("total");

for (const card of arrays) {
  console.log(card);
  const interviewBtn = card.querySelector(".interview-btn");
  const rejectedBtn = card.querySelector(".rejected-btn");
  const statusSpan = card.querySelector("span");

  interviewBtn.addEventListener("click", function () {
    if (statusSpan.innerText !== "NOT APPLIED") {
      return;
    } else {
      statusSpan.innerText = "INTERVIEW";
      statusSpan.className =
        "bg-green-100 p-2 font-bold text-green-900 rounded-xl";
    }

    selectedInterview.appendChild(card);
    // const totalNumber = Number(totalJob.innerText);
    const currentCount = Number(interviewNumber.innerText);
    interviewNumber.innerText = currentCount + 1;
    const totalCount = Number(totalNumber.innerText);
    totalNumber.innerText = totalCount - 1;
    console.log(totalNumber);
  });
  rejectedBtn.addEventListener("click", function () {
    if (statusSpan.innerText !== "NOT APPLIED") {
      return;
    } else {
      statusSpan.innerText = "REJECTED";
      statusSpan.className = "bg-red-100 p-2 font-bold text-red-900 rounded-xl";
      rejectedInterview.appendChild(card);
    }

    // Increase rejected number
    rejectedNumber.innerText = Number(rejectedNumber.innerText) + 1;

    // Decrease total number
    totalNumber.innerText = Number(totalNumber.innerText) - 1;
  });
}
