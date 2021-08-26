const loader = document.getElementById('loading');
const noResultText = document.getElementById('noResults');

function handleSubmit(event) {
    event.preventDefault();
    results.classList.remove('show');
    // Display loader when request starts.
    noResultText.classList.add('hide');
    loader.classList.add('show');

    // Select the value in the input
    let userURL = document.getElementById('url').value
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
        const results = document.getElementById('results');
            console.log(res);
            // Remove loader once data is fetched.
            loader.classList.remove('show');
            // Update UI
            document.getElementById('agreement').textContent = `${res.agreement} ✅`;
            document.getElementById('subjectivity').textContent = `${res.subjectivity} ✅`;
            document.getElementById('irony').textContent = `${res.irony} ✅`;
            document.getElementById('confidence').textContent = `${res.confidence}/100 ✅`;

            results.classList.add('show');

        })
    } else {
        alert('Please enter a valid URL (containing https:// or http://). Thanks!');
    };
}

export { handleSubmit }
