document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const subscribeBtn = card.querySelector('.subscribe-btn');
        const enterBtn = card.querySelector('.enter-btn');

        subscribeBtn.addEventListener('click', () => {
            subscribeBtn.style.display = 'none';
            enterBtn.style.display = 'block';
        });
    });
});
