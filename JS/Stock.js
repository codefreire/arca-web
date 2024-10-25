
// Verificar si hay un usuario logueado en LocalStorage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
    window.location.href = "../index.html"; // Redirigir al login si no hay sesión activa
}

// Mostrar datos del usuario en la interfaz
const welcomeMessage = document.getElementById('welcomeMessage');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutBtn = document.getElementById('logoutBtn');

welcomeMessage.textContent = `Buenos días, ${loggedInUser.name}`;

// Cerrar sesión y eliminar datos del LocalStorage
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = "../index.html";
});



//grafico de stock

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
                borderColor: 'rgba(218, 216, 219, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: results.data[0][2],
                data: results.data.slice(1).map(row => Number(row[2])),
                fill: true,
                backgroundColor: 'rgba(255, 99, 71, 0.3)',
                borderColor: 'rgba(225, 37, 27, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: results.data[0][3],
                data: results.data.slice(1).map(row => Number(row[3])),
                fill: true,
                backgroundColor: 'rgba(34, 139, 34, 0.3)',
                borderColor: 'rgba(34, 139, 34, 0.3)',
                borderWidth: 2,
                tension: 0.4
            }
        ];

        renderChart(labels, datasets);
    } catch (error) {
        console.error('Error fetching or parsing the data:', error);
    }
}

fetchDataFromGoogleSheets();



//grafico de ventas     

const ctx1 = document.getElementById('myChart1').getContext('2d');
let myChart1;
const googleSheetURL1 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnoGZmieHRZnUC8l-NnAPrWXOd6NY1bNvYx5_BN30O9JkErCSmfD7InWgu9VHLKRiByuvp814ggetY/pub?output=csv';

function renderChart1(labels, datasets) {
    if (myChart1) {
        myChart1.destroy();
    }

    myChart1 = new Chart(ctx1, {
        type: 'bar', // Cambiar de 'line' a 'bar'
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

async function fetchDataFromGoogleSheets1() {
    try {
        const response = await fetch(googleSheetURL1);
        const csvText = await response.text();
        const results = Papa.parse(csvText, { header: false });
        const labels = results.data.slice(1).map(row => row[0]);

        const datasets = [
            {
                label: results.data[0][2],
                data: results.data.slice(1).map(row => Number(row[0])),
                backgroundColor: 'rgba(225, 37, 27, 1)', // Color de las barras
                borderColor: 'rgba(225, 37, 27, 1)', // Color del borde de las barras
                borderWidth: 2
            }
        ];

        renderChart1(labels, datasets);
    } catch (error) {
        console.error('Error fetching or parsing the data:', error);
    }
}

fetchDataFromGoogleSheets1()



//grafico de top 10

const ctx2 = document.getElementById('myChart2').getContext('2d');
let myChart2;
const googleSheetURL2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSB8BWZg1cAghSf3nahbWYW5FfmfcsL2C2DW-Dv4Ae-yDPg3r-gEeHgptWBr6Q478U-Y2-50n5mdg21/pub?output=csv';

function renderChart2(labels, datasets) {
    if (myChart2) {
        myChart2.destroy();
    }

    myChart2 = new Chart(ctx2, {
        type: 'bar', // Cambiar de 'line' a 'bar'
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

async function fetchDataFromGoogleSheets2() {
    try {
        const response = await fetch(googleSheetURL2);
        const csvText = await response.text();
        const results = Papa.parse(csvText, { header: false });
        const labels = results.data.slice(1).map(row => row[0]);

        const datasets = [
            {
                label: results.data[0][1],
                data: results.data.slice(1).map(row => Number(row[0])),
                backgroundColor: 'rgba(225, 37, 27, 1)', // Color de las barras
                borderColor: 'rgba(225, 37, 27, 1)', // Color del borde de las barras
                borderWidth: 2
            }
        ];

        renderChart2(labels, datasets);
    } catch (error) {
        console.error('Error fetching or parsing the data:', error);
    }
}

fetchDataFromGoogleSheets2()



//grafico de stocktop 10

const ctx3 = document.getElementById('myChart3').getContext('2d');
let myChart3;
const googleSheetURL3 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpNM3hGDxNwQLaooehwsF763tifPRP9fdz4tVOt6KcRBCQClJ7emqf-x5qzAo_GiQ-UBXhAmAixgCu/pub?output=csv';

function renderChart3(labels, datasets) {
    if (myChart3) {
        myChart3.destroy();
    }

    myChart3 = new Chart(ctx3, {
        type: 'line', // Cambiar de 'line' a 'bar'
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

async function fetchDataFromGoogleSheets3() {
    try {
        const response = await fetch(googleSheetURL3);
        const csvText = await response.text();
        const results = Papa.parse(csvText, { header: false });
        const labels = results.data.slice(1).map(row => row[0]);

        const datasets = [
            {
                label: results.data[0][1],
                data: results.data.slice(1).map(row => Number(row[1])),
                backgroundColor: 'rgba(225, 37, 27, 1)', // Color de las barras
                borderColor: 'rgba(225, 37, 27, 1)', // Color del borde de las barras
                borderWidth: 2
            }
        ];

        renderChart3(labels, datasets);
    } catch (error) {
        console.error('Error fetching or parsing the data:', error);
    }
}


fetchDataFromGoogleSheets3()