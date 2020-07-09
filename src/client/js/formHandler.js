function handleSubmit(event) {
    //prevent default event
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.URLValidation(formText)){
    fetch("http://localhost:8080/ETPhoneHome",
    {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { url: formText } )
      }).then(res=>res.json())
          .then(function(receivedData) {
                    document.getElementById('results').innerHTML =
                        `<p>polarity: ${receivedData.polarity}, confidence: ${receivedData.polarity_confidence}<br/>
                        subjectivity: ${receivedData.subjectivity}, confidence: ${receivedData.subjectivity_confidence}</p>
                        <p>text: ${receivedData.text}</p>`;
                    return receiveddata;
                });
    }else{
      document.getElementById('results').innerHTML = 'INVALID INPUT: Expected URL';
    }

}

export { handleSubmit }
