import Vue from 'vue'
import Vuex from 'vuex'
import { buscarDadosCNPJ, buscarDadosCPF, gerarCID } from '../services/apis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeLoading: false,
    cnpj: null,
    contratoSocial: {
      arquivo: null,
      nomeArquivo: null
    },
    dadosEmpresa: null,
    socios: [],
    cid: null
  },
  mutations: {
    setCnpj(state, cnpj) {
      state.cnpj = cnpj.replace(/\D/g, "")
    },
    setContratoSocial(state, contratoSocial) {
      state.contratoSocial = contratoSocial
    },
    setDadosEmpresa(state, payload) {
      state.dadosEmpresa = payload
    },
    setHomeLoading(state, payload) {
      state.homeLoading = payload
    },
    setSocios(state, socio) {
      state.socios.unshift(socio)
    },
    setCID(state, cid) {
      state.cid = cid
    }
  },
  actions: {
    buscarDadosEmpresa({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setDadosEmpresa', { 
            cnpj: "18640364000100", 
            razaoSocial: "RESOLV INFORMAÇÕES E SERVIÇOS PARA COBRANÇAS LTDA",
            nomeFantasia: "Resolv Risk",
            dataConstituicao: "2013-08-07",
            cnae: "82.91.1-00",
            endereco: "Rua Parana",
            sedeSocial: {
              endereco: "Rua Parana",
              numero: 182,
              bairro: "Vila Mathias",
              cidade: "Santos",
              uf: "SP",
              cep: "11075-320"
            },
            telefone: "5513991853019",
            email: "lilian@gruporesolv.com.br"
          })
          resolve()
        }, 1000)
      })
    },
    buscarDadosCNPJ({ commit }, cnpj){
      return buscarDadosCNPJ(cnpj)
        .then(data => {
          commit("setDadosEmpresa", data)
          return data
        })
    },
    buscarDadosCPF({ commit }, cpf) {
      return buscarDadosCPF(cpf)
        .then(data => {
          commit("setSocios", data)
          return data
        })
    },
    uploadContratoSocial({ commit }, contratoSocial) {
      console.log(contratoSocial)
      commit("setContratoSocial", contratoSocial)
    },
    gerarCID({ commit }, { empresa }){
      return gerarCID({
        empresa: [
          {
            "campo": "CNPJ",
            "valor": empresa.cnpj,
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "Razão Social (sem abreviação)",
            "valor": empresa.razaoSocial,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Nome fantasia",
            "valor": empresa.nomeFantasia,
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "Inscrição Estadual",
            "valor": empresa.inscricaoEstadual,
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "Data de Constituição",
            "valor": empresa.dataConstituicao.split("-").reverse().join("/"),
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "Identificação de Registro ",
            "valor": empresa.identificacaoRegistro,
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "Atividade Econômica Principal",
            "valor": empresa.atividadeEconomicaPrincipal,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "CNAE",
            "valor": empresa.cnae,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Forma de Constituição",
            "valor": empresa.formaConstituicao,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Controle Acionário",
            "valor": [empresa.nacional ? "Nacional": "", empresa.estrangeiro?"Estrageiro":""].join(", "),
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "País",
            "valor": empresa.pais,
            "forma": "Informado pelo cliente",
            "fonte": "Cliente"
          },
          {
            "campo": "Endereço da Sede Social",
            "valor": empresa.sedeSocial.endereco,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Número",
            "valor": empresa.sedeSocial.numero,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Complemento",
            "valor": empresa.sedeSocial.complemento,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Bairro",
            "valor": empresa.sedeSocial.bairro,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "Cidade",
            "valor": empresa.sedeSocial.cidade,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "CEP",
            "valor": empresa.sedeSocial.cep,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "UF",
            "valor": empresa.sedeSocial.uf,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "email",
            "valor": empresa.email,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
          {
            "campo": "telefone",
            "valor": empresa.telefone,
            "forma": "Atribuido pela plataforma",
            "fonte": "RFB"
          },
        ],
        socios: empresa.socios.map(socio => ({
          tipo: socio.representacao,
          dados: [
            {
              "campo": "CPF",
              "valor": socio.cpf,
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
            {
              "campo": "Nome Completo",
              "valor":  socio.nome,
              "forma": "Atribuido pela plataforma",
              "fonte": "RFB"
            },
            {
              "campo": "Data nascimento",
              "valor":  socio.dataNascimento.split("-").reverse().join("/"),
              "forma": "Atribuido pela plataforma",
              "fonte": "RFB"
            },
            {
              "campo": "Sexo",
              "valor":  socio.sexo === 'M' ? 'Masculino' : 'Feminino',
              "forma": "Atribuido pela plataforma",
              "fonte": "RFB"
            },
            {
              "campo": "Nacionalidade",
              "valor": socio.nacionalidade,
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
            {
              "campo": "Naturalidade",
              "valor":  socio.naturalidade,
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
            {
              "campo": "Tipo de documento",
              "valor":  socio.tipoDocumento,
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
            {
              "campo": "Numero do documento",
              "valor":  socio.numDocumento,
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
            {
              "campo": "Orgão emissor",
              "valor":  socio.orgaoEmissor,
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
            {
              "campo": "Data de emissão",
              "valor":  socio.dataEmissao ? socio.dataEmissao.split("-").reverse().join("/"): "",
              "forma": "Informado pelo cliente",
              "fonte": "Cliente"
            },
          ],
        })),
        checagensExternas: [
          ...empresa.socios.map(socio => ( {
            "tipo": "CPF",
            "dado": socio.cpf,
            "local": "Consulta RFB",
            "situacao": socio.situacao,
            "data": socio.dataConsulta,
            "codControle": socio.codControle
          })),
          ...empresa.socios.map(socio => ( {
            "tipo": "CPF",
            "dado": socio.cpf,
            "local": "Consulta Óbito",
            "situacao": socio.situacaoObito,
            "data": socio.dataConsulta,
            "codControle": socio.codControleObito
          })),
        ]
      }).then(data => {
        commit("setCID", data)
        return data
      })
    }
  },
  modules: {
  }
})
