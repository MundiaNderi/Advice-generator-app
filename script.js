document.addEventListener('DOMContentLoaded', () => {
  const quoteElement = document.querySelector('.quote q');
  const adviceIdElement = document.querySelector('.id');

  function fetchAndUpdateQuote() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        adviceIdElement.textContent = data.slip.id;
        quoteElement.textContent = data.slip.advice;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }

  // Initial quote and ID on page load
  fetchAndUpdateQuote();

  // Get the dice button element
  const Button = document.getElementById('Button');

  // Event listener for clicking the dice
  Button.addEventListener('click', fetchAndUpdateQuote);
});
