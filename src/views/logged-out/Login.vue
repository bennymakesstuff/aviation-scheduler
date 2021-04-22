<template>
  <div class="content">

    <div class="inner-content">

      <div class="login-area">
        <div class="upper">Login</div>

        <div class="middle">
          <div class="inner">

            <div class="input-field">
              <div class="icon"/>
              <input type="text" placeholder="email"/>
            </div>
            <div class="input-field">
              <div class="icon"/>
              <input type="password" placeholder="password"/>
            </div>

          </div>
        </div>

        <div class="lower"><router-link to="/register">Register</router-link> | <router-link to="forgot">Forgot Password</router-link></div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'login',
  data: function(){
    return {
      title: 'Login',
    }
  },
  mounted(){

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

  .content {background-color: #ffffff;
            min-height: calc(100vh - #{$main_menu_height} - 2rem);
            min-width: 100vw;

      .inner-content {width: 900px;
                      margin-top: 2rem;
                      height: auto;
                      height: calc(100vh - #{$main_menu_height} - 3rem);
                      min-height: 5rem;
                      margin-left: auto;
                      margin-right: auto;
                      outline: 1px solid #e3e3e3;
                      text-align: center;
                      line-height: calc(100vh - #{$main_menu_height} - 3rem);

            .title {font-size: 2rem;
                    font-weight: 200;
                    padding: 1rem;}

      }
  }

.login-area {max-width: 30rem;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid #e3e3e3;
            display: inline-block;
            line-height: 1rem;
            min-width: 27rem;
            vertical-align: middle;

            > .upper {padding: 0.5rem 1rem 0rem 1rem;}
            > .middle {padding: 0.5rem 1rem 0.5rem 1rem;}
            > .lower {padding: 0rem 1rem 0.5rem 1rem;}

          }



</style>
