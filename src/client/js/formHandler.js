const loader = document.getElementById('loading');

function handleSubmit(event) {
    event.preventDefault();
    // Display loader when request starts.
    loader.classList.add('display');

    // Select the value in the input
    let userURL = document.getElementById('name').value
    // If the URL is valid, post the data
    if (Client.checkUrl(userURL)) {
        fetch('http://localhost:8081/addData', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userURL }),
        })
        .then(res => res.json())
        // Update UI
        .then(function(res) {
            console.log(res);
            // Remove loader once data is fetched.
            loader.classList.remove('display');
            // Update UI
            document.getElementById('agreement').textContent = `${res.agreement} ✅`;
            document.getElementById('subjectivity').textContent = `${res.subjectivity} ✅`;
            document.getElementById('irony').textContent = `${res.irony} ✅`;
            document.getElementById('confidence').textContent = `${res.confidence}/100 ✅`;
        })
    } else {
        alert('Please enter a valid URL (containing https:// or http://). Thanks!');
    };
}

export { handleSubmit }
