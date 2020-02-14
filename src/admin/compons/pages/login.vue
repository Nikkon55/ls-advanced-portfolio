<template lang="pug">
    .wrapper
        .login
            .login__content
                h1.login__title Authorization
                form(@submit.prevent = "login").login__form
                    .login__form-row
                        label.login__label Username
                            .login__input-row
                                .login__icon-box
                                    .login__icon.login__icon--user
                                input.login__input(type="text" name="login" v-model="user.name")
                    .login__form-row
                        label.login__label Password
                            .login__input-row
                                .login__icon-box
                                    .login__icon.login__icon--key
                                input.login__input(type="text" name="login" v-model="user.password")
                    .login__form-row
                        button.login__btn(type="submit") Log-in       
</template>

<script>
    import $axios from "../../requests"
    export default {
        data: ()=> ({
            user: {
                name: "",
                password: ""
            }
        }),
        methods:{
            async login(){
                try {
                
                   const response = await $axios.post("/login", this.user);
                   const token = response.data.token;
                   
                   localStorage.setItem("token", token);
                   $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

                   this.$router.replace("/");
                } catch (error) {
                    
                }
            }
        }
    }
</script>

<style lang="postcss">
  /* @import url("../mixins.pug"); */
   @import url("../../../styles/mixins.pcss");
  @import url("../../../styles/layout/base.pcss");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');


  .wrapper{
      height: 100vh;
      width: 100vw;
  }
  .login{
    background: url(../../../images/content/6-layers.jpg);
    height: 100%;
    width: 100%;
    background-size: cover;
    opacity: 0.7;
    position: relative;
  }

  .login__content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
      padding: 60px 80px;
    }

    .login__title{
        color: #414c63;
        font-size: 36px;
        font-weight: 400;
        margin-bottom: 30px;
    }

    .login__icon-box{
        width: 27px;
        height: 30px;
        margin-right: 19px;
    }

    .login__icon--user{
        width: 27px;
        height: 30px;
        background: svg-load("user.svg", fill="#414c63", height=100%, width=100%);
        background-repeat: no-repeat;
    }

    .login__icon--key{
        width: 27px;
        height: 30px;
        background: svg-load("user.svg", fill="#414c63", height=100%, width=100%);
        background-repeat: no-repeat;
    }

    .login__input-row{
        display: flex;
        border-bottom: 1px solid #000;
        margin-top: 10px;
    }

    .login__input{
        background: transparent;
        border: transparent;
        padding: 0.625rem 0;
        width: 100%;
        font-size: 1.125rem;
    }
    .login__label{
        opacity: 0.3;
        color: #414c63;
        font-size: 16px;
        font-weight: 400;
    }

    .login__form-row{
        margin-bottom: 40px;
        &:last-child{
            margin-bottom: 0px;
        }
    }

    .login__btn{
       background: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
       color: #ffffff;
       font-size: 18px;
       font-weight: 700;
       text-transform: uppercase;
       padding: 35px 120px;
       border-radius: 40px 5px;
    }
</style>                            

