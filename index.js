const displayHidden = () =>{
    const openMessage = document.querySelector('.open');
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const closeMessage = document.querySelector('.close');

    openMessage.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('hidden');
        message.classList.remove('hidden');

    })
    closeMessage.addEventListener('click', () =>{
        overlay.classList.add('hidden');
        message.classList.add('hidden');
    })
}
displayHidden();