function handleSubmit(event) {
    //prevent default event
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.URLValidation(formText)){
    fetch("/ETPhoneHome",
    {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { formText } )
        }).then(res=>res.json())
                .then(receivedData=>{
                    document.getElementById('results').innerHTML =
                        `<p>polarity: ${receivedData.polarity}, <br/>
                        subjectivity: ${receivedData.subjectivity}, <br/>
                        text: ${receivedData.text}</p>`;
                    return data;
                });
    }

}

export { handleSubmit }
