//pegando elementos do dom
const forDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

//capiturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let num1 = parsetFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

    console.log(num1, num2, num3)

    let media = (parseFloat(num1) + parsetFloat(num2) + parseFloat(num3))

    divresultado.innerHTML =media
})