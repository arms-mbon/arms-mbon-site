<template>
    <div>
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
                    <template v-for="files in item.files" :key="files.id">
                        <tr @click="showimagee(files.id)">
                            <td>
                                <input type="checkbox" :id='files.id' :name='files.id'>
                            </td>
                            <td>
                                {{item.id}}
                            </td>
                            <td>
                                <a :href="'#' + item.id"><router-link :to='"/event/"+ item.id'>{{item.description}}</router-link></a>
                            </td>
                            <td >
                                {{files.id}}
                            </td>
                            <td>
                                <a :href="'' + files.download_link" target="_blank">{{files.identifier}}</a>
                            </td>
                        </tr>
                        <tr v-if="showimage == files.id">
                            <td colspan="5">
                                <div style = "display: flex;justify-content: center;">
                                    <suspense>
                                        <template #default>
                                            <AsyncImage :imageurl="files.download_link" :imagename="files.identifier" :imageheight="20"></AsyncImage>
                                        </template>
                                        <template #fallback>
                                            <Loading></Loading>
                                        </template>
                                    </suspense>
                                </div>
                            </td>
                        </tr>
                    </template>
                </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import store from '@/store/index'
import Loading from '@/components/Loading.vue'

export default {
    name:"Imagetable",
    data () {
        return {
            showimage:false
        }
    },
    components: {
        AsyncImage: defineAsyncComponent(() => import('@/components/Image.vue')),
        Loading
    },
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
          showimagee(id){
              this.showimage = id;
          }
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
tr:hover {
    background-color:rgb(219, 219, 219);
}
.img {
    height:20vw;
}
</style>