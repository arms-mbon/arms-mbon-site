import { createStore } from 'vuex'
import sourceData from '@/plutoF.json'
import JSZip from 'jszip'

export default createStore({
  state: {
    alldata:sourceData,
    allevents:[],
    allallevents:[],
    imagedatad:[],
    generalinfoevent:{},
    toservefile:{}
  },
  mutations: { //only synchronous code  
      allEvents(state) {
        if (state.allevents.length == 0 || state.allallevents.length == 0) {
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
          state.allallevents = events
          return events
        }
        return state.allevents
    },
    generalinfo(state, eventid){
      localStorage.setItem('eventid', eventid);
      console.log(eventid);
      for(var i = 0; i < state.alldata.sampling_areas.length; i++) {
        var obj = state.alldata.sampling_areas[i];
        for(var y = 0; y < obj.child_areas.length; y++) {
          var childarea = obj.child_areas[y];
          for(var z = 0; z < childarea.sampling_events.length; z++) {
            var sampling_event = childarea.sampling_events[z];
            if(sampling_event.id == eventid.destinationId){
              state.generalinfoevent = childarea
              return;
            }
          }
        }
      }
    },
    searchevents(state, querydata) {
      localStorage.setItem('querydata', querydata);
      console.log(querydata.queryroute.description);
      var newevents = [];
      if (querydata.queryroute.description == '' || querydata.queryroute.description == null) {
        state.allevents = state.allallevents;
        return state.allevents
      }else{
        for (let i = 0; i < state.allallevents.length; i++) {
          if(state.allallevents[i].description.toLowerCase().includes(querydata.queryroute.description)){
            newevents.push(state.allevents[i])
          }
        }
        state.allevents = newevents;
        return state.allevents
      } 
    },
    globalsearch(state, querydata) {
      localStorage.setItem('querydata', querydata);
      var newevents = [];
      if (querydata.queryroute.globalsearch == '' || querydata.queryroute.globalsearch == null) {
        state.allevents = state.allallevents;
        return state.allevents
      }else{
        for (let i = 0; i < state.allallevents.length; i++) {
          if(state.allallevents[i].description.toLowerCase().includes(querydata.queryroute.globalsearch) ||
             state.allallevents[i].id == querydata.queryroute.globalsearch ||
             state.allallevents[i].nfiles == querydata.queryroute.globalsearch ||
             state.allallevents[i].nseq == querydata.queryroute.globalsearch
          ){
            newevents.push(state.allevents[i])
          }
        }
        state.allevents = newevents;
        return state.allevents
      }
    },
    getimagesdata(state,imagesids){
      localStorage.setItem('imageids', imagesids);
      var images_data = [];
      var tosearchin = "";
      if(state.allevents == '' || state.allevents == null){
        tosearchin = state.allallevents;
      }else{
        tosearchin = state.allevents;
      }
      for (let i = 0; i < imagesids.imagesids.checkedboxes.length; i++) {
        //search all events for the image id
        for (let y = 0; y < tosearchin.length; y++) {
          for (let z = 0; z < tosearchin[y]['files'].length; z++) {
            if(tosearchin[y]['files'][z]['id'] == imagesids.imagesids.checkedboxes[i]){
              images_data.push({'identifier':tosearchin[y].files[z].identifier,'url':tosearchin[y].files[z].download_link})
            }
          }
        }
      }
      console.log(images_data);
      state.imagedatad = images_data
      return state.imagedatad
    },
    addtozipfile(state,file,name){
      let zipfile = state.toservefile;
      zipfile.file(name, file, {binary:true});
    },
    makezip(state){
      state.toservefile = new JSZip();
    }
  },
  actions: { // actions are methods that cant change data in a state but can have ansync code in it
    downloadimagespost(context,imagesids){
      context.commit('getimagesdata', {imagesids})
    },
    addfilezip(context,file,filename){
      context.commit('',{file,filename})
    },
    makezipfile(context){
      context.commit('makezip')
    },
    async sleep(ms){
      console.log('making machine sleep');
      await new Promise(r => setTimeout(r, ms));
      console.log('sleep done');
    }
  },
  modules: {
  },
  getters: {

  }
})
