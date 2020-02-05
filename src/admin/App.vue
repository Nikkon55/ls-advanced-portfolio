<template lang="pug">
  .wrapper--admin
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
            .form__bottom
              input.input.input.form__input.form__input--skill-add(type="text" name="name" placeholder ="New skill")
              .form__input--persent-box
                input.input.form__input--persent(type="number" min="0" max="100")
              button.add-btn.add-btn--skill-add
                .add-btn__img
                  .add-btn__icon

          form.about__form.form
            .form__header
              .form__title
                input.form__input.form__input--name(type="text" name="name" placeholder ="Frontend")
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
    section.works
      .container
        .works__header
          h1.works__title.section__title Section "Portfolio"
        .works__content
          form.form.works__form
            .form__header
              h2.form__title Edit Portfolio
            .form__content.form__content--works
              .form__content-left
                .form__row.form__row--upload
                  label.form__label-upload
                    .form__label-info Drag&Drop or choose the Image
                    input.form__file-upload(type="file")
                    button.form__file-btn.main-btn Upload
              .form__content-right
                .form-row
                  label.form__label Project name
                    input.form__input(type="text" name="name")
                .form-row
                  label.form__label Link
                    input.form__input(type="text" name="link")
                .form-row
                  label.form__label Description
                    input.form__input.form__input--textarea(type="textarea" name="desc")
                .form-row
                  label.form__label Add Tags
                    input.form__input.form__input--tags(type="text" name="text")
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

    section.works
      .container
        .works__preview
          a.works__add-btn.add-btn--square
            .works__add-btn-circle
              .works__add-btn-cross +
            .works__add-btn-text Add new project

          .works__item
            .works__image
              img.works__pic(src="../images/content/prew1.jpg")
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
              img.works__pic(src="../images/content/prew1.jpg")
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
              img.works__pic(src="../images/content/prew1.jpg")
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

    section.reviews
      .container
        .reviews__header
          h1.reviews__title.section__title Section "Testimonial"
        .works__content
          form.reviews__form
            .form__header
              h2.form__title New Testimonial
            .form__content.form__content--reviews
              .form__content-left
                .form__user-pic
                  .form__user-icon-box
                    .form__user-icon
                input.form__file-upload(type="file")
                button.user-pic-upload-btn Upload photo
              .form__content-right
                .form-row--2elements
                  .form-row
                    label.form__label Author name
                      input.form__input(type="text" name="name")
                  .form-row
                    label.form__label Occupation
                      input.form__input(type="text" name="prof")
                .form-row
                  label.form__label Text
                    input.form__input.form__input--textarea(type="textarea" name="desc")
                .form__controls
                  button.form__reset-btn(type="reset") Cancel
                  button.form__btn-submit.main-btn(type="submit") Submit
    section.reviews__preview
      .container
        .reviews__list
          a.reviews__add-btn.add-btn--square
            .works__add-btn-circle
              .works__add-btn-cross +
            .works__add-btn-text Add new reviews
          .reviews__item
            .reviews__user
              .reviews__avatar
                img.reviews__pic(src="../images/content/user.jpg")
              .reviews__info
                .reviews__name Vladimir Sabantsev
                .reviews__occup Front-end developer
            .reviews__desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
            .reviews__control
              button.reviws__btn.span-btn.span-btn--edit
                .span-btn__text Edit
                .span-btn__icon.span-btn__icon--edit
              button.reviews__btn.span-btn.span-btn--delete
                .span-btn__text Delete
                .span-btn__icon.span-btn__icon--delete
          .reviews__item
            .reviews__user
              .reviews__avatar
                img.reviews__pic(src="../images/content/user.jpg")
              .reviews__info
                .reviews__name Vladimir Sabantsev
                .reviews__occup Front-end developer
            .reviews__desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
            .reviews__control
              button.reviws__btn.span-btn.span-btn--edit
                .span-btn__text Edit
                .span-btn__icon.span-btn__icon--edit
              button.reviews__btn.span-btn.span-btn--delete
                .span-btn__text Delete
                .span-btn__icon.span-btn__icon--delete
          .reviews__item
            .reviews__user
              .reviews__avatar
                img.reviews__pic(src="../images/content/user.jpg")
              .reviews__info
                .reviews__name Vladimir Sabantsev
                .reviews__occup Front-end developer
            .reviews__desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
            .reviews__control
              button.reviws__btn.span-btn.span-btn--edit
                .span-btn__text Edit
                .span-btn__icon.span-btn__icon--edit
              button.reviews__btn.span-btn.span-btn--delete
                .span-btn__text Delete
                .span-btn__icon.span-btn__icon--delete            







                   








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

.wrapper{
  background: $adminBg;
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

.about__content {
  display: flex;
  justify-content: space-between;
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

//- worksworksworksworksworksworksworksworksworksworksworksworksworksworksworksworksworksworks

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
}

.form__content-left{
  width: 49%;
}
.form__content-right{
  width: 50%
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
  display: none;
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

//-reviewsreviewsreviewsreviewsreviewsreviewsreviewsreviewsreviewsreviewsreviews

.reviews{
  margin-bottom: 30px;
}

.reviews__form{
  box-shadow: 0.375rem 0.4375rem 0.3125rem 0 rgba(0,0,0,.07);
  width: 95%;
  padding: 2%;
}
.form__content--reviews{
  display: flex;
  
}

.form__content--reviews .form__content-left{
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form__content--reviews .form__content-right{
  width: 65%;
  
}

.form__user-pic{
  background-color: #dee4ed;
  height:200px;
  width: 200px;
  border-radius: 50%;
  margin-bottom: 28px;
}

.form__user-icon-box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

}
.form__user-icon {
  height: 100px;
  width: 100px;
  display: block;
  background: svg-load("user2.svg", fill='#ffffff', height=100%, width=100%);
  background-repeat: no-repeat;
}

.user-pic-upload-btn{
  background-color: transparent;
  color: #383bcf;
  font-size: 16px;
  font-weight: 400;
}

.form-row--2elements{
  display: flex;
  justify-content: space-between;
}
.form-row--2elements .form-row{
  width: 47%;
}

.reviews__list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
}

.reviews__add-btn{
  margin-bottom: 31px;
}

.reviews__item{
  display: flex;
  flex-direction: column;
  width: 32%;
  padding-top: 40px;
  padding-bottom: 40px;
  
  box-shadow: 0.375rem 0.4375rem 0.3125rem 0 rgba(0,0,0,.07);
  margin-bottom: 31px;
}

.reviews__user{
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px rgba(12,14,18,.15) solid;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 29px;
  justify-content: center;
}
.reviews__avatar{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.reviews__pic{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.reviews__name{
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 9px;
}

.reviews__desc{
  width: 90%;
  margin: 0 auto;
  margin-bottom: 46px;
  opacity: 0.7;
  line-height: 1.5rem;
}

.reviews__control{
  display: flex;
  justify-content: space-between;
  width: 93%;
  margin: 0 auto;
}

</style>