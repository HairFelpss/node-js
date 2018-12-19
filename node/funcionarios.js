const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const chines = nacionalidade => nacionalidade.pais === 'China'
    const feminino = sexo => sexo.genero === 'F'


    const menorSalario = (funcAnterior, funcAtual) => {
        return funcAnterior.salario < funcAtual.salario ? funcAnterior : funcAtual
    }

    const quemEuQuero = funcionarios
        .filter(chines)
        .filter(feminino)
        .reduce(menorSalario)

    console.log(quemEuQuero)
})