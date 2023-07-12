(function () {
  const buttons = document.querySelectorAll(".counterBtn");
  const counter = document.querySelector("#counter");

  let count = 0;
  buttons.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (button.classList.contains("lower")) {
        count--;
      } else if (button.classList.contains("add")) {
        count++;
      }

      counter.textContent = count;
      if (count < 0) {
        counter.style.color = "red";
      } else if (count > 0) {
        counter.style.color = "green";
      } else {
        counter.style.color = "black";
      }
    });
  });
})();
