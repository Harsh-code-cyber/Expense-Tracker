
// Get HTML elements
const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");
const transactionList = document.getElementById("transaction-list");

// Store transactions temporarily
let transactions = [];

// Format amount as Indian currency
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(amount);
}

// Calculate dashboard totals
function updateSummary() {
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach(function(transaction) {
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpenses += transaction.amount;
        }
    });

    const balance = totalIncome - totalExpenses;

    incomeElement.textContent = formatCurrency(totalIncome);
    expensesElement.textContent = formatCurrency(totalExpenses);
    balanceElement.textContent = formatCurrency(balance);
}

// Display transactions
function displayTransactions() {
    transactionList.innerHTML = "";

    if (transactions.length === 0) {
        transactionList.innerHTML = `
            <tr>
                <td colspan="5">No transactions yet.</td>
            </tr>
        `;
        return;
    }

    transactions.forEach(function(transaction) {
        const row = document.createElement("tr");

        const values = [
            transaction.description,
            transaction.category,
            transaction.type,
            formatCurrency(transaction.amount),
            transaction.date
        ];

        values.forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        // Create delete button
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            deleteTransaction(transaction.id);
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        transactionList.appendChild(row);
    });
}

// Add a new transaction
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;
    const category = categoryInput.value;
    const date = dateInput.value;

    if (!description || !Number.isFinite(amount) || amount <= 0 || !date) {
        alert("Please enter valid transaction details.");
        return;
    }

    const transaction = {
        id: Date.now(),
        description: description,
        amount: amount,
        type: type,
        category: category,
        date: date
    };

    transactions.push(transaction);

    updateSummary();
    displayTransactions();

    expenseForm.reset();
});

// Delete a transaction
function deleteTransaction(id) {
    transactions = transactions.filter(function(transaction) {
        return transaction.id !== id;
    });

    updateSummary();
    displayTransactions();
}

// Set today's date as default
dateInput.value = new Date().toLocaleDateString("en-CA");

// Initial dashboard display
updateSummary();
displayTransactions();
