<template>
  <sui-form class="form-padding" style="width: 80%" @submit.prevent>
    <sui-header dividing>Dados da empresa</sui-header>
    <sui-form-field>
      <label> Razão Social </label>
      <input
        v-model="empresa.razaoSocial"
        type="text"
        name="shipping[first-name]"
      />
    </sui-form-field>

    <sui-form-field>
      <sui-form-fields>
        <sui-form-field width="ten">
          <label> Nome fantasia </label>
          <input
            v-model="empresa.nomeFantasia"
            type="text"
            name="shipping[address]"
          />
        </sui-form-field>
        <sui-form-field width="six">
          <label>CNPJ</label>
          <input
            type="text"
            name="shipping[address-2]"
            v-mask="'##.###.###/####-##'"
            v-model="empresa.cnpj"
          />
        </sui-form-field>
      </sui-form-fields>
    </sui-form-field>

    <sui-form-fields fields="three">
      <sui-form-field>
        <label>Inscrição estadual</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.inscricaoEstadual"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Data de constituição</label>
        <input
          type="date"
          name="shipping[address]"
          v-model="empresa.dataConstituicao"
        />
      </sui-form-field>

      <sui-form-field>
        <label>Identificação de registro</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.identificacaoRegistro"
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-field>
      <label>Atividade econômica principal</label>
      <sui-dropdown
        selection
        :options="atividades"
        v-model="empresa.atividadeEconomicaPrincipal"
      />
    </sui-form-field>

    <sui-form-field>
      <label>CNAE</label>
      <input type="text" name="shipping[first-name]" v-model="empresa.cnae" />
    </sui-form-field>

    <sui-form-fields fields="two">
      <sui-form-field>
        <label>Forma de constituição</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.formaConstituicao"
        />
      </sui-form-field>
      <sui-form-field>
        <label>País</label>
        <sui-dropdown selection :options="paises" v-model="empresa.pais" />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields grouped>
      <label>Controle acionário</label>
      <sui-form-field>
        <sui-checkbox
          label="Nacional"
          v-model="empresa.nacional"
          value="nacional"
        />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox
          label="Estrangeiro"
          v-model="empresa.estrangeiro"
          value="estrangeiro"
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields>
      <sui-form-field width="nine">
        <label>Endereço da Sede Social</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.sedeSocial.endereco"
        />
      </sui-form-field>
      <sui-form-field width="three">
        <label>Número</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.sedeSocial.numero"
        />
      </sui-form-field>

      <sui-form-field width="four">
        <label>Complemento</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.sedeSocial.complemento"
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields>
      <sui-form-field width="eight">
        <label>Bairro</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.sedeSocial.bairro"
        />
      </sui-form-field>
      <sui-form-field width="six">
        <label>Cidade</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="empresa.sedeSocial.cidade"
        />
      </sui-form-field>

      <sui-form-field>
        <label>UF</label>
        <sui-dropdown
          selection
          :options="ufs"
          v-model="empresa.sedeSocial.uf"
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields fields="two">
      <sui-form-field>
        <label>CEP</label>
        <input
          v-mask="'##.###-##'"
          type="text"
          name="shipping[address]"
          v-model="empresa.sedeSocial.cep"
        />
      </sui-form-field>
      <sui-form-field>
        <label>País</label>
        <sui-dropdown
          selection
          :options="paises"
          v-model="empresa.sedeSocial.pais"
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields fields="two">
      <sui-form-field>
        <label>Telefone</label>
        <input type="text" name="telefone" v-model="empresa.telefone" />
        <!-- <sui-dropdown
          selection
          :options="telefones"
          v-model="empresa.telefone"
        /> -->
      </sui-form-field>
      <sui-form-field>
        <label>Email</label>
        <input type="text" name="email" v-model="empresa.email" />
        <!-- <sui-dropdown
          selection
          :options="emails"
          v-model="empresa.email"
        /> -->
      </sui-form-field>
    </sui-form-fields>

    <sui-form-field>
      <label>Site</label>
      <input type="text" name="shipping[address]" v-model="empresa.site" />
    </sui-form-field>

    <sui-form-fields grouped>
      <label>Endereço para correspondência</label>
      <sui-form-field>
        <sui-checkbox label="Sede Social" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox label="Outro" />
      </sui-form-field>
    </sui-form-fields>

    <sui-header dividing class="quadro-societario">
      Quadro societário

      <sui-button
        color="orange"
        content="Add"
        icon="user"
        type="button"
        @click="handleAddPartner"
      >
        <span is="sui-label" slot="label" basic color="orange" pointing="left">
          {{ empresa.socios.length }}
        </span>
      </sui-button>
    </sui-header>

    <carousel
      navigationEnabled
      :paginationSize="20"
      paginationColor="#bbb"
      :perPage="1"
      v-model="socioCarousel"
    >
      <slide v-for="(socio, index) in empresa.socios" :key="index" style="width: 100%">
        <SocioForm
          v-model="empresa.socios[index]"
          :index="index"
          @input="empresa.socios[index] = $event.target.value"
        />
      </slide>
    </carousel>

    <sui-button
      type="button"
      size="big"
      color="blue"
      class="btn-confirm"
      @click="handleFinish"
      :loading="finishLoading"
      >Finalizar</sui-button
    >

    <sui-modal v-model="open">
      <sui-modal-header>Adicione os dados do Sócio</sui-modal-header>
      <sui-modal-content>
        <sui-form>
          <sui-form-fields grouped>
            <label for="forma-representacao">Forma de representação</label>
            <sui-form-field>
              <sui-checkbox
                radio
                label="Representante legal"
                name="forma-representacao"
                value="Representante legal"
                v-model="modal.formaRepresentacao"
              />
            </sui-form-field>
            <sui-form-field>
              <sui-checkbox
                radio
                label="Procurador"
                name="forma-representacao"
                value="Procurador"
                v-model="modal.formaRepresentacao"
              />
            </sui-form-field>
          </sui-form-fields>

          <sui-form-field v-if="modal.formaRepresentacao == 'Procurador'">
            <label>Anexo da procuração</label>
            <input
              type="file"
              name="shipping[address]"
            />
          </sui-form-field>

          <sui-form-field>
            <label>CPF</label>
            <input
               v-mask="'###.###.###-##'"
              type="text"
              name="shipping[address]"
              v-model="modal.cpf"
            />
          </sui-form-field>

          <sui-form-field>
            <label>Anexo do Documento de Identidade</label>
            <input
              type="file"
              name="shipping[address]"
            />
          </sui-form-field>
        </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button :disabled="!modal.cpf.length" primary @click.native="handleAddPartnerModal" type="button" :loading="modalBtnLoading"> Adicionar </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </sui-form>
</template>

<script>
import SocioForm from "@/components/SocioForm";
import moment from "moment"
import { v4 as uuidv4 } from "uuid"
// import VerifiedField from '@/components/VerifiedField'
import { Carousel, Slide } from "vue-carousel";

export default {
  created: function () {
    const dados = this.$store.state.dadosEmpresa.infoqualy
    console.log(dados)
    const listaEndereco = dados?.ENDERECOS?.ENDERECO
    const listaTelefone = dados?.TELEFONES?.TELEFONE
    const listaEemail = dados?.EMAILS?.EMAIL

    const endereco = Array.isArray(listaEndereco) ? listaEndereco[0] : listaEndereco
    const telefone = Array.isArray(listaTelefone) ? listaTelefone[0] : listaTelefone
    const email = Array.isArray(listaEemail) ? listaEemail[0] : listaEemail

    this.atividades = this.createOptions([dados.CNAEDescricao])

    this.empresa = {
      cnpj: dados.CNPJ, 
      razaoSocial: dados.RAZAO_SOCIAL,
      nomeFantasia: "",
      dataConstituicao: dados.DATA_ABERTURA,
      atividadeEconomicaPrincipal: dados.CNAEDescricao,
      cnae: dados.CNAE,
      endereco: endereco.LOGRADOURO,
      pais: "BRASIL",
      formaConstituicao: dados.DESCRICAO_NATUREZA_JURIDICA, 
      sedeSocial: {
        endereco: `${endereco.TipoLogradouro} ${endereco.LOGRADOURO}`,
        numero: endereco.NUMERO,
        bairro: endereco.BAIRRO,
        cidade: endereco.CIDADE,
        uf: endereco.UF,
        cep: endereco.CEP,
        complemento: endereco.COMPLEMENTO
      },
      telefone: telefone,
      email: email,
      socios: []
    }
  },
  data: () => ({
    empresa: {},
    socios: [],
    emails: [],
    atividades: [],
    finishLoading: false,
    open: false,
    modalBtnLoading: false,
    paises: [{ text: "Brasil", value: "BRASIL" }],
    ufs: [{ text: "SP", value: "SP" }],
    socioCarousel: null,
    modal: {
      formaRepresentacao: "Representante legal",
      cpf: ""
    }
  }),
  components: {
    SocioForm,
    Carousel,
    Slide,
    // VerifiedField
  },
  methods: {
    handleAddPartner: function () {
      this.open = true
    },
    handleAddPartnerModal: function() {
      this.modalBtnLoading = true
      const cpf = this.modal.cpf.replace(/\D/g, "").padStart(11, "0")
      console.log(cpf);
      this.$store.dispatch("buscarDadosCPF", cpf)
        .then(({ infoqualy, obito }) => {
          console.log(infoqualy)
          if(!infoqualy.Error) {
            this.empresa.socios.unshift({
              nome: infoqualy.NOME,
              cpf: infoqualy.CPF,
              dataNascimento: infoqualy.DATA_NASC,
              nacionalidade: "",
              naturalidade: "",
              sexo: infoqualy.SEXO,
              orgaoEmissor: "",
              numDocumento: "",
              dataEmissao: "",
              representacao: this.modal.formaRepresentacao,
              tipoDocumento: "",
              situacao: infoqualy.SITUACAO_RF,
              situacaoObito: /1/g.test(obito.formaLocalizacao) ? "Positivo": "Negativo",
              dataConsulta: moment().format("DD/MM/YY às HH:mm:ss"),
              codControle: uuidv4(),
              codControleObito: uuidv4()
            })
          } else {
            console.log("DEUM RUIM");
          }
        })
        .finally(() => {
          this.modalBtnLoading = false
          this.open = false
          this.modal = {formaRepresentacao: "Representante legal", cpf: ""}
        })

    },
    handleFinish: function () {
      // this.$store.commit("setHomeLoading", true);
      this.finishLoading = true
      const empresa = this.empresa

      console.log(empresa);
      this.$store.dispatch("gerarCID", {
        empresa
      })
      .then(() => {
        this.$router.push("/fechamento");
      })
    },
    createOptions: function(items) {
      return items.map(item => ({ text: item, value: item }))
    }
  },
};
</script>

<style scoped>
.form-padding {
  margin-top: 60px;
}

.add {
  display: block;
}

.quadro-societario {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-confirm {
  margin-top: 60px !important;
  margin-bottom: 60px !important;
}
</style>