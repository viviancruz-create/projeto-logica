//pegando elementos do dom
const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

//capiturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let distancia = parseFloat(form_num.get('distancia'))
    let consumo = parseFloat(form_num.get('consumo'))
    let preco = parseFloat (form_num.get('preco'))
    const rendimento = 2

    let combustivel = (parseFloat ( distancia / consumo ))
    let valor = (parseFloat( combustivel * preco ))
    
     divresultado.innerHTML = `consumo total é ${area.toFixed(2)} valor total a pagar é ${quantidade.toFixed(2)}`
})