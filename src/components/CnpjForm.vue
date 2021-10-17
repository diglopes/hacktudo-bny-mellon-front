<template>
    <div class="cnpj-form">
        <sui-segment class="segment">
            <sui-form size="big" :loading="isLoading">
                <sui-form-field :error="invalidCnpj">
                    <label>CNPJ</label>
                    <input type="text" v-mask="'##.###.###/####-##'"  placeholder="ex: 12.123.123/0001-00" v-model="cnpj" />
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
        this.$store.commit("setCnpj", this.cnpj)
        setTimeout(() => {
            this.$emit("update:currentStep", 2)
        }, 1000)
    }
  }
}
</script>

<style>
    .cnpj-form {
        margin-top: 60px;
    }

    .segment {
        width: 600px;
    }
</style>