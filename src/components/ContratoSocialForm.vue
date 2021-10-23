<template>
    <div class="cnpj-form">
        
        <div class="upload">
            <sui-dimmer active v-show="isLoading" class="loading">
                <sui-loader content="Carregando..." />
            </sui-dimmer>

            <vue2Dropzone 
                :options="dropzoneOptions" 
                class="dropzone" 
                id="contrato-social"
                @vdropzone-complete="handleFileUpload"
            />
        </div>
    </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'

export default {
    name: 'ContratoSocialForm',
        data () {
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 400,
                addRemoveLinks: false,
                dictDefaultMessage: "Anexe o Contrato Social da empresa aqui"
            },
            isLoading: false
        }
    },
    components: {
        vue2Dropzone
    },
    methods: {
        handleFileUpload: function({ dataURL, name }) {
            this.isLoading = true
            this
                .$store
                .dispatch("uploadContratoSocial", { arquivo: dataURL, nomeArquivo: name })
                .then(() => {
                    this.$emit("update:currentStep", 3)
                })
        }
    }
}
</script>

<style scoped>
    .cnpj-form {
        margin-top: 60px;
    }

    .upload {
        position: relative;
    }

    .dropzone {
        width: 600px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropzone:hover {
        cursor: pointer;
    }
</style>