function displayCurrentTimeandDay() {
  let currentDate = new Date();

  // Get the current UTC time components
  let hours = currentDate.getUTCHours();
  let minutes = currentDate.getUTCMinutes();
  let seconds = currentDate.getUTCSeconds();

  // Get the current UTC day 
  let day = currentDate.getUTCDay();

  // Format time to always have two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Convert day number to day name
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Display the UTC time and day
  document.getElementById(
    "time"
  ).innerHTML = `${hours}:${minutes}:${seconds}`;
  document.getElementById("current-day").innerHTML = `${daysOfWeek[day]}`;
}

// Update the time and day every second
setInterval(displayCurrentTimeandDay, 1000);

displayCurrentTimeandDay();

