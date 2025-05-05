// Skill Pie Chart Animation using Chart.js
const ctx = document.getElementById('skillPieChart').getContext('2d');
const skillPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Java', 'Spring Boot', 'SQL', 'Web Development', 'Robotics'],
        datasets: [{
            data: [80, 70, 60, 50, 90],  // Change these numbers based on your skill levels
            backgroundColor: ['#f39c12', '#3498db', '#e74c3c', '#2ecc71', '#9b59b6'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});
