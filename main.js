// // declare the main vars
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let form = document.getElementById('form');
let currentYear = new Date().getFullYear();

console.log(currentYear - new Date('Dec 29, 1980').getFullYear())

// preparing the result inputs
let yearsResult = document.querySelector('#years span');
let monthsResult = document.querySelector('#months span');
let daysResult = document.querySelector('#days span');

let currentDate = new Date().getTime()


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(currentDate)
    let allInputs = document.querySelectorAll('#form input');
    let allResInputs = document.querySelectorAll('#results > div span');
    let allLabels = document.querySelectorAll('.input-control label');


    let dateCount = new Date(`${month.value}-${day.value}-${year.value}`).getTime()

    let dateDiff = currentDate - dateCount



    yearsResult.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365))

    monthsResult.innerHTML = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 30))
    daysResult.innerHTML = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 30)  / (1000 * 60 * 60 * 24))
    e.preventDefault();
    allInputs.forEach(input => {
        if ( parseInt(input.value) == NaN ) {
            input.parentElement.querySelector('span').classList.add('show');
            input.parentElement.querySelector('.bottom-e').innerText = 'Must be a Valid Date'; 
        }
        if (input.value == null || input.value == '') {
            input.parentElement.querySelector('label').style.color = 'red';
            input.style = 'border-color: red;'
            input.parentElement.querySelector('span').classList.add('show')
        } else {
            input.parentElement.querySelector('label').style.color = 'hsl(0, 1%, 44%)';
            input.style = 'border-color: (0, 1%, 44%);'
            input.parentElement.querySelector('span').classList.remove('show');

        }
        if(day.value < 1 || day.value > 31) {
            day.parentElement.querySelector('.bottom-e').innerText = 'must be a valid date';
            day.parentElement.querySelector('label').style.color = 'red';
        } else {
            day.parentElement.querySelector('.bottom-e').innerText = '';
            day.parentElement.querySelector('label').style.color = '';
        }
        if(month.value < 1 || month.value > 12) {
            month.parentElement.querySelector('.bottom-e').innerText = 'must be a valid date';
            month.parentElement.querySelector('label').style.color = 'red';
        } else {
            month.parentElement.querySelector('.bottom-e').innerText = '';
            month.parentElement.querySelector('label').style.color = '';
        }
        if(year.value > currentYear) {
            year.parentElement.querySelector('.bottom-e').innerText = 'must be in the past';
            year.parentElement.querySelector('label').style.color = 'red';
            yearsResult.innerHTML = ''
        } else {
            year.parentElement.querySelector('.bottom-e').innerText = '';
            year.parentElement.querySelector('label').style.color = '';
        }
      
    })

}) 
