// html'den yapıları çekme

const input = document.getElementById('input')
const filtreInput = document.getElementById('filtre')
const sepet = document.getElementById('sepet')



input.addEventListener('keyup', enter)

function enter(e) {
    if(e.keyCode == 13) {
        sepeteEkle()
    }
}


function sepeteEkle() {
    const div = document.createElement('div')
    div.classList.add('d-flex', 'align-itmes-center', 'justify-content-between', 'mt-2', 'bg-white', 'border', 'border-dark', 'rounded-2', 'p-4')

    const urun = document.createElement('h4')
    urun.textContent = input.value

    const iconDiv = document.createElement('div')
    iconDiv.setAttribute('class', 'd-flex gap-3')

    const check = document.createElement('i')
    check.className = 'fa-solid fa-check text-success fa-xl'

    check.addEventListener('click', checkle)

    const trash = document.createElement('i')
    trash.className = 'fa-solid fa-trash fa-xl text-danger'

    trash.addEventListener('click', sil)
    
    if (input.value != '') {
    iconDiv.append(check)
    iconDiv.append(trash)


    div.append(urun)
    div.append(iconDiv)

    sepet.append(div)
} else {
    alert('aaaaa')
}
    input.value = ""
}


function checkle() {
    this.classList.toggle('text-success')
    this.classList.toggle('text-warning')
    
    this.parentElement.previousElementSibling.classList.toggle('text-decoration-underline')

    this.parentElement.parentElement.classList.toggle('bg-white')
    this.parentElement.parentElement.classList.toggle('bg-light')
}


function sil() {
    this.parentElement.parentElement.remove()
}