const btnAll = document.getElementById("all");
const btnInt = document.getElementById("interview");
const btnRej = document.getElementById("reject");
const jobCount = document.getElementById("job-count");
const allCards = document.querySelectorAll(".job-card");
const totalC = document.getElementById("total-count");
const interviewC = document.getElementById("interview-count");
const rejectedC = document.getElementById("rejected-count");

function updateDisplay(filter) {
  let total = 0, interview = 0, rejected = 0;
  let visibleCount = 0;

  allCards.forEach(card => {
    const status = card.dataset.status;


    if (status === "all") total++;
    if (status === "interview") interview++;
    if (status === "rejected") rejected++;
    if (
      (filter === "all" && status === "all") ||
      status === filter
    ) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  totalC.textContent = total;
  interviewC.textContent = interview;
  rejectedC.textContent = rejected;

  jobCount.textContent = visibleCount;

  const noJobs = document.querySelector(".no-jobs");
  noJobs.style.display = visibleCount === 0 ? "flex" : "none";
}

updateDisplay("all");

btnAll.addEventListener("click", () => updateDisplay("all"));
btnInt.addEventListener("click", () => updateDisplay("interview"));
btnRej.addEventListener("click", () => updateDisplay("rejected"));

allCards.forEach(card => {
  const interviewBtn = card.querySelector(".interview-btn");
  const rejectBtn = card.querySelector(".reject-btn");
  const badge = card.querySelector("p.bg-blue-50");

  interviewBtn.addEventListener("click", () => {
    card.dataset.status = "interview";

    badge.classList.remove("bg-blue-50", "text-blue-800", "bg-red-100", "text-red-700", "bg-green-100", "text-green-700");

    badge.textContent = "INTERVIEW";
    badge.classList.add("bg-green-100", "text-green-700");

    updateDisplay("all");
  });

  rejectBtn.addEventListener("click", () => {
    card.dataset.status = "rejected";

    badge.classList.remove("bg-blue-50", "text-blue-800", "bg-red-100", "text-red-700", "bg-green-100", "text-green-700");
    badge.textContent = "REJECTED";
    badge.classList.add("bg-red-100", "text-red-700");

    updateDisplay("all");
  });
});