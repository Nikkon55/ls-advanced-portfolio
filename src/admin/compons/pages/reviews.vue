<template lang="pug">
    .reviews-big-section
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
                            img.reviews__pic(src="../../../images/content/user.jpg")
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
                            img.reviews__pic(src="../../../images/content/user.jpg")
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
                            img.reviews__pic(src="../../../images/content/user.jpg")
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
  @import url("../../../styles/mixins.pcss");
  @import url("../../../styles/layout/base.pcss");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

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
  @include tablets {
    width:28%;
  }
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
  @include tablets {
    width: 48%;
  }
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