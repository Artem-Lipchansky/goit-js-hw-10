
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


document.addEventListener('DOMContentLoaded', () => {
 
  const form = document.querySelector('.form');

  
  form.addEventListener('submit', event => {
    event.preventDefault();

    

    const delayInput = form.querySelector('input[name="delay"]');
    const stateInputs = form.querySelectorAll('input[name="state"]');
    const selectedState = [...stateInputs].find(input => input.checked);

    if (delayInput && selectedState) {
      
      const delay = parseInt(delayInput.value, 10);

    
      const notificationPromise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
          if (selectedState.value === 'fulfilled') {
            
            resolve(delay);
          } else {
            
            reject(delay);
          }
        }, delay);
      });

     
      notificationPromise
        .then(delay => {
          iziToast.show({
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topCenter',
            timeout: 2000,
            backgroundColor: '#59a10d',
            messageColor: '#fff',
          });
        })
        .catch(delay => {
          iziToast.show({
            message: `❎ Rejected promise in ${delay}ms`,
            position: 'topCenter',
            timeout: 2000,
            backgroundColor: '#ef4040',
            messageColor: '#fff',
          });
        });
    }
  });
})