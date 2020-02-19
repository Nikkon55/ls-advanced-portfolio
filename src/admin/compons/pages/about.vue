<template lang="pug">
  section.about
      .container
          .about__first-row
            .about__title "About-me" section
            button.add-btn(@click.prevent="addform=true")
              .add-btn__img
                  .add-btn__icon
              .add-btn__text add new group
      
          .about__content
              form(@submit.prevent="addNewCategory" v-if="addform==true").about__form.form
                .form__header
                    .form__title
                      input.form__input.form__input--name(type="text" name="name" placeholder ="Frontend" v-model="title")
                    
                          
                    .btns__yes-no
                      .btn-yes__container
                        button.btn-yes(type="submit")
                      .btn-no__container  
                        button.btn-no(@click.prevent="addform=false")
                .form__content
                form.form__bottom
                    input.input.input.form__input.form__input--skill-add(type="text" name="name" placeholder ="New skill" :disabled="addform==true")
                    .form__input--persent-box
                      input.input.form__input--persent(type="number" min="0" max="100" :disabled="addform==true")
                    button(type="submit").add-btn.add-btn--skill-add
                      .add-btn__img
                        .add-btn__icon

              
              
          ul.categories__list
            li.categories__item(v-for="category in categories")
              skills-group(:category="category")   
</template>
<script>
import {mapActions, mapState} from 'vuex';
  export default {
    components: {
      skillsGroup: () => import("../skills-group")
    },
    data: () => ({
      title:"",
      addform: false
    }),
    computed: {
      ...mapState('categories', {
        categories: state => state.categories
      })
    },
    created(){
      this.fetchCategories();
    },
    methods: {
      ...mapActions('categories', ["addCategory", "fetchCategories"]),
      async addNewCategory(){
        try {
          await this.addCategory(this.title);
          this.addform=false;
        } catch (error) {
          alert(error.message);
        }
        
      }
    }
  };

</script>
<style lang="postcss">
  /* @import url("../mixins.pug"); */
  @import url("../../../styles/mixins.pcss");
  @import url("../../../styles/layout/base.pcss");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

.categories__list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.categories__item{
  width: 49%;
  margin-bottom: 20px;
}

.about{
  
  min-width:100%;
  min-height: 100%;
}

.about__form {
  width: 100%;
}
.about__first-row{
  display: flex;
}

.about__title{
  font-size: 21px;
  font-weight: 700;
  margin-right: 65px;
}

.about__content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.about__content .about__form{
  width: 100%;
}


.add-btn{
  color: $purple;
  background: transparent;
  font-weight: 400;
  display: flex;
  align-items: center;
  
  &__img{
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    position: relative;
    margin-right: 13px;
    
    
  }
  &__icon{
    position: absolute;
    top: 34%;
    left: 33%;
    height: 8px;
    width: 8px;
    background: svg-load("cross.svg", fill=$text-color, width=100%, height=100%);
    transform: rotate(-45deg);
    
  }


}

.add-btn--skill-add .add-btn__img{
  height: 40px;
  width: 40px;
}

.add-btn--skill-add .add-btn__icon{
  height: 15px;
  width: 15px;
  left: 31%;
}

.form{
  width: 49%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
