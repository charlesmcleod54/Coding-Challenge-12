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

