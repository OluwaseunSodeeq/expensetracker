// =========================DECLERATION OF VARIABLES===========================

const firstButton = document.getElementsByClassName("firstButton")[0];
const inputList = document.querySelector(".inputList");
const formerWithin = document.getElementsByTagName("button")[1];
const latterWithin = document.getElementsByClassName("latterWithin")[0];
const allInputs = document.querySelectorAll("input");
const aggregate = document.querySelector(".total");
const btnRemover = document.querySelector(".removedButton");

// =========================To make the Input-Lists come to live =========================
firstButton.onclick = function () {
  inputList.style.display = "block";
};

// ========================= To hide the input-lists and to clear whatever the users enter into the input =========================
formerWithin.onclick = function () {
  allInputs.forEach((input) => {
    input.value = "";
  });

  inputList.style.display = "none";
};

latterWithin.onclick = function () {
  let firstInput = "";
  let secondInput = 0;
  let thirdInput = "";

  if (
    allInputs[0].value.trim() === "" ||
    allInputs[1].value === "" ||
    allInputs[1].value <= 0 ||
    allInputs[2].value === ""
  ) {
    return alert(
      " Fields are not properly filled, \n kindly check and do the needful!",
    );
  }

  allInputs.forEach((input) => {
    if (input.type === "text") {
      firstInput = input.value;
    } else if (input.type === "number") {
      secondInput = input.value;
    } else if (input.type === "date") {
      thirdInput = input.value;
    }
  });

  document.querySelector(".total").innerHTML += newExpense(
    firstInput,
    secondInput,
    thirdInput,
  );
  inputList.style.display = "none";

  allInputs.forEach((input) => {
    input.value = "";
  });

  eliminateExpenseList();
};

//============This is where i defined the funtion for adding new expense================
function newExpense(firstInput, secondInput, thirdInput) {
  // An array is created for months
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // This is where i deeclared variable for Date and its Items and an hyphen is used to split the Items
  const date = thirdInput.split("-");
  const year = date[0];
  const month = date[1];
  const day = date[2];

  //This is where the users input is entering
  return `
        <div class="expenseList">
                    <div class="expenseDate">
                        <p>${day}</p>
                        <p>${months[month - 1]}</p>
                        <p>${year}</p>
                    </div>
                    <p id="item">${firstInput}</p>
                    <p id="amount">${secondInput}</p>
                    <button class="removedButton">Remove</button>
        </div>

    `;
}

//============== This is where  we cancel whatever users might have added to the expense list
function eliminateExpenseList() {
  document.querySelectorAll(".removedButton").forEach((btn, i) => {
    btn.addEventListener("click", function () {
      aggregate.removeChild(document.querySelectorAll(".expenseList")[i]);
    });
  });
}
