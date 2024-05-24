document.addEventListener("DOMContentLoaded", function() {
    const employees = [
        { name: "Omprakash", salary: 8000 },
        { name: "Lalit", salary: 12000 },
        { name: "Rajesh", salary: 12000 },
        { name: "Hira", salary: 15000 },
        { name: "Sunil", salary: 12000 },
        { name: "Hariom", salary: 10000 },
        { name: "Pawan", salary: 12000 },
    ];

    const stockMaterials = [
        { name: "06mm", stock: 1000, rate: 400 },
        { name: "10mm", stock: 500, rate: 400 },
        { name: "20mm", stock: 1000, rate: 650 },
        { name: "Wmm", stock: 800, rate: 500 },
        { name: "Gsb", stock: 600, rate: 450 },
        { name: "Dust", stock: 1000, rate: 300 },
        { name: "17mm", stock: 1200, rate: 400 },
        { name: "04mm", stock: 800, rate: 1500 },
    ];

    const expenses = {
        "Labour salary": 81000,
        "Diesel": 500000,
        "Maintenance": 700000,
        "Electricity bill": 200000,
        "Oil": 150000,
        "Tiffin": 14000,
    };

    const income = {
        "06mm sale": 160000,
        "10mm sale": 160000,
        "20mm sale": 390000,
        "Wmm sale": 200000,
        "Gsb sale": 90000,
        "Dust sale": 30000,
        "17mm sale": 280000,
        "04mm sale": 1200000,
    };

    function populateTable(tableId, data) {
        const table = document.getElementById(tableId).querySelector("tbody");
        data.forEach(item => {
            const row = document.createElement("tr");
            for (const key in item) {
                const cell = document.createElement("td");
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            table.appendChild(row);
        });
    }

    function populateList(listId, data) {
        const list = document.getElementById(listId);
        for (const key in data) {
            const listItem = document.createElement("li");
            listItem.textContent = `${key} - ${data[key].toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`;
            list.appendChild(listItem);
        }
    }

    function calculateSummary(expenses, income) {
        const totalExpenses = Object.values(expenses).reduce((acc, val) => acc + val, 0);
        const totalIncome = Object.values(income).reduce((acc, val) => acc + val, 0);
        const netProfit = totalIncome - totalExpenses;

        document.getElementById("total-expenses").textContent = `Total Expenses: ${totalExpenses.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`;
        document.getElementById("total-income").textContent = `Total Income: ${totalIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`;
        document.getElementById("net-profit").textContent = `Net Profit: ${netProfit.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`;
    }

    populateTable("employee-table", employees);
    populateTable("stock-table", stockMaterials);
    populateList("expenses-list", expenses);
    populateList("income-list", income);
    calculateSummary(expenses, income);
});
