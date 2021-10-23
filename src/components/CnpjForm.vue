<template>
    <div class="cnpj-form">
        <sui-segment class="segment">
            <sui-form size="big" :loading="isLoading">
                <sui-form-field :error="invalidCnpj">
                    <label for="cnpj">CNPJ</label>
                    <input type="text" name="cnpj" v-mask="'##.###.###/####-##'"  placeholder="ex: 12.123.123/0001-00" v-model="cnpj" />
                    <sui-label v-if="invalidCnpj" basic color="red" pointing>Por favor, insira um CNPJ válido</sui-label>
                </sui-form-field>
                <sui-button 
                    type="button" 
                    content="Prosseguir" 
                    icon="right arrow" 
                    color="blue" 
                    label-position="right" 
                    @click="handleClick"
                />
            </sui-form>
        </sui-segment>
    </div>
</template>

<script>
import { validate } from 'cnpj'

export default {
  name: 'CnpjForm',
  data: () => ({
    isLoading: false,
    cnpj: null,
    invalidCnpj: false
  }),
  methods: {
    handleClick: function () {
        this.isLoading = true
        // this.$store.commit("setCnpj", this.cnpj)
        if(validate(this.cnpj)) {
            this.invalidCnpj = false
            this.$store
                .dispatch("buscarDadosCNPJ", this.cnpj)
                .then(() => {
                    this.$emit("update:currentStep", 2)
                })
        } else {
            this.invalidCnpj = true
            this.isLoading = false
        }
    }
  }
}
</script>

<style scoped>
    .cnpj-form {
        margin-top: 60px;
    }

    .segment {
        width: 600px;
    }
</style>