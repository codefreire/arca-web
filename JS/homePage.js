const loadChartBtn = document.getElementById('loadChart');
const ctx = document.getElementById('myChart').getContext('2d');
let myChart;
const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBL6-KsFhMXWVQpWdppTfBQS8l0aksQA9hKDqbd-1hvZIYuY0KuIWlSnth75SCaRGzTyanZZx9pPV5/pub?output=csv';

function renderChart(labels, datasets) {
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy'
                    },
                    pan: {
                        enabled: true,
                        mode: 'xy'
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Categorías'
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valores'
                    }
                }
            }
        }
    });
}

async function fetchDataFromGoogleSheets() {
    try {
        const response = await fetch(googleSheetURL);
        const csvText = await response.text();
        const results = Papa.parse(csvText, { header: false });
        const labels = results.data.slice(1).map(row => row[0]);

        const datasets = [
            {
                label: results.data[0][1],
                data: results.data.slice(1).map(row => Number(row[1])),
                fill: true,
                backgroundColor: 'rgba(0, 123, 255, 0.3)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: results.data[0][2],
                data: results.data.slice(1).map(row => Number(row[2])),
                fill: true,
                backgroundColor: 'rgba(255, 99, 71, 0.3)',
                borderColor: 'rgba(255, 99, 71, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: results.data[0][3],
                data: results.data.slice(1).map(row => Number(row[3])),
                fill: true,
                backgroundColor: 'rgba(34, 139, 34, 0.3)',
                borderColor: 'rgba(34, 139, 34, 1)',
                borderWidth: 2,
                tension: 0.4
            }
        ];

        renderChart(labels, datasets);
    } catch (error) {
        console.error('Error fetching or parsing the data:', error);
    }
}

loadChartBtn.addEventListener('click', fetchDataFromGoogleSheets);
