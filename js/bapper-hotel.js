//common varriable
const depositeBtn = document.getElementById('deposite-btn');
const depositeInput = document.getElementById('deposite-input');
const displayDeposite = document.getElementById('display-deposite');

const withdrowBtn = document.getElementById('withdrow-btn');
const withdrowInput = document.getElementById('withdrow-input');
const displayWithdrow = document.getElementById('display-withdrow');

const displayBalance = document.getElementById('display-balance');

// common functions 
function userInput(input, innerText, isAdd) {
    const getInput = parseFloat(input.value);
    const myBalance = parseFloat(innerText.innerText);

    //clear the input field
    input.value = "";

    //update your total balance 
    if (isAdd) {
        displayBalance.innerText = parseFloat(displayBalance.innerText) + getInput;
    } else {
        displayBalance.innerText = parseFloat(displayBalance.innerText) - getInput;
    }

    return getInput + myBalance;
}

// deposite part 
depositeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //get and put the deposite

    displayDeposite.innerText = userInput(depositeInput, displayDeposite, true);


    //update the balance

});

//withdrow part 
withdrowBtn.addEventListener("click", function (e) {
    e.preventDefault();

    displayWithdrow.innerText = userInput(withdrowInput, displayWithdrow, false);
    //update the balance
    displayBalance.innerText = parseFloat(displayBalance.innerText) - withdrowAmount;
});