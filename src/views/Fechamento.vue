<template>
  <div class="home">
    <sui-menu attached="top inverted">
    </sui-menu>
    <sui-container class="wrapper">
      <sui-segment class="segment">
        <sui-icon-group size="huge">
          <sui-icon name="circle" size="big" color="green" outline />
          <sui-icon name="check" color="green"/>
        </sui-icon-group>
        <h2>Obrigado pelo cadastro</h2>

        <p>Em breve, um e-mail será enviado para que seja realizada a assinatura digital deste contrato inteligênte.</p>

        <a :href="cid.file" target="_blank" download="cid.pdf"
          class="ui button primary big"
          style="margin-top: 40px;"
        >
          Baixar o CID
        </a>
      </sui-segment>
    </sui-container>
  </div>
</template>

<style scoped>
  .wrapper {
    margin-top: 100px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  .btn {
    margin-top: 40px !important;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .segment {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px!important;
    text-align: center;
  }
</style>

<script>


export default {
  name: 'Fechamento',
  data: () => ({
  }),
  computed: {
    cid() {
      return this.$store.state.cid
    }
  },
  methods: {
  },
  components: {

  }
}
</script>
