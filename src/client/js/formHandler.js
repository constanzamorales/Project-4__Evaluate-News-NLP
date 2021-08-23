const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';

// Event listener to add function to existing HTML DOM element
document.getElementById('submit').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userURL = document.getElementById('name').value
    Client.checkForName(userURL)

    (function (data) {
        const textData = res.subjectivity;
        postData('/addData', {
            subjectivity: textData
        })
        .then(() => {
            updateUI();
        });
    });

    /*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */
}

/*
const getEvaluation = async (baseURL, apiKey, userURL) => {
    const res = await fetch(`${baseURL}${apiKey}&of=json&url=${userURL}`);
    // Try calling the API
    try {
        const textEvaluation = await res.json();
        console.log(textEvaluation);
        return textEvaluation;
    } catch (error) {
        console.log('There was an error in the GET data function', error);
    }
}
*/

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('Error in the POST data function', error);
    }
}


/* Updating UI */
const updateUI = async (result) => {
    try {
        const allData = result;
        document.getElementById('results').innerHTML = allData.subjectivity;
    } catch (error) {
        console.log('There was an error updating the UI!', error);
    }
}


export { handleSubmit }
