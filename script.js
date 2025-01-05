const checkbox = document.getElementById('checkbox');
const body = document.body;
const container = document.querySelector('.container');


if (localStorage.getItem('darkMode') === 'enabled') {
    checkbox.checked = true;
    body.classList.add('darkMode');
    container.classList.add('darkMode');
}

checkbox.addEventListener('change', () => {
    body.classList.toggle('darkMode');
    container.classList.toggle('darkMode');

    if (checkbox.checked) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});