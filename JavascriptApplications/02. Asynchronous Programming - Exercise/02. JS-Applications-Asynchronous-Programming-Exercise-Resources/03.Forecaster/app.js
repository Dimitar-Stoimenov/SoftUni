const forecastDivElement = document.getElementById('forecast');

function attachEvents() {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', async () => {
        forecastDivElement.style.display = 'none';

        const location = document.getElementById('location').value;
        const weatherInfo = await getWeather();
        const result = Object.values(weatherInfo).find(loc => loc.name.toLowerCase() == location.toLowerCase());

        try {
            const locationCode = result.code;
            getForecast(locationCode);
        } catch {
            alert('invalid location');
        }
    });
}

attachEvents();

async function getWeather() {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = await response.json();

    return data
}

async function getForecast(code) {
    const currentWeatherUrl = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const forecastWeatherUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;

    const [currentInfo, forecastInfo] = await Promise.all([
        fetch(currentWeatherUrl),
        fetch(forecastWeatherUrl)
    ])

    const currentData = await currentInfo.json();
    const forecastData = await forecastInfo.json();

    insertWeatherInfoIntoDom(currentData, forecastData);
}

function insertWeatherInfoIntoDom(currentWeather, forecastWeather) {
    const { name: locationName, forecast: { low: currentLow, high: currentHigh, condition: currentCondition } } = currentWeather;

    forecastDivElement.style.display = 'block';

    const currentWeatherDivElement = document.getElementById('current');
    const upcomingWeatherDivElement = document.getElementById('upcoming');

    const currentResult = e('div', { className: 'forecasts', id: 'replace1' },
        e('span', { className: 'condition symbol' }, getConditionSymbol(currentCondition)),
        e('span', { className: 'condition' },
            e('span', { className: 'forecast-data' }, locationName),
            e('span', { className: 'forecast-data' }, `${currentLow}°/${currentHigh}°`),
            e('span', { className: 'forecast-data' }, currentCondition)
        )
    )

    const replaceElement1 = document.getElementById('replace1');

    if (replaceElement1) {
        replaceElement1.replaceWith(currentResult)
    } else {
        currentWeatherDivElement.appendChild(currentResult);
    }

    const forecastInfoElement = e('div', { className: 'forecast-info', });
    const replaceElement2 = document.getElementById('replace2');

    if (replaceElement2) {
        replaceElement2.replaceWith(forecastInfoElement);
    }

    forecastWeather.forecast.forEach(day => {
        const { low: forecastLow, high: forecastHigh, condition: forecastCondition } = day;

        const result = e('span', { className: 'upcoming', },
            e('span', { className: 'symbol' }, getConditionSymbol(forecastCondition)),
            e('span', { className: 'forecast-data' }, `${forecastLow}°/${forecastHigh}°`),
            e('span', { className: 'forecast-data' }, forecastCondition),
        )

        forecastInfoElement.appendChild(result);
    })

    upcomingWeatherDivElement.appendChild(forecastInfoElement);
    forecastInfoElement.id = 'replace2';
}

function getConditionSymbol(condition) {
    let result = '';

    switch (condition) {
        case 'Sunny':
            result = '☀';
            break;
        case 'Partly sunny':
            result = '⛅';
            break;
        case 'Overcast':
            result = '☁';
            break;
        case 'Rain':
            result = '☂';
            break;
    }

    return result;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == ' number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}