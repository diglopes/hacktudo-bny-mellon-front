// import cnpjApiResponse from '../assets/mocks/cnpj-api-response.json'
// import cpfApiResponse from '../assets/mocks/cpf-api-response.json'
import axios from 'axios'


export function buscarDadosCNPJ(cnpj) {
    // return new Promise((resolve) => {
    //     resolve(cnpjApiResponse)
    // })
    return axios
        .post("https://the-nodes-tim.herokuapp.com/cnpj", { cnpj })
        .then(({ data }) => {
            return data
        })
}

export function buscarDadosCPF(cpf) {
    // return new Promise((resolve) => {
    //     resolve(cpfApiResponse)
    // })
    return axios
        .post("https://the-nodes-tim.herokuapp.com/cpf", { cpf })
        .then(({ data }) => {
            return data
        })
}

export function gerarCID(cidData) {
    return axios
        .post("https://the-nodes-tim.herokuapp.com/gerar-cid", cidData)
        .then(({ data }) => {
            return data
        })
}