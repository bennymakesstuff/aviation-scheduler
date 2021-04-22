<template>
  <div class="calendar-view">
    <div class="left">

      <div class="aircraft-details" v-for="aircraft in aircrafts" :key="concat('aircraft',aircraft.id)">
        <div class="plate">{{aircraft.plate}}</div>
        <div class="title">{{aircraft.title}}</div>
      </div>

    </div>
    <div class="right">

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
    concat: function(type, key){
      return type+'-'+key;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';


.calendar-view {width: 100%;
                height: calc(#{$content_height} - #{$control-height});
                background-color: transparent;
                display: grid;
                overflow: hidden;
                min-width: 0;
                grid-template-columns: 15rem auto;

        > .left {grid-column-start: 1;
                grid-column-end: 1;
                grid-row-start: 1;
                grid-row-end: 2;
                border-right: 1px solid #e3e3e3;
                background-color: transparent;}

        > .right {grid-column-start: 2;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 2;
                background-color: transparent;
                overflow: scroll;}
              }

.aircraft-details {width: calc(100% - 1rem);
          height: 1.5rem;
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

.aircraft-bookings:nth-child(odd) {background-color: #d4bdbd;}
.aircraft-bookings {
          height: 2.5rem;
          padding: 0rem;
          width: auto;
          border-bottom: 1px solid #e3e3e3;

          > .time-slot {display: inline-block;
                        height: 2.5rem;
                        min-width: 5rem;
                        vertical-align: top;
                        border-right: 1px solid #e3e3e3;
                      }
        }
</style>
