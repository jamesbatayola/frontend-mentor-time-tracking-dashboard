const daily = document.querySelectorAll(".total-daily");
const weekly = document.querySelectorAll(".total-weekly");
const monthly = document.querySelectorAll(".total-monthly");
const datesContainer = document.querySelector(".dwm");

function showEach(argument) {
	argument.forEach((each) => {
		each.style.display = "block";
	});
}

function hideEach(argument) {
	argument.forEach((each) => {
		each.style.display = "none";
	});
}

let currentDate;

datesContainer.addEventListener("click", (event) => {
	if (event.target.matches(".daily")) {
		showEach(daily);
		hideEach(weekly);
		hideEach(monthly);
	} else if (event.target.matches(".weekly")) {
		showEach(weekly);
		hideEach(daily);
		hideEach(monthly);
	} else if (event.target.matches(".monthly")) {
		showEach(monthly);
		hideEach(daily);
		hideEach(weekly);
	} else {
		return;
	}
});
