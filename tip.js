let bill = document.getElementById('bill');
let nPeople = document.getElementById('n-people');
let customTip = document.getElementById('custom-tip');

let tipButtons = document.querySelectorAll("input[type=button]");
let billTip = 0;

let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');

tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Сбрасываем классы у всех кнопок и очищаем custom tip
        tipButtons.forEach((btn) => btn.classList.remove("pressed-button"));
        customTip.value = "";

        // Добавляем класс только к нажатой кнопке
        button.classList.add("pressed-button");

        billTip = ((+(button.value).substring(0, (button.value).length - 1)) / 100);
        calculateTip();
    });
});

customTip.addEventListener("input", () => {
    tipButtons.forEach((btn) => btn.classList.remove("pressed-button"));

    let customValue = customTip.value;
    billTip = customValue > 0 ? customValue / 100 : 0;
    calculateTip();
});

function calculateTip() {
    let billValue = bill.value;
    let nPeopleValue = nPeople.value;

    if (billValue > 0 && nPeopleValue > 0) {
        let totalCalc = (+(billValue / nPeopleValue * (1 + billTip)).toFixed(2));
        total.innerText = `$${totalCalc}`;
        tipAmount.innerText = `$${+((totalCalc - (billValue / nPeopleValue)).toFixed(2))}`;
    }
}

function reset() {
    bill.value = "";
    nPeople.value = "";
    customTip.value = "";
    tipButtons.forEach((btn) => btn.classList.remove("pressed-button"));
    billTip = 0;
    tipAmount.innerText = '$0.00';
    total.innerText = '$0.00';
}
