const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

closeModalBtn.addEventListener('click', () => {
    closeModal();
});

document.addEventListener('click', e => {
    if (checkModalClasses() && !e.target.closest('.modal') && !e.target.closest('.button')) closeModal();
});

const openModal = () => {
    modal.classList.add('modal-wr--active');
}

const closeModal = () => {
    modal.classList.remove('modal-wr--active')
}

const checkModalClasses = () => {
    const modalClasses = modal.classList;
    let activeModal = false;

    modalClasses.forEach(val => {
        if ( val == 'modal-wr--active' ) activeModal = true;
    });

    return activeModal;
}

window.openModal = openModal;