//pegando elementos do dom
const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

//capiturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let largura = parseFloat(form_num.get('largura'))
    let altura = parseFloat(form_num.get('altura'))
    const rendimento = 2

    let area = (parseFloat ( largura * altura ))
    let quantidade = (parseFloat( area / rendimento ))
    
     divresultado.innerHTML = `area total é ${area.toFixed(2)} a quantidade total de tinta é ${quantidade.toFixed(2)}`
})