if (typeof Storage !== "undefined") {
  let saveBtn = document.getElementById("saveBtn");
  let showBtn = document.getElementById("showBtn");
  let clearBtn = document.getElementById("clearBtn");
  let hexInput = document.getElementById("hex");
  let colorNameInput = document.getElementById("colorName");
  let list = document.getElementById("list");

  saveBtn.addEventListener("click", function () {
    let hex = hexInput.value;
    let colorName = colorNameInput.value;
    sessionStorage.setItem(hex, colorName);
    hexInput.value = "";
    colorNameInput.value = "";
  });

  showBtn.addEventListener("click", function () {
    list.innerHTML = "Dane z sessionStorage:";
    for (let i = 0; i < sessionStorage.length; i++) {
      let hex = sessionStorage.key(i);
      let colorName = sessionStorage.getItem(hex);
      let li = document.createElement("li");
      li.textContent = colorName + ", kod koloru: " + hex;
      li.style.backgroundColor = "#" + hex;
      list.appendChild(li);
    }
  });

  clearBtn.addEventListener("click", function () {
    sessionStorage.clear();
    list.innerHTML = "";
  });
} else {
  alert("Twoja przeglądarka nie obsługuje session storage!");
}
