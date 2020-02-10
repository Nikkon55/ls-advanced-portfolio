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

          router-view


</template>
<style lang="postcss">
  /* @import url("../mixins.pug"); */
  @import url("../styles/mixins.pcss");
  @import url("../styles/layout/base.pcss");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');




body{
  width: 100%;
  height: 100%;
  
}

.wrapper{
  background: $adminBg;
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



</style>