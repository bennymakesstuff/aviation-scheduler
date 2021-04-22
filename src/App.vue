<template>
  <div class="full-width">
    <main-menu/>


    <div v-if="loggedIn" class="logged-in"></div>

    <div v-if="!loggedIn" class="logged-out">
      <router-view v-on:listchange="listchange"></router-view>
    </div>


  </div>
</template>

<script>
import MainMenu from '@/views/logged-out/MainMenu.vue'
import NotificationList from '@/notifications/components/notifayeToast.vue';

export default {
  name: 'main-entry',
  components: {
    'notification-area':NotificationList,
    'main-menu': MainMenu
  },
  data: function(){
    return {
      loggedIn: false,
      currentList: 'default'
    }
  },
  computed: {
    notes: function(){
      return this.$notifaye.notes(this.selectedQueue) || null;
    },
  },
  methods: {
    listchange: function(data){
      this.currentList = data;
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';

.full-width {
  width: 100%;
}

.logged-in {width: 100vw;
            height: 100vh;
            background-color: #9fb09d;}

.logged-out {width: 100vw;
            height: calc(100vh - #{$main_menu_height});
            padding-top: $main_menu_height;
            position: fixed;
            top: 0;
            left: 0;
            overflow-x: hidden;
            overflow-y: scroll;
            background-color: #ffffff;}


</style>
