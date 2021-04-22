<template>
  <div class="calendar-view">
    <div class="left">
      <div class="aircraft-details"></div>
      <div class="aircraft-details" v-for="aircraft in aircrafts" :key="concat('aircraft',aircraft.id)">
        <div class="plate">{{aircraft.plate}}</div>
        <div class="title">{{aircraft.title}}</div>
      </div>

    </div>
    <div class="right">
      <div class="aircraft-bookings">
        <div v-for="(index) in 48" class="time-slot time">{{indexToTime(index)}}</div>
      </div>
      <div class="aircraft-bookings" v-for="aircraft in aircrafts" :key="concat('booking',aircraft.id)">
        <div v-for="(index) in 48" class="time-slot"></div>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'view-day',
  data: function(){
    return {
      title: 'View - Day',
      aircrafts: [
        {title: 'Cessna 172Cessna 172Cessna 172Cessna 172', plate: 'N7835U', id: '1'},
        {title: 'Cherokee 140', plate: 'N6412W', id: '2'},
        {title: 'Piper Arrow', plate: 'N3852T', id: '3'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
      ]
    }
  },
  mounted(){

  },
  computed: {

  },
  methods: {
    indexToTime:function(index){
      let modulus = index % 2;
      if(modulus==1){
        index--;
        let result = index/2;
        if(result<10){
          return '0'+result+':00';
        }
        else{
          return result+':00';
        }
      }
      else{
        if(this.$store.state.user_settings.gui.showHalfHours==true){
          index--;
          let result = (index/2) - 0.5;
          if(result<10){
            return '0'+result+':30';
          }
          else{
            return result+':30';
          }
        }
      }
    },
    concat: function(type, key){
      return type+'-'+key;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

$left_menu_width: 15rem;

.calendar-view {width: 100%;
                height: calc(#{$content_height} - #{$control-height});
                background-color: transparent;
                display: block;
                font-size: 0;
                overflow: hidden;

        > .left {width: $left_menu_width;
                  font-size: 1;
                  display: inline-block;
                  vertical-align: top;
                  height: calc(#{$content_height} - #{$control-height});
                  border-right: 1px solid #e3e3e3;
                  background-color: transparent;}

        > .right {width: calc(100vw - (#{$left_menu_width} + 1px));
                  height: calc(#{$content_height} - #{$control-height});
                  font-size: 1;
                  display: inline-block;
                  vertical-align: top;
                  white-space: nowrap;
                  background-color: transparent;
                  overflow-x: scroll;}
              }

.aircraft-details {width: calc(100% - 1rem);
          height: 1.5rem;
          max-height: 1.5rem;
          padding: 0.5rem;
          border-bottom: 1px solid #e3e3e3;

          > div {display: inline-block;
                height: 1.5rem;
                vertical-align: top;}

          > .title {width: calc(100% - 5rem);
                    font-size: 1rem;
                    max-height: 1.5rem;
                    line-height: 1.7rem;
                    margin-left: 0.25rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;}

          > .plate {font-size: 1rem;
                    color: #356b82;
                    height: calc(1.5rem - 2px);
                    border: 1px solid #356b82;
                    background-color: #ffffff;
                    border-radius: 0.15rem;
                    line-height: 1.6rem;
                    font-weight: 600;
                    letter-spacing: 0.05rem;
                    width: 4.5rem;
                    text-align: center;}
        }

.aircraft-bookings:nth-child(even) {
                > .time-slot {background-color: #fbfbfb;
                              background-color: rgb(150, 164, 148);}
                }

.aircraft-bookings {
          height: calc(2.5rem + 1px);
          padding: 0rem;
          width: auto;
          min-width: 100%;

          > .time-slot {display: inline-block;
                        height: calc(2.5rem + 1px);
                        min-width: 3.5rem;
                        vertical-align: top;
                        border-right: 1px solid #e3e3e3;
                      }
          > .time {font-size: 1rem;
                  line-height: 2.5rem;
                  text-align: center;
                  font-weight: 600;}
        }
</style>
