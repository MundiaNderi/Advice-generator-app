document.addEventListener('DOMContentLoaded', () => {
  const quoteElement = document.querySelector('.quote q');

  function fetchAndDisplayQuote() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        quoteElement.textContent = data.slip.advice;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }

  // Initial quote on page load
  fetchAndDisplayQuote();

  // Get the dice button element
  const Button = document.getElementById('Button');

  // Event listener for clicking the dice
  Button.addEventListener('click', fetchAndDisplayQuote);
});

