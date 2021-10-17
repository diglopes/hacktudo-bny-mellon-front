import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeLoading: false,
    cnpj: null,
    contratoSocial: {
      arquivo: null,
      nomeArquivo: null
    },
    dadosEmpresa: null
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
    }
  },
  modules: {
  }
})
