// import cnpjApiResponse from '../assets/mocks/cnpj-api-response.json'
// import cpfApiResponse from '../assets/mocks/cpf-api-response.json'
import axios from 'axios'


export function buscarDadosCNPJ(cnpj) {
    // return new Promise((resolve) => {
    //     resolve(cnpjApiResponse)
    // })
    return axios
        .post("http://ec2-34-211-68-118.us-west-2.compute.amazonaws.com:1880/cnpj", { cnpj })
        .then(({ data }) => {
            return data
        })
}

export function buscarDadosCPF(cpf) {
    // return new Promise((resolve) => {
    //     resolve(cpfApiResponse)
    // })
    return axios
        .post("http://ec2-34-211-68-118.us-west-2.compute.amazonaws.com:1880/cpf1", { cpf })
        .then(({ data }) => {
            return data
        })
}

export function gerarCID(cidData) {
    return axios
        .post("http://54.234.138.123:1880/gerar-cid", cidData)
        .then(({ data }) => {
            return data
        })
}