<template>
  <div class="content">

    <div class="inner-content">
      <div class="calendar">

        <div class="controls">
          <div class="left">
            <button @click="backOneDay"><</button>
            <button @click="forwardOneDay">></button>
          </div>
          <div class="gap"></div>
          <div class="center">{{displayedDate}}</div>
          <div class="gap"></div>
          <div class="right">
            View:
            <select v-model="view">
              <option value="day">Day</option>
              <option value="week">Week</option>
            </select>
          </div>
        </div>

        <div class="calendar-table">
          <view-day v-if="view=='day'" />
          <view-week v-if="view=='week'" />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import ViewDay from './ViewDay.vue';
import ViewWeek from './ViewWeek.vue';

export default {
  name: 'schedule',
  components: {
    'view-day':ViewDay,
    'view-week':ViewWeek,
  },
  data: function(){
    return {
      title: 'Schedule',
      view: 'day'
    }
  },
  mounted(){

  },
  computed: {
    displayedDate: function(){
      let milliseconds = this.$store.state.app_settings.displayedDate * 1000;
      let date = new Date(milliseconds);

      let dateString = date.toLocaleString("en-US", {weekday: "long"})+' '+date.toLocaleString("en-US", {day: "numeric"})+' '+date.toLocaleString("en-US", {month: "long"})+' '+date.toLocaleString("en-US", {year: "numeric"});

      return dateString;
    }
  },
  methods: {
    backOneDay:function(){
      this.$store.dispatch('decrement_displayed_date');
    },
    forwardOneDay: function(){
      this.$store.dispatch('increment_displayed_date');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

  .content {background-color: #ffffff;
            //min-height: auto;
            min-width: 100vw;

      > .inner-content {width: 100vw;
                      margin-top: 1rem;
                      height: auto;
                      height: $content_height;
                      background-color: transparent;
                      min-height: 5rem;
                      margin-left: auto;
                      margin-right: auto;
                      font-size: 0;

      > .calendar {height: $content_height;
              width: 100vw;
              display: inline-block;
              vertical-align: top;
              background-color: transparent;}


            .title {font-size: 2rem;
                    font-weight: 200;
                    padding: 1rem;}

      }
  }


  .calendar {

    > .controls {width: calc(100% - 1rem);
                height: 2rem;
                padding: 0.5rem;
                background-color: #f4f4f4;
                display: flex;
                font-size: 1rem;
                line-height: 2rem;

          > .left {flex:none;}
          > .center {flex:none;}
          > .right {flex:none;}
          > .gap {flex-grow: 2;}
      }

    > .calendar-table {height: calc(#{$content_height} - #{$control-height});
                        width: 100vw;
                        background-color: #fefefe;}

  }
</style>
