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
        <input
          v-mask="'+## (##) #####-####'"
          type="text"
          name="shipping[address]"
          v-model="empresa.telefone"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Email</label>
        <input type="text" name="shipping[address]" v-model="empresa.email" />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-field>
      <label>Site</label>
      <input type="text" name="shipping[address]" v-model="empresa.telefone" />
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
          {{ socios.length }}
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
      <slide v-for="(socio, index) in socios" :key="index" style="width: 100%">
        <SocioForm
          v-model="socios[index]"
          @input="socios[index] = $event.target.value"
        />
      </slide>
    </carousel>

    <sui-button
      type="button"
      size="big"
      color="blue"
      class="btn-confirm"
      @click="handleFinish"
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
                label="Procurador"
                name="forma-representacao"
                value="procurador"
                v-model="modal.formaRepresentacao"
              />
            </sui-form-field>
            <sui-form-field>
              <sui-checkbox
                radio
                label="Representante legal"
                name="forma-representacao"
                value="representante_legal"
                v-model="modal.formaRepresentacao"
              />
            </sui-form-field>
          </sui-form-fields>

          <sui-form-field v-if="modal.formaRepresentacao == 'procurador'">
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
        <sui-button primary @click.native="handleAddPartnerModal" type="button" :loading="modalBtnLoading"> Adicionar </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </sui-form>
</template>

<script>
import SocioForm from "@/components/SocioForm";
// import VerifiedField from '@/components/VerifiedField'
import { Carousel, Slide } from "vue-carousel";

export default {
  created: function () {
    this.empresa = this.$store.state.dadosEmpresa;
  },
  data: () => ({
    empresa: {},
    socios: [],
    open: false,
    modalBtnLoading: false,
    paises: [{ text: "Brasil", value: "brasil" }],
    listaSocios: {
      "27435525850": {
        nome: "MARCO ANTONIO RIVEIROS",
        cpf: "27435525850",
        dataNascimento: "1978-08-03",
        nacionalidade: "Brasileira",
        naturalidade: "SÃO PAULO",
        sexo: "masculino",
        orgaoEmissor: "DETRAN",
        numDocumento: "03526418267",
        dataEmissao: "2017-02-06",
        representacao: "procurador",
        tipoDocumento: "cnh"
      },
      "27756551818": {
        nome: "LILIAN CRISTINE MIRANDA CARDOSO ",
        cpf: "27435525850",
        dataNascimento: "1979-09-22",
        nacionalidade: "Brasileira",
        naturalidade: "SÃO PAULO",
        sexo: "feminino",
        orgaoEmissor: "DETRAN",
        numDocumento: "03632624882",
        dataEmissao: "2018-12-11",
        representacao: "representante_legal",
        tipoDocumento: "cnh"
      }
    },
    atividades: [
      {
        text: "1360 - Outras atividades auxiliares dos serviços financeiros não especificadas anteriormente",
        value: "1360",
      },
    ],
    ufs: [{ text: "SP", value: "SP" }],
    socioCarousel: null,
    modal: {
      formaRepresentacao: "procurador",
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
      // this.socioCarousel = 0;
      // this.socios.unshift({});
      this.open = true
    },
    handleAddPartnerModal: function() {
      this.modalBtnLoading = true
      setTimeout(() => {
        this.modalBtnLoading = false
        console.log(this.modal.cpf.replace(/\D/g, ""))
        this.socios.unshift(this.listaSocios[this.modal.cpf.replace(/\D/g, "")])
      }, 1000)
      this.open = false
    },
    handleFinish: function () {
      this.$store.commit("setHomeLoading", true);
      setTimeout(() => {
        this.$router.push("/fechamento");
      }, 1500);
    },
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