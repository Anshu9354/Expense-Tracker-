const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalAmountSpan = document.getElementById('total-amount');

let totalAmount = 0;


function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid expense details');
        return;
    }


    totalAmount += amount;
    totalAmountSpan.textContent = totalAmount.toFixed(2);


    const li = document.createElement('li');
    li.innerHTML = `
        <span>${name}</span>
        <span>$${amount.toFixed(2)}</span>
    `;
    expenseList.appendChild(li);

   
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}


addExpenseButton.addEventListener('click', addExpense);
