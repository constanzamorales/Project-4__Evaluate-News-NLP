const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';

// Event listener to add function to existing HTML DOM element
document.getElementById('submit').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userURL = document.getElementById('name').value
    Client.checkForName(userURL)

    getEvaluation(baseURL, apiKey, userURL)
    .then (function (data) {
        const textData = status.msg;
        postData('/addEntry', {
            status: textData
        })
        .then(() => {
            updateUI();
        });
    });

    const getEvaluation = async (baseURL, apiKey, userURL) => {
        const res = await fetch(`${baseURL}${apiKey}&url=${userURL}`);
        // Try calling the API
        try {
            const textEvaluation = await res.json();
            console.log(textEvaluation);
            return textEvaluation;
        } catch (error) {
            console.log('There was an error in the GET data function', error);
        }
    } 


    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
