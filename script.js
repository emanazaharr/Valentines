const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.querySelector('.closeIcon');
const tryAgain = document.getElementById('okBtn');
const modal = document.querySelector('.modal');
const secondModal = document.getElementById('secondModal');
const tryAgain2 = document.getElementById('okBtn2');
const thirdModal = document.getElementById('thirdModal');
const tryAgain3 = document.getElementById('okBtn3');
const fourthModal = document.getElementById('fourthModal');
const tryAgain4 = document.getElementById('okBtn4');
const fifthModal = document.getElementById('fifthModal');
const tryAgain5 = document.getElementById('okBtn5');
const sixthModal = document.getElementById('sixthModal');
const tryAgain6 = document.getElementById('okBtn6');
const seventhModal = document.getElementById('seventhModal');
const tryAgain7 = document.getElementById('okBtn7');
const eighthModal = document.getElementById('eighthModal');
const tryAgain8 = document.getElementById('okBtn8');

modalBtn.addEventListener('click', () => {
    modal.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    secondModal.classList.remove('active')
})

tryAgain.addEventListener('click', () => {
    modal.classList.remove('active')
    secondModal.classList.add('active');
});

tryAgain2.addEventListener('click', () => {
    secondModal.classList.remove('active')
    thirdModal.classList.add('active');
});

tryAgain3.addEventListener('click', () => {
    thirdModal.classList.remove('active')
    fourthModal.classList.add('active');
});

tryAgain4.addEventListener('click', () => {
    fourthModal.classList.remove('active')
    fifthModal.classList.add('active');
});

tryAgain5.addEventListener('click', () => {
    fifthModal.classList.remove('active')
    sixthModal.classList.add('active');
});

tryAgain6.addEventListener('click', () => {
    sixthModal.classList.remove('active')
    seventhModal.classList.add('active');
});

tryAgain7.addEventListener('click', () => {
    seventhModal.classList.remove('active')
    eighthModal.classList.add('active');
});

tryAgain8.addEventListener('click', () => {
    eighthModal.classList.remove('active');
});


window.addEventListener('click', event => {
    if (event.target == firstModal) {
        firstModal.classList.remove('active');
    }
    if (event.target == secondModal) {
        secondModal.classList.remove('active');
    }
});