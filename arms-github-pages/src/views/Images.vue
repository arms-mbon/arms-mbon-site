<template>
<div>
    <br>
    <SearchPage>
        <template v-slot:searchui>
            <h1>To insert search functionality later</h1>
            <button @click="downloadImages" class="btn btn-outline-success">Download Images</button>
        </template>
        <template v-slot:maindata>
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
                                <a :href="'' + files.download_link">{{files.identifier}}</a>
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </template>
    </SearchPage>
    <br>
</div>

</template>

<script>
  import SearchPage from '@/components/SearchPage.vue'
  import store from '@/store/index'
  export default {
    components: {
        SearchPage
    },
    computed: {
          alldata() {
              return store.state.alldata
          },
          allevents() {
              return store.state.allevents
          },
          imagedatad() {
              return store.state.imagedatad
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
          downloadImages() {
              //get all the ticked boxes
              var checkedboxes = []
              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              for (var checkbox of checkboxes) {
                  if(checkbox.checked){
                      checkedboxes.push(checkbox.id);
                  }
              }
              console.log(checkedboxes);
              // store function to get all the image urls with the right names
              store.dispatch('downloadimagespost', {checkedboxes})
              console.log(this.imagedatad);
              for (let index = 0; index < this.imagedatad.length; index++) {
                  console.log(this.imagedatad[index]);
              }
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

<style scoped>
    .thead th{
        position:sticky;
        top: 0 ;
    }
</style>