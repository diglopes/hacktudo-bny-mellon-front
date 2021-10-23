<template>
  <sui-segment  style="width: 100%;">
    <sui-form-fields grouped >
      <label :for="`representacao-${index}`">Forma de representação</label>
      <sui-form-field>
        <sui-checkbox radio label="Representante legal" :name="`representacao-${index}`" value="Representante legal" v-model="value.representacao"/>
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio label="Procurador" :name="`representacao-${index}`" value="Procurador" v-model="value.representacao"/>
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields>
      <sui-form-field width="ten">
        <label>Nome completo</label>
        <input
          v-model="value.nome"
          type="text"
          name="shipping[address]"
          
        />
      </sui-form-field>
      <sui-form-field width="six">
        <label>CPF</label>
        <input
          v-mask="'###.###.###-##'"
          v-model="value.cpf"
          type="text"
          name="shipping[address]"
          
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields fields="three">
      <sui-form-field>
        <label>Data de nascimento</label>
        <input
          type="date"
          name="shipping[address]"
          v-model="value.dataNascimento"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Nacionalidade</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="value.nacionalidade"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Naturalidade</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="value.naturalidade"
        />
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields grouped>
      <label :for="`sexo-${index}`">Sexo</label>
      <sui-form-field>
        <sui-checkbox radio label="Feminino" :name="`sexo-${index}`" value="F" v-model="value.sexo"/>
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio label="Masculino" :name="`sexo-${index}`" value="M" v-model="value.sexo"/>
      </sui-form-field>
    </sui-form-fields>

    <sui-form-fields fields="four">
      <sui-form-field width="six">
        <label>Tipo de documento de Identificação</label>
        <sui-dropdown
          selection
          :options="tiposDocumento"
          v-model="value.tipoDocumento"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Número do Documento</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="value.numDocumento"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Orgão emissor</label>
        <input
          type="text"
          name="shipping[address]"
          v-model="value.orgaoEmissor"
        />
      </sui-form-field>

      <sui-form-field>
        <label>Data de emissão</label>
        <input
          type="date"
          name="shipping[address]"
          v-model="value.dataEmissao"
        />
      </sui-form-field>
    </sui-form-fields>
  
  </sui-segment>
</template>

<script>
export default {
  props: ['value', 'index'],
  data: () => ({
    tiposDocumento: [
      { text: "Carteira de Motorista (CNH)", value: "cnh" },
      { text: "Carteira de Identidade (RG)", value: "rg" },
    ]
  })
}
</script>