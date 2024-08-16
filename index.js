
async function fetchCountries() {
    try {
        const countryDetails = await fetch('https://restcountries.com/v3.1/all');
        const countriesResponse = await countryDetails.json();

        const countryList = document.getElementById('country-list');
        countriesResponse.forEach(function(country ){
            const articleTag = document.createElement('article');

            const flagImage = document.createElement('img');
            flagImage.src = country.flags.svg;
            flagImage.alt = `${country.name.common} Flag`;

            const countryName = document.createElement('h2');
            countryName.textContent = country.name.common;

            articleTag.appendChild(flagImage);
            articleTag.appendChild(countryName);

            countryList.appendChild(articleTag);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchCountries();
