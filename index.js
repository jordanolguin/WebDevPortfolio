const workoutWizardLink = document.querySelector("#workout-wizard-link");
const roadTripBuddyLink = document.querySelector("#road-trip-buddy-link");
const weatherDashboardLink = document.querySelector("#weather-dashboard-link");
const employeeTrackerLink = document.querySelector("#employee-tracker-link");
const readmeGeneratorLink = document.querySelector("#readme-generator-link");
const resume = document.querySelector("#resume-link");

workoutWizardLink.addEventListener("click", () => {
  window.location.href =
    "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/";
});

roadTripBuddyLink.addEventListener("click", () => {
  window.location.href = "https://dsstad.github.io/travel-weather/";
});

weatherDashboardLink.addEventListener("click", () => {
  window.location.href = "https://jordanolguin.github.io/WeatherDashboard/";
});

employeeTrackerLink.addEventListener("click", () => {
  window.location.href = "https://github.com/jordanolguin/EmployeeTracker";
});

readmeGeneratorLink.addEventListener("click", () => {
  window.location.href = "https://github.com/jordanolguin/REAMDMEGenerator";
});

resume.addEventListener("click", () => {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalImage = document.createElement("img");
  modalImage.src = "assets/ResumeScreenshot1.png";

  modalContainer.appendChild(modalImage);
  document.body.appendChild(modalContainer);

  modalContainer.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
  });
});
