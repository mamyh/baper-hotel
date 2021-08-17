//common varriable
const depositeBtn = document.getElementById('deposite-btn');
const depositeInput = document.getElementById('deposite-input');
const displayDeposite = document.getElementById('display-deposite');

const withdrowBtn = document.getElementById('withdrow-btn');
const withdrowInput = document.getElementById('withdrow-input');
const displayWithdrow = document.getElementById('display-withdrow');

const displayBalance = document.getElementById('display-balance');

// deposite part 
depositeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //get and put the deposite
    const depositeAmount = parseFloat(depositeInput.value);
    const depositeBalance = parseFloat(displayDeposite.innerText);
    const deposited = depositeAmount + depositeBalance;
    displayDeposite.innerText = deposited;
    //clear the input field
    depositeInput.value = "";

    //update the balance
    displayBalance.innerText = parseFloat(displayBalance.innerText) + depositeAmount;
});

//withdrow part 
withdrowBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //get and put the deposite
    const withdrowAmount = parseFloat(withdrowInput.value);
    const withdrowBalance = parseFloat(displayWithdrow.innerText);
    const withdrow = withdrowAmount + withdrowBalance;
    displayWithdrow.innerText = withdrow;
    //clear the input field
    withdrowInput.value = "";

    //update the balance
    displayBalance.innerText = parseFloat(displayBalance.innerText) - withdrowAmount;
});