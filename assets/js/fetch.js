const AdviceToggler = document.querySelector('#advice-toggler');

async function getAdvicefromAPI(slip_id) {
  const API_URL = `https://api.adviceslip.com/advice/${slip_id}`;
  fetch(`${API_URL}`)
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then((data) => {
      addAdvice(data['slip']);
    })
    .catch((error) => {
      // There was an error
      alert('Something went wrong.\n' + error);
    });
}

window.onload = getAdvicefromAPI(1);
AdviceToggler.addEventListener('click', () => {
  const slip_id = Math.ceil(Math.random() * 200);
  getAdvicefromAPI(slip_id);
});

function addAdvice(quote) {
  const randomColor = 'hsl(' + Math.random() * 360 + ', 60%, 86%)';
  const Advice = document.getElementById('advice');
  const AdviceID = document.getElementById('advice-id');
  Advice.innerText = `"${quote.advice}"`;
  AdviceID.innerText = `${quote.id}`;
  Advice.style.color = randomColor;
}
