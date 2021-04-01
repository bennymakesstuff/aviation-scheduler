<template>
  <div class="">
    <h1>Home</h1>
    <div style="margin-bottom: 1rem;">
      <h1>Queues</h1>
      <input type="text" v-model="newQueueName" placeholder="Queue Name"/>
      <button @click="new_queue">New Queue</button>
    </div>
    <div style="margin-bottom: 1rem;">
      <h1>Notes</h1>
      <input type="text" v-model="notificationTitle" placeholder="Notification Title"/>
      <input type="text" v-model="notificationContent" placeholder="Content"/>
      <button @click="add_note">Add Note</button>
    </div>
    <div>
      <h1>Actions</h1>
      <select v-model="selectedQueue">
        <option v-for="queue in queues" :value="queue.queueName">{{queue.title}}</option>
      </select>
      <button @click="dessimate">Dessimate</button>
      <button @click="listTheQueues">List Queues</button>
      <button @click="removeNewest">Delete Newest</button>
      <button @click="removeOldest">Delete Oldest</button>
    </div>

    <div class="notification-area">
      <div class="notification" v-for="note in notes">
        <div class="title">{{note.title}}</div>
        <div class="content">{{note.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
//import API from '@/requests'

export default {
  name: 'home',
  data: function(){
    return {
      waitStatus: 'Ready',
      newQueueName: '',
      selectedQueue: 'default',
      notificationTitle: '',
      notificationContent: '',

    }
  },
  mounted(){

  },
  computed: {
    notes: function(){
      return this.$notey.notes(this.selectedQueue) || null;
    },
    noteCounter: function(){
      return this.$notey.count(this.selectedQueue) || 0;
    },
    queues: function(){
      return this.$notey.listQueues();
    }
  },
  methods: {
      dessimate: function(){
        this.$notey.dessimate(this.selectedQueue);
      },
      add_note: function(){
        this.$notey.add({title:this.notificationTitle, content:this.notificationContent}, this.selectedQueue);
      },
      new_queue: function(){
        let newQueueConfig = {
          title: this.newQueueName,
          notificationTimeout: 5000,
          notifications: []
        };
        this.$notey.newQueue(newQueueConfig);
      },
      listTheQueues: function(){
          console.log(this.$notey.listQueues());
      },
      removeOldest: function(){
        this.$notey.removeOldest(this.selectedQueue);
      },
      removeNewest: function(){
        this.$notey.removeNewest(this.selectedQueue);
      },
  }
}
</script>

<style lang="scss" scoped>
  h1 {font-size: 2rem;}

  @keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

  .notification-area {position: fixed;
                      bottom: 0;
                      right: 0;
                      padding: 0.25rem;
                      background-color: transparent;
                      height: auto;
                      width: 20rem;
                      transition: height 0.4s ease;


                      > .notification {margin: 0.5rem;
                                      background-color: #ffffff;
                                      border-radius: 0.25rem;
                                      box-shadow: 0px 1px 3px 3px rgba(#393939, 0.17);
                                      animation: slide-up 0.4s ease;
                                      transition: position 0.4s ease;

                            > .title {font-weight: bold;
                                      line-height: 0.8rem;
                                      font-size: 0.8rem;
                                      padding: 0.5rem 0.75rem 0.25rem 0.75rem;}

                            > .content {font-weight: 200;
                                        padding: 0rem 0.75rem 0.5rem 0.75rem;;
                                        line-height: 0.8rem;
                                        font-size: 0.8rem;}

                                      }
                    }
</style>
