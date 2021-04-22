<template>
  <div class="content">

    <div class="inner-content">
      <div class="title">{{title}}</div>

      <div class="settings-section">
        <div class="title">Interface Preferences</div>
        <div class="settings">

          <div class="setting">
            <div class="switch"><button @click="changeShowHalfHour">{{halfHourBlock}}</button></div>
            <div class="description">Show half hour block titles in Day Calendar.</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'profile',
  data: function(){
    return {
      title: 'Settings',
    }
  },
  mounted(){

  },
  computed: {
    halfHourBlock: function(){
      return (this.$store.state.user_settings.gui.showHalfHours)?'On':'Off';
    }
  },
  methods: {
    changeShowHalfHour: function(){
      this.$store.dispatch('toggle_show_half_hour');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

  .content {background-color: #ffffff;
            min-height: 100vh;
            min-width: 100vw;

      .inner-content {width: 900px;
                      margin-top: 2rem;
                      height: auto;
                      height: 150vh;
                      min-height: 5rem;
                      margin-left: auto;
                      margin-right: auto;
                      outline: 1px solid #e3e3e3;

            > .title {font-size: 2rem;
                    font-weight: 200;
                    padding: 1rem;}

      }
  }

.settings-section {width: calc(100% - 2rem);
                  padding: 1rem;

            > .title {font-size: 1.4rem;
                      font-weight: 600;}

            > .settings {
              > .setting {padding: 0.5rem;
                > .switch {display: inline-block;margin-right: 0.5rem;}
                > .description {display: inline-block;}
              }
            }
              }
</style>
