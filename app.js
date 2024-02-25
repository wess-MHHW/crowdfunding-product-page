// GLOBAL VARIABLES
const radioInputs = document.querySelectorAll('input[type="radio"]');
const numberInputs = document.querySelectorAll('input[type="number"]');
const setPledges = document.querySelectorAll(".set-pledge");
const selectionModel = document.querySelector(".selection-model-container");
const model = document.querySelector(".selection-model");
const subs = document.querySelectorAll(".subscription");

// SHOW MENU
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", (event) => {
  const hamburgerMenuContainer = document.querySelector(".menu-container");
  if (
    event.currentTarget.firstElementChild.getAttribute("src") ===
    "./images/icon-hamburger.svg"
  ) {
    event.currentTarget.firstElementChild.setAttribute(
      "src",
      "./images/icon-close-menu.svg"
    );
    hamburgerMenuContainer.classList.add("show");
  } else {
    event.currentTarget.firstElementChild.setAttribute(
      "src",
      "./images/icon-hamburger.svg"
    );
    hamburgerMenuContainer.classList.remove("show");
  }
});

// SAVE PROJECT
const bookmark = document.querySelector(
  ".welcome-section .buttons button:last-child"
);
const firstSection = document.querySelector(".welcome-section");
bookmark.addEventListener("click", (event) => {
  const span = event.currentTarget.querySelector("span:last-child");
  if (firstSection.classList.contains("saved")) {
    firstSection.classList.remove("saved");
    span.textContent = "Bookmark";
  } else {
    firstSection.classList.add("saved");
    span.textContent = "Bookmarked";
  }
});

// STATS INITIAL ANIMATION
let totalBackers = "5007";
let totalMoney = "89,914";
let moneyGoal = "100,000";
let daysLeft = 56;

const money = document.querySelector("#money");
const number = document.querySelector("#number");
const days = document.querySelector("#days");
const progressBar = document.querySelector(".filled-bar");

window.addEventListener("DOMContentLoaded", () => {
  // MONEY ANIMATION
  let value = parseFloat(totalMoney.replace(",", "."));
  let counter1 = 0;
  let timeout1 = setInterval(() => {
    if (counter1 >= value) {
      clearInterval(timeout1);
      money.innerText = `$${totalMoney}`;
    } else {
      money.innerText = `$${counter1.toFixed(3).replace(".", ",")}`;
      counter1 += 1;
    }
  }, 1);

  // BACKERS NUMBER ANIMATION
  let counter2 = 0;
  let timeout2 = setInterval(() => {
    if (counter2 >= totalBackers) {
      clearInterval(timeout2);
      number.innerText = totalBackers;
    } else {
      counter2 += 30;
      number.innerText = counter2;
    }
  }, 0.5);

  // DAYS ANIMATION
  let counter3 = 0;
  let timeout3 = setInterval(() => {
    if (counter3 >= daysLeft) {
      clearInterval(timeout3);
    } else {
      counter3 += 1;
    }
    days.innerText = counter3;
  }, 0.1);

  // PROGRESS BAR ANIMATION
  let ratio = Math.min(1, value / parseFloat(moneyGoal.replace(",", ".")));
  progressBar.style.width = `${Math.min(ratio * 100, 100)}%`;
});

// OPEN MODEL SELECTION
const backButton = document.querySelector("#back-project");
backButton.addEventListener("click", () => {
  selectionModel.classList.add("show");
});

// CLOSE MODEL SELECTION
const closeSelectionModel = document.querySelector("#close-selection-model");
closeSelectionModel.addEventListener("click", () => {
  selectionModel.classList.remove("show");

  let timeout = setTimeout(() => {
    resetSelectionModel();
    clearTimeout(timeout);
  }, 700);
});

// SELECT REWARD BUTTONS
const selectRewardButtons = document.querySelectorAll(".select-reward-btn");
selectRewardButtons.forEach((selectRewardButton, index) => {
  selectRewardButton.addEventListener("click", (event) => {
    selectionModel.classList.add("show");
    if (index === 0) {
      const bamboo = document.getElementById("bamboo-stand-sub");
      const input = document.getElementById("bamboo-stand");
      let d = bamboo.offsetTop - model.offsetTop;
      window.scroll({
        left: 0,
        top: d,
      });
      bamboo.classList.add("selected");
      input.checked = true;
      setPledges[index + 1].classList.add("show-pledge");
    } else if (index === 1) {
      const black = document.getElementById("black-special-edition-sub");
      const input = document.getElementById("black-edition-stand");
      let d = black.offsetTop - 2 * model.offsetTop;
      window.scroll({
        left: 0,
        top: d,
      });
      black.classList.add("selected");
      input.checked = true;
      setPledges[index + 1].classList.add("show-pledge");
    }
  });
});

// SELECT SUBSCRIPTION
subs.forEach((sub, index) => {
  sub.addEventListener("click", () => {
    if (index !== 3) {
      resetSelectionModel();
      const inputs = document.querySelectorAll('input[type="radio"]');
      const setPledges = document.querySelectorAll(".set-pledge");
      inputs[index].checked = true;
      sub.classList.add("selected");
      setPledges[index].classList.add("show-pledge");
    }
  });
});

const contunieButtons = document.querySelectorAll(".continue-button");
const successModel = document.querySelector(".success-modal");

// zadadz
// CONTINUE BUTTONS
let amount = 0;
contunieButtons.forEach((contunieButton, index) => {
  contunieButton.addEventListener("click", () => {
    if (index === 1) {
      if (numberInputs[0].value) {
        amount = numberInputs[0].value;
      }
    } else if (index === 2) {
      if (numberInputs[1]) {
        amount = numberInputs[1].value;
      } else {
        amount = 0;
      }
    }

    if (index === 0) {
      amount = 0;
      model.classList.add("hide");
      successModel.classList.remove("hide");
      window.scroll({ left: 0, top: successModel.offsetTop - 100 });
      let timeout = setTimeout(() => {
        resetSelectionModel();
        clearTimeout(timeout);
      }, 700);
    } else if (index === 1 && amount >= 25) {
      model.classList.add("hide");
      successModel.classList.remove("hide");
      window.scroll({ left: 0, top: successModel.offsetTop - 100 });
      let timeout = setTimeout(() => {
        resetSelectionModel();
        clearTimeout(timeout);
      }, 700);
    } else if (index === 2 && amount >= 75) {
      model.classList.add("hide");
      successModel.classList.remove("hide");
      window.scroll({ left: 0, top: successModel.offsetTop - 100 });
      let timeout = setTimeout(() => {
        resetSelectionModel();
        clearTimeout(timeout);
      }, 700);
    } else if (index === 3 && amount >= 200) {
      model.classList.add("hide");
      successModel.classList.remove("hide");
      window.scroll({ left: 0, top: successModel.offsetTop - 100 });
      let timeout = setTimeout(() => {
        resetSelectionModel();
        clearTimeout(timeout);
      }, 700);
    }

    if (amount !== 0) {
      let newValue =
        parseFloat(money.innerText.slice(1).replace(",", ".")) +
        parseFloat(amount.replace(",", "."));
      totalMoney = newValue.toString().replace(".", ",");
      totalBackers++;

      number.innerText++;

      console.log(newValue);

      let counter = parseFloat(money.innerText.slice(1).replace(",", "."));
      let timeout = setInterval(() => {
        if (counter >= newValue) {
          clearInterval(timeout);
          money.innerText = `$${totalMoney}`;
        } else {
          money.innerText = `$${counter.toFixed(3).replace(".", ",")}`;
          counter += 1;
        }
      }, 1);
      let ratio = newValue / parseFloat(moneyGoal.replace(",", "."));
      progressBar.style.width = `${Math.min(ratio * 100, 100)}%`;
    }
  });
});

// GOT IT BUTTON
const gotItButton = document.querySelector("#got-it-button");
gotItButton.addEventListener("click", () => {
  selectionModel.classList.remove("show");
  let timeout = setTimeout(() => {
    model.classList.remove("hide");
    successModel.classList.add("hide");
    clearTimeout(timeout);
  }, 700);
});

// UTILITY FUNCTIONS
function resetSelectionModel() {
  radioInputs.forEach((input) => {
    input.checked = false;
  });
  subs.forEach((sub) => {
    sub.classList.remove("selected");
  });
  setPledges.forEach((setPledge) => {
    setPledge.classList.remove("show-pledge");
  });
  numberInputs.forEach((numberInput, index) => {
    numberInput.value = index === 0 ? 25 : 75;
  });
}
