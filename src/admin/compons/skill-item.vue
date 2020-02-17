<template lang="pug">
    .form__row
        .form__row-input-box
            input.form__row-input(type="text" name="name" v-model="skill.title")
        .form__row--persent-box
            input.input.form__row-input--persent(type="number" min="0" max="100" v-model="skill.percent")
        .form__control-btns
        .btns__edit
            .btn-edit__container
                button.btn-edit
            .btn-delete__container 
                button.btn-delete(@click.prevent="removeExistedSkill")
        .btns__yes-no.hidden
            .btn-yes__container
                button.btn-yes
            .btn-no__container  
                button.btn-no
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        props:{
            skill: {
                type: Object,
                default: ()=>{},
                required: true
            }
        },
        methods: {
            ...mapActions("skills",["removeSkill"]),
            async removeExistedSkill(){
                try {
                    await this.removeSkill(this.skill)
                    
                } catch (error) {
                    
                }
            }
        },
        data(){
            return {
                editedSkill{
                    
                }
            }
        }
    }
</script>