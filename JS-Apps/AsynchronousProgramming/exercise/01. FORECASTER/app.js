function attachEvents() {

    const baseURL = "https://judgetests.firebaseio.com";

    const buildGetURL = (period, x) => `${baseURL}/forecast/${period}/${x}.json`;

    const symbolMap = {

        "Sunny": '\u2600',
        "Partly sunny": "\u26C5",
        "Overcast": "\u2601",
        "Rain": "\u2614",
        "Degrees": "\xB0",
    }

    function handleError(x) {
        console.log(x);
        html.error().innerText = x;
    }

    function deserializeData(x) { return x.json(); }

    function fetchData(url, hError = handleError, dData = deserializeData) {
        return fetch(url)
            .then(dData)
            .catch(hError)
    }

    function createElement(tag, classNames, text = "") {

        let element = document.createElement(tag);
        element.innerText = text;

        classNames.split(' ').forEach(x => element.classList.add(x))

        return element;
    }

    function formatTemperature(min, max) {

        return `${min}${symbolMap['Degrees']}/${max}${symbolMap['Degrees']}`;
    }

    function visualizeCurrentWeather(currWeather, fragment) {

        fragment.appendChild(createElement('span', 'condition symbol', symbolMap[currWeather['forecast']['condition']]));

        const innerSpan = createElement('span', 'condition');

        innerSpan.appendChild(createElement('span', 'forecast-data', currWeather['name']));

        innerSpan.appendChild(createElement('span', 'forecast-data', formatTemperature(currWeather['forecast']['low'], currWeather['forecast']['high'])));

        innerSpan.appendChild(createElement('span', 'forecast-data', currWeather['forecast']['condition']))

        fragment.appendChild(innerSpan);
    }

    function createSpan(classNames, text = "") {

        return createElement('span', classNames, text);
    }

    function formatWeather(weather) {

        const span = createSpan('upcoming');

        const weatherSpan = createSpan('symbol', symbolMap[weather['condition']])

        span.appendChild(weatherSpan);

        const degreesSpan = createSpan('forecast-data', formatTemperature(weather['low'], weather['high']));

        span.appendChild(degreesSpan);

        const conditionSpan = createSpan('forecast-data', weather['condition']);

        span.appendChild(conditionSpan);

        return span;
    }

    function visualizeUpcomingWeather(upcomingWeather, fragment) {

        fragment.appendChild(createElement('div', 'forecast-info'))

        upcomingWeather['forecast'].map(formatWeather).forEach(x => fragment.appendChild(x));
    }

    const actions = {

        'submit': async() => {

            html.forecast().style.display = "none";
            html.reset();

            const locationInput = html.location();

            const weather = await fetchData(`${baseURL}/locations.json`)

            const locationWeatherInfo = weather.find(x => x.name === locationInput.value);

            if (locationWeatherInfo !== undefined) {

                html.error().innerText = "";

                const code = locationWeatherInfo['code'];

                const locationCurrentWeather = await fetchData(buildGetURL('today', code));

                const locationUpcomingWeather = await fetchData(buildGetURL('upcoming', code));

                const currentWeatherFragment = document.createDocumentFragment();

                visualizeCurrentWeather(locationCurrentWeather, currentWeatherFragment);

                html.current().appendChild(currentWeatherFragment);

                const upcomingWeatherFragment = document.createDocumentFragment();

                visualizeUpcomingWeather(locationUpcomingWeather, upcomingWeatherFragment);

                html.upcoming().appendChild(upcomingWeatherFragment);

                html.forecast().style.display = "block";

            } else {

                html.error().innerText = 'Fetch failed';
            }

            locationInput.value = '';
        }
    }

    const html = {
        location: () => document.getElementById('location'),
        forecast: () => document.getElementById('forecast'),
        current: () => document.getElementById('current'),
        upcoming: () => document.getElementById('upcoming'),
        error: () => document.getElementById('error'),
        reset: () => {
            const current = document.getElementById('current');
            const upcoming = document.getElementById('upcoming');
            current.innerHTML = '';
            upcoming.innerHTML = '';
            current.appendChild(createElement('div', 'label', 'Current conditions'));
            upcoming.appendChild(createElement('div', 'label', 'Three-day forecast'))
        }
    }

    document.addEventListener('click', eventHandler);

    function eventHandler(e) {

        if (typeof actions[e.target.id] === 'function') {
            actions[e.target.id]();
        }
    }
}

attachEvents();