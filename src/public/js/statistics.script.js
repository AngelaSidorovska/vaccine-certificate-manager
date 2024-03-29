// Get the canvas element
const vaccinationChartByCityCtx = document.getElementById('vaccinationChartByCity').getContext('2d');
const sumVaccinatedUnvaccinatedChartCtx = document.getElementById('sumVaccinatedUnvaccinatedChart').getContext('2d');
const parsedVaccinationStatusPerCityData = JSON.parse(vaccinationStatusPerCityData);
const vaxPerCityColumns = [];
const vaccinatedArray = [];
const unvaccinatedArray = [];
let totalVaccinated = 0;
let totalUnvaccinated = 0;

const cityData = parsedVaccinationStatusPerCityData.map(({city, vaccinated, unvaccinated}) => ({
    city,
    vaccinated,
    unvaccinated,
}));

// Sort the array alphabetically based on city name
cityData.sort((a, b) => a.city.localeCompare(b.city));

for (const {city, vaccinated, unvaccinated} of cityData) {
    vaxPerCityColumns.push(city);
    vaccinatedArray.push(vaccinated);
    unvaccinatedArray.push(unvaccinated);
    totalVaccinated += vaccinated;
    totalUnvaccinated += unvaccinated;
}

const vaxStatusPerCityChartData = {
    labels: vaxPerCityColumns.sort(),
    datasets: [
        {
            label: 'Вакцинирани',
            data: vaccinatedArray,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Невакцинирани',
            data: unvaccinatedArray,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

const sumVaccinatedUnvaccinatedChartData = {
    labels: ['Вакцинирани', 'Невакцинирани'],
    datasets: [
        {
            label: 'Состојба на ниво на држава',
            data: [totalVaccinated, totalUnvaccinated],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

new Chart(vaccinationChartByCityCtx, {
    type: 'bar',
    data: vaxStatusPerCityChartData,
    options: {
        // Customize chart options as needed
        // For example, you can configure axes, legends, tooltips, etc.
    },
});

new Chart(sumVaccinatedUnvaccinatedChartCtx, {
    type: 'bar',
    data: sumVaccinatedUnvaccinatedChartData,
    options: {
        // Customize chart options as needed
        // For example, you can configure axes, legends, tooltips, etc.
    },
});
