const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(3);
        let str = "";
        if(bmi < 18.6) str = "Under Weight"
        else if(bmi >= 18.6 && bmi <= 24.9) str = "Normal Range"
        else str = "Overweight"
        result.innerHTML = `<span>${bmi} <br/> ${str}</span>`;
    }
})