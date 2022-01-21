const openModal = {
    open() {
        document.querySelector(".modal-container").classList.add('active')
    },
    close() {
        document.querySelector(".modal-container").classList.remove('active')
    },
    send() {
        checkValuesInputs();
    }
}

function checkValuesInputs() {
    inputName = document.querySelector('.name-input')
    inputEmail = document.querySelector('.email-input')

    const Name = inputName.value;
    const Email = inputEmail.value;

    if (Name == '' || Email == '') {
        alert('Preencha todos os dados antes')
    } else {
        alert(`Obrigado ${Name}, avisaremos quando o foguete for lançado`)
        document.querySelector(".modal-container").classList.remove('active')
    }
}

const formatZero = (digito) => `0${digito}`.slice(-2);

const load = (time) => {
    const seconds = document.querySelector('#seconds');
    const minutes = document.querySelector('#minutes');
    const hours = document.querySelector('#hours');
    const days = document.querySelector('#days');

    const quantitySeconds = time % 60;
    const quantityMinutes = Math.floor((time % (60 * 60)) / 60);
    const quantityHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const quantityDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatZero(quantitySeconds);
    minutes.textContent = formatZero(quantityMinutes);
    hours.textContent = formatZero(quantityHours);
    days.textContent = formatZero(quantityDays);
}

const countDown = (time) => {
    const stopCounting = () => clearInterval(id);

    const count = () => {
        if (time === 0) {
            stopCounting();
        }
        load(time);
        time--;
    }

    // a cada segundo ele executa um callback
    const id = setInterval(count, 1000);
}

const restTime = () => {
    const eventDate = new Date ('2022-01-29 20:22:00');
    const today = Date.now();
    return Math.floor((eventDate - today) / 1000);
}

countDown(restTime());