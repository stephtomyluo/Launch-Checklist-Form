// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.querySelector("form");

  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");

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
    
    if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false) {
      alert("Text is required for Pilot and Co-Pilot");
      event.preventDefault();
    } 
    
    let allNumbers = () => {
      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
      alert("Numeric is required for Fuel Level and Cargo Mass");
      return false 
      event.preventDefault();
    } else {
      return true
    }
  }

  allNumbers()

    // Functions
    let fullFuelLevel = () => {
      if (fuelLevelInput.value < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML =
          "Not enough fuel for journey";
        document.getElementById("launchStatus").innerHTML =
          "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        return false;
      } else {
        document.getElementById("fuelStatus").innerHTML =
          "Enough fuel for journey";
        return true;
      }
    };

    let lightCargo = () => {
      if (cargoMassInput.value > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML =
          "Too much mass for take off";
        document.getElementById("launchStatus").innerHTML =
          "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        return false;
      } else {
        document.getElementById("cargoStatus").innerHTML =
          "Light enough for take off";
        return true;
      }
    };

    let readyToLaunch = () => {
      if (lightCargo() === true && fullFuelLevel() === true && allNumbers() === true) {
        event.preventDefault();
        document.getElementById("launchStatus").innerHTML =
          "Shuttle ready for launch";
        document.getElementById("launchStatus").style.color = "green";

        pilotStatus.innerHTML = `${pilotNameInput.value} is ready for launch`;
        copilotStatus.innerHTML = `${copilotNameInput.value} is ready for launch`;
      } else {
        event.preventDefault();
        document.getElementById("launchStatus").innerHTML =
          "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";

        pilotStatus.innerHTML = `${pilotNameInput.value} is not ready for launch`;
        copilotStatus.innerHTML = `${copilotNameInput.value} is not ready for launch`;
      }
    };

    readyToLaunch();
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
