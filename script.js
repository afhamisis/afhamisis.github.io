// Make a GET request to Chuck Norris API to fetch a random joke
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    // Update the HTML content with the fetched joke
    document.getElementById('joke').innerText = data.value;
  })
  .catch(error => {
    console.error('Error fetching joke:', error);
  });
