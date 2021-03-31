<template>
  <div class="">
    <h1>Home</h1>
    <button @click="add">Add Request</button>
    <button @click="flush">Flush</button>
    <button @click="countreq">Count</button>
    <button @click="show">Show Queue</button>
    <button @click="run">Run</button>
    <button @click="processQueue">Process Queue</button>
    <button @click="notify">Notify</button>
    <button @click="notey">Notey</button>
    <div>
      <h1>{{waitStatus}}</h1>
    </div>
  </div>
</template>

<script>
//import API from '@/requests'

export default {
  name: 'home',
  data: function(){
    return {
      waitStatus: 'Ready'
    }
  },
  mounted(){

  },
  computed: {
    promises: function(){
      return this.$store.state.requests;
    }
  },
  methods: {
      add: async function(){
        this.waitStatus = 'Waiting';
        this.$api.request({endpoint:'https://jsonplaceholder.typicode.com/posts'})
          .then((response) => {
            console.log(response);
            this.waitStatus = 'Completed';
          }).catch((error) => {
            this.waitStatus = 'Failed';
            console.log(error);
          })
      },
      run: function(){
        this.$api.start();
      },
      flush: function(){
        this.$api.flush();
      },
      show: function(){
        this.$api.show();
      },
      countreq: function(){
        this.$api.countQueue();
      },
      processQueue: function(){
        this.$api.processQueue();
      },
      notify: function(){
        this.$notey.add()
        .then(() => {
          console.log('SUCCESSFUL NOTFIFICATION PUSH');
        }).catch(() => {
          console.log('FAILED NOTIFICATION PUSH');
        })
      },
      notey: function(){
        this.$store.dispatch('add_notey');
      }

  }
}
</script>

<style lang="scss" scoped>
  h1 {font-size: 2rem;}
</style>
