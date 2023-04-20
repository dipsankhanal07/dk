function submitName() {
  var name = document.getElementById("nameInput").value;
  localStorage.setItem("name", name);
  window.location.href = "display.html";
}
