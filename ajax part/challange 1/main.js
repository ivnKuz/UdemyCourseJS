'use strict'

const countriesContainer = document.querySelector('.countries');
const longLatInput = document.querySelector('#longLatInput');
const longLatLabel = document.querySelector('#longLatLabel');
function fetchData(){
    const [lat, lng] = longLatInput.value.split(',');
    console.log(Number(lat),Number(lng));
    whereAmI(Number(lat),Number(lng))
    // whereAmI(52.508, 13.381);
    // whereAmI(19.037, 72.873);
    // whereAmI(-33.933, 18.474);
}

const renderCountry = function(data){
    const html = `<article class="country">
    <img class="country__img" src="${Object.values(data.flags)[1]}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} mil.</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]} 
       ${Object.values(data.languages)[1] ? Object.values(data.languages)[1] : ''}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>`
  
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1;
  longLatInput.style.opacity = 0;
  longLatLabel.style.opacity = 0;
}

 function whereAmI(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}}?geoit=json`)
    .then(response => {
        console.log(response);
        
        if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`)
        return response.json()
    }  )
    .then((data) => {
        console.log(data);
        
        console.log(`You're currently in ${data.city}, ${data.country}`)
        
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(response => {
        if (!response.ok) throw new Error(`Country not found ${response.status}`);
        console.log(response);
        
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error('something went wrong, error message: ',error.message)
    );
}