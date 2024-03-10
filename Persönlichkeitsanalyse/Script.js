const form_container = document.querySelector('.form-container')
const button = document.querySelector('button')

document.querySelector('button').onclick = function(){
    form_container.style.display = 'block'
    button.style.display = 'none'
}