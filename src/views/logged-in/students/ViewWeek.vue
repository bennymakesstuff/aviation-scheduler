<template>
  <div class="calendar-view">
    <div class="title">{{title}}</div>


  </div>
</template>

<script>


export default {
  name: 'view-week',
  data: function(){
    return {
      title: 'View - Week',
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

.calendar-view {width: 100%;
                height: calc(#{$content_height} - #{$control-height});
                background-color: red;

        > .title {padding: 1rem;
                  font-size: 2rem;}
              }
</style>
