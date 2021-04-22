<template>
  <div class="main-menu">
    <div class="logo">Aviation Scheduler</div>
    <div class="menu">

      <!-- Logged out routes -->
      <router-link v-if="!loggedIn" class="link" to="/">Home</router-link>
      <router-link v-if="!loggedIn" class="link" to="/login">Login</router-link>
      <router-link v-if="!loggedIn" class="link" to="/register">Register</router-link>


      <!-- Student Routes -->
      <router-link  v-if="loggedIn&&userType=='student'" class="link" to="/schedule">Schedule</router-link>


      <!-- School Routes -->
      <router-link v-if="loggedIn&&userType=='school'" class="link" to="/school-dashboard">Dashboard</router-link>
      <router-link v-if="loggedIn&&userType=='school'" class="link" to="/students">Students</router-link>
      <router-link v-if="loggedIn&&userType=='school'" class="link" to="/aircraft">Aircraft</router-link>
      <router-link v-if="loggedIn&&userType=='school'" class="link" to="/tutors">Tutors</router-link>


      <!-- Admin Routes -->
      <router-link v-if="loggedIn&&userType=='admin'" class="link" to="/admin-dashboard">Dashboard</router-link>
      <router-link v-if="loggedIn&&userType=='admin'" class="link" to="/clients">Clients</router-link>


      <div v-if="loggedIn" class="account-profile-menu">
        <div class="account-profile-image"></div>
        <div class="account-menu-top">
          <div class="account-menu">
            <div class="menu-item" @click="navigateTo('profile')"><div class="icon"></div><div class="text">My Profile</div></div>
            <div class="menu-item" @click="navigateTo('settings')"><div class="icon"></div><div class="text">Settings</div></div>
            <div class="menu-item" @click="logout"><div class="icon"></div><div class="text">Logout</div></div>
          </div>
        </div>
      </div>
      <div class="account-profile-menu">
        <div class="account-profile-image"></div>
        <div class="account-menu-top">
          <div class="account-menu">
            <div class="menu-item"><div class="text" style="font-weight: 600;">Acting as: {{this.$store.state.user_settings.type}}</div></div>
            <div class="menu-item" @click="changeUser('admin')"><div class="icon"></div><div class="text">Admin</div></div>
            <div class="menu-item" @click="changeUser('school')"><div class="icon"></div><div class="text">School</div></div>
            <div class="menu-item" @click="changeUser('student')"><div class="icon"></div><div class="text">Student</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-menu',
  computed: {
    loggedIn: function(){
      return this.$store.state.loggedIn;
    },
    userType: function(){
      return this.$store.state.user_settings.type;
    }
  },
  methods: {
    navigateTo: function(page){
      this.$router.push({name:page});
    },
    changeUser: function(user){
      this.$store.dispatch('change_user_type',user);
    },
    logout: function(){
      alert('Logout');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.main-menu {height: $main_menu_height;
            width: calc(100vw - 1rem);
            box-shadow: 1px 1px 1px 1px #e8e8e8;
            padding: 0.5rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 17;
            background-color: #ffffff;


          > .logo {height: 2.5rem;
                  line-height: 2.5rem;
                  font-size: 1.8rem;
                  font-weight: 600;
                  margin-left: 0.5rem;
                  float: left;}

          > .menu {width: auto;
                  float: right;
                  height: 2.5rem;
                  line-height: 2.6rem;
                  margin-right: 1rem;

            > .link {height: 2rem;
                    line-height: 2.6rem;
                    font-size: 1.2rem;
                    padding: 0rem 0.5rem;
                    text-align: center;}

            > .account-profile-menu:hover > .account-menu-top {display: block;}
            > .account-profile-menu:hover > .account-menu-top > .account-menu {display: block;}

            > .account-profile-menu {height: 2.5rem;
                                      width: 2.5rem;
                                      display: inline-block;
                                      position: relative;
                                      vertical-align: middle;
                                      background-color: transparent;

                    > .account-profile-image {width: 100%;
                                              height: 100%;
                                              position: absolute;
                                              top: 0;
                                              left: 0;
                                              border-radius: 1.5rem;
                                              background-color: #e4e4e4;
                                              z-index: 20;
                                              cursor: pointer;}

                    > .account-menu-top {height: auto;
                                        min-height: 0.75rem;
                                        top: 100%;
                                        right: -1rem;
                                        width: 100%;
                                        min-width: 12rem;
                                        position: absolute;
                                        z-index: 19;
                                        background-color: transparent;
                                        display: none;

                        > .account-menu {position: absolute;
                                        top: calc(100%);
                                        right: 0;
                                        border: 1px solid #e2e2e2;
                                        box-shadow: 1px 1px 1px 1px #eeeeee;
                                        border-radius: 0.25rem;
                                        min-width: 12rem;
                                        width: auto;
                                        z-index: 18;
                                        background-color: #ffffff;
                                        display: none;

                                > .menu-item {padding: 0.8rem;
                                              cursor: pointer;
                                              font-size: 1.2rem;

                                              > .icon {width: 1.5rem;
                                                      height: 1.5rem;
                                                      background-color: #e3e3e3;
                                                      margin-right: 0.5rem;
                                                      display: inline-block;
                                                      vertical-align: middle;}

                                              > .text {width: auto;
                                                      height: 1.5rem;
                                                      line-height: 1.7rem;
                                                      background-color: transparent;
                                                      margin-right: 0.5rem;
                                                      display: inline-block;
                                                      vertical-align: middle;}
                                            }

                                > .menu-item:hover {color: #20a6be;}

                                      }

                                }
                              }
                  }
          }


</style>
