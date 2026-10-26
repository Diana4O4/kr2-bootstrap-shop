const form = document.querySelector('.order-form');
const message = document.querySelector('.success-message')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden');
        }, 2500)
    }
})