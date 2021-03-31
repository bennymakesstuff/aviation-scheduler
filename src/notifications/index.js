// Notification System for Vue

export default {

   // This install function gets triggered when Vue.use() is invoked passing in the plugin.
   install(Vue, options) {

    console.log('Initializing Notifications');

    Vue.prototype.$notey = {

      //The notification Queue
      queue: [],

      // Adds a notification to the queue
      add: function(inboundNotification){
          console.log('Add a Notification');

          let notificationHasAdded = new Promise((resolve,reject) => {

          this.queue.push(inboundNotification);

          if(this.queue[this.queue.length - 1] == inboundNotification){
            resolve(true);
          }
          else{
            reject(false);
          }
        });
        return notificationHasAdded;
      },

      // Flushes all notifications from the queue
      dessimate: function(){
        console.log('Flushed '+this.queue.length+' Notifications');
      },

      // Count all notifications in the queue
      count: function(){
        console.log('There are '+this.queue.length+' in the queue');
      },

    }

     Vue.mixin({
       //This mixin is fired every time a component is created.
        mounted(){
          console.log('Mounted');
        }
      });

   }

}
