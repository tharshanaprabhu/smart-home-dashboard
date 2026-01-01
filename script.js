let lightOn = false;
let fanOn = false;
let securityLocked = true;
let temperature = 25;

function toggleLight() {
  lightOn = !lightOn;
  document.getElementById("lightBtn").innerText = lightOn ? "ON 💡" : "OFF";
}

function toggleFan() {
  fanOn = !fanOn;
  document.getElementById("fanBtn").innerText = fanOn ? "ON 🌀" : "OFF";
}

function increaseTemp() {
  temperature++;
  document.getElementById("temp").innerText = temperature + "°C";
}

function decreaseTemp() {
  temperature--;
  document.getElementById("temp").innerText = temperature + "°C";
}

function toggleSecurity() {
  securityLocked = !securityLocked;
  document.getElementById("security").innerText =
    securityLocked ? "Locked 🔒" : "Unlocked 🔓";
  document.getElementById("securityBtn").innerText =
    securityLocked ? "Unlock" : "Lock";
}