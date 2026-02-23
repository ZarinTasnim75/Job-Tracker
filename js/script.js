const btnAll = document.getElementById("all");
const btnInt = document.getElementById("interview");
const btnRej = document.getElementById("reject");
const jobCount = document.getElementById("job-count");
const allCards = document.querySelectorAll(".job-card");
const noJobs = document.querySelector(".no-job");
function updateBadge(badge, status) {

    if (status === "NOT APPLIED") {
        badge.textContent = "NOT APPLIED";
        badge.classList.add("bg-blue-50", "text-blue-800");
    } else if (status === "INTERVIEW") {
        badge.textContent = "INTERVIEW";
        badge.classList.add("bg-green-100", "text-green-700");
    } else if (status === "REJECTED") {
        badge.textContent = "REJECTED";
        badge.classList.add("bg-red-100", "text-red-700");
    }
}

btnAll.addEventListener("click", () => updateDisplay("all"));
btnInt.addEventListener("click", () => updateDisplay("interview"));
btnRej.addEventListener("click", () => updateDisplay("rejected"));

allCards.forEach(card => {
    const badge = card.querySelector(".badge");
    const interviewBtn = card.querySelector(".interview-btn");
    const rejectBtn = card.querySelector(".reject-btn");

    interviewBtn.addEventListener("click", () => {
        updateBadge(badge, "INTERVIEW");
        updateDisplay("all");
    });

    rejectBtn.addEventListener("click", () => {
        updateBadge(badge, "REJECTED");
        updateDisplay("all");
    });
});

updateDisplay("all");