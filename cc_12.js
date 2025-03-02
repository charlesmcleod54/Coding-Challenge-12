// Task 1
function createRevenueCard() {
    const dashboard = document.getElementById('dashboard');
    const dashboardQuery = document.querySelector('#dashboard');

    const revenueCard = document.createElement('div');

    revenueCard.setAttribute('class', 'metric-card');
    revenueCard.setAttribute('id', 'revenueCard');

    revenueCard.innerHTML = '<strong>Revenue</strong>: $0';

    dashboard.appendChild(revenueCard);
}

document.addEventListener('DOMContentLoaded', function() {
    createRevenueCard();
});

// Task 2
function updateMetricCards() {
    const metricCards = document.querySelectorAll('.metric-card');

    const metricCardsArray = Array.from(metricCards);

    metricCardsArray.forEach(card => {
        const title = card.querySelector('h3');
        title.textContent = '${title.textContent} - Updated';

        card.style.backgroundColor = 'lightgreen';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateMetricCards();
});

// task 3
function addInventoryItem(itemName) {
    const inventoryList = document.getElementById('inventoryList');

    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'product-item');
    listItem.setAttribute('data-product', itemName);
    listItem.textContent = itemName;

    listItem.addEventListener('click', function() {
        inventoryList.removeChild(listItem);
    });

    inventoryList.appendChild(listItem);
}

document.addEventListener('DOMContentLoaded', function() {
    const addLaptopButton = 
document.querySelector('button[onclick="addInventoryItem(\'Laptop\')"]');
    const addSmartphoneButton = 
document.querySelector('button[onclick="addInventoryItem(\'Smartphone\')"]');

    addLaptopButton.addEventListener('click', () => addInventoryItem('Laptop'));
    addSmartphoneButton.addEventListener('click', () => addInventoryItem('Smartphone'));
});

// Task 4
function createCustomerCards() {
    const customerSection = document.getElementById('customerSection');

    const customers = [
        { name: 'John', id: 1 },
        { name: 'Josh', id: 2 },
        { name: 'Jake', id: 3 },
    ];

    customers.forEach(customer => {
        const customerCard = document.createElement('div');
        customerCard.classList.add('customer-card');
        customerCard.textContent = customer.name;

        customerCard.addEventListener('click', function(event) {
            console.log('Customer card clicked');
            event.stopPropagation();
        });

        customerSection.appendChild(customerCard);
    });

    customerSection.addEventListener('click', function() {
        console.log('Customer section clicked');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createCustomerCards();
});
