const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const timeDisplay = document.getElementById("time-display");

function setHandRotation(element, degrees) {
	if (!element) {
		return;
	}

	element.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`;
}

function formatTimePart(value) {
	return String(value).padStart(2, "0");
}

function updateClock() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secondDegrees = seconds * 6;
	const minuteDegrees = minutes * 6 + seconds * 0.1;
	const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

	setHandRotation(secondHand, secondDegrees);
	setHandRotation(minuteHand, minuteDegrees);
	setHandRotation(hourHand, hourDegrees);

	const twelveHour = hours % 12 === 0 ? 12 : hours % 12;
	const display = `${formatTimePart(twelveHour)} hrs ${formatTimePart(minutes)} min ${formatTimePart(seconds)} sec`;

	if (timeDisplay) {
		timeDisplay.textContent = display;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	updateClock();
	setInterval(updateClock, 1000);
});
