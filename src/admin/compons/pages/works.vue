<template lang="pug">
    .works-big-section
        section.works
        .container
            .works__header
                h1.works__title.section__title Section "Portfolio"
            .works__content
                works-add
                //- form.form.works__form(@submit.prevent="addNewWork")
                //-     .form__header
                //-         h2.form__title Edit Portfolio
                //-     .form__content.form__content--works
                //-         .form__content-left
                //-             .form__row.form__row--upload
                //-             label.form__label-upload
                //-                 .form__label-info Drag&Drop or choose the Image
                //-                 input.form__file-upload(type="file" )
                //-                 button.form__file-btn.main-btn Upload
                //-         .form__content-right
                //-             .form-row
                //-                 label.form__label Project name
                //-                     input.form__input(type="text" name="name" v-model="work.title")
                //-             .form-row
                //-                 label.form__label Link
                //-                     input.form__input(type="text" name="link" v-model="work.link")
                //-             .form-row
                //-                 label.form__label Description
                //-                     input.form__input.form__input--textarea(type="textarea" name="desc" v-model="work.description")
                //-             .form-row
                //-                 label.form__label Add Tags
                //-                     input.form__input.form__input--tags(type="text" name="text" v-model="work.techs")
                //-             .form__tags
                //-                 .form__tag-item
                //-                     .form__tag-text HTML
                //-                     .form__tag-icon
                //-                 .form__tag-item
                //-                     .form__tag-text HTML
                //-                     .form__tag-icon
                //-                 .form__tag-item
                //-                     .form__tag-text HTML
                //-                     .form__tag-icon
                        
                //-     .form__controls
                //-         button.form__reset-btn(type="reset") Cancel
                //-         button.form__btn-submit.main-btn(type="submit") Submit

        section.works
            .container
                .works__preview
                    a.works__add-btn.add-btn--square
                        .works__add-btn-circle
                            .works__add-btn-cross +
                        .works__add-btn-text Add new project

                    .works__item
                        .works__image
                            img.works__pic(src="../../../images/content/prew1.jpg")
                            ul.works__tags
                                li.works__tag HTML
                                li.works__tag JS
                                li.works__tag css
                        .works__desc
                            h3.works__title Project name
                            .works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
                            a.works__link www.google.com
                        .works__control
                            button.works__btn.span-btn.span-btn--edit
                                .span-btn__text Edit
                                .span-btn__icon.span-btn__icon--edit
                            button.works__btn.span-btn.span-btn--delete
                                .span-btn__text Delete
                                .span-btn__icon.span-btn__icon--delete
                    .works__item
                        .works__image
                            img.works__pic(src="../../../images/content/prew1.jpg")
                            ul.works__tags
                                li.works__tag HTML
                                li.works__tag JS
                                li.works__tag css
                        .works__desc
                            h3.works__title Project name
                            .works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
                            a.works__link www.google.com
                        .works__control
                            button.works__btn.span-btn.span-btn--edit
                                .span-btn__text Edit
                                .span-btn__icon.span-btn__icon--edit
                            button.works__btn.span-btn.span-btn--delete
                                .span-btn__text Delete
                                .span-btn__icon.span-btn__icon--delete
                    .works__item
                        .works__image
                            img.works__pic(src="../../../images/content/prew1.jpg")
                            ul.works__tags
                                li.works__tag HTML
                                li.works__tag JS
                                li.works__tag css
                        .works__desc
                            h3.works__title Project name
                            .works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
                            a.works__link www.google.com
                        .works__control
                            button.works__btn.span-btn.span-btn--edit
                                .span-btn__text Edit
                                .span-btn__icon.span-btn__icon--edit
                            button.works__btn.span-btn.span-btn--delete
                                .span-btn__text Delete
                                .span-btn__icon.span-btn__icon--delete

    
</template>
<script>
    import {mapActions} from "vuex";
    export default {
        components:{
            worksAdd: () => import("../works-add")
        },
        data() {
            return {
                
            }
        },
        // methods: {
        //     ...mapActions("works", ["addWork"]),
        //     addNewWork(){
        //      this.addWork(this.work)
        //     }
        // }
    }
</script>
<style lang="postcss">
    /* @import url("../mixins.pug"); */
  @import url("../../../styles/mixins.pcss");
  @import url("../../../styles/layout/base.pcss");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    .section__title{
    font-size: 21px;
    font-weight: 700;
    }

    .works{
    margin-bottom: 32px;
    &__title{
        margin-bottom: 60px;
    }

    &__form{
        width: 95%;
    }
    }
    .works__form{
    padding: 2% 2%;
    }

    .form__header{
    margin-bottom: 48px;
    }

    .form__content--works{
    display: flex;
    justify-content: space-between;
    @include tablets {
        flex-direction: column;
        align-items: center;
    }
    }

    .form__content-left{
    width: 49%;
    @include tablets {
        width:80%;
    }
    }
    .form__content-right{
    width: 50%;
    @include tablets {
        width:80%;
    }
    }

    .form__label-upload{
    min-height: 275px;
    background-color: #dee4ed;
    border: 1px dashed #a1a1a1;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    }
    .form__label-info{
    opacity: 0.5;
    color: #414c63;
    font-weight: 400;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 27px;
    
    }
    .form__file-upload{
        background: transparent;
        width: 100%;
        height: 100%;
    }
    .main-btn{
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    padding: 19px 45px;
    background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    border-radius: 25px;
    }

    .form__label{
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    }

    .form-row{
    margin-bottom: 30px;
    }

    .form__input--textarea{
    min-height: 145px;
    border: 1px solid #414c63;
    }

    .form__tags{
    display: flex;
    }

    .form__tag-item{
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 15px;
    background-color: #f4f4f4;
    margin-right: 9px;
    }

    .form__tag-text{
    opacity: 0.7;
    color: #283340;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 9px;
    }

    .form__tag-icon{
    height: 11px;
    width: 11px;
    background: svg-load("cross.svg", fill="#414c63", height=100%, width=100%);
    }
    .form__input--tags{
    margin-bottom: 19px;
    }
    .form__controls{
    display: flex;
    justify-content: flex-end;
    }
    .form__reset-btn{
    background-color: transparent;
    color: #383bcf;
    font-size: 16px;
    font-weight: 400;
    margin-right: 59px;
    }

    //-works second section works second section works second section works second section

    .works__preview{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 95%;
    }
    .works__add-btn{
    margin-bottom: 31px;
    }
    .add-btn--square{
    width: 32%;
    background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include tablets {
        width: 48%;
    }
    }

    .works__add-btn-circle{
    width: 150px;
    height: 150px;
    position: relative;
    border: 2px solid #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    }

    .works__add-btn-cross{
    font-size: 72px;
    color: #fff;
    font-weight: 200;
    }

    .works__add-btn-text{
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    }

    .works__item{
    display: flex;
    flex-direction: column;
    width: 32%;
    padding-bottom: 40px;
    box-shadow: 0.375rem 0.4375rem 0.3125rem 0 rgba(0,0,0,.07);
    margin-bottom: 31px;
    @include tablets {
        width: 48%;
    }
    }
    .works__image{
    position: relative;
    margin-bottom: 40px;
    }

    .works__tags{
    position: absolute;
    right: 0;
    bottom: 5px;
    display: flex;
    
    }

    .works__tag{
    
    color: rgba(16, 20, 25, 0.7);
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #fff;
    margin-right: 8px;
    }
    .works__desc{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 46px;
    }
    .works__title{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 26px;
    
    }

    .works__text{
    opacity: 0.7;
    margin-bottom: 26px;
    line-height: 1.5rem;
    }

    .works__link{
    color: #383bcf;
    font-size: 16px;
    font-weight: 400;
    }

    .works__control {
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin: 0 auto;
    }

    .span-btn{
    display: flex;
    background: transparent;
    justify-content: space-between;
    }
    .span-btn__text{
    font-weight: 400;
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    margin-right: 11px;
    }

    .span-btn__icon{
    height: 17px;
    width: 17px;
    }

    .span-btn__icon--edit{
    background: svg-load('pencil.svg', fill="#383bcf", height=100%, width=100%);
    }
    .span-btn__icon--delete{
    background: svg-load('trash.svg', fill="#c92e2e", height=100%, width=100%);
    }
</style>