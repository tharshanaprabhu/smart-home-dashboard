document.addEventListener("DOMContentLoaded", function () {

  let lightOn = false;
  let fanOn = false;
  let securityLocked = true;
  let temperature = 25;

  window.toggleLight = function () {
    lightOn = !lightOn;
    document.getElementById("lightBtn").innerText = lightOn ? "ON 💡" : "OFF";
  }

  window.toggleFan = function () {
    fanOn = !fanOn;
    document.getElementById("fanBtn").innerText = fanOn ? "ON 🌀" : "OFF";
  }

  window.increaseTemp = function () {
    temperature++;
    document.getElementById("temp").innerText = temperature + "°C";
  }

  window.decreaseTemp = function () {
    temperature--;
    document.getElementById("temp").innerText = temperature + "°C";
  }

  window.toggleSecurity = function () {
    securityLocked = !securityLocked;
    document.getElementById("security").innerText =
      securityLocked ? "Locked 🔒" : "Unlocked 🔓";
    document.getElementById("securityBtn").innerText =
      securityLocked ? "Unlock" : "Lock";
  }

});
