<template lang="pug">
    .form__row
        .form__row-input-wrapper(v-if="editmode==false")
            .form__row-input-box
                input.form__row-input(type="text" name="name" v-model="skill.title" :disabled="editmode==false")
            .form__row--persent-box
                input.input.form__row-input--persent(type="number" min="0" max="100" v-model="skill.percent" :disabled="editmode==false")
        .form__row-input-wrapper(v-else="editmode==true")
            .form__row-input-box
                input.form__row-input(type="text" name="name" v-model="editedSkill.title")
            .form__row--persent-box
                input.input.form__row-input--persent(type="number" min="0" max="100" v-model="editedSkill.percent")
        .form__control-btns
            .btns__edit(v-if="editmode==false")
                .btn-edit__container
                    button.btn-edit(@click.prevent="editmode=true")
                .btn-delete__container 
                    button.btn-delete(@click.prevent="removeExistedSkill")
            .btns__yes-no(v-else="editmode==true")
                .btn-yes__container
                    button.btn-yes(@click.prevent="editExistedSkill")
                .btn-no__container  
                    button.btn-no(@click.prevent="editmode=false")
</template>

<script>
    import {mapActions} from "vuex";
    import Vue from "vue";
    export default {
        props:{
            skill: {
                type: Object,
                default: ()=>{},
                required: true
            }
        },
        data(){
            return {
                editmode: false,
                editedSkill:{...this.skill}
            }
        },
        methods: {
            ...mapActions("skills",["removeSkill", "editSkill"]),
            async removeExistedSkill(){
                try {
                    await this.removeSkill(this.skill)
                    
                } catch (error) {
                    
                }
            },
            async editExistedSkill(){
                try {
                    await this.editSkill(this.editedSkill);
                    
                    
                    
                } catch (error) {
                    
                } finally {
                    this.editmode=false;
                }

            }
        }
        
    }
</script>
<style lang="postcss" scoped>
    .form__row-input-wrapper{
        display: flex;
        wrap: no-wrap;
        justify-content: space-between;
        padding: 5px 1%;
        width: 84%;
    }
</style>