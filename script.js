// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.querySelector("form");

  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");

  let launchStatus = document.querySelector("#launchStatus");
  let faultyItems = document.querySelector("#faultyItems");
  let pilotStatus = document.querySelector("#pilotStatus");
  let copilotStatus = document.querySelector("#copilotStatus");
  let fuelStatus = document.querySelector("#fuelStatus");
  let cargoStatus = document.querySelector("cargoStatus");

  form.addEventListener("submit", function(event) {
    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("All fields are required!");
      event.preventDefault();
    }

    // Functions
  });

  //Mission Destination Information
  let json = [];
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function(response) {
      response.json().then(function(json) {
        const missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
          <h2>Mission Destination</h2>
            <ol>
              <li>Name: ${json[1].name}</li>
              <li>Diameter: ${json[1].diameter}</li>
              <li>Star: ${json[1].star}</li>
              <li>Distance from Earth: ${json[1].distance}</li>
              <li>Number of Moons: ${json[1].moons}</li>
            </ol>
              <img src="${json[1].image}">
  `;
      });
    }
  );
});
