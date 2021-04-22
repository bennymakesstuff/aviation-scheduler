<template>
  <div class="calendar-view">
    <div class="left">
      <div class="aircraft-details time-row-adjust group-title">Aircraft</div>
      <div class="aircraft-details" v-for="aircraft in aircrafts" :key="concat('aircraft',aircraft.id)">
        <div class="plate">{{aircraft.plate}}</div>
        <div class="title">{{aircraft.title}}</div>
        <div class="border"/>
      </div>

      <div class="aircraft-details time-row-adjust group-title">Tutors</div>
      <div class="tutor-details" v-for="tutor in tutors" :key="concat('tutor',tutor.id)">
        <div class="image"></div>
        <div class="name">{{tutor.firstname+' '+tutor.surname}}</div>
        <div class="border"/>
      </div>

    </div>
    <div class="right">
      <div class="aircraft-bookings time-row">
        <div v-for="(index) in 48" class="time-slot time time-row">{{indexToTime(index)}}</div>
      </div>
      <div class="aircraft-bookings aircraft-rows" v-for="aircraft in aircrafts" :key="concat('booking',aircraft.id)">
        <div v-for="(index) in 48" class="time-slot"></div>
      </div>

      <div class="aircraft-bookings time-row">
        <div v-for="(index) in 48" class="time-slot time time-row">{{indexToTime(index)}}</div>
      </div>
      <div class="aircraft-bookings" v-for="tutor in tutors" :key="concat('tutorbooking',tutor.id)">
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
        {title: 'Cessna 172', plate: 'N7835U', id: '1'},
        {title: 'Cherokee 140', plate: 'N6412W', id: '2'},
        {title: 'Piper Arrow', plate: 'N3852T', id: '3'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
        {title: 'Cessna 172', plate: 'N9042H', id: '4'},
        {title: 'Cherokee 140', plate: 'N6021W', id: '5'},
      ],
      tutors: [
        {firstname: 'Doug', surname: 'Ryan', id: '1'},
        {firstname: 'Benjamin', surname: 'Broad', id: '2'},
        {firstname: 'James', surname: 'Bloggs', id: '3'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Andrew', surname: 'Sandivas', id: '4'},
        {firstname: 'Travis', surname: 'Kandor', id: '5'},
        {firstname: 'Henry', surname: 'Gillman', id: '6'},
      ]
    }
  },
  mounted(){

  },
  computed: {

  },
  methods: {

    loadAirCraftBookingData: function(){

    },

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

.time-row {height: calc(1.5rem + 2px) !important;
          line-height: 1.7rem !important;
          padding: 0 !important;

          .time-slot {border-top: 1px solid #333333;}
          }

.time-row-adjust {height: calc(1.5rem + 1px) !important;
          line-height: 1.5rem !important;
          padding: 0rem 0.5rem !important;
          border-top: 1px solid #333333;
        }

.group-title {font-size: 1.2rem;
              font-weight: 600;
              line-height: 1.5rem !important;
              text-align: center;
              color: #7c7c7c;}

.aircraft-rows:last-child > .time-slot {height: calc(2.5rem + 2px);}

.calendar-view {width: 100%;
                height: calc(#{$content_height} - #{$control-height});
                background-color: transparent;
                display: block;
                font-size: 0;
                overflow-x: hidden;
                overflow-y: scroll;

        > .left {width: $left_menu_width;
                  font-size: 1;
                  display: inline-block;
                  vertical-align: top;
                  height: calc(#{$content_height} - #{$control-height});
                  border-right: 1px solid #e3e3e3;
                  background-color: transparent;}

        > .right {width: calc(100vw - (#{$left_menu_width} + 1px));
                  min-height: calc(#{$content_height} - #{$control-height});
                  font-size: 1;
                  display: inline-block;
                  vertical-align: top;
                  white-space: nowrap;
                  background-color: #e7e7e7;
                  overflow-x: scroll;
                  overflow-y: visible;}
              }

.aircraft-details {width: calc(100% - 1rem);
          height: 1.5rem;
          max-height: 1.5rem;
          padding: 0.5rem;
          border-bottom: 1px solid #e3e3e3;
          position: relative;

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

          > .border {width: 1px;
                    height: calc(2.5rem + 1px);
                    top: -1px;
                    right: -1px;
                    position: absolute;
                    background-color: #e3e3e3;
                    }
        }

.aircraft-bookings:nth-child(even) {
                > .time-slot {background-color: #f1f1f1;}
                }
.aircraft-bookings:nth-child(odd) {
                > .time-slot {background-color: #ffffff;}
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



.tutor-details {width: calc(100% - 1rem);
          height: 1.5rem;
          max-height: 1.5rem;
          padding: 0.5rem;
          border-bottom: 1px solid #e3e3e3;
          position: relative;

          > div {display: inline-block;
                height: 1.5rem;
                vertical-align: top;}

          > .name {width: calc(100% - 5rem);
                    font-size: 1rem;
                    max-height: 1.5rem;
                    line-height: 1.7rem;
                    margin-left: 0.25rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;}

          > .image {font-size: 1rem;
                    color: #356b82;
                    height: 1.8rem;
                    background-color: #ffffff;
                    border-radius: 1rem;
                    line-height: 1.6rem;
                    font-weight: 600;
                    letter-spacing: 0.05rem;
                    width: 1.8rem;
                    margin-top: -0.2rem;
                    background-color: #e3e3e3;
                    text-align: center;}

          > .border {width: 1px;
                    height: calc(2.5rem + 1px);
                    top: -1px;
                    right: -1px;
                    position: absolute;
                    background-color: #e3e3e3;
                    }
        }
</style>
