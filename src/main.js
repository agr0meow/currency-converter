// объект данных
const bet = {
    R_USD: 0.014,
    R_EURO: 0.013,
   
}

// выбор элемента
const valueInput = document.querySelector('.converter__input');
const selectUsdOrEuro = document.querySelector('.converter__currency-selector');
const outputMessage = document.querySelector('.output')
const Button = document.querySelector('.converter__button');
// Добавление событий
Button.addEventListener(('click'), (event) => {
    if(selectUsdOrEuro.value == 'R_USD') {
        outputMessage.textContent = valueInput.value * bet.R_USD +' $ '
    }
    else if (selectUsdOrEuro.value == 'R_EURO') {
        outputMessage.textContent = valueInput.value * bet.R_EURO + ' €'

    }
    else if (selectUsdOrEuro.value == 'USD_R') {
        outputMessage.textContent = valueInput.value / bet.R_USD + '₽'
    }
    else if (selectUsdOrEuro.value == 'EURO_R') {
        outputMessage.textContent = valueInput.value / bet.R_EURO + '₽'
        
    }
})

