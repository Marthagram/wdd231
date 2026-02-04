const visitDate = localStorage.getItem("visitDate");

const now = Date.now();
const content = document.querySelector("#visit-count"); // or whatever area you chose

if (!visitDate) {
  // First visit
  content.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const lastVisit = Number(visitDate);
  const timeDiff = now - lastVisit;

  // Or use this method to get the daysdiff: if one day = 86400000milliseconds, then x days = time(stamp)difference
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 1) {
    content.textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    content.textContent = "You last visited 1 day ago.";
  } else {
    content.textContent = `You last visited ${daysDiff} days ago.`;
  }
}

// Store current visit AFTER message logic
localStorage.setItem("visitDate", now);
