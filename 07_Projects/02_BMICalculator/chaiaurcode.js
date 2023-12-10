const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#result")

    if(height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height ${height}`;
    }
})