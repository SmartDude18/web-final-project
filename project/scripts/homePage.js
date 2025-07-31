//https://zenquotes.io/api/today
const quote = document.getElementById("quoteSpot");
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
        const quoteData = JSON.parse(JSON.stringify(data));
        let quoteIndex = 0;
        while(true)
        {
            if(quoteData.quotes[quoteIndex].quote.toLowerCase().includes("god"))
            {
                quoteIndex++;
            }
            else
            {
                quote.textContent = quoteData.quotes[quoteIndex].quote;
                break;
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });




    let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}