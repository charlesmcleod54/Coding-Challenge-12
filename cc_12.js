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

