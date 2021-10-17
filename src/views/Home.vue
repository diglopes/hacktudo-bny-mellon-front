<template>
  <div class="home">
    <sui-menu attached="top" inverted>
    </sui-menu>

    <sui-dimmer :active="loading" >
      <sui-loader size="big">Enviado...</sui-loader>
    </sui-dimmer>

    <sui-container class="wrapper">
      <sui-step-group ordered class="step-group">
        <sui-step
          :active="currentStep == 1"
          :completed="currentStep > 1"
          title="Validação de CNPJ"
          description="Envie-nos o CNPJ da empresa"
        />

        <sui-step
          :active="currentStep == 2"
          :completed="currentStep > 2"
          title="Contrato social "
          description="Desdobramento de contrato social"
        />

        <sui-step
          :active="currentStep == 3"
          :completed="currentStep > 3"
          title="Ficha cadastral"
          description="Confirme os dados consolidados"
        />
      </sui-step-group>

    <transition 
      enter-active-class="animate__animated animate__fadeInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
      mode="out-in"
      appear
    >
      <CnpjForm v-if="currentStep == 1" @update:currentStep="currentStep = $event" key="1"/>
      <ContratoSocialForm  v-if="currentStep == 2" @update:currentStep="currentStep = $event" key="2"/>
      <FichaCadastralForm  v-if="currentStep == 3" @update:currentStep="currentStep = $event" key="3"/>
    </transition>
    </sui-container>
  </div>
</template>

<style>
  .wrapper {
    margin-top: 40px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<script>
import CnpjForm from '@/components/CnpjForm'
import ContratoSocialForm from '@/components/ContratoSocialForm'
import FichaCadastralForm from '@/components/FichaCadastralForm'

export default {
  name: 'Home',
  data: () => ({
    currentStep: 1,
  }),
  computed: {
    loading: function() {
      return this.$store.state.homeLoading
    }
  },
  methods: {
    handleStepChange: function(event) {
      this.currentStep = event.target.value
    }
  },
  components: {
    CnpjForm,
    ContratoSocialForm,
    FichaCadastralForm
  }
}
</script>
