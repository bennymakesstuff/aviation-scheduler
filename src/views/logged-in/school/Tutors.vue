<template>
  <div class="content">

    <div class="inner-content">
      <div class="title">{{title}}</div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'tutors',
  data: function(){
    return {
      title: 'Tutors',
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

            .title {font-size: 2rem;
                    font-weight: 200;
                    padding: 1rem;}

      }
  }
</style>
