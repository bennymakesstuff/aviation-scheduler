import Vue from 'vue';
// Notification System for Vue

// The Store that appends to the Global Vuex Store
// The Notification Queue acts in a first in last out fashion
// There might be a potential for it to act in a first in first out fashion by option.

// The Notification Queue can have multiple notification queues and that can all opperate individually.
const convertToQueueName = function(nameToConvert){
  return nameToConvert.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
}

let noteyStore = Vue.observable({

  namespaced: true,

  state: () => ({
    queues: {
      // Queues contains a "default" queue, by default. More can be added.
      // Default is required for it to function on the beginning.
      default: {
        title: 'Default',
        queueName: 'default',
        notificationTimeout: 2000,
        notifications: []
      }
    }
  }),


  getters: {

    returnQueue: state => queueToUse => {
      return state.queues[queueToUse].notifications;
    },

    countQueue: state => queueToUse => {
      return state.queues[queueToUse].notifications.length;
    },

    checkQueueTitleExisits: (state) => (newQueueTitle) => {
      return (!state.queues.hasOwnProperty(newQueueTitle)) ? true : false;
    },

    listQueues: (state) => {
      let queues = [];
      for (var prop in state.queues) {
          //if (Object.prototype.hasOwnProperty.call(state.queues, prop)) {
              queues.push(state.queues[prop]);
        //  }
      }
      return queues;
    }

  },


  // The reason for default values on the parameters here as well as actions is so that if someone chooses to
  // call a mutation from somewhere other than this module, the defaults are still used when needed.
  mutations: {
    ADD_NOTE (state, notificationData){
      console.log(notificationData.note);
      console.log(notificationData.queueToUse);
      state.queues[notificationData.queueToUse].notifications.push(notificationData.note);
    },

    DESSIMATE_LIST (state, queueToUse = 'default'){
      state.queues[queueToUse].notifications = [];
    },

    DELETE_LAST (state, queueToUse = 'default'){
      state.queues[queueToUse].notifications.pop();
    },

    DELETE_FIRST (state, queueToUse = 'default'){
      state.queues[queueToUse].notifications.shift();
    },

    NEW_QUEUE (state, newQueueConfig){
      // Need to add a function to check for queue title clashes
      newQueueConfig['queueName'] = convertToQueueName(newQueueConfig.title);

      Vue.set(state.queues, newQueueConfig.queueName, newQueueConfig);
      console.log(state.queues);
    }
  },



  actions: {
    // Add a new note to a queue
    add(context, notificationData) {
      console.log('QUEUE: '+notificationData.queueToUse);
      context.commit('ADD_NOTE', notificationData);
      //context.commit('ADD_NOTE', noteData, queueToUse);
    },
    create_note(context, noteData, queueToUse){
      context.commit('ADD_NOTE', noteData, queueToUse);
    },

    // Delete the most recently created note in a queue
    delete_newest(context, queueToUse = 'default') {
      context.commit('DELETE_LAST', queueToUse);
    },

    // Delete the oldest note in a queue
    delete_oldest(context, queueToUse = 'default') {
      context.commit('DELETE_FIRST', queueToUse);
    },

    //Adds a new notification queue to the application
    new_queue({getters, state, context, dispatch}, newQueueConfig) {

      // Check for queue data and queue title clashes
      if(newQueueConfig!=null&&newQueueConfig.title!=null&&getters.checkQueueTitleExisits){

        // Had to dispatch to create_queue here as context kept returning undefined so I could not commit here for some reason
        // Possible fix required.
        dispatch('create_queue',newQueueConfig);
      }
      else{
        console.log('Failed to create new queue');
      }
    },

    // Helper function for the above new_queue function - may be dissolved once above problem is solved.
    create_queue(context, newQueueConfig){
      console.log(newQueueConfig);
      context.commit('NEW_QUEUE', newQueueConfig);
    },

    // Flush a notification queue
    dessimate(context, queueToUse = 'default') {
      context.commit('DESSIMATE_LIST', queueToUse);
    }
  },
});



// The Notey Object
let notey = {

   // This install function gets triggered when Vue.use() is invoked passing in the plugin.
   install(Vue, store) {

    Vue.prototype.$notey = {

      // Vuex Store for Notifications Module
      // You must add Notifications to Module
      store: store,

      // Return the number of notifications in a queue
      count: function(queueToUse = 'default'){
        return this.store.getters['notey/countQueue'](queueToUse);
      },

      // Return the notifications in a queue
      notes: function(queueToUse = 'default'){
        return this.store.getters['notey/returnQueue'](queueToUse);
      },

      // Lists the Queues available
      listQueues: function(){
        return this.store.getters['notey/listQueues'];
      },

      // Adds a notification to a queue
      add: function(notification, queueToUse = 'default'){
        console.log('Add a Notification to ' + queueToUse + ' queue.');
        //notification = {test: 'Test'};
        this.store.dispatch('notey/add', {note:notification, queueToUse:queueToUse});
      },

      // Creates a New Queue
      newQueue: function(newQueueConfig = null){
        this.store.dispatch('notey/new_queue', newQueueConfig);
      },

      // Flushes all notifications from a queue
      dessimate: function(queueToUse = 'default'){
        this.store.dispatch('notey/dessimate', queueToUse);
      },

      // Removes the most recent notification from a queue
      removeNewest: function(queueToUse = 'default'){
        this.store.dispatch('notey/delete_newest', queueToUse);
      },

      // Removes the oldest notification from a queue
      removeOldest: function(queueToUse = 'default'){
        this.store.dispatch('notey/delete_oldest', queueToUse);
      },

    }


    // Don't think this code is necessary at this stage.
     Vue.mixin({
       //This mixin is fired every time a component is created.
        mounted(){
          console.log('Mounted');
        }
      });

   }

}


export {
  noteyStore,
  notey
}
