const loadPhones = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // display 20 phone only
    phones = phones.slice(0, 12);
    // display no phone found 
    const noPhone = document.getElementById('no-found-message')
    if(phones.length ===0){
        noPhone.classList.remove('d-none')

    }
    else{
        noPhone.classList.add('d-none')

    }
    // display all phones
    phones.forEach(phone => {
        console.log(phone)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `     
        <div class="card p-4">
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>     
        `
        phoneContainer.appendChild(phoneDiv)

    })
    // stop spinner loader
    toggleSpinner(false);
}

// handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
    // start loader 
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    loadPhones(searchText);
})

const toggleSpinner = isLoader => {
    const loaderSection = document.getElementById('loader');
    if(isLoader){
        loaderSection.classList.remove("d-none")
    }
    else{
        loaderSection.classList.add("d-none")
    }
}


// loadPhones()