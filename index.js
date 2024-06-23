const enInput = document.querySelector('.enInput-item')
const ruInput = document.querySelector('.ruInput-item')
const enBtn = document.querySelector('.enInput-btn')
const ruBtn = document.querySelector('.ruInput-btn')

rusSimb = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё', ' ']
engSimb = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '`', ' ']

function langChangeENG() {
    let ruText = ''
    let value = enInput.value
    for (let i = 0; i < value.length; i++) {
        for (let el of engSimb) {
            if (value[i] == el) {
                idx = engSimb.indexOf(el)
                ruText += rusSimb[idx]
            }
        } 
    }

    ruInput.value = ruText
}

function langChangeRU() {
    let engText = ''
    let value = ruInput.value
    for (let i = 0; i < value.length; i++) {
        for (let el of rusSimb) {
            if (value[i] == el) {
                idx = rusSimb.indexOf(el)
                engText += engSimb[idx]
            }
        } 
    }

    enInput.value = engText
}

enBtn.addEventListener('click', langChangeENG)
ruBtn.addEventListener('click', langChangeRU)

