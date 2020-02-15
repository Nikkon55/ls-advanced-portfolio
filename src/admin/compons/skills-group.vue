<template lang="pug">
form.about__form.form
    .form__header 
        .form__title {{ category.category }}
            input.form__input.form__input--name(type="text" name="name" placeholder ="frontend")
        .form__control-btns
            .btns__edit
                .btn-edit__container
                    button.btn-edit
                .btn-delete__container 
                    button.btn-delete
            .btns__yes-no.hidden
                .btn-yes__container
                    button.btn-yes
                .btn-no__container  
                    button.btn-no
    .form__content
        .form__row
            .form__row-input-box
                input.form__row-input(type="text" name="name" placeholder ="Frontend")
            .form__row--persent-box
                input.input.form__row-input--persent(type="number" min="0" max="100")
            .form__control-btns
            .btns__edit
                .btn-edit__container
                    button.btn-edit
                .btn-delete__container 
                    button.btn-delete
            .btns__yes-no.hidden
                .btn-yes__container
                    button.btn-yes
                .btn-no__container  
                    button.btn-no
        .form__row
            .form__row-input-box
                input.form__row-input(type="text" name="name" placeholder ="Frontend")
            .form__row--persent-box
                input.input.form__row-input--persent(type="number" min="0" max="100")
            .form__control-btns
                .btns__edit
                .btn-edit__container
                    button.btn-edit
                .btn-delete__container 
                    button.btn-delete
                .btns__yes-no.hidden
                .btn-yes__container
                    button.btn-yes
                .btn-no__container  
                    button.btn-no
        .form__row
            .form__row-input-box
                input.form__row-input(type="text" name="name" placeholder ="Frontend")
            .form__row--persent-box
                input.input.form__row-input--persent(type="number" min="0" max="100")
            .form__control-btns
                .btns__edit
                .btn-edit__container
                    button.btn-edit
                .btn-delete__container 
                    button.btn-delete
                .btns__yes-no.hidden
                .btn-yes__container
                    button.btn-yes
                .btn-no__container  
                    button.btn-no                 

    .form__bottom
        input.input.input.form__input.form__input--skill-add(type="text" name="name" placeholder ="New skill")
        .form__input--persent-box
            input.input.form__input--persent(type="number" min="0" max="100")
        button.add-btn.add-btn--skill-add
            .add-btn__img
            .add-btn__icon
</template>

<script>
    export default {
        props: {
            category:{
                type: Object,
                default: ()=>{},
                required: true
            }
        }
    }
</script>

<style lang="postcss" scoped>

    .form{
    width: 100%;
    background: #fff;
    box-shadow: 6px 7px 5px 0px rgba(0,0,0,0.07);
    padding: 0 2%;

    &__row {
        display: flex;
        wrap: no-wrap;
        justify-content: space-between;
        padding: 5px 1%;
        
    }
    

    &__input {
        background: transparent;
        border: transparent;
        border-bottom: 1px #000 solid;
        padding: 10px 0;
        width: 100%;
        font-size: 18px;
        &:placeholder, &:-webkit-input-placeholder, &:-ms-input-placeholder {
        font-size: 18px;
        font-weight: 400;
        opacity: 0.51;
        
        }
    }
    &__input--skill-add{
        width: 50%;
        margin-right: 10px;
    }
    &__input--persent{
        background: transparent;
        border: transparent;
        
        padding: 10px 0;
        height: 100%;
        position: relative;
        width: 70%;
        
        
    }
    &__input--persent-box{
        position: relative;
        border-bottom: 1px #000 solid;
        margin-right: 50px;
        
        &:after{
        content: '%';
        position: absolute;
        display: block;
        right: 0;
        top: 40%;
        color: rgba(65,76,99,.7);
        font-size: 18px;
        }
    }
    &__header {
        display: flex;
        padding: 14px 1%;
        border-bottom: 2px solid rgba(31,35,45,0.15);
        justify-content: space-between;
    }
    &__content{
        min-height: 237px;
    }
    &__bottom{
        display: flex;
        padding: 4% 0;
        justify-content: flex-end;
        
    }
    &__control-btns{
        display: flex;
        align-items: center;
    }
    &__title{
        width: 50%;
    }
    }

    .form__row-input-box{
    width: 100%;
    margin-right: 10px;
    }

    .form__row-input{
    background: transparent;
    border: transparent;
    border-bottom: 1px transparent solid;
    padding: 10px 0;
    width: 100%;
    font-size: 16px;
    &:focus{
        border-bottom: 1px #000 solid;
        outline: none;
    }
        &:placeholder, &:-webkit-input-placeholder, &:-ms-input-placeholder {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.51;
        
        }
    }
    .form__row--persent-box{
    position: relative;
    /* border-bottom: 1px transparent solid; */
    margin-right: 50px;
    
    &:after{
        content: '%';
        position: absolute;
        display: block;
        right: 0;
        top: 20%;
        color: rgba(65,76,99,.7);
        font-size: 18px;
    }
    }
    .form__row--persent-box:focus-within{
    border-bottom: 1px black solid;
    }

    .form__row-input--persent{
    background: transparent;
    border: transparent;
    
    padding: 10px 0;
    height: 100%;
    position: relative;
    width: 70%;

    &:focus{
        outline: none;
    }
    }


    .btn-edit {
    height: 15px;
    width: 15px;
    background: svg-load("pencil.svg", fill=#a0a5b1, height=100%, width=100%);
    background-size:cover;
    &__container {
        margin-right: 20px;
    }
    }
    .btn-delete{
    height: 15px;
    width: 15px;
    
    background: svg-load("trash.svg", fill=#a0a5b1, height=100%, width=100%);
    background-size:cover;
    }


    .btns__yes-no{
    display: flex;
    
    }
    .hidden.btns__yes-no{
    display: none;
    }

    .btn-yes{
    height: 15px;
    width: 15px;
    
    background: svg-load("tick.svg", fill=#01d70b, height=100%, width=100%);
    background-size:cover;
    &__container{
        margin-right: 20px;
    }
    }

    .btn-no{
    height: 15px;
    width: 15px;
    
    background: svg-load("cross.svg", fill=#bf2929, height=100%, width=100%);
    background-size:cover;
    }

    .btns__edit {
    display: flex;
    }


</style>