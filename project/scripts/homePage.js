//https://zenquotes.io/api/today

let apiUrl = 'https://dummyjson.com/quotes';
    // Make a GET request
    fetch(apiUrl)
    .then(response => {
        console.log("SWAWS");
        if (!response.ok) {
            console.log(response.status);
        throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        console.log(data);
        //const quoteData = JSON.parse(JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error:', error);
    });