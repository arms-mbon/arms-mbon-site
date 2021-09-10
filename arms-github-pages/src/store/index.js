import { createStore } from 'vuex'
import sourceData from '@/plutoF.json'

export default createStore({
  state: {
    alldata:sourceData,
    allevents:[],
  },
  mutations: { //only synchronous code  
      allEvents(state) {
        if (state.allevents.length === 0) {
          //  block of code to be executed if the condition is true
          const events = [];
          for(var i = 0; i < state.alldata.sampling_areas.length; i++) {
              var obj = state.alldata.sampling_areas[i];
              for(var y = 0; y < obj.child_areas.length; y++) {
                  var childarea = obj.child_areas[y];
                  for(var z = 0; z < childarea.sampling_events.length; z++) {
                      var sampling_event = childarea.sampling_events[z];
                      const currevent = {
                          'id': sampling_event.id,
                          'begin': sampling_event.timespan_begin,
                          'end': sampling_event.timespan_end,
                          'nfiles': sampling_event.files.length,
                          'nseq': sampling_event.sequences.length,
                          'description':sampling_event.description,
                          'files': sampling_event.files,
                          'sequences': sampling_event.sequences,
                          'habitat': sampling_event.habitat,
                          'observations': sampling_event.observations
                      }
                      events.push(currevent);
                  }
              }
          }
          state.allevents = events
          return events
        }
        return state.allevents
        
    }
  },
  actions: { // actions are methods that cant change data in a state but can have ansync code in it
  },
  modules: {
  },
  getters: {

  }
})