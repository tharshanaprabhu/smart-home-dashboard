let lightOn=false, fanOn=false, securityLocked=true, temperature=25;
function toggleLight(){ lightOn=!lightOn; document.querySelectorAll("button")[0].innerText= lightOn?"ON 💡":"OFF"; }
function toggleFan(){ fanOn=!fanOn; document.querySelectorAll("button")[1].innerText= fanOn?"ON 🌀":"OFF"; }
function increaseTemp(){ temperature++; document.getElementById("temp").innerText=temperature+"°C"; }
function decreaseTemp(){ temperature--; document.getElementById("temp").innerText=temperature+"°C"; }
function toggleSecurity(){
 securityLocked=!securityLocked;
 document.getElementById("security").innerText= securityLocked?"Locked 🔒":"Unlocked 🔓";
 document.querySelectorAll("button")[4].innerText= securityLocked?"Unlock":"Lock";
}
