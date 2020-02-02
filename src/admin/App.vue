<template lang="pug">
  .wrapper
    header.header
      .header__top
        .container.header-container--top
          .header-container--top__left
            .user
              .user__avatar
                img.user__pic(src="../images/content/user.jpg")
              .user__name Nikolai Kononenko
            .header__title  Administration panel
          .header-container--top__right 
            a.exit-btn Log-out
      .header__bottom
        .container.header-container
          nav.nav
            ul.nav__list
              li.nav__item
                a.nav__link(href="#") About me
              li.nav__item
                a.nav__link(href="#") Portfolio
              li.nav__item
                a.nav__link(href="#") Testimonial  

    
    section.about
      .container
        .about__first-row
          .about__title "About-me" section
          button.add-btn
            .add-btn__img
              .add-btn__icon
            .add-btn__text add new group
        .about__content
          form.about__form.form
            .form__header
              .form__title
                input.form__input.form__input--name(type="text" name="name" placeholder ="Frontend")
              .form__control-btns
                .form__control-btns__edit
                  .btn-edit__container
                    button.btn-edit
                  .btn-delete__container 
                    button.btn-delete
                .form__control-btns__yes-no
                  button.btn-yes
                  button.btn-no
            .form__content
            .form__bottom
              input.input.input.form__input.form__input--name(type="text" name="name" placeholder ="")
              .form__inpit--persent
                input.input(type="number" min="0" max="100")
                .form__input--persent-icon     
                   






</template>
<style lang="postcss">
  /* @import url("../mixins.pug"); */
  @import url("../styles/mixins.pcss");
  @import url("../styles/layout/base.pcss");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');




body{
  width: 100%;
  height: 100%;
  color: $adminFont;
}

.header{
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.header-container--top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-container--top__left{
  display: flex;
  align-items: center;
  
}

.header__top{
  background-color: #424268;
  width: 100%;
  color: $text-color;
  
  padding: 16px 0;
}

.header__bottom{
  padding: 30px 0;
}

.header__title{
  font-size: 14px;
  opacity: 0.5;
}

.exit-btn{
  font-size: 14px;
  opacity: 0.7;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7)
}
.user{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
}

.user__avatar {
    display: block;
    width: 45px;
    height: 45px;
    margin-right: 20px;
    
}

.user__pic{
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.user__name{
  font-size: 18px;
}

.nav{
    @include tablets {
        display: none;
    }
}
.nav__list {
    display: flex;
    flex-direction: row;
}
.nav__item {
    margin-right: 60px;
    &:last-child {
        margin-right: 0px;
    }
}

.nav__link {
    text-decoration: none;
    &:hover {
        border-bottom: 2px solid $purple;
        color: $purple;

    }
}
.about{
  background: $adminBg;
  width:100vw;
  height: 100vh;
}
.about__first-row{
  display: flex;
}

.about__title{
  font-size: 21px;
  font-weight: 700;
  margin-right: 65px;
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

.form{
  width: 50%;
  background: #fff;
  box-shadow: 6px 7px 5px 0px rgba(0,0,0,0.07);
  &__input {
    background: transparent;
    border: transparent;
    border-bottom: 1px #000 solid;
    padding: 10px 0;
    &:placeholder, &:-webkit-input-placeholder, &:-ms-input-placeholder {
      font-size: 18px;
      font-weight: 400;
      opacity: 0.51;
      
    }
  }
  &__header {
    display: flex;
  }
}

.btn-edit {
  height: 15px;
  width: 15px;
  background: svg-load("pencil.svg", fill=#a0a5b1, height=100%, width=100%);
  background-size:cover;
}
.btn-delete{
  height: 15px;
  width: 15px;
  
  background: svg-load("trash.svg", fill=#a0a5b1, height=100%, width=100%);
  background-size:cover;
}

.btn-yes{
  height: 15px;
  width: 15px;
  
  background: svg-load("tick.svg", fill=#01d70b, height=100%, width=100%);
  background-size:cover;
}

.btn-no{
  height: 15px;
  width: 15px;
  
  background: svg-load("cross.svg", fill=#bf2929, height=100%, width=100%);
  background-size:cover;
}

</style>