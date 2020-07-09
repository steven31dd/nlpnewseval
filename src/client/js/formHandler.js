function handleSubmit(event) {
    //prevent default event
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    //Check for Valid URL >- IF else if (true) {  
    Client.checkForName(formText)

    console.log("::: URL CONFIRMED :::")
    fetch('/ETPhoneHome')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.body
    })
}
