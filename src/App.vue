<template>
  <div class="full-width center-content">

    <div v-if="loggedIn" class="logged-in">

    </div>

    <div v-if="!loggedIn" class="logged-out">
      <h1>{{this.$store.state.app_settings.name}}</h1>
      <main-menu/>
      <router-view v-on:listchange="listchange"></router-view>
    </div>

<notification-area :list="notes"/>

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
}.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logged-in {width: 100vw;
            height: 100vh;
            background-color: #9fb09d;}

.logged-out {width: 100vw;
            height: 100vh;
            background-color: #e8b2b2;}


</style>
