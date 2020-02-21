<template lang="pug">
    form.form.works__form(@submit.prevent="addNewWork")
        .form__header
            h2.form__title Edit Portfolio
        .form__content.form__content--works
            .form__content-left
                .form__row.form__row--upload
                label.form__label-upload
                    vue-dropzone(id="drop1" :options="dropOptions")
                    .form__label-info Drag&Drop or choose the Image
                    input.form__file-upload(type="file" @change="loadPhoto")
                    button.form__file-btn.main-btn Upload
            .form__content-right
                .form-row
                    label.form__label Project name
                        input.form__input(type="text" name="name" v-model="work.title")
                .form-row
                    label.form__label Link
                        input.form__input(type="text" name="link" v-model="work.link")
                .form-row
                    label.form__label Description
                        input.form__input.form__input--textarea(type="textarea" name="desc" v-model="work.description")
                .form-row
                    label.form__label Add Tags
                        input.form__input.form__input--tags(type="text" name="text" v-model="work.techs")
                .form__tags
                    .form__tag-item
                        .form__tag-text HTML
                        .form__tag-icon
                    .form__tag-item
                        .form__tag-text HTML
                        .form__tag-icon
                    .form__tag-item
                        .form__tag-text HTML
                        .form__tag-icon
            
        .form__controls
            button.form__reset-btn(type="reset") Cancel
            button.form__btn-submit.main-btn(type="submit") Submit
</template>
<script>
    import {mapActions} from "vuex";
    import Vue from "vue";
    import vueDropzone from "vue2-dropzone";
    export default {
        components: {
            vueDropzone
        },
        data(){
            return{
                photoUrl:"",
                work: {
                    title: "",
                    techs: "",
                    photo: "",
                    link: "",
                    description: ""

                },
                dropOptions: {
                    url: 'https://httpbin.org/post',
                    maxFilesize: 1.5,
                    maxFiles: 1,
                    chunking: false,
                    addRemoveLinks: false
                    
                }
            }
        },
        methods: {
            ...mapActions("works", ["addWork"]),
            loadPhoto(e){
                const file = e.target.files[0];
                this.work.photo = file;
                this.getPhoto(file);
            },
            getPhoto(file){
                const reader = new FileReader();
                try {
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        this.photoUrl = reader.result;
                    }
                } catch (error) {}

            },
            async addNewWork(){
             try {
                const response = this.addWork(this.work);
                this.work ={};
                    
             } catch (error) {
                 
             }
            }
        }
        
    }

</script>        