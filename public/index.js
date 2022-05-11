// Set up DOM
const form = document.querySelector('#form');
let results = document.querySelector('#return_string');

form.addEventListener( 'submit', function (e){
    e.preventDefault();

    let userInput = document.querySelector('#string_to_cut').value;

    fetch('/test', {
        method: 'POST',
        body: JSON.stringify({
            'string_to_cut': userInput
        }),
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then(function(response){
        return response.json()    
    })
    .then(function(string){
        let newString = JSON.stringify(string)
        results.innerText = newString;
    })
})

