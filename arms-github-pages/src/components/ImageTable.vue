<template>
    <div style="height: 870px;overflow: scroll;">
        <table class='table table-striped'>
            <thead style="position: sticky;top: 0" class="table-dark">
                <tr>
                    <th>
                        <input type="checkbox" id="allimages" name="allimages" @click="checkallboxes">
                    </th>
                    <th>
                        id event
                    </th>
                    <th>
                        description event
                    </th>
                    <th>
                        id image
                    </th>
                    <th>
                        name image
                    </th>
                </tr>
            </thead>
            <tbody>
            <template v-for="item in allevents">
                <tr v-for="files in item.files" :key="files.id">
                    <td>
                        <input type="checkbox" :id='files.id' :name='files.id'>
                    </td>
                    <td>
                        {{item.id}}
                    </td>
                    <td>
                        <a :href="'#' + item.id"><router-link :to='"/event/"+ item.id'>{{item.description}}</router-link></a>
                    </td>
                    <td>
                        {{files.id}}
                    </td>
                    <td>
                        <a :href="'' + files.download_link" target="_blank">{{files.identifier}}</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import store from '@/store/index'

export default {
    name:"Imagetable",
    computed: {
          alldata() {
              return store.state.alldata
          },
          allevents() {
              return store.state.allevents
          },
      },
      beforeMount() {
          this.getallevents(),
          this.globalsearch(this.$route.query)
      },
      methods: {
          getallevents () {
              store.commit('allEvents')
          },
          globalsearch(queryroute) {
              console.log(queryroute);
              store.commit('globalsearch', {queryroute}) 
              return store.state.allevents
          },
          checkallboxes(){
              //check all checkboxes
              console.log(document.getElementById("allimages").checked);
              var ischecked = document.getElementById("allimages").checked
              
              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              for (var checkbox of checkboxes) {
                  checkbox.checked = ischecked;
              }
          },
      },
      watch: {
            $route() {
                this.globalsearch(this.$route.query)
            }
        }
  }

</script>

<style>
</style>