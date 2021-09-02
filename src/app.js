// Step 1. Get all cars and show them

// Get URL
// fetch the URL
// Pull necessary data from reponse (JSON)
// .then ->
//    select HTML element in DOM
//    add data into HTML element
const listCars = () => {
  const baseUrl = 'https://wagon-garage-api.herokuapp.com/galata-kitchen/cars';
  fetch(baseUrl)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const carList = document.getElementById('cars-list');
      // Empty the list!
      carList.innerHTML = '';
      data.forEach((car) => {
        const carName = `${car.brand} ${car.model}`;
        console.log(carName);
        const carOwner = car.owner;
        const carPlate = car.plate;

        carList.insertAdjacentHTML('beforeend', `
        <div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
          </div>
          <div class="car-info">
            <h4>${carName}</h4>
            <p><strong>Owner:</strong> ${carOwner}</p>
            <p><strong>Plate:</strong> ${carPlate}</p>
          </div>
        </div>`);
      });
    });
};


  // Add a new car

  // Find the form
  // Add an event listener for submit event
  // prevent default event action
  // Fetch - NEW API call (POST)
  //    headers as requested
  //    body: brand, model, owner, plate.
  // now re-fetch all cars

const form = document.getElementById('new-car');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitted');

  const brand = document.getElementById('brand').value;
  const plate = document.getElementById('plate').value;
  const model = document.getElementById('model').value;
  const owner = document.getElementById('owner').value;

  const url = 'https://wagon-garage-api.herokuapp.com/galata-kitchen/cars';
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      brand, plate, model, owner
    })
  })
    .then(() => {
      listCars();
    });
});


// Call as JS loads
listCars();
