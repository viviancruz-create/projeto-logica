//pegando elementos do dom
const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

//capiturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let nome = parseFloat(form_num.get('nome'))
    let nota1 = parseFloat(form_num.get('nota1'))
    let nota2 = parseFloat (form_num.get('nota2'))
    let nota3 = parseFloat (form_num.get('nota3'))
    //Processamento: calcular  a média aritmética das 3 notas
    let media=(nota1 + nota2 + nota3)/3

    //criando a variável para armazenar a situação do aluno
    let situacao=""

    //condição da questão: se a média for maior ou igual a 6
    if(media>=6){
        situacao='<span style="color:green; font-weight: bold;">Aprovado</span>'
    }else{
        situacao='<span style="color:red; font-weight:bold;">Reprovado</span>'

    }

    
     divresultado.innerHTML = `Aluno(a) ${nome.toFixed(1)} media final ${media.toFixed(1)}`
}) 